import { Component, Input, OnInit } from '@angular/core';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {

  @Input() configTitle: TitleModel;

  constructor() { }

  ngOnInit(): void {
    if (!this.configTitle) {
      this.configTitle = {
        class: 'big-title',
        text: 'Big Title'
      }
    }
  }

}
