import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(public auth: AuthService, private router: Router) {

  }

  submitForm(): void {
    let username: any = this.form.get('username')?.value;
    let password: any = this.form.get('password')?.value;

    this.auth.login(username, password).subscribe(result => {
      console.log(result);
      if (result.token) {
        this.router.navigate(['/']);
      }
    });
  }

}
