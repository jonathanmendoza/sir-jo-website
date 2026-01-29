import type { Metadata } from "next";
import { BASE_URL } from "@/constants";

export const metadata: Metadata = {
    title: "Free Consultation",
    twitter: {
        images: [`${BASE_URL}/free_consultation/free_consultation_new.jpg`]
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
