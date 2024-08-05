import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ICardBody } from "../../../data/data";
import { ECardType } from "../../../data/enums";

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  @Input() public cardInfo: ICardBody;
  @Output() cardSend : EventEmitter<ICardBody> = new EventEmitter();

  public eCardType = ECardType

  constructor(){}
  ngOnInit(): void {
  }

  emitCardId() {
    this.cardSend.emit(this.cardInfo);
  }

  getTypeCard(cardType: string){
    return this.eCardType[Number(cardType)]
  }
}
