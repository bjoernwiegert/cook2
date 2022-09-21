import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import { HomeComponent } from './home/home.component';
import { RecipeService } from './recipe.services';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipedetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'recipes', component: RecipeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'recipes/:id', component: RecipedetailComponent}
    ]),
 //   RecipeService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
