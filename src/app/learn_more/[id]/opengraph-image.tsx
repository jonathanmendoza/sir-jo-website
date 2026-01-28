import { ImageResponse } from 'next/og'
import { BASE_URL, LEARN_MORE_ITEMS } from '@/constants';

const ITEMS = LEARN_MORE_ITEMS;

type Props = {
    params: Promise<{ id: string }>
}

// Image metadata
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: Props) {
    const { id } = await params;
    const articleIndex = ITEMS.findIndex(x => x.id === id || x.to?.split('/').pop() === id);
    const articleItem = ITEMS[articleIndex];

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
                {articleItem !== undefined &&
                    <img src={`${BASE_URL}${articleItem.image}`}
                        style={{
                            height: '100%',
                            aspectRatio: '1 / 1',
                        }}
                    />
                }
            </div>
        )
    )
}
