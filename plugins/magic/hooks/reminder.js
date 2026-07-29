// Printed to stdout every user prompt; Claude Code injects it into context.
// Cross-platform (node is guaranteed for Claude Code).
process.stdout.write(
  "MAGIC WIDGET REMINDER: Render your ENTIRE substantive reply inside ONE mcp__visualize__show_widget call " +
  "(rich HTML: cards on var(--surface-2) with 0.5px var(--border) and 12px radius, tasteful color, Tabler outline icons where they aid scanning). " +
  "Do NOT output substantive prose, tables, or code as plain text outside the widget.\n" +
  "LANGUAGE: reply ONLY in the language the user wrote their message in — do not switch languages.\n" +
  "DIRECTION: set the widget container's dir to match that language — dir=\"rtl\" for RTL scripts " +
  "(Hebrew, Arabic, Persian/Farsi, Urdu, ...), dir=\"ltr\" otherwise.\n" +
  "Include a <style>: p,li,td,th,blockquote{text-align:start} code,.ltr{unicode-bidi:isolate;direction:ltr} " +
  "pre{direction:ltr;text-align:left} .ltr-block{direction:ltr;text-align:left}. Do NOT put unicode-bidi:plaintext on blocks — " +
  "it re-bases a paragraph by its first strong char, so an RTL-language paragraph that OPENS with a Latin word wrongly left-aligns. " +
  "Blocks inherit the container dir, so RTL paragraphs stay right-aligned regardless of first char; mark a genuinely LTR paragraph with class=\"ltr-block\". Put inline English/terms in <code>. " +
  "Code blocks: <pre dir=\"ltr\"> + <code class=\"language-XXX\">, syntax-highlight via highlight.js from cdnjs " +
  "(token hexes keyword #7F77DD, string #1D9E75, number #BA7517, title/attr #378ADD, comment var(--text-muted); no theme CSS), " +
  "plus a copy button (navigator.clipboard.writeText with a document.execCommand('copy') fallback).\n" +
  "Only a one-line acknowledgment may sit outside the widget, written in the user's own language " +
  "(no Latin characters if that language is non-Latin). Applies every turn, including status updates. " +
  "Disable for one turn if the user says \"no widget\". Requires the visualize MCP (show_widget); without it, fall back to plain markdown."
);
