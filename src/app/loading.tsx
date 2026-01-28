import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

export default function LoadingPage() {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div className="flex flex-col gap-4">
                <h1><Skeleton count={2}/></h1>

                <div className="flex flex-col items-stretch gap-4">
                    <p style={{textIndent: '0'}}><Skeleton count={4}/></p>
                    <div className="aspect-square"><Skeleton style={{width: '100%', height: '100%'}}/></div>
                </div>

                <hr/>
                <h2><Skeleton/></h2>
                <p style={{textIndent: '0'}}><Skeleton count={2}/></p>
                <p style={{textIndent: '0'}}><Skeleton count={3}/></p>
                <p style={{textIndent: '0'}}><Skeleton count={4}/></p>

                <hr/>
                <h2><Skeleton/></h2>
                <p style={{textIndent: '0'}}><Skeleton count={2}/></p>
                <p style={{textIndent: '0'}}><Skeleton count={3}/></p>
                <p style={{textIndent: '0'}}><Skeleton count={4}/></p>
            </div>
        </SkeletonTheme>
    );
}
