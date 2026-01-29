import { ImageResponse } from 'next/og'
import { BASE_URL, CLIENT_SESSIONS_ITEMS } from '@/constants';
import { OPEN_GRAPH_IMAGE_SIZE, generateOpenGraphImage } from '@/utils/image_generation'
import { getArticleIndexBySlug } from '../../../utils/article_slugs';

const ITEMS = CLIENT_SESSIONS_ITEMS;

type Props = {
    params: Promise<{ slug: string }>
}

// Image metadata
export const size = { ...OPEN_GRAPH_IMAGE_SIZE }

export const contentType = 'image/png'

// Image generation
export default async function Image({ params }: Props) {
    const { slug } = await params;
    const articleIndex = getArticleIndexBySlug(ITEMS, slug);
    const articleItem = ITEMS[articleIndex];

    return generateOpenGraphImage(`${BASE_URL}${articleItem.image}`);
}
