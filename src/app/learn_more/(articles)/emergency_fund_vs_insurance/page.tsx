"use client";

import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { useLearnMoreItem } from "@/contexts";

function EmergencyFundVSInsurance() {
    const articleItem = useLearnMoreItem();
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Kapag usapang pera at proteksyon, madalas nating marinig ang dalawang termino: <b>Emergency Fund</b> at <b>Insurance</b>. Pero pareho ba sila? At alin ba ang mas mahalaga?</p>
            <p>Ang sagot: <b>magkaiba sila, pero parehong kailangan.</b></p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2753.png" text="Ano ang Emergency Fund?"/>
            <p>Ang Emergency Fund ay perang nakatabi para sa mga short-term emergencies tulad ng:</p>
            <ul className="list-disc list-inside">
                <li>Biglang pagkakasakit o minor medical bills</li>
                <li>Pagkumpuni ng sasakyan</li>
                <li>Biglaang pagkawala ng trabaho</li>
            </ul>
            <ul>
                <li><SpanEmoji value="&#x2714;&#xFE0F;"/> Madaling ma-access</li>
                <li><SpanEmoji value="&#x2714;&#xFE0F;"/> Cash on hand</li>
                <li><SpanEmoji value="&#x274C;"/> Pero limitado lang ang halaga</li>
            </ul>
            <p>Ito ang magsasalba sa’yo sa mga agarang pangangailangan para hindi ka malubog sa utang.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2753.png" text="Ano naman ang Insurance?"/>
            <p>Ang <b>Insurance</b> ay proteksyon laban sa <b>malalaking panganib sa buhay</b> gaya ng:</p>
            <ul className="list-disc list-inside">
                <li>Critical illness</li>
                <li>Hospitalization</li>
                <li>Malalaking aksidente</li>
            </ul>
            <ul>
                <li><SpanEmoji value="&#x2714;&#xFE0F;"/> Malaking halaga agad, kahit maliit lang ang hulog mo</li>
                <li><SpanEmoji value="&#x2714;&#xFE0F;"/> Long-term protection</li>
                <li><SpanEmoji value="&#x274C;"/> Hindi mo agad makukuha kung hindi insured ang risk</li>
            </ul>
            <p>Insurance ang magbibigay sa’yo ng <b>pang-major protection</b> para hindi maubos ang ipon mo kapag dumating ang malalaking dagok.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2753.png" text="Bakit Kailangan Pareho?"/>
            <div>
                <p style={{textIndent: '0'}}>Isipin mo ito:</p>
                <ul className="list-disc list-inside">
                    <li>Kung may <b>Emergency Fund</b> ka, may panlaban ka sa maliliit na dagok.</li>
                    <li>Kung may <b>Insurance</b> ka, may proteksyon ka laban sa malalaking panganib na puwedeng magpabagsak ng iyong pinaghirapan.</li>
                </ul>
            </div>
            <p>Hindi mo kailangan mamili — <b>dapat may balanse ka ng pareho.</b></p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts"/>
            <p>Sa tamang kombinasyon ng <b>Emergency Fund</b> at <b>Insurance</b>, may peace of mind ka na anuman ang mangyari, may nakahanda kang panangga.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
            <p><SpanEmoji value="&#x1F4DD;"/> Kung gusto mong malaman kung ano ang tamang insurance plan na akma sa’yo at sa pamilya mo, <b>sign-up for a free consultation</b> today. Tutulungan kitang gumawa ng financial shield na bagay sa iyong goals at budget.</p>
            <FreeConsultationForm/>
            <hr/>

        </div>
    );
}

export default EmergencyFundVSInsurance;
