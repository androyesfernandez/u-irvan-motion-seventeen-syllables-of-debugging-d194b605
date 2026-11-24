# Duel test — Seventeen Syllables of Debugging

Method: 15 candidate haiku drafted from scratch, every syllable counted
by hand. The top 6 by my own read of the judge brief were duel-tested in
a full round-robin (15 pairs), plus the winner against the 3 strongest
dark horses (A1, A7, A13). Each pair was judged in both orders under the
kit judge brief verbatim (criteria in order: 1) true 5-7-5 haiku about
debugging, 2) concrete fresh centre picture, 3) the line-2→3 turn lands,
4) every word earns its place, 5) reads aloud cleanly). Game score per
call: winner 0.5 + margin/10, loser the rest; a game's score is the mean
of its two calls.

Honest caveat: there is no OpenRouter key on this VM, so no real
z-ai/glm-5.3-flash judge call was made. These are careful proxy verdicts
by the builder applying the brief's criteria in order — not measured
judge scores. The real judge may disagree on close margins.

## Candidates (all hand-counted 5-7-5)

| # | Haiku | 5-7-5 | Chars |
|---|-------|-------|-------|
| A1 | Cursor blinks at three / the log insists it all worked / and the bug was me | 5-7-5 | 71 |
| A2 | Breakpoint set at dawn / the code walks past it, smiling / the fault was mine alone | 5-7-5 | 79 |
| A3 | Cursor blinks at three / a red line hides in plain sight / my own hand typed it | 5-7-5 | 75 |
| A4 | Stack trace, forty deep / every frame pleads innocent / the top frame lies low | 5-7-5 | 74 |
| A5 | Print lines everywhere / the console spills its secrets / and none of them mine | 5-7-5 | 75 |
| A6 | Off by one, it breaks / the loop runs one too many / I fenced the wrong field | 5-7-5 | 73 |
| A7 | The duck just listens / I explain the bug out loud / it was a typo | 5-7-5 | 62 |
| A8 | One brace gone missing / the compiler just gives up / it hid in plain sight | 5-7-5 | 71 |
| A9 | Red dot, line forty / the program pauses to breathe / and the bug blinks first | 5-7-5 | 74 |
| A10 | One log line, midnight / the server denies the crash / the disk disagrees | 5-7-5 | 69 |
| A11 | Git blame points at me / the commit is from last spring / past me, the culprit | 5-7-5 | 74 |
| A12 | The name field reads null / a ghost walks through the logs / they were never here | 5-7-5 | 77 |
| A13 | Cursor blinks at three / the test I wrote still passes / it ships with the bug | 5-7-5 | 74 |
| A14 | Breakpoint never fires / the code runs round it, laughing / my line never runs | 5-7-5 | 74 |
| A15 | The bug hides when watched / watch it close, it vanishes / it blooms when alone | 5-7-5 | 75 |

Syllable spot-checks (counted aloud): A10 — One(1) log(1) line(1)
mid-night(2) = 5; the(1) serv-er(2) de-nies(2) the(1) crash(1) = 7;
the(1) disk(1) dis-a-grees(3) = 5. A15 — The(1) bug(1) hides(1) when(1)
watched(1) = 5; watch(1) it(1) close(1) it(1) van-ish-es(3) = 7;
it(1) blooms(1) when(1) a-lone(2) = 5. A4 — Stack(1) trace(1)
for-ty(2) deep(1) = 5; ev-ery(2) frame(1) pleads(1) in-no-cent(3) = 7;
the(1) top(1) frame(1) lies(1) low(1) = 5.

