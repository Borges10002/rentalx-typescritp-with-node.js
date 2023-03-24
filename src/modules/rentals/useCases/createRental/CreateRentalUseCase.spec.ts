import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCases } from "./CreateRentalUseCases";

let createRentalUseCases: CreateRentalUseCases;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCases = new CreateRentalUseCases(rentalsRepositoryInMemory);
  });

  it("should be able to create a new rentall", async () => {
    await createRentalUseCases.execute({
      user_id: "123456",
      car_id: "121212",
      expected_return_date: new Date(),
    });
  });
});
