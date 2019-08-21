import {
  Component,
  OnInit
} from '@angular/core';
import {
  ServicioService
} from '../servicio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _servicio: ServicioService) {

    this._servicio.getCategories()

  }

  getProducts(idUrl) {

    this._servicio.getProducts(idUrl)


    
  }


  ngOnInit() {}

}
