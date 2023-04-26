import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vol } from '../model/vols';
import { PostsService  } from '../service/posts.service'
import { VolService } from '../service/vols';
@Component({
  selector: 'app-vole',
  templateUrl: './vole.component.html',
  styleUrls: ['./vole.component.css']
})
export class VoleComponent implements OnInit {
  public   listvole  = []  ;
  public vols: Vol []=[];

  constructor(private PostsService : PostsService,private router : Router ,
    private volservices : VolService ){};

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
  reserve(){
    this.router.navigate(['/rezerve'])
    // this.router.navigate(['/rezerve'], {
    //   this.router.navigateByUrl('/rezerve', {
    //     state: {user: "hbh", foo: 'bar'}
    // });
  // });
  // this.router.navigate(['/reserve'], { queryParams: { serviceId: "serviceId"} });

  }
  addvol(){
    this.router.navigate(['/addVOL'])

  }
   getvols(){
    this.PostsService.getvole().subscribe(
      rezult => {
        this.listvole = rezult;
       console.log(this.listvole);
      }
    )
   }
   deletetvols(id:number){
   
    this.volservices.deleteVol(id).subscribe(() => console.log("deleted"));
    window.location.reload();   
     console.log("test ");

  }
  

}
