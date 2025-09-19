import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { Descarga } from '../shared/components/descarga/descarga';
import { HeaderPrincipal } from '../shared/components/header-principal/header-principal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experiencia',
  imports: [Nav,HeaderPrincipal,Descarga,Footer,TranslatePipe],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
protected readonly escuela = signal("escuela deportiva Agua Azul");
}
