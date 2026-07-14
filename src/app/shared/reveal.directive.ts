import { Directive, ElementRef, Input, OnDestroy, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: {
    '[class.reveal]': 'true',
    '[attr.data-v]': 'variant',
    '[style.--reveal-delay.ms]': 'delay',
  },
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  @Input() variant: 'up' | 'left' | 'right' | 'scale' | 'blur' = 'up';
  @Input() delay = 0;

  private observer?: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const node = this.el.nativeElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(node);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
