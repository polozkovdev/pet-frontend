type IMods = Record<string, string | boolean>;

interface IClassNames {
  cls: string,
  mods?: IMods,
  additional: string[]
}

export const classNames = ({cls, mods, additional}: IClassNames): string => {
  const mod = mods ? Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([key]) => key) : [];
  return  [cls, ...additional, ...mod].join(" ");
}
