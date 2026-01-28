import { CLIENT_SESSIONS_ITEMS, LEARN_MORE_ITEMS, RELATABLE_STORIES_ITEMS } from "@/constants";
import { ArticleItem } from "@/types";

const getArticleSlugs = (articleItems: ArticleItem[]): string[] => {
    return [...articleItems.map(item => item.id), ...articleItems.filter(item => item.slug !== undefined).map(item => item.slug ?? '')];
}

export function getLearnMoreArticleSlugs() {
    return getArticleSlugs(LEARN_MORE_ITEMS);
}

export function getRelatableStoriesArticleSlugs() {
    return getArticleSlugs(RELATABLE_STORIES_ITEMS);
}

export function getClientSessionsArticleSlugs() {
    return getArticleSlugs(CLIENT_SESSIONS_ITEMS);
}

export function getArticleIndexBySlug(articleItems: ArticleItem[], slug: string) {
    return articleItems.findIndex(x => x.id === slug || (x.slug && x.slug === slug));
}
