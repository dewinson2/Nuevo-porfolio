import { Component, Input } from '@angular/core';
import { Card } from '../types/interfaces';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: Card;
}
