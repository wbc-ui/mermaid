# Compatibility

WBMermaid `3.0.0-rc.3` targets Vue `^3.5`, Mermaid `^11.12.2`, and Node.js 18 or newer for development and builds.

The ESM build is the preferred browser-bundler entry. A CommonJS-compatible `.cjs` entry is also published. `@wbc-ui/core` is optional and is required when `wbcObj` or `asWbc` composition is used.

The component requires a browser DOM to render Mermaid SVG. Server rendering produces the component shell; Mermaid rendering starts after client mount.

Before a stable release, the project validates current Chromium, Firefox, and WebKit releases through its browser release gate.
