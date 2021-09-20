import { Injectable } from '@angular/core';

@Injectable()
export class ContentService {

  pages: Object = {
    'home': {title: 'Home', subtitle: 'Welcome Home!', content: 'Homepage Content', image: 'assets/bg1.jpg'},
    'about': {title: 'About', subtitle: 'About Us!!', content: 'About Us Content', image: 'assets/bg1.jpg'},
    'contact': {title: 'Contact', subtitle: 'Contact Us', content: 'Contact us page data', image: 'assets/bg1.jpg'},
  };

  constructor() { }
}
