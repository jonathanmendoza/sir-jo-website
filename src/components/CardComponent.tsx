import Link from "next/link";

export default function CardComponent(prop: {itemKey?: string, width?: string, title: React.ReactNode, body?: string, image?: string, isSquare?: boolean, ctaText?: React.ReactNode, to: string}) {
    const width = prop.width ?? '16rem';

    return (
        <Link href={prop.to}>
            <div key={prop.itemKey} style={{minWidth: width, width: width, flexBasis: width}} className={`${prop.isSquare ? 'aspect-square': 'aspect-video'} rounded-2xl border-[0.1rem] light:border-black dark:border-white flex flex-col justify-center items-center gap-2 p-4`}>
                <h3><b>{prop.title}</b></h3>
                {prop.body && <p style={{textIndent: 0}} className="italic">{prop.body}</p>}
                {prop.image && <img src={prop.image}/>}
                {prop.ctaText && prop.to && <p style={{textIndent: 0}} className="animate-gentlePulse">{prop.ctaText}</p>}
            </div>
        </Link>
    );
}
