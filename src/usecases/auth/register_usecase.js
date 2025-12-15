export default class RegisterUseCase {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async execute(userData) {
    return await this.authRepository.register(userData);
  }
}
