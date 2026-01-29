import { ImageResponse } from 'next/og'

export const OPEN_GRAPH_IMAGE_SIZE = {
    width: 1200,
    height: 630,
}

export function generateOpenGraphImage(srcImage: string) {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'rgb(249, 115, 22)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={srcImage}
                    style={{
                        height: '100%',
                        aspectRatio: '1 / 1',
                    }}
                />
            </div>
        )
    )
}

export const TWITTER_IMAGE_SIZE = {
    width: 1200,
    height: 675,
}

export function generateTwitterImage(srcImage: string) {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 128,
                    background: 'rgb(249, 115, 22)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <img src={srcImage}
                    style={{
                        height: '100%',
                        aspectRatio: '1 / 1',
                    }}
                />
            </div>
        )
    )
}
