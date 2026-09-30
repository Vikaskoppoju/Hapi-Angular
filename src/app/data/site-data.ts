// Content sourced from hapiacademia.com (journals, editors, articles, services, contact).

export type Subject =
  | 'Materials Science'
  | 'Plant & Agricultural Sciences'
  | 'Computing'
  | 'Biomedical & Pharmaceutical'
  | 'Social Sciences';

export interface Editor {
  name: string;
  affiliation: string;
  photo: string;
}

export interface Journal {
  abbr: string;
  title: string;
  subject: Subject;
  cover: string;
  url: string;
  editors: Editor[];
}

export const SUBJECTS: Subject[] = [
  'Materials Science',
  'Plant & Agricultural Sciences',
  'Biomedical & Pharmaceutical',
  'Computing',
  'Social Sciences',
];

// Editors-in-Chief and their photos, as listed on each journal's editorial board
// (sshapi.hapiacademia.com/<ABBR>/editorial-board).
const ED = {
  vaseashta: { name: 'Prof. Dr. Ashok Vaseashta', affiliation: 'International Clean Water Institute, VA, USA', photo: 'img/people/vaseashta.jpg' },
  rahman: { name: 'Prof. Mohammed Muzibur Rahman', affiliation: 'Centre of Excellence for Advanced Materials Research, King Abdulaziz University, Jeddah, Saudi Arabia', photo: 'img/people/rahman.jpg' },
  jawaid: { name: 'Prof. Dr. Mohammad Jawaid', affiliation: 'Chemical & Petroleum Engineering, College of Engineering, United Arab Emirates University, Al Ain, UAE', photo: 'img/people/jawaid.jpg' },
  hakeem: { name: 'Prof. Khalid Rehman Hakeem', affiliation: 'Department of Biological Sciences, King Abdulaziz University, Jeddah, Saudi Arabia', photo: 'img/people/hakeem.jpg' },
  siddiqui: { name: 'Prof. Dr. Zahid Hameed Siddiqui', affiliation: 'Department of Biology, University of Tabuk, Saudi Arabia', photo: 'img/people/siddiqui.jpg' },
  khan: { name: 'Dr. Anish Khan', affiliation: 'King Abdulaziz University, Jeddah, Saudi Arabia', photo: 'img/people/khan.jpg' },
  akhtar: { name: 'Dr. Mohd Sayeed Akhtar', affiliation: 'Gandhi Faiz-e-Aam College, Shahjahanpur, Uttar Pradesh, India', photo: 'img/people/akhtar.jpg' },
  rehman: { name: 'Dr. Shafiq ul Rehman', affiliation: 'Acting Dean, College of Information Technology, Kingdom University, Bahrain', photo: 'img/people/rehman.jpg' },
  azum: { name: 'Dr. Naved Azum', affiliation: 'Centre of Excellence for Advanced Materials Research, King Abdulaziz University, Jeddah, Saudi Arabia', photo: 'img/people/azum.jpg' },
  rub: { name: 'Dr. Malik Abdul Rub', affiliation: 'Centre of Excellence for Advanced Materials Research, King Abdulaziz University, Jeddah, Saudi Arabia', photo: 'img/people/rub.jpg' },
} satisfies Record<string, Editor>;

const OJS = 'https://sshapi.hapiacademia.com';

