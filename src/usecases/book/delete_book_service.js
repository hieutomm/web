export default class DeleteBookUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(id) {
    try {
      return await this.bookRepository.deleteBook(id);
    } catch (error) {
      console.error("DeleteBookUseCase Error:", error);
      throw error;
    }
  }
}
