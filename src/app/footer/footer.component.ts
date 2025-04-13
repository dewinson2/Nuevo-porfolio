import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  openLinkedIn(): void {
    window.open(
      'https://www.linkedin.com/in/dewinson-manuel-cruz-familia-7685682a1',
      '_blank',
      'noopener,noreferrer'
    );
  }
  openMail(): void {
    window.open(
      'mailto:dewinson12@gmail.com',
      '_blank',
      'noopener,noreferrer'
    );
  }

}
