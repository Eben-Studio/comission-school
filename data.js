// Real class-roster data extracted from the school's own "Relatório de Turmas"
// export (Sponte Web, 30/06/2026). Field names mirror the source report:
// professor, horário, início/término, estágio, máximo, vagas, taxa de ocupação,
// última lição. Student names inside group classes are illustrative (the source
// report only lists per-class counts, not rosters) — matrícula numbers and the
// individual-class student names ARE real, taken directly from the report.

// Guarded + IIFE-scoped so this file is safe to evaluate more than once on the
// same page (e.g. if a bundler or preview harness re-executes it) — top-level
// identifiers stay function-scoped instead of colliding at global scope.
// Bare block (not a conditional) so this file's top-level const/function
// declarations stay block-scoped even if the design-system bundle also
// contains a copy — and so THIS explicit <script> tag always re-runs and
// overwrites window.SchoolData with its own (freshest) definitions, rather
// than silently no-op'ing if a stale bundled copy happened to run first.
{ (() => {

const MATRICULA_PREFIX = "CS";

function matricula(year, seq) {
  return `${MATRICULA_PREFIX}-${year}-${String(seq).padStart(4, "0")}`;
}

// Pool of plausible Brazilian first+last names for group-class rosters
// (the report doesn't include individual names for group turmas).
const NAME_POOL = [
  "Beatriz Nogueira", "Caio Meireles", "Débora Cavalcanti", "Enzo Malta",
  "Fernanda Quintão", "Gustavo Peixoto", "Helena Brant", "Igor Salgado",
  "Júlia Farias", "Kauê Bezerra", "Larissa Moraes", "Miguel Tavares",
  "Natália Rezende", "Otávio Lacerda", "Paula Siqueira", "Rafael Andrade",
  "Sabrina Coutinho", "Thiago Vale", "Valentina Prado", "William Sá",
  "Yasmin Duarte", "Bruno Carvalhal", "Camila Estrela", "Diego Pontes",
  "Eduarda Nascimento", "Felipe Guedes", "Giovanna Rocha", "Heitor Assis",
];

let poolCursor = 0;
function namesFor(count) {
  const out = [];
  for (let i = 0; i < count; i++) {
    out.push(NAME_POOL[poolCursor % NAME_POOL.length]);
    poolCursor++;
  }
  return out;
}

// year each turma's matrícula batch was issued (derived from início date)
function yearOf(dateStr) {
  return dateStr ? Number(dateStr.split("/")[2]) : 2026;
}

let seqCursor = 100;
function buildStudents(turmaId, count, startDate) {
  const year = yearOf(startDate);
  return namesFor(count).map((name, i) => ({
    name,
    matricula: matricula(year, seqCursor++),
    turmaId,
    // frequência simulada de forma determinística a partir do nome, só para
    // dar variação realista ao relatório de presença
    frequencia: 62 + ((name.length * 7) % 39),
    // status simulado de onboarding comercial — determinístico, não real
    onboarding: (name.length + i) % 4 !== 0,
    primeiraAula: (name.length + i) % 3 !== 0,
  }));
}

let adminSeq = 8000;
function nextMatricula() {
  return matricula(2026, adminSeq++);
}

const TEACHERS = [
  "Rebecca", "Raquel", "Gabe", "Pamela", "Ana Luiza", "Duda Torres", "Léo",
  "Jarl", "Rhayane", "Vitória", "Ingrid", "Esther", "Sofia", "Lauren",
  "Ana Júlia", "Elias", "Maria Júlia", "Valentina",
];

function slugHandle(name) {
  return "@" + name
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]+/g, "");
}

// Staff directory for @menções internas — professores + coordenação.
const STAFF = [
  ...TEACHERS.map((name) => ({ name, handle: slugHandle(name), papel: "Professor(a)" })),
  { name: "Coordenação", handle: "@coordenacao", papel: "Coordenação" },
];

const GROUP_TURMAS = [
  { id: "car", nome: "Central African Republic", professor: "Duda Torres", horario: "Seg-Qua 07:00–08:00", inicio: "17/09/2025", termino: "17/09/2029", estagio: "First Steps", matriculados: 4, aguardandoVaga: 1, maximo: 15, ultimaLicao: "jobs and functions" },
  { id: "col", nome: "Colombia", professor: "Duda Torres", horario: "Sáb 09:00–11:20", inicio: "09/08/2025", termino: "24/10/2028", estagio: "First Steps", matriculados: 8, aguardandoVaga: 0, maximo: 15, ultimaLicao: "vocab jobs and functions | projeto de semestre" },
  { id: "cub", nome: "Cuba", professor: "Gabe", horario: "Ter-Qui 20:15–21:15", inicio: "10/01/2025", termino: "", estagio: "First Steps", matriculados: 8, aguardandoVaga: 0, maximo: 10, ultimaLicao: "fruits of the spirit" },
  { id: "ind", nome: "India", professor: "Léo", horario: "Seg-Qua 19:00–20:00", inicio: "04/09/2024", termino: "08/09/2026", estagio: "First Steps", matriculados: 5, aguardandoVaga: 0, maximo: 10, ultimaLicao: "Comparatives" },
  { id: "jor", nome: "Jordan", professor: "Rhayane", horario: "Ter-Qui 20:00–21:00", inicio: "27/05/2025", termino: "21/05/2026", estagio: "First Steps", matriculados: 6, aguardandoVaga: 0, maximo: 12, ultimaLicao: "All future forms pt 3 (review and exercises) + devocional" },
  { id: "mal", nome: "Maldivas", professor: "Ingrid", horario: "Sáb 09:00–11:20", inicio: "07/02/2026", termino: "", estagio: "First Steps", matriculados: 10, aguardandoVaga: 0, maximo: 15, ultimaLicao: "" },
  { id: "mex", nome: "Mexico", professor: "Léo", horario: "Ter-Qui 07:00–08:00", inicio: "10/01/2024", termino: "28/05/2026", estagio: "First Steps", matriculados: 6, aguardandoVaga: 0, maximo: 20, ultimaLicao: "It Takes.." },
  { id: "moz", nome: "Mozambique", professor: "Ana Luiza", horario: "Sáb 09:00–11:20", inicio: "20/09/2025", termino: "23/05/2026", estagio: "First Steps", matriculados: 5, aguardandoVaga: 1, maximo: 12, ultimaLicao: "General review + devocional" },
  { id: "nga", nome: "Nigeria", professor: "Léo", horario: "Seg-Qua 20:00–21:00", inicio: "09/02/2025", termino: "27/05/2026", estagio: "First Steps", matriculados: 6, aguardandoVaga: 0, maximo: 13, ultimaLicao: "It Takes.." },
  { id: "nko", nome: "North Korea", professor: "Gabe", horario: "Ter-Qui 19:15–20:15", inicio: "06/08/2024", termino: "21/08/2026", estagio: "First Steps", matriculados: 5, aguardandoVaga: 0, maximo: 12, ultimaLicao: "LOYAL FRIEND - MUSIC VOCAB" },
  { id: "por", nome: "Portugal", professor: "Raquel", horario: "Seg-Qua 16:00–17:00", inicio: "28/10/2024", termino: "24/06/2026", estagio: "First Steps", matriculados: 5, aguardandoVaga: 0, maximo: 10, ultimaLicao: "warm-up + peace video + questions + feedback form" },
  { id: "syr", nome: "Syria", professor: "Maria Júlia", horario: "Seg-Qua 20:00–21:00", inicio: "05/08/2024", termino: "17/09/2029", estagio: "First Steps", matriculados: 5, aguardandoVaga: 0, maximo: 20, ultimaLicao: "Pronouns 1 - reinforcing" },
  { id: "vnm", nome: "Vietnam", professor: "Gabe", horario: "Seg-Qua 19:40–20:40", inicio: "10/01/2025", termino: "", estagio: "First Steps", matriculados: 13, aguardandoVaga: 0, maximo: 12, ultimaLicao: "The New of the Lord + Prophetic exercise for 2026" },
  { id: "afg", nome: "Semi-Private Afghanistan (WED)", professor: "Gabe", horario: "Qua 08:00–09:00", inicio: "15/10/2025", termino: "", estagio: "First Steps", matriculados: 1, aguardandoVaga: 0, maximo: 15, ultimaLicao: "" },
];

GROUP_TURMAS.forEach((t) => {
  t.vagas = Math.max(t.maximo - t.matriculados, 0);
  t.ocupacao = t.maximo > 0 ? Math.round((t.matriculados / t.maximo) * 1000) / 10 : 0;
  t.alunos = buildStudents(t.id, t.matriculados, t.inicio);
});

// Individual (1:1) classes — student names ARE real, taken verbatim from the report.
const INDIVIDUAL_TURMAS = [
  { id: "ind-aline", nome: "Aline Alves", professor: "Rebecca", horario: "Qui 07:00–08:00", inicio: "19/03/2026", estagio: "First Steps" },
  { id: "ind-anapaula", nome: "Ana Paula Santos Paiva", professor: "Raquel", horario: "Qua 15:00–16:00", inicio: "24/06/2026", estagio: "First Steps" },
  { id: "ind-anarita", nome: "Ana Rita de Araújo", professor: "Gabe", horario: "Qui 07:30–08:30", inicio: "21/05/2026", estagio: "First Steps" },
  { id: "ind-ayla", nome: "Ayla Barbosa", professor: "Pamela", horario: "Sex 16:30–17:30", inicio: "17/10/2025", estagio: "First Steps" },
  { id: "ind-gabriela", nome: "Gabriela Porto", professor: "Duda Torres", horario: "Qui 19:30–20:30", inicio: "19/01/2026", estagio: "First Steps", ultimaLicao: "family vocab and bible reading" },
  { id: "ind-joice", nome: "Joice Freitas", professor: "Vitória", horario: "Seg 13:00–14:00", inicio: "01/02/2026", estagio: "First Steps", ultimaLicao: "For starters - getting to know each other - First prayer in English Matthew 6 + Our Father, Bethel (Worship)" },
  { id: "ind-laira", nome: "Laira Maiewski", professor: "Lauren", horario: "Sáb 17:00–18:00", inicio: "07/03/2026", estagio: "Mid Journey" },
  { id: "ind-luara", nome: "Luara Gaida", professor: "Vitória", horario: "Ter 15:00–16:00", inicio: "24/03/2026", estagio: "High Riders" },
];

INDIVIDUAL_TURMAS.forEach((t, i) => {
  t.matricula = matricula(yearOf(t.inicio), 900 + i);
  t.onboarding = i % 4 !== 0;
  t.primeiraAula = i % 3 !== 0;
});

function findTurma(id) {
  return GROUP_TURMAS.find((t) => t.id === id);
}

// Flat roster for the student-login demo picker AND the "Alunos" admin tab.
const ALL_STUDENTS = [
  ...GROUP_TURMAS.flatMap((t) => t.alunos.map((a) => ({ ...a, turmaId: t.id, turmaNome: t.nome }))),
  ...INDIVIDUAL_TURMAS.map((t) => ({ name: t.nome, matricula: t.matricula, turmaId: t.id, turmaNome: t.nome, individual: true, onboarding: t.onboarding, primeiraAula: t.primeiraAula })),
];

const MEDIA_ALUNOS_POR_TURMA = 5.41;
const TOTAL_TURMAS = 46; // per source report, all statuses ("Total de Registros")

// ---- Lesson log + comments + mural (illustrative — not in the source report) ----
const LESSON_TOPICS_BY_STAGE = [
  "Warm-up + apresentações", "Simple present + vocabulário do dia a dia",
  "Perguntas e respostas curtas", "Devocional + leitura bíblica em inglês",
  "Vocabulário: trabalho e profissões", "Revisão geral + exercícios",
];

function lessonLogFor(turma) {
  const dates = ["03/06", "10/06", "17/06", "24/06"];
  return dates.map((d, i) => ({
    data: d,
    topico: i === dates.length - 1 && turma.ultimaLicao ? turma.ultimaLicao : LESSON_TOPICS_BY_STAGE[i % LESSON_TOPICS_BY_STAGE.length],
    presentes: turma.alunos.filter((a) => (a.name.length + i) % 5 !== 0).map((a) => a.matricula),
    comentario: i === dates.length - 1
      ? `Turma engajada, seguir para o próximo estágio de ${turma.estagio === "First Steps" ? "gramática" : "conversação"}.`
      : "",
  }));
}

function muralFor(turma) {
  return internalNotesFor(turma);
}

// Staff-only observations tab inside a class — CAN reference internal
// assessments and @mention teammates. Never shown to students.
function internalNotesFor(turma) {
  return [
    { autor: turma.professor, data: "12/06", texto: `Turma bem participativa nas últimas semanas — considerar avançar o ritmo do vocabulário. @coordenacao, pode revisar a frequência de alguns alunos?` },
    { autor: "Coordenação", data: "20/06", texto: `Confirmar renovação de matrícula antes do término em ${turma.termino || "definir"}.` },
  ];
}

// Public class mural — visible to students too. Announcements/logistics
// only, never a professor's internal assessment of the class or a student.
function classMuralFor(turma) {
  return [
    { autor: "Commission School", data: "20/06", texto: `Próxima atividade da turma: dinâmica de conversação no encontro de ${turma.horario.split(" ")[0]}.` },
    { autor: "Commission School", data: "05/06", texto: "Lembrete: tragam a Bíblia em inglês para a leitura devocional desta semana." },
  ];
}

// All turma names (group + individual), for the "add student" form.
function allTurmaOptions() {
  return [
    ...GROUP_TURMAS.map((t) => ({ id: t.id, nome: t.nome, group: true })),
    ...INDIVIDUAL_TURMAS.map((t) => ({ id: t.id, nome: t.nome, group: false })),
  ];
}

window.SchoolData = {
  MATRICULA_PREFIX, matricula, nextMatricula, TEACHERS, STAFF, GROUP_TURMAS, INDIVIDUAL_TURMAS,
  ALL_STUDENTS, allTurmaOptions, findTurma, MEDIA_ALUNOS_POR_TURMA, TOTAL_TURMAS, lessonLogFor,
  muralFor, internalNotesFor, classMuralFor,
};

})(); }
