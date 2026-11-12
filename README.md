<div align="center">

# 45 Assignments — TypeScript & Node.js

**A dependency-free collection of 43 standalone TypeScript programming exercises, each compiled to executable CommonJS.**

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![CommonJS](https://img.shields.io/badge/Module%20System-CommonJS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://nodejs.org/api/modules.html)
[![Exercises](https://img.shields.io/badge/Exercises-43-4B32C3?style=for-the-badge&logo=typescript&logoColor=white)](#-exercise-index)
[![Dependencies](https://img.shields.io/badge/Runtime%20Dependencies-None-success?style=for-the-badge)](#-tech-stack)
[![License](https://img.shields.io/badge/License-Not%20Specified-lightgrey?style=for-the-badge)](#-license)

[Overview](#-project-overview) •
[Tech Stack](#-tech-stack) •
[Architecture](#-architecture-overview) •
[Project Structure](#-project-structure) •
[Setup](#-installation--setup) •
[Exercise Index](#-exercise-index) •
[Contributing](#-contributing-guidelines) •
[Contact](#-social--contact)

</div>

---

## 📌 Project Overview

### What this project is

This repository is a structured collection of **43 independent TypeScript exercises**, organized into numbered folders from `Project 02` through `Project 45`. Each folder is a self-contained program containing:

- `main.ts` — the TypeScript source file
- `main.js` — the compiled JavaScript output, committed alongside the source
- `tsconfig.json` — the compiler configuration for that exercise

The exercises progress from basic variables and string manipulation through arrays, conditionals, loops, functions, interfaces, objects, rest parameters, and array-copy semantics.

> **Note on numbering:** The repository contains 43 folders for exercise numbers 02–45 because exercise 01 is not present in the working tree and exercises 07 and 08 are combined in a single folder (`Project 07 and 08`).

### What problem it solves

The repository implements a sequential TypeScript assignment set. Each program demonstrates a specific language or JavaScript runtime concept and produces its result through `console.log`. There is no shared application domain, user workflow, or business process connecting the exercises.

### System type

**Command-line exercise collection — no frontend, no backend, no HTTP service, no database, and no distributed components.**

Every program is a standalone script executed directly by the Node.js runtime after TypeScript compilation. There is no package manifest, no dependency graph, no build orchestrator, and no shared library layer.

---

## 🧰 Tech Stack

### Languages

| Technology | Role | Evidence in repository |
| --- | --- | --- |
| **TypeScript** | Authoring language for all exercises | `main.ts` in every project folder |
| **JavaScript** | Compiled output executed by Node.js | `main.js` in every project folder |
| **JSON** | Compiler configuration | `tsconfig.json` in every project folder |

### Runtime

| Technology | Role | Evidence in repository |
| --- | --- | --- |
| **Node.js** | Executes the compiled CommonJS files | `"module": "commonjs"` (or `"NodeNext"` in two projects); no browser APIs are used |

### Frontend

**None.** There is no UI framework, HTML, CSS, bundler, or client-side build pipeline. All output is written to standard output via `console.log`.

### Backend

**None.** There is no server, router, controller, middleware, ORM, database driver, or scheduled process. The code performs no network I/O.

### Tooling

| Technology | Role | Evidence in repository |
| --- | --- | --- |
| **TypeScript Compiler (`tsc`)** | Transpiles `main.ts` to `main.js` | Per-folder `tsconfig.json` |
| **Strict type checking** | Enables all strict checks | `"strict": true` |
| **CommonJS module mode** | Module emit format | `"module": "commonjs"` (41 projects) |
| **NodeNext module mode** | Module emit format for two projects | `Project 24`, `Project 29` |
| **ES2016 target** | JavaScript language target | `"target": "es2016"` |
| **ES module interop** | CommonJS import interoperability | `"esModuleInterop": true` |
| **Casing enforcement** | Case-sensitive import consistency | `"forceConsistentCasingInFileNames": true` |
| **Library type skipping** | Skips `.d.ts` checking | `"skipLibCheck": true` |

### Infrastructure

**None.** The repository contains no CI configuration, container definitions, infrastructure-as-code, deployment manifests, or hosting configuration.

### Third-party dependencies

**None declared.** There is no `package.json`, `package-lock.json`, `node_modules`, or any dependency manifest anywhere in the repository.

---

## 🏗️ Architecture Overview

### High-level design

The repository follows a **flat, folder-per-exercise architecture**:

```text
Repository root
├── Project 02/
│   ├── main.ts          ← source of truth
│   ├── main.js          ← committed compiler output
│   └── tsconfig.json    ← isolated compiler settings
├── Project 03/
│   └── ... same three files
├── ...
└── Project 45/
    └── ... same three files
```

### Interaction between major parts

```text
main.ts
   │
   │  tsc -p <project folder>
   ▼
main.js  ──── node main.js ────►  stdout (console.log)
   ▲
   │
tsconfig.json (compiler options)
```

1. A developer edits `main.ts` inside one project folder.
2. The TypeScript compiler reads that folder's `tsconfig.json`.
3. JavaScript is emitted as `main.js` in the same directory.
4. Node.js executes `main.js`, which prints results to the terminal.

### Responsibility boundaries

| Layer | Responsibility | Boundary |
| --- | --- | --- |
| **Exercise source** | Implements one assignment in isolation | No imports, exports, or `require()` calls exist in any `main.ts` |
| **Compiler configuration** | Controls emit and type checking | One `tsconfig.json` per folder; settings are not inherited from the repository root |
| **Compiled output** | Runtime artifact | Committed to version control and executed directly |
| **Runtime** | Provides `console` and standard JavaScript semantics | Node.js only; no browser, no external services |
| **Repository** | Organizational container only | Provides no shared code, scripts, or build orchestration |

### Key architectural characteristics

- **Zero coupling:** No project imports from another project. Each folder can be copied out and run independently.
- **No shared modules:** No utility library, barrel export, or common configuration file exists.
- **No state layer:** All data is created as literals inside each script; nothing is persisted between runs.
- **Duplicated configuration:** Each folder carries its own complete `tsconfig.json`. 41 projects use `commonjs`; `Project 24` and `Project 29` use `NodeNext` with `NodeNext` module resolution.
- **Committed build artifacts:** `main.js` is stored in version control next to `main.ts`, so the programs can run without a compiler as long as Node.js is installed.

---

## 📂 Project Structure

```text
Afaq 45 Assignment/
│
├── README.md                     # This document
│
├── Project 02/                   # Personal Message
│   ├── main.ts
│   ├── main.js
│   └── tsconfig.json
│
├── Project 03/                   # Name Cases
├── Project 04/                   # Famous Quote
├── Project 05/                   # Famous Quote 2
├── Project 06/                   # Stripping Names
├── Project 07 and 08/            # Number Eight (combined exercises)
├── Project 09/                   # Favorite Number
├── Project 10/                   # Adding Comments
├── Project 11/                   # Names
├── Project 12/                   # Greetings
├── Project 13/                   # Your Own Array
├── Project 14/                   # Guest List
├── Project 15/                   # Changing Guest List
├── Project 16/                   # More Guests
├── Project 17/                   # Shrinking Guest List
├── Project 18/                   # Seeing the World
├── Project 19/                   # Dinner Guests
├── Project 20/                   # Array of Items
├── Project 21/                   # TypeScript Objects
├── Project 22/                   # Intentional Error
├── Project 23/                   # Conditional Tests
├── Project 24/                   # More Conditional Tests
├── Project 25/                   # Alien Colors #1
├── Project 26/                   # Alien Colors #2
├── Project 27/                   # Alien Colors #3
├── Project 28/                   # Stages of Life
├── Project 29/                   # Favorite Fruit
├── Project 30/                   # Hello Admin
├── Project 31/                   # No Users
├── Project 32/                   # Checking Usernames
├── Project 33/                   # Ordinal Numbers
├── Project 34/                   # Pizzas
├── Project 35/                   # Animals
├── Project 36/                   # T-Shirt
├── Project 37/                   # Large Shirts
├── Project 38/                   # Cities
├── Project 39/                   # City Names
├── Project 40/                   # Album
├── Project 41/                   # Magicians
├── Project 42/                   # Great Magicians
├── Project 43/                   # Unchanged Magicians
├── Project 44/                   # Sandwiches
└── Project 45/                   # Cars
```

### Important files and directories

| Path | Role |
| --- | --- |
| `Project XX/main.ts` | TypeScript source implementing the exercise. This is the authoritative code. |
| `Project XX/main.js` | Compiled CommonJS output. Directly executable with Node.js. |
| `Project XX/tsconfig.json` | Compiler settings for that folder. Contains the standard TypeScript-generated option template with `strict`, `commonjs` or `NodeNext`, `es2016`, and `skipLibCheck` enabled. |
| `README.md` | Repository-level documentation only. It is not imported by any program. |

### Compiler configuration differences

| Projects | `module` | `moduleResolution` | Notes |
| --- | --- | --- | --- |
| 41 projects (all except 24 and 29) | `commonjs` | Commented out (`node10` default) | Standard CommonJS emit |
| `Project 24`, `Project 29` | `NodeNext` | `NodeNext` | Node.js-native module resolution mode |

All other active compiler options are identical across the repository.

---

## ⚙️ Environment Configuration

### Environment variables

**No environment variables are read, required, or referenced anywhere in the source code.** There is no `.env`, `.env.example`, or configuration loader.

| Variable | Purpose | Required / Optional |
| --- | --- | --- |
| — | No environment variables are used by this project | — |

### Tooling prerequisites

| Requirement | Purpose | Mandatory / Optional |
| --- | --- | --- |
| **Node.js** | Executes the committed `main.js` files | **Mandatory** to run any exercise |
| **TypeScript compiler (`tsc`)** | Recompiles `main.ts` after source changes | **Optional** — required only when rebuilding |
| **Internet access** | Only needed if fetching TypeScript through `npx` | Optional |

The compiler behavior is configured entirely through each folder's `tsconfig.json`; no shell environment or machine-level configuration is part of the project.

---

## 🚀 Installation & Setup

### Prerequisites

- A Node.js installation capable of running CommonJS JavaScript.
- A TypeScript compiler if you intend to recompile the sources. The configuration uses options such as `strict`, `esModuleInterop`, and `forceConsistentCasingInFileNames`, which are supported by current TypeScript releases.

### 1. Clone the repository

```bash
git clone https://github.com/afaqulislam/45-Assignments-TypeScript-Node.js.git
cd 45-Assignments-TypeScript-Node.js
```

### 2. Install dependencies

**Nothing to install.** The repository has no `package.json` and no third-party packages. Do not run `npm install`; it has no manifest to operate on.

### 3. Run a precompiled exercise

Because `main.js` is committed, Node.js alone is sufficient:

```bash
node "Project 02/main.js"
```

Windows PowerShell:

```powershell
node ".\Project 02\main.js"
```

### 4. Recompile an exercise (optional)

If you modify `main.ts`, rebuild that folder's output using its own `tsconfig.json`.

Using a locally available compiler:

```bash
cd "Project 45"
tsc -p .
node main.js
```

Using `npx` without a local installation:

```bash
cd "Project 45"
npx -p typescript tsc -p .
node main.js
```

Windows PowerShell:

```powershell
Set-Location ".\Project 45"
npx -p typescript tsc -p .
node .\main.js
```

> **Important:** Always compile from inside the target project folder, or pass `-p` with the folder containing `tsconfig.json`. Compiling from the repository root is not supported because there is no root-level `tsconfig.json`.

### Backend / frontend separation

**Not applicable.** The repository contains neither a backend nor a frontend. Every folder is an independent command-line program.

---

## 🔄 Runtime Behavior

### How the application starts

There is no single application entry point. Each exercise starts independently when its compiled file is passed to Node.js:

```bash
node "Project 02/main.js"
```

The process performs the following sequence:

1. Node.js loads `main.js` as a CommonJS script.
2. Top-level statements execute synchronously in file order.
3. Output is written to the terminal through `console.log`.
4. The process exits when the script finishes. No server, watcher, or long-running loop is started.

### Data flow

```text
Hard-coded literals
      │
      ▼
Variables / arrays / objects / interfaces
      │
      ▼
Conditionals, loops, functions, array methods
      │
      ▼
console.log(...) ──► terminal output
```

- **Input:** All values are embedded in the source. No command-line arguments, files, environment variables, or user input are read.
- **Processing:** Each script applies its assigned logic — string transformation, array iteration, conditional evaluation, object construction, and similar operations.
- **Output:** Human-readable text and JavaScript values printed to standard output.
- **Persistence:** None. No files are written and no state survives process exit.

### Authentication

**Not implemented.** There is no authentication, authorization, session handling, token management, or credential flow.

### API calls

**None.** No `fetch`, HTTP client, socket, or network request exists in the codebase.

### State management

**None beyond in-memory script variables.** Arrays and objects are created during execution and discarded when the process ends. No state manager, store, or serialization layer is present.

### Execution model notes

- `Project 22` demonstrates an intentional invalid array index; the failing statement is commented out, and the corrected access is executed. See [Error Handling & Common Failures](#-error-handling--common-failures).
- Several exercises print multiple scenarios in one run (for example, `Project 23`, `Project 24`, and `Project 27`), so a single execution can contain both true and false or multiple variant outputs.
- `Project 17` mutates its guest array with `pop()` until it is empty; `Project 42` mutates the magicians array in place; `Project 43` copies it with the spread operator and returns a new array.

---

## 🧪 Exercise Index

The table below maps every folder to the program it implements and the primary concepts it exercises. Descriptions reflect the actual code in each `main.ts`.

| # | Folder | Program | Primary concepts demonstrated |
| --- | --- | --- | --- |
| 02 | `Project 02` | Personal Message | Variable declaration, `console.log` with multiple arguments |
| 03 | `Project 03` | Name Cases | `toLowerCase`, `toUpperCase`, regular-expression replacement for title case |
| 04 | `Project 04` | Famous Quote | Escaped quotation marks in a string |
| 05 | `Project 05` | Famous Quote 2 | Composing a message from variables |
| 06 | `Project 06` | Stripping Names | `\n` and `\t` escape sequences, `trim()` |
| 07/08 | `Project 07 and 08` | Number Eight | Arithmetic operators: `+`, `-`, `*`, `/` |
| 09 | `Project 09` | Favorite Number | Numeric variable used in a message |
| 10 | `Project 10` | Adding Comments | Single-line comments with arithmetic output |
| 11 | `Project 11` | Names | String array, `forEach` |
| 12 | `Project 12` | Greetings | Template literals inside `forEach` |
| 13 | `Project 13` | Your Own Array | Array iteration with personalized statements |
| 14 | `Project 14` | Guest List | Invitation output generated from an array |
| 15 | `Project 15` | Changing Guest List | `splice()` to replace an array element |
| 16 | `Project 16` | More Guests | `unshift()`, `push()`, positional `splice()` |
| 17 | `Project 17` | Shrinking Guest List | `for` loop, `pop()`, conditional messaging |
| 18 | `Project 18` | Seeing the World | Non-mutating copies via spread, `sort()`, `reverse()` |
| 19 | `Project 19` | Dinner Guests | `array.length` reporting |
| 20 | `Project 20` | Array of Items | Typed `string[]` arrays for multiple categories |
| 21 | `Project 21` | TypeScript Objects | `interface` declarations and typed object literals |
| 22 | `Project 22` | Intentional Error | Invalid array index demonstration, corrected access |
| 23 | `Project 23` | Conditional Tests | Equality, inequality, comparison, boolean, `includes()` |
| 24 | `Project 24` | More Conditional Tests | String/number comparisons, logical AND and OR, array membership |
| 25 | `Project 25` | Alien Colors #1 | Standalone `if` statements |
| 26 | `Project 26` | Alien Colors #2 | `if` / `else` with two versions |
| 27 | `Project 27` | Alien Colors #3 | `if` / `else if` chain across three color versions |
| 28 | `Project 28` | Stages of Life | Range-based `if` / `else if` chain |
| 29 | `Project 29` | Favorite Fruit | Independent `if` checks with `includes()` |
| 30 | `Project 30` | Hello Admin | User greeting logic with an admin special case |
| 31 | `Project 31` | No Users | Empty-array guard with `length === 0` |
| 32 | `Project 32` | Checking Usernames | Case-insensitive uniqueness check using `map()` and `includes()` |
| 33 | `Project 33` | Ordinal Numbers | Loop with ordinal suffix selection (`st`, `nd`, `rd`, `th`) |
| 34 | `Project 34` | Pizzas | Index-based `for` loop over an array |
| 35 | `Project 35` | Animals | Index-based `for` loop with per-item statements |
| 36 | `Project 36` | T-Shirt | Function declaration with typed parameters |
| 37 | `Project 37` | Large Shirts | Function calls with different size/message combinations |
| 38 | `Project 38` | Cities | Function with city and country parameters |
| 39 | `Project 39` | City Names | Function returning a formatted string |
| 40 | `Project 40` | Album | Optional parameter (`tracks?`) and object construction |
| 41 | `Project 41` | Magicians | Array passed to a function, `forEach` |
| 42 | `Project 42` | Great Magicians | In-place array mutation with a `for` loop |
| 43 | `Project 43` | Unchanged Magicians | Array copy via spread, returning a new array |
| 44 | `Project 44` | Sandwiches | Rest parameters (`...items`) |
| 45 | `Project 45` | Cars | Index-signature object parameter, object spread |

---

## 🛠️ Error Handling & Common Failures

### Error-handling approach in the code

The exercises do **not** implement `try` / `catch` blocks, custom error types, validation boundaries, or retry logic. Any runtime error produced by a script is reported by Node.js as an uncaught exception with a stack trace, and the process exits with a non-zero status.

The only intentionally failing statement is in `Project 22`:

```ts
// console.log(errorArray[7]);   // intentional error; commented out
console.log(errorArray[4]);       // corrected access
```

Because the invalid access is commented out, the committed program runs successfully. Uncommenting it produces `undefined` output rather than a thrown exception, since JavaScript array reads out of bounds return `undefined`.

### Common failures and recovery

| Symptom | Likely cause | How to identify | Recovery |
| --- | --- | --- | --- |
| `node : The term 'node' is not recognized` | Node.js is not installed or not on `PATH` | Shell cannot resolve `node` | Install Node.js and reopen the terminal; verify with `node --version` |
| `tsc : The term 'tsc' is not recognized` | TypeScript compiler is not installed globally | Shell cannot resolve `tsc` | Use `npx -p typescript tsc -p .` or install TypeScript globally |
| TypeScript reports strict-mode errors | Source edit violates `strict` checking | Compiler output points to `main.ts` and line number | Correct the type or value; do not disable `strict` unless intentionally changing the exercise |
| `Cannot find module` | Attempting to run from an incorrect path, or introducing an import that does not exist | Node.js error includes the unresolved module | Run the exact file path, e.g. `node "Project 02/main.js"`; this repository has no modules to import |
| No output or unexpected output | Running the wrong folder's script, or running stale compiled output | Compare `main.js` timestamp/content with `main.ts` | Run the intended folder's `main.js`; recompile with `tsc -p .` after editing |
| Garbled characters in source comments | Terminal encoding does not match the file encoding | Punctuation appears as replacement or box characters | View files as UTF-8 in the editor; runtime output for exercises is plain text |
| Compile succeeds but runtime behavior seems inconsistent between `Project 24`/`Project 29` and others | Those two folders use `NodeNext` module settings | Inspect the `module` and `moduleResolution` lines in `tsconfig.json` | Compile each folder with its own `tsconfig.json`; do not share one config across projects |

### Recovery procedure

1. Confirm Node.js is available: `node --version`.
2. Confirm the TypeScript compiler is available if rebuilding: `npx -p typescript tsc --version`.
3. Change into the specific project folder.
4. Recompile with `tsc -p .` (or `npx -p typescript tsc -p .`).
5. Run `node main.js`.
6. If output is wrong, compare the committed `main.js` with the current `main.ts` and recompile.

There are no retries, fallbacks, logging frameworks, health probes, or alerting mechanisms in the codebase.

---

## 📦 Build & Deployment Notes

### Build process

The build is a direct TypeScript compilation with no bundler, transpiler pipeline, or task runner:

```bash
cd "Project XX"
tsc -p .
```

Result:

- `main.ts` is compiled to `main.js` in the same folder.
- `"outDir"` is commented out in every `tsconfig.json`, so no separate `dist/` or `build/` directory is produced.
- The compiler settings are per-folder and are not shared.

### Compiler options that affect the build

| Option | Value | Effect |
| --- | --- | --- |
| `target` | `es2016` | Emits ES2016-compatible JavaScript |
| `module` | `commonjs` (41 projects) / `NodeNext` (projects 24, 29) | Controls emitted module format |
| `strict` | `true` | Enables TypeScript's strict type-checking family |
| `esModuleInterop` | `true` | Improves CommonJS interop compatibility |
| `forceConsistentCasingInFileNames` | `true` | Rejects casing mismatches in file references |
| `skipLibCheck` | `true` | Skips type checking of declaration files |
| `outDir` | Not set | Output is emitted next to the source |

### Deployment

**No deployment configuration exists.** The Repository includes no:

- CI/CD workflow files
- Container definitions
- Package manifests or release scripts
- Hosting or server configuration
- Environment-specific configuration files

### Production considerations visible in the code

- **Committed artifacts can drift:** `main.js` is version-controlled alongside `main.ts`. Any edit to `main.ts` must be followed by recompilation to keep them aligned.
- **Configuration duplication:** A compiler option change must be applied to each folder individually. `Project 24` and `Project 29` already differ from the rest.
- **No reproducible toolchain pin:** There is no `package.json` or lockfile, so the TypeScript compiler version is not pinned by the repository.
- **No root build command:** There is no script or configuration that compiles all projects at once.
- **Educational scope:** The programs are intended as isolated exercises, not as a deployable application.

---

## 🔐 Security & Constraints

### Authentication and permissions

**Not implemented.** There are no users, roles, permissions, sessions, tokens, or access-control rules.

### Secrets handling

**No secrets exist in the project.** There are no API keys, credentials, certificates, connection strings, or environment-based secrets. No configuration loader or secret store is referenced.

### Network and data exposure

- No inbound or outbound network communication.
- No server, port binding, or endpoint exposure.
- No database, file writes, or persistent storage.
- No user input collection, so input-validation and injection concerns do not arise in the current code.

### Explicit limitations

| Constraint | Description |
| --- | --- |
| **No package manifest** | There is no `package.json`; dependency installation and npm script execution are not supported. |
| **No automated tests** | No test framework, test files, or test command exists. |
| **No linting or formatting configuration** | No ESLint, Prettier, or equivalent configuration is present. |
| **No shared code** | Exercises cannot reuse functions or types from one another. |
| **No build automation** | Each folder must be compiled individually. |
| **No license file** | No `LICENSE` file is present; see [License](#-license). |
| **No runtime input** | All values are hard-coded; the programs are not configurable without editing source. |
| **No error recovery** | Uncaught runtime errors terminate the process. |
| **No version pinning** | The TypeScript compiler and Node.js versions are not locked by the repository. |
| **Type safety ends at compile time** | `strict` applies to TypeScript compilation only; emitted JavaScript performs no runtime type validation. |

---

## 🌐 API Endpoints

**Not applicable.** The repository does not implement an HTTP server, router, or network service. There are no routes, methods, request handlers, or response schemas.

| Method | Path | Description |
| --- | --- | --- |
| — | — | No API endpoints exist in this project |

---

## ❤️ Health Check

**Not applicable.** No health-check endpoint, probe, readiness check, or liveness check exists because the project does not run a service.

There is no endpoint that returns a status payload. Process success is determined solely by whether `node main.js` completes without an uncaught exception.

---

## 📚 API Documentation

**Not applicable.** There is no Swagger, OpenAPI, ReDoc, Postman collection, or generated API documentation because the project exposes no API.

---

## ✅ Testing

### Test framework

**None.** The repository contains no test runner, test files, assertions, mocks, or coverage configuration. There is no `test` script because there is no `package.json`.

### Manual verification

Each exercise can be verified by executing its compiled output and inspecting the terminal results.

Single exercise:

```bash
node "Project 02/main.js"
```

Windows PowerShell:

```powershell
node ".\Project 02\main.js"
```

Run every compiled exercise (PowerShell):

```powershell
Get-ChildItem -Directory -Filter "Project*" | Sort-Object Name | ForEach-Object {
    Write-Host "===== $($_.Name) ====="
    node (Join-Path $_.FullName "main.js")
}
```

Run every compiled exercise (Bash):

```bash
for dir in Project*/; do
  echo "===== $dir ====="
  node "$dir/main.js"
done
```

### Compile-and-run verification

To verify a source file compiles and runs correctly:

```bash
cd "Project 45"
npx -p typescript tsc -p .
node main.js
```

### What to check

- The process exits without an uncaught exception.
- Output matches the behavior described in the source comments for that exercise.
- After editing `main.ts`, the regenerated `main.js` reflects the change.

---

## 🤝 Contributing Guidelines

> The following section is a professional placeholder for repository-specific contribution policy. It should be updated by the maintainer before accepting external contributions.

### Contribution process (placeholder)

1. **Open an issue first** — describe the proposed change, the affected exercise folder, and the rationale.
2. **Fork the repository** and create a focused branch, for example `fix/project-22-index-note` or `docs/readme-clarification`.
3. **Keep changes scoped** — modify only the relevant `Project XX/` folder and, when applicable, the exercise index in this README.
4. **Preserve the architecture** — do not introduce shared modules, package manifests, or dependencies unless the change is explicitly approved.
5. **Recompile affected sources** — run `tsc -p .` inside the edited folder and commit the updated `main.js` alongside `main.ts`.
6. **Verify manually** — run `node main.js` and confirm the output.
7. **Submit a pull request** with a clear description of the change and the verification performed.

### Coding conventions (placeholder)

- Keep each exercise self-contained and free of imports.
- Match the existing naming and formatting style of the folder being edited.
- Do not modify unrelated exercises.
- Do not commit secrets, credentials, or generated files other than the intentional compiled `main.js` outputs.

### Code of Conduct (placeholder)

> A formal Code of Conduct is not currently included in this repository. Contributors are expected to communicate professionally and keep discussions technical and respectful. The maintainer may add a formal policy in the future.

---

## 👤 Maintainer / Author Information

**Author and repository owner:** Afaq Ul Islam

| Field | Value |
| --- | --- |
| **Name** | Afaq Ul Islam |
| **GitHub** | [@afaqulislam](https://github.com/afaqulislam) |
| **Repository** | [45-Assignments-TypeScript-Node.js](https://github.com/afaqulislam/45-Assignments-TypeScript-Node.js) |
| **Email** | `[maintainer-email@example.com]` *(placeholder)* |
| **Role** | Author and maintainer |

> Replace the placeholder email and add any additional maintainer details before publishing or accepting contributions.

---

## 🛟 Support & Maintenance

> The following section is a professional placeholder for support and maintenance policy.

| Item | Status |
| --- | --- |
| **Formal support** | Not defined in the repository |
| **Issue tracker** | Available through the GitHub repository's Issues tab *(placeholder)* |
| **Response SLA** | `[Define expected response time]` *(placeholder)* |
| **Maintenance cadence** | `[Define review/update cadence]` *(placeholder)* |
| **Supported Node.js versions** | `[Define supported versions]` *(placeholder)* |
| **Supported TypeScript versions** | `[Define supported versions]` *(placeholder)* |
| **Security reporting** | `[Define private disclosure contact/process]` *(placeholder)* |

### Before requesting support

1. Confirm Node.js is installed and available on `PATH`.
2. Run the specific exercise with `node "Project XX/main.js"`.
3. If you modified the source, recompile the folder with `tsc -p .`.
4. Include the exact folder name, command used, terminal output, and Node.js/TypeScript versions in any report.

---

## 📄 License

**No license file is currently present in this repository.**

| Item | Status |
| --- | --- |
| **License** | `[To be determined by the repository owner]` *(placeholder)* |
| **LICENSE file** | Not included |
| **SPDX identifier** | Not declared |

> Until a license is added, no explicit license grant is provided by the repository. The maintainer should add a `LICENSE` file and update this section with the chosen license name and SPDX identifier before distributing or accepting external contributions.

---

## 🔗 Social / Contact

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-afaqulislam-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/afaqulislam)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/your-linkedin-handle/)
[![Twitter](https://img.shields.io/badge/Twitter-Profile-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/your-twitter-handle)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:maintainer-email@example.com)

</div>

| Channel | Link |
| --- | --- |
| **GitHub** | [github.com/afaqulislam](https://github.com/afaqulislam) |
| **LinkedIn** | `[https://www.linkedin.com/in/your-linkedin-handle/]` *(placeholder)* |
| **Twitter / X** | `[https://twitter.com/your-twitter-handle]` *(placeholder)* |
| **Email** | `[maintainer-email@example.com]` *(placeholder)* |

---

<div align="center">

**45 Assignments — TypeScript & Node.js**  
43 standalone exercises · TypeScript source · committed CommonJS output · zero dependencies

</div>
