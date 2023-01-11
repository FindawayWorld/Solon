import { useCallback, useEffect, useRef } from 'react';

const useTimeoutFn = (fn: () => void, ms: number | false = 0): readonly [() => boolean | null, () => void, () => void] => {
    const ready = useRef<boolean|null>(false);
    const timeout = useRef<number>();
    const callback = useRef(fn);

    const isReady = useCallback(() => ready.current, []);

    const set = useCallback(() => {
        ready.current = false;
        timeout.current && clearTimeout(timeout.current);
        if (ms === false) return;

        timeout.current = setTimeout(() => {
            ready.current = true;
            callback.current();
        }, ms) as unknown as number;
    }, [ms]);

    const clear = useCallback(() => {
        ready.current = null;
        timeout.current && clearTimeout(timeout.current);
    }, []);

    // update ref when function changes
    useEffect(() => {
        callback.current = fn;
    }, [fn]);

    // set on mount, clear on unmount
    useEffect(() => {
        set();

        return clear;
    }, [clear, set]);

    return [isReady, clear, set];
};

export default useTimeoutFn;
