import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ARTICLES, EDITORS, JOURNALS, SUBJECTS } from '../data/site-data';
import { JournalSpotlightComponent } from './journal-spotlight.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, JournalSpotlightComponent],
  template: `
  <!-- Intro + latest articles -->
  <section class="border-b border-rule">
    <div class="wrap grid grid-cols-1 gap-12 py-12 md:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
      <div class="flex flex-col">
        <p class="label">Your trusted publication partner</p>
        <h1 class="mt-5 font-serif text-[2.6rem] font-medium leading-[1.08] tracking-tight text-ink md:text-6xl">
          Publishing insight.<br />
          <span class="italic text-brown">Cultivating wisdom.</span>
        </h1>
        <div class="prose-hapi mt-7 max-w-measure">
          <p>
            Hikmah Academia Publishing Institute is a multidisciplinary, open-access publisher. We give
            high-quality research a trusted home and connect authors, reviewers and readers through rigorous
            standards and modern publishing practice. The name comes from <em>hikmah</em>, wisdom, and so does
            the aim: support ideas that matter and keep knowledge open to everyone.
          </p>
        </div>

        <form class="mt-9 flex max-w-xl border border-ink/70 bg-white" (submit)="search($event)" role="search">
          <label for="home-q" class="sr-only">Search journals</label>
          <input id="home-q" name="q" [(ngModel)]="q" type="search" placeholder="Search journals by title, subject or editor"
            class="min-w-0 flex-1 bg-transparent px-4 py-3 text-[0.95rem] text-ink placeholder:text-muted focus:outline-none" />
          <button type="submit" class="bg-ink px-5 text-sm font-semibold text-paper hover:bg-navy">Search</button>
        </form>

        <p class="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
          <a routerLink="/journals" class="link">Browse all {{ journals.length }} journals</a>
          <a routerLink="/books" class="link">Propose a book</a>
          <a routerLink="/services" class="link">Author services</a>
        </p>

        <dl class="mt-10 grid max-w-xl grid-cols-2 border-t border-ink sm:grid-cols-4 lg:mt-auto">
          <div *ngFor="let f of facts" class="border-b border-rule py-4 pr-4 sm:border-b-0">
            <dt class="font-serif text-2xl text-ink">{{ f.value }}</dt>
            <dd class="mt-1 text-[0.8rem] leading-snug text-muted">{{ f.label }}</dd>
          </div>
        </dl>
      </div>

      <aside class="lg:border-l lg:border-rule lg:pl-12">
        <div class="flex items-baseline justify-between border-b-2 border-ink pb-2">
          <h2 class="font-serif text-xl font-semibold">Latest articles</h2>
          <a routerLink="/journals" class="text-[0.8rem] text-muted hover:text-ink hover:underline">All journals</a>
        </div>
        <ol>
          <li *ngFor="let a of articles" class="flex gap-5 border-b border-rule py-6 last:border-b-0">
            <a [href]="a.url" class="shrink-0 self-start" [attr.aria-label]="a.title">
              <img [src]="a.cover" [alt]="a.journal + ' issue cover'" class="cover w-20 transition-transform duration-200 hover:-translate-y-0.5 sm:w-24" />
            </a>
            <div class="min-w-0 flex-1">
              <p class="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-navy">{{ a.journal }}</p>
              <h3 class="mt-1 font-serif text-[1.08rem] leading-snug text-ink">
                <a [href]="a.url" class="hover:underline">{{ a.title }}</a>
              </h3>
              <p class="mt-1 truncate text-[0.8rem] text-ink-soft" [title]="a.authors.join(', ')">{{ a.authors.join(', ') }}</p>
              <div class="mt-3 flex items-center justify-between gap-3">
                <span class="flex min-w-0 items-center gap-2.5">
                  <img [src]="a.editor.photo" [alt]="a.editor.name" class="h-10 w-10 shrink-0 rounded-full object-cover object-top ring-1 ring-rule" />
                  <span class="min-w-0 text-[0.775rem] leading-tight">
                    <span class="block text-muted">Editor-in-Chief</span>
                    <span class="block truncate font-serif text-[0.85rem] text-ink">{{ a.editor.name }}</span>
                  </span>
                </span>
                <span class="shrink-0 text-right text-[0.75rem] leading-tight text-muted">
                  {{ a.published }}<br />
                  <a [href]="'https://doi.org/' + a.doi" class="hover:text-ink hover:underline">DOI</a>
                </span>
              </div>
            </div>
          </li>
        </ol>
      </aside>
    </div>
  </section>

  <!-- Journals: spotlight + cover strip -->
  <app-journal-spotlight></app-journal-spotlight>

  <!-- Editors-in-Chief -->
  <section class="border-b border-rule">
    <div class="wrap py-14 md:py-16">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 class="font-serif text-3xl font-medium tracking-tight md:text-4xl">Editors-in-Chief</h2>
          <p class="mt-3 max-w-2xl font-serif text-lg text-ink-soft">
            Each journal is led by an established researcher in its field, supported by an international editorial board.
          </p>
        </div>
      </div>

      <ul class="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
        <li *ngFor="let e of editors" class="flex flex-col items-center text-center">
          <img [src]="e.photo" [alt]="e.name" loading="lazy"
            class="aspect-square w-32 rounded-full object-cover object-top ring-1 ring-rule ring-offset-4 ring-offset-paper sm:w-36" />
          <p class="mt-4 font-serif text-[1.05rem] leading-snug text-ink">{{ e.name }}</p>
          <p class="mt-1 max-w-[15rem] text-[0.8rem] leading-snug text-muted">{{ e.affiliation }}</p>
          
        </li>
      </ul>
    </div>
  </section>

  <!-- About -->
  <section class="border-b border-rule">
    <div class="wrap grid gap-12 py-14 md:py-20 lg:grid-cols-12">
      <div class="lg:col-span-7">
        <p class="label">About HAPI</p>
        <h2 class="mt-4 font-serif text-3xl font-medium leading-tight tracking-tight md:text-[2.4rem]">
          An independent, international scholarly publisher
        </h2>
        <div class="prose-hapi mt-6 max-w-measure">
          <p>
            HAPI publishes a growing portfolio of multidisciplinary journals for researchers, educators and
            practitioners across the sciences, social sciences, arts and humanities.
          </p>
          <p>
            Our model rests on academic integrity, transparency and accessibility. We pair rigorous editorial
            standards with efficient digital workflows, so authors have a reliable, supportive place to share
            their research with a global audience.
          </p>
        </div>
      </div>

      <figure class="self-end lg:col-span-5 lg:pl-6">
        <blockquote class="border-l-2 border-accent pl-6 font-serif text-[1.35rem] italic leading-snug text-brown md:text-2xl">
          &ldquo;Guided by the principle of <em class="not-italic">hikmah</em>, wisdom, we aim to foster meaningful
          scholarship that contributes to intellectual progress and societal development.&rdquo;
        </blockquote>
        <figcaption class="mt-4 pl-6 text-[0.85rem] text-muted">About HAPI</figcaption>
      </figure>
    </div>

    <div class="wrap pb-14 md:pb-16">
      <div class="flex items-baseline justify-between border-b-2 border-ink pb-2">
        <h3 class="font-serif text-xl font-semibold">What authors can expect</h3>
        <a routerLink="/journals" class="text-[0.85rem] text-muted hover:text-ink hover:underline">Find a journal</a>
      </div>
      <ul class="grid sm:grid-cols-2 lg:grid-cols-3">
        <li *ngFor="let c of commitments; let i = index"
          class="flex gap-4 border-b border-rule py-7 sm:pr-8 lg:[&:nth-child(3n+2)]:border-x lg:[&:nth-child(3n+2)]:px-8 lg:[&:nth-child(3n)]:pl-8">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"
            stroke-linecap="round" stroke-linejoin="round" class="mt-0.5 shrink-0 text-navy" aria-hidden="true">
            <path [attr.d]="c.icon" />
          </svg>
          <div>
            <h4 class="font-serif text-[1.15rem] font-semibold text-ink">{{ c.title }}</h4>
            <p class="mt-1.5 leading-relaxed text-ink-soft">{{ c.text }}</p>
          </div>
        </li>
      </ul>
    </div>

    <div class="wrap pb-14 md:pb-20">
      <div class="bg-paper-2 px-6 py-8 md:px-12 md:py-12">
        <p class="label">Our purpose</p>
        <dl class="mt-6">
          <div *ngFor="let m of mvv; let i = index"
            class="grid gap-3 border-t border-ink/15 py-7 first:border-ink md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10 md:py-9">
            <dt class="flex items-baseline gap-3 md:block">
              <span class="font-serif text-sm text-accent tabular-nums">0{{ i + 1 }}</span>
              <span class="font-serif text-[1.9rem] font-medium leading-none tracking-tight text-brown md:mt-2 md:block md:text-[2.3rem]">{{ m.title }}</span>
            </dt>
            <dd class="max-w-[46rem] font-serif text-[1.2rem] leading-[1.55] text-ink md:text-[1.4rem]">{{ m.text }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>

  <!-- Subjects -->
  <section class="border-b border-rule">
    <div class="wrap py-14 md:py-16">
      <h2 class="font-serif text-2xl font-medium tracking-tight md:text-3xl">Browse by subject</h2>
      <div class="mt-8 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
        <a *ngFor="let s of subjects" routerLink="/journals" [queryParams]="{ subject: s }"
          class="group flex items-baseline justify-between gap-4 border-b border-rule py-4">
          <span>
            <span class="block font-serif text-lg text-ink group-hover:text-navy group-hover:underline">{{ s }}</span>
            <span class="mt-1 block text-[0.8rem] tracking-wide text-muted">{{ abbrs(s) }}</span>
          </span>
          <span class="shrink-0 text-sm text-muted">{{ count(s) }}</span>
        </a>
      </div>
    </div>
  </section>

  <!-- For authors -->
  <section class="bg-navy-deep text-white">
    <div class="wrap grid gap-10 py-14 md:grid-cols-3 md:gap-12 md:py-16">
      <div>
        <h2 class="font-serif text-2xl">Submit to a journal</h2>
        <p class="mt-3 font-serif leading-relaxed text-white/75">Find the title that fits your research. The directory lists every journal with its editor-in-chief.</p>
        <a routerLink="/journals" class="mt-5 inline-block text-sm font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white">Choose a journal</a>
      </div>
      <div class="md:border-l md:border-white/15 md:pl-12">
        <h2 class="font-serif text-2xl">Publish a book</h2>
        <p class="mt-3 font-serif leading-relaxed text-white/75">Scientific texts, research books, monographs and conference proceedings. There are no reading or submission fees.</p>
        <a routerLink="/books" class="mt-5 inline-block text-sm font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white">Book proposals</a>
      </div>
      <div class="md:border-l md:border-white/15 md:pl-12">
        <h2 class="font-serif text-2xl">Get support</h2>
        <p class="mt-3 font-serif leading-relaxed text-white/75">Editing, translation, bioinformatics, writing coaching and career guidance for researchers.</p>
        <a routerLink="/services" class="mt-5 inline-block text-sm font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white">Author services</a>
      </div>
    </div>
  </section>
  `,
})
export class HomeComponent {
  journals = JOURNALS;
  articles = ARTICLES.slice(0, 3);
  editors = EDITORS;
  facts = [
    { value: String(JOURNALS.length), label: 'peer-reviewed journals' },
    { value: String(SUBJECTS.length), label: 'subject areas' },
    { value: '100%', label: 'open access' },
    { value: 'DOI', label: 'Crossref-registered articles' },
  ];
  subjects = SUBJECTS;
  q = '';

