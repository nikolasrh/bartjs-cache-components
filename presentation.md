---
marp: true
theme: bekk
paginate: false
title: Cache components
---

<!-- _class: title invert -->

<header>
  <img src="theme/bekk.png" alt="Bekk">
  <img src="assets/bartjs.png" alt="Bart.js">
  <time>10.11.2026</time>
</header>

# Cache components

Nikolas Rølland Hugsted

---

<!-- _class: invert -->

# Hvor vi skal ende opp

- SSG
- ISG
- PPR
- Cache components

---

<!-- _class: invert -->

```ts
const nextConfig: NextConfig = {
  cacheComponents: true
}
```

---

1. Fornektelse
2. Sinne
3. Forhandling
4. Depresjon
5. Aksept

---

<!-- _class: invert -->

# Hvor vi starter

- Ta på oss Next-hatten
- Forstå hvorfor man ikke får lov
- 

---

<!-- _class: invert -->

# Agenda

- Introduction
- Key ideas
- Demo
- Questions

---

Må gi et eksempel på dynamic verdi __placeholder__

---

Se på output hva hver page blir

---

# Cache directives

- "use cache"
- "use cache: remote"
- "use cache: private"

Self hosted?
- nextjs.org/docs/app/getting-started/caching
- nextjs.org/docs/app/api-reference/directives/use-cache-remote
- nextjs.org/docs/app/api-reference/config/next-config-js/cacheHandlers
- github.com/vercel/next.js/tree/canary/examples/cache-handler-redis
- github.com/mrjasonroy/cache-components-cache-handler

---

Nice – nå er masse cached
Problem – nå er masse cached

Hvordan invalidere osv.

---
