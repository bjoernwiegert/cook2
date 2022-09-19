import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe';
import { RecipeService } from '../recipe.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cb-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  pageTitle: string = 'Recipes List'
  imageWidth: number = 70;
  imageMargin: number = 2;
  showImage: boolean = false;
  sub!:Subscription
  recipes: IRecipe[] = [];
  private _listFilter: string = '';
  filteredRecipes: IRecipe[] = [];

  get listFilter(): string {
    return this._listFilter
  }

  set listFilter(value: string) {
    this._listFilter = value;
   // console.log('var inside my setter:', value)
   this.filteredRecipes = this.performFilter();
  }

  performFilter(): IRecipe[]{
    return this.recipes.filter((recipe: IRecipe) =>
    recipe.name.toLocaleLowerCase().includes(this.listFilter))
  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  deleteEntry(receipeID: number): void {
    //console.log(receipeID)
    let array_id  = this.filteredRecipes.findIndex(x => x.recipeId == receipeID)
    this.filteredRecipes.splice(array_id, 1 )
  }
  onSubmit(event: any): void {
    let newid = 0
    this.filteredRecipes.forEach(function (receipe) {
    if(newid<receipe.recipeId) newid=receipe.recipeId
    })
    newid += 1
    let newRecipe = {"recipeId":newid, 
                     "name":event.target.newrecipe.value,
                     "description":event.target.newdescription.value,
                     "rating":event.target.newrating.value,
                     "done":event.target.newdone.value,
                     "imageUrl":"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8"
                    }
    this.filteredRecipes.push(newRecipe)         
  }

  ngOnInit(): void {
    this.sub=this.recipeService.getRecipes().subscribe({
      next: recipes => {
        this.recipes= recipes;
        this.filteredRecipes = this.recipes;
      }
    });
  }

}
