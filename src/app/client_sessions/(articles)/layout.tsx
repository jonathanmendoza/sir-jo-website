import ScrollToTop from "@/components/ScrollToTop";
import { Suspense } from "react";

export default function Layout(props: LayoutProps<'/client_sessions'>) {
    return (
        <div>
            <Suspense>
                <ScrollToTop/>
            </Suspense>
            {props.children}
        </div>
    );
}
