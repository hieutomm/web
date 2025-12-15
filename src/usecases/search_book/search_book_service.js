export default class SearchBooksUseCase {
    constructor(bookRepository) {
        this.bookRepository = bookRepository;
    }

    async execute(keyword) {
        return await this.bookRepository.searchBooks(keyword);
    }
}
