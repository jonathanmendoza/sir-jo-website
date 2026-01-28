import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { ArticleItem } from "@/types";
import ArticleOfferFreeConsultationComponent from "@/components/ArticleOfferFreeConsultationComponent";

function The3PiggyBanksYouMustHave({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Pagdating sa financial planning, hindi sapat na may isa ka lang ipon account. Para siguradong ready ka sa kahit anong sitwasyon, kailangan mong hatiin ang pera mo sa <b>tatlong piggy banks</b> — bawat isa may specific purpose para sa financial security mo.</p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4b0.png" text="Emergency Fund Piggy Bank"/>
            <p>Ito ang safety net mo para sa mga short-term emergencies tulad ng:</p>
            <ul className="list-disc list-inside">
                <li>Biglang mawalan ng trabaho</li>
                <li>Pagkumpuni ng sasakyan o bahay</li>
                <li>Unexpected bills</li>
            </ul>
            <p><SpanEmoji value="📌"/> <b>Rule of Thumb</b>: Mag-ipon ng <b>6–9 months’ worth ng monthly expenses</b> mo. Para kahit may mangyari, may cash ka agad na mahuhugot.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f3e5.png" text="Medical Expense Piggy Bank"/>
            <p>Ayaw man natin, pero totoo — kapag nagkasakit, mabilis maubos ang pera. Kaya kailangan ng <b>Medical Piggy Bank</b> para may pangtustos kapag may health issues at hindi ka makapagtrabaho.</p>
            <p><SpanEmoji value="📌"/> <b>Rule of Thumb</b>: Maghanda ng at least <b>5x ng annual income</b> mo for <b>critical illness protection</b>.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f331.png" text="Future Piggy Bank"/>
            <p>Ito naman ang para sa mga long-term goals mo tulad ng:</p>
            <ul className="list-disc list-inside">
                <li>Retirement</li>
                <li>Education fund ng mga anak</li>
                <li>Estate planning at legacy building</li>
            </ul>
            <p><SpanEmoji value="📌"/> <b>Rule of Thumb</b>:</p>
            <ul className="list-disc list-inside">
                <li><b>20% ng income</b> para sa retirement</li>
                <li><b>5% para sa education (kung may anak)</b></li>
                <li>Life insurance worth <b>10x ng annual income</b> mo para secure ang pamilya kung may unexpected na mangyari</li>
            </ul>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
            <p>Ang tanong… <b>meron ka na ba ng lahat ng 3 Piggy Banks na ‘to?</b></p>
            <p>Kung wala pa, don’t worry. Hindi kailangan sabay-sabay mong buuin. Pwede kang magsimula sa <b>Emergency Fund</b>, habang tutulungan kita i-maximize ang <b>Medical Fund</b> at <b>Future Fund</b> gamit ang tamang insurance at financial strategies.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
            <p style={{textIndent: '0'}}><SpanEmoji value="🔸"/> Let’s start building your 3 Piggy Banks today. Para ikaw at pamilya mo, fully protected sa ngayon at sa future.</p>
            <ArticleOfferFreeConsultationComponent/>
            <hr/>
        </div>
    );
}

export default The3PiggyBanksYouMustHave;
