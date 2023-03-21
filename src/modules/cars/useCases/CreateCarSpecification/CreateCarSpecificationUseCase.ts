import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  car_id: string;
  speficications_id: string[];
}

@injectable()
class CreateCarSpecificationUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,

    @inject("SpecificationsRepository")
    private speficicationRepository: ISpecificationsRepository
  ) {}
  async execute({ car_id, speficications_id }: IRequest): Promise<Car> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exists!");
    }

    const spefications = await this.speficicationRepository.findByIds(
      speficications_id
    );

    carExists.specifications = spefications;

    await this.carsRepository.create(carExists);

    return carExists;
  }
}

export { CreateCarSpecificationUseCase };
