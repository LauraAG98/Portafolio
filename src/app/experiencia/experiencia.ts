import { Component, signal } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderDos } from '../shared/components/header-dos/header-dos';

@Component({
  selector: 'app-experiencia',
  imports: [Nav,HeaderDos,Footer],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.css'
})
export class Experiencia {
protected readonly escuela = signal("escuela deportiva Agua Azul");
}
