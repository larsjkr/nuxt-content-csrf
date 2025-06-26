# Nuxt CSRF Token Mismatch MRE

## How to reproduce CSRF token mismatch error

1. Run `pnpm install` <br>

2. Run `pnpm build` <br>

3. Run `node .output/server/index.mjs` <br>

4. Go to `http://localhost:3000/`

5. You should the see CSRF Token mismatch error in the terminal. Something similar to

```bash
Failed to fetch foo data FetchError: [POST] "/__nuxt_content/foo/query?v=v3.5.0--dCunU9R2JNrcjwVr1V_fS-0vV-gBdgCosLC8CgWBJMg": 403 CSRF Token Mismatch
    at async $fetch2 (file:///nuxt-content-csrf/.output/server/chunks/nitro/nitro.mjs:3015:15)
    at async fetchQuery (file:///nuxt-content-csrf/.output/server/chunks/build/server.mjs:42437:10)
```

_Hint: Same behavior can be observed when running `pnpm dev` and navigating to `http://localhost:3000/`._
