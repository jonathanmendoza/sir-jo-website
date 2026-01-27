import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import PagerButton from "@/components/PagerButton";
import { RELATABLE_STORIES_ITEMS } from "@/constants";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";

const ITEMS = RELATABLE_STORIES_ITEMS;
const ARTICLE_ID = "ce293d56";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function ShePraysNothingHappensToHimBecauseSheKnowsCantCarryTheBurdenAlone() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <div>
                        <p>Bawat umaga, habang papasok sa trabaho ang asawa niya, Maria whispers a silent prayer:</p>
                        <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="👉"/> “Lord, please keep him safe.”</p>
                    </div>
                    <p>Hindi lang pagmamahal ang dahilan ng kanyang dasal—kundi takot din.</p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4ad.png" text="Her Silent Fear" />
                    <div>
                        <p>Kasi alam niya, kapag may nangyari sa asawa niya…</p>
                        <ul>
                            <ul><SpanEmoji value="👉"/> Sino ang magpo-provide para sa tuition? <SpanEmoji value="📚"/></ul>
                            <ul><SpanEmoji value="👉"/> Paano ang daily expenses? <SpanEmoji value="🍳"/></ul>
                            <ul><SpanEmoji value="👉"/> Paano ang bahay na pinag-iipunan nila? <SpanEmoji value="🏠"/></ul>
                        </ul>
                    </div>
                    <p>She can raise her kids with all the love in the world, pero deep down, she knows she can’t carry that financial burden alone. <SpanEmoji value="💔"/></p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="The Answer Families Turn To" />
                    <div>
                        <p>That’s why families like hers choose <b>Life Insurance with:</b></p>
                        <ul>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Income Protection</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Critical Illness Benefits</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Accident Coverage</li>
                        </ul>
                    </div>
                    <p>Because beyond money, it gives <b>peace of mind</b>—
        the assurance na kahit anong mangyari, secured pa rin ang mga pangarap ng mga anak nila. <SpanEmoji value="🌟"/></p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f338.png" text="Final Thought" />
                    <div>
                        <p style={{textIndent: '0'}}>Maria prays for safety.</p>
                        <p style={{textIndent: '0'}}>But with the right protection, she also gains <b>certainty</b>.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> How about your family?</p>
                        <p style={{textIndent: '0'}}>Is their tomorrow secured kahit anong mangyari today?</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step" />
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> with me today, and let’s protect the dreams of the people you love most. <SpanEmoji value="❤️"/></p>
                    </div>
                    <Suspense>
                        <FreeConsultationStateProvider>
                            <FreeConsultationForm/>
                        </FreeConsultationStateProvider>
                    </Suspense>
                    <hr/>

                </div>
                <div className="w-full flex flex-row justify-between pt-8">
                    {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="📖"/> Relatable Stories</>} to="/relatable_stories" />}
                    {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={ITEMS[articleIndex - 1].to} />}
                    {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={ITEMS[articleIndex + 1].to} />}
                    {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="🤝"/> Client Sessions</>} to="/client_sessions" />}
                </div>
            </ContentComponent>
        </>
    );
}

export default ShePraysNothingHappensToHimBecauseSheKnowsCantCarryTheBurdenAlone;
