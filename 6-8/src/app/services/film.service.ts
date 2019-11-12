  
import { Injectable } from '@angular/core';
import { Film } from '../model/film';
import { FILMSLIST } from '../model/FILMSLIST';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  films: Film[];

  constructor() {
    this.films = FILMSLIST;
  }

  getFilms(): Film[] {
    return this.films;
  }

  getFilm(title: string): Film {
    return this.films.filter(f => f.title == title)[0];
  }

  deleteFilm(title: string){
    return this.films = this.films.filter(f => f.title != title);
  }
}