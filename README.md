# WBMermaid

**Turn Mermaid diagrams into reactive Vue interfaces.** `@wbc-ui/mermaid` supplies the `WBMermaid` Vue 3 component for rendering Mermaid strings, remote resources, and supported structured data with race-safe updates, lifecycle events, accessible host metadata, and optional WBC composition.

Its headline advanced capability is `asWbc`: selected static Mermaid node labels can become live WBC/Vue content with dynamic functions, events, Vuetify components, links, images, or video while Mermaid continues to own the diagram topology.

Documentation and Interactive Lab: <https://mermaid.wbc-ui.com>

## Install

```bash
npm install @wbc-ui/mermaid vue
```

```js
import { createApp } from 'vue';
import wbMermaid from '@wbc-ui/mermaid';

createApp(App).use(wbMermaid).mount('#app');
```

`@wbc-ui/core` is optional. Install and register it before WBMermaid when using `wbcObj` or `asWbc`.

## First diagram

```vue
<WBMermaid
  src="flowchart LR; Idea --> Build --> Test --> Release"
  aria-label="Product delivery flow"
/>
```

## Sources

Inline Mermaid supports every grammar included by the bundled Mermaid version:

```vue
<WBMermaid src="sequenceDiagram; Client->>API: GET /items" />
```

Remote or served resource:

```vue
<WBMermaid
  src="https://cdn.example.com/architecture.mmd"
  :fetch-options="{ credentials: 'omit' }"
  :fetch-timeout="15000"
/>
```

`fetchTimeout="0"` disables the timer. Source changes and component unmount cancel obsolete requests.

Structured flowchart:

```vue
<WBMermaid :src="{
  type: 'flowchart',
  direction: 'LR',
  data: [
    { from: 'Client', to: 'API', label: 'request' },
    { from: 'API', to: 'Database', type: 'dotted' }
  ]
}" />
```

Structured objects support `flowchart`/`graph` and `sequence`/`sequenceDiagram`. Use strings for every other Mermaid diagram grammar.

## Props

| Prop | Type | Default | Purpose |
|---|---|---|---|
| `src` | `String \| Object` | required | Mermaid text, URL/local resource, flowchart object, or sequence object. |
| `config` | `Object` | `{}` | Per-instance Mermaid configuration. |
| `fetchOptions` | `RequestInit` | `{}` | Options passed to `fetch`. |
| `fetchTimeout` | `Number \| null` | `10000` | Remote timeout in milliseconds; zero disables. |
| `ariaLabel` | `String` | `Mermaid diagram` | Accessible name for the diagram host. |
| `title` | `String \| null` | `null` | Native title and accessible-name fallback. |
| `description` | `String \| null` | `null` | Concise accessible description. |
| `wbcObj` | `Object` | `{}` | Optional WBC siblings or `default_main` override. |
| `asWbc` | `Object` | `{}` | Render selected Mermaid node labels as live WBC content. |

## Events

```vue
<WBMermaid
  :src="diagram"
  @load="onLoad"
  @ready="onFirstRender"
  @rendered="onEveryRender"
  @error="onError"
/>
```

- `load`: `{ source, code }`
- `rendered`: `{ id, svg, source, code }`
- `ready`: the first successful `rendered` payload
- `error`: `{ error, phase, source }`, where phase is `source` or `render`

## Configuration and security

WBMermaid initializes Mermaid with `securityLevel: 'strict'` and always owns startup with `startOnLoad: false`. Host plugin defaults are merged before per-instance configuration:

```js
app.use(wbMermaid, {
  config: { theme: 'neutral', securityLevel: 'strict' },
  fetchTimeout: 15000
});
```

Use `loose` only for trusted diagram source. Mermaid SVG is inserted into the diagram host as generated markup.

## WBC composition

```vue
<WBMermaid
  src="flowchart LR; Source --> Diagram"
  :wbc-obj="{
    default_0: '<VCard,pa-5 bg-pink-lighten-5>',
    default_1: 'h2__Architecture|text-pink-darken-2',
    default_2: 'p__Generated from Mermaid source.'
  }"
/>
```

The component supplies the diagram as `default_main`. Other keys add surrounding WBC content. An explicit `wbcObj.default_main` deliberately replaces the diagram.

## WBC-rendered nodes

Map a stable Mermaid node or participant ID to a WBC item:

```vue
<WBMermaid
  :src="`sequenceDiagram
    participant alice as Alice
    participant bob as Bob
    alice->>bob: Hello`"
  :as-wbc="{
    alice: {
      width: 150,
      height: 65,
      item: {
        comp: 'VChip',
        options: { color: 'red', html: 'Alice · WBC' }
      }
    }
  }"
/>
```

Flowchart node IDs and sequence participant IDs are resolved automatically. Other Mermaid grammars can provide a `selector`. WBMermaid retains the Mermaid shape, replaces its label through an SVG `foreignObject`, and mounts WBC with the parent Vue application context. Mermaid performs layout before WBC is mounted, so supply conservative dimensions to avoid overlap.

`asWbc` values may contain JavaScript functions. This makes dynamic labels and application-owned events possible without placing application logic inside Mermaid source. URL strings are first-class WBC items and can render links or supported media resources.

## Runtime behavior

- Unique render IDs prevent instance collisions.
- A generation counter ignores stale async results.
- Obsolete fetches are aborted.
- Mermaid initialization/render pairs are serialized to prevent configuration bleed across sibling components.
- Visible errors are escaped and emitted without crashing the surrounding view.
- Without WBC registration, the normal standalone diagram container is returned.

## Compatibility and release status

- Vue `^3.5.0`
- Node.js `>=18` for development/builds
- Bundled Mermaid `^11.12.2`
- Optional `@wbc-ui/core ^3.0.0-rc.1`
- ESM and CommonJS `.cjs` entries
- SSR produces a shell; SVG renders after client mount

`3.0.0-rc.1` is a release candidate. Review `CHANGELOG.md`, `COMPATIBILITY.md`, and `MIGRATION.md` before adoption.

## Validation

```bash
npm test
npm run check:dist
npm pack --dry-run
```

The accompanying test application targets Chromium, Firefox, and WebKit for real Mermaid rendering, reactive updates, lifecycle events, accessibility metadata, `asWbc` functions/events, URL-rendered nodes, and the Interactive Lab. `test:browser` runs Chromium and Firefox; the publication-only `test:browser:release` adds WebKit. The repository's `wb-mermaid-release.yml` workflow installs the required Playwright system dependencies on Ubuntu and runs the complete publication gate.

## License

MIT
