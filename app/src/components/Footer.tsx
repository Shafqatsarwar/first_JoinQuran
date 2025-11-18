import Link from 'next/link';
import Image from 'next/image';

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

  const socialLinks = [
    { href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#', label: 'Facebook' },
    { href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}` || '#', label: 'WhatsApp' },
    { href: `mailto:${process.env.NEXT_PUBLIC_EMAIL}` || '#', label: 'Email' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo_JoinQuran.jpg" alt="JoinQuran Logo" width={40} height={40} className="rounded-full" />
              <span className="text-xl font-bold">JoinQuran</span>
            </Link>
            <p className="text-sm">Learn Quran online with qualified tutors.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} JoinQuran. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
