import SpanEmoji from "@/components/SpanEmoji";
import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import PagerButton from "@/components/PagerButton";
import { BASE_URL, RELATABLE_STORIES_ITEMS } from "@/constants";
import { getRelatableStoriesArticleContentByItem } from "./lib";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getArticleIndexBySlug, getRelatableStoriesArticleSlugs } from "@/utils/article_slugs";

const ITEMS = RELATABLE_STORIES_ITEMS;

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props, _parent: ResolvingMetadata): Promise<Metadata> {
    const { slug } = await params;
    const articleIndex = getArticleIndexBySlug(ITEMS, slug);
    const articleItem = ITEMS[articleIndex];

    return articleItem !== undefined ? {
        openGraph: {
            title: articleItem.title,
            description: articleItem.hook,
        },
        twitter: {
            title: articleItem.title,
            description: articleItem.hook,
        }
    } : {}
}

export function generateStaticParams() {
    const params = getRelatableStoriesArticleSlugs().map(slug => ({id: slug}));
    return params;
}

export default async function RelatableStoriesArticlePage({params}: PageProps<'/relatable_stories/[slug]'>) {
    const { slug } = await params;
    const articleIndex = getArticleIndexBySlug(ITEMS, slug);
    const articleItem = ITEMS[articleIndex];
    if (articleItem === undefined) {
        notFound();
    }
    return (
        <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
            {getRelatableStoriesArticleContentByItem(articleItem)}
            <div className="w-full flex flex-row justify-between pt-8">
                {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="📖"/> Relatable Stories</>} to="/relatable_stories" />}
                {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={`/relatable_stories/${ITEMS[articleIndex - 1].id}`} />}
                {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={`/relatable_stories/${ITEMS[articleIndex + 1].id}`} />}
                {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="🤝"/> Client Sessions</>} to="/client_sessions" />}
            </div>
        </ContentComponent>
    );
}
