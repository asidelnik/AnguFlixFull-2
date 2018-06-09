import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AllMoviesComponent } from './all-movies/all-movies.component';
import { PrivateMoviesComponent } from './private-movies/private-movies.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';


const routes: Routes = [
    { path: '', component: AllMoviesComponent },
    { path: 'private-movies', component: PrivateMoviesComponent },
    { path: 'movie-info/:id', component: MovieInfoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }



