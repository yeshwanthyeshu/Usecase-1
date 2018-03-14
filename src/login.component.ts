import { Component } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormGroup, 
          FormControl,
          Validators,
          ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
          
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
 emailnot = "visible";
 show: boolean = true;
 myfun(){
   this.show = false;
 }
  constructor(private router: Router) {};
  loginform;

  ngOnInit(){
    
    this.loginform = new FormGroup({
      email : new FormControl("",Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password : new FormControl("",Validators.compose([
        Validators.minLength(2),
        Validators.required
      ]))

    });

  }
  
  onSubmit() {
    this.router.navigateByUrl("/home");
}
}