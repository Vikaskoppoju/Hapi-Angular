import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CONTACT } from '../data/site-data';

// No backend yet: the form composes an email in the visitor's mail client.
@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <form #f="ngForm" (ngSubmit)="send()" class="border border-rule bg-white p-6 md:p-9">
    <h2 class="font-serif text-2xl font-medium">Send us a message</h2>
    <p class="mt-2 text-[0.925rem] text-ink-soft">Fields marked * are required.</p>

    <div class="mt-7 grid gap-5 sm:grid-cols-2">
      <div>
        <label for="cf-first" class="text-[0.875rem] font-medium text-ink">First name *</label>
        <input id="cf-first" name="first" required [(ngModel)]="m.first" [class]="field" />
      </div>
      <div>
        <label for="cf-last" class="text-[0.875rem] font-medium text-ink">Last name</label>
        <input id="cf-last" name="last" [(ngModel)]="m.last" [class]="field" />
      </div>
    </div>

    <div class="mt-5">
      <label for="cf-email" class="text-[0.875rem] font-medium text-ink">Email *</label>
      <input id="cf-email" name="email" type="email" required email [(ngModel)]="m.email" [class]="field" />
    </div>

    <div class="mt-5">
      <label for="cf-topic" class="text-[0.875rem] font-medium text-ink">Regarding</label>
      <select id="cf-topic" name="topic" [(ngModel)]="m.topic" [class]="field">
        <option *ngFor="let t of topics">{{ t }}</option>
      </select>
    </div>

    <div class="mt-5">
      <label for="cf-msg" class="text-[0.875rem] font-medium text-ink">Message *</label>
      <textarea id="cf-msg" name="message" rows="6" required [(ngModel)]="m.message" [class]="field + ' resize-y'"></textarea>
    </div>

    <div class="mt-7 flex flex-wrap items-center gap-4">
      <button type="submit" class="btn btn-primary" [disabled]="f.invalid" [class.opacity-50]="f.invalid">Send message</button>
      <span *ngIf="sent" class="text-[0.9rem] text-ink-soft">Your email app should now be open with the message ready to send.</span>
    </div>
  </form>
  `,
})
export class ContactFormComponent {
  field =
    'mt-1.5 block w-full border border-rule bg-paper px-3 py-2.5 text-[0.95rem] text-ink focus:border-ink focus:bg-white focus:outline-none';
  topics = ['Journal submission', 'Book publishing', 'Editorial services', 'Conferences', 'Academic collaboration', 'Other'];
  m = { first: '', last: '', email: '', topic: this.topics[0], message: '' };
  sent = false;

  send() {
    const name = `${this.m.first} ${this.m.last}`.trim();
    const body = `${this.m.message}\n\n${name}\n${this.m.email}`;
    window.location.href =
      `mailto:${CONTACT.emails.general}?subject=${encodeURIComponent(this.m.topic + ' enquiry from ' + name)}` +
      `&body=${encodeURIComponent(body)}`;
    this.sent = true;
  }
}
