import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-provider',
  templateUrl: './product-provider.component.html',
  styleUrls: ['./product-provider.component.scss']
})
export class ProductProviderComponent implements OnInit {

  public bannerDetail: Array<any>;

  constructor() {
    this.bannerDetail = [
      { id: 1, imagePath: 'assets/img/authorization.svg', name: 'Check Report and Send to Authorization' },
      { id: 2, imagePath: 'assets/img/page-editor.svg', name: 'Go to page Editor' },
      { id: 3, imagePath: 'assets/img/api-editor.svg', name: 'Go to API Documentation Editor' }
    ]
  }

  ngOnInit() {
  }

}
