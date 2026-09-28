import React from 'react';

export const metadata = {
  title: 'Full Stack Software Development FAQ | Ritik Kashyap',
  description: 'Get answers about Ritik Kashyap\'s full stack software development, AI, ML, and backend Java services. Expert solutions for your next digital project.',
  alternates: { canonical: 'https://my-secondportfolio-so5v.vercel.app/faq' },
  openGraph: {
    title: 'Full Stack Software Development FAQ | Ritik Kashyap',
    description: 'Get answers about Ritik Kashyap\'s full stack software development, AI, ML, and backend Java services.',
    url: 'https://my-secondportfolio-so5v.vercel.app/faq',
    siteName: 'ritik -prof3',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Software Development FAQ | Ritik Kashyap',
    description: 'Get answers about Ritik Kashyap\'s full stack software development, AI, ML, and backend Java services.'
  },
  robots: { index: true, follow: true }
};

export default function FAQPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What kind of software development services does Ritik specialize in?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ritik specializes in full-stack development, leveraging expertise in both frontend and backend technologies. From building responsive interfaces with HTML, CSS, and JavaScript to architecting robust server-side solutions using Java, he delivers end-to-end software products." }
      },
      {
        "@type": "Question",
        "name": "Can Ritik integrate AI and Machine Learning into my project?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes, Ritik has a strong foundation in AI and ML. He can help you integrate intelligent features into your applications, ranging from predictive data modeling to automated workflows, ensuring your software stays ahead of the curve." }
      },
      {
        "@type": "Question",
        "name": "Does Ritik work with modern frontend frameworks?",
        "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. While Ritik has a deep understanding of core HTML, CSS, and JavaScript, he is proficient in modern frontend frameworks to ensure your website is fast, scalable, and provides a seamless user experience." }
      },
      {
        "@type": "Question",
        "name": "What backend technologies does Ritik use for application development?",
        "acceptedAnswer": { "@type": "Answer", "text": "Ritik primarily utilizes Java for backend development, known for its reliability and scalability. He builds secure, high-performance server-side architectures that handle complex business logic and database interactions efficiently." }
      },
      {
        "@type": "Question",
        "name": "How can I hire Ritik for a full-stack development project?",
        "acceptedAnswer": { "@type": "Answer", "text": "You can reach out to Ritik directly through his portfolio website. Whether you need a custom software solution, an AI-driven application, or a full-stack overhaul, feel free to contact him to discuss your project requirements and goals." }
      }
    ]
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <nav className="mb-6" aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li>/</li>
          <li className="font-medium text-gray-900">FAQ</li>
        </ol>
      </nav>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
      <p className="text-gray-600 mb-8">Expert insights into full stack development, AI, and Java services provided by Ritik Kashyap.</p>
      <div className="faq-list">
          {schemaData.mainEntity.map((item, index) => (
            <div key={index} className="mb-6 border-b border-gray-200 pb-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h2>
              <p className="text-gray-600">{item.acceptedAnswer.text}</p>
            </div>
          ))}
      </div>
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="text-xl font-bold mb-2">Ready to start your project?</h3>
        <p className="mb-4">Contact Ritik today to discuss your full-stack development needs.</p>
        <a href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Hire Ritik Now</a>
      </div>
    </main>
  );
}