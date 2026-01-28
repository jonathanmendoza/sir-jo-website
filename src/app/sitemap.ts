import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/constants'
import { getClientSessionsArticleSlugs, getLearnMoreArticleSlugs, getRelatableStoriesArticleSlugs } from '@/utils/article_slugs';

export default function sitemap(): MetadataRoute.Sitemap {
    const staticURLs: MetadataRoute.Sitemap = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/free_consultation`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${BASE_URL}/about_me`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.65,
        },
    ];

    const articlePriority = 0.5;
    const articleChangeFrequency = 'daily';
    const learnMoreURLs: MetadataRoute.Sitemap = getLearnMoreArticleSlugs().map(slug => {
        return {
            url: `${BASE_URL}/learn_more/${slug}`,
            lastModified: new Date(),
            changeFrequency: articleChangeFrequency,
            priority: articlePriority
        }
    });

    const relatableStoriesURLs: MetadataRoute.Sitemap = getRelatableStoriesArticleSlugs().map(slug => {
        return {
            url: `${BASE_URL}/relatable_stories/${slug}`,
            lastModified: new Date(),
            changeFrequency: articleChangeFrequency,
            priority: articlePriority
        }
    });

    const clientSessionsURLs: MetadataRoute.Sitemap = getClientSessionsArticleSlugs().map(slug => {
        return {
            url: `${BASE_URL}/client_sessions/${slug}`,
            lastModified: new Date(),
            changeFrequency: articleChangeFrequency,
            priority: articlePriority
        }
    });

    return [...staticURLs, ...learnMoreURLs, ...relatableStoriesURLs, ...clientSessionsURLs];
}
