import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import { CLIENT_SESSIONS_ITEMS } from "@/constants";

function ClientSessionsPage() {
    return (
        <div>
            <ContentComponent headline={<ArticleTitleComponent emojiImg="emoji_u1f91d.png" text="Client Sessions"/>}>
                <div className="flex flex-col gap-4 text-xl text-left items-stretch">
                    {CLIENT_SESSIONS_ITEMS.map(item => <div key={item.to}><ArticleTitleComponent to={item.to} emojiImg={item.emojiImg} text={item.title}/></div>)}
                </div>
            </ContentComponent>
        </div>
    );
}

export default ClientSessionsPage;
