export default class DeleteCategoryUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id) {
    return await this.repository.deleteCategory(id);
  }
}
