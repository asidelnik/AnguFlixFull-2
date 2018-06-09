import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { PrivateMoviesComponent } from './private-movies/private-movies.component';
import { MovieComponent } from './movie/movie.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BudgetComponent } from './budget/budget.component';
import { MoviesService } from './movies.service';
import { UserService } from './user.service';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PrivateCountComponent } from './private-count/private-count.component';


@NgModule({
    declarations: [
        AppComponent,
        AllMoviesComponent,
        PrivateMoviesComponent,
        MovieComponent,
        SearchBarComponent,
        BudgetComponent,
        FilterPipe,
        MovieInfoComponent,
        NavBarComponent,
        PrivateCountComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        AppRoutingModule
    ],
    providers: [MoviesService, UserService],
    bootstrap: [AppComponent]
})
export class AppModule { }
