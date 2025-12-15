export default class CreateBookService {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(input) {
    try {
      return await this.bookRepository.createBook(input);
    } catch (error) {
      console.error("CreateBookUseCase Error:", error);
      throw error;
    }
  }
}
