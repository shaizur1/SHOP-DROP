import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestsService } from '../../../services/http-requests.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit, OnDestroy {

  reactiveForm: FormGroup;
  product: any = {};
  products: Product[];
  paramsSub: Subscription;
  productSub1: Subscription;
  productSub2: Subscription;

  constructor(private formBuilder: FormBuilder,
              private httpRequestsService: HttpRequestsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.paramsSub = this.route.params.subscribe((params) => {
      this.productSub1 = this.httpRequestsService.getProductByID(params['id']).subscribe((res) => {
        this.product = res;
      });
    });
    this.getProductByID(this.route.snapshot.params['id']);
  }

  createForm() {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z 0-9@._-]+$')]],
      company: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9@._-]+$')]],
      description: [''],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      image: ['']
    });
  }

  updateProduct(name, company, description, price, image) {
    this.route.params.subscribe((params) => {
      this.httpRequestsService.updateProduct(params['id'], name, company, description, price, image);
        //get the list after update
      this.httpRequestsService.getProducts().subscribe((data: Product[]) => {
        this.products = data;
        this.router.navigate(['/list']);
      });
    });
  }

  getProductByID(id) {
    this.productSub2 = this.httpRequestsService.getProductByID(id).subscribe((data) => {
      this.product = data;
      this.reactiveForm.setValue({
        name: this.product.name,
        company: this.product.company,
        description: this.product.description,
        price: this.product.price,
        image: this.product.image
      });
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.productSub1.unsubscribe();
    this.productSub2.unsubscribe();
  }
}
