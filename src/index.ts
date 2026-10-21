export function parseQuery(text: string): Record<string, string[]> {
  const result: Record<string, string[]> = Object.create(null) as Record<
    string,
    string[]
  >;
  for (const [key, value] of new URLSearchParams(text))
    (result[key] ??= []).push(value);
  return result;
}
export function stringifyQuery(
  values: Record<string, string | readonly string[]>,
): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(values))
    for (const item of typeof value === "string" ? [value] : value)
      params.append(key, item);
  return params.toString();
}
