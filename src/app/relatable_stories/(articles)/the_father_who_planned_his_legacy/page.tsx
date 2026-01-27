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
const ARTICLE_ID = "b440f30e";
const articleIndex = ITEMS.findIndex(x => x.id === ARTICLE_ID);
const articleItem = ITEMS[articleIndex];

function TheFatherWhoPlannedHisLegacy() {
    return (
        <>
            <ContentComponent headline={<ArticleTitleComponent emojiImg={articleItem.emojiImg} text={articleItem.title}/>}>
                <div className="flex flex-col items-stretch gap-4">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="italic">(A story about love, fairness, and smart wealth transfer)</p>
                    <img src={articleItem.image}></img>
                    <p>Meet <b>Mang Ramon</b>, a successful businessman in his 50s. He worked hard all his life — from selling in palengke, to running his own construction supply business.</p>
                    <p>After 30 years, he built a good life for his family. He had <b>three houses, two vehicles, a few investments,</b> and <b>five children</b> — four from his marriage, and one from a previous relationship.</p>
                    <p style={{textIndent: '0'}}>He loved them all equally. ❤️</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>But deep inside, he worried…</p>
                        <p>“What if pag nawala na ako, mag-away pa sila dahil sa mana?”</p>
                        <p>He’s seen it happen to many families — siblings turning against each other, properties frozen because no one could agree, and wealth slowly wasted because of conflict and lack of planning.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f9fe.png" text="The Father’s Smart Move" />
                    <p>Instead of just writing a will, <b>Mang Ramon talked to his financial wealth planner</b> and learned something life-changing — that <b>life insurance can be used as a wealth transfer tool</b>.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>With it, he can decide:</p>
                        <ul>
                            <li className="italic"><SpanEmoji value="&#x2705;&#xFE0F;"/> Sino ang makakatanggap,</li>
                            <li className="italic"><SpanEmoji value="&#x2705;&#xFE0F;"/> Magkano ang makukuha ng bawat isa,</li>
                            <li className="italic"><SpanEmoji value="&#x2705;&#xFE0F;"/> At paano nila ito matatanggap.</li>
                        </ul>
                    </div>
                    <p>So he got an insurance policy — not just for protection, but to make sure <b>his wealth goes exactly where his heart wants it to go</b>.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>He also made a wise decision:</p>
                        <p>Since one of his five children was an <i>illegitimate child</i>, he wanted to make sure that this child <b>still receives his fair share</b> — without legal complications or arguments from the other siblings.</p>
                    </div>
                    <p>Through his insurance, he named all his children as beneficiaries — including the one outside of marriage — and <b>assigned a trustee</b> to manage the money on behalf of all of them.</p>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f9fe.png" text="The Father’s Final Wish" />
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>He also told his wealth planner:</p>
                        <div className="border-l-4 border-l-gray-500 pl-5">
                            <p style={{textIndent: '0'}}>“Ayokong bigyan sila ng isang bagsak na pera. Gusto ko, buwan-buwan nilang maramdaman na andito pa rin ako.”</p>
                        </div>
                        <p style={{textIndent: '0'}}>So, instead of giving them a lump sum,</p>
                        <p style={{textIndent: '0'}}>he arranged the proceeds to be distributed as <b>monthly allowances</b> — just like how he used to provide for them when he was alive.</p>
                    </div>
                    <div>
                        <p style={{textIndent: '0'}}>The trustee’s job?</p>
                        <p style={{textIndent: '0'}}>To ensure that the money is used wisely — for education, livelihood, and family support.</p>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f54a.png" text="18 Years Later" />
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Mang Ramon passed away peacefully.</p>
                        <p>His children grieved, but they were not burdened by paperwork, taxes, or family conflict.</p>
                    </div>
                    <p>Because of his plan, <b>there was no fighting, no “away sa mana.” </b>Each child knew their father had already made the decision — and they respected it.</p>
                    <p>Now, <b>18 years after his passing</b>, his children still receive their monthly allowance — money that keeps coming, like their father’s love that never stopped giving. 💛</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}></p>
                        <div className="border-l-4 border-l-gray-500 pl-5">
                            <p style={{textIndent: '0'}}>“Si Papa, parang andito pa rin. Kahit wala na siya, iniisip pa rin kami.”</p>
                        </div>
                    </div>

                    <hr/>
                    <HeadlineComponent emojiImg="emoji_u1f331.png" text="The Legacy of Mang Ramon" />
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}>Mang Ramon’s story isn’t just about money.</p>
                        <p>It’s about <b>love expressed through foresight</b> — the kind that goes beyond the grave, ensuring peace, fairness, and security for the family he cherished most.</p>
                    </div>
                    <p>If you’re a parent who wants to make sure your wealth goes to the right people, and your family stays united even when you’re no longer around — start planning your legacy today.</p>
                    <div>
                        <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a FREE consultation</b></p>
                        <p>Let’s talk about how you can create your own <i>“Mang Ramon Plan”</i> — a legacy that gives, protects, and lasts for generations.</p>
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

export default TheFatherWhoPlannedHisLegacy;
