import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/IModels';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  SignUpForm!: FormGroup;
  user!: User;
  constructor(
    private userService: UserService,
    private matDialogRef: MatDialogRef<User>
  ) {}

  ngOnInit(): void {
    this.SignUpForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
  }

  onSubmit() {
    if (this.SignUpForm?.invalid) {
      return;
    } else {
      const user = {
        userid: this.SignUpForm.get('email')?.value,
        password: this.SignUpForm.get('password')?.value,
        userName: this.SignUpForm.get('name')?.value,
      };
      if (this.userService.postUsers(user)) {
        this.matDialogRef.close(user);
        localStorage.setItem('user', JSON.stringify(user));
        alert('Congratulations! User Created.');
      } else {
        alert('Email already Exits, Kindly Sign up again.');
      }
    }
  }
}
