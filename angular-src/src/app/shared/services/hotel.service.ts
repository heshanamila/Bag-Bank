import { Injectable } from '@angular/core';
import { HOTELS } from '../../../assets/hotel_data/data';
import { Hotel } from '../../classes/hotel';
import { Rating } from '../../classes/rating';
import { Address } from '../../classes/address';
import { Booking } from '../../classes/booking';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';
import { Subject } from 'rxjs';
import  'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class HotelService {
  hotels1 : Hotel[];
  hotels2 : any[] = [];
  hotels3 : Hotel[] = [];

  currentCity: string;
  private subject = new Subject<Booking>();
  booking_details: Observable<Booking>;
  booking_det: Booking;
  // private observer: Observer<Booking>;

  constructor(private http:HttpClient) {
    console.log('\n\n-----------in constructor of service---------');
  
  }

  getHotelData4(): any {

    this.hotels1 = HOTELS;
    
  
    
  }

  getHotelData2(): any {
    return this.http.get('http://localhost:3300/stores/stores');
  }

  decodeUser(json:any): Hotel {
    return Object.assign({}, json,);
  }

  getHotelData5(): any {
    this.getHotelData2().subscribe(
      data => { 
        var t = 0;
        while (t <2) {
        this.hotels2.push(this.decodeUser(data[t]));
        t = t + 1;

        }
      },
       err => console.error(err),
      

    )
  return this.hotels2;
  }


  getHotelById(id: String): Hotel {
    const hotels = this.getHotelData5();
  
    for (let i = 0; i < hotels.length; i++) {
      if (hotels[i].id === id) {
        return hotels[i];
      }
    }
  }

  setCurrentCity(searchcity: string) {
    this.currentCity = searchcity.length !== 0 ? searchcity : '';
  }

  setBookingDetails(booking_details: Booking) {
    console.log('----in setBookingDetails------------');
    /*if (this.observer !== undefined) {
      console.log('----in if--------');
      console.log(booking_details);
      this.observer.next(booking_details);
    }*/
    // this.subject.next(booking_details);
    this.booking_det = booking_details;
  }

  getBookingDetails(): Booking {
    return this.booking_det;
}
}
