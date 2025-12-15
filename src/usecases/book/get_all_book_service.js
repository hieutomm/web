
export default class GetAllBooksUseCase {
  constructor(bookRepository) {
    this.bookRepository =  bookRepository;
  }

  async execute() {
    try {
      return await this.bookRepository.getBooks();
    } catch (error) {
      console.error("GetAllBooksUseCase Error:", error);
      throw error;
    }
  }
}