interface ThrottledFunc<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined;
  cancel(): void;
}
export function throttle<T extends (...args: any[]) => any>(fn: T, wait?: number): ThrottledFunc<T> {
  let timer;
  const _wait = wait || 1000;
  const throttled: ThrottledFunc<T> = function (...args: any[]): any {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const ctx = this;
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn.call(ctx, ...args);
      timer = null;
    }, _wait);
  };
  throttled.cancel = () => {
    if (timer) {
      clearTimeout(timer);
    }
  };

  return throttled;
}
