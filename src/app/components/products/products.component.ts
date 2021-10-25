import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:any;
  public status:string='all';

  constructor(private dataSrv: DataService, private apiService:ApiService) { }

  ngOnInit(): void {
    // this.products = this.dataSrv.showList();
    this.getProducts();
  }

  public getProducts() {
    this.apiService.getProducts().subscribe(
      (res)=> { 
        console.log(res);
        this.products = res;
      },
      (err)=>{
        console.log(err);
      })
  }

  public onDelete(id:string) {
    // console.log("on delete ", id);
    this.apiService.deleteProduct(id).subscribe(
      res => { 
        console.log("Product is deleted !",id);
        this.getProducts();
       },
      err => { console.log("Product delete failed! ");}
    )
  }

  filter(status:any) {
    if(status=='active'){
      this.products = this.dataSrv.showActives();
    } else if(status=='inactive') {
      this.products = this.dataSrv.showInActives();
    }else{
      this.products = this.dataSrv.showList();
    } 
  }


}
