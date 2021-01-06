interface DebouncedFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel(): void;
}

export function debounce<T extends (...args: any[]) => any>(fn: T, wait?: number): DebouncedFunc<T> {
  let timer;
  const _wait = wait || 1000;
  const debounced: DebouncedFunc<T> = function (...args: any[]): any {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(ctx, ...args);
      timer = null;
    }, _wait);
  };
  debounced.cancel = function (): void {
    clearTimeout(timer);
    timer = null;
  };
  return debounced;
}
