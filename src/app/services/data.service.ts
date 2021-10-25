import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public products:any = [
    { id :10001, name:'Apple Mac book Xyz series', price:54545.66, desc:'It is a Laptop', brand:'Apple',active:true, imageUrl:'../assets/img/smiley.jpg'},
    { id :10002, name:'Dell Slim book Xyz series', price:24545.66, desc:'It is a Laptop', brand:'Dell',active:true,imageUrl:'../assets/img/smiley.jpg'},
    { id :10003, name:'Hp Node book Xyz series', price:94545.66, desc:'It is a Laptop', brand:'HP',active:false,imageUrl:'../assets/img/smiley.jpg'},
    { id :10004, name:'Lenovo Z book Xyz series', price:994545.66, desc:'It is a Laptop', brand:'Lenovo',active:true,imageUrl:'../assets/img/smiley.jpg'},
    { id :10005, name:'Acer Aac book Xyz series', price:224545.66, desc:'It is a Laptop', brand:'Acer',active:false,imageUrl:'../assets/img/smiley.jpg'},
    { id :10006, name:'Assus M book Xyz series', price:444545.66, desc:'It is a Laptop', brand:'Assus',active:true,imageUrl:'../assets/img/smiley.jpg'},
  ]
  constructor() { }

  public showList() :any {
    return this.products;
  }
  
  public showActives():any {
    return this.products.filter(function(product:any) {
      return product.active;
    });
  }

  public showInActives():any {
    return this.products.filter(function(product:any) {
      return !product.active;
    });
  }

}
