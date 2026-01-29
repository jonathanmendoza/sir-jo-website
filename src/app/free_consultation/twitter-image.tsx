import { BASE_URL } from '@/constants';
import { TWITTER_IMAGE_SIZE, generateTwitterImage } from '@/utils/image_generation'

// Image metadata
export const size = { ...TWITTER_IMAGE_SIZE }

export const contentType = 'image/png'

// Image generation
export default async function Image(_props: any) {
    return generateTwitterImage(`${BASE_URL}/free_consultation/free_consultation_new.jpg`);
}
