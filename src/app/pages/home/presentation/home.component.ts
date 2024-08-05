import { Component, OnInit } from '@angular/core'
import { CardListService, ICardBody } from '../data/data';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit {
  constructor(private cardListService: CardListService) {}

  public cardList: ICardBody[];
  public cardListFilter: ICardBody[];
  public searchText: string;

  ngOnInit(): void {
    this.getCardList();
  }

  getCardList(){
    this.cardListService.getCardList().subscribe((result) => {
      this.cardList = result;
      this.cardListFilter = this.cardList;
    })
  }

  onKeyPress(event){
    event = event.toLowerCase();
    if(event != ""){
      this.cardListFilter = [];
      this.cardListFilter = this.cardList.filter((value) => {
        if(value.title.toLowerCase().includes(event) || value.description.toLowerCase().includes(event)){
          return value
        }
      })
    }else {
      this.cardListFilter = this.cardList;
    }
  }

  removeCard(card: ICardBody){
    for (let i = 0; i < this.cardListFilter.length; i++) {
      const element = this.cardListFilter[i];
      if(element.id == card.id){
        this.cardListFilter.splice(i, 1);
      }
    }

    for (let i = 0; i < this.cardList.length; i++) {
      const backupCard = this.cardList[i];
      if(backupCard.id == card.id){
        this.cardList.splice(i, 1);
      }
    }
  }
}
