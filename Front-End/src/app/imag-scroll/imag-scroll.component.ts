import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../servicio.service'

@Component({
  selector: 'app-imag-scroll',
  templateUrl: './imag-scroll.component.html',
  styleUrls: ['./imag-scroll.component.css']
})
export class ImagScrollComponent implements OnInit {

  constructor(public _servicio: ServicioService) { }

  ngOnInit() {
  }

}
