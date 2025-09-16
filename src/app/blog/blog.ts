import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderPrincipal } from '../shared/components/header-principal/header-principal';

@Component({
  selector: 'app-blog',
  imports: [Nav,HeaderPrincipal,Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {
}