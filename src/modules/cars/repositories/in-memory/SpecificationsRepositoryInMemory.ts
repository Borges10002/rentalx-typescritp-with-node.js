import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import {
  IcreateSpecificationDTO,
  ISpecificationsRepository,
} from "../ISpecificationsRepository";

class SpecificationsRepositoryInMemory implements ISpecificationsRepository {
  specifications: Specification[] = [];

  async create({
    description,
    name,
  }: IcreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification();

    Object.assign(specification, {
      description,
      name,
    });

    this.specifications.push(specification);

    return specification;
  }
  async findByName(name: string): Promise<Specification | undefined> {
    const specificationFound = await this.specifications.find(
      (specification) => specification.name === name
    );
    if (specificationFound) {
      return specificationFound;
    }
    return undefined;
  }
  async findByIds(ids: string[]): Promise<Specification[] | undefined> {
    const allSpecifications = this.specifications.filter((specification) =>
      ids.includes(String(specification.id))
    );

    return allSpecifications;
  }
}

export { SpecificationsRepositoryInMemory };
