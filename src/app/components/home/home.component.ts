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
  constructor(private us: UserService) {}
  usersDB: User[] = [];
  userControl = new FormControl();

  filteredOptions: Observable<string[]> | undefined;
  ngOnInit(): void {
    this.usersDB = this.us.getUsers();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.usersDB
      .filter((user) => user.userName.toLowerCase().includes(filterValue))
      .map((a) => a.userName);
  }

  autoComplete() {
    if (this.filteredOptions) {
      this.filteredOptions = undefined;
    } else {
      this.filteredOptions = this.userControl.valueChanges.pipe(
        startWith(''),
        map((value) => this._filter(value))
      );
    }
  }

  onKeypressEvent(event: any) {
    const textArr: string[] = event.target.value.split(' ');

    if (textArr[textArr.length - 1] === '@') {
      this.autoComplete();
      
    } else {
      this.filteredOptions = undefined;
    }
  }

  onChangeEvent(event: any) {
    if (event.option.value) {
      event.option.value = event.option.value + '  |  ';
    }
  }
}
