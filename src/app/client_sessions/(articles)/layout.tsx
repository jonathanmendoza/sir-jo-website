"use client";

import { usePathname } from "next/navigation";
import ContentComponent from "@/components/ContentComponent";
import PagerButton from "@/components/PagerButton";
import ScrollToTop from "@/components/ScrollToTop";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { CLIENT_SESSIONS_ITEMS } from "@/constants";
import { useEffect, useState } from "react";
import { ClientSessionsItemContext } from "@/contexts";

export default function Layout({children}: {children: React.ReactNode}) {
    const ITEMS = CLIENT_SESSIONS_ITEMS;
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
            <ClientSessionsItemContext.Provider value={articleItem}>
                <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                    {children}
                </ContentComponent>
            </ClientSessionsItemContext.Provider>
            <div className="w-full flex flex-row justify-between pt-8">
                {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="🤝"/> Client Sessions</>} to="/client_sessions" />}
                {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={ITEMS[articleIndex - 1].to} />}
                {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={ITEMS[articleIndex + 1].to} />}
                {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="👤"/> About Me</>} to="/about_me" />}
            </div>
        </div>
    );
}
