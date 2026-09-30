import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header.component';
import { CONTACT, SERVICES } from '../data/site-data';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHeaderComponent],
  template: `
  <app-page-header
    title="Author services"
    lede="Publishing and scholarly support for authors, researchers, institutions and organisations, with the same commitment to ethical practice and academic quality that guides our journals and books.">
    <nav class="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem]" aria-label="Services on this page">
      <a *ngFor="let s of services" routerLink="/services" [fragment]="s.slug" class="link">{{ s.title }}</a>
    </nav>
  </app-page-header>

  <div class="wrap py-6 md:py-10">
    <article *ngFor="let s of services; let i = index" [id]="s.slug"
      class="grid scroll-mt-6 gap-6 border-b border-rule py-10 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-12 md:py-14">
      <figure>
        <img [src]="s.image" [alt]="s.imageAlt" class="aspect-[3/2] w-full object-cover" loading="lazy" />
      </figure>
      <div>
        <p class="label">Service {{ i + 1 }} of {{ services.length }}</p>
        <h2 class="mt-3 font-serif text-[1.75rem] font-medium leading-tight tracking-tight md:text-3xl">{{ s.title }}</h2>
        <p class="mt-3 font-serif text-lg italic text-brown">{{ s.short }}</p>
        <div class="prose-hapi mt-5 max-w-measure">
          <p *ngFor="let para of s.body">{{ para }}</p>
        </div>
        <a [href]="'mailto:' + email + '?subject=' + s.title" class="link mt-5 inline-block text-[0.95rem]">Enquire about this service</a>
      </div>
    </article>
  </div>

  <section class="border-y border-rule bg-paper-2/60">
    <div class="wrap grid gap-12 py-14 md:py-16 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2 class="font-serif text-2xl font-semibold">How we work</h2>
        <ol class="mt-5 border-t border-ink">
          <li *ngFor="let step of steps; let i = index" class="grid grid-cols-[2.5rem_1fr] border-b border-rule py-4">
            <span class="font-serif text-xl text-accent">{{ i + 1 }}</span>
            <span>
              <span class="block font-serif text-lg font-semibold">{{ step.title }}</span>
              <span class="mt-0.5 block text-ink-soft">{{ step.text }}</span>
            </span>
          </li>
        </ol>
      </div>
      <div>
        <h2 class="font-serif text-2xl font-semibold">Why researchers choose HAPI</h2>
        <ul class="mt-5 border-t border-ink">
          <li *ngFor="let r of reasons" class="border-b border-rule py-4 font-serif text-lg">{{ r }}</li>
        </ul>
        <p class="mt-8 leading-relaxed text-ink-soft">
          To discuss a project, write to
          <a [href]="'mailto:' + email" class="link">{{ email }}</a>. Tell us what you need, and we will
          suggest the right service and a timeline.
        </p>
      </div>
    </div>
  </section>
  `,
})
export class ServicesPageComponent {
  services = SERVICES;
  email = CONTACT.emails.services;

  steps = [
    { title: 'Consultation', text: 'Discuss your needs with our experts.' },
    { title: 'Planning', text: 'We design the right service for your project.' },
    { title: 'Execution', text: 'Professional delivery with quality checks throughout.' },
    { title: 'Outcome', text: 'You reach your academic goal, with our support to the end.' },
  ];

  reasons = [
    'An experienced editorial team',
    'Work to international standards',
    'Timely, reliable support',
    'A researcher-centred approach',
  ];
}
