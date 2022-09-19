import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'cb-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss'],
  providers: [RecipeService]
})
export class RecipedetailComponent implements OnInit {
 
  private _recipeService: any;

  constructor(recipeService: RecipeService) {
      this._recipeService = recipeService;
   }

  ngOnInit(): void {
  }

}
