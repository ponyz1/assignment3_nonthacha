import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StealthDirective } from '../stealth.directive';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule,StealthDirective],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  login : FormGroup = new FormGroup({
    email : new FormControl(null, [Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),Validators.required]),
    password : new FormControl(null, [Validators.minLength(8), Validators.maxLength(100),Validators.required])
  })
}
