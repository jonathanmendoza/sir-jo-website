export default function ContentComponent(prop: {headline: React.ReactNode, children?: React.ReactNode}) {
    return (
        <div className="flex flex-col gap-4">
            <div className="inline">{prop.headline}</div>
            {prop.children}
        </div>
    );
}
