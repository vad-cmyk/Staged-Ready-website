export type ProcessStep = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    eyebrow: 'Consultation',
    title: 'We Assess Your Property',
    description: 'A site visit or call to understand your property, target audience, and staging objectives.',
    image: '/images/process/room-2-consult.jpg',
    alt: 'Empty Victorian living room with a tape measure, notebook, pencil and paint swatches on the bare wooden floor',
  },
  {
    number: '02',
    eyebrow: 'Design Plan',
    title: 'Tailored Staging Concept',
    description:
      'We present a bespoke staging plan with furniture selections, colour scheme, and layout — crafted for your market.',
    image: '/images/process/room-2-plan-v2.jpg',
    alt: 'The same empty room with gold line sketches of a sofa, armchair, coffee table, rug and floor lamp, and a sample board of fabric swatches against the wall',
  },
  {
    number: '03',
    eyebrow: 'Installation',
    title: 'Full Furnishing & Styling',
    description:
      'Our team delivers and installs everything — furniture, artwork, soft furnishings, and accessories.',
    image: '/images/process/room-3-install.jpg',
    alt: 'Installation under way: a sage sofa still in plastic wrap, a rolled rug, boxes and bubble wrap beside a new armchair, olive tree and artwork',
  },
  {
    number: '04',
    eyebrow: 'Photography',
    title: 'Professional Shots Included',
    description: 'Professional photography is included, so your listing looks exceptional online.',
    image: '/images/process/room-5-staged.jpg',
    alt: 'The finished living room: sage sofa with terracotta cushions, cream armchair, round jute rug, walnut coffee table, floor lamp and abstract artwork',
  },
  {
    number: '05',
    eyebrow: 'Results',
    title: 'Your Property Performs',
    description: 'Watch your property attract more interest, sell faster, and achieve higher returns.',
    image: '/images/process/room-6-golden.jpg',
    alt: 'The staged living room in warm golden-hour light, with the lamp lit and sunlight falling across the sofa and rug',
  },
];

export const PROCESS_BEFORE = {
  image: '/images/process/room-1-empty.jpg',
  alt: 'The same living room before staging: bare walls and an empty wooden floor',
};

export const PROCESS_VIDEO = {
  src: '/videos/process/room-scrub.mp4',
  poster: '/videos/process/room-scrub-poster.jpg',
  // Seconds at which each stage of the video begins
  stages: [
    { at: 0, label: '01 Empty room' },
    { at: 1.2, label: '02 Design plan' },
    { at: 3.4, label: '03 Installation' },
    { at: 6.6, label: '04 Styled and ready' },
  ],
};
