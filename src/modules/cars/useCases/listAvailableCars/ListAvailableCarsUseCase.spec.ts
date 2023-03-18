import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "audi 01",
      description: "Carro com spaco",
      daily_rate: 140.0,
      license_plate: "EFG-1234",
      fine_amount: 100,
      brand: "Car_brand",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "audi 02",
      description: "Carro com spaco",
      daily_rate: 140.0,
      license_plate: "EFG-1234",
      fine_amount: 100,
      brand: "Car_brand2",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({ brand: "Car_brand" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "audi100",
      description: "Carro description",
      daily_rate: 180.0,
      license_plate: "EFG-77855",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "category_id",
    });

    const cars = await listAvailableCarsUseCase.execute({ name: "audi100" });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "audi100",
      description: "Carro description",
      daily_rate: 180.0,
      license_plate: "EFG-1000",
      fine_amount: 40,
      brand: "Car_brand_test",
      category_id: "13456",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "13456",
    });

    expect(cars).toEqual([car]);
  });
});
