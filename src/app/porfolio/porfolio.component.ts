import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HeaderComponent } from '../header/header.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProyectsComponent } from '../proyects/proyects.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-porfolio',
  imports: [NavComponent,HeaderComponent, ExperienceComponent,ProyectsComponent, AboutMeComponent, FooterComponent],
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css'
})
export class PorfolioComponent {

}
