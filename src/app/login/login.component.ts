import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shareddata/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthenticationService } from 'src/app/service/user-authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  message:string =""
  regForm!:FormGroup
  constructor(
    private fb: FormBuilder,
    private userService :UserAuthenticationService ,private router : Router   
    ) { }
    ngOnInit(): void {
      this.regForm = this.fb.group({
        username: ['',[Validators.required]],
        password: ['',[Validators.required,Validators.pattern("[a-zA-z0-9@_]{6,}")]]
      })
    }
    
    login(){
          const username=this.regForm.value.username;
          const password=this.regForm.value.password;
  
      this.userService.login(username,password).subscribe(
        response =>{
          // console.log(user)
          console.log(response)
          sessionStorage.setItem('user',response['username']);
          sessionStorage.setItem('id',response['id']);
         if(response['role']=='ADMIN'){
          
         
          this.router.navigate(['/vols'])}
          else{
           
          this.router.navigate(['/list'])
          }
         
        },
        error =>{
          
          console.log(error);
          
        }
      );
  
      this.regForm.reset();
     
  
  
  
  
  
    }
  
}
