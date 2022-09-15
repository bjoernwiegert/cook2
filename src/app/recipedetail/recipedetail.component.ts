import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'cb-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss'],
  providers: [RecipeService]
})
export class RecipedetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
