import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoticiasService } from '../../noticias.service';
import { Router } from '@angular/router';
import { SwalService } from '../../../../services/swal.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/features/users/users.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css'],
})
export class ModifyComponent implements OnInit {
  constructor(
    private service: NoticiasService,
    private activatedRoute: ActivatedRoute,
    private service2: SwalService,
    private service3: UsersService,
    private router: Router
  ) {}
  noticia: any = [];
  loaded: boolean = false;
  image: boolean = false;
  form: FormGroup;
  selectedFile: File; // req.files
  previewUrl: any;
  params: any = this.activatedRoute.snapshot.params.id;

  FormObject: any = {
    titulo: new FormControl('', [Validators.required]),
    texto: new FormControl(),
    // idCategoria: new FormControl(),
    // idUsuario: new FormControl(),
  };

  createForm(): void {
    this.form = new FormGroup(this.FormObject);
  }
  onFileSelected(e: any) {
    console.log(e);
    const reader = new FileReader();
    const { files } = e.target;
    if (files && files.length) {
      this.selectedFile = files[0]; // selecciono el archivo
      console.log(this.selectedFile);
      reader.onload = (e) => {
        this.previewUrl = reader.result; // URL -> <img src=""
        console.log(this.previewUrl);
        this.image = true;
      };
      reader.readAsDataURL(this.selectedFile); // voy a generar una url a partir del archivo leido
    }
  }

  eliminar() {
    this.previewUrl = '';
    this.image = false;
  }

  async upload() {
    const { titulo, texto, idCategoria } = this.form.value;
    const fd = new FormData(); // key,value
    fd.append('titulo', titulo);
    fd.append('texto', texto);
    //fd.append('categoria', idCategoria);
    fd.append('imagen', this.selectedFile, this.selectedFile.name); // {mimetype, name, size, }
    const result = await this.service.create(fd);
    this.service2.normalMessage({
      html: 'Noticia modificada',
      icon: 'success',
      timer: 1500,
    });
    this.router.navigate(['users/perfil']);
  }

  async update() {
    const obj: any = await this.service3.update(this.params, this.form);
    this.router.navigate(['perfil']);
  }

  async ngOnInit() {
    const params = this.activatedRoute.snapshot.params.id;
    const noticia: any = await this.service.single(params);
    this.noticia = noticia;
    this.createForm();
  }
}
