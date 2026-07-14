import { Component } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-dark-mission',
  standalone: true,
  imports: [RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-brand-dark-alt py-28 md:py-36">
    <div class="animate-mesh pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-primary/25 blur-3xl"></div>
    <div class="animate-mesh-slow pointer-events-none absolute -right-40 bottom-0 h-[480px] w-[480px] rounded-full bg-accent-rose/15 blur-3xl"></div>
    <div class="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary/10 blur-3xl"></div>

    <div class="container-hapi relative text-center">
      <div appReveal variant="blur">
        <p class="mb-8 text-xs font-bold uppercase tracking-[0.26em] text-white/50">Our Mission</p>
        <blockquote class="mx-auto max-w-4xl font-serif text-3xl leading-[1.35] tracking-tight text-white md:text-5xl">
          A reputable, peer-reviewed platform for researchers, scholars, professors, and students to publish
          <span class="animate-gradient-pan bg-gradient-to-r from-brand-primary via-accent-rose to-brand-primary bg-clip-text italic text-transparent"> original, high-quality research </span>
          that contributes to academic discourse.
        </blockquote>
      </div>

      <div appReveal [delay]="250">
        <div class="mx-auto mt-14 h-px w-24 bg-white/15"></div>
        <p class="mx-auto mt-10 max-w-2xl text-base leading-relaxed text-white/60">
          Our vision — to become a globally respected academic publishing institute that promotes ethical scholarship, interdisciplinary research, and the dissemination of high-quality knowledge.
        </p>
      </div>
    </div>
  </section>
  `,
})
export class DarkMissionComponent {}
