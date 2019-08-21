import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service'



@Component({
  selector: 'app-cesta',
  templateUrl: './cesta.component.html',
  styleUrls: ['./cesta.component.css']
})
export class CestaComponent implements OnInit {

  constructor(public _servicio: ServicioService) { }


  
  ngOnInit() {
  }

}
