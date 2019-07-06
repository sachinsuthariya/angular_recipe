import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  // recipeSelect = new EventEmitter<tring>();
  private recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "this is just a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPec25YN_TNW8TBygbqephfHZ6bR5sQDIJ-o28riJ19EvTTkjCOQ",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "A another recipe",
      "this is just a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPec25YN_TNW8TBygbqephfHZ6bR5sQDIJ-o28riJ19EvTTkjCOQ",
      [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
    )
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
