export function delay(timeout: number) {
  return new Promise<void>((resolve) => setTimeout(() => resolve(), timeout));
}

export function mapFromArray<T>(
  array: T[],
  keyStrategy: (v: T) => string | number,
) {
  const map: Record<string | number, T | undefined> = {};

  for (const item of array) {
    map[keyStrategy(item)] = item;
  }

  return map;
}

export function normalize<T>(
  array: T[],
  selector: (item: T) => string | number = (item: any) => item.id,
) {
  const object: {
    [key: string]: T;
  } = {};
  array.forEach((item) => {
    object[selector(item)] = item;
  });
  return object;
}
