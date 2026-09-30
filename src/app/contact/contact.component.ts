import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header.component';
import { ContactFormComponent } from './contact-form.component';
import { CONTACT } from '../data/site-data';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent, ContactFormComponent],
  template: `
  <app-page-header
    title="Contact"
    lede="Questions about a journal submission, a book, our editorial services, a conference or an academic collaboration? Get in touch and our team will reply with guidance for your situation.">
  </app-page-header>

  <div class="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-5">
      <h2 class="border-b-2 border-ink pb-2 font-serif text-xl font-semibold">Who to write to</h2>
      <dl>
        <div *ngFor="let d of desks" class="border-b border-rule py-4">
          <dt class="text-[0.9rem] text-muted">{{ d.label }}</dt>
          <dd class="mt-1"><a [href]="'mailto:' + d.email" class="link break-all font-serif text-lg">{{ d.email }}</a></dd>
        </div>
        <div class="border-b border-rule py-4">
          <dt class="text-[0.9rem] text-muted">Telephone</dt>
          <dd class="mt-1"><a [href]="c.phoneHref" class="font-serif text-lg text-ink hover:underline">{{ c.phone }}</a></dd>
        </div>
      </dl>

      <h2 class="mt-12 border-b-2 border-ink pb-2 font-serif text-xl font-semibold">Registered office</h2>
      <address class="py-4 font-serif text-lg not-italic leading-relaxed text-ink-soft">
        Hikmah Academia Publishing Institute Pvt. Ltd.<br />
        <span *ngFor="let line of c.address" class="block">{{ line }}</span>
      </address>

      <p class="label mt-6">Presence in</p>
      <p class="mt-2 font-serif text-lg text-ink-soft">{{ c.presence.join(' · ') }}</p>
    </div>

    <div class="lg:col-span-7">
      <app-contact-form></app-contact-form>
    </div>
  </div>
  `,
})
export class ContactPageComponent {
  c = CONTACT;
  desks = [
    { label: 'General enquiries & journal submissions', email: CONTACT.emails.general },
    { label: 'Book proposals', email: CONTACT.emails.books },
    { label: 'Author services', email: CONTACT.emails.services },
    { label: 'Technical support', email: CONTACT.emails.support },
  ];
}
