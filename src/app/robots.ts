import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/constants'
import { getLearnMoreArticleSlugs, getRelatableStoriesArticleSlugs, getClientSessionsArticleSlugs } from '@/utils/article_slugs';

export default function robots(): MetadataRoute.Robots {
    const staticRoutes = ['/', '/free_consultation', '/about_me'];
    const learnMoreRoutes = getLearnMoreArticleSlugs().map(slug => `/learn_more/${slug}`);
    const relatableStoriesRoutes = getRelatableStoriesArticleSlugs().map(slug => `/relatable_stories/${slug}`);
    const clientSessionsRoutes = getClientSessionsArticleSlugs().map(slug => `/client_sessions/${slug}`);
    return {
        rules: {
            userAgent: '*',
            allow: [...staticRoutes, ...learnMoreRoutes, ...relatableStoriesRoutes, ...clientSessionsRoutes],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    }
}
