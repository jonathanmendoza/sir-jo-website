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
const ARTICLE_ID = "eabb8971";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function AHouseWithoutIncomeIsALiability() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p>Si <b>Mark</b>, nagtrabaho ng 10 years para makabili ng dream home niya para sa pamilya. Bawat sulok ng bahay, may kwento ng sakripisyo—late nights sa trabaho, missed vacations, endless overtime.</p>
                    <div>
                        <p style={{textIndent: '0'}}>Pero isang araw, napaisip siya ng malalim…</p>
                        <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="👉"/> “Paano kung biglang mawala ang income ko?”</p>
                    </div>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <h2 className="font-bold text-left">Kapag ang Dream Home Naging Liability</h2>
                    <p>Kapag wala na ang sweldo, ang bahay hindi na <b>asset</b>—nagiging <b>liability</b>.</p>
                    <ul>
                        <li><SpanEmoji value="&#x2714;&#xFE0F;"/> Tuloy-tuloy pa rin ang <b>monthly mortgage, kuryente, tubig, at maintenance</b> kahit wala ka nang kinikita.</li>
                        <li><SpanEmoji value="&#x2714;&#xFE0F;"/> Imbes na simbolo ng security, pwede itong maging <b>utang</b> na pasan ng pamilya.</li>
                    </ul>

                    <hr/>
                    <h2><b>Ang Kulang: Income Protection</b></h2>
                    <p>Dito narealize ni Mark na ang tunay na security ng bahay ay nasa <b>income na nagbabayad dito</b>.</p>
                    <div>
                    <p style={{textIndent: '0'}}>Kaya nagsimula siyang magplano at kumuha ng:</p>
                    <ul>
                        <li><SpanEmoji value="&#x2705;&#xFE0F;"/> <b>Life Insurance</b> – para kung may mangyari sa kanya, hindi mawawala ang bahay.</li>
                        <li><SpanEmoji value="&#x2705;&#xFE0F;"/> <b>Income Protection</b> – para may kapalit na income in case magkasakit o ma-disable.</li>
                    </ul>
                    </div>
                    <p style={{textIndent: '0'}}>Ngayon, kahit anong mangyari, mananatiling <b>tahanan</b> ang bahay niya—hindi pasanin.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Malaking achievement ang makabili ng bahay.</p>
                        <p style={{textIndent: '0', textAlign: 'justify'}}>Pero tandaan: ang tunay na proteksyon ay hindi lang nasa pader o bubong… kundi nasa <b>income na nagpapatuloy dito</b>.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                    <div>
                        <p>Huwag hayaang maging liability ang pinakaimportanteng investment ng pamilya mo.</p>
                        <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> with me today, at pag-usapan natin kung paano mo mapoprotektahan ang income at tahanan mo.</p>
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

export default AHouseWithoutIncomeIsALiability;
