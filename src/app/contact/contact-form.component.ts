import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule],
  template: `
  <form (submit)="onSubmit($event)" class="rounded-3xl border border-brand-line/70 bg-white p-8 shadow-[0_16px_48px_rgba(20,24,31,0.06)] md:p-10">
    <div *ngIf="submitted" class="py-10 text-center">
      <h3 class="font-heading text-lg font-bold text-brand-ink">Thank you for reaching out</h3>
      <p class="mt-2 text-sm text-brand-body">Our team will respond promptly with guidance tailored to your needs.</p>
    </div>

    <ng-container *ngIf="!submitted">
      <div class="grid gap-5 sm:grid-cols-2">
        <div>
          <label class="text-xs font-semibold uppercase tracking-wide text-brand-muted">Full Name</label>
          <input required type="text" class="mt-2 w-full rounded-md border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted focus:border-brand-primary focus:bg-white focus:outline-none" placeholder="Your name" />
        </div>
        <div>
          <label class="text-xs font-semibold uppercase tracking-wide text-brand-muted">Email</label>
          <input required type="email" class="mt-2 w-full rounded-md border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted focus:border-brand-primary focus:bg-white focus:outline-none" placeholder="you@example.com" />
        </div>
      </div>

      <div class="mt-5">
        <label class="text-xs font-semibold uppercase tracking-wide text-brand-muted">Inquiry Type</label>
        <select class="mt-2 w-full rounded-md border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink focus:border-brand-primary focus:bg-white focus:outline-none">
          <option>Journal Submission</option>
          <option>Book Publishing</option>
          <option>Editorial Services</option>
          <option>Conferences</option>
          <option>Academic Collaboration</option>
          <option>Other</option>
        </select>
      </div>

      <div class="mt-5">
        <label class="text-xs font-semibold uppercase tracking-wide text-brand-muted">Message</label>
        <textarea required rows="5" class="mt-2 w-full resize-none rounded-md border border-brand-line bg-brand-surface px-4 py-3 text-sm text-brand-ink placeholder:text-brand-muted focus:border-brand-primary focus:bg-white focus:outline-none" placeholder="How can we help?"></textarea>
      </div>

      <button type="submit" class="mt-7 w-full rounded-full bg-brand-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-primary-dark sm:w-auto">Send Message</button>
    </ng-container>
  </form>
  `,
})
export class ContactFormComponent {
  submitted = false;

  onSubmit(e: Event) {
    e.preventDefault();
    this.submitted = true;
  }
}
