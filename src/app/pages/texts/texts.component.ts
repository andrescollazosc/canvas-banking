import { Component, OnInit } from '@angular/core';
import { TitleModel } from '../../models/title.model';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {

  public configTitles: TitleModel[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setUpTitles();
  }

  public setUpTitles(): void {
    this.configTitles = [
      {
        class: 'big-title',
        text: 'Titulo Gigante'
      },
      {
        class: 'medium-title',
        text: 'Titulo Mediano'
      },
      {
        class: 'small-title',
        text: 'Titulo Pequeño'
      }
    ];
  }

}
