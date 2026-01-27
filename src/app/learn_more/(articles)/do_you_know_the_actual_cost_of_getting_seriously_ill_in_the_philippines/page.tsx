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
const ARTICLE_ID = "8321a958";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function DoYouKnowTheActualCostOfGettingSeriouslyIllInThePhilippines() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p>When someone in the family gets sick, hindi lang emosyonal ang bigat — <b>financially draining din</b>. And most of the time, hindi natin alam kung gaano kalaki talaga ang gastos... until it happens.</p>
                    <img src={articleItem.image}></img>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f494.png" text="The Real Numbers Behind Critical Illness"/>
                    <p>Let’s talk about the <i>actual</i> medical costs in the Philippines:</p>
                    <ul>
                        <li><SpanEmoji value="🫀"/> <b>Heart Attack:</b> ₱978,650</li>
                        <li><SpanEmoji value="🧠"/> <b>Stroke:</b> ₱1.8M</li>
                        <li><SpanEmoji value="💨"/> <b>Lung Cancer:</b> ₱2.78M</li>
                        <li><SpanEmoji value="🎀"/> <b>Breast Cancer:</b> ₱438K</li>
                        <li><SpanEmoji value="🍷"/> <b>Liver Cancer:</b> ₱574K</li>
                        <li><SpanEmoji value="💚"/> <b>Gall Bladder Cancer:</b> ₱636K</li>
                        <li><SpanEmoji value="🧩"/> <b>Brain Cancer:</b> ₱641K</li>
                        <li><SpanEmoji value="🍞"/> <b>Pancreatic Cancer:</b> ₱1.55M</li>
                    </ul>
                    <p>And that’s not all…</p>
                    <ul>
                        <li><SpanEmoji value="💉"/> <b>Kidney Dialysis:</b> ₱192K – ₱432K per year</li>
                        <li><SpanEmoji value="🧪"/> <b>Chemotherapy:</b> ₱20K – ₱120K <i>per session</i></li>
                        <li><SpanEmoji value="🫁"/> <b>Kidney Transplant:</b> ₱1.2M – ₱1.5M</li>
                    </ul>
                    <p>These aren’t random figures — <b>ito yung actual costs</b> na pinagdadaanan ng maraming Pilipino araw-araw.</p>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f630.png" text="The Hard Question"/>
                    <div>
                        <p style={{ textIndent: '0' }}>Now, ask yourself:</p>
                        <ul>
                            <li><SpanEmoji value="👉"/> Kaya ba ng savings mo ‘to?</li>
                            <li><SpanEmoji value="👉"/> Kaya ba ng emergency fund mo ang ₱1M hospital bill?</li>
                        </ul>
                    </div>
                    <p>Most families end up <b>selling assets, pulling out investments, or asking help online</b> when critical illness strikes. Hindi dahil walang malasakit — pero dahil wala talagang nakahandang fund for such emergencies.</p>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f9e1.png" text="The Smart Move: Get Critical Illness Insurance"/>
                    <div>
                        <p>Critical Illness Insurance gives you a <b>lump-sum cash benefit</b> the moment you’re diagnosed with a covered illness — para may panggastos ka for:</p>
                        <ul>
                            <li><SpanEmoji value="💊"/> Treatment</li>
                            <li><SpanEmoji value="💵"/> Hospital bills</li>
                            <li><SpanEmoji value="🍲"/> Daily expenses</li>
                            <li><SpanEmoji value="🚗"/> Transportation</li>
                            <li>…or simply, <b>peace of mind</b> habang nagpapagaling ka.</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>You don’t need to drain your savings just to survive.</li>
                            <li>You just need a <b>plan that protects your income and your family’s stability.</b></li>
                        </ul>
                    </div>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f680.png" text="Let’s Talk About Your Options"/>
                    <p>If you’re not sure how much coverage you need, or how it fits your budget — let’s talk. I can help you understand your options and find the best plan for your situation.</p>
                    <p><SpanEmoji value="📩"/> Sign-up for a free consultation today and let’s secure your health before life catches you off guard.</p>
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

export default DoYouKnowTheActualCostOfGettingSeriouslyIllInThePhilippines;
