import { Component, signal } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';
import { Nav } from '../shared/components/nav/nav';
import { HeaderPrincipal } from '../shared/components/header-principal/header-principal';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-principal',
  imports: [Nav,HeaderPrincipal,Footer,TranslatePipe],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {
  protected readonly nombre=signal("Laura Aguirre Garcia");
}