import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-descarga',
  imports: [TranslatePipe],
  templateUrl: './descarga.html',
  styleUrl: './descarga.css'
})
export class Descarga {
  protected readonly descarga = signal<'es' | 'en'>('es');
  
  descargarHV(){
    const idiom = this.descarga();
    const link=
    idiom == 'es'
    ? 'assets/images/Hoja_de_vida_español.pdf'
    :'assets/images/Hoja_de_vida_ingles.pdf';

    window.open(link,'_blanck')
  }
}
