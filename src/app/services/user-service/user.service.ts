import { Injectable } from '@angular/core';
import { User } from 'src/app/IModels';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersDB = [
    { userid: 'tom@media.com', password: 'abc123', userName: 'tom' },
    { userid: 'jeffy@media.com', password: 'abc123', userName: 'jeffy' },
    { userid: 'jerry@media.com', password: 'abc123', userName: 'jerry' },
    { userid: 'albert@media.com', password: 'abc123', userName: 'albert' },
    { userid: 'gaurav@media.com', password: 'abc123', userName: 'gaurav' },
    { userid: 'tim@media.com', password: 'abc123', userName: 'tim' },
    { userid: 'stan@media.com', password: 'abc123', userName: 'stan' },
    { userid: 'clark@media.com', password: 'abc123', userName: 'clark' },
  ];

  getUsers(): User[] {
    return this.usersDB;
  }

  postUsers(user: User) {
    if (this.usersDB.find((u) => u.userid === user.userid)) {
      return false;
    } else {
      this.usersDB.push(user);
      return true;
    }
  }
}
