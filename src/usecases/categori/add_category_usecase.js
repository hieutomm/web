export default class AddCategoryUseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(data) {
    return await this.repository.addCategory(data);
  }
}
