# Handoff: Plataforma de Gestão Pedagógica — Commission School

## Overview
Internal web platform for managing a Christian English school (Commission School). Two audiences: **staff/teachers** (macro dashboard, per-class management, reports, internal chat, broadcast) and **students** (gamified area with a "Commissioner" score, class info, schedule sync). This handoff covers the **v2** design (`Plataforma de Gestão Pedagógica v2.dc.html`), which supersedes v1.

## About the Design Files
The files in this bundle are **design references created in HTML** — prototypes showing intended look and behavior, **not production code to copy directly**. They were authored in a design tool that mounts React components through a custom runtime (`support.js`, `<x-import>`, `.dc.html`), so the wiring is specific to that tool.

The task is to **recreate these designs in your target codebase** using its established patterns and libraries (React, Vue, etc.). If no frontend environment exists yet, pick the most appropriate framework and implement there. Treat the `.jsx` files as readable specs of layout, state, and copy — not as drop-in modules. All UI logic worth keeping lives in:
- `school-platform/SchoolPlatformV2.jsx` — every screen and component (v1 base + v2 additions concatenated).
- `school-platform/data.js` — the mock data model (classes, students, staff, helpers).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, layout, copy, and interactions are all intentional and follow the Commission School Design System. Recreate the UI faithfully using your codebase's component library, matching the exact tokens listed below. Photography/duotone treatment from the brand is **not** used in this internal tool — it is deliberately flat, hard-edged, high-contrast admin UI.

## Design System (binding)
Commission School DS. Strict two-font, four-color, hard-edged, zero-radius, zero-shadow system.

### Colors
| Token | Hex | Use |
|---|---|---|
| Blue | `#0305C6` (`--blue-600`) | Primary actions, active tabs, "healthy" data, links |
| Red | `#E93323` (`--red-600`) | Alerts, secondary actions, over-capacity/at-risk data |
| Cream | `#FFFFF3` | (brand bg — not heavily used in this tool) |
| Ink gray | `#333333` (`--gray-900`) | Text, expanded/selected insight card |
| Cream paper | `#EFE2C0` (`--paper-100`) | Highlight/announcement backgrounds, info callouts |
| Neutral bg | `#F4F4F4` | App shell background |
| Light gray | `#F2F2F2` | Inactive tab/chip fill, empty meter track |
| Border gray | `#EEEEEE` | Card borders, dividers |
| Muted text | `#888` / `#999` | Captions, labels |

No gradients. No tints/shades beyond the above. Link default `#0305C6`, hover `#E93323`.

### Typography
- **Display / headings:** Bebas Neue (`--font-display`), all-caps by nature, condensed. Used for page titles, KPI numbers, card titles, insight numbers. Sizes range 22–52px with `line-height` ≈ font-size (tight).
- **Body / UI:** Garet (`--font-body`) for all running copy, labels, buttons, inputs, table cells. Sizes 11–17px. Weights used: 400 (body) and 600 (labels/buttons/emphasis). No 700.
- Uppercase micro-labels: 11–12px, weight 600, `letter-spacing: 0.04–0.06em`, color `#999`.

### Shape & effects
- **Border radius: 0 everywhere** — the one exception is avatars/profile photos, which are **circular** (`border-radius: 50%`).
- No box-shadows except the notifications dropdown (`0 4px 14px rgba(0,0,0,0.08)`) and the modal scrim overlay.
- Buttons: solid fill, no shadow, state change is a **color swap**, never opacity fade. Reset styling (`all: unset`) then apply.
- Spacing: page padding 32px; card padding 12–24px; gaps 6–20px; KPI columns separated by 1px `#eee` left-borders.

## Screens / Views

### 1. Home / login gate (`Home`)
- Full-height white, centered column. Small decorative blue/red dots scattered absolutely at corners.
- Logo (90px), Bebas heading "Bem-vindo à Commission School", muted subtitle "Plataforma de gestão pedagógica".
- Two full-width stacked buttons: **"Entrar como Equipe / Professor"** (blue) and **"Entrar como Aluno"** (red).

### 2. Staff / teacher login (`TeacherLogin`)
- Centered 360px bordered form. Back link (blue). Logo. Email + password inputs. A **demo "Entrar como" select**: "Equipe (acesso geral)" or a specific teacher name (drives per-teacher filtering downstream). Red submit button.

### 3. Student login (`StudentLogin`)
- Same form pattern, blue submit. Demo select lists every student ("Name — turma").

### 4. Staff shell (`StaffShellV2`)
Sticky top bar: logo, tab group, right side = **Notifications** bell + count badge, "Meu perfil", "Sair".
Tabs: **Painel · Relatórios · Chat · Professor · Alunos** (note: the old standalone "Turmas" tab was removed — classes now live inside Painel).

