import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';

const services = [
  { title: 'Advanced Bioinformatics & Computational Biology Services', description: 'Our Bioinformatics Services provide cutting-edge computational solutions for biological and biomedical research. The team specializes in analyzing genomics, transcriptomics, and proteomics datasets using current bioinformatics tools and pipelines.', image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80' },
  { title: 'English Editing, Educational and Translational Services', description: 'Hikmah Academia Publishing Institute offers a wide range of high-quality services tailored to empower researchers, authors, scholars, students, and professionals — spanning academic publishing, language enhancement, educational support, and translational expertise.', image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Academic Conferences, Symposia & Research Events', description: 'We organize and host academic conferences, symposia, and workshops that bring together scholars, researchers, and professionals from around the world.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Career Counselling & Professional Development Services', description: 'Our Career Counselling Services are designed to guide students, researchers, and professionals toward meaningful academic and career pathways.', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Author Coaching & Writing Support Services', description: 'Our Author Coaching Services are designed to support writers, researchers, and scholars at every stage of their publication journey.', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=1000&q=80' },
  { title: 'Career Strategy & Professional Growth Services', description: 'Our Career Strategy Services help individuals and organizations navigate academic and professional growth with clarity and purpose.', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80' },
];

@Component({
  selector: 'app-services-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-brand-surface py-24 md:py-32">
    <div class="animate-mesh pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-brand-tint-teal blur-3xl"></div>
    <div class="animate-mesh-slow pointer-events-none absolute -right-40 bottom-40 h-[420px] w-[420px] rounded-full bg-brand-tint-blue blur-3xl"></div>

    <div class="container-hapi relative space-y-20 md:space-y-28">
      <div *ngFor="let service of services; let i = index" [class]="'grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ' + (i % 2 === 1 ? 'lg:[direction:rtl]' : '')">
        <div appReveal [variant]="i % 2 === 1 ? 'right' : 'left'" class="lg:[direction:ltr]">
          <div class="img-zoom relative overflow-hidden rounded-[2rem] shadow-[0_28px_72px_rgba(20,24,31,0.18)]">
            <img [src]="service.image" [alt]="service.title" class="h-[320px] w-full object-cover md:h-[380px]" />
            <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/35 to-transparent"></div>
            <span class="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 font-serif text-lg text-accent-teal backdrop-blur">{{ pad(i + 1) }}</span>
          </div>
        </div>

        <div appReveal [variant]="i % 2 === 1 ? 'left' : 'right'" [delay]="150" class="lg:[direction:ltr]">
          <div>
            <p class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-accent-teal">Service {{ pad(i + 1) }}</p>
            <h2 class="font-serif text-3xl leading-tight tracking-tight text-brand-ink md:text-4xl">{{ service.title }}</h2>
            <p class="mt-5 max-w-xl text-base leading-relaxed text-brand-body">{{ service.description }}</p>
            <a routerLink="/contact" class="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-teal">
              Enquire about this service
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class ServicesDetailComponent {
  services = services;

  pad(n: number) {
    return String(n).padStart(2, '0');
  }
}
