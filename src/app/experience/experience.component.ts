import { Component, ChangeDetectionStrategy } from '@angular/core';
import {experiences,experience} from '../types/interfaces';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent {
  experiences:experience[] = experiences;
}
