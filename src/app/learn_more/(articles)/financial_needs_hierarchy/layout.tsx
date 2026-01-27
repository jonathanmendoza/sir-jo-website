import { FreeConsultationStateProvider } from "@/providers";

export default function Layout(props: LayoutProps<'/learn_more/financial_needs_hierarchy'>) {
    return (
        <FreeConsultationStateProvider>
            {props.children}
        </FreeConsultationStateProvider>
    );
}
