import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../noticias.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
})
export class AllComponent implements OnInit {
  loaded: boolean = false;
  noticias: Array<Object> = [];

  constructor(private _service: NoticiasService) {}

  async ngOnInit() {
    this.loadNoticias();
  }

  async loadNoticias() {
    const noticias: any = await this._service.all();
    this.noticias = noticias;
  }
}
