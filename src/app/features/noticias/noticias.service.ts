import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService extends BaseService {
  common: string = 'noticias';
  all() {
    this.setEndPoint(`${this.common}/all`);
    return this.get();
  }
  single(id) {
    this.setEndPoint(`${this.common}/single/${id}`);
    return this.get();
  }

  categorias(categoria) {
    this.setEndPoint(`${this.common}/categoria/${categoria}`);
    return this.get();
  }

  create(obj) {
    this.setEndPoint(`${this.common}/create`);
    return this.post(obj);
  }
  // update(id, obj) {
  //   this.setEndpoint(`${this.common}/modify/${id}`);
  //   return this.put(obj);
  // }
  // del(id, obj) {
  //   this.setEndpoint(`${this.common}/eliminar/${id}`);
  //   return this.delete(obj);
  // }
}
