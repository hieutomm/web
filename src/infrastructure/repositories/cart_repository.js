// infrastructure/repositories/cart_repository.js

const API_BASE_URL = 'http://localhost:8080/api';

export const cartRepository = {
  async getCart(token) {
    const response = await fetch(`${API_BASE_URL}/cart`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('UNAUTHORIZED');
      }
      throw new Error('Failed to fetch cart');
    }

    return response.json();
  },

  // async addToCart(token, bookId, sellerId, quantity, price) {
  //   const response = await fetch(`${API_BASE_URL}/cart/add`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${token}`
  //     },
  //     body: JSON.stringify({ bookId, sellerId, quantity, price })
  //   });

  //   if (!response.ok) {
  //     if (response.status === 401) {
  //       throw new Error('UNAUTHORIZED');
  //     }
  //     throw new Error('Failed to add to cart');
  //   }

  //   return response.json();
  // },

async addToCart(token, bookId, sellerId, quantity, price) {
    console.log('🔍 Request data:', { token, bookId, sellerId, quantity, price });
    
    const response = await fetch(`${API_BASE_URL}/cart/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ token,bookId, sellerId, quantity, price })
    });

    console.log('📦 Response status:', response.status);
    console.log('📦 Response ok:', response.ok);

    if (!response.ok) {
      // ✅ THÊM PHẦN NÀY ĐỂ XEM CHI TIẾT LỖI
      const errorText = await response.text();
      console.error('❌ Error response:', errorText);
      
      if (response.status === 401) {
        throw new Error('UNAUTHORIZED');
      }
      
      // Throw error với message cụ thể
      throw new Error(`Failed to add to cart: ${response.status} - ${errorText}`);
    }

    return response.json();
  },

async updateCartItem(token, cartItemId, quantity) {
    console.log(`🔄 API call: PUT /cart/items/${cartItemId} with quantity: ${quantity}`);
    
    const response = await fetch(`${API_BASE_URL}/cart/items/${cartItemId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ quantity })
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('❌ API Error:', error);
      throw new Error('Failed to update cart item');
    }

    // Return empty if 204 No Content
    if (response.status === 204) {
      return { success: true };
    }

    return await response.json();
  },

  async removeCartItem(token, cartItemId) {
    const response = await fetch(`${API_BASE_URL}/cart/remove/${cartItemId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('UNAUTHORIZED');
      }
      throw new Error('Failed to remove item');
    }
  },

  async clearCart(token) {
    const response = await fetch(`${API_BASE_URL}/cart/clear`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('UNAUTHORIZED');
      }
      throw new Error('Failed to clear cart');
    }
  }
};