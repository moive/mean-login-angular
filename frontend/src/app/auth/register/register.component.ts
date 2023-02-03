import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onRegister(form: NgForm): void {
    this.authService.register(form.value).subscribe((res) => {
      this.router.navigateByUrl('/auth');
    });
  }
}
