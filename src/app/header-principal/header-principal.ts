import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-header-principal',
  imports: [Nav,Footer],
  templateUrl: './header-principal.html',
  styleUrl: './header-principal.css'
})
export class HeaderPrincipal {

}
