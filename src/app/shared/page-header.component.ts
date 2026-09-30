import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="border-b border-rule">
    <div class="wrap pb-10 pt-8 md:pb-14 md:pt-10">
      <nav class="text-[0.8rem] text-muted" aria-label="Breadcrumb">
        <a routerLink="/" class="hover:text-ink hover:underline">Home</a>
        <span class="mx-2">/</span>
        <span class="text-ink-soft">{{ title }}</span>
      </nav>
      <h1 class="mt-6 font-serif text-4xl font-medium tracking-tight text-ink md:text-[3.25rem] md:leading-[1.1]">{{ title }}</h1>
      <p class="mt-5 max-w-measure font-serif text-lg leading-relaxed text-ink-soft md:text-xl">{{ lede }}</p>
      <ng-content></ng-content>
    </div>
  </div>
  `,
})
export class PageHeaderComponent {
  @Input() title = '';
  @Input() lede = '';
}
