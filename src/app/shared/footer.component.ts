import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CONTACT, POLICIES } from '../data/site-data';
import { SocialLinksComponent } from './social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, SocialLinksComponent],
  template: `
  <footer class="mt-auto border-t-4 border-brown bg-paper-2 text-[0.9rem] text-ink-soft">
    <div class="wrap grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
      <div>
        <p class="font-serif text-lg font-semibold text-brown">Hikmah Academia Publishing Institute</p>
        <p class="mt-3 max-w-xs font-serif italic leading-relaxed">
          Publishes peer-reviewed journals and books across diverse academic fields.
        </p>
      </div>

      <div>
        <p class="label mb-3">Publishing</p>
        <ul class="space-y-2">
          <li><a routerLink="/journals" class="hover:text-ink hover:underline">Journals</a></li>
          <li><a routerLink="/books" class="hover:text-ink hover:underline">Books</a></li>
          <li><a routerLink="/services" class="hover:text-ink hover:underline">Author services</a></li>
          <li><a routerLink="/contact" class="hover:text-ink hover:underline">Contact</a></li>
        </ul>
      </div>

      <div>
        <p class="label mb-3">Policies</p>
        <ul class="space-y-2">
          <li *ngFor="let p of policies"><a [routerLink]="p.href" class="hover:text-ink hover:underline">{{ p.label }}</a></li>
        </ul>
      </div>

      <div>
        <p class="label mb-3">Registered office</p>
        <address class="not-italic leading-relaxed">
          <span *ngFor="let line of contact.address" class="block">{{ line }}</span>
        </address>
        <p class="mt-3">
          <a [href]="contact.phoneHref" class="hover:text-ink">{{ contact.phone }}</a><br />
          <a [href]="'mailto:' + contact.emails.general" class="hover:text-ink">{{ contact.emails.general }}</a>
        </p>
      </div>
    </div>

    <div class="border-t border-rule">
      <div class="wrap flex flex-col gap-2 py-5 text-[0.8rem] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {{ year }} Hikmah Academia Publishing Institute Pvt. Ltd. All rights reserved.</p>
        <app-social-links [size]="17" gapClass="gap-4" class="text-ink-soft"></app-social-links>
      </div>
    </div>
  </footer>
  `,
})
export class FooterComponent {
  contact = CONTACT;
  policies = POLICIES;
  year = new Date().getFullYear();
}
