import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // recipeSelect = new EventEmitter<tring>();
  // 

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     "A test recipe",
  //     "this is just a test",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPec25YN_TNW8TBygbqephfHZ6bR5sQDIJ-o28riJ19EvTTkjCOQ",
  //     [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
  //   ),
  //   new Recipe(
  //     "A another recipe",
  //     "this is just a test",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPec25YN_TNW8TBygbqephfHZ6bR5sQDIJ-o28riJ19EvTTkjCOQ",
  //     [new Ingredient("Buns", 2), new Ingredient("Meat", 1)]
  //   )
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) { }
  getRecipes() {
    return this.recipes.slice();
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
