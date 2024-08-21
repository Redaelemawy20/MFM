export function sortSectionsWithOrder<T extends HasOrder>(sections: T[]) {
  const clonedSections = [...sections];
  return clonedSections.sort((a, b) => {
    let first = a.order ?? 0;
    let second = b.order ?? 0;
    if (first === -1) return 1;
    if (second === -1) return -1;
    return first - second;
  });
}
type HasOrder = { order: number | null | undefined };