  // Icon paths are simple 24px line drawings (stroke only).
  commitments = [
    {
      title: 'Specialised journals',
      text: 'Fourteen multidisciplinary and specialised titles across five subject areas.',
      icon: 'M4 5.5A1.5 1.5 0 015.5 4H10v16H5.5A1.5 1.5 0 014 18.5v-13zM10 4h4v16h-4M14 5l4.2-1 2.8 15.4-4.2.8L14 5',
    },
    {
      title: 'Transparent peer review',
      text: 'Every submission goes through a rigorous and transparent peer-review process.',
      icon: 'M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12zM12 15a3 3 0 100-6 3 3 0 000 6z',
    },
    {
      title: 'Ethical publishing',
      text: 'Practice aligned with international standards, respecting authorship and originality.',
      icon: 'M12 3l7.5 3v5.5c0 4.5-3.2 8.2-7.5 9.5-4.3-1.3-7.5-5-7.5-9.5V6L12 3zM8.8 12.2l2.2 2.2 4.4-4.6',
    },
    {
      title: 'Open access',
      text: 'Published articles are freely available online, for global reach and digital accessibility.',
      icon: 'M12 21a9 9 0 100-18 9 9 0 000 18zM3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
    },
    {
      title: 'Citable DOIs',
      text: 'Each published article is registered with a Crossref DOI so it can be cited and found.',
      icon: 'M9.5 14.5l5-5M10.5 6.5l1.8-1.8a4 4 0 015.7 5.7l-1.8 1.8M13.5 17.5l-1.8 1.8a4 4 0 01-5.7-5.7l1.8-1.8',
    },
    {
      title: 'Author support',
      text: 'Dedicated editorial and author support from submission through to publication.',
      icon: 'M4 5h16v11H9l-5 4V5zM8 9.5h8M8 12.5h5',
    },
  ];

  mvv = [
    { title: 'Mission', text: 'To give researchers, scholars, professors and students a reputable, peer-reviewed platform for original, high-quality research that contributes to academic discourse.' },
    { title: 'Vision', text: 'To become a globally respected publishing institute that promotes ethical scholarship, interdisciplinary research and knowledge that serves science, education and sustainable development.' },
    { title: 'Values', text: 'Transparency, fairness and honesty in publishing, with respect for authorship, originality and ethical research conduct.' },
  ];

  constructor(private router: Router) {}

  count(s: string) {
    const n = this.journals.filter((j) => j.subject === s).length;
    return n === 1 ? '1 journal' : `${n} journals`;
  }

  abbrs(s: string) {
    return this.journals.filter((j) => j.subject === s).map((j) => j.abbr).join(' · ');
  }

  search(e: Event) {
    e.preventDefault();
    this.router.navigate(['/journals'], { queryParams: this.q.trim() ? { q: this.q.trim() } : {} });
  }
}
