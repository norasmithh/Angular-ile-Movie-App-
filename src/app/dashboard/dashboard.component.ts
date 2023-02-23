import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movies/movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
movies: Movie[] = [];
movieLenght!: number;
constructor(private movieService: MovieService){}

ngOnInit(): void {
this.getMovies();
  
}

getMovies(): void {
  this.movieService.getMovies()
    .subscribe(movies => {
      this.movies = movies.slice(0,5);
      this.movieLenght = movies.length;
    })
}
}
