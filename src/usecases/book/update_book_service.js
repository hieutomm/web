export default class UpdateBookUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(id, input) {
    try {
      return await this.bookRepository.updateBook(id, input);
    } catch (error) {
      console.error("UpdateBookUseCase Error:", error);
      throw error;
    }
  }
}
