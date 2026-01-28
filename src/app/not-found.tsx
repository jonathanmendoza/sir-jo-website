import SpanEmoji from "@/components/SpanEmoji";

export default function NotFoundPage() {
    return (
        <div className="h-[40%] flex flex-col justify-center items-center gap-4">
            <h1 style={{fontSize: '3rem'}} className="font-bold">404</h1>
            <h2><SpanEmoji value="😥"/> Sorry, this page could not be found</h2>
            <p style={{textIndent: '0', textAlign: 'center'}}>The link you followed probably broken or the page has been removed.</p>
        </div>
    );
}
