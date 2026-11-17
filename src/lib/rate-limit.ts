const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();
const recent = new Map<string, number>();

function prune(store: Map<string, number[]>, now: number) {
  if (store.size < 500) return;
  for (const [key, times] of store) {
    if (times.every((time) => now - time >= WINDOW_MS)) store.delete(key);
    if (store.size < 400) break;
  }
}

export function allowRequest(key: string) {
  const now = Date.now();
  const times = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  prune(hits, now);
  if (times.length >= MAX_HITS) {
    hits.set(key, times);
    return false;
  }
  times.push(now);
  hits.set(key, times);
  return true;
}

export function seenRecently(key: string) {
  const now = Date.now();
  if (recent.size > 500) {
    for (const [saved, time] of recent) {
      if (now - time > WINDOW_MS) recent.delete(saved);
      if (recent.size < 400) break;
    }
  }
  const last = recent.get(key);
  return Boolean(last && now - last < 2 * 60 * 1000);
}

export function rememberInquiry(key: string) {
  recent.set(key, Date.now());
}
