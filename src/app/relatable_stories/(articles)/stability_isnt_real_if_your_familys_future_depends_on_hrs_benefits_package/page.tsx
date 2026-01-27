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
const ARTICLE_ID = "2ae58e9d";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function StabilityIsntRealIfYourFamilysFutureDependsOnHrsBenefitsPackage() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p>Si <b>James</b>, nagtrabaho sa isang corporate logistics company for 10 years. On paper, stable ang buhay—monthly salary, HMO para sa pamilya, retirement fund, at group life insurance.</p>
                    <div>
                        <p>Pero isang araw, habang nagkakape kasama ang officemate na bagong resign, may realization siyang tumama:</p>
                        <ul className="italic">
                            <li><SpanEmoji value="👉"/> “The moment na umalis ako sa company, lahat ng benefits na ‘to—HMO, retirement, life insurance—mawawala.”</li>
                            <li><SpanEmoji value="👉"/> “At paano kung mag-downsize ang company? Paano kung may mangyari sa’kin habang pamilya ko umaasa pa rin sa HR package?”</li>
                        </ul>
                    </div>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2753.png" text='When “Stability” Isn’t Really Stable'/>
                    <div>
                        <p>Bigla niyang naisip ang asawa at dalawang anak niya.</p>
                        <p style={{textIndent: '0'}}><SpanEmoji value="📌"/> Tuition, daily needs, future dreams—lahat naka-depende sa company benefits.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>Doon niya narealize:</p>
                        <p>Kung nakaasa lang siya sa HR, ang tinatawag na “stability” ay parang <b>illusion</b> lang.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Building His Own Safety Net" />
                    <div>
                        <p style={{textIndent: '0'}}>That’s when James decided to take control.</p>
                        <p style={{textIndent: '0'}}>Nag-set up siya ng sarili niyang:</p>
                        <ul>
                            <li><b><SpanEmoji value="&#x2705;&#xFE0F;"/> Life Insurance with Income Protection</b></li>
                            <li><b><SpanEmoji value="&#x2705;&#xFE0F;"/> Critical Illness Coverage</b></li>
                            <li><b><SpanEmoji value="&#x2705;&#xFE0F;"/> Accident Benefits</b></li>
                        </ul>
                    </div>
                    <p>Ngayon, kahit mawalan siya ng trabaho o may unexpected event mangyari, <b>secured pa rin ang pamilya niya</b>.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="The Big Change"/>
                    <p style={{textIndent: '0'}}>James still works in corporate today.</p>
                    <p>Pero this time, pumapasok siya sa opisina na may <b>peace of mind</b>—alam niya na hindi na naka-depende sa HR ang future ng pamilya niya.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f449.png" text="Final Thoughts"/>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Kung umaasa ka lang sa company benefits, tanungin mo sarili mo:</p>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="italic"><SpanEmoji value="👉"/> “What happens kapag wala na ako sa company?”</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                    <p>Don’t let your family’s future be at the mercy of HR.</p>
                    <p style={{textIndent: '0', textAlign: 'justify'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> with me today, and let’s secure your family with protection na ikaw mismo ang may control.</p>
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

export default StabilityIsntRealIfYourFamilysFutureDependsOnHrsBenefitsPackage;
