import { Metadata } from 'next';
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap Portfolio: Expert AI & Full Stack Developer',
    description: 'Discover Ritik Kashyap\'s portfolio. Expert in AI, ML, full stack web development, Java, and JavaScript. Building scalable, high-performance digital solutions.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-portfolio',
    },
    openGraph: {
        title: 'Ritik Kashyap Portfolio: Expert AI & Full Stack Developer',
        description: 'Discover Ritik Kashyap\'s portfolio. Expert in AI, ML, full stack web development, Java, and JavaScript. Building scalable, high-performance digital solutions.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-portfolio',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap Portfolio: Expert AI & Full Stack Developer',
        description: 'Discover Ritik Kashyap\'s portfolio. Expert in AI, ML, full stack web development, Java, and JavaScript.',
    },
    robots: {
        index: true,
        follow: true,
    }
};

export default function RitikKashyapPortfolioPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Ritik Kashyap",
        "jobTitle": "Full Stack AI & Web Developer",
        "url": "https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-portfolio",
        "description": "Expert in AI, ML, Java, and JavaScript development."
    };

    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Kashyap Portfolio</h1>
            <section aria-label="Portfolio Overview">
                <ScrollyCanvas />
                <Projects />
            </section>
            <footer className="mt-10 p-4 text-center">
                <a href="/contact" className="bg-blue-600 px-6 py-2 rounded text-white font-bold">Hire Ritik for Your Next Project</a>
            </footer>
        </main>
    );
}