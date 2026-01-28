import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import { LEARN_MORE_ITEMS } from "@/constants/";

function LearnMorePage() {
    return (
        <div>
            <ContentComponent headline={<ArticleTitleComponent emojiImg="emoji_u1f4d8.png" text="Learn More"/>}>
                <div className="flex flex-col gap-6 text-xl text-left items-stretch">
                    {LEARN_MORE_ITEMS.map(item => <div key={item.id}><ArticleTitleComponent to={`/learn_more/${item.id}`} emojiImg={item.emojiImg} spanEmoji={item.spanEmoji} text={item.title}/></div>)}
                </div>
            </ContentComponent>
        </div>
    );
}

export default LearnMorePage;
