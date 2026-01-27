import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";
import { ArticleItem } from "@/types";

function FinancialPlanningSessionWithAWorkingMomOf3({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Kakatapos lang ng financial wealth planning session with a hardworking <b>Working Mom of 3</b>.</p>
            <p>Dahil sa trabaho niya sa <b>insurance claims abroad</b>, nakita niya mismo kung gaano kalaki yung natatanggap ng mga tao kumpara sa total na binayad nila.</p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f50e.png" text="Naghanap ng Sagot" />
            <div>
                <p>Dahil dito, na-motivate siyang mag-research on her own at maghanap ng financial advisor sa Facebook.</p>
                <p style={{textIndent: '0'}}><SpanEmoji value="👉"/> Doon niya ako nakita — at ako lang din yung nag-reply sa inquiry niya. <SpanEmoji value="🙋‍♂️"/></p>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="First Protection Plan" />
            <div>
                <p>Kasama ko siya, we designed her <b>first Critical Illness Protection + Life Insurance Plan</b> <SpanEmoji value="💼"/></p>
                <ul>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Para may safety net yung family niya against life’s uncertainties</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Para secured ang future ng mga anak niya</li>
                </ul>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4e9.png" text="Your Turn" />
            <p><SpanEmoji value="&#x1F4DD;"/> <b>Sign up for a free consultation</b>. Let’s build a plan that gives you and your family peace of mind. <SpanEmoji value="🌟"/></p>
            <Suspense>
                <FreeConsultationStateProvider>
                    <FreeConsultationForm/>
                </FreeConsultationStateProvider>
            </Suspense>
            <hr/>

        </div>
    );
}

export default FinancialPlanningSessionWithAWorkingMomOf3;
