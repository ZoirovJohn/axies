const LOCAL_HOST_RE = /\/\/(127\.0\.0\.1|localhost)(:|\/|$)/i;

export function getDerivedHttpBaseUrl(port = 4007) {
  if (typeof window === "undefined") return `http://127.0.0.1:${port}`;
  const protocol = window.location.protocol === "https:" ? "https:" : "http:";
  return `${protocol}//${window.location.hostname}:${port}`;
}

export function getDerivedWsBaseUrl(port = 4007) {
  if (typeof window === "undefined") return `ws://127.0.0.1:${port}`;
  const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${wsProtocol}//${window.location.hostname}:${port}`;
}

export function resolvePublicUrl(envValue: string | undefined, derivedValue: string) {
  if (!envValue) return derivedValue;

  // If the build accidentally inlined localhost, prefer the runtime-derived host in browsers.
  if (typeof window !== "undefined" && LOCAL_HOST_RE.test(envValue)) return derivedValue;

  return envValue;
}

