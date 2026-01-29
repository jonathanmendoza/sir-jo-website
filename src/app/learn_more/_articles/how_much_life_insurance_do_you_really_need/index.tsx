import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { ArticleItem } from "@/types";
import { Suspense } from "react";
import LifeInsuranceCoverageNeedCalculator from "./life_insurance_coverage_need_calculator";

function HowMuchLifeInsuranceDoYouReallyNeedPage({articleItem}: {articleItem: ArticleItem}) {
    return (
        <div className="flex flex-col items-stretch gap-4">
            <p style={{textIndent: '0', textAlign: 'center'}}>Let’s Compute It — Based on <i>Your</i> Real Life Expenses</p>
            <HeadlineComponent emojiImg="emoji_u1f914.png" text="“May insurance naman ako… pero sapat ba talaga?”"/>
            <p style={{textIndent: '0'}}>Isa ito sa pinaka-common na tanong na naririnig ko.</p>
            <div>
                <p style={{textIndent: '0'}}>Maraming may insurance, pero <b>hindi sigurado kung enough ba</b> ang coverage nila kapag may nangyari sa kanila.</p>
                <p style={{textIndent: '0'}}>Hindi dahil kulang sila sa effort — kundi dahil <b>hindi nila alam paano kinocompute</b> ang tamang amount.</p>
            </div>
            <div>
                <p style={{textIndent: '0'}}>Life insurance is not about guessing.</p>
                <p style={{textIndent: '0'}}>It’s about <b>preparing based on your actual lifestyle.</b></p>
            </div>
            <img src={articleItem.image}></img>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4ca.png" text="Hindi Lang ‘Salary’ ang Basehan"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Most people think:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="italic">“Okay na siguro ‘to, malaki-laki naman.”</p>
                </div>
            </div>
            <div>
                <p style={{textIndent: '0'}}>Pero ang tanong:</p>
                <p style={{textIndent: '0'}} className="font-bold">Kaya ba nitong palitan ang buhay na binubuhay mo ngayon?</p>
            </div>
            <p>That’s why I created a <b>simple life insurance calculator</b> — para makita mo clearly kung magkano talaga ang kailangan mo, based on your <b>monthly expenses</b>, tulad ng:</p>
            <ul className="list-disc list-inside">
                <li><SpanEmoji value="🏠"/> <b>Housing</b> (rent, mortgage, utilities)</li>
                <li><SpanEmoji value="🚗"/> <b>Transportation</b> (gas, commute, car payments)</li>
                <li><SpanEmoji value="✈️"/> <b>Travel</b></li>
                <li><SpanEmoji value="📆"/> <b>Regular commitments</b> (tuition, allowances, loans)</li>
                <li><SpanEmoji value="🍽️"/> <b>Food</b></li>
                <li><SpanEmoji value="🏥"/> <b>Health care</b></li>
                <li><SpanEmoji value="🎉"/> <b>Recreation / Other expenses</b></li>
            </ul>
            <p>Ito ang mga gastos na <b>hindi titigil</b> kahit may mangyari sa’yo — at ito rin ang kailangang saluhin ng life insurance mo.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f4ca.png" text="Why I Ask for Your Email"/>
            <div>
            <p style={{textIndent: '0'}}>After you input your monthly expenses,</p>
            <p style={{textIndent: '0'}} className="font-bold"><SpanEmoji value="📨"/> After you input your monthly expenses,</p>
            </div>
            <p style={{textIndent: '0'}}>Why?</p>
            <div>
            <p style={{textIndent: '0'}}>Because this is <b>not just a number.</b></p>
            <p style={{textIndent: '0'}}>It’s a reference you can:</p>
            <ul className="list-disc list-inside">
                <li>Revisit anytime</li>
                <li>Compare with your current insurance</li>
                <li>Use as a guide when planning with a financial advisor</li>
            </ul>
            </div>
            <div>
                <p style={{textIndent: '0'}}>No pressure.</p>
                <p style={{textIndent: '0'}}>No commitment</p>
                <p style={{textIndent: '0'}}>Just <b>clarity</b>.</p>
            </div>


            <hr/>
            <HeadlineComponent emojiImg="emoji_u1f6e1.png" text="This Is Not About Selling — It’s About Awareness"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>This free calculation is for people who want to answer one important question:</p>
                <div className="border-l-4 border-l-gray-500 pl-5">
                    <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold">“If something happens to me today… can my family maintain their current life?”</p>
                </div>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>If the answer is <i>yes</i> — good job.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>If the answer is <i>hindi sigurado</i> — at least now, <b>alam mo na.</b></p>
            </div>
            <p style={{textIndent: '0', textAlign: 'left'}}>Awareness is the first step to protection.</p>

            <hr/>
            <HeadlineComponent emojiImg="emoji_u2728.png" text="Take the First Step Today"/>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>You don’t need to decide anything today.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>You don’t need to buy anything today.</p>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}} className=" font-bold"><SpanEmoji value="👉"/> Just enter your monthly expenses and your email address.</p>
                <p style={{textIndent: '0', textAlign: 'left'}}>Let the numbers speak for themselves.</p>
            </div>
            <div>
                <p style={{textIndent: '0', textAlign: 'left'}}>Because life insurance should not be based on guesswork —</p>
                <p style={{textIndent: '0', textAlign: 'left'}} className=" font-bold">it should be based on your real life.</p>
            </div>
            <Suspense fallback={<></>}>
                <LifeInsuranceCoverageNeedCalculator/>
            </Suspense>
            <hr/>
        </div>
    );
}

export default HowMuchLifeInsuranceDoYouReallyNeedPage;
