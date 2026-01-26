import { createContext, useContext } from "react";
import type { ContactInfoCallbacks, PersonalInfoCallbacks, PrioritiesAndGoalInfoCallbacks, VerifyContactInfoCallbacks } from "@/types";

export const PersonalInfoCallbacksContext = createContext<PersonalInfoCallbacks|undefined>(undefined);
export const PrioritiesAndGoalInfoCallbacksContext = createContext<PrioritiesAndGoalInfoCallbacks|undefined>(undefined);
export const ContactInfoCallbacksContext = createContext<ContactInfoCallbacks|undefined>(undefined);

export const FreeConsultationSubmitCallbackContext = createContext<((productOfferKey?: string) => void) | undefined>(undefined);

export const VerifyContactInfoCallbacksContext = createContext<VerifyContactInfoCallbacks|undefined>(undefined);

export const usePersonalInfoCallbacks = () => {
    const context = useContext(PersonalInfoCallbacksContext);
    if (!context) {
        throw new Error("usePersonalInfoCallbacks must be used within a PersonalInfoCallbacksProvider");
    }
    return context;
};

export const usePrioritiesAndGoalInfoCallbacks = () => {
    const context = useContext(PrioritiesAndGoalInfoCallbacksContext);
    if (!context) {
        throw new Error("usePrioritiesAndGoalInfoCallbacks must be used within a PrioritiesAndGoalInfoCallbacksProvider");
    }
    return context;
};

export const useContactInfoCallbacks = () => {
    const context = useContext(ContactInfoCallbacksContext);
    if (!context) {
        throw new Error("useContactInfoCallbacks must be used within a ContactInfoCallbacksProvider");
    }
    return context;
};

export const useFreeConsultationSubmitCallback = () => {
    const context = useContext(FreeConsultationSubmitCallbackContext);
    if (!context) {
        throw new Error("useFreeConsultationSubmitCallback must be used within a FreeConsultationSubmitCallbackProvider");
    }
    return context;
};

export const useVerifyContactInfoCallbacks = () => {
    const context = useContext(VerifyContactInfoCallbacksContext);
    if (!context) {
        throw new Error("useVerifyContactInfoCallbacks must be used within a VerifyContactInfoCallbacksProvider");
    }
    return context;
}
