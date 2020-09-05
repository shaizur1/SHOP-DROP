import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestsService } from '../../../services/http-requests.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private httpRequestsService: HttpRequestsService) { }

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z 0-9@._-]+$')]],
      company: ['', [Validators.required, Validators.pattern('^[a-zA-Z 0-9@._-]+$')]],
      description: [''],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      image: ['']
    });
  }

  addProduct(name, company, description, price, image) {
    return this.httpRequestsService.addProduct(name, company, description, price, image);
  }

}
