type Modes = Record<string, boolean | string>

export function classNames(cn: string,additional: string[], modes: Modes = {}): string {
  return [
    cn,
    ...additional,
    Object.entries(modes).filter(([cn, value]) => Boolean(value)).map(([className]) => className)
  ]
    .join(' ')
}
