// usecases/cart/AddToCartUseCase.js

export default class AddToCartUseCase {
  constructor(cartRepository) {
    this.cartRepository = cartRepository;
  }

  async execute(token, bookId, sellerId, quantity, price) {
    try {
      if (!token) {
        throw new Error('UNAUTHORIZED');
      }

      const result = await this.cartRepository.addToCart(
        token,
        bookId,
        sellerId,
        quantity,
        price
      );

      return result;
    } catch (error) {
      console.error("AddToCartUseCase Error:", error);
      throw error;
    }
  }
}