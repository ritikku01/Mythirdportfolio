import { Metadata } from 'next';
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap | Expert Next.js, AI & Full Stack Developer',
    description: 'Hire Ritik Kashyap, a professional Full Stack Developer specializing in Next.js, AI, ML, and scalable web solutions. Build high-performance apps today.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-nextjs-developer',
    },
    openGraph: {
        title: 'Ritik Kashyap | Expert Next.js, AI & Full Stack Developer',
        description: 'Hire Ritik Kashyap, a professional Full Stack Developer specializing in Next.js, AI, ML, and scalable web solutions.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-nextjs-developer',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap | Expert Next.js, AI & Full Stack Developer',
        description: 'Hire Ritik Kashyap, a professional Full Stack Developer specializing in Next.js, AI, ML, and scalable web solutions.',
    },
    robots: { index: true, follow: true },
};

export default function RitikKashyapNextjsDeveloperPage() {
    return (
        <main className="bg-[#121212] min-h-screen text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [{
                            "@type": "Question",
                            "name": "What technologies do you use?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "I specialize in Next.js, React, AI, ML, and Full Stack development to build scalable, high-performance web applications."
                            }
                        }]
                    })
                }}
            />
            <Navbar />
            <h1>Ritik Kashyap - Next.js Developer</h1>
            <ScrollyCanvas />
            <Projects />
            <section className="p-8">
                <h2>Frequently Asked Questions</h2>
                <div itemScope itemType="https://schema.org/FAQPage">
                    <div itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
                        <h3 itemProp="name">What technologies do you use?</h3>
                        <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                            <p itemProp="text">I specialize in Next.js, React, AI, ML, and Full Stack development.</p>
                        </div>
                    </div>
                </div>
                <a href="/contact" className="cta-button bg-blue-600 px-6 py-3 rounded-lg">Hire Me for Your Next Project</a>
            </section>
        </main>
    );
}