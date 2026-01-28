import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { ArticleItem } from "@/types";
import ArticleOfferFreeConsultationComponent from "@/components/ArticleOfferFreeConsultationComponent";

function WhoPaysTheBillsIfYouCant({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Anna is a 32-year-old marketing manager living in Manila. Independent, hardworking, and proud of it. Every month, siya ang nagbabayad ng condo rent, utilities, groceries, at kahit kaunting suporta para sa parents niya. She enjoys her freedom—travel, dining out, rewarding herself after long weeks of work.</p>
            <img src={articleItem.image}></img>
            <div>
                <p style={{textIndent: '0'}}>Pero deep down, she knows the truth:</p>
                <p style={{textIndent: '0'}} className="italic">“Everything I have, everything I enjoy… depends on my income.”</p>
            </div>
            <p>One day, her officemate was diagnosed with breast cancer. She had to stop working for treatment, and Anna saw firsthand how fast the bills piled up—hospital expenses, medicines, and even daily living costs when income suddenly stopped.</p>
            <div>
                <p style={{textIndent: '0'}}>That night, she couldn’t help but think:</p>
                <p style={{textIndent: '0'}} className="italic">“If it happened to me… who would pay my bills? My rent? My daily needs?”</p>
            </div>
            <p>Anna didn’t want to rely on her family or drain her savings. So she made a smart move—she got a <b>life insurance plan with critical illness and income protection benefits</b>.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts" />
            <p>Your lifestyle, dreams, and independence all depend on your income. Protect it. Don’t wait for a crisis before realizing how fragile financial security can be.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step" />
            <div>
                <p style={{textIndent: '0'}}>Take control of your future today.</p>
                <p style={{textIndent: '0'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> and let’s secure your income together.</p>
            </div>
            <ArticleOfferFreeConsultationComponent/>
            <hr/>

        </div>
    );
}

export default WhoPaysTheBillsIfYouCant;
