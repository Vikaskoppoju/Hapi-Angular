import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JournalsPageComponent } from './journals/journals.component';
import { BooksPageComponent } from './books/books.component';
import { ServicesPageComponent } from './services/services.component';
import { ContactPageComponent } from './contact/contact.component';
import { PolicyPageComponent } from './policies/policy.component';

export const routes: Routes = [
  { path: '', title: 'Hikmah Academia Publishing Institute (HAPI)', component: HomeComponent },
  { path: 'journals', title: 'Journals | Hikmah Academia Publishing Institute', component: JournalsPageComponent },
  { path: 'books', title: 'Books | Hikmah Academia Publishing Institute', component: BooksPageComponent },
  { path: 'services', title: 'Author services | Hikmah Academia Publishing Institute', component: ServicesPageComponent },
  { path: 'contact', title: 'Contact | Hikmah Academia Publishing Institute', component: ContactPageComponent },
  { path: 'policies', redirectTo: 'policies/privacy', pathMatch: 'full' },
  { path: 'policies/:slug', component: PolicyPageComponent },
  { path: '**', redirectTo: '' },
];
