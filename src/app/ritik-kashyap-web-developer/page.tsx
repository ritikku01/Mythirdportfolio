import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Kashyap: Full Stack Web Developer & AI/ML Expert',
    description: 'Hire Ritik Kashyap, a professional full stack developer specializing in AI, ML, frontend, and backend. Expert in HTML, CSS, and JavaScript solutions.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-web-developer',
    },
    openGraph: {
        title: 'Ritik Kashyap: Full Stack Web Developer & AI/ML Expert',
        description: 'Hire Ritik Kashyap, a professional full stack developer specializing in AI, ML, frontend, and backend. Expert in HTML, CSS, and JavaScript solutions.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-kashyap-web-developer',
        siteName: 'ritik -prof3',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Kashyap: Full Stack Web Developer & AI/ML Expert',
        description: 'Hire Ritik Kashyap, a professional full stack developer specializing in AI, ML, frontend, and backend. Expert in HTML, CSS, and JavaScript solutions.'
    },
    robots: {
        index: true,
        follow: true
    }
}

export default function RitikKashyapWebDeveloperPage() {
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
                                "url": "https://my-secondportfolio-so5v.vercel.app/"
                            },
                            {
                                "@type": "FAQPage",
                                "mainEntity": [
                                    {
                                        "@type": "Question",
                                        "name": "What services does Ritik Kashyap offer?",
                                        "acceptedAnswer": { "@type": "Answer", "text": "Ritik Kashyap provides full stack web development, AI/ML integration, and custom software solutions." }
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Kashyap - Full Stack Web Developer</h1>
            <ScrollyCanvas />
            <Projects />
            <section className="p-8">
                <h2 className="text-2xl font-semibold">About My Development Services</h2>
                <p>I specialize in building scalable web applications using modern technologies like React, Next.js, and Node.js. My expertise spans AI/ML model integration and high-performance backend architecture.</p>
            </section>
        </main>
    );
}