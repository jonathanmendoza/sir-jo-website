import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { ArticleItem } from "@/types";
import ArticleOfferFreeConsultationComponent from "@/components/ArticleOfferFreeConsultationComponent";

function The6AssetClassesInAnInvestmentPortfolio({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p style={{ textIndent: '0' }}>Si <b>Carlo</b>, 36 years old, planner type siya.</p>
            <div>
                <p style={{ textIndent: '0' }}>Proud siya sa na-achieve niya through discipline at wise financial moves:</p>
                <ul>
                    <li><SpanEmoji value="💼" /> May emergency fund siya.</li>
                    <li><SpanEmoji value="📜" /> May bonds for stability.</li>
                    <li><SpanEmoji value="📈" /> May equities for growth.</li>
                    <li><SpanEmoji value="🏠" /> May maliit na condo investment.</li>
                    <li><SpanEmoji value="🥇" /> May gold for extra security.</li>
                </ul>
            </div>
            <p style={{ textIndent: '0' }}>Akala niya covered na siya sa lahat.</p>
            <img src={articleItem.image}></img>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4de.png" text="Then One Call Changed Everything" />
            <p>One night, nakatanggap siya ng tawag. His dad was rushed to the hospital—<b>critical illness, urgent treatment needed</b>.</p>
            <p>Carlo scrambled. Habang dumadami ang medical bills, napilitan siyang i-liquidate ang stocks niya… kahit bagsak ang market.</p>
            <p><SpanEmoji value="💔" /> Masakit—hindi lang dahil sa pera, pero dahil sa feeling na lahat ng pinaghirapan niyang plano at disiplina… biglang nawala sa isang emergency.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f6a8.png" text="The Realization" />
            <div>
                <p>Doon niya narealize ang isang mahalagang katotohanan:</p>
                <p style={{ textIndent: '0' }}><SpanEmoji value="👉" /> Hindi lang 5 ang asset classes (cash, commodity, bonds, equity, & property). Meron palang pang-6.</p>
            </div>
            <p style={{ textIndent: '0' }}><SpanEmoji value="&#x2705;&#xFE0F;" /> <b>Insurance</b>—ang tanging asset na hindi lang nag-grow, pero nagpo-protect din ng lahat ng pinaghirapan mo.</p>
            <p>Without it, you’ll always be forced to tear down what you built just to survive a crisis.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u2728.png" text="The Real Measure of Wealth" />
            <div>
                <p style={{ textIndent: '0' }}>Wealth isn’t just about <b>what you grow</b>.</p>
                <p style={{ textIndent: '0' }}>It’s also about <b>what you protect</b>.</p>
            </div>
            <p>Ngayon, si Carlo mas confident na—alam niya na kahit anong mangyari, hindi masisira lahat ng na-build niyang assets.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f449.png" text="Final Thoughts" />
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}>Kung ikaw rin ay nag-iinvest—stocks, condo, gold, kahit anong asset pa yan—tanungin mo sarili mo:</p>
                <p style={{ textIndent: '0', textAlign: 'left' }} className="italic"><SpanEmoji value="👉" /> “May protection ba ako sa biglaang emergencies?”</p>
            </div>
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}>Don’t let one crisis undo years of discipline and sacrifice.</p>
                <p style={{ textIndent: '0', textAlign: 'left' }}><SpanEmoji value="👉" /> Book a <b>free financial planning appointment</b> with me today, and let’s secure your <b>6th asset class</b>—insurance.</p>
            </div>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step" />
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}>Don’t let one crisis undo years of discipline and sacrifice.</p>
                <p style={{ textIndent: '0', textAlign: 'left' }}><b><SpanEmoji value="&#x1F4DD;" /> Sign-up for a free financial consultation</b> with me today, and let’s secure your <b>6th asset class</b>—insurance.</p>
            </div>
            <ArticleOfferFreeConsultationComponent/>
            <hr />

        </div>
    );
}

export default The6AssetClassesInAnInvestmentPortfolio;
