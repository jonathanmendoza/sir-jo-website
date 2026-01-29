import { useCallback } from "react";

const MIN_AMOUNT = 0;
const MAX_AMOUNT = 1000000;

export default function AmountInputField({id, children, value, onValueChange, readOnly, error }: {id: string, children: React.ReactNode, value: number, onValueChange: (newValue: number) => void, readOnly?: boolean, error?: string }) {
    const onChange = useCallback((e: any) => {
        onValueChange(e.target.value);
    }, [onValueChange]);

    const onBlur = useCallback((e: any) => {
        if (!e.target.value || e.target.value < MIN_AMOUNT) {
            onValueChange(MIN_AMOUNT)
        }
    }, [onValueChange]);

    return (
        <div className="flex flex-col justify-start items-start">
            <label htmlFor={id} className="text-left">{children}</label>
            <div className="grid grid-cols-3 grid-rows-1 justify-start items-center gap-1">
                <label htmlFor={id} className="col-span-1">Amount (₱):</label>
                <input type="number" id={id} name={id} className="col-span-2" placeholder="0" min={MIN_AMOUNT} max={MAX_AMOUNT} value={value} maxLength={MAX_AMOUNT.toString().length} onChange={onChange} onBlur={onBlur} readOnly={readOnly} />
            </div>
            {error && <p style={{ textIndent: '0' }} className="error">{error}</p>}
        </div>
    );
}
