import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";
import { ArticleItem } from "@/types";

function FinancialPlanningSessionWithAHardworkingDad({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Kakatapos lang namin ng financial planning session with a hardworking dad <SpanEmoji value="🧡"/>. Sabi niya, isa sa biggest worries niya:</p>
            <p className="italic">“Yung mga working members ng family namin, pati si Mama, wala pang insurance. Kapag may nangyari sa kahit isa sa amin, malaking dagok sa finances namin.”</p>
            <p>Kaya siya nag-reach out—para makapagsimula ng family protection plan na pasok sa budget nila.</p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Step-by-Step na Protection" />
            <div>
                <p>After naminggan ko yung concerns niya, we designed a family bundle plan na may:</p>
                <ul>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Death benefit</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Sickness benefit</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Accident benefit</li>
                </ul>
            </div>

            <p>Sabi ko rin sa kanya, hindi naman kailangan perfect agad. Ang importante, <b>may simula</b>—kasi having something is always better than having nothing. Pwede naman i-level up later kapag mas ready na sila.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f31f.png" text="Peace of Mind para sa Buong Pamilya" />
            <p>Ngayon, mas kampante na siya knowing na meron na silang financial safety net. Hindi na sila totally vulnerable kung may mangyari unexpectedly.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4e9.png" text="Your Turn" />
            <p><SpanEmoji value="&#x1F4DD;"/> Kung relate ka sa story niya, <b>sign up for a free consultation</b>. Tara, gawa tayo ng plano na magbibigay ng peace of mind sa’yo at sa pamilya mo.</p>
            <Suspense>
                <FreeConsultationStateProvider>
                    <FreeConsultationForm/>
                </FreeConsultationStateProvider>
            </Suspense>
            <hr/>

        </div>
    );
}

export default FinancialPlanningSessionWithAHardworkingDad;
