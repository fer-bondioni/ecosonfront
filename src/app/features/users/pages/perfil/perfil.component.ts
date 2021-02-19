import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  loaded: boolean = false;
  id: any = {};
  //user = `${usuario}`;
  noticias: Array<Object> = [];
  noticia: any = [];
  constructor(
    private service: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  async ngOnInit() {
    this.loadNoticias();
    //this.loadUser();
  }

  async eliminar() {
    //const params = this.activatedRoute.snapshot.params.id;
    //const noticias: any = await this.service.single(params);
    const noticias: any = await this.service.all();
    //this.noticia = noticia;
    this.id = noticias.id;
    const obj: any = this.service.del(this.id, {});
    //console.log(obj);
    // noticias.forEach((element) => {
    //   if (element.id == this.id) {
    //     this.id = element.id;
    //     const obj = this.service.del(this.id, {});
    //     //const ObjDel = await this.service.del(this.id,{})
    //     //this.router.navigate(['perfil']);
    //   }
    // });

    //this.router.navigate(['perfil']);
  }

  // async loadUser() {
  //   const users: any = await this._service.all();
  //   this.users = users;
  // }

  async loadNoticias() {
    const noticias: any = await this.service.all();
    this.noticias = noticias;
  }
}
