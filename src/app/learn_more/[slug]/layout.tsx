import ScrollToTop from "@/components/ScrollToTop";
import { Suspense } from "react";

export default function LearnMoreArticleLayout(props: LayoutProps<'/learn_more/[slug]'>) {
    return (
        <div>
            <Suspense>
                <ScrollToTop/>
            </Suspense>
            {props.children}
        </div>
    );
}
