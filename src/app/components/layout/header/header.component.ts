import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/app/IModels';
import { SignInComponent } from '../../sign-in/sign-in.component';
import { SignOutComponent } from '../../sign-out/sign-out.component';
import { SignUpComponent } from '../../sign-up/sign-up.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private router: Router) {}
  isLoggedIn: boolean = false;
  userName: string = '';
  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    if (user.userid) {
      this.isLoggedIn = true;
      this.userName = user.userName;
    } else {
      false;
    }
  }

  openSignInBox() {
    let dialogSignIn = this.dialog.open(SignInComponent);
    dialogSignIn.afterClosed().subscribe((result: User) => {
      if (result) {
        this.signInUser(result);
      }
    });
  }
  openSignUpBox() {
    let dialogSignUp = this.dialog.open(SignUpComponent);
    dialogSignUp.afterClosed().subscribe((result) => {
      if (result) {
        this.signInUser(result);
      }
    });
  }

  signInUser(user: User) {
    this.router.navigate(['/home']);
    this.isLoggedIn = true;
    this.userName = user.userName;
  }

  openSignOutBox() {
    let dialogSignOut = this.dialog.open(SignOutComponent);
    dialogSignOut.afterClosed().subscribe((result) => {
      if (result === 'true') {
        localStorage.removeItem('user');
        this.isLoggedIn = false;
        this.router.navigate(['/home']);
      }
    });
  }
}
