import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";
import { ArticleItem } from "@/types";

function WhyHavingPhilhealthIsntEnoughYouStillNeedCriticalIllnessInsurance({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Marami sa atin ang kampante kasi “May PhilHealth naman ako.” Pero alam mo ba na <b>hindi lahat ng gastos sa ospital, sakop ni PhilHealth?</b></p>
            <p style={{ textIndent: '0' }}>Let me share a real story.</p>
            <img src={articleItem.image}></img>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f9fe.png" text="Totoong Kwento: “Akala namin covered na lahat…”" />
            <p>Last May 2024, isang asawa ang naoperahan dahil sa ovarian cyst. Routine procedure daw — <i>ovarian cystectomy</i> — pero hindi biro ang bill.</p>
            <ul>
                <li><b>Total hospital bill</b>: ₱170,613.20</li>
                <li><b>PhilHealth coverage</b>: ₱30,290.00 lang</li>
            </ul>
            <ul>
                <li><SpanEmoji value="&#x2705;&#xFE0F;" /> ₱13,910 para sa room at gamot</li>
                <li><SpanEmoji value="&#x2705;&#xFE0F;" /> ₱16,380 para sa doctor’s fee</li>
                <li><SpanEmoji value="&#x274C;&#xFE0F;" /> The rest? Kailangan nilang bayaran mula sa sariling bulsa.</li>
            </ul>
            <p>Imagine the stress - hindi lang dahilan sa operation, kundi pati sa bayarin</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4a1.png">
                <span>The Truth: PhilHealth is <i>helpful</i>, pero hindi <i>enough</i></span>
            </HeadlineComponent>
            <div>
                <p style={{ textIndent: '0' }}>PhilHealth uses a <b>Case Rate System.</b></p>
                <p style={{ textIndent: '0' }}>Ibig sabihin, bawat sakit o procedure may fixed na halaga lang na sakop.</p>
                <p style={{ textIndent: '0' }}>For example:</p>
            </div>
            <table className="w-full text-xs">
                <thead>
                    <tr>
                        <th>Illness / Procedure</th>
                        <th>PhilHealth Coverage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Pneumonia (moderate)</td>
                        <td>₱29,250</td>
                    </tr>
                    <tr>
                        <td>Dengue</td>
                        <td>₱10,000</td>
                    </tr>
                    <tr>
                        <td>Cesarean Section</td>
                        <td>₱37,050</td>
                    </tr>
                    <tr>
                        <td>Gallbladder Operation (Cholecystectomy)</td>
                        <td>₱60,450</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p style={{textIndent: '0'}} className="italic text-xs">*above mentioned are just examples (It depends on the case rate) </p>
                <p style={{textIndent: '0', textAlign: 'left'}} className="italic text-xs">You can check here for the actual case rate: <a target="_blank" href="https://www.philhealth.gov.ph/services/acr/">https://www.philhealth.gov.ph/services/acr/</a></p>
            </div>
            <p>So kung ang hospital bill mo ay ₱100,000, pero ₱15,000 lang ang case rate — ₱85,000 pa rin ang lalabas sa’yo.</p>
            <p>PhilHealth isn’t a “swipe card” na automatic fully covered. It’s only a <i>partial aid</i>. Kapag hindi mo alam paano siya gumagana, madali kang ma-shock sa hospital bill.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u26a0.png" text="Hindi rin automatic ang coverage" />
            <p style={{ textIndent: '0' }}>Maraming akala, basta may PhilHealth number, covered na agad.</p>
            <div>
                <p style={{ textIndent: '0' }}>Pero may mga requirements:</p>
                <ul className="list-disc list-inside">
                    <li>Dapat <b>may at least 9 months of contributions</b> in the last 12 months.</li>
                    <li>Kung <b>senior citizen</b>, kailangan pa ring magparehistro at mag-submit ng documents.</li>
                    <li>Kung <b>self-employed o OFW</b>, dapat tuloy-tuloy ang hulog.</li>
                </ul>
            </div>
            <p>Kung hindi updated ang contributions — <i>sorry, hindi ka eligible.</i></p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f9e9.png" text="Kaya mo kailangan ng Critical Illness Insurance" />
            <p>Ang <b>Critical Illness Insurance</b> ay nagbibigay ng <b>lump sum cash</b> kapag ikaw ay na-diagnose ng major illness tulad ng cancer, stroke, o heart attack.</p>
            <ul>
                <li className="italic"><SpanEmoji value="&#x2705;&#xFE0F;" /> Pambili ng gamot, treatment, o maintenance care</li>
                <li className="italic"><SpanEmoji value="&#x2705;&#xFE0F;" /> Pangbayad ng hospital bills na hindi sakop ng PhilHealth</li>
                <li className="italic"><SpanEmoji value="&#x2705;&#xFE0F;" /> Pang-support sa family mo habang di ka makapagtrabaho</li>
            </ul>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4ac.png" text="Real Talk" />
            <p>PhilHealth is a blessing — pero hindi siya magic. Hindi siya pangbuo, kundi <b>pampuno</b>.</p>
            <p>Ang totoong peace of mind ay kapag alam mong kahit anong mangyari, may <b>backup plan</b> ka.</p>
            <p style={{ textIndent: '0' }}>That’s where <b>Critical Illness Insurance</b> comes in.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Protect Your Future Today" />
            <div>
                <p style={{textIndent: '0'}}>Kung may PhilHealth ka na, good!</p>
                <p style={{textIndent: '0'}}>Pero kung gusto mong <i>secured</i> talaga,</p>
                <p style={{textIndent: '0'}}>add <b>Critical Illness Insurance</b> sa financial protection mo.</p>
            </div>
            <div>
                <p style={{textIndent: '0'}}>Because at the end of the day,</p>
                <p style={{textIndent: '0'}}>it’s not just about saving money —</p>
                <p style={{textIndent: '0'}}><b>it’s about protecting your life and your family’s peace of mind.</b></p>
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

export default WhyHavingPhilhealthIsntEnoughYouStillNeedCriticalIllnessInsurance;
