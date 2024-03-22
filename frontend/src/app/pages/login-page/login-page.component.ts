import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLoginButtonClicked(email: string, password: string) {
    this.authService.login(email, password).subscribe((res: HttpResponse<any>) => {
      if (res.status === 200) {
        // Logged in successfully
        this.router.navigate(['/lists']);
      }
    }, error => {
      // Error handling
      if (error.status === 400) { 
        // Incorrect email or password - display alert
        alert('Email or password is incorrect.');
      } else {
        // Other errors - display generic alert
        alert('Error: Something unexpected happened. Please try again later.');
      }
    });
  }
}
