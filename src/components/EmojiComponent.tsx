export default function EmojiComponent(prop: {height?: string, emojiImg?: string, emojiCount?: number}) {
    const height = prop.height ?? '1.75rem';
    const emojiCount = prop.emojiCount ?? 1;

    return (
        <>
            {Array.from({ length: emojiCount ?? 1}, (_, i) => (<img key={i} src={`/emojis/${prop.emojiImg}`} style={{height}} className="inline-block mt-0 aspect-square"/>))}
        </>
    );
}
