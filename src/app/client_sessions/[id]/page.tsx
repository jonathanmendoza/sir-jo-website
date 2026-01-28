import SpanEmoji from "@/components/SpanEmoji";
import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import PagerButton from "@/components/PagerButton";
import { BASE_URL, CLIENT_SESSIONS_ITEMS } from "@/constants";
import { getClientSessionsArticleContentByItem } from "./lib";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

const ITEMS = CLIENT_SESSIONS_ITEMS;

type Props = {
    params: Promise<{ id: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props, _parent: ResolvingMetadata): Promise<Metadata> {
    const { id } = await params;
    const articleIndex = ITEMS.findIndex(x => x.id === id || x.to?.split('/').pop() === id);
    const articleItem = ITEMS[articleIndex];

    return articleItem !== undefined ? {
        openGraph: {
            title: articleItem.title,
            description: articleItem.hook,
            images: {
                url: `${BASE_URL}${articleItem.image}`,
                width: 1080,
                height: 1080,

            }
        },
        twitter: {
            title: articleItem.title,
            description: articleItem.hook,
            images: `${BASE_URL}${articleItem.image}`
        }
    } : {}
}

export function generateStaticParams() {
    const articleIds = ITEMS.map(item => ({
        id: item.id
    }));
    const articleSlugs = ITEMS.filter(item => item.to !== undefined).map(item => ({
        id: item.to?.split('/').pop()
    }));
    return [...articleIds, ...articleSlugs];
}

export default async function RelatableStoriesArticlePage({params}: PageProps<'/relatable_stories/[id]'>) {
    const { id } = await params;
    const articleIndex = ITEMS.findIndex(x => x.id === id || x.to?.split('/').pop() === id);
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
