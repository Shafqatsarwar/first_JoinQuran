import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* 
        Hero Section 
        TODO: Replace # with a real image path in public folder. e.g. /islamic-background.jpg
      */}
      <section 
        className="bg-primary text-white bg-cover bg-center"
        style={{ backgroundImage: "url('#')" }}
      >
        <div className="container mx-auto px-4 py-32 text-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold mb-4">Learn Quran Online with Qualified Tutors 🌙</h1>
          <p className="text-xl mb-8">Join our online Quran classes and learn from the comfort of your home.</p>
          <Link href="/start-learning" className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-colors">
            Start Your Free Trial
          </Link>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">Our Mission</h2>
          <div className="prose lg:prose-xl mx-auto text-dark-text">
            <p>
              Tajweed means to pronounce or recite every letter correctly, i.e. from its proper origin of pronunciation coupled with its stipulated attributes such as prolongation (Madd), merging (Idgham), conversion (Iqlab), and pauses (Waqaf) etc. Tajweed and its application can only be learned with a qualified Quran teacher. The rules themselves can be studied independently, but the correct application and proper pronunciation of the alphabets of Quran can only be done by reading to, listening to, reciting to, and being corrected by a qualified teacher of the Quran.
            </p>
            <p>
              Our courses are especially designed for you and your child. This program will provide you step by step Quran Learning with the rules of Tajweed and Essential Islamic Teaching For children and new Muslims by online Qualified Tutors and what’s more… All this by just sitting in front of Computer without leaving your home. We have the mission to serve the Muslim community by giving them Online Quran reading and Islamic education with more ease.
            </p>
            <p>
              Learn to read Quran online. Our online Quran tutors equip students with the skill to read the Quran correctly and enhance students to memorize Quran, Salat, Kalimas, Hadeeth and Dua’s.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
