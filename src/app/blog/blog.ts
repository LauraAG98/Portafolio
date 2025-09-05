import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';
import { HeaderTres } from '../shared/components/header-tres/header-tres';

@Component({
  selector: 'app-blog',
  imports: [Nav,HeaderTres,Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

}
