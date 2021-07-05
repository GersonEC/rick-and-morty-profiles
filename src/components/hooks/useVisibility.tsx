import { useCallback, useRef } from "react";

function useVisibility(
  cb: (isVisible: boolean) => void,
  deps: React.DependencyList
): (node: unknown) => void {
  const intersectionObserver = useRef<IntersectionObserver | null>(null);
  const memoizeCallback = useCallback((node) => {
    if (intersectionObserver.current) {
      intersectionObserver.current.disconnect();
    }
    intersectionObserver.current = new IntersectionObserver(([entry]) => {
      cb(entry.isIntersecting);
    });
    if (node) intersectionObserver.current.observe(node);
  }, deps);
  return memoizeCallback;
}

export default useVisibility;
