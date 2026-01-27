import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";
import { ArticleItem } from "@/types";

function WhyHavingAnHmoIsntEnoughYouStillNeedCriticalIllnessInsurance({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p style={{ textIndent: '0', textAlign: 'center' }} className="font-bold"><SpanEmoji value="💬" /> “Okay na ako, may HMO naman ako.”</p>
            <p>Madami ang nagsasabi nito — and it’s one of the most common misconceptions pagdating sa health protection.</p>
            <p>Yes, mahalaga ang HMO. Pero <b>iba ang role nito</b> kumpara sa <i>Critical Illness Insurance.</i></p>
            <img src={articleItem.image}></img>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f3e5.png" text="Ang Totoong Saklaw ng HMO" />
            <p>Ang <b>HMO</b> ay maganda para sa <i>check-ups, laboratory tests, at mga simpleng confinement</i>. Pero pagdating sa <i>malalaking sakit</i> tulad ng cancer, heart attack, o stroke — <b>madalas kulang na kulang ito.</b></p>
            <p style={{ textIndent: '0' }}>Eto kung bakit:</p>
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}><b>1. <SpanEmoji value="💸" /> May limit ang coverage</b></p>
                <p>Kadalasan ₱100K–₱250K lang per year (minsan higher kung corporate plan). Pero alam mo bang ang cancer treatment pwedeng umabot ng <b>₱1M pataas</b>?</p>
            </div>
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}><b>2. <SpanEmoji value="🏨" /> Hospital bills lang ang sakop</b></p>
                <p>HMO covers you <i>habang nasa ospital ka</i>. Pero pag-uwi mo at di ka pa makabalik sa work, wala na itong tulong.</p>
            </div>
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}><b>3. <SpanEmoji value="💼" /> Walang income replacement</b></p>
                <p>Sino magbabayad ng bills, tuition, at pang-araw-araw na gastusin kung di ka makatrabaho?</p>
            </div>
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}><b>4. <SpanEmoji value="🏥" /> Limited sa partner hospitals</b></p>
                <p>Paano kung gusto mong magpagamot sa doktor o ospital na hindi accredited ng HMO mo?</p>
            </div>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4b0.png" text="Dito Papasok ang Critical Illness Insurance" />
            <p>Ang <b>Critical Illness Insurance</b> nagbibigay sa’yo ng <i>lump-sum cash benefit</i> once ma-diagnose ka ng covered illness (like cancer, stroke, heart attack, etc.).</p>
            <div>
                <p style={{ textIndent: '0', textAlign: 'left' }}>Ang kagandahan dito:</p>
                <ul>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> <b>Direkta sa’yo ang bayad</b>, hindi sa ospital.</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Pwede mong gamitin kahit saan mo gusto — panggamot, maintenance meds, o panggastos ng pamilya habang nagpapagaling ka.</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> May peace of mind ka kasi may <b>cash buffer</b> ka kahit temporarily di ka makatrabaho.</li>
                </ul>
            </div>

            <hr />
            <HeadlineComponent emojiImg="emoji_u2696.png" text="HMO + Critical Illness Insurance = Complete Protection" />
            <p style={{ textIndent: '0', textAlign: 'left' }}>Isipin mo:</p>
            <ul>
                <li><SpanEmoji value="🩺"/> <b>HMO</b> = pang-una sa mga regular check-up at minor illnesses.</li>
                <li><SpanEmoji value="💰"/> <b>Critical Illness Insurance</b> = pang-backup kapag malaki na ang laban.</li>
            </ul>
            <p style={{ textIndent: '0', textAlign: 'left' }}>Kung meron ka ng pareho, <i>kompleto ang proteksyon mo</i> — physically at financially.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u2764.png" text="Real Talk" />
            <p style={{textAlign: 'left'}}>Hindi natin alam kung kailan darating ang sakit. Pero pwede tayong maghanda.</p>
            <p style={{textIndent: '0', textAlign: 'left'}}>Ang goal: <i>Pag dumating man ‘yung araw na ‘yon, pera na lang ang problema — hindi buhay</i>.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Protect Your Future Today" />
            <div>
                <p style={{ textIndent: '0' }}>Kung may HMO ka na, good!</p>
                <p style={{ textIndent: '0' }}>Pero kung gusto mong <i>secured</i> talaga,</p>
                <p style={{ textIndent: '0' }}>add <b>Critical Illness Insurance</b> sa financial protection mo.</p>
            </div>
            <div>
                <p style={{ textIndent: '0' }}>Because at the end of the day,</p>
                <p style={{ textIndent: '0' }}>it’s not just about saving money —</p>
                <p style={{ textIndent: '0' }}><b>it’s about protecting your life and your family’s peace of mind.</b></p>
            </div>
            <p ><SpanEmoji value="📩" /> Sign-up for a free consultation today and let’s secure your health before life catches you off guard.</p>
            <Suspense>
                <FreeConsultationStateProvider>
                    <FreeConsultationForm/>
                </FreeConsultationStateProvider>
            </Suspense>
            <hr />

        </div>
    );
}

export default WhyHavingAnHmoIsntEnoughYouStillNeedCriticalIllnessInsurance;
