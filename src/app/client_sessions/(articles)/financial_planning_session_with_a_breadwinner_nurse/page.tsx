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
const ARTICLE_ID = "6f743c75";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function FinancialPlanningSessionWithABreadwinnerNurse() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p className="italic">A Breadwinner’s Journey to Complete Financial Protection</p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4bc.png" text="“Tapos na ang una kong insurance… ano’ng next?”" />
                    <p>Nurse <i>Lara</i> (not her real name) came to me after seeing my Facebook Ad about one my client's story</p>
                    <p>She had just completed the full payment term of her <b>first traditional whole-life insurance plan</b> — a plan she bought years ago para meron siyang <i>forced savings</i> for her future self.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Pero habang tumatagal, na-realize niyang…</p>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">hindi na sapat ang coverage niya.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Especially now that she carries the biggest responsibility in her family.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f469_200d_2695.png" text="Breadwinner na, mas malaki na ang panganib" />
                    <p>Lara is the main provider for her mom and her brother.</p>
                    <p>And recently, her brother quit his full-time job to start his own business. Siya ang tumulong sa puhunan — kasi ganun siya magmahal sa pamilya.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Pero dahil dito, mas naging malinaw sa kanya:</p>
                        <div className="border-l-4 border-l-gray-500 pl-5">
                            <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">“Kapag may nangyari sa’kin… sino sasalo sa kanila?”</p>
                        </div>
                    </div>
                    <p>She needed a plan that would <b>truly protect them</b> from financial burden, in case she gets sick, disabled, or something worse.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Together, we designed a plan that actually matches her life today" />
                    <p>We built an <b>investment-linked insurance plan</b> tailored for her needs — not too heavy sa budget, but strong enough to protect her and her family.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold"><SpanEmoji value="👉"/> The core benefits we focused on:</p>
                        <ul className="list-disc list-inside">
                            <li><b>Income Protection</b> – para may kapalit ang income niya kapag nawala siya due to sudden death</li>
                            <li><b>Critical Illness Benefit</b> – dahil alam niyang sobrang mahal magkasakit</li>
                            <li><b>Accident & Disability Income Protection</b> – real threats for frontliners like her</li>
                            <li><b>Retirement Fund Growth</b> – investment-linked, designed for long-term</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>A plan that protects her family against <b>S.A.D.D.</b></p>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">Sickness, Accident, Disability, and Death.</p>
                    </div>
                    <p style={{textIndent: '0', textAlign: 'left'}}>Exactly what a breadwinner needs.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f468_200d_1f469_200d_1f467_200d_1f466.png" text="But We Didn’t Stop There — Kasama sa Protection ang Family nila" />
                    <p style={{textIndent: '0', textAlign: 'left'}}>While we were planning, one thing became clear:</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">If anything happens to her mom or her brother… siya rin ang sasalo.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Hospital bills. Daily expenses. Caregiving. Everything.</p>
                    </div>
                    <p style={{textIndent: '0', textAlign: 'left'}}>So we added:</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold"><SpanEmoji value="🧡"/> Traditional Term Insurance Plans for:</p>
                        <ul className="list-disc list-inside">
                            <li>Her brother – temporary coverage habang nag-i-start pa lang ang business</li>
                            <li>Her mother – para may protection habang hindi pa sila nakakapag-whole-life</li>
                        </ul>
                    </div>
                    <p>These plans are the <b>cheapest way</b> to get meaningful coverage habang nagsisimula pa lang ang financial foundation.</p>
                    <p>Later on, when her brother’s business grows, he can buy his own whole-life insurance — and even upgrade their mom’s plan.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f468_200d_1f469_200d_1f467_200d_1f466.png" text="And the best part?" />
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">All three plans FIT perfectly within her annual insurance budget.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Zero strain. Zero guilt.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Just smart, solid planning.</p>
                    </div>
                    <p style={{textIndent: '0', textAlign: 'left'}}>She walked away confident knowing:</p>
                    <ul>
                        <li><SpanEmoji value="✔"/> She is protected.</li>
                        <li><SpanEmoji value="✔"/> Her retirement fund is growing.</li>
                        <li><SpanEmoji value="✔"/> Her mom and brother are covered.</li>
                        <li><SpanEmoji value="✔"/> Her role as breadwinner won’t destroy her finances.</li>
                    </ul>
                    <p>And yes — kahit pinautang niya ang kuya niya for his business startup… <b>she is STILL financially secure</b>.</p>


                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts" />
                    <p style={{textIndent: '0', textAlign: 'left'}}>Lara’s story is the story of many breadwinners:</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">They give, give, give — pero nakakalimutang protektahan ang sarili.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}>But true love for family includes planning for the unexpected.</p>
                    </div>
                    <p>I’m glad I helped her build a plan that honors her sacrifices, protects her future, and shields her family from financial burden.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Kung breadwinner ka rin…</p>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">This is your reminder to protect the protector.</p>
                    </div>
                    <p style={{textIndent: '0', textAlign: 'left'}}><SpanEmoji value="&#x1F4DD;"/> <b>Sign-up for a free financial planning session today.</b></p>
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

export default FinancialPlanningSessionWithABreadwinnerNurse;
