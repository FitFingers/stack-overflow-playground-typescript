import { useCallback, useEffect, useRef } from "react";

const useDragAndDrop = () => {
  const ref = useRef<HTMLDivElement>(null);

  const startDrag = useCallback((e: MouseEvent) => {
    console.log("dragging...", e);
  }, []);

  const endDrag = useCallback((e: MouseEvent) => {
    console.log("dropped!", e);
  }, []);

  // drag handlers
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("dragend", endDrag);
    el.addEventListener("dragstart", startDrag);

    return () => {
      el.removeEventListener("dragend", endDrag);
      el.removeEventListener("dragstart", startDrag);
    };
  }, [endDrag, startDrag]);

  return { ref, startDrag };
};

export default useDragAndDrop;
