import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderDos } from '../shared/components/header-dos/header-dos';

@Component({
  selector: 'app-portafolio',
  imports: [Nav,HeaderDos,Footer],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio {

}