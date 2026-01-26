"use client";

import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { useLearnMoreItem } from "@/contexts";

function The4PillarsOfAStrongWealthProtection() {
    const articleItem = useLearnMoreItem();
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p style={{textIndent: '0'}} className="font-bold"><SpanEmoji value="💡"/> Building wealth is one thing… protecting it is another.</p>
            <p>Kahit gaano pa kalaki ang ipon o investments mo, kung walang tamang protection, puwedeng mawala lahat sa isang unexpected event. That’s why every strong financial plan needs <b>4 key pillars of Wealth Protection:</b></p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2705.png" text="Income Protection"/>
            <p>Ensures that your family continues to live comfortably even if something happens to your main source of income.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2705.png" text="Critical Illness Planning"/>
            <p>A single diagnosis can wipe out your savings. With proper planning, you’ll have financial support for treatment and recovery — without draining your family’s resources.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2705.png" text="Disability Income Protection"/>
            <p>If sickness or injury prevents you from working, this pillar secures your cash flow so you can still provide for your loved ones.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2705.png" text="Hospital & Medical Care"/>
            <p>Health emergencies are costly. With this pillar, you get coverage for hospitalization and medical bills, giving you peace of mind when you need it most.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
            <p>No matter how hard you work for your family, <b>one unexpected event can break everything you’ve built</b>. But with these 4 pillars, you can ensure that your wealth — and your family’s future — stays strong and protected.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
            <p><SpanEmoji value="&#x1F4DD;"/> If you don’t have all these pillars yet, I can help you start building them today.</p>
            <FreeConsultationForm/>
            <hr/>

        </div>
    );
}

export default The4PillarsOfAStrongWealthProtection;
