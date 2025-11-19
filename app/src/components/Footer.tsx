import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

const Footer = () => {
  const footerLinks = {
    'About': [
      { href: '/about', label: 'About Us' },
      { href: '/our-mission', label: 'Our Mission' },
      { href: '/reviews', label: 'Reviews' },
    ],
    'Courses': [
      { href: '/courses', label: 'All Courses' },
      { href: '/fees', label: 'Fees' },
      { href: '/how-we-teach', label: 'How We Teach' },
    ],
    'Support': [
      { href: '/contact', label: 'Contact Us' },
      { href: '/faq', label: 'FAQ' },
    ],
  };

  const highlightCards = [
    {
      title: 'Fee Structure',
      description: '1-on-1 classes start from £30/month with family bundles and trial lessons included.',
      href: '/fees',
      cta: 'Explore fees',
    },
    {
      title: 'Student Reviews',
      description: 'Parents rate JoinQuran 4.9/5 for tajweed focus, tutor support, and flexible scheduling.',
      href: '/reviews',
      cta: 'Read reviews',
    },
  ];

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP?.replace(/[^\d+]/g, '');

  const iconClass = 'w-5 h-5 fill-current';

  const socialLinks: { href: string; label: string; icon: ReactNode }[] = [
    {
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
      label: 'Facebook',
      icon: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.3-3.2 3.1-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12" />
        </svg>
      ),
    },
    {
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL || 'https://www.linkedin.com/company/joinquran',
      label: 'LinkedIn',
      icon: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3zM10 9h3.7v2h.1c.5-.9 1.7-2.1 3.6-2.1 3.8 0 4.5 2.5 4.5 5.7V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4z" />
        </svg>
      ),
    },
    {
      href: whatsappNumber ? `https://wa.me/${whatsappNumber}` : '#',
      label: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M12.04 2a9.99 9.99 0 0 0-8.63 15l-1.15 4.2 4.32-1.13A10 10 0 1 0 12.04 2m5.84 14.58c-.24.67-1.4 1.32-1.9 1.38-.49.06-1.09.1-1.76-.11-2.97-.95-4.9-4.16-5.06-4.36-.15-.2-1.21-1.6-1.21-3.05s.77-2.16 1.04-2.45c.26-.3.56-.37.75-.37h.54c.18 0 .4-.06.62.47.24.58.82 2  .9 2.15.07.15.12.32.02.52s-.16.32-.3.49c-.15.17-.31.38-.45.51-.15.14-.3.29-.13.58.16.29.72 1.18 1.55 1.92 1.07.95 1.97 1.25 2.26 1.4.29.14.46.12.64-.07.2-.2.74-.86.94-1.15.2-.29.39-.24.65-.14.27.1 1.7.8 1.99.94.29.16.48.23.55.35.08.12.08.7-.15 1.36" />
        </svg>
      ),
    },
    {
      href: process.env.NEXT_PUBLIC_EMAIL ? `mailto:${process.env.NEXT_PUBLIC_EMAIL}` : '#',
      label: 'Email',
      icon: (
        <svg viewBox="0 0 24 24" className={iconClass} aria-hidden="true">
          <path d="M3 5h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m0 2v.5l9 5.5 9-5.5V7zm0 3.97V17h18v-6.03l-9 5.5z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-blue-100 text-blue-900 py-8 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-3 text-blue-950">
              <Image src="/logo_JoinQuran.jpg" alt="JoinQuran Logo" width={48} height={48} className="rounded-full shadow-md shadow-blue-200" />
              <span className="text-2xl font-bold tracking-tight">JoinQuran</span>
            </Link>
            <p className="text-sm text-blue-900/80">
              Learn Quran online with qualified tutors and a supportive, progress-focused curriculum.
            </p>
            <div className="rounded-2xl bg-white/70 p-4 shadow-lg shadow-blue-200/70 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-blue-500">Need quick answers?</p>
              <p className="text-base font-semibold text-blue-900">Chat with our AI assistant anytime.</p>
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-blue-600">{title}</h3>
                <ul className="space-y-2 text-sm">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-blue-900/90 transition-colors hover:text-primary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {highlightCards.map((card) => (
            <div key={card.title} className="rounded-2xl bg-white/80 p-5 shadow-lg shadow-blue-200/70 backdrop-blur">
              <p className="text-xs uppercase tracking-wide text-blue-500">{card.title}</p>
              <p className="mt-2 text-base font-semibold text-blue-900">{card.description}</p>
              <Link href={card.href} className="mt-3 inline-flex items-center text-sm font-semibold text-primary hover:text-secondary">
                {card.cta}
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="m12 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-blue-200/70 pt-6 text-sm text-blue-900/80 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} JoinQuran. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="group flex items-center justify-center w-10 h-10 rounded-full bg-blue-200 text-blue-700 shadow-md transition hover:bg-blue-300"
              >
                <span className="text-blue-700 group-hover:text-blue-900 w-5 h-5">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
