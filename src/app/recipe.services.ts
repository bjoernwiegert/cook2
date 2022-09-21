import { Injectable } from "@angular/core";
import { IRecipe } from "./recipe/recipe";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, tap, catchError, throwError } from "rxjs";

@Injectable(
    {
    providedIn: 'root'
    }
)
export class RecipeService{ 
    recipeURL = 'app/recipe/recipes.json'


    constructor(
        private http: HttpClient
    ){}

    getRecipes(): Observable<IRecipe[]> {
       return this.http.get<IRecipe[]>(this.recipeURL).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
       );
    }

    private handleError(err: HttpErrorResponse): Observable<never> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(() => errorMessage);
      }
}