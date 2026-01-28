import type { Metadata } from "next";
import { TITLE } from "@/constants";

export const metadata: Metadata = {
    title: "Privacy Policy",
    openGraph: {
        title: `Privacy Policy | ${TITLE}`
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}

