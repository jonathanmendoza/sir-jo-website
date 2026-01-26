import Link from "next/link";
import HeadlineComponent from "./HeadlineComponent";
import SpanEmoji from "./SpanEmoji";

function FooterComponent() {
    return (
        <>
            <div className="flex flex-col gap-4 pb-4">
                <hr/>
                <HeadlineComponent emojiImg="emoji_u1f44b.png" text="About the Author"/>
                <div>
                    <p style={{textIndent: '0'}} className="font-bold">Jonathan Mendoza</p>
                    <p style={{textIndent: '0'}}><SpanEmoji value="💼"/> Licensed FWD Financial Wealth Planner</p>
                </div>
                <p>Helping Filipinos build a secure and confident financial future — one plan at a time.</p>
            </div>

            <hr/>
            <div>
                <div className="w-full h-32 grid grid-cols-5 grid-rows-7 gap-1">
                    <div className="row-start-2 row-span-3 col-span-5 flex flex-row justify-start items-center gap-2">
                        <div className="aspect-square h-full rounded-full bg-orange-400 flex flex-col justify-stretch items-stretch overflow-hidden">
                            <img src="/sir_jo_avatar.png" className="aspect-square"/>
                        </div>
                        <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold text-xl">Sir Jo, Your Life Partner</p>
                    </div>
                    <p style={{textIndent: '0', textAlign: 'right'}} className="row-start-5 col-start-3 col-span-3 text-xs">Jonathan Mendoza</p>
                    <p style={{textIndent: '0', textAlign: 'right'}} className="row-start-6 col-start-3 col-span-3 text-xs italic">Financial Wealth Planner</p>
                    <div className="row-start-5 col-start-1 col-span-2 flex flex-row justify-start items-stretch gap-1">
                        <img src="/icons/facebook_icon.png" className="aspect-square h-full"/>
                        <a href="https://fb.com/fwdjonathanmendozasirjo" className="text-xs">fb.com/fwdjonathanmendozasirjo</a>
                    </div>
                    <div className="row-start-6 col-start-1 col-span-2 flex flex-row justify-start items-stretch gap-1">
                        <img src="/icons/phone_icon.png" className="aspect-square h-full"/>
                        <p style={{textIndent: '0'}} className="text-xs">+63 907 641 4380</p>
                    </div>
                </div>
                <hr/>
                <Link className="text-xs" href="/privacy_policy">Privacy Policy</Link>
            </div>
        </>
    );
}

export default FooterComponent;
