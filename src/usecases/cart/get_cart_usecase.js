// usecases/cart/GetCartUseCase.js

// export default class GetCartUseCase {
//   constructor(cartRepository) {
//     this.cartRepository = cartRepository;
//   }

//   async execute(token) {
//     try {
//       if (!token) {
//         throw new Error('NO_TOKEN');
//       }

//       const cart = await this.cartRepository.getCart(token);
//       return cart;
//     } catch (error) {
//       console.error("GetCartUseCase Error:", error);
//       throw error;
//     }
//   }
// }

// src/usecases/cart/get_cart_usecase.js

import BookRepository from '../../infrastructure/repositories/book_repository';

export default class GetCartUseCase {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
    this.bookRepository = new BookRepository();
  }

  async execute(token) {
    try {
      if (!token) {
        throw new Error('NO_TOKEN');
      }

      console.log('🛒 Fetching cart from API...');
      
      // 1. Get cart từ backend (items chỉ có bookId, không có bookName, bookImage)
      const cartData = await this.cartRepository.getCart(token);
      
      console.log('📦 Cart data:', cartData);
      console.log('📦 Items count:', cartData.items?.length || 0);

      // 2. Nếu không có items, trả về luôn
      if (!cartData.items || cartData.items.length === 0) {
        return {
          ...cartData,
          items: []
        };
      }

      // 3. Fetch book details cho từng item
      console.log('🔍 Fetching book details for items...');
      
      const itemsWithDetails = await Promise.all(
        cartData.items.map(async (item) => {
          try {
            console.log(`📖 Fetching book details for bookId: ${item.bookId}`);
            
            const bookData = await this.bookRepository.getBookById(item.bookId);
            
            console.log(`✅ Book fetched: ${bookData.name}`);
            
            return {
              ...item,
              bookName: bookData.name,
              bookImage: bookData.images?.[0]?.baseUrl,
              bookSlug: bookData.slug,
              originalPrice: bookData.originalPrice
            };
          } catch (err) {
            console.error(`❌ Error fetching book ${item.bookId}:`, err);
            return {
              ...item,
              bookName: 'Đang tải...',
              bookImage: null
            };
          }
        })
      );

      console.log('✅ All book details fetched');

      return {
        cartId: cartData.cartId,
        userId: cartData.userId,
        items: itemsWithDetails,
        createdAt: cartData.createdAt,
        updatedAt: cartData.updatedAt
      };

    } catch (error) {
      console.error("❌ GetCartUseCase Error:", error);
      throw error;
    }
  }
}