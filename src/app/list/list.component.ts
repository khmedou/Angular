import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vol } from '../model/vols';
import { PostsService  } from '../service/posts.service'
import { VolService } from '../service/vols';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public   listvole  = []  ;
  public vols: Vol []=[];

  constructor(private PostsService : PostsService,private router : Router ,private volservices:VolService ){};

  ngOnInit(): void {
    this.getAllvols();
  
  };
 
 
  public getAllvols(): void {
    this.volservices.getVols().subscribe(
     ( response:Vol [])=>{
      console.log(response);
   this.vols =response;
      })
      ,
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    
  }
   reserve(id:number ,prixA :number ,prixB:number){
    console.log(id)
    this.router.navigate(['/reserve'] ,
    { queryParams: { id: id ,prixA :prixA ,prixB:prixB} }
    )
 
  }
  

}
