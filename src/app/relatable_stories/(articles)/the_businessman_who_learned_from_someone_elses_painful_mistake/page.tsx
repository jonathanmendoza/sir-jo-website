"use client";

import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { useRelatableStoriesItem } from "@/contexts";

function TheBusinessmanWhoLearnedFromSomeoneElsesPainfulMistake() {
    const articleItem = useRelatableStoriesItem();
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p style={{textIndent: '0', textAlign: 'center'}} className="italic">A Story About Why Getting the <b>Right</b> Insurance Matters Just as Much as Getting One at All</p>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f468_200d_1f466_200d_1f466.png" text="A Hardworking Father With Big Dreams"/>
            <p>
                Si Marco, 42 yrs old, isang negosyanteng masipag at dedicated father to two young kids.
                Stable ang negosyo niya.
                Maganda ang kita.
            </p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Pero dahil sa dami ng responsibilities, lagi niyang iniisip:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">“Sapat ba ‘yung paghahanda ko para sa pamilya ko… kung bigla akong mawala?”</p>
                </div>
            </div>
            <p>Like most business owners, he wanted his wife <i>(not legally married)</i> and children to be financially secure no matter what happens.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4b3.png" text="His Friend’s ‘32 Insurance Policies’ Story — And the Hidden Problem"/>
            <p>One day, Marco met up with his long-time business friend, si Adrian.</p>
            <p>Adrian was known for being close to his bank — lagi siyang inaalok ng loans, VIP treatment, at exclusive business perks.</p>
            <p>At dahil gusto niyang ma-maintain ang “good relationship” with the bank, he said yes to every insurance policy they offered.</p>
            <div className="border-l-4 border-l-gray-500 pl-5">
                <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">He ended up buying 32 insurance policies.</p>
            </div>
            <div>
                <p style={{textIndent: '0'}}>But here’s the twist:</p>
                <ul>
                    <li><SpanEmoji value="✔"/> Only <b>4</b> of those policies insured <i>him as the insured person</i></li>
                    <li><SpanEmoji value="✔"/> The remaining <b>28</b> were insurance plans under his kids’ names</li>
                    <li><SpanEmoji value="✔"/> <b>No trustee</b> assigned</li>
                    <li><SpanEmoji value="✔"/> <b>Wife was NOT the beneficiary</b></li>
                    <li><SpanEmoji value="✔"/> He had <b>no full review or guidance</b> on how everything was structured</li>
                </ul>
            </div>

            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Adrian assumed:</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>“Basta marami akong policies, safe na pamilya ko.”</p>
            </div>

            <p style={{textIndent: '0', textAlign: 'left'}}>Pero hindi iyon ang nangyari.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f54a.png" text="The Unexpected Happened"/>
            <p style={{textIndent: '0', textAlign: 'left'}}>Three years later, Adrian suddenly passed away.</p>
            <p style={{textIndent: '0', textAlign: 'left'}}>His grieving wife immediately went to the bank to file for claims.</p>
            <p style={{textIndent: '0', textAlign: 'left'}}>And that’s where the nightmare began.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f494.png" text="The Painful Truth She Discovered"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>But here’s the problem:</p>
                <ul>
                    <li className="font-bold"><SpanEmoji value="&#x274C;&#xFE0F;"/> She was NOT listed as beneficiary</li>
                    <li className="font-bold"><SpanEmoji value="&#x274C;&#xFE0F;"/> Their children were still minors</li>
                    <li className="font-bold"><SpanEmoji value="&#x274C;&#xFE0F;"/> No appointed trustee</li>
                    <li className="font-bold"><SpanEmoji value="&#x274C;&#xFE0F;"/> Policies were underinsured for the father</li>
                    <li className="font-bold"><SpanEmoji value="&#x274C;&#xFE0F;"/> No financial advisor handled the structuring</li>
                </ul>
            </div>
            <p>Even though the policies were beyond the contestability period, she couldn't access her own family's money.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>To claim the ₱16M, she had to:</p>
                <ul className="list-disc list-inside">
                    <li>Hire a lawyer</li>
                    <li>File legal guardianship</li>
                    <li>Appoint herself as trustee</li>
                    <li>Go through 1 year of paperwork</li>
                    <li>Spend <b>₱1,000,000+</b> on legal processes</li>
                </ul>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>What should have been an <b>instant pamana</b> became:</p>
                <ul>
                    <li><SpanEmoji value="👉"/> stress</li>
                    <li><SpanEmoji value="👉"/> delay</li>
                    <li><SpanEmoji value="👉"/> legal headache</li>
                    <li><SpanEmoji value="👉"/> and huge financial burden</li>
                </ul>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>All because:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">“Hindi properly naka-structure ang insurance.”</p>
                </div>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f393.png" text="The Only Good News"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>The 28 policies under the kids?</p>
                <ul>
                    <li><SpanEmoji value="✔"/> Permanently waived ang premiums</li>
                    <li><SpanEmoji value="✔"/> Tuloy ang fund building for the children's future</li>
                    <li><SpanEmoji value="✔"/> Education funds were secured</li>
                    <li><SpanEmoji value="✔"/> The insurance company continues as the payer</li>
                </ul>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}}>But this didn’t erase the unnecessary suffering of the wife.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>It was a disaster that could have been avoided</p>
                <p style={{textIndent: '0', textAlign: 'left'}} className="italic">— if only someone guided him properly.</p>
            </div>


            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f9e0.png" text="Marco Realized Something Important"/>
            <p style={{textIndent: '0', textAlign: 'left'}}>Listening to the story, Marco felt a chill.</p>
            <ul>
                <li>Hindi dahil sa 32 policies.</li>
                <li>Hindi dahil sa ₱16M.</li>
                <li>Hindi dahil sa legal fees.</li>
            </ul>
            <p style={{textIndent: '0', textAlign: 'left'}}>But because Adrian’s wife suffered <i>at the most vulnerable moment of her life</i> — when she should have been receiving support, not bills.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Marco thought to himself:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">“Ayokong maranasan ‘yan ng pamilya ko.”</p>
                </div>
            </div>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4de.png" text="Why He Chose to Ask for Financial Guidance First"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Before buying anything, Marco finally decided:</p>
                <ul>
                    <li className="italic"><SpanEmoji value="👉"/> “I need to talk to a real financial advisor. Hindi puwedeng bara-bara.”</li>
                    <li className="italic"><SpanEmoji value="👉"/> “Hindi puwedeng magpadala sa sales pitch without understanding.”</li>
                    <li className="italic"><SpanEmoji value="👉"/> “Hindi puwedeng magkamali sa beneficiaries and trustees.”</li>
                    <li className="italic"><SpanEmoji value="👉"/> “Hindi puwedeng mali ang structure ng protection for my kids and my wife.”</li>
                </ul>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}}>He booked a <b>free consultation</b> — not to buy immediately, but to be <b>informed</b>.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>And for the first time, someone explained to him:</p>
                <ul>
                    <li><SpanEmoji value="✔"/> how to assign beneficiaries correctly</li>
                    <li><SpanEmoji value="✔"/> why a trustee is important when children are minors</li>
                    <li><SpanEmoji value="✔"/> how wealth transfer truly works</li>
                    <li><SpanEmoji value="✔"/> how to structure multiple policies without causing future problems</li>
                    <li><SpanEmoji value="✔"/> how insurance becomes a smooth inheritance tool, not a legal battle</li>
                </ul>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}}>Marco walked away with clarity — and peace.</p>
            <p style={{textIndent: '0', textAlign: 'left'}}>Because this time, he was making decisions with <i>proper guidance</i>, not guesswork.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4a1.png" text="The Moral of the Story"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Insurance is not just about buying a plan.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>It’s about <b>designing your family's safety net properly.</b></p>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>The wrong setup can:</p>
                <ul>
                    <li><SpanEmoji value="&#x274C;&#xFE0F;"/> Delay inheritance</li>
                    <li><SpanEmoji value="&#x274C;&#xFE0F;"/> Cause legal problems</li>
                    <li><SpanEmoji value="&#x274C;&#xFE0F;"/> Create family conflict</li>
                    <li><SpanEmoji value="&#x274C;&#xFE0F;"/> Cost hundreds of thousands</li>
                    <li><SpanEmoji value="&#x274C;&#xFE0F;"/> Turn protection into stress</li>
                </ul>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>A well-structured plan can:</p>
                <ul>
                    <li><SpanEmoji value="✔"/> Protect your spouse</li>
                    <li><SpanEmoji value="✔"/> Secure your children</li>
                    <li><SpanEmoji value="✔"/> Guarantee smooth wealth transfer</li>
                    <li><SpanEmoji value="✔"/> Avoid legal battles</li>
                    <li><SpanEmoji value="✔"/> Give peace of mind</li>
                </ul>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">Your insurance should be a blessing — never a burden.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4e9.png" text="If You’re a Parent, Business Owner, or Breadwinner…"/>
            <p style={{textIndent: '0', textAlign: 'left'}}>Don’t wait for mistakes to teach you the lesson.</p>
            <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">Let’s build a solid, properly structured insurance plan for your family — one that truly works the way you intend it to.</p>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}><b><SpanEmoji value="&#x1F4DD;"/> Sign-up for a Free Consultation</b></p>
                <p style={{textIndent: '0', textAlign: 'left'}}>Let’s make sure your legacy is protected, clearly assigned, and stress-free for your family.</p>
            </div>
            <FreeConsultationForm/>
            <hr/>

        </div>
    );
}

export default TheBusinessmanWhoLearnedFromSomeoneElsesPainfulMistake;
