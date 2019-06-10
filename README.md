# hitsplat: a RuneScape 3 latency testing tool

A Node.js-based CLI that will tell you the RuneScape server with the lowest ping.

## Usage

You'll need to have Node.js installed. If you don't already have Node.js, you can find one of the installers [here](https://nodejs.org/en/download/).

To use `hitsplat` with the `npx` command line tool (automatically installed with Node.js):

```bash
npx hitsplat
```

Using `npx ` automatically downloads and runs `hitsplat` (or any other module) and then throws that download away. When you run it again, some parts will be cached but you'll still need a network connection.

To use `hitsplat` with the `npm` command line tool (automatically installed):

```bash
npm instal -g hitsplat
hitsplat
```

Using `npm` allows you to permanently install `hitsplat` on your computer. You will have all needed code and be able to run `hitsplat` whever you want without the need to downloads everything again.

## Dependencies

Total depende

```bash
hitsplat@1.0.0 /Users/cyren/GitHub/rs/hitsplat
├─┬ boxen@4.0.0
│ ├─┬ ansi-align@3.0.0
│ │ └── string-width@3.1.0 deduped
│ ├── camelcase@5.3.1
│ ├── chalk@2.4.2 deduped
│ ├── cli-boxes@2.2.0
│ ├─┬ string-width@3.1.0
│ │ ├── emoji-regex@7.0.3
│ │ ├── is-fullwidth-code-point@2.0.0
│ │ └─┬ strip-ansi@5.2.0
│ │   └── ansi-regex@4.1.0
│ ├── term-size@2.1.0
│ ├── type-fest@0.5.2
│ └─┬ widest-line@3.1.0
│   └─┬ string-width@4.1.0
│     ├── emoji-regex@8.0.0
│     ├── is-fullwidth-code-point@3.0.0
│     └── strip-ansi@5.2.0 deduped
├─┬ chalk@2.4.2
│ ├─┬ ansi-styles@3.2.1
│ │ └─┬ color-convert@1.9.3
│ │   └── color-name@1.1.3
│ ├── escape-string-regexp@1.0.5
│ └─┬ supports-color@5.5.0
│   └── has-flag@3.0.0
├─┬ ping@0.2.2
│ ├── q@1.5.1
│ └── underscore@1.9.1
└─┬ yargs@13.2.4
  ├─┬ cliui@5.0.0
  │ ├── string-width@3.1.0 deduped
  │ ├── strip-ansi@5.2.0 deduped
  │ └─┬ wrap-ansi@5.1.0
  │   ├── ansi-styles@3.2.1 deduped
  │   ├── string-width@3.1.0 deduped
  │   └── strip-ansi@5.2.0 deduped
  ├─┬ find-up@3.0.0
  │ └─┬ locate-path@3.0.0
  │   ├─┬ p-locate@3.0.0
  │   │ └─┬ p-limit@2.2.0
  │   │   └── p-try@2.2.0
  │   └── path-exists@3.0.0
  ├── get-caller-file@2.0.5
  ├─┬ os-locale@3.1.0
  │ ├─┬ execa@1.0.0
  │ │ ├─┬ cross-spawn@6.0.5
  │ │ │ ├── nice-try@1.0.5
  │ │ │ ├── path-key@2.0.1
  │ │ │ ├── semver@5.7.0
  │ │ │ ├─┬ shebang-command@1.2.0
  │ │ │ │ └── shebang-regex@1.0.0
  │ │ │ └─┬ which@1.3.1
  │ │ │   └── isexe@2.0.0
  │ │ ├─┬ get-stream@4.1.0
  │ │ │ └─┬ pump@3.0.0
  │ │ │   ├─┬ end-of-stream@1.4.1
  │ │ │   │ └── once@1.4.0 deduped
  │ │ │   └─┬ once@1.4.0
  │ │ │     └── wrappy@1.0.2
  │ │ ├── is-stream@1.1.0
  │ │ ├─┬ npm-run-path@2.0.2
  │ │ │ └── path-key@2.0.1 deduped
  │ │ ├── p-finally@1.0.0
  │ │ ├── signal-exit@3.0.2
  │ │ └── strip-eof@1.0.0
  │ ├─┬ lcid@2.0.0
  │ │ └── invert-kv@2.0.0
  │ └─┬ mem@4.3.0
  │   ├─┬ map-age-cleaner@0.1.3
  │   │ └── p-defer@1.0.0
  │   ├── mimic-fn@2.1.0
  │   └── p-is-promise@2.1.0
  ├── require-directory@2.1.1
  ├── require-main-filename@2.0.0
  ├── set-blocking@2.0.0
  ├── string-width@3.1.0 deduped
  ├── which-module@2.0.0
  ├── y18n@4.0.0
  └─┬ yargs-parser@13.1.1
    ├── camelcase@5.3.1 deduped
    └── decamelize@1.2.0
```

## Contributing

Not sure I'll be maintaining this actively. If you want to contribute, just PR and write tests for your PR  – I'll do my best to merge whenever PRs come in.
