import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import { RELATABLE_STORIES_ITEMS } from "@/constants/relatable-stories-items";

function RelatableStoriesPage() {
    return (
        <div>
            <ContentComponent headline={<ArticleTitleComponent emojiImg="emoji_u1f4d6.png" text="Relatable Stories"/>}>
                <div className="flex flex-col gap-6 text-xl text-left items-stretch">
                    {RELATABLE_STORIES_ITEMS.map(item => <div key={item.to}><ArticleTitleComponent to={item.to} emojiImg={item.emojiImg} spanEmoji={item.spanEmoji} text={item.title}/></div>)}
                </div>
            </ContentComponent>
        </div>
    );
}

export default RelatableStoriesPage;
