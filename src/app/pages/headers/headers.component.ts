import { Component, OnInit } from '@angular/core';
import { HeaderModel } from '../../models/header.model';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {

  public setupHeader: HeaderModel;

  constructor() { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void{
    this.setupHeader = {
      imgUrl: "https://simpleicon.com/wp-content/uploads/bank.png",
      bankingName: "BanPolombia",
      userName: "Edgar Arciniegas"
    };
  }

  public closeSession(value: boolean) {
    if (value) {
      alert("Hello world!!");
    }
  }
}