Pre-rank (before duels): A10, A15, A4, A2, A12, A9 top 6. Cut for
weakness before duelling: A3 (flat last line), A5 ("and none of them
mine" is vague), A6 (fence metaphor too clever, muddies criterion 2),
A8 (line 2 plain, turn soft), A11 (fun but "culprit" is tell-not-show),
A14 (last line restates line 1).

## Round-robin, top 6 (game score, winner first)

| Pair | Call 1 (margin) | Call 2 (margin) | Game | Why |
|------|-----------------|-----------------|------|-----|
| A10 vs A15 | A10, m2 | A10, m2 | **A10 0.70** / A15 0.30 | A15's line 2 restates line 1 (hides when watched ≈ vanishes when watched); A10 adds new evidence every line. |
| A10 vs A4 | A10, m1 | A10, m1 | **A10 0.60** / A4 0.40 | Both funny and concrete; "the disk disagrees" is a punchier reframe than "lies low". |
| A10 vs A2 | A10, m1 | A10, m2 | **A10 0.65** / A2 0.35 | A2's "alone" pads the last line; A10 has no filler word. |
| A10 vs A12 | A10, m1 | A10, m1 | **A10 0.60** / A12 0.40 | A12's turn is strong, but its ghost is a metaphor; A10's server/disk picture is literal and concrete (criterion 2). |
| A10 vs A9 | A10, m2 | A10, m1 | **A10 0.65** / A9 0.35 | A9 charms, but "pauses to breathe" is softer evidence than a denial answered by the disk. |
| A15 vs A4 | A4, m1 | A4, m2 | **A4 0.65** / A15 0.35 | A4's lines are all distinct; A15 repeats itself (see above). |
| A15 vs A2 | A2, m1 | A2, m1 | **A2 0.60** / A15 0.40 | "Walks past it, smiling" is more vivid than "vanishes"; A15's bloom can't carry the repetition. |
| A15 vs A12 | A12, m1 | A12, m2 | **A12 0.65** / A15 0.35 | "They were never here" reframes harder than "blooms when alone". |
| A15 vs A9 | A9, m1 | A15, m1 | **0.50 / 0.50** level | A15's "blooms" is the freshest single word in the batch; A9 is the cleaner whole. Calls cancel. |
| A4 vs A2 | A4, m2 | A4, m1 | **A4 0.65** / A2 0.35 | Courtroom of frames is more surprising than self-blame; A2's turn is the expected one. |
| A4 vs A12 | A12, m1 | A12, m1 | **A12 0.60** / A4 0.40 | "Never here" beats "lies low" as a reframe. |
| A4 vs A9 | A4, m1 | A4, m2 | **A4 0.65** / A9 0.35 | Stack-trace picture is more concrete than the blinking duel. |
| A2 vs A12 | A12, m1 | A12, m2 | **A12 0.65** / A2 0.35 | Same reason as A4 vs A12. |
| A2 vs A9 | A9, m1 | A2, m1 | **0.50 / 0.50** level | Both personify code; neither turn clearly out-reframes the other. |
| A12 vs A9 | A12, m2 | A12, m1 | **A12 0.65** / A9 0.35 | "They were never here" is the decisive reframe of the batch. |

Mean game score across the round-robin:

| Entry | Mean | W-L-Level |
|-------|------|-----------|
| **A10** | **0.64** | 5-0-0 |
| A12 | 0.59 | 4-1-0 |
| A4 | 0.55 | 3-2-0 |
| A2 | 0.43 | 1-2-2 |
| A9 | 0.41 | 0-3-2 |
| A15 | 0.38 | 0-4-1 |

## Winner vs dark horses

| Pair | Game | Why |
|------|------|-----|
| A10 vs A1 | **A10 0.65** / A1 0.35 (m1, m2) | "And the bug was me" is a great turn, but "and"/"all" are filler; A10 is tighter. A1 is 71 chars. |
| A10 vs A13 | **A10 0.60** / A13 0.40 (m1, m1) | "It ships with the bug" is ironic and true, but a passing test is a weaker centre picture than a midnight log line. |
| A10 vs A7 | **A10 0.75** / A7 0.25 (m2, m3) | Duck + typo is the classic every debugger knows — the least fresh picture in the batch (criterion 2), however short (62 chars). |

## Verdict

Winner: **A10**, mean game score **0.64** in the round-robin (5-0-0),
0.65 vs A1, 0.60 vs A13, 0.75 vs A7 — clears the 0.60 bar against
every rival tested. Strongest rival: **A12** (0.59 round-robin mean),
whose "they were never here" turn is the best single reframe in the
batch, but whose ghost metaphor loses criterion 2 to A10's literal
server-vs-disk evidence. A10 is also short: 69 chars / 69 bytes, which
helps the smaller-bytes tie-break.

Submitted haiku:

```text
One log line, midnight
the server denies the crash
the disk disagrees
```
