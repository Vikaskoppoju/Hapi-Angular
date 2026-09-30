import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header.component';
import { JOURNALS, SUBJECTS, CONTACT, Journal } from '../data/site-data';

@Component({
  selector: 'app-journals-page',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHeaderComponent],
  template: `
  <app-page-header
    title="Journals"
    lede="Our journals give high-quality, peer-reviewed research a global platform across a wide range of disciplines. Each one is a trusted venue for researchers, educators and professionals to share new ideas, empirical findings and theoretical work.">
  </app-page-header>

  <div class="wrap grid gap-10 py-10 md:py-14 lg:grid-cols-[240px_1fr] lg:gap-14">
    <aside class="lg:sticky lg:top-6 lg:self-start">
      <label for="jq" class="label">Search</label>
      <input id="jq" type="search" [(ngModel)]="q" (ngModelChange)="sync()" placeholder="Title, subject or editor"
        class="mt-2 w-full border border-rule bg-white px-3 py-2.5 text-[0.9rem] placeholder:text-muted focus:border-ink focus:outline-none" />

      <p class="label mt-8">Subject</p>
      <ul class="mt-2 border-t border-rule text-[0.925rem]">
        <li>
          <button (click)="setSubject(null)" [class]="rowClass(subject === null)">
            <span>All subjects</span><span class="text-muted">{{ journals.length }}</span>
          </button>
        </li>
        <li *ngFor="let s of subjects">
          <button (click)="setSubject(s)" [class]="rowClass(subject === s)">
            <span>{{ s }}</span><span class="text-muted">{{ count(s) }}</span>
          </button>
        </li>
      </ul>

      <div class="mt-8 hidden border border-rule bg-paper-2/60 p-4 text-[0.875rem] leading-relaxed text-ink-soft lg:block">
        Questions about a submission? Write to<br />
        <a [href]="'mailto:' + email" class="link">{{ email }}</a>
      </div>
    </aside>

    <section>
      <div class="flex items-baseline justify-between border-b-2 border-ink pb-2">
        <h2 class="font-serif text-xl font-semibold">{{ subject ?? 'All journals' }}</h2>
        <span class="text-[0.85rem] text-muted">{{ visible.length }} {{ visible.length === 1 ? 'title' : 'titles' }}</span>
      </div>

      <p *ngIf="!visible.length" class="py-12 font-serif text-lg text-ink-soft">
        No journals match &ldquo;{{ q }}&rdquo;. <button class="link" (click)="clear()">Clear the search</button>
      </p>

      <article *ngFor="let j of visible" class="grid grid-cols-[88px_1fr] gap-5 border-b border-rule py-7 sm:grid-cols-[112px_1fr] sm:gap-7">
        <img [src]="j.cover" [alt]="j.title + ' cover'" class="cover w-full" loading="lazy" />
        <div class="min-w-0">
          <p class="text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-muted">{{ j.abbr }} &middot; {{ j.subject }}</p>
          <h3 class="mt-1.5 font-serif text-[1.35rem] font-medium leading-snug text-ink md:text-2xl">{{ j.title }}</h3>

          <div *ngIf="j.editors.length; else launching" class="mt-4">
            <p class="label">{{ j.editors.length > 1 ? 'Editors-in-Chief' : 'Editor-in-Chief' }}</p>
            <ul class="mt-2.5 grid max-w-2xl gap-4" [ngClass]="{ 'xl:max-w-none xl:grid-cols-2': j.editors.length > 1 }">
              <li *ngFor="let e of j.editors" class="flex items-center gap-3.5">
                <img [src]="e.photo" [alt]="e.name" class="h-14 w-14 shrink-0 rounded-full object-cover object-top ring-1 ring-rule" loading="lazy" />
                <span class="text-[0.9rem]">
                  <span class="block font-serif text-[1.05rem] text-ink">{{ e.name }}</span>
                  <span class="mt-0.5 block leading-snug text-ink-soft">{{ e.affiliation }}</span>
                </span>
              </li>
            </ul>
          </div>
          <ng-template #launching>
            <p class="mt-4 inline-block border-l-2 border-accent pl-3 text-[0.9rem] text-ink-soft">
              New title. The Editor-in-Chief will be announced soon.
            </p>
          </ng-template>

          <p class="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-[0.9rem]">
            <a [href]="j.url" class="link">Visit the journal</a>
            <a [href]="j.url + '/about/submissions'" class="link">Submit a manuscript</a>
            <a [href]="j.url + '/editorial-board'" class="link">Editorial board</a>
          </p>
        </div>
      </article>
    </section>
  </div>
  `,
})
export class JournalsPageComponent implements OnInit {
  journals = JOURNALS;
  subjects = SUBJECTS;
  email = CONTACT.emails.general;
  q = '';
  subject: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((p) => {
      this.q = p.get('q') ?? '';
      const s = p.get('subject');
      this.subject = s && (SUBJECTS as string[]).includes(s) ? s : null;
    });
  }

  get visible(): Journal[] {
    const q = this.q.trim().toLowerCase();
    return this.journals.filter(
      (j) =>
        (!this.subject || j.subject === this.subject) &&
        (!q || [j.title, j.abbr, j.subject, ...j.editors.flatMap((e) => [e.name, e.affiliation])].some((f) => f.toLowerCase().includes(q)))
    );
  }

  count(s: string) {
    return this.journals.filter((j) => j.subject === s).length;
  }

  rowClass(active: boolean) {
    return (
      'flex w-full items-baseline justify-between gap-3 border-b border-rule py-2.5 text-left ' +
      (active ? 'font-semibold text-ink' : 'text-ink-soft hover:text-ink')
    );
  }

  setSubject(s: string | null) {
    this.subject = s;
    this.sync();
  }

  clear() {
    this.q = '';
    this.sync();
  }

  sync() {
    // replaceState keeps the URL shareable without re-running navigation (and scroll-to-top) per keystroke
    const tree = this.router.createUrlTree([], {
      relativeTo: this.route,
      queryParams: { q: this.q.trim() || null, subject: this.subject },
    });
    this.location.replaceState(this.router.serializeUrl(tree));
  }
}
