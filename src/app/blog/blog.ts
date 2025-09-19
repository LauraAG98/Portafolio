import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderPrincipal } from '../shared/components/header-principal/header-principal';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-blog',
  imports: [Nav,HeaderPrincipal,Footer,TranslatePipe],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
}