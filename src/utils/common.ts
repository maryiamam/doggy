export const debounce = (fn: () => void, ms: number) => {
  let timer: NodeJS.Timeout;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this);
    }, ms);
  };
};
