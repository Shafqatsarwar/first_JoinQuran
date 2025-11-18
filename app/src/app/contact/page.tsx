const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-dark-text">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Contact Us 📧</h1>
      <div className="prose lg:prose-xl mx-auto text-center">
        <p>
          You are welcome to send us suggestions, comments, feedback and complaints by filling this form or by sending us mail at
        </p>
      </div>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-primary mb-4">Contact Information</h2>
            <div className="space-y-4">
                <p><strong>Whatsapp:</strong> {process.env.NEXT_PUBLIC_WHATSAPP}</p>
                <p><strong>Phone Number UK:</strong> {process.env.NEXT_PUBLIC_PHONE_UK}</p>
                <p><strong>Phone Number Pakistan:</strong> {process.env.NEXT_PUBLIC_PHONE_PK}</p>
                <p><strong>Email:</strong> {process.env.NEXT_PUBLIC_EMAIL}</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-primary mb-4">Send us a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-opacity-90 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
