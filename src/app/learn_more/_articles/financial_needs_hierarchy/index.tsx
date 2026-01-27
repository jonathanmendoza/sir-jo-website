"use client";

import { FreeConsultationStateProvider } from "@/providers";
import FinancialNeedsHierarchy from "./financial_needs_hierarchy";
import { ArticleItem } from "@/types";

export default function FinancialNeedsHiararchyContainer({articleItem}: {articleItem: ArticleItem}) {
    return (
        <FreeConsultationStateProvider>
            <FinancialNeedsHierarchy  articleItem={articleItem}/>
        </FreeConsultationStateProvider>
    );
}
