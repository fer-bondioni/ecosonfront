import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoticiasService } from '../../noticias.service';
import { Router } from '@angular/router';
import { SwalService } from '../../../../services/swal.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  constructor(
    private service: NoticiasService,
    private activatedRoute: ActivatedRoute,
    private service2: SwalService,
    private router: Router
  ) {}

  noticias: any = [];
  loaded: boolean = false;
  image: boolean = false;
  form: FormGroup;
  selectedFile: File; // req.files
  previewUrl: any;

  FormObject: any = {
    titulo: new FormControl('', [Validators.required]),
    texto: new FormControl('', [Validators.required]),
    //idCategoria: new FormControl(),
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
    // this.service.create(this.form.value) // mandar el form en texto plano
    fd.append('titulo', titulo);
    fd.append('texto', texto);
    //fd.append('categoria', idCategoria);
    fd.append('imagen', this.selectedFile, this.selectedFile.name); // {mimetype, name, size, }
    const result = await this.service.create(fd);
    this.service2.normalMessage({
      html: 'Noticia creada',
      icon: 'success',
      timer: 1500,
    });
    this.router.navigate(['users/perfil']);

    //const result = await this.service.create(fd);
    // result contiene la respuesta del server -> id : 4
    //return fd;
  }

  async loadNoticias() {
    const noticias: any = await this.service.all();
    this.noticias = noticias;
  }

  async ngOnInit() {
    this.createForm();
    await this.loadNoticias();
  }
}
