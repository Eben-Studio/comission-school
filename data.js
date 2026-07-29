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
  return namesFor(count).map((name, i) => {
    // frequência e lição de casa simuladas de forma determinística a partir
    // do nome, só para dar variação realista aos relatórios
    const frequencia = 62 + ((name.length * 7) % 39);
    const licaoCasa = 55 + ((name.length * 11 + i * 5) % 45);
    const score = Math.round(frequencia * 0.6 + licaoCasa * 0.4);
    return {
      name,
      matricula: matricula(year, seqCursor++),
      turmaId,
      frequencia,
      licaoCasa,
      score,
      // situação financeira simulada — determinístico, não real
      financeiro: (name.length + i * 3) % 6 !== 0 ? "adimplente" : "inadimplente",
      // status simulado de onboarding comercial — determinístico, não real
      onboarding: (name.length + i) % 4 !== 0,
      primeiraAula: (name.length + i) % 3 !== 0,
    };
  });
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
  t.frequencia = 65 + ((t.nome.length * 7) % 35);
  t.licaoCasa = 55 + ((t.nome.length * 11 + i * 5) % 45);
  t.score = Math.round(t.frequencia * 0.6 + t.licaoCasa * 0.4);
  t.financeiro = (t.nome.length + i * 3) % 6 !== 0 ? "adimplente" : "inadimplente";
});

function findTurma(id) {
  return GROUP_TURMAS.find((t) => t.id === id);
}

// Flat roster for the student-login demo picker — tied to the illustrative
// per-turma rosters above (so demo login still has lessons/attendance/mural).
const DEMO_STUDENTS = [
  ...GROUP_TURMAS.flatMap((t) => t.alunos.map((a) => ({ ...a, turmaId: t.id, turmaNome: t.nome }))),
  ...INDIVIDUAL_TURMAS.map((t) => ({ name: t.nome, matricula: t.matricula, turmaId: t.id, turmaNome: t.nome, individual: true, onboarding: t.onboarding, primeiraAula: t.primeiraAula, frequencia: t.frequencia, licaoCasa: t.licaoCasa, score: t.score, financeiro: t.financeiro })),
];

