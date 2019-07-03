import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "this is just a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPec25YN_TNW8TBygbqephfHZ6bR5sQDIJ-o28riJ19EvTTkjCOQ"
    ),
    new Recipe(
      "A test recipe",
      "this is just a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPec25YN_TNW8TBygbqephfHZ6bR5sQDIJ-o28riJ19EvTTkjCOQ"
    )
  ];
  constructor() {}

  addRecipe() {}

  ngOnInit() {}
}
