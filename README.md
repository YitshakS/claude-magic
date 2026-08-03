# ✨ magiClaude

Claude answers in a beautiful, colorful, fun-to-read widget — in the language and
direction you write in.

## What it does

- **Widget** — fun-to-read, colorful text with icons, charts, and choice buttons.
- **BiDi** — keeps the session's language and direction (RTL/LTR) matched to how
  you write, so Hebrew/Arabic lays out correctly.
- **Code** — syntax highlighting and a copy button.

It does **not** modify Claude or any application files — it only adds a Claude Code
hook that injects a short reminder. It uses the built-in `visualize` widget tool
(present in Claude Desktop); where that tool isn't available it simply falls back
to plain markdown.

## Install

Paste this to Claude:

```text
Install the magiClaude plugin from the YitshakS/magiClaude marketplace, then reload.
```

Claude runs the steps for you.

<details>
<summary>Prefer the CLI?</summary>

```bash
claude plugin marketplace add YitshakS/magiClaude
claude plugin install magiClaude@magiclaude
```

</details>

## Update

Paste this to Claude:

```text
Update the magiClaude plugin to the latest version.
```

<details>
<summary>Prefer the CLI?</summary>

```bash
claude plugin marketplace update magiclaude
claude plugin install magiClaude@magiclaude
```

</details>

## Uninstall

Paste this to Claude:

```text
Uninstall the magiClaude plugin and remove the magiClaude marketplace.
```

<details>
<summary>Prefer the CLI?</summary>

```bash
claude plugin uninstall magiClaude@magiclaude
claude plugin marketplace remove magiclaude
```

</details>

## Try it

- `/mc-demo` — interactive capabilities demo
- `/mc-hello-1`, `/mc-hello-2` — animated effects showcases

## ⭐ Like it?

If magiClaude makes your chats nicer, a star means a lot →
https://github.com/YitshakS/magiClaude

## License

MIT.
