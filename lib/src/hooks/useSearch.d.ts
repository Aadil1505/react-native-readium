import { type RefObject } from 'react';
import type { ReadiumViewRef } from '../components/ReadiumView.types';
import type { SearchOptions, SearchResult } from '../interfaces';
export interface UseSearchResult {
    /** The most recent (trimmed) query passed to `search`. */
    query: string;
    /** All results loaded so far, across every page fetched. */
    results: SearchResult[];
    /** True while the first page of a new search is loading. */
    isSearching: boolean;
    /** True while an additional page is loading via `loadMore`. */
    isLoadingMore: boolean;
    /** Whether the current publication supports full-text search. */
    isSupported: boolean;
    /** True while more pages remain; drives infinite scroll / `loadMore`. */
    hasMore: boolean;
    /**
     * Total number of matches, when known. Note this is a running tally that
     * grows as pages are loaded — Readium can rarely report a final total before
     * the whole publication has been searched.
     */
    totalCount?: number;
    /** Starts a new search, replacing any results from a previous one. */
    search: (query: string, options?: SearchOptions) => Promise<void>;
    /** Loads the next page of results for the in-flight search. */
    loadMore: () => Promise<void>;
    /** Clears results and cancels any in-flight search. */
    clear: () => void;
}
/**
 * Drives paginated full-text search for a `ReadiumView`.
 *
 * Pass the same ref you give to `<ReadiumView ref={...} />`. Call `search` to
 * start, `loadMore` (e.g. on a list's `onEndReached`) while `hasMore` is true,
 * and `clear` to reset.
 *
 * The hook serialises page requests internally so a single Readium
 * `SearchIterator` is never advanced concurrently, and ignores responses from a
 * search that has since been superseded or cleared.
 */
export declare const useSearch: (ref: RefObject<ReadiumViewRef | null>) => UseSearchResult;
