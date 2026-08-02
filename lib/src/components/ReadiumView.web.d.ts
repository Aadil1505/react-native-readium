import type { ReadiumProps as BaseReadiumProps, ReadiumViewRef as BaseReadiumViewRef } from './ReadiumView.types';
export type ReadiumProps = BaseReadiumProps & {
    height?: number;
    width?: number;
};
export type ReadiumViewRef = BaseReadiumViewRef & {
    /** @deprecated Use goForward() */
    nextPage: () => void;
    /** @deprecated Use goBackward() */
    prevPage: () => void;
};
export declare const ReadiumView: any;
