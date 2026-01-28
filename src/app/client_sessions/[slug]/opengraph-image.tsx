import { ImageResponse } from 'next/og'
import { BASE_URL, CLIENT_SESSIONS_ITEMS } from '@/constants';
import { getArticleIndexBySlug } from '../../../utils/article_slugs';

const ITEMS = CLIENT_SESSIONS_ITEMS;

type Props = {
    params: Promise<{ slug: string }>
}

// Image metadata
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: Props) {
    const { slug } = await params;
    const articleIndex = getArticleIndexBySlug(ITEMS, slug);
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
