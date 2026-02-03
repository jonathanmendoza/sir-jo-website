import SpanEmoji from "@/components/SpanEmoji";
import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import PagerButton from "@/components/PagerButton";
import { BASE_URL, CLIENT_SESSIONS_ITEMS } from "@/constants";
import { getClientSessionsArticleContentByItem } from "./lib";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getArticleIndexBySlug, getClientSessionsArticleSlugs } from "@/utils/article_slugs";

const ITEMS = CLIENT_SESSIONS_ITEMS;

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
    const params = getClientSessionsArticleSlugs().map(slug => ({slug: slug}));
    return params;
}

export default async function ClientSessionsArticlePage({params}: PageProps<'/client_sessions/[slug]'>) {
    const { slug } = await params;
    const articleIndex = getArticleIndexBySlug(ITEMS, slug);
    const articleItem = ITEMS[articleIndex];
    if (articleItem === undefined) {
        notFound();
    }
    return (
        <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
            {getClientSessionsArticleContentByItem(articleItem)}
            <div className="w-full flex flex-row justify-between pt-8">
                {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="🤝"/> Client Sessions</>} to="/client_sessions" />}
                {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={`/client_sessions/${ITEMS[articleIndex - 1].id}`} />}
                {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={`/client_sessions/${ITEMS[articleIndex + 1].id}`} />}
                {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="👤"/> About Me</>} to="/about_me" />}
            </div>
        </ContentComponent>
    );
}
