import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { ArticleItem } from "@/types";
import ArticleOfferFreeConsultationComponent from "@/components/ArticleOfferFreeConsultationComponent";

function ADadsGreatestFearIsntFailingAtWorkItsFailingToSecureHisChildrensFuture({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <div>
                <p style={{ textIndent: '0' }}>Every day, si <b>Carlo</b> nagsusumikap sa trabaho.</p>
                <ul>
                    <li><SpanEmoji value="📌"/> Overtime.</li>
                    <li><SpanEmoji value="📌"/> Puyat.</li>
                    <li><SpanEmoji value="📌"/> Minsan skip pa ang rest.</li>
                </ul>
            </div>
            <p>Lahat ng ito, ginagawa niya to make sure may <b>bahay, pagkain, at maayos na edukasyon</b> ang dalawang anak niya. 🏠🍲📚</p>
            <img src={articleItem.image}></img>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4ad.png" text="His Hidden Fear" />
            <div>
                <p>Pero kahit gano’n ka-dedicated si Carlo, minsan hindi niya maiwasan mag-isip:</p>
                <ul className="italic">
                    <li><SpanEmoji value="👉"/> “Paano kung bigla akong magkasakit o maaksidente?”</li>
                    <li><SpanEmoji value="👉"/> “Sino ang tutuloy mag-provide para sa pamilya ko?”</li>
                    <li><SpanEmoji value="👉"/> “Paano ang tuition, bills, at daily needs nila?”</li>
                </ul>
            </div>
            <p>The truth is… lahat ng pinaghirapan niya can vanish in a snap kung wala siyang <b>protection</b>. <SpanEmoji value="💔"/></p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u2728.png" text="The Turning Point" />
            <div>
                <p>Kaya nag-decide si Carlo to get a Life Insurance Plan with:</p>
                <ul>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Income Protection</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Critical Illness Coverage</li>
                    <li><SpanEmoji value="&#x2705;&#xFE0F;"/> Accident Benefits</li>
                </ul>
            </div>
            <p>Ngayon, kahit anong mangyari, he has peace of mind—
                knowing secured ang <b>future ng pamilya niya</b>. <SpanEmoji value="🙏"/></p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f31f.png" text="A True Provider" />
            <p><SpanEmoji value="👉"/> Ang totoong sukatan ng pagiging provider,
                hindi lang yung kaya mong magbigay <b>ngayon</b>—
                kundi yung kaya mong protektahan ang <b>bukas</b> para sa kanila. <SpanEmoji value="💖"/></p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u2728.png" text="Final Thoughts" />
            <p>Ikaw, gaya ni Carlo, nagsusumikap araw-araw para sa pamilya mo.
                Pero ang tanong: <b>may protection ka ba for life’s what-ifs?</b></p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step" />
            <div>
                <p style={{ textIndent: '0' }}>Don’t wait until it’s too late.</p>
                <p style={{ textIndent: '0' }}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a free consultation</b> with me today.
                    Let’s make sure na secured din ang future ng pamilya mo. 🚀</p>
            </div>
            <ArticleOfferFreeConsultationComponent/>
            <hr />

        </div>
    );
}

export default ADadsGreatestFearIsntFailingAtWorkItsFailingToSecureHisChildrensFuture;
