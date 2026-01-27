import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";
import { ArticleItem } from "@/types";

function FinancialPlanningSessionWithAMompreneur({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p className="italic">Kwento ng isang Mompreneur na Condo Rental Owner</p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2764.png" text="Naging Believer Siya ng Insurance Dahil sa Asawa Niya" />
            <p style={{textIndent: '0', textAlign: 'left'}}>A few years ago, bigla na lang bumagsak ang mundo niya.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Her husband passed away due to <b>pancreatic cancer</b>.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>Walang early symptoms. Walang warning. Walang time para maghanda.</p>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Pero may isang bagay na <i>handa na pala:</i></p>
                <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">The life insurance he bought years ago.</p>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>The moment she received the <b>instant pamana na worth millions</b>, doon niya na-realize:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="italic">“Kung wala pala ‘yun… paano na kami ng mga anak ko?”</p>
                </div>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Yung perang iyon ang:</p>
                <ul className="list-disc list-inside">
                    <li>nagbayad sa pending hospital bills</li>
                    <li>nagpatuloy ng condo business nila</li>
                    <li>nag-secure ng tuition fees ng kids</li>
                    <li>nagbigay sa kanila ng financial breathing room habang nag-iipon ulit ng lakas</li>
                </ul>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}}>Doon pa lang, believer na siya.</p>
            <p style={{textIndent: '0', textAlign: 'left'}}>Pero ironically…</p>
            <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">Wala pa pala siyang insurance para sa sarili niya.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f469_200d_1f467_200d_1f466.png" text="Dalawa ang Anak, Parehong Minor — “Hindi ako pwedeng mawala.”" />
            <p style={{textIndent: '0', textAlign: 'left'}}>Ngayon, she’s a solo mompreneur and a provider.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Siya ang:</p>
                <ul className="list-disc list-inside">
                    <li>nagbabayad ng tuition</li>
                    <li>nagma-manage ng business</li>
                    <li>nagdadala ng groceries</li>
                    <li>nagbabayad ng bills</li>
                    <li>nag-aalaga sa kids</li>
                    <li>nag-iisip ng long-term future</li>
                </ul>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Kaya nung nag-usap kami sa free financial planning session, ito agad ang una niyang sinabi:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="italic">“Ayoko maranasan ng mga anak ko ang hirap na dinaanan namin noon. Ayoko rin maging burden kung magkasakit ako or something happens to me.”</p>
                </div>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}}>Very real. Very honest. Very motherly.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="Gusto Niyang Pangalagaan ang Sarili… Para sa Future ng Kids" />
            <p style={{textIndent: '0', textAlign: 'left'}}>Sa planning session namin, tinulungan ko siyang maintindihan:</p>
            <ul>
                <li><SpanEmoji value="✔"/> Ano ang <b>tamang life insurance coverage</b> para sa breadwinner</li>
                <li><SpanEmoji value="✔"/> Bakit essential magkaroon ng <b>critical illness protection</b> kahit may HMO</li>
                <li><SpanEmoji value="✔"/> Paano mag-plan para siguradong may <b>instant pamana</b> ang kids</li>
                <li><SpanEmoji value="✔"/> Ano ang best strategy para hindi sila maubusan ng pondo if she gets sick</li>
                <li><SpanEmoji value="✔"/> Bakit kailangan ng <b>trustee</b> dahil minor pa ang mga bata</li>
                <li><SpanEmoji value="✔"/> Paano mag-combine ng protection + investment para sa long-term</li>
            </ul>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Nung nakita niya lahat ng risks vs. protections, nag-sink in sa kanya:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="italic">“Kung si hubby naka-secure sa amin noon… dapat ako rin sa mga anak ko.”</p>
                </div>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f331.png" text="Ang Goal niya as Mompreneur?" />
            <ul>
                <li className="font-bold">Mapalaki ang condo business niya.</li>
                <li className="font-bold">Mapag-aral ang mga anak.</li>
                <li className="font-bold">At maprotektahan sila kahit anong mangyari.</li>
            </ul>
            <p style={{textIndent: '0', textAlign: 'left'}}>And that starts with securing <i>herself</i> first.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Hindi dahil selfish.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>Kundi dahil <b>responsible</b>.</p>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f3c1.png" text="Ang Realization Niya After the Session" />
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Sabi niya bago kami mag-end:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="italic">“Now I understand. Insurance isn’t an expense — it’s a responsibility. Kung nagawa ng asawa ko para sa amin… gagawin ko rin para sa mga anak ko.”</p>
                </div>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>And that’s exactly why I do what I do.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>Because stories like hers remind me that <b>financial planning is about love, not numbers.</b></p>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="If you’re a parent, breadwinner, or business owner… this might be your sign too." />
            <p>Just like her, you also deserve to protect your future — and your family’s future — the right way.</p>
            <p style={{textIndent: '0', textAlign: 'left'}}><SpanEmoji value="&#x1F4DD;"/> <b>Sign-up for a free financial planning session today.</b></p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>No pressure.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>No commitment.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>Just clarity and guidance.</p>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}}>Handa akong tumulong.</p>
            <Suspense>
                <FreeConsultationStateProvider>
                    <FreeConsultationForm/>
                </FreeConsultationStateProvider>
            </Suspense>
            <hr/>

        </div>
    );
}

export default FinancialPlanningSessionWithAMompreneur;
