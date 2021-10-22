import { Injectable } from '@angular/core';
import { User } from 'src/app/IModels';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersDB = [
    { userid: 'abc@media.com', password: 'abc123', userName: 'tom' },
    { userid: 'def@media.com', password: 'abc123', userName: 'dick' },
    { userid: 'abc@media.com', password: 'abc123', userName: 'tom' },
    { userid: 'def@media.com', password: 'abc123', userName: 'dick' },
    { userid: 'abc@media.com', password: 'abc123', userName: 'tom' },
    { userid: 'def@media.com', password: 'abc123', userName: 'dick' },
    { userid: 'abc@media.com', password: 'abc123', userName: 'tom' },
    { userid: 'def@media.com', password: 'abc123', userName: 'dick' },
  ];

  getUsers(): User[] {
    return this.usersDB;
  }

  postUsers(user: User) {
    this.usersDB.push(user);
  }
}
