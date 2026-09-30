import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, Router, RouterOutlet } from '@angular/router';
import { filter, take } from 'rxjs';
import { NavbarComponent } from './shared/navbar.component';
import { FooterComponent } from './shared/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  host: { class: 'flex min-h-screen flex-col' },
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Hide the boot loader (index.html) once the first page has rendered and web fonts are in,
    // so visitors never see unstyled text. The font wait is capped so a slow CDN can't hold the page.
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError),
        take(1)
      )
      .subscribe(() => {
        const fontsReady = document.fonts?.ready ?? Promise.resolve();
        const cap = new Promise((resolve) => setTimeout(resolve, 1500));
        Promise.race([fontsReady, cap]).then(() => requestAnimationFrame(hideLoader));
      });
  }
}

function hideLoader() {
  const el = document.getElementById('app-loader');
  if (!el) return;
  el.classList.add('is-done');
  setTimeout(() => el.remove(), 500);
}
