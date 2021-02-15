import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  loaded: boolean = false;
  noticias: Array<Object> = [];
  constructor(private _service: UsersService) {}

  async ngOnInit() {
    this.loadNoticias();
  }

  async loadNoticias() {
    const noticias: any = await this._service.all();
    this.noticias = noticias;
  }
}
