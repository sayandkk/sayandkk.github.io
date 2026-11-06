import karthikaMockup from '../assets/Karthika Water Supply Website Mockup.png';
import pavithramMockup from '../assets/Pavithram Dairy Website Mockup.png';
import docuNexusMockup from '../assets/DocuNexus Dashboard Showcase.png';
import jobApplyMockup from '../assets/JobApply Studio_ Next.js Career Workspace (1).png';
import templeMockup from '../assets/React.js Temple Showcase Banner.png';
import emgTeamPhoto from '../assets/emg-research-team.png';
import upiMockup from '../assets/UPI Payment Monitor Showcase.png';
import mediaDownloaderMockup from '../assets/Media Flow Downloader Showcase (1).png';

export interface Project {
  id: number;
  num: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  tags: string[];
  github: string;
  live: string;
  liveLabel?: string;
  note?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    num: '01',
    title: 'DocuNexus',
    description: 'Enterprise document and workflow platform built end-to-end to streamline high-volume document workflows, organizational approvals, and access management.',
    image: docuNexusMockup,
    tags: ['React', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript'],
    github: '',
    live: 'https://docunexus.ults.build/',
    category: 'Enterprise',
  },
  {
    id: 2,
    num: '02',
    title: 'UPI Payment Monitor',
    description: 'A real-time UPI payment listener and tracker engineered 100% using AI. Captures incoming transaction notifications across Google Pay, PhonePe, and Paytm with soundbox-style voice announcements, analytics breakdown, and local offline privacy.',
    image: upiMockup,
    tags: ['React Native', 'Android', 'AI-Engineered', 'Voice Alerts', 'TypeScript'],
    github: 'https://github.com/sayandkk/money-notifier',
    live: '',
    note: 'Built 100% with AI',
    category: 'Mobile App',
  },
  {
    id: 3,
    num: '03',
    title: 'Universal Media Downloader',
    description: 'A high-performance media processing platform for analyzing and downloading YouTube, Instagram, and Facebook streams into MP4 and high-bitrate MP3 audio with dynamic resolution up to 4K, zero data tracking, and SSRF security.',
    image: mediaDownloaderMockup,
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'FFmpeg', 'SSRF Guard'],
    github: 'https://github.com/sayandkk/universal-media-downloader',
    live: 'https://universal-media-downloader-five.vercel.app/',
    note: 'Stateless & Fast',
    category: 'Web App',
  },
  {
    id: 4,
    num: '04',
    title: 'JobApply Studio',
    description: 'A personal automated career workspace built to manage job pipelines and dispatch tailored applications directly from personal mail with 1-click workflows. Configured strictly for personal use and private automation (not intended for public or general-purpose access).',
    image: jobApplyMockup,
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'Automation'],
    github: '',
    live: 'https://job-apply-studio.vercel.app/',
    note: 'Personal Use Only',
    category: 'Web App',
  },
  {
    id: 5,
    num: '05',
    title: 'Pavithram',
    description: 'Modern dairy showcase platform featuring product presentations, customer inquiries, and clean, responsive UI.',
    image: pavithramMockup,
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    github: '',
    live: 'https://pavithram.pages.dev/',
    category: 'Web App',
  },
  {
    id: 6,
    num: '06',
    title: 'Manaliyarkkavu Kaladithara Temple',
    description: 'Digital platform and cultural showcase for Vadakke Manaliyarkkavu Kaladithara Temple in Naduvattom, Edappal. Features pooja schedules, deity history, festivals, announcements, and bilingual support.',
    image: templeMockup,
    tags: ['React', 'Tailwind CSS', 'Vite', 'Bilingual UI'],
    github: '',
    live: '',
    note: 'Naduvattom, Edappal',
    category: 'Web App',
  },
  {
    id: 7,
    num: '07',
    title: 'Karthika Water supply',
    description: 'A static website and platform built for a water supply client.',
    image: karthikaMockup,
    tags: ['React', 'NestJS', 'PostgreSQL', 'TypeScript', 'JWT'],
    github: 'https://github.com/sayandkk/kartika-water-connect',
    live: 'https://kartika-water-connect.vercel.app/',
    category: 'Web App',
  },
  {
    id: 8,
    num: '08',
    title: 'EMG Signal Analysis',
    description: 'Research tool for real-time EMG biomedical signal acquisition and processing, developed during internship at Aster Medcity.',
    image: emgTeamPhoto,
    imagePosition: 'object-top',
    tags: ['Python', 'Arduino', 'Signal Processing', 'Data Analysis'],
    github: 'https://github.com/sayandkk/Lda-algorithem-new',
    live: 'https://www.linkedin.com/feed/update/urn:li:activity:7324663646737850368/',
    liveLabel: 'LinkedIn Post',
    note: 'Research Paper • Aster Medcity',
    category: 'Research',
  },
];

export const projectFilters = ['All', 'Enterprise', 'Mobile App', 'Web App', 'Research'];
