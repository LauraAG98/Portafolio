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

  imagenes: string[] = [
    'https://i.postimg.cc/zfX766Fv/pro1.png',
    'https://i.postimg.cc/5y06M5kw/pro2.png',
    'https://i.postimg.cc/G374xNHz/pro3.png'
  ]

  ubicacion:number=0;

  siguiente(){
    this.ubicacion=(this.ubicacion+1) % this.imagenes.length;
  }

  anterior(){
    this.ubicacion=(this.ubicacion-1+this.imagenes.length) % this.imagenes.length;
  }

  irAPunto(index:number){
    this.ubicacion = index;
  }
}