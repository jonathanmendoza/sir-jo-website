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
const ARTICLE_ID = "95441919";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function WhyFWD4xCriticalIllnessProtectionPlanIsAGameChanger() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <div>
                        <p>Let’s be honest — getting sick once is scary enough…</p>
                        <p>Pero paano kung <b>dalawa o tatlong beses kang tamaan ng major illness</b> in your lifetime? 😟</p>
                    </div>
                    <p>That’s the reality today. With stress, lifestyle, and environment, even after recovering from one critical illness — there’s always a chance of another.</p>
                    <div>
                        <p style={{textIndent: '0'}}>But here’s the good news:</p>
                        <p style={{textIndent: '0'}}>👉 <b>FWD’s 4x Critical Illness Protection Plan</b> gives you peace of mind <i>four times over.</i></p>
                    </div>
                    <img src={articleItem.image}></img>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f9e1.png" text="What makes it unique?" />
                    <p>Unlike most plans na <b>isang beses lang pwedeng mag-claim at mahirap na ma-insure ulet</b>, FWD’s plan lets you claim up to <b>4x</b> throughout your lifetime:</p>
                    <div>
                        <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x2705;&#xFE0F;"/> 1x Minor Critical Illness claim</b></p>
                        <p style={{textIndent: '0'}}>— For early-stage illnesses (like early-stage cancer or minor stroke).</p>
                        <p style={{textIndent: '0'}}>You get a lump sum benefit to start treatment early — habang manageable pa ang condition.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x2705;&#xFE0F;"/> 3x Major Critical Illness claims </b></p>
                        <p style={{textIndent: '0'}}>— For life-threatening illnesses like heart attack, late-stage cancer, kidney failure, or stroke.</p>
                        <p style={{textIndent: '0'}}>Even if you already claimed once, you can still receive up to <b>three separate payouts</b> for future illnesses — as long as they’re under different categories.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x2705;&#xFE0F;"/> 100% Guaranteed Moneyback </b></p>
                        <p style={{textIndent: '0'}}>— Kung hindi mo nagamit yung major critical illness benefit atleast once at age 75, ibabalik lahat ng binayad mo. Kaya walang tapon sa insurance plan na ito.</p>
                    </div>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1fa7a.png" text="Why this matters more than ever" />
                    <div>
                        <p style={{textIndent: '0'}}>Here’s the reality:</p>
                        <p style={{textIndent: '0'}}>A lot of people recover from one illness… only to face another later in life.</p>
                        <p style={{textIndent: '0'}}>And most insurance plans? ❌ They stop coverage after the first claim.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>FWD’s plan changes that.</p>
                        <p style={{textIndent: '0'}}>It’s designed for <b>real-life recovery</b> — kasi healing doesn’t happen in one payout.</p>
                        <p style={{textIndent: '0'}}>You get <b>financial support every step of the way</b>, from early detection to long-term recovery.</p>
                    </div>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f4b0.png" text="Financial flexibility you can control" />
                    <p>Each time you claim, you receive <b>cash directly</b>, not just hospital coverage. Pwede mo itong gamitin sa:</p>
                    <ul className="list-disc list-inside">
                        <li>Treatments & medications 💊</li>
                        <li>Loss of income replacement 💼</li>
                        <li>Family expenses or recovery time 🏠</li>
                    </ul>
                    <p>No need to submit receipts paano ninyo gagastusin ang pera — <b>ikaw at pamilya mo ang may control</b>.</p>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f9e0.png" text="A plan that grows with you" />
                    <p style={{textIndent: '0'}}>FWD’s 4x plan is perfect for people who:</p>
                    <ul className="list-disc list-inside">
                        <li>Want long-term protection even after surviving one illness</li>
                        <li>Value flexibility in how they use their benefit</li>
                        <li>Don’t want to worry about being uninsured after their first claim</li>
                    </ul>
                    <p>It’s a <b>“recover, rest, repeat protected”</b> kind of plan — kasi life doesn’t stop after one challenge.</p>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f4ac.png" text="Real Talk: Prevention is power, but preparation is peace of mind" />
                    <p>Critical illness can drain not just your savings, but your energy and hope too. But with FWD’s 4x Critical Illness Protection, you can focus on what truly matters — <b>getting better, not paying bills.</b></p>

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f331.png" text="Start protecting your future — 4x stronger" />
                    <p>Ready to know how much protection you can get (and how affordable it can be)?</p>
                    <p>Let’s create a plan that fits your life, your budget, and your dreams.</p>
                    <Suspense>
                        <FreeConsultationStateProvider>
                            <FreeConsultationForm/>
                        </FreeConsultationStateProvider>
                    </Suspense>

                    <hr />

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

export default WhyFWD4xCriticalIllnessProtectionPlanIsAGameChanger;
