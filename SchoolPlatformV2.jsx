// Merged app for the Commission School "Gestão Pedagógica" platform.
// Ported from the design system's ui_kits/school-platform/*.jsx (Home,
// TeacherLogin, StudentLogin, Mention, ProfilePage, Dashboard, TurmaDetail,
// StudentArea, StudentsAdmin) plus the App/StaffShell/StudentShell/TopBar
// glue that originally lived inline in that kit's index.html. Combined into
// one file so it can be mounted as a single x-import from the DC.
//
// Depends on window.SchoolData (data.js) and window.CommissionSchoolDesignSystem_c6e6c2
// (design-system bundle) being loaded before this file, and <image-slot>
// (image-slot.js) being registered.

const LOGO = (window.__resources && window.__resources.commissionLogo) || "commission-logo.jpg";
const NIVEIS_TURMA = ["Básico", "Intermediário", "Avançado"];
const NIVEL_MAP = { "First Steps": "Básico", "Mid Journey": "Intermediário", "High Riders": "Avançado" };
const STICKER_EXT = { "star-blue": "svg", "star-red": "svg" };
const stickerSrc = (name) => `./assets/illustrations/${name}.${STICKER_EXT[name] || "png"}`;

const MES_WEEK = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
function weekNumberOf(y, m, day) {
  const d = new Date(Date.UTC(y, m, day));
  const dayNum = (d.getUTCDay() + 6) % 7;
  d.setUTCDate(d.getUTCDate() - dayNum + 3);
  const firstThursday = new Date(Date.UTC(d.getUTCFullYear(), 0, 4));
  return 1 + Math.round(((d - firstThursday) / 86400000 - 3 + ((firstThursday.getUTCDay() + 6) % 7)) / 7);
}
function MonthCalendar({ monthDate, setMonthDate, eventsForDay, onDayClick, dotColor }) {
  const stickerName = dotColor === "var(--red-600)" ? "star-red" : "star-blue";
  const y = monthDate.getFullYear(), m = monthDate.getMonth();
  const firstDow = (new Date(y, m, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(y, m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  const today = new Date();
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
        <button onClick={() => setMonthDate(new Date(y, m - 1, 1))} style={{ all: "unset", cursor: "pointer", font: "600 16px var(--font-body)", padding: "4px 10px", background: "#f2f2f2" }}>‹</button>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "24px", minWidth: 200, textTransform: "capitalize" }}>{monthDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</span>
        <button onClick={() => setMonthDate(new Date(y, m + 1, 1))} style={{ all: "unset", cursor: "pointer", font: "600 16px var(--font-body)", padding: "4px 10px", background: "#f2f2f2" }}>›</button>
        <button onClick={() => setMonthDate(new Date())} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", padding: "6px 14px", background: "var(--blue-600)", color: "#fff" }}>Hoje</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", border: "1px solid #eee" }}>
        {MES_WEEK.map((d) => (
          <div key={d} style={{ font: "600 11px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", padding: "8px 0", borderBottom: "2px solid var(--gray-900)" }}>{d}</div>
        ))}
        {cells.map((day, i) => {
          const eventos = day ? eventsForDay(day) : [];
          const isToday = day && y === today.getFullYear() && m === today.getMonth() && day === today.getDate();
          const isMonday = i % 7 === 0;
          return (
            <div
              key={i}
              onClick={() => day && eventos.length > 0 && onDayClick(day, eventos)}
              style={{ minHeight: 92, borderRight: "1px solid #f2f2f2", borderBottom: "1px solid #f2f2f2", padding: 6, display: "flex", flexDirection: "column", gap: 4, background: day ? "#fff" : "#fafafa", cursor: day && eventos.length > 0 ? "pointer" : "default", position: "relative" }}
            >
              {day && isMonday && <span style={{ position: "absolute", top: 4, left: 6, font: "400 10px var(--font-body)", color: "#ccc" }}>sem {weekNumberOf(y, m, day)}</span>}
              {day && (
                <React.Fragment>
                  <span style={{ alignSelf: "flex-end", font: "600 12px var(--font-body)", color: isToday ? "#fff" : "#999", background: isToday ? "var(--blue-600)" : "transparent", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>{day}</span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: "auto" }}>
                    {eventos.map((ev, k) => (
                      <img key={k} src={stickerSrc(ev.icon || stickerName)} alt="" title={ev.label} style={{ height: 14 }} />
                    ))}
                  </div>
                </React.Fragment>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
function Home({ onEnterStaff, onEnterStudent }) {
  return (
    <div style={{ minHeight: "100%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-body)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 70, left: 90, width: 14, height: 14, borderRadius: "50%", background: "var(--blue-600)" }} />
      <div style={{ position: "absolute", top: 110, left: 120, width: 7, height: 7, borderRadius: "50%", background: "var(--red-600)" }} />
      <div style={{ position: "absolute", bottom: 90, right: 110, width: 18, height: 18, borderRadius: "50%", background: "var(--red-600)" }} />
      <div style={{ position: "absolute", bottom: 140, right: 80, width: 9, height: 9, borderRadius: "50%", background: "var(--blue-600)" }} />
      <div style={{ position: "absolute", top: 220, right: 160, width: 8, height: 8, borderRadius: "50%", background: "var(--blue-600)", opacity: 0.5 }} />

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 22, maxWidth: 640, textAlign: "center" }}>
        <img src={LOGO} alt="Commission School" style={{ height: 90 }} />
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 40, lineHeight: "40px", color: "var(--gray-900)", whiteSpace: "nowrap" }}>Bem-vindo à Commission School</div>
          <div style={{ font: "400 16px var(--font-body)", color: "#777", marginTop: 20 }}>Plataforma de gestão pedagógica</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", marginTop: 10 }}>
          <button onClick={onEnterStaff} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "14px 0", textAlign: "center", font: "600 16px var(--font-body)" }}>
            Entrar como Equipe / Professor
          </button>
          <button onClick={onEnterStudent} style={{ all: "unset", cursor: "pointer", background: "var(--red-600)", color: "#fff", padding: "14px 0", textAlign: "center", font: "600 16px var(--font-body)" }}>
            Entrar como Aluno
          </button>
        </div>
      </div>
    </div>
  );
}
window.Home = Home;
}

{
const { TEACHERS } = window.SchoolData;

function TeacherLogin({ onLogin, onBack }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [selected, setSelected] = React.useState("Equipe");

  const submit = (e) => {
    e.preventDefault();
    onLogin(selected);
  };

  return (
    <div style={{ minHeight: "100%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-body)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 60, left: 80, width: 12, height: 12, borderRadius: "50%", background: "var(--blue-600)" }} />
      <div style={{ position: "absolute", top: 100, left: 110, width: 7, height: 7, borderRadius: "50%", background: "var(--red-600)" }} />
      <div style={{ position: "absolute", bottom: 80, right: 100, width: 16, height: 16, borderRadius: "50%", background: "var(--red-600)" }} />
      <div style={{ position: "absolute", bottom: 130, right: 70, width: 8, height: 8, borderRadius: "50%", background: "var(--blue-600)" }} />

      <form onSubmit={submit} style={{ width: 360, display: "flex", flexDirection: "column", gap: 16, border: "1px solid #eee", padding: 36 }}>
        <button type="button" onClick={onBack} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--blue-600)", alignSelf: "flex-start" }}>← Voltar</button>
        <img src={LOGO} alt="Commission School" style={{ height: 46, alignSelf: "center" }} />
        <span style={{ font: "400 14px var(--font-body)", color: "#888", textAlign: "center", marginBottom: 4 }}>Login da equipe / professor</span>

        <label style={{ font: "600 12px var(--font-body)", color: "#777", textTransform: "uppercase" }}>E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="professor@commissionschool.com" style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)", outline: "none" }} />

        <label style={{ font: "600 12px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Senha</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)", outline: "none" }} />

        <label style={{ font: "600 12px var(--font-body)", color: "#777", textTransform: "uppercase", marginTop: 8 }}>Entrar como (demo)</label>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)" }}>
          <option value="Equipe">Equipe (acesso geral)</option>
          {TEACHERS.map((t) => <option key={t} value={t}>{t} (professor)</option>)}
        </select>

        <button type="submit" style={{ all: "unset", cursor: "pointer", marginTop: 10, background: "var(--red-600)", color: "#fff", padding: "12px 0", textAlign: "center", font: "600 15px var(--font-body)" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
window.TeacherLogin = TeacherLogin;
}

{
const { DEMO_STUDENTS } = window.SchoolData;

function StudentLogin({ onLogin, onBack }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [selected, setSelected] = React.useState(DEMO_STUDENTS[0].matricula);

  const submit = (e) => {
    e.preventDefault();
    const student = DEMO_STUDENTS.find((s) => s.matricula === selected);
    onLogin(student);
  };

  return (
    <div style={{ minHeight: "100%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-body)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 60, right: 90, width: 12, height: 12, borderRadius: "50%", background: "var(--red-600)" }} />
      <div style={{ position: "absolute", bottom: 90, left: 100, width: 16, height: 16, borderRadius: "50%", background: "var(--blue-600)" }} />

      <form onSubmit={submit} style={{ width: 360, display: "flex", flexDirection: "column", gap: 16, border: "1px solid #eee", padding: 36 }}>
        <button type="button" onClick={onBack} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--blue-600)", alignSelf: "flex-start" }}>← Voltar</button>
        <img src={LOGO} alt="Commission School" style={{ height: 46, alignSelf: "center" }} />
        <span style={{ font: "400 14px var(--font-body)", color: "#888", textAlign: "center", marginBottom: 4 }}>Login do aluno</span>

        <label style={{ font: "600 12px var(--font-body)", color: "#777", textTransform: "uppercase" }}>E-mail</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="aluno@email.com" style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)", outline: "none" }} />

        <label style={{ font: "600 12px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Senha</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)", outline: "none" }} />

        <label style={{ font: "600 12px var(--font-body)", color: "#777", textTransform: "uppercase", marginTop: 8 }}>Entrar como (demo)</label>
        <select value={selected} onChange={(e) => setSelected(e.target.value)} style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)" }}>
          {DEMO_STUDENTS.map((s) => (
            <option key={s.matricula} value={s.matricula}>{s.name} — {s.turmaNome}</option>
          ))}
        </select>

        <button type="submit" style={{ all: "unset", cursor: "pointer", marginTop: 10, background: "var(--blue-600)", color: "#fff", padding: "12px 0", textAlign: "center", font: "600 15px var(--font-body)" }}>
          Entrar
        </button>
      </form>
    </div>
  );
}
window.StudentLogin = StudentLogin;
}

{
function MentionText({ text }) {
  if (!text) return null;
  const parts = text.split(/(@[a-zA-Zà-úÀ-Ú]+)/g);
  return (
    <React.Fragment>
      {parts.map((p, i) =>
        p.startsWith("@") ? (
          <span key={i} style={{ color: "var(--blue-600)", fontWeight: 600 }}>{p}</span>
        ) : (
          <React.Fragment key={i}>{p}</React.Fragment>
        )
      )}
    </React.Fragment>
  );
}

function MentionPicker({ staff, onPick }) {
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {staff.map((s) => (
        <button
          key={s.handle}
          type="button"
          onClick={() => onPick(s.handle)}
          style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", color: "var(--blue-600)", border: "1px solid var(--blue-600)", padding: "3px 8px" }}
        >
          {s.handle}
        </button>
      ))}
    </div>
  );
}
window.MentionText = MentionText;
window.MentionPicker = MentionPicker;
}

{
function ProfilePage({ name, subtitle, matricula, handle, slotId }) {
  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)", padding: 32 }}>
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 28, lineHeight: "28px", display: "block", marginBottom: 24 }}>Meu Perfil</span>
      <div style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
        <image-slot
          id={slotId}
          style={{ width: 140, height: 140 }}
          shape="circle"
          placeholder="Arraste sua foto"
        ></image-slot>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingTop: 4 }}>
          <div>
            <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Nome</div>
            <div style={{ font: "600 20px var(--font-body)" }}>{name}</div>
          </div>
          <div>
            <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>{subtitle.label}</div>
            <div style={{ font: "400 15px var(--font-body)" }}>{subtitle.value}</div>
          </div>
          {matricula && (
            <div>
              <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Matrícula</div>
              <div style={{ font: "400 15px var(--font-body)" }}>{matricula}</div>
            </div>
          )}
          {handle && (
            <div>
              <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Usuário</div>
              <div style={{ font: "600 15px var(--font-body)", color: "var(--blue-600)" }}>{handle}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
window.ProfilePage = ProfilePage;
}

{
const { GROUP_TURMAS, INDIVIDUAL_TURMAS } = window.SchoolData;

function Dashboard({ onOpenTurma, teacherFilter }) {
  const { Pill, OccupancyMeter, InitialsAvatar } = window.CommissionSchoolDesignSystem_c6e6c2;
  const [query, setQuery] = React.useState("");

  const turmas = (teacherFilter ? GROUP_TURMAS.filter((t) => t.professor === teacherFilter) : GROUP_TURMAS)
    .filter((t) => t.nome.toLowerCase().includes(query.toLowerCase()));

  const individualTurmas = teacherFilter ? INDIVIDUAL_TURMAS.filter((t) => t.professor === teacherFilter) : INDIVIDUAL_TURMAS;

  const alertTurmas = GROUP_TURMAS.filter((t) => t.ocupacao >= 90);
  const spotlight = alertTurmas[0] || GROUP_TURMAS[0];

  const totalAlunos = window.SchoolData.TOTAL_ALUNOS_REAL;
  const totalTurmas = GROUP_TURMAS.length + INDIVIDUAL_TURMAS.length;
  const totalProfessores = new Set([...GROUP_TURMAS.map((t) => t.professor), ...INDIVIDUAL_TURMAS.map((t) => t.professor)].filter(Boolean)).size;

  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "14px 32px", borderBottom: "1px solid #eee" }}>
        <span style={{ font: "600 13px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {teacherFilter ? `Painel do professor · ${teacherFilter}` : "Painel da equipe"}
        </span>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar turma…"
          style={{ marginLeft: "auto", border: "1px solid #ddd", padding: "8px 12px", font: "400 14px var(--font-body)", width: 220, outline: "none" }}
        />
      </div>

      {!teacherFilter && (
        <div style={{ display: "flex", gap: 0, padding: "18px 32px 0" }}>
          {[
            ["Total de alunos", totalAlunos],
            ["Turmas ativas", totalTurmas],
            ["Professores", totalProfessores],
            ["Média alunos/turma", window.SchoolData.MEDIA_ALUNOS_POR_TURMA],
          ].map(([label, value], i) => (
            <div key={label} style={{ padding: "0 28px", borderLeft: i > 0 ? "1px solid #eee" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 34, lineHeight: "34px", color: "var(--gray-900)" }}>{value}</div>
              <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.04em" }}>{label}</div>
            </div>
          ))}
        </div>
      )}

      {!teacherFilter && (
        <div
          onClick={() => onOpenTurma(spotlight.id)}
          style={{
            margin: "24px 32px",
            padding: "36px 40px",
            background: "var(--blue-600)",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: 10,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <span style={{ font: "400 15px var(--font-body)", opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {spotlight.ocupacao >= 100 ? "Turma acima da capacidade" : "Turma em destaque"}
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: "50px", letterSpacing: "0.01em", whiteSpace: "nowrap" }}>{spotlight.nome}</span>
          <span style={{ font: "400 18px var(--font-body)", maxWidth: 640 }}>
            Prof. {spotlight.professor} · {spotlight.horario} · {spotlight.matriculados}/{spotlight.maximo} matriculados ({spotlight.ocupacao}%)
          </span>
          <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
            <span style={{ background: "#fff", color: "var(--blue-600)", padding: "10px 20px", font: "600 14px var(--font-body)" }}>Ver turma</span>
            {spotlight.aguardandoVaga > 0 && <Pill tone="red">{spotlight.aguardandoVaga} aguardando vaga</Pill>}
          </div>
          <div style={{ position: "absolute", top: 20, right: 30, width: 10, height: 10, borderRadius: "50%", background: "var(--red-600)" }} />
          <div style={{ position: "absolute", top: 44, right: 54, width: 6, height: 6, borderRadius: "50%", background: "var(--red-600)", opacity: 0.6 }} />
        </div>
      )}

      <div style={{ padding: "8px 32px 40px", display: "flex", flexDirection: "column", gap: 30 }}>
        {turmas.map((t) => (
          <div key={t.id}>
            <div
              onClick={() => onOpenTurma(t.id)}
              style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10, cursor: "pointer" }}
            >
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px", color: "var(--gray-900)", whiteSpace: "nowrap" }}>{t.nome}</span>
              <Pill tone="blue">{t.estagio}</Pill>
              {t.ocupacao >= 90 && <Pill tone="red">{t.ocupacao >= 100 ? "Acima da capacidade" : "Quase lotada"}</Pill>}
              {t.aguardandoVaga > 0 && <Pill tone="outline">{t.aguardandoVaga} na espera</Pill>}
              <span style={{ marginLeft: "auto", font: "400 14px var(--font-body)", color: "#888" }}>
                Prof. {t.professor} · {t.horario}
              </span>
            </div>
            <OccupancyMeter occupied={t.matriculados} max={t.maximo} style={{ marginBottom: 12, maxWidth: 320 }} />
            <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 6 }}>
              {t.alunos.map((a) => (
                <div key={a.matricula} style={{ flex: "none", width: 128, border: "1px solid #eee", padding: 12, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <InitialsAvatar name={a.name} size={48} />
                  <span style={{ font: "600 13px var(--font-body)", color: "var(--gray-900)", textAlign: "center" }}>{a.name}</span>
                  <span style={{ font: "400 11px var(--font-body)", color: "#999" }}>{a.matricula}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {individualTurmas.length > 0 && (
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px", color: "var(--gray-900)", whiteSpace: "nowrap" }}>Aulas Individuais</span>
              <span style={{ font: "400 14px var(--font-body)", color: "#888" }}>{individualTurmas.length} aluno(s) em aula 1:1</span>
            </div>
            <div style={{ display: "flex", gap: 14, overflowX: "auto", paddingBottom: 6 }}>
              {individualTurmas.map((t) => (
                <div key={t.id} style={{ flex: "none", width: 168, border: "1px solid #eee", padding: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                  <InitialsAvatar name={t.nome} size={40} />
                  <span style={{ font: "600 13px var(--font-body)" }}>{t.nome}</span>
                  <span style={{ font: "400 11px var(--font-body)", color: "#999" }}>{t.matricula}</span>
                  <span style={{ font: "400 12px var(--font-body)", color: "#888" }}>Prof. {t.professor} · {t.horario}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {teacherFilter && turmas.length === 0 && individualTurmas.length === 0 && (
          <div style={{ font: "400 15px var(--font-body)", color: "#888", padding: "20px 0" }}>
            Nenhuma turma encontrada para {teacherFilter}.
          </div>
        )}
      </div>
    </div>
  );
}
window.Dashboard = Dashboard;
}

{
const { findTurma, lessonLogFor, internalNotesFor, STAFF } = window.SchoolData;

function TurmaDetail({ turmaId, onBack }) {
  const { Pill, OccupancyMeter, InitialsAvatar } = window.CommissionSchoolDesignSystem_c6e6c2;
  const turma = findTurma(turmaId);
  const [tab, setTab] = React.useState("aulas");
  const [notes, setNotes] = React.useState(() => internalNotesFor(turma));
  const [draft, setDraft] = React.useState("");
  const [lessons, setLessons] = React.useState(() => lessonLogFor(turma).map((l) => ({ ...l, presentes: [...l.presentes] })));
  const [expanded, setExpanded] = React.useState(null);
  const [aulasView, setAulasView] = React.useState("lista");
  const [aulasMonth, setAulasMonth] = React.useState(() => (window.SchoolData.lessonLogFor ? new Date(2026, (parseInt((lessonLogFor(turma)[0] || {}).data?.split("/")[1] || "6", 10) - 1), 1) : new Date()));
  const [projetos, setProjetos] = React.useState(() => window.SchoolData.projetosFor(turma));
  const [projetoModal, setProjetoModal] = React.useState(null);
  const [estagio, setEstagio] = React.useState(() => (turma && NIVEL_MAP[turma.estagio]) || "Básico");

  if (!turma) return null;

  const jornadaPct = Math.round((projetos.filter((p) => p.status === "concluido").length / projetos.length) * 100);

  const frequencia = (aluno) => {
    const total = lessons.length;
    const presentes = lessons.filter((l) => l.presentes.includes(aluno.matricula)).length;
    return Math.round((presentes / total) * 100);
  };

  const toggleAttendance = (lessonIdx, matricula) => {
    setLessons((ls) => ls.map((l, i) => {
      if (i !== lessonIdx) return l;
      const has = l.presentes.includes(matricula);
      return { ...l, presentes: has ? l.presentes.filter((m) => m !== matricula) : [...l.presentes, matricula] };
    }));
  };

  const updateLessonContent = (lessonIdx, field, value) => {
    setLessons((ls) => ls.map((l, i) => (i === lessonIdx ? { ...l, [field]: value } : l)));
  };

  const attachPdf = (lessonIdx, file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLessons((ls) => ls.map((l, i) => (i === lessonIdx ? { ...l, anexoPdf: { name: file.name, url } } : l)));
  };

  const updateProjeto = (idx, patch) => setProjetos((ps) => ps.map((p, i) => (i === idx ? { ...p, ...patch } : p)));
  const attachProjetoPdf = (idx, file) => {
    if (!file) return;
    updateProjeto(idx, { anexoPdf: { name: file.name, url: URL.createObjectURL(file) } });
  };
  const removeProjetoPdf = (idx) => updateProjeto(idx, { anexoPdf: null });

  const removePdf = (lessonIdx) => {
    setLessons((ls) => ls.map((l, i) => (i === lessonIdx ? { ...l, anexoPdf: null } : l)));
  };

  const attachLink = (lessonIdx) => {
    setLessons((ls) => ls.map((l, i) => {
      if (i !== lessonIdx) return l;
      const url = (l.linkDraft || "").trim();
      if (!url) return l;
      return { ...l, anexoLink: url, linkDraft: "" };
    }));
  };

  const removeLink = (lessonIdx) => {
    setLessons((ls) => ls.map((l, i) => (i === lessonIdx ? { ...l, anexoLink: "" } : l)));
  };

  const addNote = () => {
    if (!draft.trim()) return;
    setNotes((m) => [{ autor: "Você", data: "hoje", texto: draft }, ...m]);
    setDraft("");
  };

  const insertMention = (handle) => setDraft((d) => (d ? d.trim() + " " + handle + " " : handle + " "));

  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)" }}>
      <div style={{ height: 160, position: "relative", background: "var(--blue-600)" }}>
        <image-slot id={"turma-cover-" + turma.id} shape="rect" style={{ width: "100%", height: "100%" }} placeholder="foto de capa"></image-slot>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 32px", borderBottom: "1px solid #eee" }}>
        <button onClick={onBack} style={{ all: "unset", cursor: "pointer", font: "600 14px var(--font-body)", color: "var(--blue-600)" }}>← Voltar</button>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 30, lineHeight: "30px", color: "var(--gray-900)", whiteSpace: "nowrap" }}>{turma.nome}</span>
        <select value={estagio} onChange={(e) => setEstagio(e.target.value)} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", color: "#fff", background: "var(--blue-600)", padding: "5px 12px", borderRadius: 999 }}>
          {NIVEIS_TURMA.map((n) => <option key={n} value={n} style={{ color: "#000", background: "#fff" }}>{n}</option>)}
        </select>
      </div>

      <div style={{ padding: "20px 32px", display: "flex", gap: 40, flexWrap: "wrap", borderBottom: "1px solid #eee" }}>
        <div>
          <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Professor</div>
          <div style={{ font: "600 16px var(--font-body)" }}>{turma.professor}</div>
        </div>
        <div>
          <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Horário</div>
          <div style={{ font: "600 16px var(--font-body)" }}>{turma.horario}</div>
        </div>
        <div>
          <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Início — Término</div>
          <div style={{ font: "700 21px var(--font-body)" }}>{turma.inicio} — {turma.termino || "em aberto"}</div>
        </div>
        <div style={{ minWidth: 200 }}>
          <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Ocupação</div>
          <OccupancyMeter occupied={turma.matriculados} max={turma.maximo} style={{ marginTop: 6 }} />
        </div>
        {turma.aguardandoVaga > 0 && (
          <div>
            <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Lista de espera</div>
            <Pill tone="red" style={{ marginTop: 4 }}>{turma.aguardandoVaga} aguardando vaga</Pill>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 4, padding: "16px 32px 0" }}>
        {[["aulas", "Calendário & Aulas"], ["presenca", "Relatório de Presença"], ["jornada", "Jornada da turma"], ["mural", "Observações Internas"]].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            style={{
              all: "unset", cursor: "pointer", padding: "10px 18px",
              font: "600 14px var(--font-body)",
              color: tab === key ? "#fff" : "var(--gray-900)",
              background: tab === key ? "var(--blue-600)" : "#f2f2f2",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ padding: 32 }}>
        {tab === "aulas" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ font: "400 13px var(--font-body)", color: "#999" }}>Clique em uma aula para ver o conteúdo e marcar presença.</span>
              <div style={{ display: "flex", gap: 2, marginLeft: "auto" }}>
                {[["lista", "Lista"], ["calendario", "Calendário"]].map(([key, label]) => (
                  <button key={key} onClick={() => setAulasView(key)} style={{ all: "unset", cursor: "pointer", padding: "6px 14px", font: "600 12px var(--font-body)", color: aulasView === key ? "#fff" : "var(--gray-900)", background: aulasView === key ? "var(--blue-600)" : "#f2f2f2" }}>{label}</button>
                ))}
              </div>
            </div>
            {aulasView === "calendario" && (
              <MonthCalendar
                monthDate={aulasMonth}
                setMonthDate={setAulasMonth}
                eventsForDay={(day) => lessons.map((l, i) => ({ l, i })).filter(({ l }) => { const [d, mo] = l.data.split("/").map(Number); return d === day && mo === aulasMonth.getMonth() + 1; }).map(({ l, i }) => ({ label: l.topico || "Aula", i }))}
                onDayClick={(day, eventos) => { setAulasView("lista"); setExpanded(eventos[0].i); }}
              />
            )}
            {aulasView === "lista" && lessons.map((l, i) => {
              const isOpen = expanded === i;
              return (
                <div key={i} style={{ border: "1px solid #eee", padding: 18, display: "flex", flexDirection: "column", gap: 8 }}>
                  <div
                    onClick={() => setExpanded(isOpen ? null : i)}
                    style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}
                  >
                    <span style={{ font: "700 22px var(--font-body)", color: "var(--blue-600)" }}>{l.data}</span>
                    <span style={{ font: "600 16px var(--font-body)" }}>{l.topico || "(sem registro de lição)"}</span>
                    <span style={{ marginLeft: "auto", font: "400 13px var(--font-body)", color: "#888" }}>
                      {l.presentes.length}/{turma.alunos.length} presentes
                    </span>
                    {(l.anexoPdf || l.anexoLink) && (
                      <span style={{ font: "600 12px var(--font-body)", color: "var(--blue-600)" }}>📎 anexo</span>
                    )}
                    <span style={{ font: "600 13px var(--font-body)", color: "var(--blue-600)" }}>{isOpen ? "Fechar ▲" : "Abrir ▾"}</span>
                  </div>

                  {!isOpen && (
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                      {turma.alunos.map((a) => (
                        <span
                          key={a.matricula}
                          title={a.name}
                          style={{
                            width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center",
                            font: "600 11px var(--font-body)", color: "#fff",
                            background: l.presentes.includes(a.matricula) ? "var(--blue-600)" : "var(--red-600)",
                          }}
                        >
                          {a.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                        </span>
                      ))}
                    </div>
                  )}

                  {isOpen && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 4 }}>
                      <div>
                        <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase", marginBottom: 4 }}>Conteúdo da aula</div>
                        <textarea
                          value={l.topico}
                          onChange={(e) => updateLessonContent(i, "topico", e.target.value)}
                          rows={2}
                          style={{ width: "100%", boxSizing: "border-box", border: "1px solid #ddd", padding: "8px 10px", font: "400 14px var(--font-body)", outline: "none", resize: "vertical" }}
                        />
                      </div>
                      <div>
                        <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase", marginBottom: 6 }}>Lista de presença — clique para marcar</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {turma.alunos.map((a) => {
                            const presente = l.presentes.includes(a.matricula);
                            return (
                              <div key={a.matricula} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                <span style={{ font: "600 14px var(--font-body)", color: "var(--gray-900)", width: 200 }}>{a.name}</span>
                                <button
                                  onClick={() => toggleAttendance(i, a.matricula)}
                                  style={{
                                    all: "unset", cursor: "pointer", padding: "5px 14px",
                                    font: "600 12px var(--font-body)", color: "#fff",
                                    background: presente ? "var(--blue-600)" : "var(--red-600)",
                                    minWidth: 90, textAlign: "center",
                                  }}
                                >
                                  {presente ? "Presente" : "Ausente"}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div>
                        <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase", marginBottom: 4 }}>Comentário da aula</div>
                        <textarea
                          value={l.comentario}
                          onChange={(e) => updateLessonContent(i, "comentario", e.target.value)}
                          rows={2}
                          placeholder="Como foi a aula?"
                          style={{ width: "100%", boxSizing: "border-box", border: "1px solid #ddd", padding: "8px 10px", font: "400 14px var(--font-body)", outline: "none", resize: "vertical" }}
                        />
                      </div>

                      <div style={{ border: "1px dashed #ddd", padding: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                        <div style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Anexos da aula (PDF ou link)</div>

                        {l.anexoPdf ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <a href={l.anexoPdf.url} target="_blank" rel="noreferrer" style={{ font: "600 13px var(--font-body)", color: "var(--blue-600)", textDecoration: "underline" }}>
                              📄 {l.anexoPdf.name}
                            </a>
                            <button onClick={() => removePdf(i)} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", color: "#999" }}>remover</button>
                          </div>
                        ) : (
                          <label style={{ all: "unset", cursor: "pointer", background: "#f2f2f2", color: "var(--gray-900)", padding: "8px 14px", font: "600 12px var(--font-body)", width: "fit-content" }}>
                            + Anexar PDF
                            <input type="file" accept="application/pdf" onChange={(e) => attachPdf(i, e.target.files[0])} style={{ display: "none" }} />
                          </label>
                        )}

                        {l.anexoLink ? (
                          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <a href={l.anexoLink} target="_blank" rel="noreferrer" style={{ font: "600 13px var(--font-body)", color: "var(--blue-600)", textDecoration: "underline", wordBreak: "break-all" }}>
                              🔗 {l.anexoLink}
                            </a>
                            <button onClick={() => removeLink(i)} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", color: "#999" }}>remover</button>
                          </div>
                        ) : (
                          <div style={{ display: "flex", gap: 8 }}>
                            <input
                              value={l.linkDraft || ""}
                              onChange={(e) => updateLessonContent(i, "linkDraft", e.target.value)}
                              placeholder="Colar link (YouTube, Google Drive, Meet…)"
                              style={{ flex: 1, border: "1px solid #ddd", padding: "8px 10px", font: "400 13px var(--font-body)", outline: "none" }}
                            />
                            <button onClick={() => attachLink(i)} style={{ all: "unset", cursor: "pointer", background: "#f2f2f2", color: "var(--gray-900)", padding: "8px 14px", font: "600 12px var(--font-body)" }}>Anexar link</button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {!isOpen && l.comentario && (
                    <div style={{ background: "var(--paper-100)", padding: "10px 14px", font: "400 14px var(--font-body)", color: "var(--gray-900)" }}>
                      {l.comentario}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {tab === "presenca" && (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ textAlign: "left", borderBottom: "2px solid var(--gray-900)" }}>
                <th style={{ padding: "10px 8px", font: "600 13px var(--font-body)" }}>Aluno</th>
                <th style={{ padding: "10px 8px", font: "600 13px var(--font-body)" }}>Presença por aula</th>
                <th style={{ padding: "10px 8px", font: "600 13px var(--font-body)" }}>% Frequência</th>
                <th style={{ padding: "10px 8px", font: "600 13px var(--font-body)" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {turma.alunos.map((a) => {
                const freq = frequencia(a);
                const risco = freq < 75;
                return (
                  <tr key={a.matricula} style={{ borderBottom: "1px solid #eee" }}>
                    <td style={{ padding: "10px 8px", font: "600 14px var(--font-body)" }}>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span>{a.name}</span>
                        <span style={{ font: "400 12px var(--font-body)", color: "#888" }}>{a.matricula}</span>
                      </div>
                    </td>
                    <td style={{ padding: "10px 8px" }}>
                      <div style={{ display: "flex", gap: 5 }}>
                        {lessons.map((l, i) => (
                          <span key={i} title={l.data} style={{ width: 12, height: 12, background: l.presentes.includes(a.matricula) ? "var(--blue-600)" : "var(--red-600)" }} />
                        ))}
                      </div>
                    </td>
                    <td style={{ padding: "10px 8px", font: "600 14px var(--font-body)", color: risco ? "var(--red-600)" : "var(--gray-900)" }}>{freq}%</td>
                    <td style={{ padding: "10px 8px" }}>
                      {risco ? <Pill tone="red">Risco de evasão</Pill> : <Pill tone="blue">Em dia</Pill>}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}

        {tab === "jornada" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 720 }}>
            <div>
              <span style={{ font: "600 13px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.05em" }}>Progresso no estágio {estagio}</span>
              <div style={{ height: 14, background: "#f2f2f2", marginTop: 10 }}>
                <div style={{ height: "100%", width: `${jornadaPct}%`, background: "var(--blue-600)" }} />
              </div>
              <span style={{ font: "400 13px var(--font-body)", color: "#888", marginTop: 6, display: "block" }}>{jornadaPct}% do estágio concluído</span>
            </div>
            <div>
              <span style={{ font: "600 16px var(--font-body)", display: "block", marginBottom: 24 }}>Apresentação de projetos</span>
              <div style={{ display: "flex", alignItems: "flex-start", position: "relative" }}>
                <div style={{ position: "absolute", left: 12, right: 12, top: 9, height: 2, background: "#e5e5e5" }} />
                {projetos.map((p, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, position: "relative", zIndex: 1 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%", boxSizing: "border-box",
                      background: p.status === "concluido" ? "var(--blue-600)" : p.status === "proximo" ? "var(--red-600)" : "#fff",
                      border: p.status === "pendente" ? "2px solid #ccc" : "none",
                    }} />
                    <span style={{ font: "600 12px var(--font-body)", textAlign: "center" }}>{p.nome}</span>
                    <span style={{ font: "400 11px var(--font-body)", color: "#999" }}>{p.data}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "mural" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 640 }}>
            <span style={{ font: "400 13px var(--font-body)", color: "#999" }}>Visível apenas para equipe e professores — nunca aparece para alunos.</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <textarea
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Adicionar observação interna sobre a turma… use @nome para marcar alguém"
                rows={2}
                style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)", outline: "none", resize: "vertical" }}
              />
              <MentionPicker staff={STAFF} onPick={insertMention} />
              <button onClick={addNote} style={{ all: "unset", cursor: "pointer", alignSelf: "flex-start", background: "var(--blue-600)", color: "#fff", padding: "10px 18px", font: "600 14px var(--font-body)" }}>Publicar</button>
            </div>
            {notes.map((m, i) => (
              <div key={i} style={{ borderLeft: "3px solid var(--red-600)", paddingLeft: 14 }}>
                <div style={{ font: "600 13px var(--font-body)", color: "var(--gray-900)" }}>{m.autor} <span style={{ color: "#999", fontWeight: 400 }}>· {m.data}</span></div>
                <div style={{ font: "400 15px var(--font-body)", color: "var(--gray-900)" }}><MentionText text={m.texto} /></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
window.TurmaDetail = TurmaDetail;
}

{
const { GROUP_TURMAS, findTurma, lessonLogFor, classMuralFor } = window.SchoolData;

function StudentArea({ student }) {
  const { Pill } = window.CommissionSchoolDesignSystem_c6e6c2;
  const [connected, setConnected] = React.useState(false);
  const [lessonModal, setLessonModal] = React.useState(null);
  const [homeworks, setHomeworks] = React.useState([]);
  const [homeworkModal, setHomeworkModal] = React.useState(false);
  const [homeworkLessonIdx, setHomeworkLessonIdx] = React.useState("");
  const [agendaMonth, setAgendaMonth] = React.useState(new Date(2026, 5, 1));

  const turma = !student.individual ? findTurma(student.turmaId) : null;
  const lessons = turma ? lessonLogFor(turma) : [];
  const mural = turma ? classMuralFor(turma) : [];
  const projetos = turma ? window.SchoolData.projetosFor(turma) : [];
  const proximoProjeto = projetos.find((p) => p.status === "proximo");
  const jornadaPct = projetos.length ? Math.round((projetos.filter((p) => p.status === "concluido").length / projetos.length) * 100) : 0;

  const enviarLicao = (file) => {
    if (!file || homeworkLessonIdx === "") return;
    const lesson = lessons[Number(homeworkLessonIdx)];
    setHomeworks((hs) => [...hs.filter((h) => h.lessonIdx !== homeworkLessonIdx), { lessonIdx: homeworkLessonIdx, lessonData: lesson.data, lessonTopico: lesson.topico, name: file.name, url: URL.createObjectURL(file) }]);
    setHomeworkModal(false);
    setHomeworkLessonIdx("");
  };
  const removeHomework = (lessonIdx) => setHomeworks((hs) => hs.filter((h) => h.lessonIdx !== lessonIdx));

  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)", padding: 32 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 28 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ border: "1px solid #eee", padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px", whiteSpace: "nowrap" }}>Minha turma: {student.turmaNome}</span>
              {turma && <Pill tone="blue">{turma.estagio}</Pill>}
            </div>
            <div style={{ font: "400 14px var(--font-body)", color: "#666" }}>
              {turma ? `Prof. ${turma.professor} · ${turma.horario}` : "Aula individual (1:1)"}
            </div>
          </div>

          <div style={{ border: "1px solid #eee", padding: 20 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <span style={{ font: "600 16px var(--font-body)" }}>Google Agenda</span>
              <button
                onClick={() => setConnected((c) => !c)}
                style={{ all: "unset", cursor: "pointer", padding: "8px 16px", font: "600 13px var(--font-body)", color: "#fff", background: connected ? "var(--blue-600)" : "var(--red-600)" }}
              >
                {connected ? "Conectado ✓" : "Conectar Google Agenda"}
              </button>
            </div>
            {connected ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ font: "400 13px var(--font-body)", color: "#888" }}>Suas aulas foram sincronizadas com sua agenda do Google.</span>
                <MonthCalendar
                  monthDate={agendaMonth}
                  setMonthDate={setAgendaMonth}
                  eventsForDay={(day) => lessons.map((l, i) => ({ l, i })).filter(({ l }) => { const [d, mo] = l.data.split("/").map(Number); return d === day && mo === agendaMonth.getMonth() + 1; }).map(({ l }) => ({ label: l.topico || "Aula", l }))}
                  onDayClick={(day, eventos) => setLessonModal(eventos[0].l)}
                />
              </div>
            ) : (
              <span style={{ font: "400 13px var(--font-body)", color: "#888" }}>Conecte sua agenda do Google para receber lembretes automáticos das suas aulas.</span>
            )}
          </div>

          {lessons.length > 0 && (
            <div style={{ border: "1px solid #eee", padding: 20 }}>
              <span style={{ font: "600 16px var(--font-body)", display: "block", marginBottom: 12 }}>Últimas aulas</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {lessons.map((l, i) => (
                  <button key={i} onClick={() => setLessonModal(l)} style={{ all: "unset", cursor: "pointer", display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span style={{ font: "600 13px var(--font-body)", color: "var(--blue-600)", width: 44 }}>{l.data}</span>
                    <span style={{ font: "400 14px var(--font-body)", textDecoration: "underline" }}>{l.topico}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {turma && (
            <div style={{ border: "1px solid #eee", padding: 20 }}>
              <span style={{ font: "600 16px var(--font-body)", display: "block", marginBottom: 4 }}>Enviar lição de casa</span>
              <span style={{ font: "400 13px var(--font-body)", color: "#888", display: "block", marginBottom: 12 }}>Escolha a aula e suba um PDF com sua lição para o professor conferir.</span>
              {homeworks.length > 0 && (
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 12 }}>
                  {homeworks.map((h) => (
                    <div key={h.lessonIdx} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ font: "600 12px var(--font-body)", color: "var(--blue-600)" }}>{h.lessonData}</span>
                      <a href={h.url} target="_blank" rel="noreferrer" style={{ font: "600 13px var(--font-body)", color: "var(--blue-600)", textDecoration: "underline" }}>📄 {h.name}</a>
                      <button onClick={() => removeHomework(h.lessonIdx)} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", color: "#999" }}>remover</button>
                    </div>
                  ))}
                </div>
              )}
              <button onClick={() => setHomeworkModal(true)} style={{ all: "unset", cursor: "pointer", background: "var(--red-600)", color: "#fff", padding: "9px 16px", font: "600 13px var(--font-body)", width: "fit-content" }}>
                + Enviar lição de casa
              </button>
            </div>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {turma && (
            <div style={{ border: "1px solid #eee", padding: 20 }}>
              <span style={{ font: "600 16px var(--font-body)", display: "block", marginBottom: 4 }}>Jornada da turma</span>
              <div style={{ height: 12, background: "#f2f2f2", marginTop: 10 }}>
                <div style={{ height: "100%", width: `${jornadaPct}%`, background: "var(--blue-600)" }} />
              </div>
              <span style={{ font: "400 13px var(--font-body)", color: "#888", marginTop: 6, display: "block" }}>{jornadaPct}% concluído no estágio {turma.estagio}</span>
              {proximoProjeto && (
                <div style={{ background: "var(--paper-100, #EFE2C0)", padding: "10px 12px", font: "400 13px var(--font-body)", marginTop: 12 }}>
                  Próximo projeto: <strong>{proximoProjeto.nome}</strong> em {proximoProjeto.data}
                </div>
              )}
            </div>
          )}
          <div style={{ border: "1px solid #eee", padding: 20 }}>
            <span style={{ font: "600 16px var(--font-body)", display: "block", marginBottom: 4 }}>Matrícula</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px", letterSpacing: "0.03em" }}>{student.matricula}</span>
          </div>
          {mural.length > 0 && (
            <div style={{ border: "1px solid #eee", padding: 20 }}>
              <span style={{ font: "600 16px var(--font-body)", display: "block", marginBottom: 12 }}>Mural da turma</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {mural.map((m, i) => (
                  <div key={i} style={{ borderLeft: "3px solid var(--red-600)", paddingLeft: 12 }}>
                    <div style={{ font: "600 12px var(--font-body)", color: "#999" }}>{m.autor} · {m.data}</div>
                    <div style={{ font: "400 14px var(--font-body)" }}>{m.texto}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {lessonModal && (
        <div onClick={() => setLessonModal(null)} style={{ position: "fixed", inset: 0, background: "rgba(51,51,51,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", width: 400, padding: 26, display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ font: "600 12px var(--font-body)", color: "var(--blue-600)" }}>{lessonModal.data}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "24px" }}>{lessonModal.topico || "Aula"}</span>
            {lessonModal.materialUrl && (
              <a href={lessonModal.materialUrl} target="_blank" rel="noreferrer" style={{ font: "600 13px var(--font-body)", color: "var(--blue-600)", textDecoration: "underline" }}>🔗 Acessar material da aula</a>
            )}
            <button onClick={() => setLessonModal(null)} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "10px 0", textAlign: "center", font: "600 14px var(--font-body)" }}>Fechar</button>
          </div>
        </div>
      )}

      {homeworkModal && (
        <div onClick={() => { setHomeworkModal(false); setHomeworkLessonIdx(""); }} style={{ position: "fixed", inset: 0, background: "rgba(51,51,51,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", width: 380, padding: 26, display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "24px" }}>Enviar lição de casa</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ font: "600 11px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Referente à aula</label>
              <select value={homeworkLessonIdx} onChange={(e) => setHomeworkLessonIdx(e.target.value)} style={{ border: "1px solid #ddd", padding: "8px 10px", font: "400 14px var(--font-body)" }}>
                <option value="">Selecione a aula…</option>
                {lessons.map((l, i) => <option key={i} value={i}>{l.data} — {l.topico || "(sem registro)"}</option>)}
              </select>
            </div>
            <label style={{ all: "unset", cursor: homeworkLessonIdx === "" ? "not-allowed" : "pointer", opacity: homeworkLessonIdx === "" ? 0.5 : 1, background: "var(--red-600)", color: "#fff", padding: "9px 16px", font: "600 13px var(--font-body)", width: "fit-content" }}>
              + Escolher PDF
              <input type="file" accept="application/pdf" disabled={homeworkLessonIdx === ""} onChange={(e) => enviarLicao(e.target.files[0])} style={{ display: "none" }} />
            </label>
            <button onClick={() => { setHomeworkModal(false); setHomeworkLessonIdx(""); }} style={{ all: "unset", cursor: "pointer", background: "#f2f2f2", padding: "10px 0", textAlign: "center", font: "600 13px var(--font-body)" }}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}
window.StudentArea = StudentArea;
}

{
const { ALL_STUDENTS, allTurmaOptions, nextMatricula } = window.SchoolData;

function StudentsAdmin({ students: studentsProp, setStudents: setStudentsProp }) {
  const { Pill } = window.CommissionSchoolDesignSystem_c6e6c2;
  const [localStudents, setLocalStudents] = React.useState(ALL_STUDENTS);
  const students = studentsProp || localStudents;
  const setStudents = setStudentsProp || setLocalStudents;
  const [query, setQuery] = React.useState("");
  const [showForm, setShowForm] = React.useState(false);
  const [view, setView] = React.useState("tabela");
  const [scoreModal, setScoreModal] = React.useState(null);
  const turmaOptions = allTurmaOptions();
  const [form, setForm] = React.useState({ name: "", turmaId: turmaOptions[0].id });

  const base = students.filter((s) => s.primeiraAula);
  const filtered = base.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));

  const updateStudent = (matricula, patch) => setStudents((list) => list.map((s) => (s.matricula === matricula ? { ...s, ...patch } : s)));

  const addStudent = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    const turma = turmaOptions.find((t) => t.id === form.turmaId);
    setStudents((list) => [
      { name: form.name.trim(), matricula: nextMatricula(), turmaId: turma.id, turmaNome: turma.nome, individual: !turma.group, onboarding: false, primeiraAula: true, frequencia: 80, licaoCasa: 80, score: 80, financeiro: "adimplente" },
      ...list,
    ]);
    setForm({ name: "", turmaId: turmaOptions[0].id });
    setShowForm(false);
  };

  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 32px", borderBottom: "1px solid #eee" }}>
        <span style={{ font: "600 13px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>Alunos · {base.length} na base</span>
        <div style={{ display: "flex", gap: 2, marginLeft: 16 }}>
          {[["tabela", "Tabela"], ["cards", "Cards"]].map(([key, label]) => (
            <button key={key} onClick={() => setView(key)} style={{ all: "unset", cursor: "pointer", padding: "7px 14px", font: "600 12px var(--font-body)", color: view === key ? "#fff" : "var(--gray-900)", background: view === key ? "var(--blue-600)" : "#f2f2f2" }}>{label}</button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar aluno…"
          style={{ marginLeft: "auto", border: "1px solid #ddd", padding: "8px 12px", font: "400 14px var(--font-body)", width: 220, outline: "none" }}
        />
        <button onClick={() => setShowForm((s) => !s)} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "8px 16px", font: "600 13px var(--font-body)" }}>
          + Adicionar aluno
        </button>
      </div>

      {showForm && (
        <form onSubmit={addStudent} style={{ display: "flex", gap: 10, alignItems: "flex-end", padding: "18px 32px", background: "var(--paper-100)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ font: "600 11px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Nome</label>
            <input value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} style={{ border: "1px solid #ddd", padding: "8px 10px", font: "400 14px var(--font-body)", outline: "none", width: 220 }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <label style={{ font: "600 11px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Turma</label>
            <select value={form.turmaId} onChange={(e) => setForm((f) => ({ ...f, turmaId: e.target.value }))} style={{ border: "1px solid #ddd", padding: "8px 10px", font: "400 14px var(--font-body)" }}>
              {turmaOptions.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
            </select>
          </div>
          <button type="submit" style={{ all: "unset", cursor: "pointer", background: "var(--red-600)", color: "#fff", padding: "9px 18px", font: "600 13px var(--font-body)" }}>Cadastrar</button>
        </form>
      )}

      {view === "tabela" && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--gray-900)" }}>
              <th style={{ padding: "12px 32px 10px 32px", font: "600 13px var(--font-body)" }}>Aluno</th>
              <th style={{ padding: "12px 8px 10px", font: "600 13px var(--font-body)" }}>Matrícula</th>
              <th style={{ padding: "12px 8px 10px", font: "600 13px var(--font-body)" }}>Turma</th>
              <th style={{ padding: "12px 8px 10px", font: "600 13px var(--font-body)" }}>Score</th>
              <th style={{ padding: "12px 32px 10px 8px", font: "600 13px var(--font-body)" }}>Situação financeira</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.matricula} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 32px 10px 32px" }}>
                  <input defaultValue={s.name} onBlur={(e) => updateStudent(s.matricula, { name: e.target.value })} style={{ all: "unset", font: "600 14px var(--font-body)", width: "100%" }} />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input defaultValue={s.matricula} onBlur={(e) => updateStudent(s.matricula, { matricula: e.target.value })} style={{ all: "unset", font: "400 13px var(--font-body)", color: "#888", width: "100%" }} />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <select
                    value={s.turmaId || ""}
                    onChange={(e) => {
                      if (!e.target.value) { updateStudent(s.matricula, { turmaId: null, turmaNome: "Sem turma definida", individual: false }); return; }
                      const t = turmaOptions.find((o) => o.id === e.target.value);
                      updateStudent(s.matricula, { turmaId: t.id, turmaNome: t.nome, individual: !t.group });
                    }}
                    style={{ font: "400 13px var(--font-body)", color: "#666", border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >
                    <option value="">Sem turma definida</option>
                    {turmaOptions.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
                  </select>
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <button onClick={() => setScoreModal(s)} style={{ all: "unset", cursor: "pointer", font: "700 15px var(--font-body)", color: s.score < 70 ? "var(--red-600)" : "var(--blue-600)", textDecoration: "underline" }}>{s.score}</button>
                </td>
                <td style={{ padding: "10px 8px 10px 8px" }}>
                  <Pill tone={s.financeiro === "adimplente" ? "blue" : "red"}>{s.financeiro === "adimplente" ? "Adimplente" : "Inadimplente"}</Pill>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {view === "cards" && (
        <div style={{ padding: 32, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {filtered.map((s) => (
            <div key={s.matricula} style={{ border: "1px solid #eee", padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ font: "600 15px var(--font-body)" }}>{s.name}</span>
              <span style={{ font: "400 12px var(--font-body)", color: "#999" }}>{s.matricula} · {s.turmaNome}</span>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                <button onClick={() => setScoreModal(s)} style={{ all: "unset", cursor: "pointer", background: s.score < 70 ? "var(--red-600)" : "var(--blue-600)", color: "#fff", padding: "6px 12px", font: "700 14px var(--font-body)" }}>{s.score} pts</button>
                <Pill tone={s.financeiro === "adimplente" ? "blue" : "red"}>{s.financeiro === "adimplente" ? "Adimplente" : "Inadimplente"}</Pill>
              </div>
            </div>
          ))}
        </div>
      )}

      {scoreModal && (
        <div onClick={() => setScoreModal(null)} style={{ position: "fixed", inset: 0, background: "rgba(51,51,51,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", width: 360, padding: 26, display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px" }}>{scoreModal.name}</span>
            <div style={{ display: "flex", gap: 0 }}>
              <div style={{ padding: "0 18px 0 0" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 30, lineHeight: "30px" }}>{scoreModal.frequencia}%</div>
                <div style={{ font: "400 11px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Assiduidade</div>
              </div>
              <div style={{ padding: "0 18px", borderLeft: "1px solid #eee" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 30, lineHeight: "30px" }}>{scoreModal.licaoCasa}%</div>
                <div style={{ font: "400 11px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Lição de casa</div>
              </div>
            </div>
            <button onClick={() => setScoreModal(null)} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "10px 0", textAlign: "center", font: "600 14px var(--font-body)" }}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}
window.StudentsAdmin = StudentsAdmin;
}

// ---- App shell (StaffShell / StudentShell / TopBar / App) ----
{
function TopBar({ title, tabs, activeTab, onTab, onProfile, onLogout }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "14px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "#fff", zIndex: 5 }}>
      <img src={LOGO} alt="Commission School" style={{ height: 30 }} />
      {tabs && (
        <div style={{ display: "flex", gap: 2, marginLeft: 10 }}>
          {tabs.map(([key, label]) => (
            <button
              key={key}
              onClick={() => onTab(key)}
              style={{
                all: "unset", cursor: "pointer", padding: "8px 16px",
                font: "600 13px var(--font-body)",
                color: activeTab === key ? "#fff" : "var(--gray-900)",
                background: activeTab === key ? "var(--blue-600)" : "#f2f2f2",
              }}
            >
              {label}
            </button>
          ))}
        </div>
      )}
      <span style={{ font: "600 12px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>{title}</span>
      <div style={{ marginLeft: "auto", display: "flex", gap: 14, alignItems: "center" }}>
        <button onClick={onProfile} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--blue-600)" }}>Meu perfil</button>
        <button onClick={onLogout} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "#999" }}>Sair</button>
      </div>
    </div>
  );
}

function StaffShell({ loggedInAs, onLogout }) {
  const [tab, setTab] = React.useState("equipe");
  const [screen, setScreen] = React.useState("home");
  const [turmaId, setTurmaId] = React.useState(null);

  const openTurma = (id) => { setTurmaId(id); setScreen("turma"); };
  const backHome = () => setScreen("home");
  const goTab = (t) => { setTab(t); setScreen("home"); };

  const isRealTeacher = loggedInAs !== "Equipe";

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <TopBar
        title={`Conectado como ${loggedInAs}`}
        tabs={[["equipe", "Equipe"], ["professor", "Professor"], ["alunos", "Alunos"]]}
        activeTab={tab === "perfil" ? null : tab}
        onTab={goTab}
        onProfile={() => setTab("perfil")}
        onLogout={onLogout}
      />
      <div style={{ flex: 1, overflow: "auto" }}>
        {tab === "equipe" && screen === "home" && <Dashboard onOpenTurma={openTurma} />}
        {tab === "equipe" && screen === "turma" && <TurmaDetail turmaId={turmaId} onBack={backHome} />}

        {tab === "professor" && !isRealTeacher && (
          <div style={{ padding: 40, font: "400 15px var(--font-body)", color: "#777" }}>
            Você entrou com o acesso geral da Equipe. Para ver o painel de um professor específico, saia e entre novamente escolhendo um nome de professor.
          </div>
        )}
        {tab === "professor" && isRealTeacher && screen === "home" && <Dashboard onOpenTurma={openTurma} teacherFilter={loggedInAs} />}
        {tab === "professor" && isRealTeacher && screen === "turma" && <TurmaDetail turmaId={turmaId} onBack={backHome} />}

        {tab === "alunos" && <StudentsAdmin />}

        {tab === "perfil" && (
          <ProfilePage
            name={loggedInAs}
            subtitle={{ label: "Papel", value: isRealTeacher ? "Professor(a)" : "Equipe / Coordenação" }}
            handle={window.SchoolData.STAFF.find((s) => s.name === loggedInAs)?.handle || "@equipe"}
            slotId={"staff-photo-" + loggedInAs}
          />
        )}
      </div>
    </div>
  );
}

function StudentShell({ student, onLogout }) {
  const [tab, setTab] = React.useState("home");

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <TopBar
        title={`Conectado como ${student.name}`}
        tabs={null}
        onTab={() => {}}
        onProfile={() => setTab(tab === "perfil" ? "home" : "perfil")}
        onLogout={onLogout}
      />
      <div style={{ flex: 1, overflow: "auto" }}>
        {tab === "home" && <StudentArea student={student} />}
        {tab === "perfil" && (
          <ProfilePage
            name={student.name}
            subtitle={{ label: "Turma", value: student.turmaNome }}
            matricula={student.matricula}
            slotId={"student-photo-" + student.matricula}
          />
        )}
      </div>
    </div>
  );
}

function SchoolApp() {
  const [stage, setStage] = React.useState("home");
  const [loggedInAs, setLoggedInAs] = React.useState(null);
  const [student, setStudent] = React.useState(null);

  const logout = () => { setStage("home"); setLoggedInAs(null); setStudent(null); };

  return (
    <React.Fragment>
      {stage === "home" && (
        <Home onEnterStaff={() => setStage("staff-login")} onEnterStudent={() => setStage("student-login")} />
      )}
      {stage === "staff-login" && (
        <TeacherLogin onBack={() => setStage("home")} onLogin={(name) => { setLoggedInAs(name); setStage("staff"); }} />
      )}
      {stage === "staff" && <StaffShell loggedInAs={loggedInAs} onLogout={logout} />}

      {stage === "student-login" && (
        <StudentLogin onBack={() => setStage("home")} onLogin={(s) => { setStudent(s); setStage("aluno"); }} />
      )}
      {stage === "aluno" && <StudentShell student={student} onLogout={logout} />}
    </React.Fragment>
  );
}

window.SchoolApp = SchoolApp;
}


// V2 additions for the Commission School platform — appended after the v1
// components (which register themselves on window). Adds: macro Painel with
// mural de avisos + notificações + insights carousel; Turmas tab with
// Notion-style country cards + lista/calendário views; Relatórios with a
// performance matrix; Chat (Slack-like) for staff; Disparo rápido (broadcast)
// on the Professor tab; and Commissioner score gamification for students.

{
const D = window.SchoolData;

const FLAGS = {
  car: ["🇨🇫", "Rep. Centro-Africana"], col: ["🇨🇴", "Colômbia"], cub: ["🇨🇺", "Cuba"],
  ind: ["🇮🇳", "Índia"], jor: ["🇯🇴", "Jordânia"], mal: ["🇲🇻", "Maldivas"],
  mex: ["🇲🇽", "México"], moz: ["🇲🇿", "Moçambique"], nga: ["🇳🇬", "Nigéria"],
  nko: ["🇰🇵", "Coreia do Norte"], por: ["🇵🇹", "Portugal"], syr: ["🇸🇾", "Síria"],
  vnm: ["🇻🇳", "Vietnã"], afg: ["🇦🇫", "Afeganistão"],
};
const flagOf = (id) => (FLAGS[id] ? FLAGS[id][0] : "🏳️");
const countryOf = (id) => (FLAGS[id] ? FLAGS[id][1] : "");

const assiduidade = (t) => t.alunos && t.alunos.length
  ? Math.round(t.alunos.reduce((n, a) => n + a.frequencia, 0) / t.alunos.length)
  : 0;
const health = (t) => Math.round(assiduidade(t) * 0.6 + Math.min(t.ocupacao, 100) * 0.4);

const ESTADO_POOL = ["SP", "SP", "SP", "RJ", "MG", "SP", "PR", "RJ", "BA", "SP", "MG", "SC", "GO", "PE"];
const estadoOf = (name) => ESTADO_POOL[(name.length * 3 + name.charCodeAt(0)) % ESTADO_POOL.length];
const estadoCounts = () => {
  const counts = {};
  D.ALL_STUDENTS.forEach((s) => {
    const e = estadoOf(s.name);
    counts[e] = (counts[e] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
};

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const diasDe = (horario) => {
  const pref = horario.split(" ")[0];
  return pref.split("-").map((d) => d.trim()).filter((d) => DIAS.includes(d));
};
const horaDe = (horario) => horario.split(" ").slice(1).join(" ");

window.V2 = { FLAGS, flagOf, countryOf, assiduidade, health, estadoOf, estadoCounts, DIAS, diasDe, horaDe };
}

// ---- Mural de avisos + Notificações ----
{
const AVISOS_INICIAIS = [
  { autor: "Coordenação", data: "07/07", texto: "Semana de renovação de matrículas — confirmar com as turmas que terminam em maio." },
  { autor: "Coordenação", data: "05/07", texto: "Encontro geral de professores sábado às 14h, tema: devocionais em inglês." },
];

function AvisosMural() {
  const [avisos, setAvisos] = React.useState(AVISOS_INICIAIS);
  const [draft, setDraft] = React.useState("");
  const [composing, setComposing] = React.useState(false);

  const publicar = () => {
    if (!draft.trim()) return;
    setAvisos((a) => [{ autor: "Você", data: "hoje", texto: draft.trim() }, ...a]);
    setDraft("");
    setComposing(false);
  };

  return (
    <div style={{ background: "var(--paper-100, #EFE2C0)", padding: "28px 32px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 34, lineHeight: "34px", color: "var(--gray-900)" }}>📍 Mural de avisos</span>
        <button onClick={() => setComposing((c) => !c)} style={{ all: "unset", cursor: "pointer", marginLeft: "auto", background: "var(--blue-600)", color: "#fff", padding: "9px 16px", font: "600 13px var(--font-body)" }}>
          {composing ? "Cancelar" : "+ Novo aviso"}
        </button>
      </div>
      {composing && (
        <div style={{ display: "flex", gap: 8 }}>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Escreva um aviso para toda a equipe…"
            style={{ flex: 1, border: "1px solid #ddd", background: "#fff", padding: "12px 14px", font: "400 15px var(--font-body)", outline: "none" }}
          />
          <button onClick={publicar} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "8px 14px", font: "600 12px var(--font-body)" }}>Publicar</button>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {avisos.map((a, i) => (
          <div key={i} style={{ borderLeft: "4px solid var(--red-600)", paddingLeft: 16, display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ font: "600 13px var(--font-body)", color: "#8a7c55" }}>{a.autor} · {a.data}</span>
            <div style={{ font: "400 17px var(--font-body)", color: "var(--gray-900)" }}>{a.texto}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
window.AvisosMural = AvisosMural;

function NotifBell() {
  const { flagOf } = window.V2;
  const [open, setOpen] = React.useState(false);
  const [lidas, setLidas] = React.useState(false);
  const notifs = [
    { flag: flagOf("vnm"), texto: "Vietnam está acima da capacidade (13/12)." },
    { flag: flagOf("car"), texto: "1 aluno aguardando vaga em Central African Republic." },
    { flag: flagOf("jor"), texto: "Jordan termina em 21/05 — iniciar renovações." },
  ];

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => { setOpen((o) => !o); setLidas(true); }}
        style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--gray-900)", display: "flex", alignItems: "center", gap: 6 }}
      >
        Notificações
        {!lidas && (
          <span style={{ background: "var(--red-600)", color: "#fff", font: "600 11px var(--font-body)", padding: "1px 6px" }}>{notifs.length}</span>
        )}
      </button>
      {open && (
        <div style={{ position: "absolute", top: "calc(100% + 10px)", right: 0, width: 320, background: "#fff", border: "1px solid #ddd", boxShadow: "0 4px 14px rgba(0,0,0,0.08)", zIndex: 30, display: "flex", flexDirection: "column" }}>
          {notifs.map((n, i) => (
            <div key={i} style={{ display: "flex", gap: 10, padding: "12px 14px", borderBottom: i < notifs.length - 1 ? "1px solid #eee" : "none", alignItems: "flex-start" }}>
              <span style={{ fontSize: 18, lineHeight: "20px" }}>{n.flag}</span>
              <span style={{ font: "400 13px var(--font-body)", color: "var(--gray-900)" }}>{n.texto}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
window.NotifBell = NotifBell;
}

// ---- Insights carousel (widgets swipáveis) ----
{
const D = window.SchoolData;
const { flagOf, assiduidade, health, estadoCounts } = window.V2;

function buildInsights() {
  const byOcupacao = [...D.GROUP_TURMAS].sort((a, b) => b.ocupacao - a.ocupacao);
  const byHealthAsc = [...D.GROUP_TURMAS].sort((a, b) => health(a) - health(b));
  const byAssidDesc = [...D.GROUP_TURMAS].sort((a, b) => assiduidade(b) - assiduidade(a));
  const byAssidAsc = [...D.GROUP_TURMAS].sort((a, b) => assiduidade(a) - assiduidade(b));
  const estados = estadoCounts();
  return [
    {
      id: "capacidade", titulo: "Turmas com maior capacidade", tone: "red",
      destaque: byOcupacao[0], destaqueVal: `${byOcupacao[0].ocupacao}% ocupada`,
      lista: byOcupacao.map((t) => ({ flag: flagOf(t.id), nome: t.nome, valor: `${t.matriculados}/${t.maximo}`, pct: Math.min(t.ocupacao, 110) / 110 * 100, alerta: t.ocupacao >= 100 })),
    },
    {
      id: "saude", titulo: "Saúde de turma (defasadas → saudáveis)", tone: "blue",
      destaque: byHealthAsc[0], destaqueVal: `saúde ${health(byHealthAsc[0])}/100`,
      lista: byHealthAsc.map((t) => ({ flag: flagOf(t.id), nome: t.nome, valor: `${health(t)}/100`, pct: health(t), alerta: health(t) < 70 })),
    },
    {
      id: "assiduidade-alta", titulo: "Turmas com maior assiduidade", tone: "blue",
      destaque: byAssidDesc[0], destaqueVal: `${assiduidade(byAssidDesc[0])}% de presença`,
      lista: byAssidDesc.map((t) => ({ flag: flagOf(t.id), nome: t.nome, valor: `${assiduidade(t)}%`, pct: assiduidade(t), alerta: false })),
    },
    {
      id: "assiduidade-baixa", titulo: "Turmas com menor assiduidade", tone: "red",
      destaque: byAssidAsc[0], destaqueVal: `${assiduidade(byAssidAsc[0])}% de presença`,
      lista: byAssidAsc.map((t) => ({ flag: flagOf(t.id), nome: t.nome, valor: `${assiduidade(t)}%`, pct: assiduidade(t), alerta: assiduidade(t) < 75 })),
    },
    {
      id: "estados", titulo: "Alunos por estado", tone: "blue",
      destaque: null, destaqueLabel: estados[0][0], destaqueVal: `${estados[0][1]} alunos`,
      lista: estados.map(([uf, n]) => ({ flag: "", nome: uf, valor: `${n} alunos`, pct: (n / estados[0][1]) * 100, alerta: false })),
    },
  ];
}

function InsightsCarousel() {
  const insights = React.useMemo(buildInsights, []);
  const [expanded, setExpanded] = React.useState(null);
  const railRef = React.useRef(null);

  const scrollBy = (dir) => {
    if (railRef.current) railRef.current.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  const open = insights.find((i) => i.id === expanded);

  return (
    <div data-screen-label="Insights">
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px", color: "var(--gray-900)" }}>Coisas importantes</span>
        <span style={{ font: "400 12px var(--font-body)", color: "#999" }}>deslize e clique para ver o ranking</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
          <button onClick={() => scrollBy(-1)} style={{ all: "unset", cursor: "pointer", background: "#f2f2f2", padding: "4px 12px", font: "600 14px var(--font-body)" }}>←</button>
          <button onClick={() => scrollBy(1)} style={{ all: "unset", cursor: "pointer", background: "#f2f2f2", padding: "4px 12px", font: "600 14px var(--font-body)" }}>→</button>
        </div>
      </div>
      <div ref={railRef} style={{ display: "flex", gap: 14, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 8 }}>
        {insights.map((ins) => (
          <div
            key={ins.id}
            onClick={() => setExpanded(expanded === ins.id ? null : ins.id)}
            style={{
              flex: "none", width: 280, scrollSnapAlign: "start", cursor: "pointer",
              background: expanded === ins.id ? "var(--gray-900)" : ins.tone === "red" ? "var(--red-600)" : "var(--blue-600)",
              color: "#fff", padding: "18px 20px", display: "flex", flexDirection: "column", gap: 6,
            }}
          >
            <span style={{ font: "600 11px var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.85 }}>{ins.titulo}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 30, lineHeight: "30px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {ins.destaque ? `${flagOf(ins.destaque.id)} ${ins.destaque.nome}` : ins.destaqueLabel}
            </span>
            <span style={{ font: "400 14px var(--font-body)", opacity: 0.9 }}>{ins.destaqueVal}</span>
            <span style={{ font: "600 12px var(--font-body)", marginTop: 4, textDecoration: "underline" }}>
              {expanded === ins.id ? "Fechar ranking" : "Ver ranking"}
            </span>
          </div>
        ))}
      </div>

      {open && (
        <div style={{ border: "1px solid #eee", marginTop: 6, padding: "18px 22px" }}>
          <span style={{ font: "600 14px var(--font-body)", display: "block", marginBottom: 12 }}>{open.titulo}</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {open.lista.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "24px 220px 1fr 90px", alignItems: "center", gap: 10 }}>
                <span style={{ font: "600 12px var(--font-body)", color: "#999" }}>{i + 1}.</span>
                <span style={{ font: "600 13px var(--font-body)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{row.flag} {row.nome}</span>
                <div style={{ height: 10, background: "#f2f2f2" }}>
                  <div style={{ height: "100%", width: `${Math.min(row.pct, 100)}%`, background: row.alerta ? "var(--red-600)" : "var(--blue-600)" }} />
                </div>
                <span style={{ font: "600 13px var(--font-body)", color: row.alerta ? "var(--red-600)" : "var(--gray-900)", textAlign: "right" }}>{row.valor}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
window.InsightsCarousel = InsightsCarousel;
}

// ---- Painel macro (home v2) ----
{
const D = window.SchoolData;

function PainelMacro({ onOpenTurma }) {
  const totalAlunos = D.TOTAL_ALUNOS_REAL;
  const totalTurmas = D.GROUP_TURMAS.length + D.INDIVIDUAL_TURMAS.length;
  const totalProfessores = new Set([...D.GROUP_TURMAS.map((t) => t.professor), ...D.INDIVIDUAL_TURMAS.map((t) => t.professor)].filter(Boolean)).size;

  return (
    <div style={{ background: "#F7F7F4", minHeight: "100%", fontFamily: "var(--font-body)", paddingBottom: 40, boxSizing: "border-box" }} data-screen-label="Painel">
      <div style={{
        height: 220, position: "relative", overflow: "hidden", display: "flex", alignItems: "center",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(3,5,198,0.75), rgba(3,5,198,0.35))" }} />
        <div style={{ position: "relative", zIndex: 1, padding: "0 40px", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 52, lineHeight: "52px", color: "#fff" }}>Bem-vindo à Commission</span>
          <span style={{ font: "400 16px var(--font-body)", color: "rgba(255,255,255,0.85)" }}>Plataforma de gestão pedagógica</span>
        </div>
      </div>
      <div style={{ padding: "24px 32px 0", display: "flex", flexDirection: "column", gap: 20 }}>
        <AvisosMural />
        <div style={{ background: "#fff", border: "1px solid #eee" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "16px 24px 0" }}>
            <span style={{ width: 10, height: 10, background: "var(--blue-600)", flex: "none" }} />
            <span style={{ font: "600 12px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>Números gerais</span>
          </div>
          <div style={{ display: "flex", gap: 0, padding: "18px 24px 30px" }}>
            {[
              ["Total de alunos", totalAlunos],
              ["Turmas ativas", totalTurmas],
              ["Professores", totalProfessores],
              ["Média alunos/turma", D.MEDIA_ALUNOS_POR_TURMA],
            ].map(([label, value], i) => (
              <div key={label} style={{ padding: "0 32px", borderLeft: i > 0 ? "1px solid #eee" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 58, lineHeight: "58px", color: "var(--gray-900)" }}>{value}</div>
                <div style={{ font: "400 13px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.04em", marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: "#fff", border: "1px solid #eee", padding: "20px 24px 24px" }}>
          <InsightsCarousel />
        </div>
        <div style={{ background: "#fff", border: "1px solid #eee" }}>
          <TurmasTab onOpenTurma={onOpenTurma} />
        </div>
      </div>
    </div>
  );
}
window.PainelMacro = PainelMacro;
}

// ---- Turmas tab: cards Notion + lista/calendário ----
{
const D = window.SchoolData;
const { flagOf, countryOf, diasDe, horaDe, DIAS, assiduidade } = window.V2;

function MilestoneBar({ turma }) {
  const projetos = D.projetosFor(turma);
  if (!projetos.length) return null;
  const doneCount = projetos.filter((p) => p.status === "concluido").length;
  const pct = Math.round((doneCount / projetos.length) * 100);
  return (
    <div style={{ marginTop: 2 }}>
      <div style={{ height: 6, background: "#f2f2f2", position: "relative" }}>
        <div style={{ height: "100%", width: `${pct}%`, background: "var(--blue-600)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 1px" }}>
          {projetos.map((p, i) => (
            <div key={i} title={p.nome} style={{ width: 6, height: 6, borderRadius: "50%", background: p.status === "concluido" ? "#fff" : p.status === "proximo" ? "var(--red-600)" : "#ccc", boxShadow: p.status === "concluido" ? "0 0 0 1px var(--blue-600) inset" : "none" }} />
          ))}
        </div>
      </div>
      <span style={{ font: "400 11px var(--font-body)", color: "#999", marginTop: 3, display: "block" }}>{doneCount}/{projetos.length} marcos concluídos</span>
    </div>
  );
}

function TurmasTab({ onOpenTurma, teacherFilter }) {
  const { Pill, OccupancyMeter } = window.CommissionSchoolDesignSystem_c6e6c2;
  const [view, setView] = React.useState("cards");
  const [query, setQuery] = React.useState("");
  const [monthDate, setMonthDate] = React.useState(new Date());
  const [diaModal, setDiaModal] = React.useState(null);

  const turmas = (teacherFilter ? D.GROUP_TURMAS.filter((t) => t.professor === teacherFilter) : D.GROUP_TURMAS)
    .filter((t) => t.nome.toLowerCase().includes(query.toLowerCase()));
  const individuais = teacherFilter ? D.INDIVIDUAL_TURMAS.filter((t) => t.professor === teacherFilter) : D.INDIVIDUAL_TURMAS;

  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)" }} data-screen-label="Turmas">
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 32px", borderBottom: "1px solid #eee" }}>
        <span style={{ font: "600 13px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {teacherFilter ? `Turmas · ${teacherFilter}` : "Turmas"}
        </span>
        <div style={{ display: "flex", gap: 2, marginLeft: 16 }}>
          {[["cards", "Cards"], ["lista", "Lista"], ["calendario", "Calendário"]].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setView(key)}
              style={{
                all: "unset", cursor: "pointer", padding: "7px 14px",
                font: "600 12px var(--font-body)",
                color: view === key ? "#fff" : "var(--gray-900)",
                background: view === key ? "var(--blue-600)" : "#f2f2f2",
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar turma…"
          style={{ marginLeft: "auto", border: "1px solid #ddd", padding: "8px 12px", font: "400 14px var(--font-body)", width: 200, outline: "none" }}
        />
      </div>

      {view === "cards" && (
        <div style={{ padding: 32, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 20 }}>
          {turmas.map((t, i) => (
            <div key={t.id} onClick={() => onOpenTurma(t.id)} style={{ border: "1px solid #eee", cursor: "pointer", display: "flex", flexDirection: "column" }}>
              <div style={{ height: 130, background: i % 2 === 0 ? "var(--blue-600)" : "var(--red-600)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <span style={{ fontSize: 52, lineHeight: 1 }}>{flagOf(t.id)}</span>
                <div onClick={(e) => e.stopPropagation()} style={{ position: "absolute", inset: 0 }}>
                  <image-slot id={"turma-cover-" + t.id} shape="rect" style={{ width: "100%", height: "100%" }} placeholder="foto de capa"></image-slot>
                </div>
                <span style={{ position: "absolute", bottom: 8, right: 10, font: "600 11px var(--font-body)", color: "#fff", opacity: 0.85, textTransform: "uppercase", letterSpacing: "0.05em", pointerEvents: "none" }}>{countryOf(t.id)}</span>
                {t.ocupacao >= 100 && (
                  <span style={{ position: "absolute", top: 8, left: 8, background: "#fff", color: "var(--red-600)", font: "600 10px var(--font-body)", padding: "3px 8px", textTransform: "uppercase", pointerEvents: "none" }}>Acima da capacidade</span>
                )}
              </div>
              <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.nome}</span>
                  <Pill tone="blue">{t.estagio}</Pill>
                </div>
                <span style={{ font: "400 13px var(--font-body)", color: "#888" }}>Prof. {t.professor} · {t.horario}</span>
                <OccupancyMeter occupied={t.matriculados} max={t.maximo} />
                <MilestoneBar turma={t} />
              </div>
            </div>
          ))}
        </div>
      )}

      {view === "lista" && (
        <div style={{ padding: "20px 32px", display: "flex", flexDirection: "column" }}>
          {turmas.map((t) => (
            <div key={t.id} onClick={() => onOpenTurma(t.id)} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 0", borderBottom: "1px solid #eee", cursor: "pointer" }}>
              <span style={{ fontSize: 24 }}>{flagOf(t.id)}</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px", whiteSpace: "nowrap", width: 260, overflow: "hidden", textOverflow: "ellipsis" }}>{t.nome}</span>
              <Pill tone="blue">{t.estagio}</Pill>
              {t.ocupacao >= 90 && <Pill tone="red">{t.ocupacao >= 100 ? "Acima da capacidade" : "Quase lotada"}</Pill>}
              <span style={{ font: "400 13px var(--font-body)", color: "#888" }}>Prof. {t.professor} · {t.horario}</span>
              <span style={{ marginLeft: "auto", font: "600 13px var(--font-body)", color: assiduidade(t) < 75 ? "var(--red-600)" : "var(--gray-900)" }}>{assiduidade(t)}% presença</span>
              <span style={{ font: "600 13px var(--font-body)", color: "#888", width: 60, textAlign: "right" }}>{t.matriculados}/{t.maximo}</span>
            </div>
          ))}
        </div>
      )}

      {view === "calendario" && (() => {
        const WEEK = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
        const y = monthDate.getFullYear(), m = monthDate.getMonth();
        const firstDow = new Date(y, m, 1).getDay();
        const daysInMonth = new Date(y, m + 1, 0).getDate();
        const cells = [];
        for (let i = 0; i < firstDow; i++) cells.push(null);
        for (let d = 1; d <= daysInMonth; d++) cells.push(d);
        while (cells.length % 7 !== 0) cells.push(null);
        const turmasNoDia = (dow) => {
          const dia = WEEK[dow];
          return [
            ...turmas.filter((t) => diasDe(t.horario).includes(dia)).map((t) => ({ ...t, tipo: "grupo" })),
            ...individuais.filter((t) => diasDe(t.horario).includes(dia)).map((t) => ({ ...t, tipo: "individual" })),
          ];
        };
        const today = new Date();
        return (
          <div style={{ padding: "20px 32px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <button onClick={() => setMonthDate(new Date(y, m - 1, 1))} style={{ all: "unset", cursor: "pointer", font: "600 16px var(--font-body)", padding: "4px 10px", background: "#f2f2f2" }}>‹</button>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "24px", minWidth: 200 }}>{monthDate.toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}</span>
              <button onClick={() => setMonthDate(new Date(y, m + 1, 1))} style={{ all: "unset", cursor: "pointer", font: "600 16px var(--font-body)", padding: "4px 10px", background: "#f2f2f2" }}>›</button>
              <button onClick={() => setMonthDate(new Date())} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", padding: "6px 14px", background: "var(--blue-600)", color: "#fff" }}>Hoje</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", border: "1px solid #eee" }}>
              {WEEK.map((d) => (
                <div key={d} style={{ font: "600 11px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.05em", textAlign: "center", padding: "8px 0", borderBottom: "2px solid var(--gray-900)" }}>{d}</div>
              ))}
              {cells.map((day, i) => {
                const dow = i % 7;
                const eventos = day ? turmasNoDia(dow) : [];
                const isToday = day && y === today.getFullYear() && m === today.getMonth() && day === today.getDate();
                return (
                  <div key={i} style={{ minHeight: 92, borderRight: "1px solid #f2f2f2", borderBottom: "1px solid #f2f2f2", padding: 6, display: "flex", flexDirection: "column", gap: 4, background: day ? "#fff" : "#fafafa" }}>
                    {day && (
                      <React.Fragment>
                        <span style={{ font: "600 12px var(--font-body)", color: isToday ? "#fff" : "#999", background: isToday ? "var(--blue-600)" : "transparent", width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>{day}</span>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                          {eventos.map((ev, k) => (
                            <span
                              key={k}
                              title={`${ev.nome} · ${horaDe(ev.horario)}`}
                              onClick={() => (ev.tipo === "grupo" ? onOpenTurma(ev.id) : setDiaModal({ day, eventos }))}
                              style={{ cursor: "pointer", fontSize: 16, lineHeight: 1 }}
                            >
                              {ev.tipo === "grupo" ? flagOf(ev.id) : "🧑‍🏫"}
                            </span>
                          ))}
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                );
              })}
            </div>
            {diaModal && (
              <div onClick={() => setDiaModal(null)} style={{ position: "fixed", inset: 0, background: "rgba(51,51,51,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
                <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", width: 380, padding: 24, display: "flex", flexDirection: "column", gap: 12 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px" }}>Dia {diaModal.day}</span>
                  {diaModal.eventos.map((ev, k) => (
                    <div key={k} onClick={() => { if (ev.tipo === "grupo") { onOpenTurma(ev.id); setDiaModal(null); } }} style={{ display: "flex", alignItems: "center", gap: 10, cursor: ev.tipo === "grupo" ? "pointer" : "default", padding: "8px 10px", background: "#f8f8f8" }}>
                      <span style={{ fontSize: 22, lineHeight: 1 }}>{ev.tipo === "grupo" ? flagOf(ev.id) : "🧑‍🏫"}</span>
                      <div>
                        <div style={{ font: "600 13px var(--font-body)" }}>{ev.tipo === "grupo" ? flagOf(ev.id) + " " : "1:1 "}{ev.nome}</div>
                        <div style={{ font: "400 12px var(--font-body)", color: "#888" }}>{horaDe(ev.horario)} · {ev.professor}</div>
                      </div>
                    </div>
                  ))}
                  <button onClick={() => setDiaModal(null)} style={{ all: "unset", cursor: "pointer", background: "#f2f2f2", padding: "10px 0", textAlign: "center", font: "600 13px var(--font-body)" }}>Fechar</button>
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {view !== "calendario" && individuais.length > 0 && (
        <div style={{ padding: "0 32px 40px" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px", display: "block", margin: "10px 0 12px" }}>Aulas individuais (1:1)</span>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 6 }}>
            {individuais.map((t) => (
              <div key={t.id} style={{ flex: "none", width: 190, border: "1px solid #eee", padding: 12, display: "flex", flexDirection: "column", gap: 5 }}>
                <span style={{ font: "600 13px var(--font-body)" }}>{t.nome}</span>
                <span style={{ font: "400 11px var(--font-body)", color: "#999" }}>{t.matricula}</span>
                <span style={{ font: "400 12px var(--font-body)", color: "#888" }}>Prof. {t.professor} · {t.horario}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
window.TurmasTab = TurmasTab;
}

// ---- Relatórios ----
{
const D = window.SchoolData;
const { flagOf, assiduidade, estadoCounts, health } = window.V2;

function RelatoriosTab({ teacherName }) {
  const [escopo, setEscopo] = React.useState("minhas");
  const [chart, setChart] = React.useState("matriz");

  const turmas = teacherName && escopo === "minhas" ? D.GROUP_TURMAS.filter((t) => t.professor === teacherName) : D.GROUP_TURMAS;
  const estados = estadoCounts();
  const maxEstado = estados[0][1];

  const alunosEscopo = teacherName && escopo === "minhas" ? D.ALL_STUDENTS.filter((s) => turmas.some((t) => t.id === s.turmaId)) : D.ALL_STUDENTS;
  const topAlunos = [...alunosEscopo].filter((s) => s.score != null).sort((a, b) => b.score - a.score).slice(0, 10);
  const topTurmas = [...turmas].sort((a, b) => health(b) - health(a)).slice(0, 10);
  const porEstagio = {};
  turmas.forEach((t) => { porEstagio[t.estagio] = (porEstagio[t.estagio] || 0) + 1; });
  const estagios = Object.entries(porEstagio).sort((a, b) => b[1] - a[1]);
  const maxEstagio = estagios.length ? estagios[0][1] : 1;

  // scatter: x = ocupação (0–110), y = assiduidade (60–100)
  const W = 720, H = 380, PAD = 46;
  const px = (oc) => PAD + (Math.min(oc, 110) / 110) * (W - PAD * 2);
  const py = (fr) => H - PAD - ((fr - 60) / 40) * (H - PAD * 2);

  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)", padding: 32, display: "flex", flexDirection: "column", gap: 30 }} data-screen-label="Relatórios">
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 2 }}>
          {[["matriz", "Matriz de performance"], ["top-alunos", "Top alunos"], ["top-turmas", "Top turmas"], ["estagios", "Distribuição por estágio"]].map(([key, label]) => (
            <button key={key} onClick={() => setChart(key)} style={{ all: "unset", cursor: "pointer", padding: "8px 16px", font: "600 12px var(--font-body)", color: chart === key ? "#fff" : "var(--gray-900)", background: chart === key ? "var(--blue-600)" : "#f2f2f2" }}>{label}</button>
          ))}
        </div>
        {teacherName && (
          <div style={{ display: "flex", gap: 2, marginLeft: "auto" }}>
            {[["minhas", "Minhas turmas"], ["todas", "Todas as turmas"]].map(([key, label]) => (
              <button key={key} onClick={() => setEscopo(key)} style={{ all: "unset", cursor: "pointer", padding: "8px 16px", font: "600 12px var(--font-body)", color: escopo === key ? "#fff" : "var(--gray-900)", background: escopo === key ? "var(--red-600)" : "#f2f2f2" }}>{label}</button>
            ))}
          </div>
        )}
      </div>

      {chart === "matriz" && (
        <React.Fragment>
          <div>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px", display: "block", marginBottom: 4 }}>Matriz de performance por turma</span>
            <span style={{ font: "400 13px var(--font-body)", color: "#999" }}>Ocupação (horizontal) × assiduidade (vertical). Ideal: canto superior direito.</span>
            <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: 780, display: "block", marginTop: 12 }} data-om-raster="true">
              <rect x={PAD} y={PAD} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#fdf0ee" />
              <rect x={PAD + (W - PAD * 2) / 2} y={PAD} width={(W - PAD * 2) / 2} height={(H - PAD * 2) / 2} fill="#eef2fd" />
              <line x1={PAD} y1={H - PAD} x2={W - PAD} y2={H - PAD} stroke="#333333" strokeWidth="2" />
              <line x1={PAD} y1={PAD} x2={PAD} y2={H - PAD} stroke="#333333" strokeWidth="2" />
              <line x1={px(55)} y1={PAD} x2={px(55)} y2={H - PAD} stroke="#ddd" strokeDasharray="4 4" />
              <line x1={PAD} y1={py(80)} x2={W - PAD} y2={py(80)} stroke="#ddd" strokeDasharray="4 4" />
              <text x={PAD + 8} y={PAD + 16} fontFamily="var(--font-body)" fontSize="11" fill="#c2543f">Assíduas mas vazias</text>
              <text x={W - PAD - 8} y={PAD + 16} textAnchor="end" fontFamily="var(--font-body)" fontSize="11" fill="#3f56c2">Saudáveis</text>
              <text x={PAD + 8} y={H - PAD - 8} fontFamily="var(--font-body)" fontSize="11" fill="#999">Atenção: vazias e defasadas</text>
              <text x={W - PAD - 8} y={H - PAD - 8} textAnchor="end" fontFamily="var(--font-body)" fontSize="11" fill="#999">Cheias mas defasadas</text>
              {turmas.map((t) => (
                <g key={t.id}>
                  <text x={px(t.ocupacao)} y={py(assiduidade(t)) + 6} textAnchor="middle" fontSize="20">{flagOf(t.id)}</text>
                  <text x={px(t.ocupacao)} y={py(assiduidade(t)) + 22} textAnchor="middle" fontFamily="var(--font-body)" fontSize="9" fill="#666">{t.nome.length > 14 ? t.nome.slice(0, 13) + "…" : t.nome}</text>
                </g>
              ))}
              <text x={W / 2} y={H - 8} textAnchor="middle" fontFamily="var(--font-body)" fontSize="11" fill="#999">Ocupação (%)</text>
              <text x={14} y={H / 2} fontFamily="var(--font-body)" fontSize="11" fill="#999" transform={`rotate(-90 14 ${H / 2})`} textAnchor="middle">Assiduidade (%)</text>
            </svg>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px", display: "block", marginBottom: 14 }}>Assiduidade por turma</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[...turmas].sort((a, b) => assiduidade(b) - assiduidade(a)).map((t) => (
                  <div key={t.id} style={{ display: "grid", gridTemplateColumns: "200px 1fr 46px", alignItems: "center", gap: 10 }}>
                    <span style={{ font: "600 12px var(--font-body)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{flagOf(t.id)} {t.nome}</span>
                    <div style={{ height: 12, background: "#f2f2f2" }}>
                      <div style={{ height: "100%", width: `${assiduidade(t)}%`, background: assiduidade(t) < 75 ? "var(--red-600)" : "var(--blue-600)" }} />
                    </div>
                    <span style={{ font: "600 12px var(--font-body)", textAlign: "right" }}>{assiduidade(t)}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px", display: "block", marginBottom: 14 }}>Concentração de alunos por estado</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {estados.map(([uf, n]) => (
                  <div key={uf} style={{ display: "grid", gridTemplateColumns: "40px 1fr 70px", alignItems: "center", gap: 10 }}>
                    <span style={{ font: "600 13px var(--font-body)" }}>{uf}</span>
                    <div style={{ height: 12, background: "#f2f2f2" }}>
                      <div style={{ height: "100%", width: `${(n / maxEstado) * 100}%`, background: "var(--blue-600)" }} />
                    </div>
                    <span style={{ font: "600 12px var(--font-body)", textAlign: "right" }}>{n} alunos</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, background: "var(--paper-100, #EFE2C0)", padding: "12px 14px", font: "400 13px var(--font-body)", color: "var(--gray-900)" }}>
                Maior concentração em <strong>{estados[0][0]}</strong> — pode fazer sentido planejar uma ação presencial lá.
              </div>
            </div>
          </div>
        </React.Fragment>
      )}

      {chart === "top-alunos" && (
        <div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px", display: "block", marginBottom: 16 }}>Top alunos por score</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 680 }}>
            {topAlunos.map((s, i) => (
              <div key={s.matricula} style={{ display: "grid", gridTemplateColumns: "24px 1fr 1fr 50px", alignItems: "center", gap: 10 }}>
                <span style={{ font: "600 12px var(--font-body)", color: "#999" }}>{i + 1}.</span>
                <span style={{ font: "600 13px var(--font-body)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.name}</span>
                <div style={{ height: 10, background: "#f2f2f2" }}><div style={{ height: "100%", width: `${s.score}%`, background: "var(--blue-600)" }} /></div>
                <span style={{ font: "600 12px var(--font-body)", textAlign: "right" }}>{s.score}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {chart === "top-turmas" && (
        <div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px", display: "block", marginBottom: 16 }}>Top turmas por saúde (assiduidade + ocupação)</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 680 }}>
            {topTurmas.map((t, i) => (
              <div key={t.id} style={{ display: "grid", gridTemplateColumns: "24px 220px 1fr 50px", alignItems: "center", gap: 10 }}>
                <span style={{ font: "600 12px var(--font-body)", color: "#999" }}>{i + 1}.</span>
                <span style={{ font: "600 13px var(--font-body)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{flagOf(t.id)} {t.nome}</span>
                <div style={{ height: 10, background: "#f2f2f2" }}><div style={{ height: "100%", width: `${health(t)}%`, background: "var(--blue-600)" }} /></div>
                <span style={{ font: "600 12px var(--font-body)", textAlign: "right" }}>{health(t)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {chart === "estagios" && (
        <div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px", display: "block", marginBottom: 16 }}>Distribuição de turmas por estágio</span>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 680 }}>
            {estagios.map(([est, n]) => (
              <div key={est} style={{ display: "grid", gridTemplateColumns: "180px 1fr 40px", alignItems: "center", gap: 10 }}>
                <span style={{ font: "600 13px var(--font-body)" }}>{est}</span>
                <div style={{ height: 12, background: "#f2f2f2" }}><div style={{ height: "100%", width: `${(n / maxEstagio) * 100}%`, background: "var(--red-600)" }} /></div>
                <span style={{ font: "600 12px var(--font-body)", textAlign: "right" }}>{n}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
window.RelatoriosTab = RelatoriosTab;
}

// ---- Comercial: alunos em processo de onboarding ----
{
function ComercialTab({ students, setStudents }) {
  const { Pill } = window.CommissionSchoolDesignSystem_c6e6c2;
  const { nextMatricula } = window.SchoolData;
  const turmaOptions = window.SchoolData.allTurmaOptions();
  const emOnboarding = students.filter((s) => !s.primeiraAula);
  const [showModal, setShowModal] = React.useState(false);
  const origens = ["Instagram", "Indicação", "Google", "Evento presencial", "WhatsApp", "Outro"];
  const [form, setForm] = React.useState({ name: "", origem: origens[0] });
  const previewMatricula = React.useMemo(() => nextMatricula(), [showModal]);

  const updateStudent = (matricula, patch) => setStudents((list) => list.map((s) => (s.matricula === matricula ? { ...s, ...patch } : s)));

  const addLead = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    setStudents((list) => [
      { name: form.name.trim(), matricula: nextMatricula(), origem: form.origem, turmaId: null, turmaNome: "Sem turma definida", individual: false, onboarding: false, primeiraAula: false, frequencia: 0, licaoCasa: 0, score: null, financeiro: "adimplente" },
      ...list,
    ]);
    setForm({ name: "", origem: origens[0] });
    setShowModal(false);
  };

  const marcarPrimeiraAula = (matricula) => {
    setStudents((list) => list.map((s) => (s.matricula === matricula ? { ...s, primeiraAula: true } : s)));
  };
  const toggleOnboarding = (matricula) => {
    setStudents((list) => list.map((s) => (s.matricula === matricula ? { ...s, onboarding: !s.onboarding } : s)));
  };

  return (
    <div style={{ background: "#fff", minHeight: "100%", fontFamily: "var(--font-body)" }} data-screen-label="Comercial">
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "14px 32px", borderBottom: "1px solid #eee" }}>
        <div>
          <span style={{ font: "600 13px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>Comercial · {emOnboarding.length} em onboarding</span>
          <div style={{ font: "400 13px var(--font-body)", color: "#888", marginTop: 4 }}>Alunos que ainda não fizeram a primeira aula. Ao concluir, saem daqui e entram na base de Alunos.</div>
        </div>
        <button onClick={() => setShowModal(true)} style={{ all: "unset", cursor: "pointer", marginLeft: "auto", background: "var(--blue-600)", color: "#fff", padding: "8px 16px", font: "600 13px var(--font-body)", whiteSpace: "nowrap" }}>
          + Adicionar aluno
        </button>
      </div>
      {showModal && (
        <div onClick={() => setShowModal(false)} style={{ position: "fixed", inset: 0, background: "rgba(51,51,51,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <form onClick={(e) => e.stopPropagation()} onSubmit={addLead} style={{ background: "#fff", width: 380, padding: 26, display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "24px" }}>Adicionar aluno</span>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ font: "600 11px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Nome</label>
              <input autoFocus value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} style={{ border: "1px solid #ddd", padding: "8px 10px", font: "400 14px var(--font-body)", outline: "none" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ font: "600 11px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Por onde veio</label>
              <select value={form.origem} onChange={(e) => setForm((f) => ({ ...f, origem: e.target.value }))} style={{ border: "1px solid #ddd", padding: "8px 10px", font: "400 14px var(--font-body)" }}>
                {origens.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <label style={{ font: "600 11px var(--font-body)", color: "#777", textTransform: "uppercase" }}>Matrícula (gerada automaticamente)</label>
              <span style={{ font: "600 14px var(--font-body)", color: "#666", padding: "8px 10px", background: "#f2f2f2" }}>{previewMatricula}</span>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              <button type="button" onClick={() => setShowModal(false)} style={{ all: "unset", cursor: "pointer", flex: 1, textAlign: "center", padding: "10px 0", font: "600 13px var(--font-body)", background: "#f2f2f2" }}>Cancelar</button>
              <button type="submit" style={{ all: "unset", cursor: "pointer", flex: 1, textAlign: "center", padding: "10px 0", font: "600 13px var(--font-body)", background: "var(--blue-600)", color: "#fff" }}>Cadastrar</button>
            </div>
          </form>
        </div>
      )}
      {emOnboarding.length === 0 ? (
        <div style={{ padding: 40, font: "400 15px var(--font-body)", color: "#999" }}>Nenhum aluno em processo de onboarding no momento.</div>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", borderBottom: "2px solid var(--gray-900)" }}>
              <th style={{ padding: "12px 32px 10px 32px", font: "600 13px var(--font-body)" }}>Aluno</th>
              <th style={{ padding: "12px 8px 10px", font: "600 13px var(--font-body)" }}>Matrícula</th>
              <th style={{ padding: "12px 8px 10px", font: "600 13px var(--font-body)" }}>Turma</th>
              <th style={{ padding: "12px 8px 10px", font: "600 13px var(--font-body)" }}>Origem</th>
              <th style={{ padding: "12px 8px 10px", font: "600 13px var(--font-body)" }}>Onboarding</th>
              <th style={{ padding: "12px 32px 10px 8px", font: "600 13px var(--font-body)" }}>Primeira aula</th>
            </tr>
          </thead>
          <tbody>
            {emOnboarding.map((s) => (
              <tr key={s.matricula} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px 32px 10px 32px" }}>
                  <input defaultValue={s.name} onBlur={(e) => updateStudent(s.matricula, { name: e.target.value })} style={{ all: "unset", font: "600 14px var(--font-body)", width: "100%" }} />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <input defaultValue={s.matricula} onBlur={(e) => updateStudent(s.matricula, { matricula: e.target.value })} style={{ all: "unset", font: "400 13px var(--font-body)", color: "#888", width: "100%" }} />
                </td>
                <td style={{ padding: "10px 8px" }}>
                  <select
                    value={s.turmaId || ""}
                    onChange={(e) => {
                      if (!e.target.value) { updateStudent(s.matricula, { turmaId: null, turmaNome: "Sem turma definida", individual: false }); return; }
                      const t = turmaOptions.find((o) => o.id === e.target.value);
                      updateStudent(s.matricula, { turmaId: t.id, turmaNome: t.nome, individual: !t.group });
                    }}
                    style={{ font: "400 13px var(--font-body)", color: "#666", border: "none", background: "transparent", outline: "none", width: "100%" }}
                  >
                    <option value="">Sem turma definida</option>
                    {turmaOptions.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
                  </select>
                </td>
                <td style={{ padding: "10px 8px", font: "400 13px var(--font-body)", color: "#666" }}>{s.origem || "—"}</td>
                <td style={{ padding: "10px 8px" }}>
                  <button onClick={() => toggleOnboarding(s.matricula)} style={{ all: "unset", cursor: "pointer" }}>
                    <Pill tone={s.onboarding ? "blue" : "outline"}>{s.onboarding ? "Concluído" : "Pendente"}</Pill>
                  </button>
                </td>
                <td style={{ padding: "10px 8px 10px 8px" }}>
                  <button onClick={() => marcarPrimeiraAula(s.matricula)} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "6px 12px", font: "600 12px var(--font-body)" }}>Marcar 1ª aula feita →</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
window.ComercialTab = ComercialTab;
}

// ---- Chat (Slack-like) ----
{
const D = window.SchoolData;

const CANAIS_INICIAIS = [
  { id: "geral", label: "# geral" },
  { id: "professores", label: "# professores" },
  { id: "coordenacao", label: "# coordenação" },
  { id: "beginners", label: "# turmas-beginners" },
];
const DMS_INICIAIS = ["Gabe", "Duda Torres", "Léo", "Rhayane"];

const SEED = {
  geral: [
    { autor: "Coordenação", hora: "09:12", texto: "Bom dia, equipe! Lembrete do encontro de sábado às 14h." },
    { autor: "Gabe", hora: "09:30", texto: "Confirmado! Vou levar o material do devocional em inglês." },
  ],
  professores: [
    { autor: "Léo", hora: "08:45", texto: "Alguém tem exercícios prontos de comparatives? Índia chega nesse tópico amanhã." },
    { autor: "Rhayane", hora: "08:52", texto: "Tenho sim, te mando o PDF que usei com Jordan. Funcionou muito bem com devocional junto." },
    { autor: "Duda Torres", hora: "09:05", texto: "@coordenacao a turma Central African Republic tem 1 aluno na lista de espera — conseguimos abrir vaga?" },
  ],
  coordenacao: [
    { autor: "Coordenação", hora: "07:58", texto: "Renovações de maio: Jordan, Mozambique e Nigeria terminam em breve. Vamos alinhar o contato com os alunos." },
  ],
  beginners: [
    { autor: "Ingrid", hora: "10:14", texto: "Maldivas começou muito bem — 10 matriculados no primeiro mês!" },
  ],
};

function ChatTab({ loggedInAs }) {
  const [canais, setCanais] = React.useState(CANAIS_INICIAIS);
  const [dms, setDms] = React.useState(DMS_INICIAIS);
  const [canal, setCanal] = React.useState("professores");
  const [msgs, setMsgs] = React.useState(SEED);
  const [draft, setDraft] = React.useState("");
  const [novoCanal, setNovoCanal] = React.useState(null); // null | "canal" | "dm"
  const [novoNome, setNovoNome] = React.useState("");

  const STAFF_NAMES = window.SchoolData.STAFF.map((s) => s.name);

  const criarCanal = () => {
    const nome = novoNome.trim().toLowerCase().replace(/\s+/g, "-").replace(/^#/, "");
    if (!nome) return;
    const id = "c-" + nome;
    if (!canais.some((c) => c.id === id)) setCanais((cs) => [...cs, { id, label: "# " + nome }]);
    setCanal(id);
    setNovoNome("");
    setNovoCanal(null);
  };

  const criarDm = (nome) => {
    if (!dms.includes(nome)) setDms((d) => [...d, nome]);
    setCanal("dm-" + nome);
    setNovoCanal(null);
  };

  const canalAtivo = canais.find((c) => c.id === canal);
  const lista = msgs[canal] || [];

  const enviar = () => {
    if (!draft.trim()) return;
    setMsgs((m) => ({ ...m, [canal]: [...(m[canal] || []), { autor: loggedInAs === "Equipe" ? "Você (Equipe)" : loggedInAs, hora: "agora", texto: draft.trim() }] }));
    setDraft("");
  };

  return (
    <div style={{ display: "flex", height: "100%", fontFamily: "var(--font-body)", background: "#fff" }} data-screen-label="Chat">
      <div style={{ width: 220, borderRight: "1px solid #eee", padding: "18px 0", display: "flex", flexDirection: "column", gap: 2, flex: "none" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "0 18px 8px" }}>
          <span style={{ font: "600 11px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>Canais</span>
          <button onClick={() => { setNovoCanal(novoCanal === "canal" ? null : "canal"); setNovoNome(""); }} title="Novo canal" style={{ all: "unset", cursor: "pointer", marginLeft: "auto", font: "600 14px var(--font-body)", color: "var(--blue-600)", padding: "0 4px" }}>+</button>
        </div>
        {novoCanal === "canal" && (
          <div style={{ display: "flex", gap: 4, padding: "0 14px 8px" }}>
            <input
              autoFocus
              value={novoNome}
              onChange={(e) => setNovoNome(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") criarCanal(); if (e.key === "Escape") setNovoCanal(null); }}
              placeholder="nome-do-canal"
              style={{ flex: 1, minWidth: 0, border: "1px solid #ddd", padding: "6px 8px", font: "400 12px var(--font-body)", outline: "none" }}
            />
            <button onClick={criarCanal} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "6px 10px", font: "600 11px var(--font-body)" }}>Criar</button>
          </div>
        )}
        {canais.map((c) => (
          <button
            key={c.id}
            onClick={() => setCanal(c.id)}
            style={{
              all: "unset", cursor: "pointer", padding: "8px 18px",
              font: "600 13px var(--font-body)",
              color: canal === c.id ? "#fff" : "var(--gray-900)",
              background: canal === c.id ? "var(--blue-600)" : "transparent",
            }}
          >
            {c.label}
          </button>
        ))}
        <div style={{ display: "flex", alignItems: "center", padding: "18px 18px 8px" }}>
          <span style={{ font: "600 11px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>Mensagens diretas</span>
          <button onClick={() => setNovoCanal(novoCanal === "dm" ? null : "dm")} title="Nova conversa" style={{ all: "unset", cursor: "pointer", marginLeft: "auto", font: "600 14px var(--font-body)", color: "var(--blue-600)", padding: "0 4px" }}>+</button>
        </div>
        {novoCanal === "dm" && (
          <div style={{ display: "flex", flexDirection: "column", padding: "0 14px 8px", border: "1px solid #eee", margin: "0 12px 8px", paddingTop: 8 }}>
            <span style={{ font: "600 10px var(--font-body)", color: "#999", textTransform: "uppercase", marginBottom: 4 }}>Começar conversa com</span>
            {STAFF_NAMES.filter((n) => n !== loggedInAs && !dms.includes(n)).map((n) => (
              <button key={n} onClick={() => criarDm(n)} style={{ all: "unset", cursor: "pointer", padding: "5px 4px", font: "400 13px var(--font-body)", color: "var(--blue-600)" }}>{n}</button>
            ))}
            {STAFF_NAMES.filter((n) => n !== loggedInAs && !dms.includes(n)).length === 0 && (
              <span style={{ font: "400 12px var(--font-body)", color: "#999", padding: "4px 0 8px" }}>Você já conversa com toda a equipe.</span>
            )}
          </div>
        )}
        {dms.filter((n) => n !== loggedInAs).map((n) => (
          <button
            key={n}
            onClick={() => setCanal("dm-" + n)}
            style={{
              all: "unset", cursor: "pointer", padding: "8px 18px",
              font: "400 13px var(--font-body)",
              color: canal === "dm-" + n ? "#fff" : "var(--gray-900)",
              background: canal === "dm-" + n ? "var(--blue-600)" : "transparent",
              display: "flex", alignItems: "center", gap: 8,
            }}
          >
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--blue-600)", flex: "none", opacity: canal === "dm-" + n ? 0 : 1 }} />
            {n}
          </button>
        ))}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ padding: "14px 24px", borderBottom: "1px solid #eee" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: "22px" }}>
            {canalAtivo ? canalAtivo.label : canal.replace("dm-", "")}
          </span>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: "18px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {lista.length === 0 && (
            <span style={{ font: "400 13px var(--font-body)", color: "#999" }}>Nenhuma mensagem ainda — comece a conversa.</span>
          )}
          {lista.map((m, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ width: 32, height: 32, flex: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: i % 2 === 0 ? "var(--blue-600)" : "var(--red-600)", color: "#fff", font: "600 12px var(--font-body)" }}>
                {m.autor.split(" ").map((p) => p[0]).slice(0, 2).join("")}
              </span>
              <div>
                <div style={{ font: "600 13px var(--font-body)" }}>{m.autor} <span style={{ color: "#999", fontWeight: 400, fontSize: 11 }}>{m.hora}</span></div>
                <div style={{ font: "400 14px var(--font-body)", color: "var(--gray-900)" }}><MentionText text={m.texto} /></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8, padding: "14px 24px", borderTop: "1px solid #eee" }}>
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter") enviar(); }}
            placeholder={`Mensagem para ${canalAtivo ? canalAtivo.label : canal.replace("dm-", "")}…`}
            style={{ flex: 1, border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)", outline: "none" }}
          />
          <button onClick={enviar} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "10px 18px", font: "600 13px var(--font-body)" }}>Enviar</button>
        </div>
      </div>
    </div>
  );
}
window.ChatTab = ChatTab;
}

// ---- Disparo rápido (Professor) ----
{
const D = window.SchoolData;
const { flagOf } = window.V2;

function DisparoRapido({ teacher }) {
  const minhasGrupo = D.GROUP_TURMAS.filter((t) => !teacher || t.professor === teacher);
  const minhasInd = D.INDIVIDUAL_TURMAS.filter((t) => !teacher || t.professor === teacher);
  const todas = [...minhasGrupo.map((t) => ({ id: t.id, nome: t.nome, flag: flagOf(t.id), estagio: t.estagio })), ...minhasInd.map((t) => ({ id: t.id, nome: t.nome + " (1:1)", flag: "", estagio: t.estagio }))];
  const estagios = [...new Set(todas.map((t) => t.estagio))];

  const [selecionadas, setSelecionadas] = React.useState(() => new Set(todas.map((t) => t.id)));
  const [msg, setMsg] = React.useState("");
  const [link, setLink] = React.useState("");
  const [enviado, setEnviado] = React.useState(null);

  const toggle = (id) => setSelecionadas((s) => {
    const n = new Set(s);
    if (n.has(id)) n.delete(id); else n.add(id);
    return n;
  });
  const selecionarEstagio = (est) => setSelecionadas(new Set(todas.filter((t) => t.estagio === est).map((t) => t.id)));
  const selecionarTodas = () => setSelecionadas(new Set(todas.map((t) => t.id)));

  const disparar = () => {
    if (!msg.trim() && !link.trim()) return;
    setEnviado(selecionadas.size);
    setMsg("");
    setLink("");
  };

  return (
    <div style={{ margin: "20px 32px", border: "2px solid var(--gray-900)", padding: "20px 24px", display: "flex", flexDirection: "column", gap: 12 }} data-screen-label="Disparo rápido">
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "24px" }}>Disparo rápido para turmas</span>
      <span style={{ font: "400 13px var(--font-body)", color: "#888" }}>Compartilhe um recado, podcast ou material com várias turmas de uma vez — vai para o mural de cada turma selecionada.</span>

      <textarea
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        rows={2}
        placeholder="Escreva o recado… ex: 'Ouçam esse podcast antes da próxima aula!'"
        style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 14px var(--font-body)", outline: "none", resize: "vertical" }}
      />
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Link opcional (podcast, YouTube, Drive…)"
        style={{ border: "1px solid #ddd", padding: "10px 12px", font: "400 13px var(--font-body)", outline: "none" }}
      />

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
        <span style={{ font: "600 11px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Selecionar:</span>
        <button onClick={selecionarTodas} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", color: "var(--blue-600)", border: "1px solid var(--blue-600)", padding: "3px 10px" }}>Todas</button>
        {estagios.map((est) => (
          <button key={est} onClick={() => selecionarEstagio(est)} style={{ all: "unset", cursor: "pointer", font: "600 12px var(--font-body)", color: "var(--blue-600)", border: "1px solid var(--blue-600)", padding: "3px 10px" }}>{est}</button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {todas.map((t) => {
          const on = selecionadas.has(t.id);
          return (
            <button
              key={t.id}
              onClick={() => toggle(t.id)}
              style={{
                all: "unset", cursor: "pointer", padding: "5px 12px",
                font: "600 12px var(--font-body)",
                color: on ? "#fff" : "var(--gray-900)",
                background: on ? "var(--blue-600)" : "#f2f2f2",
              }}
            >
              {t.flag} {t.nome}
            </button>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <button onClick={disparar} style={{ all: "unset", cursor: "pointer", background: "var(--red-600)", color: "#fff", padding: "10px 22px", font: "600 14px var(--font-body)" }}>
          Disparar para {selecionadas.size} turma(s)
        </button>
        {enviado !== null && (
          <span style={{ font: "600 13px var(--font-body)", color: "var(--blue-600)" }}>Enviado para {enviado} turma(s) ✓</span>
        )}
      </div>
    </div>
  );
}
window.DisparoRapido = DisparoRapido;
}

// ---- Área do aluno v2: score + gamificação ----
{
const D = window.SchoolData;

const NIVEIS = [
  { min: 0, nome: "First Steps", prox: "Em Missão" },
  { min: 70, nome: "Em Missão", prox: "Commissioner" },
  { min: 80, nome: "Commissioner", prox: "Top Commissioner" },
  { min: 90, nome: "Top Commissioner", prox: null },
];

function nivelDe(score) {
  return [...NIVEIS].reverse().find((n) => score >= n.min);
}
function proximoNivel(score) {
  return NIVEIS.find((n) => n.min > score) || null;
}

function dicasPara(score) {
  if (score < 70) return [
    "Apareça mais nas aulas — sua presença é o que mais pesa no seu score.",
    "Se os horários estão difíceis, converse com a coordenação para mudar de turma.",
    "Entregar mais homework também ajuda a recuperar pontos.",
  ];
  if (score < 80) return [
    "Você está quase lá! Manter presença constante nas próximas semanas já sobe seu nível.",
    "Participe das dinâmicas de conversação — participação conta.",
  ];
  if (score < 90) return [
    "Continue assim! Presença constante te leva ao Top Commissioner.",
    "Ajudar colegas nas atividades em grupo também conta pontos.",
  ];
  return ["Você está no topo — mantenha o ritmo para não perder o nível."];
}

function ScoreCard({ student }) {
  const score = student.frequencia ?? 88;
  const nivel = nivelDe(score);
  const prox = proximoNivel(score);
  const [dicasAbertas, setDicasAbertas] = React.useState(false);
  const [relatorioAberto, setRelatorioAberto] = React.useState(true);
  const top = score >= 90;

  return (
    <React.Fragment>
      <div style={{ border: "2px solid var(--gray-900)", padding: 20, display: "flex", flexDirection: "column", gap: 12 }} data-screen-label="Score do aluno">
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ background: top ? "var(--red-600)" : "var(--blue-600)", color: "#fff", padding: "14px 18px", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 38, lineHeight: "36px" }}>{score}</div>
            <div style={{ font: "600 10px var(--font-body)", textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.85 }}>score</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <span style={{ font: "400 12px var(--font-body)", color: "#999", textTransform: "uppercase" }}>Seu nível</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 26, lineHeight: "26px" }}>{nivel.nome}</span>
            {prox && (
              <span style={{ font: "400 12px var(--font-body)", color: "#888" }}>Faltam {prox.min - score} pontos para {prox.nome}</span>
            )}
          </div>
        </div>

        {prox && (
          <div style={{ height: 10, background: "#f2f2f2" }}>
            <div style={{ height: "100%", width: `${Math.min((score / prox.min) * 100, 100)}%`, background: "var(--blue-600)" }} />
          </div>
        )}

        {top && (
          <div style={{ background: "var(--paper-100, #EFE2C0)", padding: "12px 14px", font: "400 13px var(--font-body)" }}>
            <strong>Você está no top 1% da escola!</strong> Benefício desbloqueado: desconto exclusivo no Overmission. Fale com a coordenação para resgatar.
          </div>
        )}

        <button onClick={() => setDicasAbertas((d) => !d)} style={{ all: "unset", cursor: "pointer", alignSelf: "flex-start", font: "600 13px var(--font-body)", color: "var(--blue-600)", textDecoration: "underline" }}>
          {dicasAbertas ? "Fechar dicas" : "Como melhorar meu score?"}
        </button>
        {dicasAbertas && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {dicasPara(score).map((d, i) => (
              <div key={i} style={{ borderLeft: "3px solid var(--blue-600)", paddingLeft: 12, font: "400 13px var(--font-body)" }}>{d}</div>
            ))}
          </div>
        )}
      </div>

      {relatorioAberto && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(51,51,51,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 50 }}>
          <div style={{ background: "#fff", width: 400, padding: 28, display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ font: "600 11px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>Relatório do mês · Junho</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 30, lineHeight: "30px" }}>Veja como está seu score</span>
            <div style={{ display: "flex", gap: 0 }}>
              {[["Score", score], ["Nível", nivel.nome], ["Aulas no mês", 4]].map(([label, value], i) => (
                <div key={label} style={{ padding: "0 18px", borderLeft: i > 0 ? "1px solid #eee" : "none" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 24, lineHeight: "24px", whiteSpace: "nowrap" }}>{value}</div>
                  <div style={{ font: "400 11px var(--font-body)", color: "#999", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
            <span style={{ font: "400 13px var(--font-body)", color: "#666" }}>
              {score >= 90 ? "Você está no top 1% — benefício Overmission desbloqueado!" : score >= 80 ? "Ótimo mês! Continue assim para subir de nível." : "Seu score pode melhorar — veja as dicas personalizadas na sua área."}
            </span>
            <button onClick={() => setRelatorioAberto(false)} style={{ all: "unset", cursor: "pointer", background: "var(--blue-600)", color: "#fff", padding: "10px 0", textAlign: "center", font: "600 14px var(--font-body)" }}>Entendi</button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
window.ScoreCard = ScoreCard;
}

// ---- Shells v2 + App v2 ----
{
function StaffShellV2({ loggedInAs, onLogout }) {
  const [tab, setTab] = React.useState("painel");
  const [screen, setScreen] = React.useState("home");
  const [turmaId, setTurmaId] = React.useState(null);
  const [students, setStudents] = React.useState(() => window.SchoolData.ALL_STUDENTS.map((s) => ({ ...s })));

  const openTurma = (id) => { setTurmaId(id); setScreen("turma"); };
  const backHome = () => setScreen("home");
  const goTab = (t) => { setTab(t); setScreen("home"); };
  const isRealTeacher = loggedInAs !== "Equipe";

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "14px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "#fff", zIndex: 5 }}>
        <img src={(window.__resources && window.__resources.commissionLogo) || "commission-logo.jpg"} alt="Commission School" onClick={onLogout} style={{ height: 30, cursor: "pointer" }} />
        <div style={{ display: "flex", gap: 2, marginLeft: 10 }}>
          {[["painel", "Painel"], ["relatorios", "Relatórios"], ["chat", "Chat"], ["professor", "Professor"], ...(isRealTeacher ? [] : [["comercial", "Comercial"]]), ["alunos", "Alunos"]].map(([key, label]) => (
            <button
              key={key}
              onClick={() => goTab(key)}
              style={{
                all: "unset", cursor: "pointer", padding: "8px 16px",
                font: "600 13px var(--font-body)",
                color: tab === key ? "#fff" : "var(--gray-900)",
                background: tab === key ? "var(--blue-600)" : "#f2f2f2",
              }}
            >
              {label}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 18, alignItems: "center" }}>
          <NotifBell />
          <button onClick={() => setTab("painel")} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--gray-900)" }}>Início</button>
          <button onClick={() => setTab("perfil")} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--blue-600)" }}>Meu perfil</button>
          <button onClick={onLogout} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "#999" }}>Sair</button>
        </div>
      </div>

      <div style={{ flex: 1, overflow: "auto", minHeight: 0 }}>
        {tab === "painel" && screen === "home" && <PainelMacro onOpenTurma={openTurma} />}
        {tab === "painel" && screen === "turma" && <TurmaDetail turmaId={turmaId} onBack={backHome} />}

        {tab === "relatorios" && <RelatoriosTab teacherName={isRealTeacher ? loggedInAs : null} />}
        {tab === "chat" && <ChatTab loggedInAs={loggedInAs} />}

        {tab === "professor" && !isRealTeacher && (
          <div style={{ padding: 40, font: "400 15px var(--font-body)", color: "#777" }}>
            Você entrou com o acesso geral da Equipe. Para ver o painel de um professor específico (com disparo rápido), saia e entre novamente escolhendo um nome de professor.
          </div>
        )}
        {tab === "professor" && isRealTeacher && screen === "home" && (
          <div style={{ background: "#fff", minHeight: "100%" }}>
            <DisparoRapido teacher={loggedInAs} />
            <TurmasTab onOpenTurma={openTurma} teacherFilter={loggedInAs} />
          </div>
        )}
        {tab === "professor" && isRealTeacher && screen === "turma" && <TurmaDetail turmaId={turmaId} onBack={backHome} />}

        {tab === "alunos" && <StudentsAdmin students={students} setStudents={setStudents} />}

        {tab === "comercial" && !isRealTeacher && <ComercialTab students={students} setStudents={setStudents} />}

        {tab === "perfil" && (
          <ProfilePage
            name={loggedInAs}
            subtitle={{ label: "Papel", value: isRealTeacher ? "Professor(a)" : "Equipe / Coordenação" }}
            handle={window.SchoolData.STAFF.find((s) => s.name === loggedInAs)?.handle || "@equipe"}
            slotId={"staff-photo-" + loggedInAs}
          />
        )}
      </div>
    </div>
  );
}

function StudentShellV2({ student, onLogout }) {
  const [tab, setTab] = React.useState("home");

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "14px 32px", borderBottom: "1px solid #eee", position: "sticky", top: 0, background: "#fff", zIndex: 5 }}>
        <img src={(window.__resources && window.__resources.commissionLogo) || "commission-logo.jpg"} alt="Commission School" onClick={onLogout} style={{ height: 30, cursor: "pointer" }} />
        <span style={{ font: "600 12px var(--font-body)", color: "#999", textTransform: "uppercase", letterSpacing: "0.06em" }}>Conectado como {student.name}</span>
        <div style={{ marginLeft: "auto", display: "flex", gap: 14, alignItems: "center" }}>
          <button onClick={() => setTab("home")} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--gray-900)" }}>Início</button>
          <button onClick={() => setTab(tab === "perfil" ? "home" : "perfil")} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "var(--blue-600)" }}>Meu perfil</button>
          <button onClick={onLogout} style={{ all: "unset", cursor: "pointer", font: "600 13px var(--font-body)", color: "#999" }}>Sair</button>
        </div>
      </div>
      <div style={{ flex: 1, overflow: "auto", minHeight: 0 }}>
        {tab === "home" && (
          <div style={{ background: "#fff", minHeight: "100%", padding: "24px 32px 0" }}>
            <ScoreCard student={student} />
            <StudentArea student={student} />
          </div>
        )}
        {tab === "perfil" && (
          <ProfilePage
            name={student.name}
            subtitle={{ label: "Turma", value: student.turmaNome }}
            matricula={student.matricula}
            slotId={"student-photo-" + student.matricula}
          />
        )}
      </div>
    </div>
  );
}

function SchoolAppV2() {
  const [stage, setStage] = React.useState("home");
  const [loggedInAs, setLoggedInAs] = React.useState(null);
  const [student, setStudent] = React.useState(null);

  const logout = () => { setStage("home"); setLoggedInAs(null); setStudent(null); };

  return (
    <React.Fragment>
      {stage === "home" && (
        <Home onEnterStaff={() => setStage("staff-login")} onEnterStudent={() => setStage("student-login")} />
      )}
      {stage === "staff-login" && (
        <TeacherLogin onBack={() => setStage("home")} onLogin={(name) => { setLoggedInAs(name); setStage("staff"); }} />
      )}
      {stage === "staff" && <StaffShellV2 loggedInAs={loggedInAs} onLogout={logout} />}
      {stage === "student-login" && (
        <StudentLogin onBack={() => setStage("home")} onLogin={(s) => { setStudent(s); setStage("aluno"); }} />
      )}
      {stage === "aluno" && <StudentShellV2 student={student} onLogout={logout} />}
    </React.Fragment>
  );
}
window.SchoolAppV2 = SchoolAppV2;
}
