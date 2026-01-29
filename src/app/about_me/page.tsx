import type { Metadata } from 'next';
import ContentComponent from "@/components/ContentComponent";
import ScrollToTop from "@/components/ScrollToTop";
import PagerButton from "@/components/PagerButton";
import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { CLIENT_SESSIONS_ITEMS, MY_FULL_NAME } from "@/constants";

function AboutMePage() {
    return (
        <div>
            <ScrollToTop/>
            <ContentComponent headline={<ArticleTitleComponent emojiImg="emoji_u1f464.png" text="About Me"/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f64b_200d_2642.png" text="Who is Sir Jo?" />
                    <p>Hi! I’m <b>{`${MY_FULL_NAME}`}</b>, a licensed Financial Wealth Planner based in Metro Manila with FWD Life Philippines.</p>
                    <img src="/about_me/who_is_sir_jo.png"></img>
                    <p>Before ko pasukin ang insurance industry in 2025, I spent <b>9 years as a software engineer</b>. Fun fact: I already owned <b>8 insurance policies</b> from different companies bago ako nag-decide na sumali sa industriya mismo.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f4a1.png" text="From Tech to Insurance: My Journey" />
                    <p>Noong 2021, 25 years old pa lang ako, I bought my <b>first personal insurance plan</b> — PRULink Elite 7 from Pru Life UK. Monthly premium: ₱12,500.</p>
                    <img src="/about_me/with_kristin_baconawa_of_pru_life_uk_v1.jpg"></img>
                    <p>Two months later, kumuha ulit ako ng policy para sa nanay ko (44 years old at that time): PRULink Elite 15, ₱6,500/month for 15 years. Secret ko itong ginawa kasi <b>hindi supportive ang family ko sa insurance</b> — may trauma sila sa CAP (College Assurance Plan).</p>
                    <p>Gusto ko rin sanang i-insure si Papa, pero at 52 years old, kailangan na ng medical exam, so hindi na natuloy.</p>
                    <p>Sa puntong ‘yon, I was already paying <b>₱19,000/month in premiums</b> kahit ₱42,000 lang ang sweldo ko (45.2% ng income!). Buti na lang I was working from home at nakatira pa sa parents kaya kinaya.</p>
                    <p>Pero ngayon, as a financial planner, <b>I don’t recommend</b> lumagpas sa 20% ng income for insurance. The best plan is always the one you can afford. Kaya lagi kong tinatanong ang monthly income ng mga clients before making proposals.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f622.png" text="Family Struggles: Why This Matters to Me" />
                    <p>Fast forward to September 2023 — my sister (22 at that time) was diagnosed with early-stage thyroid cancer. Buti na lang may doctor na tumulong sa kanya with free VIP room and discounts sa surgery. Pero para sa ibang gastos, we still had to raise funds from government officials.</p>
                    <img src="/about_me/481662361_556711034061503_1410570409739408917_n.jpg"></img>
                    <p>Then on April 21, 2024, na-ambulance si Papa to Chinese General Hospital. Diagnosis: multiple complications from untreated pneumonia. Sadly, <b>he passed away on April 24, 2024</b>, three days before my birthday.</p>
                    <img src="/about_me/481701997_563430656722874_7915516205838114475_n.jpg"></img>
                    <p>His company’s Group Life Insurance (Manulife) gave us <b>₱162,000</b>, enough para matuloy pag-aaral ng kapatid ko. Buti may Maxicare HMO din siya; PhilHealth didn’t cover anything because of their 96-hour rule sa sepsis.</p>
                    <p>Sa funeral, ginamit ni Mama yung sarili niyang St. Peter Life Plan para kay Papa. Hindi siya nakabili ng life insurance for herself, pero at least may plan siya para hindi kami mahirapan sa libing niya later on.</p>
                    <img src="/about_me/481666167_563752893357317_8900599118858720335_n.jpg"></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f494.png" text="A Wake-Up Call" />
                    <p>During Papa’s wake, very few people came. Yung mga dating kasama niya sa trabaho, dumaan lang saglit — tapos nakita pa ng kapatid ko na after lumabas, nag-party pa sila sa bar.</p>
                    <img src="/about_me/482073124_563750703357536_5111145609655399968_n.jpg"></img>
                    <p>Doon ko naisip: <b>“Ganyan din kaya mangyayari sa’kin pag ako naman?”</b></p>
                    <p>And then, habang nagluluksa pa kami, my uncle (mother’s side) suddenly passed away from heat stroke. My mom had to fly immediately to attend another funeral.</p>
                    <p>That week showed me just how harsh life can be. Kapag walang insurance, families are left not only with grief but also <b>financial burdens</b>.</p>
                    <img src="/about_me/481766460_563753196690620_8234397990561551375_n.jpg"></img>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f31f.png" text="My Mission Now" />
                    <p>Dahil sa mga nangyari, I became a <b>strong believer in insurance</b>. Kaya ako sumali sa industry — para matulungan ang mga pamilya maghanda sa uncertainties ng buhay.</p>
                    <img src="/about_me/photo_2025-10-20_09-28-42.jpg"></img>
                    <p>Ang hope ko: <b>by the time I leave this world, I’ve contributed positively to my community</b> — and that I won’t be alone at my own funeral.</p>
                    <hr/>

                </div>
            </ContentComponent>
            <div className="w-full flex flex-row justify-between py-8">
                <PagerButton textLabel="Previous" textSubtext={<>{CLIENT_SESSIONS_ITEMS[CLIENT_SESSIONS_ITEMS.length - 1].spanEmoji}{` ${CLIENT_SESSIONS_ITEMS[CLIENT_SESSIONS_ITEMS.length - 1].title}`}</>} to={`/client_sessions/${CLIENT_SESSIONS_ITEMS[CLIENT_SESSIONS_ITEMS.length - 1].id}`} />
                <div className="animate-gentlePulse"><PagerButton textLabel="Next" textSubtext={<><SpanEmoji value="📝"/> Sign-up for a Free Consultation</>} to="/free_consultation" /></div>
            </div>
        </div>
    );
}

export default AboutMePage;
