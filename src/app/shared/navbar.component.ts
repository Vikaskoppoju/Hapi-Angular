import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CONTACT } from '../data/site-data';
import { SocialLinksComponent } from './social-links.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, SocialLinksComponent],
  template: `
  <header class="border-b border-rule bg-paper">
    <div class="border-b border-rule bg-paper-2/60">
      <div class="wrap flex h-9 items-center justify-between text-[12.5px] text-muted">
        <span class="hidden sm:inline">Peer-reviewed &middot; Open access &middot; Independent</span>
        <div class="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
          <app-social-links [size]="14" gapClass="gap-3.5" class="text-ink-soft"></app-social-links>
          <span class="hidden h-3.5 w-px bg-rule sm:block"></span>
          <a [href]="'mailto:' + contact.emails.general" class="hidden hover:text-ink md:inline">{{ contact.emails.general }}</a>
          <a href="https://hapiacademia.com/wp-login.php" class="hover:text-ink">Log in</a>
        </div>
      </div>
    </div>

    <div class="wrap flex items-center justify-between gap-6 py-4">
      <a routerLink="/" class="flex items-center gap-3.5" (click)="open = false">
        <img src="img/hapi-logo.jpg" alt="" class="h-14 w-auto mix-blend-multiply md:h-16" />
        <span class="leading-tight">
          <span class="block font-serif text-[1.35rem] font-semibold tracking-tight text-brown md:text-2xl">Hikmah Academia</span>
          <span class="block font-serif text-[0.95rem] italic text-ink-soft">Publishing Institute</span>
        </span>
      </a>

      <a routerLink="/contact" class="btn btn-primary hidden md:inline-flex">Submit a manuscript</a>

      <button class="p-2 text-ink md:hidden" aria-label="Menu" [attr.aria-expanded]="open" (click)="open = !open">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
          <path *ngIf="open" d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          <path *ngIf="!open" d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
        </svg>
      </button>
    </div>

    <nav class="border-t border-rule md:block" [class.hidden]="!open">
      <ul class="wrap flex flex-col md:flex-row md:gap-8">
        <li *ngFor="let link of links">
          <a [routerLink]="link.href" routerLinkActive="!text-ink !border-accent" [routerLinkActiveOptions]="{ exact: link.href === '/' }"
            (click)="open = false"
            class="block border-b-2 border-transparent py-3 text-[0.925rem] font-medium text-ink-soft hover:text-ink md:py-3.5">
            {{ link.label }}
          </a>
        </li>
        <li class="py-3 md:hidden">
          <a routerLink="/contact" (click)="open = false" class="btn btn-primary w-full justify-center">Submit a manuscript</a>
        </li>
      </ul>
    </nav>
  </header>
  `,
})
export class NavbarComponent {
  contact = CONTACT;
  open = false;
  links = [
    { label: 'Home', href: '/' },
    { label: 'Journals', href: '/journals' },
    { label: 'Books', href: '/books' },
    { label: 'Author services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];
}
