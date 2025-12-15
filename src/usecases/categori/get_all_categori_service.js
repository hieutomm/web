export default class GetAllCategoriesUseCase {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    async execute() {
        return await this.categoryRepository.getAllCategories();
    }
}
