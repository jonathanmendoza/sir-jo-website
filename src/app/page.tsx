import Link from "next/link";
import BrandComponent from "@/components/BrandComponent";
import ContentComponent from "@/components/ContentComponent";
import ScrollToTop from "@/components/ScrollToTop";
import CardComponent from "@/components/CardComponent";
import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { LEARN_MORE_ITEMS, RELATABLE_STORIES_ITEMS } from "@/constants";

function HomePage() {
    return (
            <div>
                <ScrollToTop/>
                <ContentComponent headline={
                    <div className="flex flex-col gap-2">
                        <img src="/cover_photo.png"/>
                    </div>
                }>
                    <div className="flex flex-col items-stretch gap-4">
                        <hr/>
                        <BrandComponent height="2rem"/>
                        <p>Hi! I'm <b>Jonathan Mendoza</b>, a licensed Financial Wealth Planner from FWD Life Philippines. I help professionals and families create personalized protection and investment plans.</p>
                        <Link href="/about_me" className="flex flex-col items-stretch"><img src="/about_me/who_is_sir_jo.png"/></Link>
                        <div className="w-full flex flex-col justify-center items-center animate-gentlePulse">
                            <Link href="/about_me"><SpanEmoji value="👉" /> Tap here to learn more about me <SpanEmoji value="&#x1F464;"/></Link>
                        </div>

                        <hr/>
                        <HeadlineComponent emojiImg="emoji_u2753.png" text="Why Insurance Matters"/>
                        <div className="max-w-[85dvw] lg:max-w-[1280px] overflow-x-auto flex snap-x snap-mandatory space-x-4 p-4">
                            {LEARN_MORE_ITEMS.slice(0, LEARN_MORE_ITEMS.length - 2).map(item => <CardComponent key={item.to} isSquare title={<>{item.spanEmoji}{` ${item.title}`}</>} image={item.image} ctaText={<><SpanEmoji value="👉"/> Tap to learn more <SpanEmoji value="📘"/></>} to={`/learn_more/${item.id}`}/>)}
                        </div>

                        <hr/>
                        <HeadlineComponent emojiImg="emoji_u1f4d6.png" text="Why our clients chose to get covered."/>
                        <div className="max-w-[85dvw] lg:max-w-[1280px] overflow-x-auto flex snap-x snap-mandatory space-x-4 p-4">
                            {[...RELATABLE_STORIES_ITEMS].map(item => <CardComponent key={item.to} isSquare title={<>{item.spanEmoji}{` ${item.title}`}</>} body={item.hook} image={item.image} ctaText={<><SpanEmoji value="👉"/> Tap to read more <SpanEmoji value="&#x1F4D6;"/></>} to={`/relatable_stories/${item.id}`}/>)}
                        </div>

                        <hr/>
                        <HeadlineComponent emojiImg="emoji_u1f4dd.png" text="Checklist before getting an insurance"/>
                        <p>Insurance is one of the most important financial tools you can have — but before you get one, it’s crucial to prepare yourself. Think of it as building a strong foundation before putting up the walls of your house. Here’s a simple <b>checklist to guide you before getting insurance:</b></p>
                        <Link href="/learn_more/checklist_before_getting_an_insurance" className="flex flex-col items-stretch"><img src="/learn_more/checklist_before_getting_an_insurance.png"/></Link>
                        <div className="w-full flex flex-col justify-center items-center animate-gentlePulse">
                            <Link href="/learn_more/checklist_before_getting_an_insurance"><SpanEmoji value="👉"/> Tap here for more details about the checklist <SpanEmoji value="&#x1F4DD;"/></Link>
                        </div>

                        <hr/>
                        <HeadlineComponent emojiImg="emoji_u1f9f1.png" text="Build Your Financial Plan the Right Way"/>
                        <p>Marami sa atin gustong magsimulang mag-invest o mag-ipon — pero ang tanong, <b>saan nga ba dapat magsimula?</b></p>
                        <Link href="/learn_more/financial_needs_hierarchy" className="flex flex-col items-stretch"><img src="/learn_more/financial_needs_hierarchy.png"/></Link>
                        <div className="w-full flex flex-col justify-center items-center animate-gentlePulse">
                            <Link href="/learn_more/financial_needs_hierarchy"><SpanEmoji value="👉"/> Tap here to know the right way <SpanEmoji value="&#x1F9F1;"/></Link>
                        </div>

                        <hr/>
                        <HeadlineComponent emojiImg="emoji_u1f4c5.png" text="Take the Next Step"/>
                        <div>
                            <p style={{textIndent: '0', textAlign: 'left'}}>&#x1F4DD; Sign-up for a <b>free consultation</b> with me today, and let’s protect the dreams of the people you love most. ❤️</p>
                        </div>
                        <Link href="/free_consultation" className="flex flex-col items-stretch"><img src="/free_consultation/free_consultation_new.jpg"/></Link>
                        <div className="w-full flex flex-col justify-center items-center animate-gentlePulse">
                            <Link href="/free_consultation"><SpanEmoji value="👉"/> Tap here to sign-up for a free consultation today <SpanEmoji value="&#x1F4DD;"/></Link>
                        </div>

                    </div>
                </ContentComponent>
            </div>
    );
}

export default HomePage;
