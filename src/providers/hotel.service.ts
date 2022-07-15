import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IHotel } from 'src/shared/hotelInterfaces';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HotelService {

  constructor(private http: HttpClient) { }

  public hotels: IHotel[] = [];

  async getHotel() {
    const hotelModel = await this.http.get<IHotel>(`${environment.api}/hotel`, {
      observe: 'response'
    }).toPromise()
      .then(response => {
        return response?.body
      }).catch(response => {
        if (response.status == 0) {
          console.log('i know you want to buy my stocks but FUCK YOU')
        } else {
          return response.error?.detail || response.error;
        }
      });

    return hotelModel;
  }

  addHotel() {

  }

  updateHotel() {

  }

  removeHotel() {

  }
}
