"use client";

import { usePathname } from "next/navigation";
import ContentComponent from "@/components/ContentComponent";
import PagerButton from "@/components/PagerButton";
import ScrollToTop from "@/components/ScrollToTop";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { RELATABLE_STORIES_ITEMS } from "@/constants";
import { useEffect, useState } from "react";
import { RelatableStoriesItemContext } from "@/contexts";

export default function Layout({children}: {children: React.ReactNode}) {
    const ITEMS = RELATABLE_STORIES_ITEMS;
    const pathname = usePathname();
    const [articleIndex, setArticleIndex] = useState(ITEMS.findIndex(x => x.to === pathname));

    useEffect(() => {
        setArticleIndex(ITEMS.findIndex(x => x.to === pathname));
    }, [pathname]);

    if (articleIndex < 0) {
        return (<></>);
    }
    const articleItem = ITEMS[articleIndex];

    return (
        <div>
            <ScrollToTop/>
            <RelatableStoriesItemContext.Provider value={articleItem}>
                <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                    {children}
                </ContentComponent>
            </RelatableStoriesItemContext.Provider>
            <div className="w-full flex flex-row justify-between pt-8">
                {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="📖"/> Relatable Stories</>} to="/relatable_stories" />}
                {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={ITEMS[articleIndex - 1].to} />}
                {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={ITEMS[articleIndex + 1].to} />}
                {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="🤝"/> Client Sessions</>} to="/client_sessions" />}
            </div>
        </div>
    );
}
