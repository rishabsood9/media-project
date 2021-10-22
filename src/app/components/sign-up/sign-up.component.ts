import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  SignUpForm!: FormGroup;
  constructor(private us: UserService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.SignUpForm = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit(abc: any) {
    if (this.SignUpForm?.invalid) {
      return;
    } else {
      this.us.postUsers({
        userid: this.SignUpForm.get('email')?.value,
        password: this.SignUpForm.get('password')?.value,
        userName: this.SignUpForm.get('name')?.value,
      });
      alert('CONGRATULATIONS YOU HAVE SIGNED UP');
      this.SignUpForm.reset();
    }
  }
}
