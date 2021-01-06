interface ThrottledFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
}
export function throttle<T extends (...args: any[]) => any>(fn: T, wait?: number): ThrottledFunc<T> {
  let last = 0;
  const _wait = wait || 1000;
  const throttled: ThrottledFunc<T> = function (...args: any[]): any {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this;
    const now = Date.now();
    const gap = now - last;
    if (gap < _wait) {
      return;
    }
    last = now;
    fn.call(ctx, ...args);
  };

  return throttled;
}
