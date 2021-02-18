import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../noticias.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
})
export class CategoriaComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NoticiasService
  ) {}

  noticia: any = [];
  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.categoria;
    const noticia: any = await this.service.categorias(params);
    this.noticia = noticia;
    console.log(this.noticia);
  }
}
