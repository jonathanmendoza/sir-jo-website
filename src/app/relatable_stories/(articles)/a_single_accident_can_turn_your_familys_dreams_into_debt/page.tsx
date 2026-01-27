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
const ARTICLE_ID = "645a2bad";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function ASingleAccidentCanTurnYourFamilysDreamsIntoDebt() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p >Si <b>Marco</b> may maliit na logistics company sa Quezon City.</p>
                    <p>Araw-araw, nagsusumikap siya—hindi lang para sa mga kliyente, kundi higit sa lahat, para sa pamilya niya.</p>
                    <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> His dream?</p>
                    <ul className="list-disc list-inside">
                        <li>Mapag-aral ang mga anak sa good schools <SpanEmoji value="🎓"/></li>
                        <li>Matapos bayaran ang family home <SpanEmoji value="🏠"/></li>
                        <li>At balang araw, sabay-sabay nilang ma-enjoy ang bunga ng kanyang hard work <SpanEmoji value="🌟"/></li>
                    </ul>
                    <p style={{textIndent: '0'}}>The thought of his wife and child carrying that financial burden—<b>ang bigat isipin</b>.</p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4ad.png" text='His Greatest “What If?”' />
                    <div>
                        <p>Pero sa likod ng lahat ng ito, lagi siyang kinakatok ng tanong:</p>
                        <ul className="italic">
                            <li><SpanEmoji value="👉"/> “Paano kung maaksidente ako habang nasa biyahe?”</li>
                            <li><SpanEmoji value="👉"/> “Paano kung isang hospital bill lang, maubos lahat ng ipon namin?”</li>
                            <li><SpanEmoji value="👉"/> “What if I can’t work anymore?”</li>
                        </ul>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>That’s when Marco realized:</p>
                        <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="💔"/> Their dreams were fragile.</p>
                        <p style={{textIndent: '0'}}>Kung bigla siyang mawala, baka hindi lang siya ang mawalan ang pamilya niya… baka pati utang ang maiwan sa kanila.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="The Turning Point"/>
                    <div>
                        <p>Doon siya nag-decide na kumuha ng <b>Life Insurance Plan</b> with:</p>
                        <ul>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Accident Coverage</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Critical Illness Benefits</li>
                            <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Income Protection</li>
                        </ul>
                    </div>
                    <p>Ngayon, kahit anong mangyari, alam niyang hindi utang ang mamanahin ng pamilya niya—kundi <b>support para tuloy ang pangarap nila</b>. 🙏</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f31f.png" text="A Father’s True Love"/>
                    <div>
                        <p>For Marco, true love isn’t just providing <b>while he’s here</b>.</p>
                        <p>It’s making sure <b>they’re protected, even if life takes a sudden turn.</b> <SpanEmoji value="💖"/></p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
                    <div>
                        <p style={{textIndent: '0'}}>You’ve worked hard to build dreams for your family.</p>
                        <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> Pero tanong: <b>nakasiguro ka ba na hindi sila mababasag ng isang unexpected event?</b></p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Let’s make sure your love goes beyond today.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b>—at sama-sama nating siguraduhin na secured ang kinabukasan ng pamilya mo. 🚀</p>
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

export default ASingleAccidentCanTurnYourFamilysDreamsIntoDebt;
