export function requireEnv(
  name: string,
  value: string | undefined,
  fallback?: string,
): string {
  if (value && value !== "") {
    return value;
  }

  if (fallback && fallback !== "") {
    console.warn(`Environment value for ${name} not found, using fallback: ${fallback}`);
    return fallback;
  }

  throw new Error(
    `Missing ${name}. Add it to .env or your deployment environment.`,
  );
}

