//These are the functions to be used anywhere in the project.

interface ObjectWithAttribute {
  [key: string]: any;
}

export default function countObjectsInArrayWithFilter<
  T extends ObjectWithAttribute
>(array: T[], attributePath: string, value: T[keyof T]): number {
  const total = array.reduce((count, obj) => {
    const [attribute, nestedAttribute] = attributePath.split(".");
    if (
      obj.hasOwnProperty(attribute) &&
      obj[attribute]?.[nestedAttribute] === value
    ) {
      return count + 1;
    }
    return count;
  }, 0);

  return total;
}
