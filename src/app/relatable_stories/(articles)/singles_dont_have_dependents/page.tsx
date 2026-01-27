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
const ARTICLE_ID = "3b96a6f0";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function SinglesDontHaveDependents() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <div>
                        <p style={{textIndent: '0'}}>At 29, software engineer si Mia.</p>
                        <p style={{textIndent: '0'}}>She loves her freedom—</p>
                        <ul>
                            <li><SpanEmoji value="🏢"/> may sarili siyang condo,</li>
                            <li><SpanEmoji value="✈️"/> she travels when she wants,</li>
                            <li><SpanEmoji value="💼"/> and she’s proud she doesn’t rely on anyone.</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>Friends would even joke:</p>
                        <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="👉"/> “Buti ka pa, wala kang kailangang alagaan.”</p>
                    </div>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4ad.png" text="The Hidden Reality" />
                    <div>
                        <p>Pero isang gabi, habang nagbabrowse siya online, nabasa niya ang tungkol sa <b>hidden costs of critical illness:</b></p>
                        <ul>
                            <li><SpanEmoji value="💊"/> hospital bills</li>
                            <li><SpanEmoji value="💉"/> gamot at treatment</li>
                            <li><SpanEmoji value="🛋"/> lifestyle adjustments</li>
                            <li><SpanEmoji value="💸"/> even the loss of income</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>That’s when it hit her:</p>
                        <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="👉"/> “I may not have dependents… pero ako mismo, wala rin akong aaasahan if I get sick.”</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>Her parents are retired.</p>
                        <p style={{textIndent: '0'}}>Her siblings have their own families.</p>
                        <p style={{textIndent: '0'}}>And the last thing Mia wants is to become a burden.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="The Smart Move" />
                    <div>
                        <p style={{textIndent: '0'}}>So Mia took action.</p>
                        <p style={{textIndent: '0'}}>She got <b>life insurance with critical illness & income protection benefits</b>.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>Now, she has:</p>
                        <ul>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Cash for hospital bills & recovery</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Income replacement kung hindi siya makapagtrabaho</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Peace of mind that she can stand on her own—no matter what</li>
                        </ul>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f338.png" text="Final Thought" />
                    <div>
                        <p style={{textIndent: '0'}}>Mia still enjoys her independence.</p>
                        <p style={{textIndent: '0'}}>But this time, she also enjoys security.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> Ikaw din—</p>
                        <p style={{textIndent: '0'}}>Have you built your own safety net in case life throws you a curveball?</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step" />
                    <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> so you can protect your independence—on your terms. <SpanEmoji value="💼✨"/></p>
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

export default SinglesDontHaveDependents;
