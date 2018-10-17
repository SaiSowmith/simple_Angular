import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory File Generator';

  public imagesUrl;
 
  ngOnInit() {
      this.imagesUrl = [
      'IMAGE_URL1.jpg',
      'IMAGE_URL2.jpg',
      'IMAGE_URL3.jpg',
      'index.png'
      ];
  }

  submit(){
    
  }
  submit2(){
    
  }
}
