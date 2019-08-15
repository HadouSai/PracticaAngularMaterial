import { Injectable } from '@angular/core';
import { Card } from '../interfaces/card';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  cards = [];
  data = [
    {
      id: '1',
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'lorem ipsum a lokare ni jirea kik no de rinkaku etu dex kaku an isox de ni todome butaraio and some'
    },
    {
      id: '2',
      title: 'Kiba',
      subtitle: 'Freshpudel',
      img: 'https://images.dog.ceo/breeds/spaniel-welsh/n02102177_881.jpg ',
      content: 'lorem ipsum a lokare ni jirea kik no de rinkaku etu dex kaku an isox de ni todome butaraio and some'
    },
    {
      id: '8',
      title: 'Harune',
      subtitle: 'England',
      img: 'https://images.dog.ceo/breeds/bulldog-boston/n02096585_1069.jpg',
      content: 'lorem ipsum a lokare ni jirea kik no de rinkaku etu dex kaku an isox de ni todome butaraio and some'
    },
    {
      id: '5',
      title: 'Tsuki',
      subtitle: 'kirone',
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'lorem ipsum a lokare ni jirea kik no de rinkaku etu dex kaku an isox de ni todome butaraio and some'
    }

  ];

  constructor() { }

  saveCards(card: Card) {
    this.cards.push(card);
    console.log(this.cards);
  }
  getData() {
    console.log(this.cards);
    return this.cards;
  }



}
