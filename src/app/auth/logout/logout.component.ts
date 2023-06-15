import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
 constructor(private router: Router){}
  redirectToLogout(){
    this.router.navigate(['/home']);
  }
 }
