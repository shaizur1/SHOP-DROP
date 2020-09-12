import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpRequestsService } from '../../../services/http-requests.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  reactiveForm: FormGroup;
  ifSubmitted = false;
  success = false;
  
  constructor(private formBuilder: FormBuilder, private httpRequestsService: HttpRequestsService) { }

  ngOnInit() {
    this.reactiveForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9@._-]+$')]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      message:['']
    });
  }

  send() {
    this.ifSubmitted = true;
    if(this.reactiveForm.invalid) {
      return;
    }
    this.success = true;
    this.httpRequestsService.sendMessage();
    alert('Message sent successfully!');
  }
}
