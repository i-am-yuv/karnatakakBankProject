import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({

  providedIn: 'root'

})

export class GeolocationService {
 


  private apiKey = 'AIzaSyD__1Sh9MAXXXDSDa63y_Ml4NRNSNjbqf0'; // Replace with your Google Maps API key
  private geolocationUrl = `https://www.googleapis.com/geolocation/v1/geolocate?key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getGeolocation(): Observable<any> {
    return this.http.post<any>(this.geolocationUrl, {});
  }
 
  getCurrentPosition(): Observable<GeolocationPosition> {

    return new Observable(observer => {

      if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

          (position) => {

                alert(JSON.stringify(position))
            observer.next(position);

            observer.complete();

          },

          (error) => {

            observer.error(error);

          },

          {

            enableHighAccuracy: true

          }

        );

      } else {

        observer.error('Geolocation is not supported by this browser.');

      }

    });

  }

}

 