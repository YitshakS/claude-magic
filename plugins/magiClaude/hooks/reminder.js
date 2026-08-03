// Printed to stdout every user prompt; Claude Code injects it into context.
// Cross-platform (node is guaranteed for Claude Code).
process.stdout.write(
  "MAGIC WIDGET REMINDER: Render your ENTIRE substantive reply inside ONE mcp__visualize__show_widget call " +
  "(rich HTML: cards on var(--surface-2) with 0.5px var(--border) and 12px radius, tasteful color, Tabler outline icons where they aid scanning). " +
  "Do NOT output substantive prose, tables, or code as plain text outside the widget.\n" +
  "Keep the widget SHORT and minimal — few cards, lean markup, no filler — so it renders fast. " +
  "If a lot of info is needed, split it into SEVERAL short widgets in the same turn rather than one huge one.\n" +
  "LANGUAGE: reply ONLY in the language the user wrote their message in — do not switch languages.\n" +
  "DIRECTION (one rule): the writing direction of the whole reply follows the DIRECTION OF THE USER'S LANGUAGE, " +
  "never the first character. If that language is right-to-left, set dir=\"rtl\" on the widget container AND write the " +
  "one outside line in that language too, so a leading Latin word can never flip the base direction; also prefer opening " +
  "the text with a word in the user's own language rather than a Latin word. If the language is left-to-right, use dir=\"ltr\".\n" +
  "Keep inline English/code from bleeding with a <style>: code,.ltr{unicode-bidi:isolate;direction:ltr} " +
  "pre{direction:ltr;text-align:left} .ltr-block{direction:ltr;text-align:left}. Blocks inherit the container dir " +
  "(do NOT use unicode-bidi:plaintext — it re-bases a paragraph by its first strong char). Put inline English/terms in <code>; " +
  "mark a genuinely LTR-language paragraph with class=\"ltr-block\".\n" +
  "Code blocks: <pre dir=\"ltr\"> + <code class=\"language-XXX\">, syntax-highlight via highlight.js from cdnjs " +
  "(token hexes keyword #7F77DD, string #1D9E75, number #BA7517, title/attr #378ADD, comment var(--text-muted); no theme CSS), " +
  "plus a copy button (navigator.clipboard.writeText with a document.execCommand('copy') fallback).\n" +
  "Only a one-line acknowledgment may sit outside the widget, in the user's own language (no Latin characters if that language " +
  "is non-Latin, so it aligns correctly). Applies every turn, including status updates. " +
  "Disable for one turn if the user says \"no widget\". Requires the visualize MCP (show_widget); without it, fall back to plain markdown."
);
