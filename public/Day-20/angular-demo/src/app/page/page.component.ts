import { Component, OnInit } from '@angular/core';
import { ContentService } from '../shared/services/content.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  page = {
    title: 'Home',
    subtitle: 'Welcome Home',
    content: 'Some demo content',
    image: 'assets/bg1.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
