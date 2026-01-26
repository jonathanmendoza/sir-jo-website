import Link from "next/link";
import EmojiComponent from "./EmojiComponent";

export default function ArticleTitleComponent(prop: {to?: string, emojiImg?: string, emojiCount?: number, spanEmoji?: React.ReactNode, text: string}) {
    return (
        <>
            {
                prop.to ? <Link href={prop.to}>{prop.emojiImg ? <EmojiComponent emojiImg={prop.emojiImg} emojiCount={prop.emojiCount}/> : prop.spanEmoji} {prop.text}</Link>
                :
                <h1>{prop.emojiImg ? <EmojiComponent emojiImg={prop.emojiImg} emojiCount={prop.emojiCount}/> : prop.spanEmoji} <b>{prop.text}</b></h1>
            }
        </>
    );
}
