import { useEffect } from "react";

export function useAutoSave<T>(key: string, data: T, eventName: string) {
    useEffect(() => {
        const saveData = () => {
            localStorage.setItem(key, JSON.stringify(data));
        };

        // Save when the user closes, reloads, or navigates away
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            saveData();
            // Some browsers require setting returnValue for the handler to fire correctly
            e.returnValue = "";
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        window.addEventListener(eventName, saveData);

        // Cleanup when unmounted
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener(eventName, saveData);
        };
    }, [data, eventName]);
}
