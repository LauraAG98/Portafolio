import { Component } from '@angular/core';
import { Footer } from '../shared/components/footer/footer';
import { Nav } from '../shared/components/nav/nav';

@Component({
  selector: 'app-principal',
  imports: [Nav,Footer],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {
}