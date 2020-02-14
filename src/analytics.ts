function createAnalytic(): object {
  let counter = 0;
  let destroyed: boolean = false;

  const listener = (): number => counter++;

  document.addEventListener('click', listener);

  return {
    destroy(): void {
      document.removeEventListener('click', listener);
      destroyed = true;
    },
    getClick(): string | number {
      if (destroyed) {
        return `Analytic is destroyed, total clicks = ${counter}`;
      }
      return counter;
    },
  };
}

window['analytic'] = createAnalytic();
