import { Component } from '@angular/core';
import { Router, RouterEvent, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private router:Router){}
  redirectToRegister(){
    this.router.navigate(['/home']);
  }
}