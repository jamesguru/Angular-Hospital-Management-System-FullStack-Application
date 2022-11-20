import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  login: boolean = false;
  @ViewChild('form') form!: NgForm;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.login = true;
    }, 20000);
  }

  showLogin(condition: string) {
    if (condition === 'open') {
      this.login = true;
    } else {
      this.login = false;
    }
  }

  helpRegister() {
    this.router.navigate(['help/register']);
  }

  onSubmit() {
    this.authService.signIn(this.form.value).subscribe((res) => {


      console.log(res)

      if (res.message === 'wrong password') {
      } else if ((res.message = 'not found')) {
      }

      if (res.user.role === 'patient') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        this.router.navigate(['/patient']);
      } else if (res.user.role === 'finance') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        this.router.navigate(['/finance']);}
      
        else if (res.user.role === 'reception') {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
  
          this.router.navigate(['/reception']);}
      
      else if (res.user.role === 'admin') {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.user));

        this.router.navigate(['/admin']);
      } else if (res.message === 'wrong password') {
        console.log(res.message);
      } else {
        this.router.navigate(['/auth/login']);
      }

      if (res.message) {
        console.log('wrong password');
      }
    });
  }
}
