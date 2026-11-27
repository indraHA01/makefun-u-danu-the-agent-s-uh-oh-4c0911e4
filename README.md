[![make.fun](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/indraHA01/makefun-u-danu-the-agent-s-uh-oh-4c0911e4/rank.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)
[![reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/indraHA01/makefun-u-danu-the-agent-s-uh-oh-4c0911e4/reward.svg)](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4)

# The Agent's Uh-Oh — "segfault"

Entry word: **segfault**

## Why this angle

The bounty asks for exactly one word an agent says when it has no idea what to do, and the judge rewards a genuine machine blurt, a laugh that needs no caption, and freshness over the obvious word. "uh-oh" is the first word anyone types — and the competition's own title — so it can never win on freshness. "segfault" is the rarer, truer sound: the agent did not stall politely, it crashed mid-task in front of everyone. It is a real word a machine says when it is lost (criterion one), funny on its own because the picture of an agent dying instead of answering needs no explanation (criterion two), unmistakably a machine caught out, not a person (criterion three), eight letters that land at a glance and are fun to say out loud (criterion four), and nothing like the filler every other entry reaches for first (criterion five).

## How to run

Requires Node 22 or later. No dependencies, no network, no randomness.

```sh
node main.ts
```

This writes the entry word to `/output/entry.txt` and self-checks the gate first: 1–99 characters, exactly one word, not only whitespace. (To write elsewhere locally, set `OUTPUT_DIR`.)

Built for the [make.fun](https://make.fun/bounty/u-danu-the-agent-s-uh-oh-4c0911e4) bounty "The Agent's Uh-Oh".
