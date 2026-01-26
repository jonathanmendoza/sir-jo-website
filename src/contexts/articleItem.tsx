import { createContext, useContext } from "react";
import { ClientSessionsItem, LearnMoreItem, RelatableStoriesItem } from "@/types";

export const LearnMoreItemContext = createContext<LearnMoreItem|undefined>(undefined);
export const RelatableStoriesItemContext = createContext<RelatableStoriesItem|undefined>(undefined);
export const ClientSessionsItemContext = createContext<ClientSessionsItem|undefined>(undefined);

export const useLearnMoreItem = () => {
    const context = useContext(LearnMoreItemContext);
    if (!context) {
        throw new Error("useLearnMoreItem must be used within a LearnMoreItemProvider");
    }
    return context;
};

export const useRelatableStoriesItem = () => {
    const context = useContext(RelatableStoriesItemContext);
    if (!context) {
        throw new Error("useRelatableStoriesItem must be used within a RelatableStoriesItemProvider");
    }
    return context;
};

export const useClientSessionsItem = () => {
    const context = useContext(ClientSessionsItemContext);
    if (!context) {
        throw new Error("useClientSessionsItem must be used within a ClientSessionsItemProvider");
    }
    return context;
};
