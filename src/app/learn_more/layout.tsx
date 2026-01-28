import type { Metadata } from "next";
import { TITLE } from "@/constants";

export const metadata: Metadata = {
    title: "Learn More",
    openGraph: {
        title: `Learn More | ${TITLE}`
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
