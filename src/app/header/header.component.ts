import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
  openGithub(): void {
    window.open(
      'https://github.com/dewinson2',
      '_blank',
      'noopener,noreferrer'
    );

  }
}
