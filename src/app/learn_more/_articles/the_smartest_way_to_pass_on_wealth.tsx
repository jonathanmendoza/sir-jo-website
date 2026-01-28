import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { ArticleItem } from "@/types";
import ArticleOfferFreeConsultationComponent from "@/components/ArticleOfferFreeConsultationComponent";

function TheSmartestWayToPassOnWealth({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Let’s be real — us Filipinos don’t like talking about death or inheritance. But when that time comes (and it will), <b>money matters can easily break families apart</b>. <SpanEmoji value="😔"/></p>
            <ul>
                <li>“Kanino mapupunta ‘yung bahay?”</li>
                <li>“Bakit mas malaki ang nakuha ni ate?”</li>
                <li>“Hindi naman yan ang gusto ni papa!”</li>
            </ul>
            <p>Sounds familiar? These are the conversations na gusto nating <i>maiwasan</i>. That’s where <b>insurance as a wealth transfer tool</b> comes in. 🧡</p>
            <img src={articleItem.image}></img>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f9fe.png" text="The Problem: Estate Tax & Family Conflict" />
            <p>In the Philippines, when someone passes away, their assets automatically become part of what’s called an <b>“estate.”</b></p>
            <p>Before the heirs can claim it — whether it’s a house, car, savings, or business — they first need to pay the <b>6% estate tax</b> to the BIR.</p>
            <div>
                <p style={{textIndent: '0'}}>And here’s the catch:</p>
                <p>If they can’t afford to pay it upfront, they can’t transfer or sell the property. That’s why <b>so many properties end up “nakatiwangwang”</b> for years — because the family can’t pay the tax or can’t agree on the distribution.</p>
            </div>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4a1.png" text="The Solution: Life Insurance as a Wealth Transfer Tool" />
            <div>
                <p style={{textIndent: '0'}}>Insurance changes the story.</p>
                <p style={{textIndent: '0'}}>Instead of your family scrambling to divide assets or pay taxes, <b>you can plan it all ahead</b>.</p>
            </div>
            <p style={{textIndent: '0'}}>Here’s how:</p>
            <div>
                <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x2705;&#xFE0F;"/> You decide who your beneficiaries are.</b></p>
                <p style={{textIndent: '0'}}>— Pwede mong itakda kung sino makakatanggap (spouse, anak, parents, etc.)</p>
            </div>
            <div>
                <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x2705;&#xFE0F;"/> You control the share.</b></p>
                <p style={{textIndent: '0'}}>— Gusto mo ba equal? Or mas malaki ang mapunta sa anak na may special needs? You choose. No confusion. No away.</p>
            </div>
            <div>
                <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x2705;&#xFE0F;"/> Proceeds are tax-free.</b></p>
                <p style={{textIndent: '0'}}>— Unlike estate assets, <b>insurance payouts are exempted from the 6% estate tax</b> in the Philippines.</p>
                <p style={{textIndent: '0'}}>So kung ₱2 million ang coverage mo, ₱2 million din talaga ang matatanggap ng pamilya mo. <SpanEmoji value="💯"/></p>
            </div>
            <div>
                <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x2705;&#xFE0F;"/> Quick release of funds.</b></p>
                <p style={{textIndent: '0'}}>— Within weeks, not years.</p>
                <p style={{textIndent: '0'}}>No need to go through estate settlement or court processes.</p>
            </div>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4ac.png" text="Imagine this scenario" />
            <p>Let’s say you have ₱5 million worth of assets — a house, savings, and car. If you pass away, your heirs must pay ₱300,000 (6%) just to settle the estate.</p>

            <div>
                <p>But if you also have ₱2 million life insurance coverage:</p>
                <ul>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> The ₱2M will go directly to your beneficiaries — tax-free.</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> They can use it to pay estate tax, or divide it fairly based on your plan.</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> No fights. No delays. Just peace.</li>
                </ul>
            </div>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f468_200d_1f469_200d_1f467.png" text="The Real Value: Peace of Mind for the Ones You Love" />
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>At the end of the day, insurance isn’t just about dying —</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>It’s about <b>caring enough to make life easier for the people you’ll leave behind</b>.</p>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>You’re not just giving money — you’re giving <b>clarity, direction, and love</b>.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>You’re saving your family from the pain of confusion and conflict.</p>
            </div>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f331.png" text="Plan your legacy the smart way" />
            <p>If you want your hard-earned wealth to go to the right people — <i>the way you want it to</i>, then it’s time to start planning your legacy today.</p>
            <p>Let’s talk about how you can use insurance not just for protection, but for <b>peaceful, tax-free wealth transfer.</b></p>
            <ArticleOfferFreeConsultationComponent/>
            <hr />

        </div>
    );
}

export default TheSmartestWayToPassOnWealth;
