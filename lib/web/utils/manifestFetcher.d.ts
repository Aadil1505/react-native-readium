import { Fetcher, Manifest } from '@readium/shared';
/**
 * Fetches and deserializes the publication manifest
 */
export declare function fetchManifest(publicationURL: string): Promise<{
    manifest: Manifest;
    fetcher: Fetcher;
}>;
