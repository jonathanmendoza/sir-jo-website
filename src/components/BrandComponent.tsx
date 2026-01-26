import AvatarComponent from "./AvatarComponent";

export default function BrandComponent({height}: {height?: string}) {
    return (
        <div style={{height}} className="flex flex-row justify-start items-center gap-2">
            <AvatarComponent/>
            <p style={{textIndent: '0', textAlign: 'left'}} className="font-bold text-xl">Sir Jo, Your Life Partner</p>
        </div>
    );
}
