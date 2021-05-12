import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',

  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  cityList = ['New Delhi', 'Mumbai', 'Bangalore', 'Patna', 'Pune', 'Noida'];

  stringPattern = "^[a-z A-Z]{3,}";
  phonePattern = "^[0-9]{10,}$";
  pinPattern = "^[0-9]{6,}$";
  emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    //to get data from form
    dataForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.pattern(this.stringPattern)]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern(this.stringPattern)]),
      email: new FormControl(null, [Validators.required, Validators.pattern(this.emailPattern)]),
      contactNumber: new FormControl(null, [Validators.required, Validators.pattern(this.phonePattern), Validators.maxLength(10)]),
      pinCode: new FormControl(null, [Validators.required, Validators.pattern(this.pinPattern), Validators.maxLength(6)]),
      city: new FormControl(null, [Validators.required])
    });

  constructor() { }

  ngOnInit(): void {
  }
  jsonValue: any;

  onSubmit(){
    if(this.dataForm.valid === true){
      this.jsonValue = JSON.stringify(this.dataForm.value)
      console.log(this.dataForm.value);
      alert(this.jsonValue);
      this.dataForm.reset();
    }else{
      alert("Please fill all the required field")
    }
  }

}
