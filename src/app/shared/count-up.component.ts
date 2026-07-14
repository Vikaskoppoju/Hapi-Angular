import { Component, ElementRef, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-count-up',
  standalone: true,
  template: `<span>{{ value }}{{ suffix }}</span>`,
})
export class CountUpComponent implements AfterViewInit, OnDestroy {
  @Input() end = 0;
  @Input() suffix = '';
  @Input() duration = 1600;

  value = 0;
  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          this.observer?.unobserve(entry.target);

          if (reduced) {
            this.value = this.end;
            return;
          }

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - start) / this.duration, 1);
            const eased = 1 - Math.pow(1 - t, 4);
            this.value = Math.round(this.end * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
