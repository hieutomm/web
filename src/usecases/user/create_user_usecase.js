export default class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async execute(userData) {
        return await this.userRepository.create(userData);
    }
}
