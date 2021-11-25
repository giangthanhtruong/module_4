import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-size',
  templateUrl: './change-size.component.html',
  styleUrls: ['./change-size.component.scss']
})
export class ChangeSizeComponent implements OnInit {
  fontSize = 14;
  constructor() { }

  ngOnInit(): void {
  }
  changeFontSizeValue(fontSize:any){
    this.fontSize= fontSize;
  }

}
