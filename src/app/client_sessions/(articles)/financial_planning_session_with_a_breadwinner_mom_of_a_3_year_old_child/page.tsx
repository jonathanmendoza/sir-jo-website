import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import PagerButton from "@/components/PagerButton";
import { CLIENT_SESSIONS_ITEMS } from "@/constants";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";

const ITEMS = CLIENT_SESSIONS_ITEMS;
const ARTICLE_ID = "40a47bcd";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function FinancialPlanningSessionWithABreadwinnerMomOfA3YearOldChild() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p>Today, I had the privilege of talking to a strong breadwinner mom. <SpanEmoji value="💪❤️"/> She’s raising a 3-year-old child on her own, and she opened up about one of her biggest fears:</p>
                    <p className="italic">“What if something happens to me before my child becomes financially independent and builds a family of his own?”</p>
                    <p>To make things even harder, she doesn’t have a partner to share the responsibility. Every peso depends on her ability to work.</p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Building Her Safety Net" />
                    <div>
                        <p>After hearing her concerns, we designed a plan that complements her existing personal and company life insurance.</p>
                        <ul>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> It provides additional protection.</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> It includes income replacement in case the unexpected happens.</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> And the best part—it comes with an investment-linked fund that grows over time. Something her child can use when he becomes an adult.</li>
                        </ul>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f31f.png" text="Peace of Mind for Her and Her Child" />
                    <p>Now, she feels more at peace knowing she’s giving her child a stronger fighting chance in life—no matter what tomorrow brings.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4e9.png" text="Your Turn" />
                    <p><SpanEmoji value="&#x1F4DD;"/> If you can relate to her story, <b>sign up for a free consultation</b> today. Let’s build a plan that gives you and your family peace of mind too.</p>
                    <Suspense>
                        <FreeConsultationStateProvider>
                            <FreeConsultationForm/>
                        </FreeConsultationStateProvider>
                    </Suspense>
                    <hr/>

                </div>
                <div className="w-full flex flex-row justify-between pt-8">
                    {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="🤝"/> Client Sessions</>} to="/client_sessions" />}
                    {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={ITEMS[articleIndex - 1].to} />}
                    {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={ITEMS[articleIndex + 1].to} />}
                    {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="👤"/> About Me</>} to="/about_me" />}
                </div>
            </ContentComponent>
        </>
    );
}

export default FinancialPlanningSessionWithABreadwinnerMomOfA3YearOldChild;
