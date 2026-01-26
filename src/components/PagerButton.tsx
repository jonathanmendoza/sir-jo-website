import Link from "next/link";

export default function PagerButton(prop: {textLabel: string, textSubtext: React.ReactNode, to: string, isHidden?: boolean}) {
    return (
        <Link className={`${prop.isHidden ? 'hidden' : ''}`} href={prop.to}>
            <div className="max-w-24 rounded-md border border-black dark:border-white flex flex-col items-stretch px-2">
                <p style={{textAlign: 'start', textIndent: '0'}} className="mx-auto max-w-full">{prop.textLabel}</p>
                <p style={{textAlign: 'start', textIndent: '0'}} className="mx-auto max-w-full text-xs truncate text-nowrap text-ellipsis">{prop.textSubtext}</p>
            </div>
        </Link>
    );
}
