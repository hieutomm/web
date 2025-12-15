export default class GetBookDetailUseCase {
  constructor(bookRepository) {
    this.bookRepository = bookRepository;
  }

  async execute(bookId) {
    return await this.bookRepository.getBookById(bookId);
  }
}