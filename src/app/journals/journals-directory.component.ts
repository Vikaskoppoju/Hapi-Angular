import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../shared/reveal.directive';

const journals = [
  { title: 'Advance Materials for Environmental Sustainability', abbr: 'AMES', editor: 'Professor Dr. Ashok Vaseashta', affiliation: 'International Clean Water Institute, VA, USA', image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=900&q=80', field: 'Materials Science' },
  { title: 'Composites and Sensors', abbr: 'CS', editor: 'Dr. Mohammed Muzibur Rahman', affiliation: 'CoE for Advanced Materials Research, King Abdulaziz University, Jeddah, Saudi Arabia', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80', field: 'Materials Science' },
  { title: 'Biobased Materials And Biocomposite', abbr: 'BMB', editor: 'Prof. Dr. Mohammad Jawaid', affiliation: 'Chemical & Petroleum Engineering, United Arab Emirates University, UAE', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=900&q=80', field: 'Materials Science' },
  { title: 'Current Trends in Plant Physiology', abbr: 'CTPP', editor: 'Prof. Khalid Rehman Hakeem', affiliation: 'Department of Biological Sciences, King Abdulaziz University, Jeddah, Saudi Arabia', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=900&q=80', field: 'Plant & Agricultural' },
  { title: 'Medicinal And Aromatic Plant Research', abbr: 'MAPR', editor: 'Prof. Dr. Zahid Hameed Siddiqui', affiliation: 'Department of Biology, University of Tabuk, Saudi Arabia', image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=900&q=80', field: 'Plant & Agricultural' },
  { title: 'Novel Materials', abbr: 'NM', editor: 'Prof. Anish Khan', affiliation: 'Department of Chemistry Science, King Abdulaziz University, Jeddah, Saudi Arabia', image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=900&q=80', field: 'Materials Science' },
  { title: 'Plant, Microbe And Sustainability', abbr: 'PMS', editor: 'Dr. Mohd Sayeed Akhtar', affiliation: 'Department of Botany, Gandhi Faiz-e-Aam College, Shahjahanpur', image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=900&q=80', field: 'Plant & Agricultural' },
  { title: 'Plantation Technology', abbr: 'PT', editor: 'Prof. Khalid Rehman Hakeem', affiliation: 'Department of Biological Sciences, King Abdulaziz University, Jeddah, Saudi Arabia', image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=900&q=80', field: 'Plant & Agricultural' },
  { title: 'Computer Applications and Systems', abbr: 'CAS', editor: 'Dr. Shafiq ul Rehman', affiliation: 'Department of Computer Science, Kingdom University, Riffa, Bahrain', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80', field: 'Computing' },
  { title: 'Sustainable Materials And Manufacturing', abbr: 'SMM', editor: 'Professor Vijay Kumar Thakur', affiliation: 'Biorefining & Advanced Materials Research Centre, SRUC, UK', image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=900&q=80', field: 'Materials Science' },
  { title: 'Solution And Surface Science', abbr: 'SSS', editor: 'Dr. Naved Azum', affiliation: 'CoE for Advanced Materials Research, King Abdulaziz University, Jeddah, Saudi Arabia', image: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?auto=format&fit=crop&w=900&q=80', field: 'Materials Science' },
  { title: 'Biomedical Innovation and Discovery', abbr: 'BID', editor: null, affiliation: null, image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80', field: 'Biomedical & Pharma' },
  { title: 'Social Sciences and Human Future', abbr: 'SSHF', editor: null, affiliation: null, image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80', field: 'Social Sciences' },
  { title: 'Biopharmaceutics and Pharmacotherapy', abbr: 'BAP', editor: null, affiliation: null, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=900&q=80', field: 'Biomedical & Pharma' },
];

const FIELDS = ['All Fields', 'Materials Science', 'Plant & Agricultural', 'Computing', 'Biomedical & Pharma', 'Social Sciences'] as const;

@Component({
  selector: 'app-journals-directory',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
  <section class="relative overflow-hidden bg-brand-surface py-20 md:py-24">
    <div class="animate-mesh-slow pointer-events-none absolute -left-40 top-40 h-[420px] w-[420px] rounded-full bg-brand-tint-blue blur-3xl"></div>

    <div class="container-hapi relative">
      <div appReveal>
        <div class="flex flex-wrap items-center justify-center gap-2.5">
          <button *ngFor="let f of FIELDS" (click)="field = f"
            [class]="'rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 ' + (field === f ? 'border-accent-blue bg-accent-blue text-white shadow-lg shadow-accent-blue/25' : 'border-brand-line bg-white text-brand-body hover:border-accent-blue/50 hover:text-accent-blue')">
            {{ f }}
            <span [class]="'ml-2 text-xs font-bold ' + (field === f ? 'text-white/70' : 'text-brand-muted')">{{ count(f) }}</span>
          </button>
        </div>
      </div>

      <div class="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <div *ngFor="let journal of visible(); let i = index" appReveal [delay]="(i % 3) * 90" variant="scale">
          <article class="card-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-line/70 bg-white">
            <div class="img-zoom relative h-40">
              <img [src]="journal.image" [alt]="journal.title" class="h-full w-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/50 via-transparent to-transparent"></div>
              <span class="absolute left-4 bottom-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-accent-blue backdrop-blur">{{ journal.field }}</span>
              <span class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-primary font-heading text-[11px] font-bold text-white shadow-lg">{{ journal.abbr }}</span>
            </div>

            <div class="flex flex-1 flex-col p-6">
              <h3 class="font-heading text-base font-bold leading-snug tracking-tight text-brand-ink">{{ journal.title }}</h3>

              <div class="mt-4 flex-1 border-t border-brand-line pt-4">
                <ng-container *ngIf="journal.editor; else comingSoon">
                  <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-muted">Editor-in-Chief</p>
                  <p class="mt-1.5 text-sm font-semibold text-brand-ink">{{ journal.editor }}</p>
                  <p class="mt-1 text-xs leading-relaxed text-brand-body">{{ journal.affiliation }}</p>
                </ng-container>
                <ng-template #comingSoon>
                  <p class="text-xs font-semibold uppercase tracking-wide text-brand-muted">Editor-in-Chief — Coming Soon</p>
                </ng-template>
              </div>

              <span class="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                View Journal
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" /></svg>
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
  `,
})
export class JournalsDirectoryComponent {
  FIELDS = FIELDS;
  journals = journals;
  field: (typeof FIELDS)[number] = 'All Fields';

  count(f: string) {
    return f === 'All Fields' ? this.journals.length : this.journals.filter((j) => j.field === f).length;
  }

  visible() {
    return this.field === 'All Fields' ? this.journals : this.journals.filter((j) => j.field === this.field);
  }
}
