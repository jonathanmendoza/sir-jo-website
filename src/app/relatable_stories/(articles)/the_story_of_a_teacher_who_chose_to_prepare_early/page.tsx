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
const ARTICLE_ID = "9011d662";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function TheStoryOfATeacherWhoChoseToPrepareEarly() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p>Maria is a 34-year-old public school teacher. Like many teachers, she’s hardworking, caring, and selfless — always putting her students first before herself.</p>
                    <p>One day, habang nag-aayos siya ng requirements for her job, her HR officer reminded her:</p>
                    <div>
                        <div className="border-l-4 border-l-gray-500 pl-5">
                            <p style={{textIndent: '0'}}>“Ma’am, kailangan niyo po mag-submit ng proof of HMO coverage.”</p>
                        </div>
                    </div>
                    <p>So she started looking for an HMO — something to cover checkups, lab tests, and basic hospitalization. But while searching, she stumbled upon something that completely changed the way she saw “health protection.”</p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f494.png" text="A Friend’s Story That Hit Too Close to Home" />
                    <p>A few months earlier, one of Maria’s closest friends — also a teacher — was diagnosed with breast cancer.</p>
                    <p style={{textIndent: '0', textAlign: 'left'}}>At first, Maria thought:</p>
                    <div className="border-l-4 border-l-gray-500 pl-5">
                        <p style={{textIndent: '0'}}>“Okay lang ‘yan, may PhilHealth naman at HMO si ate.”</p>
                    </div>
                    <p style={{textIndent: '0', textAlign: 'left'}}>But she was wrong.</p>
                    <p>Her friend’s <b>initial payment</b> for treatment alone was already <b>₱500,000</b>. That’s just the <i>down payment</i>. PhilHealth and HMO barely covered a portion of it.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>The rest?</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Out of pocket.</p>
                    </div>
                    <p>And because of that, her friend’s family had to pull out their small business savings. Employees weren’t paid on time. The financial stress piled up — not just for the patient, but for everyone around her.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Maria saw it all.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}>And it scared her.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f9e0.png" text="The Realization" />
                    <p style={{textIndent: '0', textAlign: 'left'}}>That’s when she said to herself:</p>
                    <div className="border-l-4 border-l-gray-500 pl-5">
                        <p style={{textIndent: '0'}}>“Hindi ko na hihintayin maging late. I need to prepare now, while I’m still healthy.”</p>
                    </div>
                    <p>So aside from getting her HMO, Maria decided to <b>get a Critical Illness Insurance</b> — something that would protect her income and give her a lump sum of money if ever she got diagnosed with a serious illness.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Because she learned:</p>
                        <ul>
                            <li><SpanEmoji value="👉"/> HMO is for hospitalization and medical care.</li>
                            <li><SpanEmoji value="👉"/> But <b>Critical Illness Insurance</b> is for recovery — for <i>life after the hospital</i>.</li>
                        </ul>
                    </div>
                    <p>It gives you money to cover treatments, pay the bills, and still provide for your family even when you can’t work.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4aa.png" text="Peace of Mind Over Fear" />
                    <p>Today, Maria continues teaching with peace of mind. She knows that no matter what happens, she has a plan.</p>
                    <p style={{textIndent: '0', textAlign: 'left'}}>She said:</p>
                    <div className="border-l-4 border-l-gray-500 pl-5">
                        <p style={{textIndent: '0'}}>“Masarap sa pakiramdam ‘yung alam mong may backup plan ka. I’m doing this not just for myself, but for the people I love.”</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4a1.png" text="What We Can Learn From Maria" />
                    <p style={{textIndent: '0', textAlign: 'left'}}>Health emergencies are never just medical — they’re <b>financial</b>.</p>
                    <p style={{textIndent: '0', textAlign: 'left'}}>PhilHealth and HMO help, yes — but they’re not enough for long-term illnesses like cancer, heart attack, or stroke.</p>
                    <p>If you want to protect your family and your future, start preparing <i>before</i> life forces you to.</p>


                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Plan Ahead. Protect Your Health. Secure Your Peace." />
                    <p>Just like Maria, you can take the first step today.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a FREE consultation</b> to learn how Critical Illness Insurance can give you the security and peace of mind you deserve.</p>
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

export default TheStoryOfATeacherWhoChoseToPrepareEarly;
