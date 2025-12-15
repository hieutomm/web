// usecases/cart/ClearCartUseCase.js

export default class ClearCartUseCase {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(token) {
    try {
      if (!token) {
        throw new Error('UNAUTHORIZED');
      }

      await this.cartRepository.clearCart(token);
      return { success: true };
    } catch (error) {
      console.error("ClearCartUseCase Error:", error);
      throw error;
    }
  }
}
