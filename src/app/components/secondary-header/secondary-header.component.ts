import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { HeaderModel } from 'src/app/models/header.model';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.scss']
})
export class SecondaryHeaderComponent implements OnInit {

  constructor() { }

  @Input() configHeader: HeaderModel;
  @Output() closeEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.initComponent();
  }

  private initComponent(): void{
    if (!this.configHeader) {
      this.configHeader = {
        bankingName: "My Bank",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/ING_Group_N.V._Logo.svg/1280px-ING_Group_N.V._Logo.svg.png",
        userName: "Andres Collazos"
      } 
    }
  }

  public closeSession() {
    
  }
}
