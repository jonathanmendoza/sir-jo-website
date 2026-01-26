export default function QuestionPagerButton(prop: {textLabel: string, textSubtext: string, onClick?: () => void, isHidden?: boolean, isDisabled?: boolean}) {
    return (
        <div className={`max-w-24 rounded-md border ${prop.isDisabled ? 'border-gray-500 text-gray-500 opacity-50' : 'border-black text-black dark:border-white dark:text-white'} flex flex-col items-stretch px-2 ${prop.isHidden ? "hidden" : ""}`} onClick={!prop.isDisabled ? prop.onClick : undefined}>
            <p style={{textAlign: 'start', textIndent: '0'}} className="mx-auto max-w-full">{prop.textLabel}</p>
            <p style={{textAlign: 'start', textIndent: '0'}} className="mx-auto max-w-full text-xs truncate text-nowrap text-ellipsis">{prop.textSubtext}</p>
        </div>
    );
}
