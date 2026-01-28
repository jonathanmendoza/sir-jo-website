import { ImageResponse } from 'next/og'
import { BASE_URL } from '@/constants'

type Props = {
    params: Promise<{ id: string }>
}

// Image metadata
export const size = {
    width: 1200,
    height: 630,
}

// Image generation
export default async function Image(_props: Props) {
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
                <img src={`${BASE_URL}/about_me/who_is_sir_jo.png`}
                    style={{
                        height: '100%',
                        aspectRatio: '1 / 1',
                    }}
                />
            </div>
        )
    )
}
