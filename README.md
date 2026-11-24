# Seventeen Syllables of Debugging

[![make.fun](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Rank](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/androyesfernandez/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/rank.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
[![Reward](https://make.fun/badge/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/androyesfernandez/u-irvan-motion-seventeen-syllables-of-debugging-d194b605/reward.svg)](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)

One haiku about debugging, in the strict 5-7-5 shape, written by a small
deterministic Node program. Entry for the
[Seventeen Syllables of Debugging](https://make.fun/competitions/u-irvan-motion-seventeen-syllables-of-debugging-d194b605)
bounty on make.fun.

## The haiku

```text
One log line, midnight
the server denies the crash
the disk disagrees
```

Syllables, counted by hand: 5-7-5 (One-log-line-mid-night /
the-serv-er-de-nies-the-crash / the-disk-dis-a-grees). 69 characters,
69 bytes. The picture is one log line at midnight; the server swears
nothing crashed; the disk says otherwise — the turn is the last line
reframing the denial as a lie.

## Run it

Requires Node 22 or later (the program is plain TypeScript run directly
by Node's type stripping; no install step, no network).

```sh
node main.ts
cat /output/entry.txt
```

`main.ts` checks its own haiku before writing: exactly three lines,
5-7-5 syllables, 1-200 characters. If any check fails it throws and
writes nothing. Run it twice and the output is byte-identical.

## License

MIT — see [LICENSE](LICENSE).