#### 4a. Painel (macro home) — `PainelMacro`
Top → bottom:
1. **Mural de avisos** — large `#EFE2C0` block, 28–32px padding. Bebas title 34px "Mural de avisos", blue "+ Novo aviso" button that reveals an input + Publicar. Each announcement: 4px red left-border, `autor · data` in `#8a7c55`, text at 17px.
2. **KPI row** — 4 columns (Total de alunos, Turmas ativas, Professores, Média alunos/turma): Bebas 34px number over uppercase micro-label, 1px left-border dividers.
3. **Insights carousel ("Coisas importantes")** — `InsightsCarousel`. Horizontal scroll-snap rail of 280px cards, ← → buttons. Five cards: maior capacidade (red), saúde de turma (blue), maior assiduidade (blue), menor assiduidade (red), alunos por estado (blue). Each shows a Bebas headline (flag + top class) + subtitle + "Ver ranking". Clicking expands an inline ranking list below: numbered rows with a horizontal bar (blue, or red when `alerta`) + value, sorted.
4. **Turmas** (embedded `TurmasTab`) — view switcher **Cards / Lista / Calendário** + search:
   - **Cards (default, "galeria"):** responsive grid `minmax(270px,1fr)`. Each card = 130px cover header (alternating blue/red, big flag emoji + country label; an `<image-slot>` overlay lets the user drop a **cover photo** replacing the flag; "Acima da capacidade" tag if ≥100%) + body (Bebas class name + stage Pill, "Prof · horário", OccupancyMeter). Click → class detail.
   - **Lista:** dense rows — flag, name, stage Pill, alert Pill, prof/horário, `% presença` (red if <75), `matriculados/máximo`.
   - **Calendário:** 6 columns Seg–Sáb; classes placed by parsed weekday; group classes blue, 1:1 red.

#### 4b. Class detail (`TurmaDetail`) — reached from Painel
Header with back link + Bebas name + stage Pill. Meta row (professor, horário, início–término, OccupancyMeter, waitlist Pill). Three sub-tabs:
- **Calendário & Aulas:** expandable lesson list; collapsed shows attendance chips (blue=present, red=absent); expanded = editable lesson content textarea, per-student attendance toggle buttons, comment field, and **attachments** (PDF upload or link).
- **Relatório de Presença:** table — aluno, matrícula, % frequência (red if <75), status Pill ("Risco de evasão" / "Em dia").
- **Observações Internas:** staff-only mural with `@mention` picker; never shown to students.

#### 4c. Relatórios (`RelatoriosTab`)
- **Performance matrix** (SVG scatter, `data-om-raster`): x = ocupação (0–110%), y = assiduidade (60–100%), quadrant tints, each class plotted as flag emoji + truncated name. Quadrant labels ("Saudáveis", "Cheias mas defasadas", etc.).
- **Assiduidade por turma** — sorted horizontal bars (red if <75%).
- **Concentração por estado** — sorted bars + a `#EFE2C0` callout naming the top state.

#### 4d. Chat (`ChatTab`) — Slack-style
- 220px left sidebar: **Canais** section with a `+` button (create channel via inline input, slugifies name) and **Mensagens diretas** section with a `+` button (start DM — lists staff not yet in a DM). Active item = blue fill.
- Right pane: channel header, scrollable message list (square initials avatar alternating blue/red, author + time, `@mention` highlighting), composer input + blue Enviar (Enter sends).

#### 4e. Professor tab (`DisparoRapido` + filtered `TurmasTab`)
- Only meaningful when logged in as a specific teacher (general "Equipe" sees an explanatory message).
- **Disparo rápido:** 2px ink-border block. Message textarea + optional link input. Quick-select buttons (Todas + per-stage) and individual class toggle chips (blue when selected). Red "Disparar para N turma(s)" button → confirmation text. Below it, the teacher's own classes via `TurmasTab` filtered by name.

#### 4f. Alunos (`StudentsAdmin`)
- Header with count + search + "+ Adicionar aluno" (reveals inline form: nome + turma select → matrícula auto-generated). Table: aluno, matrícula, turma, **Onboarding** toggle Pill (Concluído/Pendente), **Primeira aula** toggle Pill (Feita/Pendente).

#### 4g. Perfil (`ProfilePage`)
- Bebas "Meu Perfil", circular `<image-slot>` photo (140px), name/role/matrícula/handle fields.

### 5. Student shell (`StudentShellV2`)
Simpler top bar (logo, "Conectado como", Meu perfil, Sair). Home tab:
- **ScoreCard** (gamification): 2px ink-border block. Big score number (blue box, red if top). "Seu nível" with Commissioner level name (First Steps → Em Missão → Commissioner → Top Commissioner, thresholds 0/70/80/90). Progress bar to next level. **"Como melhorar meu score?"** expandable with data-driven tips (low score → "apareça mais", "fale com a coordenação", "entregue mais homework"). Top 1% (≥90) shows an Overmission discount benefit callout.
- **Monthly report modal** (`relatorioAberto`, shown on load): scrim + centered 400px card, "Relatório do mês", KPI row (score/nível/aulas), contextual sentence, "Entendi" dismiss. Intended to fire every N lessons.
- **StudentArea:** "Minha turma" card, **Google Agenda connect** UI (connect toggle → mock weekly strip), últimas aulas list, matrícula, mural da turma (read-only).

