import { CLIENT_SESSIONS_ITEMS, LEARN_MORE_ITEMS, RELATABLE_STORIES_ITEMS } from "@/constants";
import { ArticleItem } from "@/types";

const getArticleSlugs = (articleItems: ArticleItem[]) => {
    return [...articleItems.map(item => item.id), ...articleItems.filter(item => item.to !== undefined).map(item => item.to?.split('/').pop() ?? '')];
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
