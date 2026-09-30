import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACT } from '../data/site-data';

// Single-colour brand glyphs (24px viewBox, filled) so they inherit the surrounding text colour.
const ICONS: Record<string, string> = {
  x: 'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2z',
  linkedin: 'M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 9.75h4V21H3V9.75zM9.5 9.75h3.83v1.54h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75z',
  facebook: 'M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63c-.27-.04-1.2-.12-2.27-.12-2.25 0-3.79 1.37-3.79 3.9v2.15H7.92v2.94h2.54V21h3.04z',
  instagram: 'M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 7.9a3.1 3.1 0 110-6.2 3.1 3.1 0 010 6.2zM17 5.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2zM12 3.6c2.73 0 3.06.01 4.13.06 2.78.13 4.08 1.45 4.21 4.21.05 1.08.06 1.4.06 4.13s-.01 3.06-.06 4.13c-.13 2.76-1.42 4.08-4.21 4.21-1.07.05-1.4.06-4.13.06s-3.06-.01-4.13-.06c-2.8-.13-4.08-1.45-4.21-4.21C3.61 15.06 3.6 14.73 3.6 12s.01-3.05.06-4.13C3.79 5.1 5.08 3.79 7.87 3.66 8.95 3.61 9.27 3.6 12 3.6zM12 2c-2.72 0-3.06.01-4.2.06-3.7.17-5.57 2.03-5.74 5.74C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.2c.17 3.7 2.03 5.57 5.74 5.74 1.14.05 1.48.06 4.2.06s3.06-.01 4.2-.06c3.7-.17 5.58-2.03 5.74-5.74.05-1.14.06-1.48.06-4.2s-.01-3.06-.06-4.2c-.16-3.7-2.03-5.57-5.74-5.74C15.06 2.01 14.72 2 12 2z',
  youtube: 'M21.58 7.19a2.5 2.5 0 00-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42a2.5 2.5 0 00-1.76 1.77C2 8.77 2 12 2 12s0 3.23.42 4.81a2.5 2.5 0 001.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 001.76-1.77C22 15.23 22 12 22 12s0-3.23-.42-4.81zM10 15V9l5.2 3-5.2 3z',
};

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ul class="flex items-center" [ngClass]="gapClass">
    <li *ngFor="let s of socials">
      <a [href]="s.href" target="_blank" rel="noopener" [attr.aria-label]="'HAPI on ' + s.label" [title]="s.label"
        class="block opacity-80 transition-opacity hover:opacity-100">
        <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path [attr.d]="icons[s.icon]" />
        </svg>
      </a>
    </li>
  </ul>
  `,
})
export class SocialLinksComponent {
  @Input() size = 15;
  @Input() gapClass = 'gap-3.5';
  socials = CONTACT.socials;
  icons = ICONS;
}
