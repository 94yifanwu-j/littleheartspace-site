export const site = {
  name: 'Little Heart Space',
  tagline: 'Family & Art Therapy',
  url: 'https://littleheartspace.com',
  email: 'jenny@littleheartspace.com',
  // Shown as the consultation CTA. Update when a booking link exists.
  bookingUrl: '/contact/',
  description:
    'Little Heart Space is a warm, welcoming therapy practice offering family therapy and art therapy for children, teens, parents, and families — in person and online.',
} as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Contact', href: '/contact/' },
] as const;
