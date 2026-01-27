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
const ARTICLE_ID = "db947247";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function WithoutRiskManagementYourBusinessLoanCouldTurnIntoYourFamilysLiability() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p style={{textIndent: '0'}}>Si <b>Angela</b> ay may maliit na logistics company.</p>
                    <p>Ginawa niya ito with a <b>big bank loan</b>, hoping na ito ang magiging daan para sa mas maliwanag na future ng pamilya niya.</p>
                    <div>
                        <p style={{textIndent: '0'}}>Pero minsan, naiisip niya:</p>
                        <ul className="italic">
                            <li><SpanEmoji value="👉"/> “What if magkasakit ako or may mangyari sa akin?”</li>
                            <li><SpanEmoji value="👉"/> “Yung logistics business ko, baka maiwan lang as utang sa pamilya ko.”</li>
                        </ul>
                    </div>
                    <p style={{textIndent: '0'}}>The thought of her husband and child carrying that financial burden—<b>ang bigat isipin</b>.</p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f494.png" text="The Worry That Kept Her Up"/>
                    <div>
                        <p>Every time she looked at her family photo sa desk niya, bumabalik yung takot:</p>
                        <p style={{textIndent: '0'}}>“What if all this hard work becomes a debt instead of a blessing?”</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="The Decision"/>
                    <div>
                        <p style={{textIndent: '0'}}>One day, Angela decided:</p>
                        <p style={{textIndent: '0'}}><SpanEmoji value="&#x2705;&#xFE0F;"/> Kumuha siya ng <b>life insurance with loan protection</b>.</p>
                    </div>
                    <p>Now, she continues to grow her logistics business with <b>peace of mind</b>—knowing na kahit anong mangyari, secured ang future ng pamilya niya.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f680.png" text="Driving Forward with Security"/>
                    <ul className="italic">
                        <li><SpanEmoji value="✨"/> Today, she drives her business forward.</li>
                        <li><SpanEmoji value="✨"/> Tomorrow, she safeguards her family’s future.</li>
                    </ul>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
                    <div>
                        <p style={{textIndent: '0'}}>Kung ikaw rin ay may negosyo or loan na pinapatakbo para sa pamilya mo—</p>
                        <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> Meron ka bang plan B if something happens to you?</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Don’t let your hard work turn into a burden for your loved ones.</p>
                        <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> with me today, and let’s secure your family’s future—together.</p>
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

export default WithoutRiskManagementYourBusinessLoanCouldTurnIntoYourFamilysLiability;
