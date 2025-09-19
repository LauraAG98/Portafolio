import { Component, inject, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  imports: [RouterModule, TranslatePipe],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {
  protected readonly menuDesplegable = signal(false);
  protected readonly title = signal('ngx-translate-demo-standalone');

  toggleElemento() {
    this.menuDesplegable.update(valor => !valor);
  }

  private traductor = inject(TranslateService);
  
  cambiarIdioma(idiom: string) {
    this.traductor.use(idiom);
  }
}