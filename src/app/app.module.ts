import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: 'movies', component: MoviesListComponent},
  {path: 'movies/review/:id', component: AddReviewComponent},
  {path: 'movies/:id', component: MovieComponent},
  {path: 'login', component: LoginComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieComponent,
    AddReviewComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
