import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
//Osserva gli eventi sulla route artists, restituisce la ParamMap che contiene tutti i   
  //parametri passati all’url
  routeObs: Observable<ParamMap>;
  spotifyServiceObs : Observable<Object>;

  artist: any; //Qui salverò la traccia selezionata

  //Usiamo la dependency injection per farci mandare i moduli del routing e dello    
  //SpotifyService
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpotifyService) { }


  ngOnInit(): void {
    //Ottengo l'observable che notifica le informazioni sulla route attiva
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  //Ogni volta che viene invocata la route artists/:id, l'observable richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let artistId = params.get('id'); //Ottengo l'id dai parametri
    console.log (artistId); //Stampo su console
    //spotifyServiceObs va dichiarato
    this.spotifyServiceObs = this.service.getArtist(artistId) ;
    this.spotifyServiceObs.subscribe((data)=>(this.artist = data,console.log(data)))
  }

  back() {//DA FINIRE }

  }
}
