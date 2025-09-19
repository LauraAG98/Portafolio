import { NgStyle } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, TranslatePipe, NgStyle],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly menuDesplegable = signal(false);
  protected readonly title = signal('ngx-translate-demo-standalone');
  protected readonly boton = signal<'es' | 'en'>('es');

  toggleElemento() {
    this.menuDesplegable.update(valor => !valor);
  }

  private traductor = inject(TranslateService);
  
  cambiarIdioma(idiom: string) {
    this.traductor.use(idiom);
    this.boton.set(idiom as 'es' | 'en');
  }

  cambiarColor(idioma: 'es' | 'en'){
    if(this.boton()===idioma){
      return {
        backgroundColor: '#7dc0bde0'
      };
    }else{
      return{
        backgroundColor: '#ffffffd3'
      };
    }
  }
}