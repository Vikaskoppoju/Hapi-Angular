import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ARTICLES, EDITORS, JOURNALS, SUBJECTS } from '../data/site-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
  <!-- Intro + latest articles -->
  <section class="border-b border-rule">
    <div class="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-14">
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
          <li *ngFor="let a of articles" class="flex gap-5 border-b border-rule py-5 last:border-b-0">
            <img [src]="a.cover" [alt]="a.journal + ' issue cover'" class="cover w-16 shrink-0 self-start" />
            <div class="min-w-0 flex-1">
              <p class="text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-navy">{{ a.journal }}</p>
              <h3 class="mt-1 font-serif text-[1.08rem] leading-snug text-ink">
                <a [href]="a.url" class="hover:underline">{{ a.title }}</a>
              </h3>
              <p class="mt-1 truncate text-[0.8rem] text-ink-soft" [title]="a.authors.join(', ')">{{ a.authors.join(', ') }}</p>
              <div class="mt-3 flex items-center justify-between gap-3">
                <span class="flex min-w-0 items-center gap-2.5">
                  <img [src]="a.editor.photo" [alt]="a.editor.name" class="h-8 w-8 shrink-0 rounded-full object-cover object-top ring-1 ring-rule" />
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

  <!-- Journal shelf -->
  <section class="border-b border-rule bg-paper-2/50">
    <div class="wrap py-14 md:py-16">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 class="font-serif text-3xl font-medium tracking-tight md:text-4xl">Our journals</h2>
          <p class="mt-3 max-w-2xl font-serif text-lg text-ink-soft">
            Fourteen peer-reviewed titles. All are open access, and every one of them encourages work that crosses disciplines.
          </p>
        </div>
        <a routerLink="/journals" class="btn btn-ghost">Journal directory</a>
      </div>

      <ul class="mt-10 grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-4 lg:grid-cols-7">
        <li *ngFor="let j of journals">
          <a routerLink="/journals" [queryParams]="{ q: j.abbr }" class="group block">
            <img [src]="j.cover" [alt]="j.title + ' cover'" class="cover w-full transition-transform duration-200 group-hover:-translate-y-1" loading="lazy" />
            <p class="mt-3 text-[0.7rem] font-semibold tracking-[0.1em] text-muted">{{ j.abbr }}</p>
            <p class="mt-0.5 font-serif text-[0.95rem] leading-snug text-ink group-hover:underline">{{ j.title }}</p>
          </a>
        </li>
      </ul>
    </div>
  </section>

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
        <li *ngFor="let e of editors">
          <img [src]="e.photo" [alt]="e.name" class="aspect-[4/5] w-full object-cover object-top" loading="lazy" />
          <p class="mt-3 font-serif text-[1.05rem] leading-snug text-ink">{{ e.name }}</p>
          <p class="mt-1 text-[0.8rem] leading-snug text-muted">{{ e.affiliation }}</p>
          <p class="mt-2 flex flex-wrap gap-1.5">
            <a *ngFor="let abbr of e.journals" routerLink="/journals" [queryParams]="{ q: abbr }"
              class="border border-rule px-1.5 py-0.5 text-[0.7rem] font-semibold tracking-[0.08em] text-navy hover:border-navy">{{ abbr }}</a>
          </p>
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

      <div class="lg:col-span-5">
        <p class="label mb-2">What authors can expect</p>
        <ol class="border-t border-ink">
          <li *ngFor="let c of commitments; let i = index" class="flex gap-4 border-b border-rule py-3.5">
            <span class="w-5 shrink-0 font-serif text-accent">{{ i + 1 }}</span>
            <span class="font-serif text-[1.05rem] text-ink">{{ c }}</span>
          </li>
        </ol>
      </div>
    </div>

    <div class="wrap pb-14 md:pb-20">
      <div class="grid border-y border-ink md:grid-cols-3 md:divide-x md:divide-rule">
        <div *ngFor="let m of mvv" class="py-7 md:px-8 md:first:pl-0 md:last:pr-0">
          <h3 class="font-serif text-xl font-semibold text-brown">{{ m.title }}</h3>
          <p class="mt-3 font-serif leading-relaxed text-ink-soft">{{ m.text }}</p>
        </div>
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

  commitments = [
    'Multidisciplinary and specialised academic journals',
    'A rigorous and transparent peer-review process',
    'Ethical publishing aligned with international standards',
    'Global reach and digital accessibility',
    'Dedicated editorial and author support',
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
