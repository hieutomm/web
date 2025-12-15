export default class UpdateCategoryUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(id, data) {
    return await this.repository.updateCategory(id, data);
  }
}
