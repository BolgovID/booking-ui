import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hot-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() number: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
