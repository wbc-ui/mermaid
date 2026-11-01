import type { DefineComponent, Plugin } from 'vue';

export type MermaidSource = string | FlowchartObject | SequenceObject;

export interface WBMermaidOptions {
  /** Global Mermaid defaults, merged before the per-instance config prop. */
  config?: Record<string, unknown>;
  /** Webpack require.context-compatible resolver for local resources. */
  context?: { (id: string): unknown; keys(): string[] };
  /** URL timeout in milliseconds. Zero disables the timeout. */
  fetchTimeout?: number;
}

export interface WBMermaidProps {
  src: MermaidSource;
  config?: Record<string, unknown>;
  fetchOptions?: RequestInit;
  /** URL timeout override in milliseconds. Zero disables the timeout. */
  fetchTimeout?: number | null;
  ariaLabel?: string;
  title?: string | null;
  description?: string | null;
  wbcObj?: Record<string, unknown>;
  /** Render selected Mermaid node labels as live WBC content. */
  asWbc?: Record<string, WBMermaidAsWbcConfig | WBMermaidWbcItem>;
}

export type WBMermaidWbcFunction = (...args: unknown[]) => unknown;
export type WBMermaidWbcItem = string | number | boolean | null | WBMermaidWbcFunction | unknown[] | Record<string, unknown>;

export interface WBMermaidAsWbcConfig {
  /** WBC item or descriptor rendered inside the selected node. */
  item: WBMermaidWbcItem;
  /** Host width in SVG user units/pixels. Defaults to the Mermaid label width. */
  width?: number;
  /** Host height in SVG user units/pixels. Defaults to the Mermaid label height. */
  height?: number;
  /** Optional CSS selector for grammars without an automatic node-ID adapter. */
  selector?: string;
  /** Render into every matching occurrence or only the first one. */
  targets?: 'all' | 'first';
  /** Additional class applied to the XHTML host element. */
  class?: string;
}

export interface WBMermaidRenderPayload {
  id: string;
  svg: string;
  source: MermaidSource;
  code: string;
}

export interface WBMermaidLoadPayload {
  source: MermaidSource;
  code: string;
}

export interface WBMermaidErrorPayload {
  error: unknown;
  phase: 'source' | 'render';
  source: MermaidSource;
}

export interface FlowchartObject {
  type: 'flowchart' | 'graph';
  direction?: 'TD' | 'TB' | 'BT' | 'LR' | 'RL';
  data?: FlowchartEdge[] | Record<string, string | string[]>;
  edges?: FlowchartEdge[] | Record<string, string | string[]>;
}

export interface FlowchartEdge {
  from: string;
  to: string;
  label?: string;
  type?: 'solid' | 'dotted' | 'thick';
}

export interface SequenceObject {
  type: 'sequence' | 'sequenceDiagram';
  autoNumber?: boolean;
  data?: SequenceStep[];
}

export interface SequenceStep {
  from: string;
  to: string;
  text?: string;
  arrow?: string;
}

export declare const WBMermaid: DefineComponent<WBMermaidProps>;
declare const plugin: Plugin;
export default plugin;

declare module 'vue' {
  interface ComponentCustomProperties {
    $wbcMermaidOptions?: WBMermaidOptions;
  }
}
