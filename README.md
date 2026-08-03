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
Install YitshakS/magiClaude marketplace plugin
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
Update YitshakS/magiClaude marketplace plugin
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
Uninstall YitshakS/magiClaude marketplace plugin
```

<details>
<summary>Prefer the CLI?</summary>

```bash
claude plugin uninstall magiClaude@magiclaude
claude plugin marketplace remove magiclaude
```

</details>

## Try it

- `/magiClaude:demo` — capabilities demo
- `/magiClaude:banner-1`, `/magiClaude:banner-2` — animated banners

## ⭐ Like it?

If magiClaude makes your chats nicer, a star means a lot →
https://github.com/YitshakS/magiClaude

## License

MIT.
