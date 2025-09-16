import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-principal',
  imports: [NgClass],
  templateUrl: './header-principal.html',
  styleUrl: './header-principal.css'
})
export class HeaderPrincipal {
  @Input() titulo:string='';
  @Input() descripcion:string='';
  @Input() img:string='';
  @Input() claseFondo:string='';
}
