import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const row1 = ['Materials Science', 'Plant Physiology', 'Biomedical Discovery', 'Social Sciences', 'Computing Systems', 'Surface Science', 'Pharmacotherapy'];
const row2 = ['Open Access', 'Peer Reviewed', 'Multidisciplinary', 'Ethical Publishing', 'Global Reach', 'Author First'];

@Component({
  selector: 'app-kinetic-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="overflow-hidden border-y border-brand-line bg-white py-10">
    <div class="marquee-mask">
      <div class="animate-marquee flex w-max items-center gap-10">
        <span *ngFor="let name of r1; let i = index" class="flex shrink-0 items-center gap-10 font-serif text-4xl italic tracking-tight text-brand-ink/80 md:text-5xl">
          {{ name }}<span class="h-2 w-2 rounded-full bg-brand-primary/60"></span>
        </span>
      </div>
    </div>

    <div class="marquee-mask mt-6">
      <div class="animate-marquee-rev flex w-max items-center gap-10">
        <span *ngFor="let name of r2; let i = index" class="text-outline flex shrink-0 items-center gap-10 font-heading text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          {{ name }}<span class="h-2 w-2 rounded-full bg-brand-ink/20"></span>
        </span>
      </div>
    </div>
  </section>
  `,
})
export class KineticMarqueeComponent {
  r1 = [...row1, ...row1];
  r2 = [...row2, ...row2];
}
