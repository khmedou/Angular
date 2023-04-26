import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbaruser',
  templateUrl: './navbaruser.component.html',
  styleUrls: ['./navbaruser.component.scss']
})
export class NavbaruserComponent {
  isLoggedIn = false;
  user = sessionStorage.getItem('user');
  constructor(private route: ActivatedRoute,
    private router: Router,
   ) { }

  ngOnInit() {
   
    console.log('menu ->' + this.isLoggedIn);
  }

  handleLogout() {
   sessionStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
