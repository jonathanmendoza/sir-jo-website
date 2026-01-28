import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { ArticleItem } from "@/types";
import ArticleOfferFreeConsultationComponent from "@/components/ArticleOfferFreeConsultationComponent";

function FinancialPlanningSessionWithAHardworkingGenZ({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Kakatapos lang namin ng financial planning session with a hardworking Gen Z. <SpanEmoji value="🌟"/> Shinare niya yung isa sa biggest worries niya:</p>
            <p className="italic">“Yung existing wealth protection plan ko, wala palang coverage for <b>critical illness</b>—eh yun yung tumatakbo sa family namin. Tapos wala pa akong company HMO.”</p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Critical Illness Protection Plan" />
            <div>
                <p>After naminggan ko yung concerns niya, we designed a <b>4x Critical Illness Protection Plan</b> na:</p>
                <ul>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Complements her existing life insurance (na binabayaran niya faithfully for 7 years with another company)</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Adds a strong health protection layer in case magkasakit siya</li>
                </ul>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f496.png" text="Peace of Mind, Secured" />
            <p>Ngayon, mas at peace na siya knowing na both her <b>health</b> and <b>finances</b> are better protected. <SpanEmoji value="🙌"/></p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4e9.png" text="Your Turn" />
            <p><SpanEmoji value="&#x1F4DD;"/> Kung relate ka sa story niya, <b>sign up for a free consultation</b>. Tara, gawa tayo ng plano na magbibigay ng peace of mind sa’yo at sa pamilya mo rin.</p>
            <ArticleOfferFreeConsultationComponent/>
            <hr/>

        </div>
    );
}

export default FinancialPlanningSessionWithAHardworkingGenZ;
