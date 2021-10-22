import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  SignInForm!: FormGroup;
  constructor(private us: UserService) {}

  ngOnInit(): void {
    this.SignInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(abc: any) {
    if (this.SignInForm?.invalid) {
      return;
    } else {
      let allusers = this.us.getUsers();
      if (this.SignInForm.get('email')?.value) {
        let foundUser = allusers.find(
          (a) =>
            a.userid === this.SignInForm.get('email')?.value &&
            a.password === this.SignInForm.get('password')?.value
        );
        if (foundUser) {
          alert('SUCCESS');
        } else {
          alert('INVALID USERNAME OR PASSWORD');
        }
      }
    }
  }
}
