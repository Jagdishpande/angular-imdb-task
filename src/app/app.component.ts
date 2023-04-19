import { Component } from '@angular/core';
import { movieArr } from './const/moviearr';
import { Imoviearr } from './model/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgBaseurl=`https://image.tmdb.org/t/p/w1280/`;
  searchByValue!:string;
  title = 'imdbmoviestask';
  moviearry:Imoviearr[]=movieArr
}
