import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from '../../noticias.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: NoticiasService
  ) {}
  alfinal = {
    url: 'https://imagesdocentes.s3-sa-east-1.amazonaws.com/images_noticias/',
    reg: '/[a-z]/g',
  };
  regexConstructor = new RegExp('cat');

  ultimas: any = [];
  noticia: any = [];
  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id;
    const noticia: any = await this.service.single(params);
    this.noticia = noticia;
    console.log(this.noticia);
    this.loadUltimas();
  }
  async loadUltimas() {
    const ultimas: any = await this.service.ultimas();
    this.ultimas = ultimas;
  }
}
