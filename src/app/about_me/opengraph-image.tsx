import { BASE_URL } from '@/constants'
import { OPEN_GRAPH_IMAGE_SIZE, generateOpenGraphImage } from '@/utils/image_generation'

// Image metadata
export const size = { ...OPEN_GRAPH_IMAGE_SIZE }

export const contentType = 'image/png';

// Image generation
export default async function Image(_props: any) {
    return generateOpenGraphImage(`${BASE_URL}/about_me/who_is_sir_jo.png`);
}
