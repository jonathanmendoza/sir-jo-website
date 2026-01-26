import EmojiComponent from "./EmojiComponent";

export default function HeadlineComponent(prop: {emojiImg?: string, emojiCount?: number, text?: string, children?: React.ReactNode}) {
    return (
        <h2 className="text-left"><EmojiComponent height="1.5rem" emojiImg={prop.emojiImg} emojiCount={prop.emojiCount}/> <b>{prop.children ?? prop.text}</b></h2>
    );
}
