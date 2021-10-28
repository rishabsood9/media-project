import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private snakBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  onContactClick(){
    this.snakBar.open(
      'contact us on contact@media.com',
      '',
      { duration: 3000 }
    );
  }

}
