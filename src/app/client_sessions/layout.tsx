import type { Metadata } from "next";
import { TITLE } from "@/constants";

export const metadata: Metadata = {
    title: "Client Sessions",
    openGraph: {
        title: `Client Sessions | ${TITLE}`
    },
    twitter: {
        title: `Client Sessions | ${TITLE}`
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
