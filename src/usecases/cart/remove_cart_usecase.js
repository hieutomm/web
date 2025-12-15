// usecases/cart/RemoveCartItemUseCase.js

export default class RemoveCartItemUseCase {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(token, cartItemId) {
    try {
      if (!token) {
        throw new Error('UNAUTHORIZED');
      }

      await this.cartRepository.removeCartItem(token, cartItemId);
      return { success: true };
    } catch (error) {
      console.error("RemoveCartItemUseCase Error:", error);
      throw error;
    }
  }
}