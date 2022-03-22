import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDeCREbA9mJEzaIP2yuqcIyOI6ROdvMC3iw68WFVDkD6h-FITKzPxNr7TR2seFBllZ-ejTphXORrdCLF3JM3KCVjBVJfNjCrDlhbom6VJxZKVibFPthKuegK-weops80HABa_OrM6AEXBiPeClK7JjQFyuD9Ec'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}