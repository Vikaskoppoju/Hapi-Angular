import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../shared/page-header.component';
import { CONTACT } from '../data/site-data';

@Component({
  selector: 'app-books-page',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  template: `
  <app-page-header
    title="Books"
    lede="We publish academic and scholarly books across science, technology, agriculture, the environment and the humanities. Every title goes through a structured editorial and review process, and we support authors from manuscript preparation through to global distribution.">
  </app-page-header>

  <div class="wrap grid gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-16">
    <div class="lg:col-span-8">
      <section>
        <h2 class="font-serif text-3xl font-medium tracking-tight">Publish a book with us</h2>
        <div class="prose-hapi mt-5 max-w-measure">
          <p>
            Whether you are a first-time writer or an experienced author, we guide you through publishing with
            professional support and a commitment to quality.
          </p>
          <p>
            We specialise in scientific texts and research books, monographs and conference proceedings. Our job
            is to turn manuscripts into well-made books that reach readers worldwide.
          </p>
        </div>
      </section>

      <section class="mt-14">
        <h2 class="border-b-2 border-ink pb-2 font-serif text-2xl font-semibold">Why publish with HAPI</h2>
        <dl class="grid sm:grid-cols-2 sm:gap-x-10">
          <div *ngFor="let b of benefits" class="border-b border-rule py-5">
            <dt class="font-serif text-lg font-semibold text-brown">{{ b.title }}</dt>
            <dd class="mt-1.5 leading-relaxed text-ink-soft">{{ b.text }}</dd>
          </div>
        </dl>
      </section>

      <section class="mt-14">
        <h2 class="border-b-2 border-ink pb-2 font-serif text-2xl font-semibold">The publishing process</h2>
        <ol>
          <li *ngFor="let p of process; let i = index" class="grid grid-cols-[2.5rem_1fr] border-b border-rule py-5 sm:grid-cols-[3rem_14rem_1fr] sm:gap-6">
            <span class="font-serif text-2xl text-accent">{{ i + 1 }}</span>
            <h3 class="font-serif text-lg font-semibold text-ink">{{ p.title }}</h3>
            <p class="col-start-2 mt-1 leading-relaxed text-ink-soft sm:col-start-3 sm:mt-0">{{ p.text }}</p>
          </li>
        </ol>
      </section>
    </div>

    <aside class="lg:col-span-4">
      <div class="border-t-4 border-navy bg-white p-6 shadow-[0_0_0_1px_var(--rule)] lg:sticky lg:top-6">
        <p class="label">Book proposals</p>
        <h2 class="mt-3 font-serif text-2xl font-medium leading-snug">Ready to get started?</h2>
        <p class="mt-3 leading-relaxed text-ink-soft">
          For a single title, an edited collection or a new series, use one of the proposal forms (Word format)
          and send it to:
        </p>
        <a [href]="'mailto:' + email" class="mt-3 block break-all font-serif text-lg text-navy underline underline-offset-4">{{ email }}</a>

        <ul class="mt-5 space-y-1.5 text-[0.925rem] text-ink-soft">
          <li>&ndash; Book Proposal Form</li>
          <li>&ndash; Book Series Proposal Form</li>
        </ul>

        <dl class="mt-6 border-t border-rule text-[0.925rem]">
          <div class="flex justify-between gap-4 border-b border-rule py-3">
            <dt class="text-muted">First response</dt><dd class="font-semibold">4&ndash;8 weeks</dd>
          </div>
          <div class="flex justify-between gap-4 border-b border-rule py-3">
            <dt class="text-muted">Reading fee</dt><dd class="font-semibold">None</dd>
          </div>
          <div class="flex justify-between gap-4 border-b border-rule py-3">
            <dt class="text-muted">Submission charge</dt><dd class="font-semibold">None</dd>
          </div>
        </dl>

        <p class="mt-5 text-[0.875rem] leading-relaxed text-muted">
          We only take on projects with real academic or scholarly potential and a clear readership. Please read
          HAPI's Artificial Intelligence (AI) policy before you submit.
        </p>

        <a [href]="'mailto:' + email + '?subject=Book proposal'" class="btn btn-primary mt-6 w-full justify-center">Send a proposal</a>
      </div>
    </aside>
  </div>
  `,
})
export class BooksPageComponent {
  email = CONTACT.emails.books;

  benefits = [
    { title: 'Professional quality', text: 'Expert editing, cover design, formatting and printing, so your book stands out.' },
    { title: 'Global distribution', text: 'Available through Amazon, Barnes & Noble, bookshops, libraries and online retailers worldwide.' },
    { title: 'Author control', text: 'You keep full rights to your work and make the key creative decisions.' },
    { title: 'Higher royalties', text: 'Keep more of your earnings than with traditional publishing.' },
    { title: 'Personal support', text: 'Our team works with you directly at every step. You deal with people, not an impersonal system.' },
    { title: 'Marketing assistance', text: 'Tools and strategies to promote your book and build its audience.' },
  ];

  process = [
    { title: 'Submit your manuscript', text: "Send us your work for a free evaluation. We'll review it and give you honest feedback on its potential." },
    { title: 'Editing & design', text: 'Work with our editors to polish the manuscript, then agree the cover design and interior layout together.' },
    { title: 'Production & printing', text: 'We format the print and ebook editions, assign the ISBN and handle production.' },
    { title: 'Distribution & sales', text: 'Your book goes on sale worldwide. Print-on-demand means there are no upfront inventory costs.' },
    { title: 'Marketing & promotion', text: 'Help with author websites, social media and book launches, plus optional advanced marketing packages.' },
    { title: 'Ongoing royalties', text: 'You earn royalties on every sale, paid directly and transparently.' },
  ];
}
