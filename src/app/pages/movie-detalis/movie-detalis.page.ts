import { environment } from 'src/environments/environment';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie-detalis',
  templateUrl: './movie-detalis.page.html',
  styleUrls: ['./movie-detalis.page.scss'],
})
export class MovieDetalisPage implements OnInit {
  movie =null;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getTopRatedDetalis(id).subscribe((res)=>{
      console.log(id);
      this.movie=res;
    })

  }
  openHomepage(){
    window.open(this.movie.homepage);
  }
}
