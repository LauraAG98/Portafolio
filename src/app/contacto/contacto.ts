import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderTres } from '../shared/components/header-tres/header-tres';

@Component({
  selector: 'app-contacto',
  imports: [Nav,HeaderTres,Footer],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

}
