import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService  } from '../service/posts.service'
import { VolService } from '../service/vols';
@Component({
  selector: 'app-add-vols',
  templateUrl: './add-vols.component.html',
  styleUrls: ['./add-vols.component.scss']
})
export class AddVOLSComponent implements OnInit {
  myForm!: FormGroup;
  b:any;
  constructor(private formBuilder: FormBuilder,private PostsService : PostsService,private router : Router ,
  private  volservice : VolService
    ) { }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      code_vol: ['', Validators.required],
      dateDepart: ['', Validators.required],
      ville_depat: ['', Validators.required],
      ville_dest: ['', Validators.required],
      nombreClassA: ['', Validators.required],
      prixClassA: ['', Validators.required],
      nombreClassB: ['', Validators.required],
      prixClassB: ['', Validators.required]
    });
  }

  postvols(){
    this.b=this.myForm.value;
    console.log(JSON.stringify(this.b));
    this.volservice.addVol(this.myForm.value).subscribe(response => {
      console.log(response)
    })
    //  this.PostsService.postvole(JSON.stringify(this.b)).subscribe(
    //   response => {
    //     console.log(response)
    //   }
    //  )
     
     this.router.navigate(['/vols'])
  
   }
   
}
