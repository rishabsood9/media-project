import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/IModels';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  SignInForm!: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<User>,
    private us: UserService
  ) {}
  user!: User;
  ngOnInit(): void {
    this.SignInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.user = JSON.parse(localStorage.getItem('user') || '{}');
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
          this.matDialogRef.close(foundUser);
          alert('SUCCESS');
          localStorage.setItem('user', JSON.stringify(foundUser));
        } else {
          alert('INVALID USERNAME OR PASSWORD');
        }
      }
    }
  }
}