export const JOURNALS: Journal[] = [
  { abbr: 'AMES', title: 'Advance Materials for Environmental Sustainability', subject: 'Materials Science', cover: 'img/covers/ames.jpg', url: `${OJS}/AMES`, editors: [ED.vaseashta] },
  { abbr: 'CS', title: 'Composites and Sensors', subject: 'Materials Science', cover: 'img/covers/cs.jpg', url: `${OJS}/CS`, editors: [ED.rahman] },
  { abbr: 'BMB', title: 'Biobased Materials and Biocomposites', subject: 'Materials Science', cover: 'img/covers/bmb.jpg', url: `${OJS}/BMB`, editors: [ED.jawaid] },
  { abbr: 'CTPP', title: 'Current Trends in Plant Physiology', subject: 'Plant & Agricultural Sciences', cover: 'img/covers/ctpp.jpg', url: `${OJS}/CTPP`, editors: [ED.hakeem] },
  { abbr: 'MAPR', title: 'Medicinal and Aromatic Plant Research', subject: 'Plant & Agricultural Sciences', cover: 'img/covers/marp.jpg', url: `${OJS}/MAPR`, editors: [ED.siddiqui] },
  { abbr: 'NM', title: 'Novel Materials', subject: 'Materials Science', cover: 'img/covers/nm.jpg', url: `${OJS}/NM`, editors: [ED.khan] },
  { abbr: 'PMS', title: 'Plant, Microbe and Sustainability', subject: 'Plant & Agricultural Sciences', cover: 'img/covers/pms.jpg', url: `${OJS}/PMS`, editors: [ED.akhtar] },
  { abbr: 'PT', title: 'Plantation Technology', subject: 'Plant & Agricultural Sciences', cover: 'img/covers/pt.jpg', url: `${OJS}/PT`, editors: [ED.hakeem] },
  { abbr: 'CAS', title: 'Computer Applications and Systems', subject: 'Computing', cover: 'img/covers/cas.jpg', url: `${OJS}/CAS`, editors: [ED.rehman] },
  { abbr: 'SMM', title: 'Sustainable Materials and Manufacturing', subject: 'Materials Science', cover: 'img/covers/ssm.jpg', url: `${OJS}/SMM`, editors: [ED.jawaid] },
  { abbr: 'SSS', title: 'Solution and Surface Science', subject: 'Materials Science', cover: 'img/covers/sss.jpg', url: `${OJS}/SSS`, editors: [ED.azum, ED.rub] },
  { abbr: 'BID', title: 'Biomedical Innovation and Discovery', subject: 'Biomedical & Pharmaceutical', cover: 'img/covers/bid.jpg', url: `${OJS}/BID`, editors: [] },
  { abbr: 'SSHF', title: 'Social Sciences and Human Future', subject: 'Social Sciences', cover: 'img/covers/sshf.jpg', url: `${OJS}/SSHF`, editors: [] },
  { abbr: 'BAP', title: 'Biopharmaceutics and Pharmacotherapy', subject: 'Biomedical & Pharmaceutical', cover: 'img/covers/bap.jpg', url: `${OJS}/BAP`, editors: [] },
];

/** Each Editor-in-Chief once, with the journals they lead. */
export const EDITORS = Object.values(ED).map((e) => ({
  ...e,
  journals: JOURNALS.filter((j) => j.editors.includes(e)).map((j) => j.abbr),
}));

export interface Article {
  journal: string;
  abbr: string;
  issue: string;
  title: string;
  type: string;
  published: string;
  cover: string;
  authors: string[];
  doi: string;
  url: string;
  editor: Editor;
}

export const ARTICLES: Article[] = [
  { journal: 'Plant, Microbe and Sustainability', abbr: 'PMS', issue: 'Vol. 1 No. 1 (2026)', title: 'Crustaceans in Mangroves: Bioindicator Potential for Ecosystem Health Assessment', type: 'Review', published: '16 July 2026', cover: 'img/covers/pms-issue.jpg', authors: ['Huzaifah M', 'Faridah Hanum Ibrahim', 'Norizah Kamarudin'], doi: '10.67339/kfpdzn59', url: `${OJS}/PMS/article/view/39`, editor: ED.akhtar },
  { journal: 'Biobased Materials and Biocomposites', abbr: 'BMB', issue: 'Vol. 1 No. 1 (2026)', title: 'Lignin-Based Composites: Processing, Properties, and Their Applications', type: 'Review', published: '10 July 2026', cover: 'img/covers/bmb-issue.jpg', authors: ['Aatikah Meraj', 'Ajay Kumar Chauhan', 'Tushar Singh', 'Nishtha Sood'], doi: '10.67339/2mbra637', url: `${OJS}/BMB/article/view/27`, editor: ED.jawaid },
  { journal: 'Sustainable Materials and Manufacturing', abbr: 'SMM', issue: 'Vol. 1 No. 1 (2026)', title: 'Recent Advances in Metal and Metal Alloy–Based Orthopedic Implants: Processing Strategies, Clinical Challenges, and Future Perspectives', type: 'Review', published: '3 July 2026', cover: 'img/covers/smm-issue.jpg', authors: ['Najmul Hossain', 'Md. Kowsar Alam', 'Rasheed Ahmad', 'Md. Mizanur Rahman', 'Chowdhury Kaiser Mahmud'], doi: '10.67339/zv4xns15', url: `${OJS}/SMM/article/view/14`, editor: ED.jawaid },
  { journal: 'Sustainable Materials and Manufacturing', abbr: 'SMM', issue: 'Vol. 1 No. 1 (2026)', title: '3D Printing in Artificial Organs and Medical Implants: Technologies, Applications, and Future Perspectives', type: 'Review', published: '3 July 2026', cover: 'img/covers/smm-issue.jpg', authors: ['Najmul Hossain', 'Rasheed Ahmad'], doi: '10.67339/qr9dk046', url: `${OJS}/SMM/article/view/16`, editor: ED.jawaid },
];

