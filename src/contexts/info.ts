import { createContext, useContext } from "react";
import type { ContactInfo, FreeConsultationSubmitInfoStatus, PersonalInfo, PrioritiesAndGoalInfo, VerifyContactInfo } from "@/types";

export const PersonalInfoContext = createContext<PersonalInfo|undefined>(undefined);
export const PrioritiesAndGoalInfoContext = createContext<PrioritiesAndGoalInfo|undefined>(undefined);
export const ContactInfoContext = createContext<ContactInfo|undefined>(undefined);

export const FreeConsultationSubmitInfoStatusContext = createContext<FreeConsultationSubmitInfoStatus|undefined>(undefined);

export const VerifyContactInfoContext = createContext<VerifyContactInfo|undefined>(undefined);

export const usePersonalInfo = () => {
    const context = useContext(PersonalInfoContext);
    if (!context) {
        throw new Error("usePersonalInfo must be used within a PersonalInfoProvider");
    }
    return context;
};

export const usePrioritiesAndGoalInfo = () => {
    const context = useContext(PrioritiesAndGoalInfoContext);
    if (!context) {
        throw new Error("usePrioritiesAndGoalInfo must be used within a PrioritiesAndGoalInfoProvider");
    }
    return context;
};

export const useContactInfo = () => {
    const context = useContext(ContactInfoContext);
    if (!context) {
        throw new Error("useContactInfo must be used within a ContactInfoProvider");
    }
    return context;
};

export const useFreeConsultationSubmitInfoStatus = () => {
    const context = useContext(FreeConsultationSubmitInfoStatusContext);
    if (!context) {
        throw new Error("useFreeConsultationSubmitInfoStatus must be used within a FreeConsultationSubmitInfoStatusProvider");
    }
    return context;
};

export const useVerifyContactInfo = () => {
    const context = useContext(VerifyContactInfoContext);
    if (!context) {
        throw new Error("useVerifyContactInfoContext must be used within a VerifyContactInfoProvider");
    }
    return context;
};
