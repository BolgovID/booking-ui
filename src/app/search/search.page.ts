import { Component, OnInit } from '@angular/core';
import { HotelService } from 'src/providers/hotel.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss']
})
export class SearchPage{

  constructor(private hotelService: HotelService) { }

  async getHotel(){
    const model = await this.hotelService.getHotel();

    console.log("model: ", model)
  }

}
