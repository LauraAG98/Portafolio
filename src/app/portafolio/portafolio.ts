import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-portafolio',
  imports: [Nav,Footer],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio {

}