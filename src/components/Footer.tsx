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
    <footer className="bg-white border-t border-gray-200 pt-8 pb-4">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-1 space-y-3">
            <Link href="/" className="flex items-center space-x-2 text-primary">
              <Image src="/logo_JoinQuran.jpg" alt="JoinQuran Logo" width={40} height={40} className="rounded-full shadow-sm" />
              <span className="text-xl font-bold tracking-tight text-dark-text">JoinQuran</span>
            </Link>
            <p className="text-xs text-gray-500 leading-relaxed">
              Learn Quran online with qualified tutors.
            </p>
            <div className="flex gap-2 mt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="w-4 h-4">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-primary">{title}</h3>
                <ul className="space-y-2 text-xs">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-600 hover:text-secondary transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlightCards.map((card) => (
            <div key={card.title} className="rounded-lg bg-gray-50 p-4 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-bold uppercase text-secondary">{card.title}</p>
                  <p className="mt-1 text-sm text-gray-700">{card.description}</p>
                </div>
                <Link href={card.href} className="text-primary hover:text-teal-700">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-gray-100 pt-4 text-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} JoinQuran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
