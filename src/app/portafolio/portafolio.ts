import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderPrincipal } from '../shared/components/header-principal/header-principal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-portafolio',
  imports: [Nav,HeaderPrincipal,Footer,TranslatePipe],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.css'
})
export class Portafolio {
  protected readonly titulo=signal("Trabajos Realizados");
}