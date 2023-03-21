import { getRepository, Repository } from "typeorm";

import {
  IcreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";

import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    description,
    name,
  }: IcreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);

    return specification;
  }

  async findByName(name: string): Promise<Specification | undefined> {
    const specification = await this.repository.findOne({
      name,
    });

    return specification;
  }

  async findByIds(ids: string[]): Promise<Specification[] | undefined> {
    const specifications = await this.repository.findByIds(ids);
    return specifications;
  }
}

export { SpecificationsRepository };
