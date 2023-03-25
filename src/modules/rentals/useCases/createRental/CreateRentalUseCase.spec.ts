import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateRentalUseCases } from "./CreateRentalUseCases";

let createRentalUseCases: CreateRentalUseCases;
let rentalsRepositoryInMemory: RentalsRepositoryInMemory;

describe("Create Rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCases = new CreateRentalUseCases(rentalsRepositoryInMemory);
  });

  it("should be able to create a new rentall", async () => {
    const rental = await createRentalUseCases.execute({
      user_id: "123456",
      car_id: "121212",
      expected_return_date: new Date(),
    });

    console.log(rental);

    expect(rental).toHaveProperty("id");
    // expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if there is another open to the sameuser", async () => {
    expect(async () => {
      await createRentalUseCases.execute({
        user_id: "1234356",
        car_id: "121212",
        expected_return_date: new Date(),
      });

      await createRentalUseCases.execute({
        user_id: "123456",
        car_id: "121212",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if there is another open to the same car", async () => {
    expect(async () => {
      await createRentalUseCases.execute({
        user_id: "123",
        car_id: "121212",
        expected_return_date: new Date(),
      });

      await createRentalUseCases.execute({
        user_id: "123",
        car_id: "121212",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
