/** GitHub Pages repo subpath (production). Empty when running `next dev` locally. */
const REPO_BASE_PATH = "/yashpatel521";

export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "production" ? REPO_BASE_PATH : "");

/** Paths for static assets on GitHub Pages (applied at render/load time). */
export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
