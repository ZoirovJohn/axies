const LOCAL_HOST_RE = /\/\/(127\.0\.0\.1|localhost)(:|\/|$)/i;

function stripWww(hostname: string) {
  return hostname.startsWith("www.") ? hostname.slice(4) : hostname;
}

function isLocalHostname(hostname: string) {
  return hostname === "127.0.0.1" || hostname === "localhost";
}

function getDefaultApiHostname(hostname: string) {
  const host = stripWww(hostname);
  if (host.startsWith("api.")) return host;
  return `api.${host}`;
}

export function getDerivedHttpBaseUrl(port = 4007) {
  if (typeof window === "undefined") return `http://127.0.0.1:${port}`;

  const protocol = window.location.protocol === "https:" ? "https:" : "http:";
  const { hostname } = window.location;

  if (isLocalHostname(hostname)) return `${protocol}//${hostname}:${port}`;

  // In production, we usually serve the API behind nginx on a domain (no explicit port).
  return `${protocol}//${getDefaultApiHostname(hostname)}`;
}

export function getDerivedWsBaseUrl(port = 4007) {
  if (typeof window === "undefined") return `ws://127.0.0.1:${port}`;
  const wsProtocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  const { hostname } = window.location;

  if (isLocalHostname(hostname)) return `${wsProtocol}//${hostname}:${port}`;

  // In production, WebSocket is expected behind nginx (wss, no explicit port).
  return `${wsProtocol}//${getDefaultApiHostname(hostname)}`;
}

export function resolvePublicUrl(envValue: string | undefined, derivedValue: string) {
  if (!envValue) return derivedValue;

  // If the build accidentally inlined localhost, prefer the runtime-derived host in browsers.
  if (typeof window !== "undefined" && LOCAL_HOST_RE.test(envValue)) return derivedValue;

  return envValue;
}