// Base real de alunos cadastrados (relatório "Dados do Cadastro do Aluno",
// Sponte Web, 24/07/2026) — 236 nomes + matrículas reais. Sem vínculo de turma
// confiável na fonte — turma fica "Sem turma definida" por padrão; a equipe
// atribui manualmente na aba Alunos (campo editável). Score/assiduidade/
// lição de casa/financeiro são ilustrativos (a fonte não traz esses dados),
// gerados deterministicamente a partir do nome.
const REAL_STUDENTS_RAW = [
  { name: "Alejandro Arturo Costa de La Barra Velasquez", matricula: "CS-REAL-405" },
  { name: "Alexandre Mineiro Cortes", matricula: "CS-REAL-771" },
  { name: "Aline Alves Ferreira", matricula: "CS-REAL-568" },
  { name: "Amanda Gabrielle Alho Rodrigues", matricula: "CS-REAL-516" },
  { name: "Amanda Miranda de Oliveira Silva Assis", matricula: "CS-REAL-746" },
  { name: "Amanda Monteiro Valença", matricula: "CS-REAL-785" },
  { name: "Amanda Vitoria Leite da Silva", matricula: "CS-REAL-707" },
  { name: "Ana Beatriz Azevedo de Souza", matricula: "CS-REAL-768" },
  { name: "Ana Beatriz Ferreira Rodrigues", matricula: "CS-REAL-753" },
  { name: "Ana Beatriz Serafini Martins", matricula: "CS-REAL-569" },
  { name: "Ana Carolina Souza Nunes", matricula: "CS-REAL-633" },
  { name: "Ana Carolina Telles do Carmo", matricula: "CS-REAL-657" },
  { name: "Ana Júlia Correia Paggio", matricula: "CS-REAL-709" },
  { name: "Ana Julia Gomes de Oliveira", matricula: "CS-REAL-696" },
  { name: "Ana Julia Mendonça de Assis", matricula: "CS-REAL-732" },
  { name: "Ana Kauanne de Almeida Leite", matricula: "CS-REAL-729" },
  { name: "Ana Luiza de Souza Albuquerque", matricula: "CS-REAL-534" },
  { name: "Ana Paula Coelho Coutinho", matricula: "CS-REAL-71" },
  { name: "Ana Paula Santos Paiva", matricula: "CS-REAL-766" },
  { name: "Ana Rita de Araújo Vitor de Jesus Paz", matricula: "CS-REAL-734" },
  { name: "Andielen Nagle Felix", matricula: "CS-REAL-132" },
  { name: "André Filipe Spindola", matricula: "CS-REAL-770" },
  { name: "Andrey de Campos da Cunha", matricula: "CS-REAL-774" },
  { name: "Andriele de Santana Menezes da Silva", matricula: "CS-REAL-414" },
  { name: "Anna Clara de Oliveira Ribeiro", matricula: "CS-REAL-750" },
  { name: "Awana Ribeiro Nascimento Romão", matricula: "CS-REAL-718" },
  { name: "Ayla Barbosa Leal", matricula: "CS-REAL-374" },
  { name: "Bárbara Basilio Torres de Sousa", matricula: "CS-REAL-614" },
  { name: "Bárbara Luiza Campos Damasceno", matricula: "CS-REAL-551" },
  { name: "Barbara Rodrigues Moreira", matricula: "CS-REAL-745" },
  { name: "Beatriz Matilhe Campos Lima Rodrigues", matricula: "CS-REAL-763" },
  { name: "Beatriz Oliveira Santos", matricula: "CS-REAL-435" },
  { name: "Bruna Larisse Lopes Couto", matricula: "CS-REAL-467" },
  { name: "Bruna Rosa Vieira do Vale", matricula: "CS-REAL-497" },
  { name: "Cainã Ferreira de Souza", matricula: "CS-REAL-257" },
  { name: "Cainã Mello Iglesias", matricula: "CS-REAL-548" },
  { name: "Camila Carolina Peixoto Dantas", matricula: "CS-REAL-760" },
  { name: "Camila Efraim", matricula: "CS-REAL-629" },
  { name: "Camilly Gabriele Bezerra do Nascimento", matricula: "CS-REAL-761" },
  { name: "Carlos Josué Corrêa Mineiro", matricula: "CS-REAL-773" },
  { name: "Carolina Speling Mendes", matricula: "CS-REAL-511" },
  { name: "Catherine Holanda Lauria", matricula: "CS-REAL-513" },
  { name: "Cristielen Morais", matricula: "CS-REAL-413" },
  { name: "Daiane Greice Domingues Esteves", matricula: "CS-REAL-764" },
  { name: "Daniela Silva Reis Rodrigues", matricula: "CS-REAL-667" },
  { name: "Danilo Magno dos Santos", matricula: "CS-REAL-706" },
  { name: "Davidson da Silva Novaes", matricula: "CS-REAL-671" },
  { name: "Éder Inocêncio da Silva", matricula: "CS-REAL-748" },
  { name: "Eduarda Nardelli", matricula: "CS-REAL-586" },
  { name: "Eduarda Santos de Andrade", matricula: "CS-REAL-681" },
  { name: "Eduarda Sofia Pinheiro Lopes", matricula: "CS-REAL-653" },
  { name: "Eduardo Hirahara Lima", matricula: "CS-REAL-762" },
  { name: "Elaine Cristina de Almeida Kotchetkoff", matricula: "CS-REAL-578" },
  { name: "Elana Gabriely Ferraz Lopes", matricula: "CS-REAL-742" },
  { name: "Elane Oliveira Costa", matricula: "CS-REAL-775" },
  { name: "Elias Silveira Souza", matricula: "CS-REAL-741" },
  { name: "Elisa de Souza Welter", matricula: "CS-REAL-400" },
  { name: "Eliseu Thiago Almeida Dias", matricula: "CS-REAL-724" },
  { name: "Ellen Escobar Nogueira", matricula: "CS-REAL-613" },
  { name: "Eloiza Freitas de Almeida", matricula: "CS-REAL-622" },
  { name: "Emanuelly Quinaglia Liberato", matricula: "CS-REAL-362" },
  { name: "Emerson Travinski Rufino", matricula: "CS-REAL-461" },
  { name: "Evellyn Ferreira da Silva", matricula: "CS-REAL-280" },
  { name: "Fabiana Vanessa da Silva Aguiar", matricula: "CS-REAL-755" },
  { name: "Felipe da Costa Freitas", matricula: "CS-REAL-447" },
  { name: "Flávia Mendes Cardoso de Oliveira", matricula: "CS-REAL-566" },
  { name: "Francisco de Moraes Monteiro", matricula: "CS-REAL-754" },
  { name: "Gabriel José Andrade Oliveira", matricula: "CS-REAL-648" },
  { name: "Gabriel Paulino ranucci", matricula: "CS-REAL-705" },
  { name: "Gabriela Pereira Sousa Ribeiro", matricula: "CS-REAL-328" },
  { name: "Gabriela Porto Pereira", matricula: "CS-REAL-442" },
  { name: "Gabriella Omelli Vieira Borges", matricula: "CS-REAL-441" },
  { name: "Gabriella Pereira de Almeida", matricula: "CS-REAL-456" },
  { name: "Gabrielly Alcides Nonato", matricula: "CS-REAL-387" },
  { name: "Gerson da Silva Mesquita Sobrinho", matricula: "CS-REAL-384" },
  { name: "Giovana Santos Amaral", matricula: "CS-REAL-486" },
  { name: "Giovanna de Moura", matricula: "CS-REAL-503" },
  { name: "Giovanna Guerra", matricula: "CS-REAL-716" },
  { name: "Giovanna Jaqueline de Souza", matricula: "CS-REAL-430" },
  { name: "Giulia Menotti Mucelli", matricula: "CS-REAL-547" },
  { name: "Giuliana Cristini Caliari", matricula: "CS-REAL-118" },
  { name: "Glaucia Bottino de Souza", matricula: "CS-REAL-677" },
  { name: "Glinia Maria Bastos Silva Alves", matricula: "CS-REAL-465" },
  { name: "Grace Anne da Costa Claudino", matricula: "CS-REAL-710" },
  { name: "Gustavo Portela Soares", matricula: "CS-REAL-634" },
  { name: "Heitor Miranda Ribeiro", matricula: "CS-REAL-521" },
  { name: "Helen Conceição Rodrigues da Silva", matricula: "CS-REAL-596" },
  { name: "Heloah Maia Felicio", matricula: "CS-REAL-519" },
  { name: "Heloany Guedes Ferreira", matricula: "CS-REAL-723" },
  { name: "Heloisa Celestino da Fonseca", matricula: "CS-REAL-514" },
  { name: "Heloisa Helena Macedo Novaes", matricula: "CS-REAL-525" },
  { name: "Heloisa Teles Ribeiro", matricula: "CS-REAL-236" },
  { name: "Iara de Sousa Torres Correia", matricula: "CS-REAL-789" },
  { name: "Ingrid Cristina Oliveira Rocha", matricula: "CS-REAL-738" },
  { name: "Ingrid de Oliveira Rocha Feitosa", matricula: "CS-REAL-570" },
  { name: "Irlany Matos de Moura Santos", matricula: "CS-REAL-347" },
  { name: "Isaac Matheus Alves da Silva", matricula: "CS-REAL-506" },
  { name: "Isabel da Graça Canga Buza", matricula: "CS-REAL-308" },
  { name: "Isabela Beserra Gomes de Souza", matricula: "CS-REAL-636" },
  { name: "Isabela de Melo Rafael", matricula: "CS-REAL-757" },
  { name: "Isabela Moretto de Souza", matricula: "CS-REAL-612" },
  { name: "Isabela Rogério dos Santos", matricula: "CS-REAL-371" },
  { name: "Isabella Geovana de Paula Borba", matricula: "CS-REAL-156" },
  { name: "Isabella Rossi", matricula: "CS-REAL-508" },
  { name: "Isadora Quadrelli Lopes", matricula: "CS-REAL-365" },
  { name: "Izabela Garcia da Silva", matricula: "CS-REAL-79" },
  { name: "Jamila Luciana da Luz", matricula: "CS-REAL-786" },
  { name: "Jarrier Oliveira Ferreira", matricula: "CS-REAL-174" },
  { name: "Jessica Bertoldo Batista de Oliveira", matricula: "CS-REAL-698" },
  { name: "Jheniffer Dias Pereira", matricula: "CS-REAL-493" },
  { name: "Jhonatan Alexandre Celestino da Silva", matricula: "CS-REAL-476" },
  { name: "Joana Gabriela Amorim", matricula: "CS-REAL-490" },
  { name: "Joana Querola Souza Silva", matricula: "CS-REAL-450" },
  { name: "Joana Sandy da Silva Oliveira", matricula: "CS-REAL-784" },
  { name: "João Fabio Magalhães Silva", matricula: "CS-REAL-730" },
  { name: "José Natan de Jesus Costa", matricula: "CS-REAL-640" },
  { name: "Julia Araújo Paiva", matricula: "CS-REAL-487" },
  { name: "Júlia Beatriz de Castro Santos", matricula: "CS-REAL-776" },
  { name: "Júlia Gomes Araújo", matricula: "CS-REAL-767" },
  { name: "Juliana Ferreira de Pinho", matricula: "CS-REAL-492" },
  { name: "Juliana Peixoto Rodrigues Neves", matricula: "CS-REAL-345" },
  { name: "Juliana Teixeira de Almeida Alves", matricula: "CS-REAL-184" },
  { name: "Julie Fani Agüero da Fraga", matricula: "CS-REAL-593" },
  { name: "Karina Cristina da Silva", matricula: "CS-REAL-736" },
  { name: "Karolina Cristina da Silva", matricula: "CS-REAL-735" },
  { name: "Karolini de Carvalho Spindola", matricula: "CS-REAL-769" },
  { name: "Kauane Beatriz Wendling Luz", matricula: "CS-REAL-572" },
  { name: "Kaylane Macedo da Silva", matricula: "CS-REAL-469" },
  { name: "Kelly Tais Melle", matricula: "CS-REAL-452" },
  { name: "Kemelyn Kauane Bottino de Souza Macedo", matricula: "CS-REAL-678" },
  { name: "Ketlyn Nonato da Silva", matricula: "CS-REAL-483" },
  { name: "Klaizy Caroline Demonel dos Santos Souza", matricula: "CS-REAL-532" },
  { name: "Lara Rabay", matricula: "CS-REAL-602" },
  { name: "Laryssa Emily Carneiro dos Santos", matricula: "CS-REAL-714" },
  { name: "Laura Coelho Aniceto", matricula: "CS-REAL-212" },
  { name: "Laura Luísa de Castro Moreira", matricula: "CS-REAL-215" },
  { name: "Laura Maria Derosa Martins", matricula: "CS-REAL-654" },
  { name: "Laura Mariana de Santana Pereira", matricula: "CS-REAL-603" },
  { name: "Lays Cristine Gomes da Silva", matricula: "CS-REAL-444" },
  { name: "Lays Franco", matricula: "CS-REAL-397" },
  { name: "Leonardo Melicio", matricula: "CS-REAL-651" },
  { name: "Letícia de Angeli Dantas", matricula: "CS-REAL-599" },
  { name: "Leticia dos Reis Bussata", matricula: "CS-REAL-782" },
  { name: "Letícia Grenfell Leite", matricula: "CS-REAL-700" },
  { name: "Letícia Marques Lobo de Miranda", matricula: "CS-REAL-670" },
  { name: "Letícia Sales Ladeira", matricula: "CS-REAL-695" },
  { name: "Leticia Wanderley Rossi", matricula: "CS-REAL-507" },
  { name: "Linda Loryn Rodrigues", matricula: "CS-REAL-691" },
  { name: "Lis Gutierriz", matricula: "CS-REAL-52" },
  { name: "Lorena Durães Salavian Borin", matricula: "CS-REAL-704" },
  { name: "Lorena Schuindt Silva", matricula: "CS-REAL-535" },
  { name: "Lorrayna Marys da Silva França", matricula: "CS-REAL-779" },
  { name: "Luana de Almeida Toledo Oliveira", matricula: "CS-REAL-426" },
  { name: "Luana Karen Lauriano Rebouças", matricula: "CS-REAL-702" },
  { name: "Luara de Castro Gaida", matricula: "CS-REAL-664" },
  { name: "Lucas Gambale", matricula: "CS-REAL-283" },
  { name: "Luciane de Azevedo Cunha", matricula: "CS-REAL-765" },
  { name: "Marcella Ferreira Araujo", matricula: "CS-REAL-598" },
  { name: "Maria Carolina de Alcantara Adao", matricula: "CS-REAL-719" },
  { name: "Maria Clara Pereira Dominguez", matricula: "CS-REAL-679" },
  { name: "Maria Clara Serafim Zanatta", matricula: "CS-REAL-562" },
  { name: "Maria Eduarda Azevedo da Conceição", matricula: "CS-REAL-665" },
  { name: "Maria Eduarda Bernardo Alves", matricula: "CS-REAL-758" },
  { name: "Maria Eduarda Dedone Costa", matricula: "CS-REAL-455" },
  { name: "Maria Eduarda Garcia Molinari", matricula: "CS-REAL-214" },
  { name: "Maria Eduarda Kaadi", matricula: "CS-REAL-711" },
  { name: "Maria Eduarda Marcolino", matricula: "CS-REAL-496" },
  { name: "Maria Eduarda Mendonça", matricula: "CS-REAL-539" },
  { name: "Maria Eduarda Silveira Trindade", matricula: "CS-REAL-336" },
  { name: "Maria Luiza Matos Mileski", matricula: "CS-REAL-531" },
  { name: "Mariana Cruz Guedes", matricula: "CS-REAL-573" },
  { name: "Mariana Goes Câmara", matricula: "CS-REAL-579" },
  { name: "Mayara Portes Luiz", matricula: "CS-REAL-350" },
  { name: "Melyssa Tixiliski Souza", matricula: "CS-REAL-740" },
  { name: "Micheli Johansson", matricula: "CS-REAL-309" },
  { name: "Mikeila Gregorio", matricula: "CS-REAL-778" },
  { name: "Mirella Ayla Lima de Oliveira", matricula: "CS-REAL-756" },
  { name: "Miriã Rocha Carneiro", matricula: "CS-REAL-434" },
  { name: "Nágila Carolini de Andrade Thomaz", matricula: "CS-REAL-720" },
  { name: "Nathalia da Silva Rodrigues Gonçalves", matricula: "CS-REAL-777" },
  { name: "Nathan Motta Moura", matricula: "CS-REAL-213" },
  { name: "Noemi Paiva Barbosa de Sousa", matricula: "CS-REAL-759" },
  { name: "Noemy de Almeida Trindade Cunha", matricula: "CS-REAL-662" },
  { name: "Nycole Poliana Andrade Miller", matricula: "CS-REAL-787" },
  { name: "Paloma de Sousa Santana", matricula: "CS-REAL-576" },
  { name: "Paolo dos Santos Ramos", matricula: "CS-REAL-615" },
  { name: "Patricia de Oliveira Gaglioni", matricula: "CS-REAL-275" },
  { name: "Paula Brum de Brito", matricula: "CS-REAL-744" },
  { name: "Pedro Henrique Borges Pereira", matricula: "CS-REAL-708" },
  { name: "Pietra Daniella de Moraes Vieira", matricula: "CS-REAL-733" },
  { name: "Príscilla Andrade Ribeiro Gomes", matricula: "CS-REAL-436" },
  { name: "Priscilla Correa Mineiro Cortes", matricula: "CS-REAL-772" },
  { name: "Quézia Duarte Alves", matricula: "CS-REAL-545" },
  { name: "Rafaela Azevedo Santos Landulfo", matricula: "CS-REAL-454" },
  { name: "Rafaela Cristina Reinheimer", matricula: "CS-REAL-432" },
  { name: "Rafaela Dascioras Model Kulba", matricula: "CS-REAL-641" },
  { name: "Rafaella Fernandes da Silva", matricula: "CS-REAL-688" },
  { name: "Raissa Michaely Lorenz", matricula: "CS-REAL-558" },
  { name: "Raquel Vieira de Sousa", matricula: "CS-REAL-474" },
  { name: "Rayane de Oliveira Machado", matricula: "CS-REAL-747" },
  { name: "Rayssa Nailla Santos Duarte", matricula: "CS-REAL-553" },
  { name: "Rebeca Nicolella Abdalla", matricula: "CS-REAL-637" },
  { name: "Rebecca Louise Passarelli Coutinho", matricula: "CS-REAL-749" },
  { name: "Rhania Nogueira de Assis Araújo", matricula: "CS-REAL-556" },
  { name: "Rodolfo Mecislaw de Freitas Jucas", matricula: "CS-REAL-656" },
  { name: "Romario Leite Da Silva", matricula: "CS-REAL-743" },
  { name: "Rozalina de Fatima Vauruk", matricula: "CS-REAL-448" },
  { name: "Sâmia de Castro Ribeiro", matricula: "CS-REAL-781" },
  { name: "Samuel Henrique Duarte Mascarin", matricula: "CS-REAL-685" },
  { name: "Samyne Fernanda Marcolino Lana", matricula: "CS-REAL-475" },
  { name: "Sandra Cristina Nunes Pedro", matricula: "CS-REAL-594" },
  { name: "Sandra Macedo Travinski Rufino", matricula: "CS-REAL-460" },
  { name: "Sarah Santos de Jesus Pacini", matricula: "CS-REAL-728" },
  { name: "Síntique de Paula Fonseca", matricula: "CS-REAL-449" },
  { name: "Sofhia Fonseca Barbosa de oliveira", matricula: "CS-REAL-731" },
  { name: "Sophia de Albuquerque Ribeiro Soares", matricula: "CS-REAL-788" },
  { name: "Sophia Lopes Zanardo", matricula: "CS-REAL-302" },
  { name: "Sophia Martins Bandeira", matricula: "CS-REAL-783" },
  { name: "Sophia Oliveira da Costa", matricula: "CS-REAL-780" },
  { name: "Sophia Siqueira Gruvinelo", matricula: "CS-REAL-574" },
  { name: "Sophia Vanelli Silva", matricula: "CS-REAL-338" },
  { name: "Stephany Kathleen Ferreira Yoshimoto", matricula: "CS-REAL-655" },
  { name: "Sthefany Leticia Orlandini Domingues", matricula: "CS-REAL-240" },
  { name: "Tatiana Ferreira Gonçalves", matricula: "CS-REAL-713" },
  { name: "Thais Guerra Oliveira", matricula: "CS-REAL-624" },
  { name: "Thalita Góis dos Santos", matricula: "CS-REAL-625" },
  { name: "Thalyta Shirley Queiroz", matricula: "CS-REAL-419" },
  { name: "Thamires Jurado Chiarelli", matricula: "CS-REAL-737" },
  { name: "Thamires Monteiro Rodrigues", matricula: "CS-REAL-482" },
  { name: "Tieza Raquel Alves", matricula: "CS-REAL-752" },
  { name: "Vitória Margarida Simôa de Lima", matricula: "CS-REAL-473" },
  { name: "Vitória Paulino Barbieri", matricula: "CS-REAL-751" },
  { name: "Vitória Travinski Rufino", matricula: "CS-REAL-462" },
  { name: "Wanessa Gomes de Sousa", matricula: "CS-REAL-536" },
  { name: "Yasmin vitória de Sousa Mendes", matricula: "CS-REAL-619" },
  { name: "Ynis Gabrielle da Costa Morais", matricula: "CS-REAL-725" },
];