export interface Service {
  slug: string;
  title: string;
  short: string;
  body: string[];
  image: string;
  imageAlt: string;
}

export const SERVICES: Service[] = [
  {
    slug: 'editing',
    title: 'English Editing, Educational and Translational Services',
    short: 'Language polishing by subject-expert editors to improve clarity and impact.',
    body: [
      'A range of services for researchers, authors, scholars, students and professionals, covering academic publishing, language enhancement, educational support and specialised translation.',
      'The aim is simple: help your work read clearly to reviewers and reach readers beyond its original language.',
    ],
    image: 'img/services/editing.jpg',
    imageAlt: 'Open English book with reading glasses on a table',
  },
  {
    slug: 'bioinformatics',
    title: 'Advanced Bioinformatics & Computational Biology',
    short: 'Bioinformatics and data analysis for biological and biomedical research.',
    body: [
      'Computational support for biological and biomedical research, bringing together data science, molecular biology and high-performance computing so that researchers, clinicians and institutions can analyse complex biological data accurately.',
      'The team works on the analysis, annotation and visualisation of genomics, transcriptomics and proteomics datasets using current tools and pipelines.',
    ],
    image: 'img/services/bioinformatics.jpg',
    imageAlt: 'Scientist using a micropipette during a laboratory experiment',
  },
  {
    slug: 'conferences',
    title: 'Academic Conferences, Symposia & Research Events',
    short: 'Organisation and support for scientific conferences, symposia and workshops.',
    body: [
      'HAPI organises and hosts conferences, symposia and workshops that bring together scholars, researchers and professionals from around the world.',
      'These events are a place to present findings, exchange ideas and build collaborations across disciplines.',
    ],
    image: 'img/services/conferences.jpg',
    imageAlt: 'Speaker addressing an audience at an academic event',
  },
  {
    slug: 'counselling',
    title: 'Career Counselling, Strategy & Professional Growth',
    short: 'Guidance for early-career researchers and scholars planning their next steps.',
    body: [
      'Personalised advice and practical tools to help students, researchers and professionals identify their strengths, set achievable goals and make informed decisions about careers in academia, research and industry.',
      'Structured mentoring combines strategic planning with professional development, turning goals into workable career paths.',
    ],
    image: 'img/services/counselling.jpg',
    imageAlt: 'Colleagues discussing work around a computer',
  },
  {
    slug: 'coaching',
    title: 'Author Coaching & Writing Support',
    short: 'Help turning promising ideas into well-structured, publication-ready manuscripts.',
    body: [
      'Support for writers, researchers and scholars at every stage of the publication process — from a first manuscript to a revision for journal resubmission.',
      'Experienced editors and mentors work one-to-one with authors on structure, argument and presentation.',
    ],
    image: 'img/services/coaching.jpg',
    imageAlt: 'Student studying among library shelves',
  },
];

export const CONTACT = {
  address: ['2A/3 Front Side, Kundan Mansion', 'Asaf Ali Road, Darya Ganj', 'New Delhi 110002, India'],
  phone: '+91 76681 93402',
  phoneHref: 'tel:+917668193402',
  emails: {
    general: 'info@hapiacademia.com',
    books: 'HAPIbooks@hapiacademia.com',
    services: 'services@hapiacademia.com',
    support: 'support@hapiacademia.com',
  },
  presence: ['United Arab Emirates', 'Malaysia', 'Saudi Arabia', 'United Kingdom', 'India'],
  linkedin: 'https://www.linkedin.com/in/hikmah-academia-publishing-institute-hapi-61a27b3b2',
  youtube: 'https://www.youtube.com/@Hapi-12-u1b',
};

export const POLICIES = [
  { label: 'Privacy policy', href: '/policies/privacy' },
  { label: 'Terms & conditions', href: '/policies/terms' },
  { label: 'Refund & cancellation', href: '/policies/refund' },
  { label: 'Legal & company information', href: '/policies/legal' },
];
