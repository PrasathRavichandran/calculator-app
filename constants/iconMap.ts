type IconMapProps = Record<
  string,
  { type: "fta6" | "eto" | "mci"; name: string }
>;

const iconMap: IconMapProps = {
  divide: { type: "fta6", name: "divide" },
  "0": { type: "fta6", name: "0" },
  "1": { type: "fta6", name: "1" },
  "2": { type: "fta6", name: "2" },
  "3": { type: "fta6", name: "3" },
  "4": { type: "fta6", name: "4" },
  "5": { type: "fta6", name: "5" },
  "6": { type: "fta6", name: "6" },
  "7": { type: "fta6", name: "7" },
  "8": { type: "fta6", name: "8" },
  "9": { type: "fta6", name: "9" },
  "dot-single": { type: "eto", name: "dot-single" },
  "percent-outline": { type: "mci", name: "percent-outline" },
  close: { type: "mci", name: "close" },
  minus: { type: "mci", name: "minus" },
  plus: { type: "mci", name: "plus" },
  backspace: { type: "mci", name: "backspace" },
  equal: { type: "mci", name: "equal" },
  "code-parentheses": { type: "mci", name: "code-parentheses" },
};

export { iconMap, IconMapProps };
