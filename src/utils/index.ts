export * from './mobile_number';
export * from './auto_save';
export * from './money';
export * from './article_slugs';

export function isProduction() {
    if (process.env.NODE_ENV === 'production') { return true }
    else { return false; }
}

export function isDevelopment() {
    if (process.env.NODE_ENV !== 'production') { return true; }
    else { return false; }
}

export function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
