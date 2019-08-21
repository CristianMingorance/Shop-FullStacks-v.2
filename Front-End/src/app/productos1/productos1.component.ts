import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import{ServicioService} from '../servicio.service'
  
@Component({
  selector: 'app-productos1',
  templateUrl: './productos1.component.html',
  styleUrls: ['./productos1.component.css']
})
export class Productos1Component implements OnInit {

  constructor(public _servicio: ServicioService) { 

   
    
  }

addProd(producto){

  this._servicio.addProd(producto)
return false;

}


  ngOnInit() {
  }

}
