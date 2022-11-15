import { Specification } from "../model/Specification";

interface IcreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: IcreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, IcreateSpecificationDTO };
