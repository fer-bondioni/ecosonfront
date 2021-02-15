import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService extends BaseService {
  //common: string = '';
  all() {
    this.setEndPoint('home');
    return this.get();
  }
}
