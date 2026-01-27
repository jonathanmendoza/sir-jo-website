import SpanEmoji from "@/components/SpanEmoji";
import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import PagerButton from "@/components/PagerButton";
import { CLIENT_SESSIONS_ITEMS } from "@/constants";
import { getClientSessionsArticleContentByItem } from "./lib";

const ITEMS = CLIENT_SESSIONS_ITEMS;

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
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                {getClientSessionsArticleContentByItem(articleItem)}
                <div className="w-full flex flex-row justify-between pt-8">
                    {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="🤝"/> Client Sessions</>} to="/client_sessions" />}
                    {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={`/client_sessions/${ITEMS[articleIndex - 1].id}`} />}
                    {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={`/client_sessions/${ITEMS[articleIndex + 1].id}`} />}
                    {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="👤"/> About Me</>} to="/about_me" />}
                </div>
            </ContentComponent>
        </>
    );
}
