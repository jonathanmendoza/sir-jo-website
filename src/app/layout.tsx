import './globals.css';
import { Suspense } from 'react';
import type { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import { BASE_URL, DESCRIPTION, TITLE } from '@/constants';
import FooterComponent from '@/components/FooterComponent';
import { FreeConsultationStateProvider } from '@/providers';
import ReadingProgressTrackingComponent from '../components/ReadingProgressTrackingComponent';

export const metadata: Metadata = {
    metadataBase: new URL(`${BASE_URL}`),
    icons: {
        icon: '/sir_jo_icon.png'
    },
    title: {
        default: `${TITLE}`,
        template: `%s | ${TITLE}`,
    },
    description: `${DESCRIPTION}`,
    openGraph: {
        type: "website",
        title: `${TITLE}`,
        description: `${DESCRIPTION}`,
        url: `${BASE_URL}`,
        siteName: `${TITLE}`,
        locale: "en_PH",
        images: [
            {
                url: `${BASE_URL}/opengraph-image.png`,
                width: 1200,
                height: 630
            }
        ]
    
    },
    twitter: {
        card: "summary_large_image",
        title: `${TITLE}`,
        description: `${DESCRIPTION}`,
        images: [`${BASE_URL}/twitter-image.png`]
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">

            <Head>
                {/**<!-- Meta Pixel Code -->*/}
                <Script src="/meta_pixel_code.js" />
                {/**<!-- End Meta Pixel Code -->*/}
                {/**<!-- Brevo Tracker Code -->*/}
                <Script src="https://cdn.brevo.com/js/sdk-loader.js" strategy="lazyOnload" async />
                {/**<!-- End Tracker Code -->*/}
            </Head>

            <body>
                <noscript><img height="1" width="1" style={{"display": "none"}} src="https://www.facebook.com/tr?id=1214536933507980&ev=PageView&noscript=1" /></noscript>
                <div id="root">
                    <FreeConsultationStateProvider>
                        <nav>
                            {/* Navigation links */}
                            <Link href="/">Home</Link> |{" "}
                            <Link href="/learn_more">Learn More</Link> |{" "}
                            <Link href="/relatable_stories">Relatable Stories</Link> |{" "}
                            <Link href="/client_sessions">Client Sessions</Link> |{" "}
                            <Link href="/about_me">About Me</Link> |{" "}
                            <Link href="/free_consultation">Free Consultation</Link>
                        </nav>
                        <div className="h-8"/>
                        {children}
                        <Suspense>
                            <ReadingProgressTrackingComponent />
                        </Suspense>
                        <br />
                        <FooterComponent />
                    </FreeConsultationStateProvider>
                </div>
            </body>

        </html>
    );
}
