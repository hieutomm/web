export default class GetBookByIdUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(id) {
    try {
      return await this.bookRepository.getBookById(id);
    } catch (error) {
      console.error("GetBookByIdUseCase Error:", error);
      throw error;
    }
  }
}
