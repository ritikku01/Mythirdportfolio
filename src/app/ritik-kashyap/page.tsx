import { Metadata } from 'next';
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap | Full Stack Developer, AI & ML Software Expert',
    description: 'Expert Full Stack Developer specializing in AI, ML, Java, and modern web solutions. Explore Ritik Kashyap\'s professional software development portfolio.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap',
    },
    openGraph: {
        title: 'Ritik Kashyap | Full Stack Developer, AI & ML Software Expert',
        description: 'Expert Full Stack Developer specializing in AI, ML, Java, and modern web solutions. Explore Ritik Kashyap\'s professional software development portfolio.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap | Full Stack Developer, AI & ML Software Expert',
        description: 'Expert Full Stack Developer specializing in AI, ML, Java, and modern web solutions.',
    },
    robots: { index: true, follow: true },
};

export default function RitikKashyapPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "WebSite",
                                "name": "Ritik Kashyap Portfolio",
                                "url": "https://my-secondportfolio-so5v.vercel.app/ritik-kashyap"
                            },
                            {
                                "@type": "Person",
                                "name": "Ritik Kashyap",
                                "jobTitle": "Full Stack Developer",
                                "description": "Specialist in AI, ML, and scalable web applications."
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What technologies does Ritik Kashyap specialize in?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Ritik specializes in Full Stack development, AI, ML, Java, and modern JavaScript frameworks." }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Kashyap - Full Stack Developer</h1>
            <ScrollyCanvas />
            <section id="projects">
                <h2 className="sr-only">Projects and Software Solutions</h2>
                <Projects />
            </section>
            <footer className="p-8 text-center">
                <p>Contact: ritik@example.com | <a href="/privacy" className="underline">Privacy Policy</a> | <a href="/terms" className="underline">Terms of Service</a></p>
                <button className="mt-4 bg-blue-600 px-6 py-2 rounded">Hire Me for Your Project</button>
            </footer>
        </main>
    );
}