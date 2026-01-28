import { usePathname } from "next/navigation";
import { initFacebookPixel, trackFBPageView, trackFBEvent, trackFBCustomEvent, setFacebookTrafficSource } from "@/lib/fbPixel";
import { useEffect, useState } from "react";
import { initBrevoEvent, setBrevoTrafficSource, trackBrevoCustomEvent, trackBrevoEvent, trackBrevoPageView } from "@/lib/brevo-event";
import { CLIENT_SESSIONS_ITEMS, LEARN_MORE_ITEMS, RELATABLE_STORIES_ITEMS } from "@/constants";

export function setEventTrafficSource(source: string | null, medium: string | null, campaign: string | null) {
    setFacebookTrafficSource(source, medium, campaign);
    setBrevoTrafficSource(source, medium, campaign);
}

export function initializeEventTracking(email?: string, phone?: string) {
    initFacebookPixel(email, phone);
    initBrevoEvent(email);
}

export function trackPageView(locationPathname: string) {
    trackFBPageView();
    trackBrevoPageView(locationPathname);
}

export function trackEvent(event: string, data?: Record<string, any>) {
    trackFBEvent(event, data);
    trackBrevoEvent(event, data);
}

export function trackCustomEvent(event: string, data?: Record<string, any>) {
    trackFBCustomEvent(event, data);
    trackBrevoCustomEvent(event, data);
}

export function useTrackPageView() {
    const pathname = usePathname();
    useEffect(() => {
        initializeEventTracking();
        trackPageView(pathname);
    }, [pathname]);
}

export function useReadingProgress() {
    const pathname = usePathname();
    const [category, slug] = pathname.split("/").filter(Boolean) ?? [];

    const contentId = pathname;

    const defaultScrollMilestones = {
        25: false,
        50: false,
        75: false,
        100: false,
    };
    const [scrollMilestones, setScrollMilestones] = useState(defaultScrollMilestones);

    useEffect(() => {
        setScrollMilestones(defaultScrollMilestones);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            [25, 50, 75, 100].forEach((milestone) => {
                if (scrollPercent >= milestone && !scrollMilestones[milestone as keyof typeof scrollMilestones]) {
                    if (category === undefined && slug === undefined) {
                        trackCustomEvent(`ViewContent-Home-[${milestone}%]`, {
                            content_id: contentId,
                            progress: milestone,
                        });
                    } else if (category === 'learn_more' && slug !== undefined) {
                        const match = LEARN_MORE_ITEMS.find(item => pathname === `/learn_more/${item.id}` || (item.to && pathname === `/learn_more/${item.to}`));
                        if (match) {
                            trackCustomEvent(`ViewContent-LearnMore-[${match.id}]-[${milestone}%]`, {
                                content_id: contentId,
                                progress: milestone,
                            });
                        }
                        trackCustomEvent(`ViewContent-LearnMoreArticle-[${milestone}%]`, {
                            content_id: contentId,
                            progress: milestone,
                        });
                    } else if (category === 'relatable_stories' && slug !== undefined) {
                        const match = RELATABLE_STORIES_ITEMS.find(item => pathname === `/relatable_stories/${item.id}` || (item.to && pathname === `/relatable_stories/${item.to}`));
                        if (match) {
                            trackCustomEvent(`ViewContent-RelatableStories-[${match.id}]-[${milestone}%]`, {
                                content_id: contentId,
                                progress: milestone,
                            });
                        }
                        trackCustomEvent(`ViewContent-RelatableStoriesArticle-[${milestone}%]`, {
                            content_id: contentId,
                            progress: milestone,
                        });
                    } else if (category === 'client_sessions' && slug !== undefined) {
                        const match = CLIENT_SESSIONS_ITEMS.find(item => pathname === `/client_sessions/${item.id}` || (item.to && pathname === `/client_sessions/${item.to}`));
                        if (match) {
                            trackCustomEvent(`ViewContent-ClientSessions-[${match.id}]-[${milestone}%]`, {
                                content_id: contentId,
                                progress: milestone,
                            });
                        }
                        trackCustomEvent(`ViewContent-ClientSessionsArticle-[${milestone}%]`, {
                            content_id: contentId,
                            progress: milestone,
                        });
                    } else if (category === 'about_me' && slug === undefined) {
                        trackCustomEvent(`ViewContent-AboutMe-[${milestone}%]`, {
                            content_id: contentId,
                            progress: milestone,
                        });
                    } else if (category === 'free_consultation' && slug === undefined) {
                        trackCustomEvent(`ViewContent-FreeConsultation-[${milestone}%]`, {
                            content_id: contentId,
                            progress: milestone,
                        });
                    }

                    setScrollMilestones((prev) => ({
                        ...prev,
                        [milestone]: true,
                    }));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollMilestones, contentId, pathname]);
};
