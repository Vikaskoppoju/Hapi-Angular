import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar.component';
import { PageHeroComponent } from '../shared/page-hero.component';
import { FooterComponent } from '../shared/cta-footer.component';
import { RevealDirective } from '../shared/reveal.directive';
import { ContactFormComponent } from './contact-form.component';

const locations = [
  { name: 'United Arab Emirates', flag: '🇦🇪', tint: 'bg-brand-surface-alt', accent: 'text-brand-primary' },
  { name: 'Malaysia', flag: '🇲🇾', tint: 'bg-brand-tint-teal', accent: 'text-accent-teal' },
  { name: 'Saudi Arabia', flag: '🇸🇦', tint: 'bg-brand-tint-amber', accent: 'text-accent-amber' },
  { name: 'United Kingdom', flag: '🇬🇧', tint: 'bg-brand-tint-blue', accent: 'text-accent-blue' },
  { name: 'India', flag: '🇮🇳', tint: 'bg-brand-tint-rose', accent: 'text-accent-rose' },
];

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, NavbarComponent, PageHeroComponent, FooterComponent, RevealDirective, ContactFormComponent],
  template: `
  <app-navbar></app-navbar>
  <main class="flex-1">
    <app-page-hero
      eyebrow="Get in Touch"
      title="Contact Us"
      description="Hikmah Academia Publishing Institute is committed to supporting authors, researchers, and institutions throughout their publishing journey. Our team will respond promptly with guidance tailored to your needs."
      image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1400&q=80"
      imageAlt="Writing desk with letters, envelopes, and a fountain pen"
      accent="rose"
      [chip]="{ value: '5', label: 'Global Offices' }"
      bandQuote="Supporting authors, researchers, and institutions throughout their publishing journey.">
    </app-page-hero>

    <section class="border-y border-brand-line bg-white py-14">
      <div class="container-hapi">
        <div appReveal>
          <p class="mb-8 text-center text-xs font-bold uppercase tracking-[0.22em] text-brand-muted">A Presence Across Five Countries</p>
        </div>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-5">
          <div *ngFor="let loc of locations; let i = index" appReveal [delay]="i * 90" variant="scale">
            <div [class]="'card-lift flex h-full min-h-[120px] flex-col justify-between rounded-2xl p-5 ' + loc.tint">
              <div class="flex items-center justify-between">
                <span [class]="'text-[10px] font-bold uppercase tracking-[0.18em] ' + loc.accent">{{ pad(i + 1) }}</span>
                <span class="text-2xl leading-none" role="img" [attr.aria-label]="loc.name + ' flag'">{{ loc.flag }}</span>
              </div>
              <p class="font-serif text-lg leading-tight tracking-tight text-brand-ink">{{ loc.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative overflow-hidden bg-brand-surface py-24 md:py-28">
      <div class="animate-mesh pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-brand-tint-rose blur-3xl"></div>

      <div class="container-hapi relative grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div class="space-y-5">
          <div appReveal variant="left">
            <div class="card-lift rounded-3xl border border-brand-line/70 bg-white p-7">
              <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint-rose text-accent-rose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </div>
              <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">Email</p>
              <a href="mailto:info@hapiacademia.com" class="mt-1.5 block font-heading text-lg font-bold text-brand-primary transition-colors hover:text-brand-primary-dark">info&#64;hapiacademia.com</a>
            </div>
          </div>

          <div appReveal [delay]="120" variant="left">
            <div class="card-lift rounded-3xl border border-brand-line/70 bg-white p-7">
              <div class="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-tint-rose text-accent-rose">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 10h8M8 14h5M21 12a9 9 0 11-4.4-7.7L21 3l-1.3 4.4A8.96 8.96 0 0121 12z" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </div>
              <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">Inquiries</p>
              <p class="mt-2 text-sm leading-relaxed text-brand-body">Journal submissions, book publishing, editorial services, conferences, and academic collaborations.</p>
            </div>
          </div>
        </div>

        <div appReveal [delay]="200" variant="right">
          <app-contact-form></app-contact-form>
        </div>
      </div>
    </section>
  </main>
  <app-footer></app-footer>
  `,
})
export class ContactPageComponent {
  locations = locations;

  pad(n: number) {
    return String(n).padStart(2, '0');
  }
}
