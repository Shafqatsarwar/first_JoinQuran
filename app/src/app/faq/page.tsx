const FaqPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-dark-text">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Frequently Asked Questions ❓</h1>
      <div className="text-center">
        <p className="mb-4">
          You can download our FAQ document to get answers to your questions.
        </p>
        <a
          href="/JoinQuran_FAQ.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-opacity-90 transition-colors"
        >
          Download FAQ
        </a>
      </div>
    </div>
  );
};

export default FaqPage;