function buildRealStudents() {
  return REAL_STUDENTS_RAW.map((r, i) => {
    const frequencia = 60 + ((r.name.length * 7 + i * 3) % 40);
    const licaoCasa = 55 + ((r.name.length * 11 + i * 5) % 45);
    const score = Math.round(frequencia * 0.6 + licaoCasa * 0.4);
    return {
      name: r.name,
      matricula: r.matricula,
      turmaId: null,
      turmaNome: "Sem turma definida",
      individual: false,
      frequencia, licaoCasa, score,
      financeiro: (r.name.length + i * 3) % 6 !== 0 ? "adimplente" : "inadimplente",
      onboarding: true,
      primeiraAula: true,
    };
  });
}
const ALL_STUDENTS = buildRealStudents();

const MEDIA_ALUNOS_POR_TURMA = 5.41;
const TOTAL_TURMAS = 46; // per source report, all statuses ("Total de Registros")
// Total real de alunos cadastrados, do relatório "Dados do Cadastro do Aluno"
// (Sponte Web, 24/07/2026) — 236 registros únicos de nome+matrícula. As
// turmas/roster individuais abaixo continuam ilustrativas (o relatório não
// linka aluno → turma de forma confiável), mas este número no Painel é real.
const TOTAL_ALUNOS_REAL = 236;

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
    materialUrl: `https://drive.google.com/commission-school/${turma.id}-aula-${i + 1}`,
  }));
}

// Jornada da turma — marcos de apresentação de projeto (ilustrativo).
const PROJETOS_POOL = ["Apresentação em família", "Projeto: minha rotina em inglês", "Devocional apresentado à turma", "Projeto final de estágio"];
const PROJETOS_DATAS = ["17/05", "14/06", "12/07", "09/08"];
function projetosFor(turma) {
  const doneCount = turma.estagio === "First Steps" ? 1 : turma.estagio === "Mid Journey" ? 2 : 3;
  return PROJETOS_POOL.map((nome, i) => ({
    nome,
    data: PROJETOS_DATAS[i],
    status: i < doneCount ? "concluido" : i === doneCount ? "proximo" : "pendente",
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
  ALL_STUDENTS, DEMO_STUDENTS, allTurmaOptions, findTurma, MEDIA_ALUNOS_POR_TURMA, TOTAL_TURMAS, TOTAL_ALUNOS_REAL, lessonLogFor,
  muralFor, internalNotesFor, classMuralFor, projetosFor,
};

})(); }
