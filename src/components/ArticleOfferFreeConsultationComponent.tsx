import Link from "next/link";
import { Suspense } from "react";
import { FreeConsultationStateProvider } from "@/providers";
import FreeConsultationForm from "./FreeConsultationForm";
import SpanEmoji from "./SpanEmoji";

export default function ArticleOfferFreeConsultationComponent({dontAddProvider}: {dontAddProvider?: boolean}) {
    return (
        <Suspense fallback={
            <div className="w-full flex flex-col justify-center items-center animate-gentlePulse">
                <Link href="/free_consultation"><SpanEmoji value="👉"/> Tap here to sign-up for a free consultation today <SpanEmoji value="&#x1F4DD;"/></Link>
            </div>
        }>
            {dontAddProvider ?
                <FreeConsultationForm/>
                :
                <FreeConsultationStateProvider>
                    <FreeConsultationForm/>
                </FreeConsultationStateProvider>
            }
        </Suspense>
    );
}
