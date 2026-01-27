import ScrollToTop from "@/components/ScrollToTop";
import { Suspense } from "react";

export default function Layout(props: LayoutProps<'/relatable_stories/[id]'>) {
    return (
        <div>
            <Suspense>
                <ScrollToTop/>
            </Suspense>
            {props.children}
        </div>
    );
}
