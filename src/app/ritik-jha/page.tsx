import { Metadata } from 'next'
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: 'Ritik Jha: Expert Full Stack Developer in AI & Software',
    description: 'Hire Ritik Jha, a skilled Full Stack Developer specializing in AI, ML, Java, and JavaScript. Delivering scalable web solutions and innovative software.',
    alternates: {
        canonical: 'https://my-secondportfolio-so5v.vercel.app/ritik-jha',
    },
    openGraph: {
        title: 'Ritik Jha: Expert Full Stack Developer in AI & Software',
        description: 'Hire Ritik Jha, a skilled Full Stack Developer specializing in AI, ML, Java, and JavaScript. Delivering scalable web solutions.',
        url: 'https://my-secondportfolio-so5v.vercel.app/ritik-jha',
        siteName: 'ritik -prof3',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Ritik Jha: Expert Full Stack Developer in AI & Software',
        description: 'Hire Ritik Jha, a skilled Full Stack Developer specializing in AI, ML, Java, and JavaScript.',
    },
    robots: { index: true, follow: true },
}

export default function RitikJhaPage() {
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
                            "name": "What technologies does Ritik Jha use?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Ritik specializes in Full Stack development, including AI, ML, Java, and JavaScript."
                            }
                        }]
                    })
                }}
            />
            <Navbar />
            <h1 className="text-4xl font-bold mb-4">Ritik Jha - Full Stack Developer & AI Specialist</h1>
            <ScrollyCanvas />
            <Projects />
            <section className="p-8">
                <h2 className="text-2xl">Frequently Asked Questions</h2>
                <div className="mt-4">
                    <p><strong>What technologies does Ritik Jha use?</strong> Ritik specializes in Full Stack development, including AI, ML, Java, and JavaScript. His expertise spans frontend and backend architecture to build robust software applications.</p>
                </div>
                <div className="mt-8">
                    <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded">Hire Ritik Jha for Your Project</a>
                </div>
            </section>
        </main>
    );
}