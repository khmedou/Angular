import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shareddata/user.component';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { Useresrvice } from '../service/userservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  message:string =""
 
  b:any;
  regForm!:FormGroup
  constructor(
    private fb: FormBuilder,
    private userService :UserAuthenticationService     ,
    private userservice : Useresrvice ,private router : Router
    ) { }
    ngOnInit(): void {
      this.regForm = this.fb.group({
        nom: ['',[Validators.required]],
        prenom: ['',[Validators.required]],
        username: ['',[Validators.required]],
        role: ['',[Validators.required]],
        tel: ['',[Validators.required, Validators.min(10000000),Validators.max(99999999)]],
        email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
        password: ['',[Validators.required,Validators.pattern("[a-zA-z0-9@_]{6,}")]]
      })
    }
    register(){
      this.b=this.regForm.value;
      // let user : User
      // user = new User(
      //   this.regForm.value.username,
      //       this.regForm.value.nom,
      //       this.regForm.value.tel,
      //       this.regForm.value.email,
      //       this.regForm.value.password,
      //       this.regForm.value.role,
      //       this.regForm.value.prenom,

      //     )
          console.log(this.b)
     this.userservice.addUSER(this.b).subscribe(
        response =>{
           console.log(response);   
        },
        // error =>{
          
        //   console.log("bbbbb");
          
        // }
      );
  
      this.regForm.reset();
      this.router.navigate(['/login'])
  
    }
}
