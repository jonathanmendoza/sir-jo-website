"use client";

import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { useRelatableStoriesItem } from "@/contexts";

function YouveBuiltYourBusinessToProvideForThem() {
    const articleItem = useRelatableStoriesItem();

    return (
        <div className="flex flex-col items-stretch gap-4">
            <div>
                <p>Si <b>Maria</b> ay nagpapatakbo ng isang logistics company sa Manila. Every delivery completed, every truck on the road—hindi lang ito tungkol sa business growth.</p>
                <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> Ito ang paraan niya para mapag-aral ang anak niya at masuportahan ang matatanda niyang magulang.</p>
            </div>
            <div>
                <p>Pero isang gabi, habang kausap niya ang accountant, bigla siyang natigilan:</p>
                <ul className="italic">
                    <li><SpanEmoji value="👉"/> “What if something happens to me?”</li>
                    <li><SpanEmoji value="👉"/> “Sino magpapatakbo ng kumpanya?”</li>
                    <li><SpanEmoji value="👉"/> “Sino ang mag-aalaga sa pamilya ko?”</li>
                </ul>
            </div>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f494.png" text="The Fear Behind the Hustle"/>
            <div>
                <p style={{textIndent: '0'}}>Maria realized: kahit gaano kaganda ang takbo ng logistics business niya,</p>
                <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> kung siya mismo ang mawala, her family’s future could suddenly stop.</p>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="The Turning Point"/>
            <div>
                <p>That’s when she chose to get <b>life insurance with a business continuity plan</b>.</p>
                <p style={{textIndent: '0'}}><SpanEmoji value="&#x2705;&#xFE0F;"/> Now, she continues to grow her company with peace of mind — knowing na kahit anong mangyari, her daughter and parents will remain financially secured.</p>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f680.png" text="Moving Goods Today, Securing Tomorrow"/>
            <ul className="italic">
                <li><SpanEmoji value="✨"/> Maria’s logistics business moves goods today.</li>
                <li><SpanEmoji value="✨"/> Her life insurance secures her family’s tomorrow.</li>
            </ul>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
            <div>
                <p style={{textIndent: '0'}}>Ikaw rin ba, tulad ni Maria, nagtatrabaho nang todo para sa pamilya?</p>
                <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> Pero may plan ka ba para protektahan sila kung may unexpected na mangyari sa’yo?</p>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Don’t leave your family’s future to chance.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> with me today—
so your hard work will always provide, no matter what.</p>
            </div>
            <FreeConsultationForm/>
            <hr/>

        </div>
    );
}

export default YouveBuiltYourBusinessToProvideForThem;
