import { Component, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-descarga',
  imports: [TranslatePipe],
  templateUrl: './descarga.html',
  styleUrl: './descarga.css'
})
export class Descarga {
  
  descargarHV( idiom : 'es' | 'en'){
    const link=
    idiom == 'es'
    ? 'https://drive.google.com/file/d/1BEwSt-0d1ns5a-egsoYAxCFEpFeh3hAu/view?usp=sharing'
    :'https://drive.google.com/file/d/1glYdSOmGjhYMzboK8aUmecqmcKJAHSrw/view?usp=sharing';

    window.open(link,'_blanck')
  }
}