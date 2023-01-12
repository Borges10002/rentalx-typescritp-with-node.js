import { Category } from "../../model/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  
  execute(): Category[] {
    const categories = this.categoriesRepository.list();

    console.log("teste");

    return categories;
  }
}

export { ListCategoriesUseCase };