## Interactions & Behavior
- All navigation is client-side stage/tab state — no routing library. Stages: `home → staff-login → staff` / `home → student-login → aluno`. Logout resets to `home`.
- Insight cards: click toggles an inline expanded ranking (only one open at a time).
- Class cards/rows/calendar cells: click opens `TurmaDetail`; back link returns to Painel with the class list intact.
- Attendance toggles, onboarding/first-lesson Pills, announcement/chat/broadcast composers, add-student form, cover-photo drop, Google Agenda connect — all mutate local component state only (no persistence except `<image-slot>` which persists dropped images locally by `id`).
- Chat: Enter sends; `+` buttons create channels/DMs in local state.
- Modal + notifications dropdown are the only overlay/z-index elements.

## State Management
Currently all `useState` inside components (prototype). For production, map to:
- **App-level:** auth/session (role: equipe | teacher name | student), current stage.
- **Server data:** classes (turmas: group + individual), students, staff, lessons (content, attendance, attachments, comments), announcements, chat channels/DMs/messages, internal notes.
- **Derived/computed** (see `data.js` + v2 helpers): `assiduidade(turma)` = avg student frequency; `health(turma)` = 0.6·assiduidade + 0.4·min(ocupação,100); `estadoCounts()`; student score → Commissioner level + tips. **Note:** student-state distribution and score tips are simulated by deterministic rules, not real analytics/AI — replace with real data or an LLM call if desired.
- Attachments use `URL.createObjectURL` in the prototype — swap for real upload.

## Design Tokens
Colors, type, shape, spacing all listed under **Design System** above. CSS custom properties are provided by the DS stylesheets under `_ds/commission-school-design-system-.../tokens/`. Border radius: 0 (avatars 50%). Shadows: none except notif dropdown `0 4px 14px rgba(0,0,0,0.08)`.

## Assets
- `assets/commission-logo.jpg` — the only lockup (oval stamp wordmark). Included in this bundle.
- **Country flags** are Unicode emoji (🇻🇳 etc.), mapped per class id in the `FLAGS` table in `SchoolPlatformV2.jsx` — replace with your own flag asset set if emoji rendering is inconsistent across platforms.
- **Avatars** are generated initials (`InitialsAvatar`, DS component) — no real photos in the brand.
- `<image-slot>` (`image-slot.js`) is a prototype-only drag-drop photo placeholder for profile/cover images — replace with a real upload component.
- Fonts: Bebas Neue + Garet (in the DS under `assets/fonts/`).

## Files (in this bundle)
- `SchoolPlatformV2.jsx` — all screens & components (read as spec). Sections are wrapped in IIFE blocks that assign to `window.*`; ignore that wiring, read the component bodies.
- `data.js` — mock data model + helper functions (real class-roster shape).
- `image-slot.js` — the drag-drop image placeholder web component (prototype helper).
- `commission-logo.jpg` — logo asset.
- `Plataforma de Gestão Pedagógica v2.dc.html` — the entry file (shows how it's all mounted; runtime-specific).
- `support.js` — the design tool's runtime loader (parses `.dc.html`, wires `<x-import>`, etc.). **Only needed if you want to open the `.dc.html` file directly in a browser to click through the reference** — it is not application code and has no equivalent to write in your codebase.
- `_ds/` — the full Commission School Design System bundle (tokens, `_ds_bundle.js`, fonts, guidelines) that the `.dc.html` file loads for colors/type/components. Use it as the source of truth for the tokens documented above; don't ship this folder as-is — port the tokens/components into your codebase's own styling system.

## Data model reference
See `data.js` for exact shapes. Key entities:
- **Turma (group):** `{ id, nome, estagio, professor, horario, inicio, termino, matriculados, maximo, ocupacao, aguardandoVaga, alunos: [{ name, matricula, frequencia }] }`
- **Turma individual (1:1):** `{ id, nome, matricula, professor, horario, estagio }`
- **Student:** `{ name, matricula, turmaId, turmaNome, individual, onboarding, primeiraAula, frequencia }`
- **Staff:** `{ name, handle }`
Helpers: `findTurma`, `lessonLogFor`, `internalNotesFor`, `classMuralFor`, `allTurmaOptions`, `nextMatricula`, `MEDIA_ALUNOS_POR_TURMA`, plus v2 `V2.{flagOf,countryOf,assiduidade,health,estadoCounts,diasDe,horaDe}`.
