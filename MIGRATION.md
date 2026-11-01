# Migrating to WBMermaid 3

WBMermaid 3 targets Vue 3. Register the plugin with `app.use(wbMermaid)` or import `WBMermaid` locally.

## Main changes

- Use Vue 3 and `@wbc-ui/mermaid` `3.x`.
- Treat `@wbc-ui/core` as optional unless the application uses `wbcObj`.
- Listen to `ready`, `load`, `rendered`, and `error` for lifecycle integration.
- Use `fetchOptions` and `fetchTimeout` for remote source requests.
- Add `ariaLabel`, `title`, or `description` when the diagram communicates information not repeated nearby.
- Keep `securityLevel: 'strict'` for untrusted or user-controlled diagram text.

Structured object input intentionally supports flowchart and sequence data. Use Mermaid source strings for the complete Mermaid grammar.
