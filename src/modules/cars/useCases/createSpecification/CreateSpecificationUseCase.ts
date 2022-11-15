import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private spesificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.spesificationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.spesificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
