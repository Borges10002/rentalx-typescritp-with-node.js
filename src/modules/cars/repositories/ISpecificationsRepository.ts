import { Specification } from "../infra/typeorm/entities/Specification";

interface IcreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: IcreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ISpecificationsRepository, IcreateSpecificationDTO };
