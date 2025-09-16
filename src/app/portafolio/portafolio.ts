import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderPrincipal } from '../shared/components/header-principal/header-principal';

@Component({
  selector: 'app-portafolio',
  imports: [Nav,HeaderPrincipal,Footer],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio {
  protected readonly titulo=signal("Trabajos Realizados");
}