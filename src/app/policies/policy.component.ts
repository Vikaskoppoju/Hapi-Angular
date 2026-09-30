import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { POLICY_LIST, Policy } from '../data/policies';
import { CONTACT } from '../data/site-data';

@Component({
  selector: 'app-policy-page',
  standalone: true,
  imports: [CommonModule, DatePipe, RouterLink, RouterLinkActive],
  template: `
  <ng-container *ngIf="policy as p">
    <div class="border-b border-rule">
      <div class="wrap pb-10 pt-8 md:pb-12 md:pt-10">
        <nav class="text-[0.8rem] text-muted" aria-label="Breadcrumb">
          <a routerLink="/" class="hover:text-ink hover:underline">Home</a>
          <span class="mx-2">/</span>
          <span>Policies</span>
          <span class="mx-2">/</span>
          <span class="text-ink-soft">{{ p.title }}</span>
        </nav>
        <h1 class="mt-6 font-serif text-4xl font-medium tracking-tight text-ink md:text-[3.25rem] md:leading-[1.1]">{{ p.title }}</h1>
        <p class="mt-4 max-w-measure font-serif text-lg leading-relaxed text-ink-soft md:text-xl">{{ p.summary }}</p>
        <p class="mt-5 text-[0.85rem] text-muted">
          Hikmah Academia Publishing Institute Pvt. Ltd. &middot; Last updated {{ p.updated | date: 'd MMMM y' }}
        </p>
      </div>
    </div>

    <div class="wrap grid gap-10 py-10 md:py-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
      <aside class="lg:sticky lg:top-6 lg:self-start">
        <p class="label">Policies</p>
        <ul class="mt-2 border-t border-rule text-[0.925rem]">
          <li *ngFor="let other of policies">
            <a [routerLink]="['/policies', other.slug]" routerLinkActive="!font-semibold !text-ink !border-l-accent"
              class="block border-b border-l-2 border-b-rule border-l-transparent py-2.5 pl-3 text-ink-soft hover:text-ink">{{ other.title }}</a>
          </li>
        </ul>

        <p class="label mt-8 hidden lg:block">On this page</p>
        <ol class="mt-2 hidden space-y-1.5 text-[0.85rem] lg:block">
          <li *ngFor="let s of p.sections; let i = index">
            <a [routerLink]="[]" [fragment]="'s' + (i + 1)" class="flex gap-2 text-muted hover:text-ink hover:underline">
              <span class="w-5 shrink-0 text-right tabular-nums">{{ i + 1 }}.</span><span>{{ s.heading }}</span>
            </a>
          </li>
        </ol>
      </aside>

      <article class="max-w-[46rem]">
        <div *ngIf="p.intro.length" class="prose-hapi border-b border-rule pb-8">
          <p *ngFor="let para of p.intro" class="!text-[1.15rem]">{{ para }}</p>
        </div>

        <section *ngFor="let s of p.sections; let i = index" [id]="'s' + (i + 1)" class="scroll-mt-6 border-b border-rule py-8">
          <h2 class="flex gap-3 font-serif text-[1.4rem] font-semibold leading-snug text-ink">
            <span class="text-accent tabular-nums">{{ i + 1 }}.</span>{{ s.heading }}
          </h2>
          <div class="mt-4 space-y-3.5 pl-0 md:pl-8">
            <ng-container *ngFor="let b of s.blocks">
              <p *ngIf="b.type === 'p'" class="font-serif text-[1.05rem] leading-[1.7] text-ink-soft">{{ asP(b).text }}</p>
              <ul *ngIf="b.type === 'list'" class="list-disc space-y-1.5 pl-5 font-serif text-[1.05rem] leading-relaxed text-ink-soft marker:text-muted">
                <li *ngFor="let item of asList(b).items">{{ item }}</li>
              </ul>
              <dl *ngIf="b.type === 'kv'" class="border-t border-rule">
                <div *ngFor="let kv of asKv(b).items" class="grid gap-1 border-b border-rule py-3 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <dt class="text-[0.9rem] text-muted">{{ kv[0] }}</dt>
                  <dd class="font-serif text-[1.05rem] text-ink">{{ kv[1] }}</dd>
                </div>
              </dl>
              <p *ngIf="b.type === 'link'"><a [href]="asLink(b).href" class="link font-serif text-[1.05rem]">{{ asLink(b).text }}</a></p>
            </ng-container>
          </div>
        </section>

        <aside class="mt-10 border-l-4 border-navy bg-white p-6 shadow-[0_0_0_1px_var(--rule)] md:p-8">
          <p class="label">Important notice</p>
          <p class="mt-3 font-serif text-[1.05rem] leading-relaxed text-ink-soft">
            Please read this {{ noticeName(p) }} carefully before using our website or services. By continuing to use
            our website, you acknowledge that you have read and understood it, subject to applicable law.
          </p>
          <p class="mt-4 text-[0.95rem] text-ink-soft">Please also review:</p>
          <ul class="mt-2 flex flex-wrap gap-x-6 gap-y-1.5">
            <li *ngFor="let other of othersOf(p)"><a [routerLink]="['/policies', other.slug]" class="link">{{ other.title }}</a></li>
          </ul>
          <p class="mt-5 border-t border-rule pt-4 text-[0.9rem] text-muted">
            Questions? Write to <a [href]="'mailto:' + email" class="link">{{ email }}</a>.
          </p>
        </aside>
      </article>
    </div>
  </ng-container>
  `,
})
export class PolicyPageComponent implements OnInit {
  policies = POLICY_LIST;
  policy?: Policy;
  email = CONTACT.emails.general;

  constructor(private route: ActivatedRoute, private router: Router, private title: Title) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const found = this.policies.find((p) => p.slug === params.get('slug'));
      if (!found) {
        this.router.navigate(['/policies', this.policies[0].slug], { replaceUrl: true });
        return;
      }
      this.policy = found;
      this.title.setTitle(`${found.title} | Hikmah Academia Publishing Institute`);
    });
  }

  othersOf(p: Policy) {
    return this.policies.filter((o) => o !== p);
  }

  noticeName(p: Policy) {
    return p.slug === 'legal' ? 'information' : p.title;
  }

  // Narrowing helpers for the block union in the template
  asP(b: any) { return b as { text: string }; }
  asList(b: any) { return b as { items: string[] }; }
  asKv(b: any) { return b as { items: [string, string][] }; }
  asLink(b: any) { return b as { text: string; href: string }; }
}
