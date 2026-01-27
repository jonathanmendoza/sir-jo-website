import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import ContentComponent from "@/components/ContentComponent";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import PagerButton from "@/components/PagerButton";
import { LEARN_MORE_ITEMS } from "@/constants";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";

const ITEMS = LEARN_MORE_ITEMS;
const ARTICLE_ID = "07d05308";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function WhatAreTheHiddenCostsOfCriticalIllness() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p style={{ textIndent: '0' }}><SpanEmoji value="💡"/> Alam mo ba kung ano ang mga <i>hidden costs</i> ng Critical Illness?</p>
                    <img src={articleItem.image}></img>
                    <ul>
                        <li><SpanEmoji value="&#x274C;&#xFE0F;"/> <b>Medical Costs</b> – Hospitalization, doctor’s fees, at treatments na hindi fully covered ng HMO</li>
                        <li><SpanEmoji value="&#x274C;&#xFE0F;"/> <b>Lifestyle Change Costs</b> – Loss of income, special diet, dagdag na gastos sa transportation at home adjustments</li>
                        <li><SpanEmoji value="&#x274C;&#xFE0F;"/> <b>Family Costs</b> – May kamag-anak na titigil sa work para mag-alaga, kailangan mag-hire ng helper, o gamitin ang ipon na para sana sa edukasyon o retirement</li>
                        <li><SpanEmoji value="&#x274C;&#xFE0F;"/> <b>Future Insurability Costs</b> – Kapag na-diagnose na, mas mahirap at mas mahal kumuha ng bagong insurance coverage</li>
                    </ul>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
                    <p>Hindi lang hospital bills ang gastos kapag nagkasakit ng malala. Mas malaki pa ang epekto nito sa income, family, at future plans mo.</p>
                    <p style={{ textIndent: '0' }}><SpanEmoji value="👉"/> Kaya mahalaga na meron kang <b>Critical Illness Insurance plan</b>—para may <b>lump sum cash</b> ka agad upon diagnosis. Makakapag-focus ka sa paggaling, habang safe ang finances at future ng pamilya mo.</p>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                    <p style={{ textIndent: '0' }}>Let’s talk about a plan that truly fits you and your family.</p>
                    <Suspense>
                        <FreeConsultationStateProvider>
                            <FreeConsultationForm/>
                        </FreeConsultationStateProvider>
                    </Suspense>
                    <hr/>

                </div>
                <div className="w-full flex flex-row justify-between pt-8">
                    {articleIndex <= 0 && <PagerButton textLabel="Previous" textSubtext={<><SpanEmoji value="📘"/> Learn More</>} to="/learn_more" />}
                    {articleIndex > 0 && <PagerButton textLabel="Previous" textSubtext={<>{ITEMS[articleIndex - 1].spanEmoji}{` ${ITEMS[articleIndex - 1].title}`}</>} to={ITEMS[articleIndex - 1].to} />}
                    {articleIndex < (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<>{ITEMS[articleIndex + 1].spanEmoji}{` ${ITEMS[articleIndex + 1].title}`}</>} to={ITEMS[articleIndex + 1].to} />}
                    {articleIndex == (ITEMS.length - 1) && <PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="📖"/> Relatable Stories</>} to="/relatable_stories" />}
                </div>
            </ContentComponent>
        </>
    );
}

export default WhatAreTheHiddenCostsOfCriticalIllness;
