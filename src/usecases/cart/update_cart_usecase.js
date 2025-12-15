// src/usecases/cart/update_cart_usecase.js

export default class UpdateCartItemUseCase {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(token, cartItemId, quantity) {
    try {
      if (!token) {
        throw new Error('UNAUTHORIZED');
      }

      if (quantity < 1) {
        throw new Error('Số lượng phải lớn hơn 0');
      }

      console.log(`🔄 Updating cartItemId: ${cartItemId} to quantity: ${quantity}`);

      const result = await this.cartRepository.updateCartItem(
        token,
        cartItemId,
        quantity
      );

      console.log('✅ Update successful');
      return result;

    } catch (error) {
      console.error("❌ UpdateCartItemUseCase Error:", error);
      throw error;
    }
  }
}