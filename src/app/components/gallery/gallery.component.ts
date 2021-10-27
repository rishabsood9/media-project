import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  constructor(private snakBar: MatSnackBar) {}
  title = 'gridemo';
  public list: any = [];
  ngOnInit(): void {
    this.snakBar.open(
      'refresh page to dynamically load different pictures!!',
      '',
      { duration: 3000 }
    );

    this.list = [
      { rows: 1, cols: 1, data: 1 },
      { rows: 1, cols: 1, data: 2 },
      { rows: 1, cols: 1, data: 3 },
      { rows: 1, cols: 1, data: 4 },
      { rows: 1, cols: 1, data: 5 },
      { rows: 1, cols: 1, data: 6 },
      { rows: 1, cols: 1, data: 4 },

      { rows: 1, cols: 1, data: 5 },
      { rows: 1, cols: 1, data: 6 },
      { rows: 1, cols: 1, data: 7 },
      { rows: 1, cols: 1, data: 8 },
      { rows: 1, cols: 1, data: 9 },
    ];
  }
}
