import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly menuDesplegable = signal(false);


  toggleElemento(){
    this.menuDesplegable.update(valor => !valor);
  }
}