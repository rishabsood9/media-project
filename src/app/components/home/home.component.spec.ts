import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { of } from 'rxjs';
import { UserService } from 'src/app/services/user-service/user.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MatAutocompleteModule],
      providers: [
        {
          provide: UserService,
          useValue: {
            getUsers: () => {
             return [
                {
                  userid: 'tom@media.com',
                  password: 'abc123',
                  userName: 'tom',
                },
                {
                  userid: 'jeffy@media.com',
                  password: 'abc123',
                  userName: 'jeffy',
                },
              ];
            },
            postUsers: () => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
