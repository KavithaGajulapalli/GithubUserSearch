import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product.component.html',
    providers:[ProductService]

})
export class ProductComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService) {

    }
   

    ngOnInit(): void {
        this._productService.getProducts()
                .subscribe(products => this.products = products,
                           error => this.errorMessage = <any>error);
    
    }
    onNotifyContainer (rating:number): void {
        this.pageTitle = ' Rating '+ rating +' was clicked'

    }

    
}

