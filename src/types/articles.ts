import type { JSX } from "react";

export type ArticleItem = {
    id: string,
    emojiImg?: string,
    spanEmoji: JSX.Element,
    title: string,
    to: string,
    image: string,
};

export type LearnMoreItem = ArticleItem

export type RelatableStoriesItem = ArticleItem & {
    hook: string,
};

export type ClientSessionsItem = ArticleItem;
