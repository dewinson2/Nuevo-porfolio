import { Component } from '@angular/core';
import {experiences,experience} from '../types/interfaces';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences:experience[] = experiences;

}
