import type { JSX } from "react";

export type ArticleItem = {
    id: string,
    emojiImg?: string,
    spanEmoji: JSX.Element,
    title: string,
    slug?: string,
    image: string,
};

export type LearnMoreItem = ArticleItem & {
    hook: string,
}

export type RelatableStoriesItem = ArticleItem & {
    hook: string,
};

export type ClientSessionsItem = ArticleItem & {
    hook: string,
}
