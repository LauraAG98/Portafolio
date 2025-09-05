import { Component } from '@angular/core';
import { Nav } from '../shared/components/nav/nav';
import { Footer } from '../shared/components/footer/footer';

@Component({
  selector: 'app-blog',
  imports: [Nav,Footer],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

}
