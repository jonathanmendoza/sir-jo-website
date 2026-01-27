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
const ARTICLE_ID = "abca9425";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function HowIEarn13KPesosPassiveIncomeQuarterlyFromMyFWDInvestmentAccount() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <div>
                        <p>That’s exactly what I enjoy with my <b>FWD investment account</b>:</p>
                        <p style={{textIndent: '0'}}><SpanEmoji value="📈"/> Over <b>₱13,000 passive income</b> every 3 months from my ₱1M investment.</p>
                    </div>
                    <p style={{textIndent: '0'}}>Your money can work for you too. <SpanEmoji value="🙌"/></p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f511.png" text="FWD Investment Options:"/>
                    <ul>
                        <li><SpanEmoji value="&#x2705;&#xFE0F;"/> <b>FWD Fast Lane</b> – Start with ₱200K and above. Designed for investors who want short to medium-term opportunities with potential payouts.</li>
                        <li><SpanEmoji value="&#x2705;&#xFE0F;"/> <b>FWD Wealth+</b> – Start with ₱1M and above. Built for long-term investors who want higher potential returns and <b>quarterly cash payouts</b>.</li>
                    </ul>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Summary of Features:"/>
                    <ul className="list-disc list-inside">
                        <li><b>Quarterly Payouts</b>: Get passive income every 3 months</li>
                        <li><b>Flexible Investment Amounts</b>: Choose the plan that fits your budget and goals</li>
                        <li><b>Professional Fund Management</b>: Let experts grow your money while you focus on life</li>
                        <li><b>Access Anytime</b>: Track your investments easily through the FWD app</li>
                    </ul>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f449.png" text="Final Thoughts"/>
                    <p>Hindi mo kailangang magtrabaho ng sobra para kumita ng extra. Puwede mong ipatrabaho ang pera mo sa’yo.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                    <p style={{textIndent: '0'}}>Let’s talk about how you can start your own FWD investment plan—whether it’s <b>Fast Lane (₱200K+)</b> or <b>Wealth+ (₱1M+)</b>.</p>
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

export default HowIEarn13KPesosPassiveIncomeQuarterlyFromMyFWDInvestmentAccount;
