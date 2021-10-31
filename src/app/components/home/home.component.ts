import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from 'src/app/IModels';
import { map, startWith } from 'rxjs/operators';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) {}
  usersDB: User[] = [];
  userControl = new FormControl();
  addCSS: boolean = false;
  innerTextBoxValue = '';
  addedUserNames: string[] = [];
  allUsers: User[] = [];

  filteredOptions: Observable<string[]> | undefined;
  ngOnInit(): void {
    this.usersDB = this.userService.getUsers();
    this.allUsers = [...this.usersDB];
    const user = localStorage.getItem('user');
    if (user) {
      this.userService.postUsers(JSON.parse(user));
    }
  }

  onKeypressEvent(event: any) {
    if (event.target.value) {
      const textArr: string[] = event.target.value.split(' ');
      let lastItem = '';

      this.allUsers.forEach((user) => {
        if (!(this.usersDB.includes(user) || textArr.includes(user.userName))) {
          this.usersDB.push(user);
        }
      });
      if (textArr[textArr.length - 1] === '@') {
        this.autoComplete();
        lastItem = textArr[textArr.length - 1];
      } else {
        this.filteredOptions = undefined;
      }
      this.innerTextBoxValue = event.target.value;
    } else {
      this.addCSS = false;
    }
  }

  onChangeEvent(event: any) {
    if (event.option.value) {
      this.removeByAttr(this.usersDB, 'userName', event.option.value);
      this.addCSS = true;
      var textValue: any = document.getElementById('textarea');
      this.innerTextBoxValue = this.innerTextBoxValue
        .split(' ')
        .map((t) => {
          if (t.charAt(0) === '@') {
            return t.substring(1);
          } else {
            return t;
          }
        })
        .join(' ');
      textValue.value = this.innerTextBoxValue + textValue.value + ' | ';
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.usersDB
      .filter((user) => user.userName.toLowerCase().includes(filterValue))
      .map((a) => a.userName);
  }

  private autoComplete() {
    this.filteredOptions = this.userControl.valueChanges.pipe(
      startWith(''),
      map((value) => {
        return this._filter(value);
      })
    );
  }

  private removeByAttr(arr: any, attr: string, value: string | undefined) {
    var i = arr.length;
    while (i--) {
      if (
        arr[i] &&
        arr[i].hasOwnProperty(attr) &&
        arguments.length > 2 &&
        arr[i][attr] === value
      ) {
        arr.splice(i, 1);
      }
    }
    return arr;
  }
}
