"use client";

import ArticleTitleComponent from "@/components/ArticleTitleComponent";
import ContentComponent from "@/components/ContentComponent";
import HeadlineComponent from "@/components/HeadlineComponent";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useState } from "react";
import { useReadingProgress } from "@/utils/event_tracking";
import FreeConsultationForm from "@/components/FreeConsultationForm";
import { PRODUCT_OFFER_ITEMS } from "@/constants";

export default function FreeConsultationPage() {
    useReadingProgress();

    const [productOfferKey, setProductOfferKey] = useState<string|undefined>(undefined);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paramValue = params.get("product_offer_key");
        if (paramValue) {
            setProductOfferKey(paramValue);
        }
    }, [])

    return (
        <div>
            <ScrollToTop />
            <ContentComponent headline={
                <>
                    <ArticleTitleComponent emojiImg="emoji_u23f3.png" text="You Can’t Control Time — But You Can Control Your Plan." />
                </>
            }>
                <div className="flex flex-col items-stretch gap-4">
                    <p>Every day brings you closer to the life you’ve always dreamed of — a comfortable retirement, a secured family, and the freedom to live without worry. Pero habang tumatanda tayo, <b>time becomes our most limited resource.</b></p>
                    <div>
                        <p style={{ textIndent: '0' }}>The question is:</p>
                        <p style={{ textIndent: '0' }} className="font-bold">Are you using your time to build the future you want?</p>
                    </div>
                    <p>This quick activity will help you discover your <b>top financial priorities</b> and know <b>how much protection you’ll need</b> to achieve them — before it’s too late.</p>
                    {!productOfferKey && <img src="/free_consultation/free_consultation_new.jpg"></img>}
                    {productOfferKey && <img src={PRODUCT_OFFER_ITEMS[productOfferKey].image}></img>}

                    <hr />
                    <HeadlineComponent emojiImg="emoji_u1f9ee.png" text="Start Your Personalized Life Plan" />
                    <FreeConsultationForm/>
                </div>
            </ContentComponent>
        </div>
    );
}
