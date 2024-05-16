import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangePipe } from "../change.pipe";
import { DonateDirective } from '../donate.directive';


@Component({
    selector: 'app-demographic',
    standalone: true,
    templateUrl: './demographic.component.html',
    styleUrl: './demographic.component.css',
    imports: [ReactiveFormsModule, FormsModule, ChangePipe,DonateDirective]
})
export class DemographicComponent {
  // name?: string;
  nameValue: string = "";
  lastNameValue: string = "";
  demo : FormGroup = new FormGroup({
    name : new FormControl(null, [Validators.required]),
    lastname : new FormControl(null, [Validators.required]),
    dateOfDirth : new FormControl(null, [Validators.required]),
    tel : new FormControl(null, [Validators.required,Validators.pattern('[- +()0-9]{10,12}')]),
    address : new FormControl(null, [Validators.required])
   
  })
 
  donateForm: FormGroup = new FormGroup({
    bankCardNumber: new FormControl(),
    atmCardCode: new FormControl()
  });
  test:string = "";
  // updateName(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   this.nameValue = target.value;
  // }
  // updateLastName(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   this.lastNameValue = target.value;
  // }
  
  
}
