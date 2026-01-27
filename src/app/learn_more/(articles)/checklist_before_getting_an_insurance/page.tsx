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
const ARTICLE_ID = "4f856144";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function ChecklistBeforeGettingAnInsurance() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p>Insurance is one of the most important financial tools you can have — but before you get one, it’s crucial to prepare yourself. Think of it as building a strong foundation before putting up the walls of your house. Here’s a simple <b>checklist to guide you before getting insurance:</b></p>
                    <img src={articleItem.image}></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2705.png" text="1. Solid Basic Financial Foundation"/>
                    <p>Bago kumuha ng insurance, siguraduhin muna na kaya mong tustusan ang iyong <b>basic needs:</b></p>
                    <ul className="list-disc list-inside">
                        <li>Food</li>
                        <li>Shelter</li>
                        <li>Utilities</li>
                        <li>Transportation</li>
                    </ul>
                    <p>Kapag stable na ang iyong cash flow at hindi ka nahihirapan sa araw-araw, mas madali mong mababayaran ang iyong insurance premiums nang tuloy-tuloy.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2705.png" text="2. Has Extra Money / No Bad Debt"/>
                    <p>Insurance is not an expense, but a <b>long-term protection and investment.</b></p>
                    <p>Pero kung baon ka sa <b>bad debt</b> (credit card bills, high-interest loans), mahihirapan ka lang mag-commit.</p>
                    <p>Make sure may extra cash ka buwan-buwan para hindi ka maipit kapag may kailangan kang bayaran.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2705.png" text="3. Goals are Clear"/>
                    <p>Bawat insurance policy ay dapat naka-align sa iyong <b>personal financial goals</b>. Tanungin ang sarili:</p>
                    <ul className="list-disc list-inside">
                        <li>Gusto ko bang may <b>Income Protection</b> para sa pamilya ko kung may mangyari sa akin?</li>
                        <li>Kailangan ko ba ng <b>Critical Illness Benefit</b> para protektado laban sa malalaking gastusin?</li>
                        <li>Paano kung mawalan ako ng kakayahang magtrabaho — kailangan ko ba ng <b>Disability Income Protection?</b></li>
                        <li>Gusto ko bang mag-ipon para sa mga <b>Dream Builders</b> (bahay, negosyo, investments)?</li>
                        <li>May plano ba akong maghanda ng <b>Education Fund</b> para sa anak ko?</li>
                        <li>Naghahanda ba ako para sa <b>Retirement</b>?</li>
                        <li>O iniisip ko na rin ang <b>Estate Planning</b> para sa generational wealth transfer?</li>
                    </ul>
                    <p>Kapag malinaw ang goals, mas madali kang makakapili ng tamang insurance plan na babagay sa iyong sitwasyon.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
                    <p>Insurance is not just about paying premiums — it’s about <b>protecting your future, your family, and your dreams</b>. Pero bago ka pumasok, siguraduhin na handa ka sa tatlong bagay na ito: <b>financial foundation, extra cash flow, at malinaw na goals.</b></p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                    <p><SpanEmoji value="&#x1F4DD;"/> Kung gusto mong malaman kung alin sa mga insurance solutions ang bagay sa iyo, let’s talk. Together, we can design a plan that fits your needs today and prepares you for tomorrow.</p>
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

export default ChecklistBeforeGettingAnInsurance;
