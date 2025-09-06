import { Component, signal } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';
import { Nav } from '../shared/components/nav/nav';
import { HeaderPrincipal } from '../shared/components/header-principal/header-principal';


@Component({
  selector: 'app-principal',
  imports: [Nav,HeaderPrincipal,Footer],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {
  protected readonly nombre=signal("Laura Aguirre Garcia");
}