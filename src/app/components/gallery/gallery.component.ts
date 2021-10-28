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
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },

      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
      { rows: 1, cols: 1 },
    ];
  }
}
