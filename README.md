# ✨ magic — beautiful Claude answers, in your language

Every Claude reply, rendered as a polished, colorful widget: cards, icons, and
syntax-highlighted code with a copy button. It answers in **whatever language you
write in**, and sets the writing direction automatically — right-to-left for
Hebrew/Arabic/Persian, left-to-right for the rest.

No app modification, no code injection — just an allowed Claude Code hook.

## Requirements

- **Claude Code** (works inside the Claude Desktop app too).
- The **`visualize` MCP** (provides `show_widget`). Present in Claude Desktop /
  Cowork. Without it, Claude falls back to plain markdown.

## Install

```bash
claude plugin marketplace add <your-github-user>/claude-magic
claude plugin install magic@claude-magic
```

Then `/reload-plugins` or restart.

## Use

Just chat. Say **`no widget`** for a plain reply on a single turn.

## How it works

A `UserPromptSubmit` hook reminds Claude, each turn, to render its reply as a
widget in your language and direction. Pure instruction — it changes nothing in
your app.

## License

MIT.
