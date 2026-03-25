import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Cards, Card } from '../types/interfaces';

@Component({
  selector: 'app-proyects',
  imports: [CardComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {
  cards: Card[] = Cards;
}
