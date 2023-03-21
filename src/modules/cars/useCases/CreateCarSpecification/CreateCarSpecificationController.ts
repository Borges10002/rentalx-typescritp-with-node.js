import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { speficications_id } = request.body;

    console.log(speficications_id);

    const createCarSpecificationUseCase = container.resolve(
      CreateCarSpecificationUseCase
    );

    const cars = await createCarSpecificationUseCase.execute({
      car_id: id,
      speficications_id,
    });

    return response.json(cars);
  }
}

export { CreateCarSpecificationController };
