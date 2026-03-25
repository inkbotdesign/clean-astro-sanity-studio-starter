export function requireEnv(name: string, value: string | undefined): string {
  if (!value) {
    throw new Error(
      `Missing ${name}. Add it to .env or your deployment environment.`,
    );
  }

  return value;
}
