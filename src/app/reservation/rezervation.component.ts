import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservation } from '../model/reservation';
import { User } from '../model/user';
import { Vol } from '../model/vols';
import { ReservationService } from '../service/reservationservices';

@Component({
  selector: 'app-rezervation',
  templateUrl: './rezervation.component.html',
  styleUrls: ['./rezervation.component.scss']
})
export class RezervationComponent implements OnInit {
  @Input()
  public page: any;
  reservation:any
  code_vol!: string;
  prixa!: string;
  prixb!: string;
  myForm!: FormGroup;
  b:any;
  clas!: string;
  prix!: string;
  user = sessionStorage.getItem('id');
   date = new Date().toLocaleString();
   reservationsss : Reservation = new  Reservation;
   users: User = new User;
   vol: Vol = new Vol;
   public res: Reservation []=[];
  constructor(private route : ActivatedRoute  ,private router: Router,private formBuilder: FormBuilder ,private resr :ReservationService ){};

  ngOnInit(): void  {
    this.route.queryParams
    
    .subscribe(params => {
      console.log(params); // { order: "popular" }
      this.code_vol = params['id'];
      this.prixa = params['prixA'];
      this.prixb = params['prixB'];
      console.log(this.code_vol ,this.prixa,this.prixb ,this.user); // popular
    }
  );
     this.clas=='A'?this.prix=this.prixa:this.prixb
    this.myForm =     this.myForm = this.formBuilder.group({
      code_vol: [this.code_vol, Validators.required],
      id : [this.user, Validators.required],
      class:['', Validators.required],
      prix: [this.prix, Validators.required],
      date: [this.date, Validators.required],
    
    });
   
}
getAllReservations(){
  this.resr.getReservations().subscribe(response => {
    console.log(response)
})
}
reserver(){
  
let  data :any=
{    
  "date_reservation": "2023-01-07T08:23:00.671+00:00",
  "vol": {
  "code_vol": this.code_vol
  },
  "classeplace": this.myForm.get('class')?.value,
  "prix": 250,
  "user": {
  "id": sessionStorage.getItem('id')
  }}
    
  console.log(data)
  
  this.resr.addReservation(data).subscribe(response => {
    console.log(response)
    this.router.navigate(['/list'])
});

}



}