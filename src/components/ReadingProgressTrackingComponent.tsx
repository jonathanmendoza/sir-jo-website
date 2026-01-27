"use client";

import { useReadingProgress, useTrackPageView } from "@/utils/event_tracking"

export default function ReadingProgressTrackingComponent() {
    useTrackPageView();
    useReadingProgress();
    return <></>;
}
