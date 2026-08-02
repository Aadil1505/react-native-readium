import type { ReadiumProps } from '../../src/components/ReadiumView';
interface RefProps extends Pick<ReadiumProps, 'file' | 'onLocationChange' | 'onPublicationReady'> {
    container: HTMLElement | null;
    onPositionChange?: (position: number | null) => void;
}
export declare const useNavigator: ({ file, onLocationChange, onPublicationReady, container, onPositionChange, }: RefProps) => {
    navigator: any;
    positions: any;
};
export {};
