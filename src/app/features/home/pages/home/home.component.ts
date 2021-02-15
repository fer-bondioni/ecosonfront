import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  ultimas: Array<Object> = [];
  constructor(private _service: HomeService) {}

  async ngOnInit() {
    this.loadUltimas();
  }

  async loadUltimas() {
    const ultimas: any = await this._service.all();
    this.ultimas = ultimas;
  }
}
