/* @ds-bundle: {"format":4,"namespace":"CommissionSchoolDesignSystem_c6e6c2","components":[{"name":"GrainBackground","sourcePath":"components/content/GrainBackground.jsx"},{"name":"HighlightMark","sourcePath":"components/content/HighlightMark.jsx"},{"name":"PostFrame","sourcePath":"components/content/PostFrame.jsx"},{"name":"QuoteMark","sourcePath":"components/content/QuoteMark.jsx"},{"name":"StickerElement","sourcePath":"components/content/StickerElement.jsx"},{"name":"InitialsAvatar","sourcePath":"components/school/InitialsAvatar.jsx"},{"name":"OccupancyMeter","sourcePath":"components/school/OccupancyMeter.jsx"},{"name":"Pill","sourcePath":"components/school/Pill.jsx"},{"name":"CAROUSEL_SLIDES","sourcePath":"ui_kits/instagram-posts/CarouselSlides.jsx"},{"name":"FeedScreen","sourcePath":"ui_kits/instagram-posts/Screens.jsx"},{"name":"CarouselViewer","sourcePath":"ui_kits/instagram-posts/Screens.jsx"},{"name":"QuotePostScreen","sourcePath":"ui_kits/instagram-posts/Screens.jsx"}],"sourceHashes":{"components/content/GrainBackground.jsx":"5880e00ec1ad","components/content/HighlightMark.jsx":"02e8ebfb3db5","components/content/PostFrame.jsx":"8c3dc2e9b368","components/content/QuoteMark.jsx":"f478fcb95e2b","components/content/StickerElement.jsx":"8d2d01da1605","components/school/InitialsAvatar.jsx":"3e7704975c10","components/school/OccupancyMeter.jsx":"65c1b4cef951","components/school/Pill.jsx":"0d2a36e1cdef","ui_kits/instagram-posts/CarouselSlides.jsx":"bedf38b3d4fc","ui_kits/instagram-posts/Screens.jsx":"40e5e1732c10","ui_kits/instagram-posts/ios-frame.jsx":"be3343be4b51","ui_kits/school-platform/Dashboard.jsx":"96c033bffea5","ui_kits/school-platform/Home.jsx":"953a9ce8e212","ui_kits/school-platform/Mention.jsx":"dc3a4b94bc1f","ui_kits/school-platform/ProfilePage.jsx":"9daaa3b914d0","ui_kits/school-platform/StudentArea.jsx":"36ef45fb67cb","ui_kits/school-platform/StudentLogin.jsx":"128753cf917a","ui_kits/school-platform/StudentsAdmin.jsx":"99fbf7e4587a","ui_kits/school-platform/TeacherLogin.jsx":"f9a552e3b3b8","ui_kits/school-platform/TurmaDetail.jsx":"ad1dd9d946df","ui_kits/school-platform/data.js":"8eba969aadd1","ui_kits/school-platform/image-slot.js":"4cffaf8e50f6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CommissionSchoolDesignSystem_c6e6c2 = window.CommissionSchoolDesignSystem_c6e6c2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/GrainBackground.jsx
try { (() => {
/**
 * Full-bleed color background with the brand's signature film-grain noise overlay.
 * Use as the base layer of any post/canvas composition — every Commission School
 * background (blue, red, or cream) carries this grain.
 */
function GrainBackground({
  tone = "blue",
  children,
  style
}) {
  const bg = tone === "red" ? "var(--red-600)" : tone === "cream" ? "var(--cream-50)" : tone === "dark" ? "var(--gray-900)" : "var(--blue-600)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      background: bg,
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      mixBlendMode: "overlay",
      opacity: 0.5,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%"
    }
  }, children));
}
Object.assign(__ds_scope, { GrainBackground });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GrainBackground.jsx", error: String((e && e.message) || e) }); }

// components/content/HighlightMark.jsx
try { (() => {
/**
 * Solid-color rectangle behind a run of text — the brand's signature "marker
 * highlight" move, used to call out phrases inside headlines and quotes.
 */
function HighlightMark({
  tone = "paper",
  underline = false,
  children,
  style
}) {
  const bg = tone === "red" ? "var(--red-600)" : tone === "blue" ? "var(--blue-600)" : tone === "dark" ? "var(--gray-900)" : "var(--paper-100)";
  const color = tone === "paper" ? "var(--gray-900)" : "var(--white)";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      width: "fit-content",
      background: bg,
      color,
      font: "600 26px var(--font-body)",
      padding: "var(--highlight-pad-y) var(--highlight-pad-x)",
      textDecoration: underline ? "underline" : "none",
      textDecorationThickness: underline ? "3px" : undefined,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { HighlightMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HighlightMark.jsx", error: String((e && e.message) || e) }); }

// components/content/PostFrame.jsx
try { (() => {
/**
 * Fixed portrait canvas (1080x1350 design space, scaled to fit) matching the
 * brand's Instagram carousel post format. Wrap a composition of GrainBackground
 * + HighlightMark + QuoteMark + StickerElement inside it.
 */
function PostFrame({
  width = 300,
  children
}) {
  const scale = width / 1080;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 1350 * scale,
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1350,
      transform: `scale(${scale})`,
      transformOrigin: "top left"
    }
  }, children));
}
Object.assign(__ds_scope, { PostFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteMark.jsx
try { (() => {
/**
 * Large accent-serif scripture/quote line, used sparingly for a single quoted
 * verse or emphasis statement inside a post.
 */
function QuoteMark({
  children,
  tone = "light",
  style
}) {
  const color = tone === "dark" ? "var(--gray-900)" : "var(--cream-50)";
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "400 44px/1.05 var(--font-accent-serif)",
      color,
      maxWidth: 640,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { QuoteMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteMark.jsx", error: String((e && e.message) || e) }); }

// components/content/StickerElement.jsx
try { (() => {
const SRC = {
  "bird-blue": "../assets/illustrations/bird-blue.png",
  "bird-red": "../assets/illustrations/bird-red.png",
  "flower-blue": "../assets/illustrations/flower-blue.png",
  "flower-red": "../assets/illustrations/flower-red.png",
  "mountain-blue": "../assets/illustrations/mountain-blue.png",
  "mountain-red": "../assets/illustrations/mountain-red.png",
  "blob-blue": "../assets/illustrations/blob-blue.png",
  "blob-red": "../assets/illustrations/blob-red.png",
  "star-blue": "../assets/illustrations/star-blue.svg",
  "star-red": "../assets/illustrations/star-red.svg"
};

/**
 * One of the brand's hand-drawn illustration stickers (bird, flower, mountain,
 * blob, star — each in blue or red) used to decorate post compositions — flat
 * fills, no gradients or shadows.
 */
function StickerElement({
  name = "bird-blue",
  size = 110,
  rotate = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: SRC[name] || SRC["bird-blue"],
    alt: `${name} sticker`,
    style: {
      height: size,
      width: "auto",
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      ...style
    }
  });
}
Object.assign(__ds_scope, { StickerElement });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StickerElement.jsx", error: String((e && e.message) || e) }); }

// components/school/InitialsAvatar.jsx
try { (() => {
const TONE_BG = ["var(--blue-600)", "var(--red-600)"];
function initials(name) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || "") + (parts[1]?.[0] || "")).toUpperCase();
}

/**
 * Square initials avatar (no photo assets exist in the brand) — alternates
 * blue/red fill by a stable hash of the name so a roster reads as varied,
 * not repetitive.
 */
function InitialsAvatar({
  name = "",
  size = 44,
  style
}) {
  const hash = [...name].reduce((a, c) => a + c.charCodeAt(0), 0);
  const bg = TONE_BG[hash % 2];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      flex: "none",
      background: bg,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      font: `600 ${Math.round(size * 0.36)}px var(--font-body)`,
      ...style
    }
  }, initials(name));
}
Object.assign(__ds_scope, { InitialsAvatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/school/InitialsAvatar.jsx", error: String((e && e.message) || e) }); }

// components/school/OccupancyMeter.jsx
try { (() => {
/**
 * Horizontal capacity bar — filled portion shows occupancy %, turns red past
 * 90% or when over capacity (>100%) to flag it needs attention.
 */
function OccupancyMeter({
  occupied = 0,
  max = 0,
  style
}) {
  const pct = max > 0 ? occupied / max * 100 : 0;
  const over = pct > 100;
  const hot = pct >= 90;
  const barColor = over || hot ? "var(--red-600)" : "var(--blue-600)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "#e9e9e9",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      width: `${Math.min(pct, 100)}%`,
      background: barColor
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 12px var(--font-body)",
      color: over ? "var(--red-600)" : "#777"
    }
  }, max > 0 ? `${occupied}/${max} · ${pct.toFixed(0).replace(".0", "")}%` : `${occupied} matriculados`, over ? " · acima da capacidade" : ""));
}
Object.assign(__ds_scope, { OccupancyMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/school/OccupancyMeter.jsx", error: String((e && e.message) || e) }); }

// components/school/Pill.jsx
try { (() => {
const TONES = {
  blue: {
    bg: "var(--blue-600)",
    fg: "#fff"
  },
  red: {
    bg: "var(--red-600)",
    fg: "#fff"
  },
  paper: {
    bg: "var(--paper-100)",
    fg: "var(--gray-900)"
  },
  neutral: {
    bg: "#eee",
    fg: "var(--gray-900)"
  },
  outline: {
    bg: "transparent",
    fg: "var(--gray-900)"
  }
};

/**
 * Small status/label chip — hard-edged per brand (no pill radius), used for
 * class status, stage, waitlist, and alert flags across the admin platform.
 */
function Pill({
  tone = "neutral",
  children,
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: t.bg,
      color: t.fg,
      border: tone === "outline" ? "1px solid var(--gray-900)" : "none",
      font: "600 13px var(--font-body)",
      letterSpacing: "0.02em",
      padding: "4px 10px",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/school/Pill.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-posts/CarouselSlides.jsx
try { (() => {
// Full inner-canvas slides for the "Um versículo, Duas Traduções" carousel,
// recreated from uploads/CARD (1–8).png. Built from the design system's
// content primitives (GrainBackground, HighlightMark, QuoteMark, StickerElement).
// Canvas coordinate space is always 1080x1350 (see PostFrame).

function Slide1() {
  const {
    GrainBackground,
    HighlightMark
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "blue"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 470,
      left: 90,
      display: "flex",
      flexDirection: "column",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(HighlightMark, {
    tone: "paper",
    style: {
      font: "600 54px var(--font-body)"
    }
  }, "Um vers\xEDculo"), /*#__PURE__*/React.createElement(HighlightMark, {
    tone: "red",
    style: {
      font: "600 54px var(--font-body)"
    }
  }, "Duas Tradu\xE7\xF5es"), /*#__PURE__*/React.createElement(HighlightMark, {
    tone: "dark",
    style: {
      font: "400 30px var(--font-body)",
      maxWidth: 780
    }
  }, "Duas interpreta\xE7\xF5es completamente diferentes.")));
}
function Slide2() {
  const {
    GrainBackground
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "blue"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 520,
      left: 70,
      right: 70,
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "26px 28px",
      font: "400 32px/1.35 var(--font-accent-serif)",
      color: "var(--gray-900)"
    }
  }, "\"Sabemos que Deus age em todas as coisas para o bem daqueles que o amam\" Romanos 8:28 \u2014 NIV"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "26px 28px",
      font: "400 32px/1.35 var(--font-accent-serif)",
      color: "var(--gray-900)"
    }
  }, "\"And we know that for those who love God all things work together for good.\" Romanos 8:28 \u2014 ESV")));
}
function Slide3() {
  const {
    GrainBackground,
    StickerElement
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement(StickerElement, {
    name: "flower-red",
    size: 130,
    style: {
      position: "absolute",
      top: 40,
      right: 60
    }
  }), /*#__PURE__*/React.createElement(StickerElement, {
    name: "bird-blue",
    size: 110,
    style: {
      position: "absolute",
      bottom: 60,
      left: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 540,
      left: 70,
      right: 70,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "20px 24px",
      font: "600 34px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, "Na NIV, DEUS \xE9 o sujeito."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "20px 24px",
      font: "600 34px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, "Deus trabalha para o bem daqueles que O amam."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "24px 28px",
      font: "400 28px/1.4 var(--font-accent-serif)",
      color: "var(--gray-900)",
      textDecoration: "underline",
      textDecorationThickness: "3px"
    }
  }, "\"Sabemos que Deus age em todas as coisas para o bem daqueles que o amam.\"")));
}
function Slide4() {
  const {
    GrainBackground,
    StickerElement
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement(StickerElement, {
    name: "flower-blue",
    size: 120,
    style: {
      position: "absolute",
      top: 60,
      left: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 520,
      left: 70,
      right: 70,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "20px 24px",
      font: "600 34px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, "Na ESV, n\xE3o \xE9 apenas Deus o sujeito."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "20px 24px",
      font: "600 34px var(--font-body)",
      color: "var(--gray-900)"
    }
  }, "Todas as coisas trabalham juntas para o bem daqueles que amam a Deus."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper-100)",
      padding: "24px 28px",
      font: "400 28px/1.4 var(--font-accent-serif)",
      color: "var(--gray-900)",
      textDecoration: "underline",
      textDecorationThickness: "3px"
    }
  }, "\"And we know that for those who love God all things work together for good\"")));
}
function Slide5() {
  const {
    GrainBackground
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 480,
      left: 60,
      right: 60,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "600 46px/1.15 var(--font-body)",
      color: "var(--red-600)"
    }
  }, "A tradu\xE7\xE3o importa. Mas isso n\xE3o significa que uma esteja certa e a outra errada.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 900,
      left: 60,
      background: "var(--red-600)",
      padding: "20px 26px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "400 32px var(--font-accent-serif)",
      color: "#fff"
    }
  }, "O que o texto original diz?")));
}
function Slide6() {
  const {
    GrainBackground
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  const rows = [["O texto original, em grego,", "red"], ["utiliza a palavra συνεργεῖ (synergeí)", "red"], ["Ela significa agir em conjunto, trabalhar em colaboração.", "blue"], ["o sujeito desse verbo é ambíguo no grego.", "blue"], ["Pode ser Deus ou \"todas as coisas\".", "blue"], ["Paulo não especificou.", "red"]];
  return /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 300,
      left: 60,
      right: 60,
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, rows.map(([text, tone], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: tone === "red" ? "var(--red-600)" : "var(--blue-600)",
      padding: "18px 22px",
      width: "fit-content"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 30px var(--font-accent-serif)",
      color: "#fff"
    }
  }, text)))));
}
function Slide7() {
  const {
    GrainBackground,
    StickerElement
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "cream"
  }, /*#__PURE__*/React.createElement(StickerElement, {
    name: "flower-blue",
    size: 90,
    style: {
      position: "absolute",
      top: 700,
      left: 30
    }
  }), /*#__PURE__*/React.createElement(StickerElement, {
    name: "flower-red",
    size: 90,
    style: {
      position: "absolute",
      top: 700,
      right: 30
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 440,
      left: 70,
      right: 70,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "600 44px/1.2 var(--font-body)",
      color: "var(--red-600)"
    }
  }, "Ou seja, as duas vers\xF5es est\xE3o corretas segundo o texto original.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 780,
      left: 100,
      right: 100,
      background: "var(--paper-100)",
      padding: "22px 26px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: "400 30px/1.3 var(--font-body)",
      color: "var(--blue-600)"
    }
  }, "Agora conta nos coment\xE1rios, qual vers\xE3o voc\xEA prefere?")));
}
const CAROUSEL_SLIDES = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];
window.CAROUSEL_SLIDES = CAROUSEL_SLIDES;
Object.assign(__ds_scope, { CAROUSEL_SLIDES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-posts/CarouselSlides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-posts/Screens.jsx
try { (() => {
// Feed screen — thumbnail grid entry point into the carousel post.
function FeedScreen({
  onOpenCarousel,
  onOpenQuote
}) {
  const {
    GrainBackground,
    StickerElement
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--cream-50)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 26px var(--font-display)",
      letterSpacing: "0.02em",
      color: "var(--gray-900)"
    }
  }, "COMMISSION SCHOOL")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 2,
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onOpenCarousel,
    style: {
      all: "unset",
      cursor: "pointer",
      aspectRatio: "4/5",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      transform: "scale(1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "blue"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "35%",
      left: 10,
      right: 10,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--paper-100)",
      font: "600 15px var(--font-body)",
      padding: "3px 6px",
      width: "fit-content"
    }
  }, "Um vers\xEDculo"), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--red-600)",
      color: "#fff",
      font: "600 15px var(--font-body)",
      padding: "3px 6px",
      width: "fit-content"
    }
  }, "Duas Tradu\xE7\xF5es")))))), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenQuote,
    style: {
      all: "unset",
      cursor: "pointer",
      aspectRatio: "4/5",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "dark"
  }, /*#__PURE__*/React.createElement(StickerElement, {
    name: "bird-blue",
    size: 40,
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 14,
      left: 8,
      right: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "400 15px var(--font-accent-serif)",
      color: "var(--cream-50)"
    }
  }, "\"Be strong and courageous\"")))), [...Array(4)].map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: "4/5",
      background: i % 2 ? "var(--blue-600)" : "var(--red-600)",
      opacity: 0.5
    }
  }))));
}

// Full-screen carousel viewer — swipe (drag) or tap left/right edge to move
// between slides; dot header mirrors Instagram's progress bars.
function CarouselViewer({
  onClose
}) {
  const [index, setIndex] = React.useState(0);
  const slides = window.CAROUSEL_SLIDES;
  const total = slides.length;
  const go = dir => setIndex(i => Math.max(0, Math.min(total - 1, i + dir)));
  const startX = React.useRef(null);
  const onTouchStart = e => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = e => {
    if (startX.current == null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (dx < -40) go(1);
    if (dx > 40) go(-1);
    startX.current = null;
  };
  const Slide = slides[index];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#000",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      padding: "10px 10px 0"
    }
  }, slides.map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      flex: 1,
      height: 3,
      borderRadius: 2,
      background: i <= index ? "#fff" : "rgba(255,255,255,0.35)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "10px 14px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--red-600)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px var(--font-body)"
    }
  }, "commission.school"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      cursor: "pointer",
      fontSize: 20
    },
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      overflow: "hidden"
    },
    onTouchStart: onTouchStart,
    onTouchEnd: onTouchEnd
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: "scale(1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement(ScaledCanvas, null, /*#__PURE__*/React.createElement(Slide, null)))))), /*#__PURE__*/React.createElement("div", {
    onClick: () => go(-1),
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: "30%",
      cursor: "pointer"
    }
  }), /*#__PURE__*/React.createElement("div", {
    onClick: () => go(1),
    style: {
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "30%",
      cursor: "pointer"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "10px 16px 18px",
      color: "#fff",
      font: "400 14px var(--font-body)"
    }
  }, "Deslize ou toque nas bordas para navegar \xB7 ", index + 1, "/", total));
}

// Renders 1080x1350 content scaled to fill its parent box.
function ScaledCanvas({
  children
}) {
  const ref = React.useRef(null);
  const [scale, setScale] = React.useState(0.3);
  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !el.parentElement) return;
    const measure = () => {
      const w = el.parentElement.clientWidth;
      const h = el.parentElement.clientHeight;
      setScale(Math.max(w / 1080, h / 1350));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1080,
      height: 1350,
      transform: `scale(${scale})`,
      transformOrigin: "top left"
    }
  }, children));
}

// Standalone single quote post ("Be strong and courageous").
function QuotePostScreen({
  onClose
}) {
  const {
    GrainBackground,
    QuoteMark,
    StickerElement
  } = window.CommissionSchoolDesignSystem_c6e6c2;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "#000",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 14px 6px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: "50%",
      background: "var(--blue-600)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "600 14px var(--font-body)"
    }
  }, "commission.school"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      cursor: "pointer",
      fontSize: 20
    },
    onClick: onClose
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(ScaledCanvas, null, /*#__PURE__*/React.createElement(GrainBackground, {
    tone: "blue"
  }, /*#__PURE__*/React.createElement(StickerElement, {
    name: "bird-blue",
    size: 90,
    style: {
      position: "absolute",
      top: 60,
      right: 60
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 700,
      left: 70,
      right: 70
    }
  }, /*#__PURE__*/React.createElement(QuoteMark, {
    tone: "light"
  }, "\"Be strong and courageous\" \u2014 Joshua 1:9"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 16,
      font: "600 26px var(--font-body)",
      color: "var(--cream-50)"
    }
  }, "Seja forte e corajoso"))))));
}
window.FeedScreen = FeedScreen;
window.CarouselViewer = CarouselViewer;
window.QuotePostScreen = QuotePostScreen;
Object.assign(__ds_scope, { FeedScreen, CarouselViewer, QuotePostScreen });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-posts/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/instagram-posts/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto'
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/instagram-posts/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/Dashboard.jsx
try { (() => {
{
  const {
    GROUP_TURMAS,
    INDIVIDUAL_TURMAS
  } = window.SchoolData;

  // Team ("Equipe") home — Netflix-style browse: each row is a turma (class),
  // each card in the row is a student enrolled in it. Rows sit inside a
  // horizontally-scrolling strip; the row header carries the class's real
  // metadata (professor, horário, ocupação) pulled from the school's report.

  function Dashboard({
    onOpenTurma,
    teacherFilter
  }) {
    const {
      Pill,
      OccupancyMeter,
      InitialsAvatar
    } = window.CommissionSchoolDesignSystem_c6e6c2;
    const [query, setQuery] = React.useState("");
    const turmas = (teacherFilter ? GROUP_TURMAS.filter(t => t.professor === teacherFilter) : GROUP_TURMAS).filter(t => t.nome.toLowerCase().includes(query.toLowerCase()));
    const individualTurmas = teacherFilter ? INDIVIDUAL_TURMAS.filter(t => t.professor === teacherFilter) : INDIVIDUAL_TURMAS;
    const alertTurmas = GROUP_TURMAS.filter(t => t.ocupacao >= 90);
    const spotlight = alertTurmas[0] || GROUP_TURMAS[0];

    // Overview totals — only for the unfiltered Equipe view.
    const totalAlunos = GROUP_TURMAS.reduce((n, t) => n + t.matriculados, 0) + INDIVIDUAL_TURMAS.length;
    const totalTurmas = GROUP_TURMAS.length + INDIVIDUAL_TURMAS.length;
    const totalProfessores = new Set([...GROUP_TURMAS.map(t => t.professor), ...INDIVIDUAL_TURMAS.map(t => t.professor)].filter(Boolean)).size;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        minHeight: "100%",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 20,
        padding: "14px 32px",
        borderBottom: "1px solid #eee"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 13px var(--font-body)",
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }
    }, teacherFilter ? `Painel do professor · ${teacherFilter}` : "Painel da equipe"), /*#__PURE__*/React.createElement("input", {
      value: query,
      onChange: e => setQuery(e.target.value),
      placeholder: "Buscar turma\u2026",
      style: {
        marginLeft: "auto",
        border: "1px solid #ddd",
        padding: "8px 12px",
        font: "400 14px var(--font-body)",
        width: 220,
        outline: "none"
      }
    })), !teacherFilter && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 0,
        padding: "18px 32px 0"
      }
    }, [["Total de alunos", totalAlunos], ["Turmas ativas", totalTurmas], ["Professores", totalProfessores], ["Média alunos/turma", window.SchoolData.MEDIA_ALUNOS_POR_TURMA]].map(([label, value], i) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        padding: "0 28px",
        borderLeft: i > 0 ? "1px solid #eee" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 34,
        lineHeight: "34px",
        color: "var(--gray-900)"
      }
    }, value), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: "0.04em"
      }
    }, label)))), !teacherFilter && /*#__PURE__*/React.createElement("div", {
      onClick: () => onOpenTurma(spotlight.id),
      style: {
        margin: "24px 32px",
        padding: "36px 40px",
        background: "var(--blue-600)",
        color: "#fff",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 15px var(--font-body)",
        opacity: 0.85,
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }
    }, spotlight.ocupacao >= 100 ? "Turma acima da capacidade" : "Turma em destaque"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 52,
        lineHeight: "50px",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap"
      }
    }, spotlight.nome), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 18px var(--font-body)",
        maxWidth: 640
      }
    }, "Prof. ", spotlight.professor, " \xB7 ", spotlight.horario, " \xB7 ", spotlight.matriculados, "/", spotlight.maximo, " matriculados (", spotlight.ocupacao, "%)"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        background: "#fff",
        color: "var(--blue-600)",
        padding: "10px 20px",
        font: "600 14px var(--font-body)"
      }
    }, "Ver turma"), spotlight.aguardandoVaga > 0 && /*#__PURE__*/React.createElement(Pill, {
      tone: "red"
    }, spotlight.aguardandoVaga, " aguardando vaga")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 20,
        right: 30,
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--red-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 44,
        right: 54,
        width: 6,
        height: 6,
        borderRadius: "50%",
        background: "var(--red-600)",
        opacity: 0.6
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 32px 40px",
        display: "flex",
        flexDirection: "column",
        gap: 30
      }
    }, turmas.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => onOpenTurma(t.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 10,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 26,
        lineHeight: "26px",
        color: "var(--gray-900)",
        whiteSpace: "nowrap"
      }
    }, t.nome), /*#__PURE__*/React.createElement(Pill, {
      tone: "blue"
    }, t.estagio), t.ocupacao >= 90 && /*#__PURE__*/React.createElement(Pill, {
      tone: "red"
    }, t.ocupacao >= 100 ? "Acima da capacidade" : "Quase lotada"), t.aguardandoVaga > 0 && /*#__PURE__*/React.createElement(Pill, {
      tone: "outline"
    }, t.aguardandoVaga, " na espera"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        font: "400 14px var(--font-body)",
        color: "#888"
      }
    }, "Prof. ", t.professor, " \xB7 ", t.horario)), /*#__PURE__*/React.createElement(OccupancyMeter, {
      occupied: t.matriculados,
      max: t.maximo,
      style: {
        marginBottom: 12,
        maxWidth: 320
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        overflowX: "auto",
        paddingBottom: 6
      }
    }, t.alunos.map(a => /*#__PURE__*/React.createElement("div", {
      key: a.matricula,
      style: {
        flex: "none",
        width: 128,
        border: "1px solid #eee",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(InitialsAvatar, {
      name: a.name,
      size: 48
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 13px var(--font-body)",
        color: "var(--gray-900)",
        textAlign: "center"
      }
    }, a.name), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 11px var(--font-body)",
        color: "#999"
      }
    }, a.matricula)))))), individualTurmas.length > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 26,
        lineHeight: "26px",
        color: "var(--gray-900)",
        whiteSpace: "nowrap"
      }
    }, "Aulas Individuais"), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 14px var(--font-body)",
        color: "#888"
      }
    }, individualTurmas.length, " aluno(s) em aula 1:1")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 14,
        overflowX: "auto",
        paddingBottom: 6
      }
    }, individualTurmas.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        flex: "none",
        width: 168,
        border: "1px solid #eee",
        padding: 12,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(InitialsAvatar, {
      name: t.nome,
      size: 40
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 13px var(--font-body)"
      }
    }, t.nome), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 11px var(--font-body)",
        color: "#999"
      }
    }, t.matricula), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#888"
      }
    }, "Prof. ", t.professor, " \xB7 ", t.horario))))), teacherFilter && turmas.length === 0 && individualTurmas.length === 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 15px var(--font-body)",
        color: "#888",
        padding: "20px 0"
      }
    }, "Nenhuma turma encontrada para ", teacherFilter, ".")));
  }
  window.Dashboard = Dashboard;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/Home.jsx
try { (() => {
{
  function Home({
    onEnterStaff,
    onEnterStudent
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-body)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 70,
        left: 90,
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: "var(--blue-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 110,
        left: 120,
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--red-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 90,
        right: 110,
        width: 18,
        height: 18,
        borderRadius: "50%",
        background: "var(--red-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 140,
        right: 80,
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: "var(--blue-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 220,
        right: 160,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--blue-600)",
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 22,
        maxWidth: 640,
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/commission-logo.jpg",
      alt: "Commission School",
      style: {
        height: 90
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 40,
        lineHeight: "40px",
        color: "var(--gray-900)",
        whiteSpace: "nowrap"
      }
    }, "Bem-vindo \xE0 Commission School"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 16px var(--font-body)",
        color: "#777",
        marginTop: 20
      }
    }, "Plataforma de gest\xE3o pedag\xF3gica")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: "100%",
        marginTop: 10
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onEnterStaff,
      style: {
        all: "unset",
        cursor: "pointer",
        background: "var(--blue-600)",
        color: "#fff",
        padding: "14px 0",
        textAlign: "center",
        font: "600 16px var(--font-body)"
      }
    }, "Entrar como Equipe / Professor"), /*#__PURE__*/React.createElement("button", {
      onClick: onEnterStudent,
      style: {
        all: "unset",
        cursor: "pointer",
        background: "var(--red-600)",
        color: "#fff",
        padding: "14px 0",
        textAlign: "center",
        font: "600 16px var(--font-body)"
      }
    }, "Entrar como Aluno"))));
  }
  window.Home = Home;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/Mention.jsx
try { (() => {
{
  // Renders "@handle" tokens inside a comment/observation string as a
  // highlighted mention — used in the staff-only "Observações Internas" tab.
  function MentionText({
    text
  }) {
    if (!text) return null;
    const parts = text.split(/(@[a-zA-Zà-úÀ-Ú]+)/g);
    return /*#__PURE__*/React.createElement(React.Fragment, null, parts.map((p, i) => p.startsWith("@") ? /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        color: "var(--blue-600)",
        fontWeight: 600
      }
    }, p) : /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, p)));
  }

  // Row of tappable "@handle" chips to insert a mention into a draft string.
  function MentionPicker({
    staff,
    onPick
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        flexWrap: "wrap"
      }
    }, staff.map(s => /*#__PURE__*/React.createElement("button", {
      key: s.handle,
      type: "button",
      onClick: () => onPick(s.handle),
      style: {
        all: "unset",
        cursor: "pointer",
        font: "600 12px var(--font-body)",
        color: "var(--blue-600)",
        border: "1px solid var(--blue-600)",
        padding: "3px 8px"
      }
    }, s.handle)));
  }
  window.MentionText = MentionText;
  window.MentionPicker = MentionPicker;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/Mention.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/ProfilePage.jsx
try { (() => {
{
  // Shared profile screen for staff and students — photo upload via the
  // draggable <image-slot>, plus identity details for the logged-in person.
  function ProfilePage({
    name,
    subtitle,
    matricula,
    handle,
    slotId
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        minHeight: "100%",
        fontFamily: "var(--font-body)",
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 28,
        lineHeight: "28px",
        display: "block",
        marginBottom: 24
      }
    }, "Meu Perfil"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 28,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("image-slot", {
      id: slotId,
      style: {
        width: 140,
        height: 140
      },
      shape: "circle",
      placeholder: "Arraste sua foto"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        paddingTop: 4
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "Nome"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 20px var(--font-body)"
      }
    }, name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, subtitle.label), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 15px var(--font-body)"
      }
    }, subtitle.value)), matricula && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "Matr\xEDcula"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 15px var(--font-body)"
      }
    }, matricula)), handle && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "Usu\xE1rio"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 15px var(--font-body)",
        color: "var(--blue-600)"
      }
    }, handle)))));
  }
  window.ProfilePage = ProfilePage;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/ProfilePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/StudentArea.jsx
try { (() => {
{
  const {
    GROUP_TURMAS,
    findTurma,
    lessonLogFor,
    classMuralFor
  } = window.SchoolData;

  // Renders the logged-in student's own class: turma info, Google Agenda
  // connect toggle, recent lessons, and the PUBLIC class mural (no internal
  // staff observations — those stay in the staff-only "Observações Internas"
  // tab inside TurmaDetail).
  function StudentArea({
    student
  }) {
    const {
      Pill
    } = window.CommissionSchoolDesignSystem_c6e6c2;
    const [connected, setConnected] = React.useState(false);
    const turma = !student.individual ? findTurma(student.turmaId) : null;
    const lessons = turma ? lessonLogFor(turma) : [];
    const mural = turma ? classMuralFor(turma) : [];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        minHeight: "100%",
        fontFamily: "var(--font-body)",
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.3fr 1fr",
        gap: 28
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #eee",
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 26,
        lineHeight: "26px",
        whiteSpace: "nowrap"
      }
    }, "Minha turma: ", student.turmaNome), turma && /*#__PURE__*/React.createElement(Pill, {
      tone: "blue"
    }, turma.estagio)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 14px var(--font-body)",
        color: "#666"
      }
    }, turma ? `Prof. ${turma.professor} · ${turma.horario}` : "Aula individual (1:1)")), /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #eee",
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 16px var(--font-body)"
      }
    }, "Google Agenda"), /*#__PURE__*/React.createElement("button", {
      onClick: () => setConnected(c => !c),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "8px 16px",
        font: "600 13px var(--font-body)",
        color: "#fff",
        background: connected ? "var(--blue-600)" : "var(--red-600)"
      }
    }, connected ? "Conectado ✓" : "Conectar Google Agenda")), connected ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 13px var(--font-body)",
        color: "#888"
      }
    }, "Suas aulas foram sincronizadas com sua agenda do Google."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(d => /*#__PURE__*/React.createElement("div", {
      key: d,
      style: {
        flex: 1,
        border: "1px solid #eee",
        padding: "8px 4px",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 11px var(--font-body)",
        color: "#999"
      }
    }, d), turma && turma.horario.startsWith(d.slice(0, 3)) && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 6,
        background: "var(--blue-600)",
        color: "#fff",
        font: "600 11px var(--font-body)",
        padding: "3px 2px"
      }
    }, "aula"))))) : /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 13px var(--font-body)",
        color: "#888"
      }
    }, "Conecte sua agenda do Google para receber lembretes autom\xE1ticos das suas aulas.")), lessons.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #eee",
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 16px var(--font-body)",
        display: "block",
        marginBottom: 12
      }
    }, "\xDAltimas aulas"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10
      }
    }, lessons.map((l, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "baseline"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 13px var(--font-body)",
        color: "var(--blue-600)",
        width: 44
      }
    }, l.data), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 14px var(--font-body)"
      }
    }, l.topico)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #eee",
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 16px var(--font-body)",
        display: "block",
        marginBottom: 4
      }
    }, "Matr\xEDcula"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 22,
        lineHeight: "22px",
        letterSpacing: "0.03em"
      }
    }, student.matricula)), mural.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        border: "1px solid #eee",
        padding: 20
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 16px var(--font-body)",
        display: "block",
        marginBottom: 12
      }
    }, "Mural da turma"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, mural.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderLeft: "3px solid var(--red-600)",
        paddingLeft: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 12px var(--font-body)",
        color: "#999"
      }
    }, m.autor, " \xB7 ", m.data), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 14px var(--font-body)"
      }
    }, m.texto))))))));
  }
  window.StudentArea = StudentArea;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/StudentArea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/StudentLogin.jsx
try { (() => {
{
  const {
    ALL_STUDENTS
  } = window.SchoolData;
  function StudentLogin({
    onLogin,
    onBack
  }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [selected, setSelected] = React.useState(ALL_STUDENTS[0].matricula);
    const submit = e => {
      e.preventDefault();
      const student = ALL_STUDENTS.find(s => s.matricula === selected);
      onLogin(student);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-body)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 60,
        right: 90,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "var(--red-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 90,
        left: 100,
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "var(--blue-600)"
      }
    }), /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        width: 360,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        border: "1px solid #eee",
        padding: 36
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onBack,
      style: {
        all: "unset",
        cursor: "pointer",
        font: "600 13px var(--font-body)",
        color: "var(--blue-600)",
        alignSelf: "flex-start"
      }
    }, "\u2190 Voltar"), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/commission-logo.jpg",
      alt: "Commission School",
      style: {
        height: 46,
        alignSelf: "center"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 14px var(--font-body)",
        color: "#888",
        textAlign: "center",
        marginBottom: 4
      }
    }, "Login do aluno"), /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 12px var(--font-body)",
        color: "#777",
        textTransform: "uppercase"
      }
    }, "E-mail"), /*#__PURE__*/React.createElement("input", {
      value: email,
      onChange: e => setEmail(e.target.value),
      placeholder: "aluno@email.com",
      style: {
        border: "1px solid #ddd",
        padding: "10px 12px",
        font: "400 14px var(--font-body)",
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 12px var(--font-body)",
        color: "#777",
        textTransform: "uppercase"
      }
    }, "Senha"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: password,
      onChange: e => setPassword(e.target.value),
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      style: {
        border: "1px solid #ddd",
        padding: "10px 12px",
        font: "400 14px var(--font-body)",
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 12px var(--font-body)",
        color: "#777",
        textTransform: "uppercase",
        marginTop: 8
      }
    }, "Entrar como (demo)"), /*#__PURE__*/React.createElement("select", {
      value: selected,
      onChange: e => setSelected(e.target.value),
      style: {
        border: "1px solid #ddd",
        padding: "10px 12px",
        font: "400 14px var(--font-body)"
      }
    }, ALL_STUDENTS.map(s => /*#__PURE__*/React.createElement("option", {
      key: s.matricula,
      value: s.matricula
    }, s.name, " \u2014 ", s.turmaNome))), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        all: "unset",
        cursor: "pointer",
        marginTop: 10,
        background: "var(--blue-600)",
        color: "#fff",
        padding: "12px 0",
        textAlign: "center",
        font: "600 15px var(--font-body)"
      }
    }, "Entrar")));
  }
  window.StudentLogin = StudentLogin;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/StudentLogin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/StudentsAdmin.jsx
try { (() => {
{
  const {
    ALL_STUDENTS,
    allTurmaOptions,
    nextMatricula
  } = window.SchoolData;

  // "Alunos" tab — comercial-facing roster across every turma (group + 1:1),
  // with onboarding / primeira-aula status toggles and a form to add new
  // students (assigning them to an existing turma + generating a matrícula).
  function StudentsAdmin() {
    const {
      Pill
    } = window.CommissionSchoolDesignSystem_c6e6c2;
    const [students, setStudents] = React.useState(ALL_STUDENTS);
    const [query, setQuery] = React.useState("");
    const [showForm, setShowForm] = React.useState(false);
    const turmaOptions = allTurmaOptions();
    const [form, setForm] = React.useState({
      name: "",
      turmaId: turmaOptions[0].id
    });
    const filtered = students.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));
    const toggle = (matricula, field) => {
      setStudents(list => list.map(s => s.matricula === matricula ? {
        ...s,
        [field]: !s[field]
      } : s));
    };
    const addStudent = e => {
      e.preventDefault();
      if (!form.name.trim()) return;
      const turma = turmaOptions.find(t => t.id === form.turmaId);
      setStudents(list => [{
        name: form.name.trim(),
        matricula: nextMatricula(),
        turmaId: turma.id,
        turmaNome: turma.nome,
        individual: !turma.group,
        onboarding: false,
        primeiraAula: false
      }, ...list]);
      setForm({
        name: "",
        turmaId: turmaOptions[0].id
      });
      setShowForm(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        minHeight: "100%",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 32px",
        borderBottom: "1px solid #eee"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "600 13px var(--font-body)",
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: "0.06em"
      }
    }, "Alunos \xB7 ", students.length, " cadastrados"), /*#__PURE__*/React.createElement("input", {
      value: query,
      onChange: e => setQuery(e.target.value),
      placeholder: "Buscar aluno\u2026",
      style: {
        marginLeft: "auto",
        border: "1px solid #ddd",
        padding: "8px 12px",
        font: "400 14px var(--font-body)",
        width: 220,
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("button", {
      onClick: () => setShowForm(s => !s),
      style: {
        all: "unset",
        cursor: "pointer",
        background: "var(--blue-600)",
        color: "#fff",
        padding: "8px 16px",
        font: "600 13px var(--font-body)"
      }
    }, "+ Adicionar aluno")), showForm && /*#__PURE__*/React.createElement("form", {
      onSubmit: addStudent,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end",
        padding: "18px 32px",
        background: "var(--paper-100)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 11px var(--font-body)",
        color: "#777",
        textTransform: "uppercase"
      }
    }, "Nome"), /*#__PURE__*/React.createElement("input", {
      value: form.name,
      onChange: e => setForm(f => ({
        ...f,
        name: e.target.value
      })),
      style: {
        border: "1px solid #ddd",
        padding: "8px 10px",
        font: "400 14px var(--font-body)",
        outline: "none",
        width: 220
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 11px var(--font-body)",
        color: "#777",
        textTransform: "uppercase"
      }
    }, "Turma"), /*#__PURE__*/React.createElement("select", {
      value: form.turmaId,
      onChange: e => setForm(f => ({
        ...f,
        turmaId: e.target.value
      })),
      style: {
        border: "1px solid #ddd",
        padding: "8px 10px",
        font: "400 14px var(--font-body)"
      }
    }, turmaOptions.map(t => /*#__PURE__*/React.createElement("option", {
      key: t.id,
      value: t.id
    }, t.nome)))), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        all: "unset",
        cursor: "pointer",
        background: "var(--red-600)",
        color: "#fff",
        padding: "9px 18px",
        font: "600 13px var(--font-body)"
      }
    }, "Cadastrar")), /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        textAlign: "left",
        borderBottom: "2px solid var(--gray-900)"
      }
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "12px 32px 10px 32px",
        font: "600 13px var(--font-body)"
      }
    }, "Aluno"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "12px 8px 10px",
        font: "600 13px var(--font-body)"
      }
    }, "Matr\xEDcula"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "12px 8px 10px",
        font: "600 13px var(--font-body)"
      }
    }, "Turma"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "12px 8px 10px",
        font: "600 13px var(--font-body)"
      }
    }, "Onboarding"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "12px 32px 10px 8px",
        font: "600 13px var(--font-body)"
      }
    }, "Primeira aula"))), /*#__PURE__*/React.createElement("tbody", null, filtered.map(s => /*#__PURE__*/React.createElement("tr", {
      key: s.matricula,
      style: {
        borderBottom: "1px solid #eee"
      }
    }, /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 32px 10px 32px",
        font: "600 14px var(--font-body)"
      }
    }, s.name), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px",
        font: "400 13px var(--font-body)",
        color: "#888"
      }
    }, s.matricula), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px",
        font: "400 13px var(--font-body)",
        color: "#666"
      }
    }, s.turmaNome), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(s.matricula, "onboarding"),
      style: {
        all: "unset",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: s.onboarding ? "blue" : "outline"
    }, s.onboarding ? "Concluído" : "Pendente"))), /*#__PURE__*/React.createElement("td", {
      style: {
        padding: "10px 8px 10px 8px"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(s.matricula, "primeiraAula"),
      style: {
        all: "unset",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement(Pill, {
      tone: s.primeiraAula ? "blue" : "outline"
    }, s.primeiraAula ? "Feita" : "Pendente"))))))));
  }
  window.StudentsAdmin = StudentsAdmin;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/StudentsAdmin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/TeacherLogin.jsx
try { (() => {
{
  const {
    TEACHERS
  } = window.SchoolData;
  function TeacherLogin({
    onLogin,
    onBack
  }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [selected, setSelected] = React.useState(TEACHERS[0]);
    const submit = e => {
      e.preventDefault();
      onLogin(selected);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100%",
        background: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-body)",
        position: "relative",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 60,
        left: 80,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "var(--blue-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 100,
        left: 110,
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--red-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 80,
        right: 100,
        width: 16,
        height: 16,
        borderRadius: "50%",
        background: "var(--red-600)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        bottom: 130,
        right: 70,
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--blue-600)"
      }
    }), /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        width: 360,
        display: "flex",
        flexDirection: "column",
        gap: 16,
        border: "1px solid #eee",
        padding: 36
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onBack,
      style: {
        all: "unset",
        cursor: "pointer",
        font: "600 13px var(--font-body)",
        color: "var(--blue-600)",
        alignSelf: "flex-start"
      }
    }, "\u2190 Voltar"), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo/commission-logo.jpg",
      alt: "Commission School",
      style: {
        height: 46,
        alignSelf: "center"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 14px var(--font-body)",
        color: "#888",
        textAlign: "center",
        marginBottom: 4
      }
    }, "Login da equipe / professor"), /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 12px var(--font-body)",
        color: "#777",
        textTransform: "uppercase"
      }
    }, "E-mail"), /*#__PURE__*/React.createElement("input", {
      value: email,
      onChange: e => setEmail(e.target.value),
      placeholder: "professor@commissionschool.com",
      style: {
        border: "1px solid #ddd",
        padding: "10px 12px",
        font: "400 14px var(--font-body)",
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 12px var(--font-body)",
        color: "#777",
        textTransform: "uppercase"
      }
    }, "Senha"), /*#__PURE__*/React.createElement("input", {
      type: "password",
      value: password,
      onChange: e => setPassword(e.target.value),
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      style: {
        border: "1px solid #ddd",
        padding: "10px 12px",
        font: "400 14px var(--font-body)",
        outline: "none"
      }
    }), /*#__PURE__*/React.createElement("label", {
      style: {
        font: "600 12px var(--font-body)",
        color: "#777",
        textTransform: "uppercase",
        marginTop: 8
      }
    }, "Entrar como (demo)"), /*#__PURE__*/React.createElement("select", {
      value: selected,
      onChange: e => setSelected(e.target.value),
      style: {
        border: "1px solid #ddd",
        padding: "10px 12px",
        font: "400 14px var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("option", {
      value: "Equipe"
    }, "Equipe (acesso geral)"), TEACHERS.map(t => /*#__PURE__*/React.createElement("option", {
      key: t,
      value: t
    }, t, " (professor)"))), /*#__PURE__*/React.createElement("button", {
      type: "submit",
      style: {
        all: "unset",
        cursor: "pointer",
        marginTop: 10,
        background: "var(--red-600)",
        color: "#fff",
        padding: "12px 0",
        textAlign: "center",
        font: "600 15px var(--font-body)"
      }
    }, "Entrar")));
  }
  window.TeacherLogin = TeacherLogin;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/TeacherLogin.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/TurmaDetail.jsx
try { (() => {
{
  const {
    findTurma,
    lessonLogFor,
    internalNotesFor,
    STAFF
  } = window.SchoolData;
  function TurmaDetail({
    turmaId,
    onBack
  }) {
    const {
      Pill,
      OccupancyMeter,
      InitialsAvatar
    } = window.CommissionSchoolDesignSystem_c6e6c2;
    const turma = findTurma(turmaId);
    const [tab, setTab] = React.useState("aulas");
    const [notes, setNotes] = React.useState(() => internalNotesFor(turma));
    const [draft, setDraft] = React.useState("");
    const [lessons, setLessons] = React.useState(() => lessonLogFor(turma).map(l => ({
      ...l,
      presentes: [...l.presentes]
    })));
    const [expanded, setExpanded] = React.useState(null);
    if (!turma) return null;
    const frequencia = aluno => {
      const total = lessons.length;
      const presentes = lessons.filter(l => l.presentes.includes(aluno.matricula)).length;
      return Math.round(presentes / total * 100);
    };
    const toggleAttendance = (lessonIdx, matricula) => {
      setLessons(ls => ls.map((l, i) => {
        if (i !== lessonIdx) return l;
        const has = l.presentes.includes(matricula);
        return {
          ...l,
          presentes: has ? l.presentes.filter(m => m !== matricula) : [...l.presentes, matricula]
        };
      }));
    };
    const updateLessonContent = (lessonIdx, field, value) => {
      setLessons(ls => ls.map((l, i) => i === lessonIdx ? {
        ...l,
        [field]: value
      } : l));
    };
    const attachPdf = (lessonIdx, file) => {
      if (!file) return;
      const url = URL.createObjectURL(file);
      setLessons(ls => ls.map((l, i) => i === lessonIdx ? {
        ...l,
        anexoPdf: {
          name: file.name,
          url
        }
      } : l));
    };
    const removePdf = lessonIdx => {
      setLessons(ls => ls.map((l, i) => i === lessonIdx ? {
        ...l,
        anexoPdf: null
      } : l));
    };
    const attachLink = lessonIdx => {
      setLessons(ls => ls.map((l, i) => {
        if (i !== lessonIdx) return l;
        const url = (l.linkDraft || "").trim();
        if (!url) return l;
        return {
          ...l,
          anexoLink: url,
          linkDraft: ""
        };
      }));
    };
    const removeLink = lessonIdx => {
      setLessons(ls => ls.map((l, i) => i === lessonIdx ? {
        ...l,
        anexoLink: ""
      } : l));
    };
    const addNote = () => {
      if (!draft.trim()) return;
      setNotes(m => [{
        autor: "Você",
        data: "hoje",
        texto: draft
      }, ...m]);
      setDraft("");
    };
    const insertMention = handle => setDraft(d => d ? d.trim() + " " + handle + " " : handle + " ");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#fff",
        minHeight: "100%",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "18px 32px",
        borderBottom: "1px solid #eee"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      style: {
        all: "unset",
        cursor: "pointer",
        font: "600 14px var(--font-body)",
        color: "var(--blue-600)"
      }
    }, "\u2190 Voltar"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 400,
        fontSize: 30,
        lineHeight: "30px",
        color: "var(--gray-900)",
        whiteSpace: "nowrap"
      }
    }, turma.nome), /*#__PURE__*/React.createElement(Pill, {
      tone: "blue"
    }, turma.estagio)), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "20px 32px",
        display: "flex",
        gap: 40,
        flexWrap: "wrap",
        borderBottom: "1px solid #eee"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "Professor"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 16px var(--font-body)"
      }
    }, turma.professor)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "Hor\xE1rio"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 16px var(--font-body)"
      }
    }, turma.horario)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "In\xEDcio \u2014 T\xE9rmino"), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 16px var(--font-body)"
      }
    }, turma.inicio, " \u2014 ", turma.termino || "em aberto")), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "Ocupa\xE7\xE3o"), /*#__PURE__*/React.createElement(OccupancyMeter, {
      occupied: turma.matriculados,
      max: turma.maximo,
      style: {
        marginTop: 6
      }
    })), turma.aguardandoVaga > 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 12px var(--font-body)",
        color: "#999",
        textTransform: "uppercase"
      }
    }, "Lista de espera"), /*#__PURE__*/React.createElement(Pill, {
      tone: "red",
      style: {
        marginTop: 4
      }
    }, turma.aguardandoVaga, " aguardando vaga"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 4,
        padding: "16px 32px 0"
      }
    }, [["aulas", "Calendário & Aulas"], ["presenca", "Relatório de Presença"], ["mural", "Observações Internas"]].map(([key, label]) => /*#__PURE__*/React.createElement("button", {
      key: key,
      onClick: () => setTab(key),
      style: {
        all: "unset",
        cursor: "pointer",
        padding: "10px 18px",
        font: "600 14px var(--font-body)",
        color: tab === key ? "#fff" : "var(--gray-900)",
        background: tab === key ? "var(--blue-600)" : "#f2f2f2"
      }
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 32
      }
    }, tab === "aulas" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 13px var(--font-body)",
        color: "#999"
      }
    }, "Clique em uma aula para ver o conte\xFAdo e marcar presen\xE7a."), lessons.map((l, i) => {
      const isOpen = expanded === i;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          border: "1px solid #eee",
          padding: 18,
          display: "flex",
          flexDirection: "column",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        onClick: () => setExpanded(isOpen ? null : i),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 12,
          cursor: "pointer"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          font: "600 15px var(--font-body)",
          color: "var(--blue-600)"
        }
      }, l.data), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "600 16px var(--font-body)"
        }
      }, l.topico || "(sem registro de lição)"), /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: "auto",
          font: "400 13px var(--font-body)",
          color: "#888"
        }
      }, l.presentes.length, "/", turma.alunos.length, " presentes"), (l.anexoPdf || l.anexoLink) && /*#__PURE__*/React.createElement("span", {
        style: {
          font: "600 12px var(--font-body)",
          color: "var(--blue-600)"
        }
      }, "\uD83D\uDCCE anexo"), /*#__PURE__*/React.createElement("span", {
        style: {
          font: "600 13px var(--font-body)",
          color: "var(--blue-600)"
        }
      }, isOpen ? "Fechar ▲" : "Abrir ▾")), !isOpen && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 6,
          flexWrap: "wrap"
        }
      }, turma.alunos.map(a => /*#__PURE__*/React.createElement("span", {
        key: a.matricula,
        title: a.name,
        style: {
          width: 26,
          height: 26,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          font: "600 11px var(--font-body)",
          color: "#fff",
          background: l.presentes.includes(a.matricula) ? "var(--blue-600)" : "var(--red-600)"
        }
      }, a.name.split(" ").map(p => p[0]).slice(0, 2).join("")))), isOpen && /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 14,
          marginTop: 4
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px var(--font-body)",
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 4
        }
      }, "Conte\xFAdo da aula"), /*#__PURE__*/React.createElement("textarea", {
        value: l.topico,
        onChange: e => updateLessonContent(i, "topico", e.target.value),
        rows: 2,
        style: {
          width: "100%",
          boxSizing: "border-box",
          border: "1px solid #ddd",
          padding: "8px 10px",
          font: "400 14px var(--font-body)",
          outline: "none",
          resize: "vertical"
        }
      })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px var(--font-body)",
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 6
        }
      }, "Lista de presen\xE7a \u2014 clique para marcar"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 6
        }
      }, turma.alunos.map(a => {
        const presente = l.presentes.includes(a.matricula);
        return /*#__PURE__*/React.createElement("div", {
          key: a.matricula,
          style: {
            display: "flex",
            alignItems: "center",
            gap: 10
          }
        }, /*#__PURE__*/React.createElement("span", {
          style: {
            font: "400 14px var(--font-body)",
            flex: 1
          }
        }, a.name), /*#__PURE__*/React.createElement("button", {
          onClick: () => toggleAttendance(i, a.matricula),
          style: {
            all: "unset",
            cursor: "pointer",
            padding: "5px 14px",
            font: "600 12px var(--font-body)",
            color: "#fff",
            background: presente ? "var(--blue-600)" : "var(--red-600)",
            minWidth: 90,
            textAlign: "center"
          }
        }, presente ? "Presente" : "Ausente"));
      }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px var(--font-body)",
          color: "#999",
          textTransform: "uppercase",
          marginBottom: 4
        }
      }, "Coment\xE1rio da aula"), /*#__PURE__*/React.createElement("textarea", {
        value: l.comentario,
        onChange: e => updateLessonContent(i, "comentario", e.target.value),
        rows: 2,
        placeholder: "Como foi a aula?",
        style: {
          width: "100%",
          boxSizing: "border-box",
          border: "1px solid #ddd",
          padding: "8px 10px",
          font: "400 14px var(--font-body)",
          outline: "none",
          resize: "vertical"
        }
      })), /*#__PURE__*/React.createElement("div", {
        style: {
          border: "1px dashed #ddd",
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          font: "400 12px var(--font-body)",
          color: "#999",
          textTransform: "uppercase"
        }
      }, "Anexos da aula (PDF ou link)"), l.anexoPdf ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: l.anexoPdf.url,
        target: "_blank",
        rel: "noreferrer",
        style: {
          font: "600 13px var(--font-body)",
          color: "var(--blue-600)",
          textDecoration: "underline"
        }
      }, "\uD83D\uDCC4 ", l.anexoPdf.name), /*#__PURE__*/React.createElement("button", {
        onClick: () => removePdf(i),
        style: {
          all: "unset",
          cursor: "pointer",
          font: "600 12px var(--font-body)",
          color: "#999"
        }
      }, "remover")) : /*#__PURE__*/React.createElement("label", {
        style: {
          all: "unset",
          cursor: "pointer",
          background: "#f2f2f2",
          color: "var(--gray-900)",
          padding: "8px 14px",
          font: "600 12px var(--font-body)",
          width: "fit-content"
        }
      }, "+ Anexar PDF", /*#__PURE__*/React.createElement("input", {
        type: "file",
        accept: "application/pdf",
        onChange: e => attachPdf(i, e.target.files[0]),
        style: {
          display: "none"
        }
      })), l.anexoLink ? /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: l.anexoLink,
        target: "_blank",
        rel: "noreferrer",
        style: {
          font: "600 13px var(--font-body)",
          color: "var(--blue-600)",
          textDecoration: "underline",
          wordBreak: "break-all"
        }
      }, "\uD83D\uDD17 ", l.anexoLink), /*#__PURE__*/React.createElement("button", {
        onClick: () => removeLink(i),
        style: {
          all: "unset",
          cursor: "pointer",
          font: "600 12px var(--font-body)",
          color: "#999"
        }
      }, "remover")) : /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("input", {
        value: l.linkDraft || "",
        onChange: e => updateLessonContent(i, "linkDraft", e.target.value),
        placeholder: "Colar link (YouTube, Google Drive, Meet\u2026)",
        style: {
          flex: 1,
          border: "1px solid #ddd",
          padding: "8px 10px",
          font: "400 13px var(--font-body)",
          outline: "none"
        }
      }), /*#__PURE__*/React.createElement("button", {
        onClick: () => attachLink(i),
        style: {
          all: "unset",
          cursor: "pointer",
          background: "#f2f2f2",
          color: "var(--gray-900)",
          padding: "8px 14px",
          font: "600 12px var(--font-body)"
        }
      }, "Anexar link")))), !isOpen && l.comentario && /*#__PURE__*/React.createElement("div", {
        style: {
          background: "var(--paper-100)",
          padding: "10px 14px",
          font: "400 14px var(--font-body)",
          color: "var(--gray-900)"
        }
      }, l.comentario));
    })), tab === "presenca" && /*#__PURE__*/React.createElement("table", {
      style: {
        width: "100%",
        borderCollapse: "collapse"
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
      style: {
        textAlign: "left",
        borderBottom: "2px solid var(--gray-900)"
      }
    }, /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "10px 8px",
        font: "600 13px var(--font-body)"
      }
    }, "Aluno"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "10px 8px",
        font: "600 13px var(--font-body)"
      }
    }, "Matr\xEDcula"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "10px 8px",
        font: "600 13px var(--font-body)"
      }
    }, "% Frequ\xEAncia"), /*#__PURE__*/React.createElement("th", {
      style: {
        padding: "10px 8px",
        font: "600 13px var(--font-body)"
      }
    }, "Status"))), /*#__PURE__*/React.createElement("tbody", null, turma.alunos.map(a => {
      const freq = frequencia(a);
      const risco = freq < 75;
      return /*#__PURE__*/React.createElement("tr", {
        key: a.matricula,
        style: {
          borderBottom: "1px solid #eee"
        }
      }, /*#__PURE__*/React.createElement("td", {
        style: {
          padding: "10px 8px",
          font: "600 14px var(--font-body)"
        }
      }, a.name), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: "10px 8px",
          font: "400 13px var(--font-body)",
          color: "#888"
        }
      }, a.matricula), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: "10px 8px",
          font: "600 14px var(--font-body)",
          color: risco ? "var(--red-600)" : "var(--gray-900)"
        }
      }, freq, "%"), /*#__PURE__*/React.createElement("td", {
        style: {
          padding: "10px 8px"
        }
      }, risco ? /*#__PURE__*/React.createElement(Pill, {
        tone: "red"
      }, "Risco de evas\xE3o") : /*#__PURE__*/React.createElement(Pill, {
        tone: "blue"
      }, "Em dia")));
    }))), tab === "mural" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 640
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "400 13px var(--font-body)",
        color: "#999"
      }
    }, "Vis\xEDvel apenas para equipe e professores \u2014 nunca aparece para alunos."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("textarea", {
      value: draft,
      onChange: e => setDraft(e.target.value),
      placeholder: "Adicionar observa\xE7\xE3o interna sobre a turma\u2026 use @nome para marcar algu\xE9m",
      rows: 2,
      style: {
        border: "1px solid #ddd",
        padding: "10px 12px",
        font: "400 14px var(--font-body)",
        outline: "none",
        resize: "vertical"
      }
    }), /*#__PURE__*/React.createElement(MentionPicker, {
      staff: STAFF,
      onPick: insertMention
    }), /*#__PURE__*/React.createElement("button", {
      onClick: addNote,
      style: {
        all: "unset",
        cursor: "pointer",
        alignSelf: "flex-start",
        background: "var(--blue-600)",
        color: "#fff",
        padding: "10px 18px",
        font: "600 14px var(--font-body)"
      }
    }, "Publicar")), notes.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderLeft: "3px solid var(--red-600)",
        paddingLeft: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: "600 13px var(--font-body)",
        color: "var(--gray-900)"
      }
    }, m.autor, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: "#999",
        fontWeight: 400
      }
    }, "\xB7 ", m.data)), /*#__PURE__*/React.createElement("div", {
      style: {
        font: "400 15px var(--font-body)",
        color: "var(--gray-900)"
      }
    }, /*#__PURE__*/React.createElement(MentionText, {
      text: m.texto
    })))))));
  }
  window.TurmaDetail = TurmaDetail;
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/TurmaDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/data.js
try { (() => {
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
{
  (() => {
    const MATRICULA_PREFIX = "CS";
    function matricula(year, seq) {
      return `${MATRICULA_PREFIX}-${year}-${String(seq).padStart(4, "0")}`;
    }

    // Pool of plausible Brazilian first+last names for group-class rosters
    // (the report doesn't include individual names for group turmas).
    const NAME_POOL = ["Beatriz Nogueira", "Caio Meireles", "Débora Cavalcanti", "Enzo Malta", "Fernanda Quintão", "Gustavo Peixoto", "Helena Brant", "Igor Salgado", "Júlia Farias", "Kauê Bezerra", "Larissa Moraes", "Miguel Tavares", "Natália Rezende", "Otávio Lacerda", "Paula Siqueira", "Rafael Andrade", "Sabrina Coutinho", "Thiago Vale", "Valentina Prado", "William Sá", "Yasmin Duarte", "Bruno Carvalhal", "Camila Estrela", "Diego Pontes", "Eduarda Nascimento", "Felipe Guedes", "Giovanna Rocha", "Heitor Assis"];
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
        frequencia: 62 + name.length * 7 % 39,
        // status simulado de onboarding comercial — determinístico, não real
        onboarding: (name.length + i) % 4 !== 0,
        primeiraAula: (name.length + i) % 3 !== 0
      }));
    }
    let adminSeq = 8000;
    function nextMatricula() {
      return matricula(2026, adminSeq++);
    }
    const TEACHERS = ["Rebecca", "Raquel", "Gabe", "Pamela", "Ana Luiza", "Duda Torres", "Léo", "Jarl", "Rhayane", "Vitória", "Ingrid", "Esther", "Sofia", "Lauren", "Ana Júlia", "Elias", "Maria Júlia", "Valentina"];
    function slugHandle(name) {
      return "@" + name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]+/g, "");
    }

    // Staff directory for @menções internas — professores + coordenação.
    const STAFF = [...TEACHERS.map(name => ({
      name,
      handle: slugHandle(name),
      papel: "Professor(a)"
    })), {
      name: "Coordenação",
      handle: "@coordenacao",
      papel: "Coordenação"
    }];
    const GROUP_TURMAS = [{
      id: "car",
      nome: "Central African Republic",
      professor: "Duda Torres",
      horario: "Seg-Qua 07:00–08:00",
      inicio: "17/09/2025",
      termino: "17/09/2029",
      estagio: "First Steps",
      matriculados: 4,
      aguardandoVaga: 1,
      maximo: 15,
      ultimaLicao: "jobs and functions"
    }, {
      id: "col",
      nome: "Colombia",
      professor: "Duda Torres",
      horario: "Sáb 09:00–11:20",
      inicio: "09/08/2025",
      termino: "24/10/2028",
      estagio: "First Steps",
      matriculados: 8,
      aguardandoVaga: 0,
      maximo: 15,
      ultimaLicao: "vocab jobs and functions | projeto de semestre"
    }, {
      id: "cub",
      nome: "Cuba",
      professor: "Gabe",
      horario: "Ter-Qui 20:15–21:15",
      inicio: "10/01/2025",
      termino: "",
      estagio: "First Steps",
      matriculados: 8,
      aguardandoVaga: 0,
      maximo: 10,
      ultimaLicao: "fruits of the spirit"
    }, {
      id: "ind",
      nome: "India",
      professor: "Léo",
      horario: "Seg-Qua 19:00–20:00",
      inicio: "04/09/2024",
      termino: "08/09/2026",
      estagio: "First Steps",
      matriculados: 5,
      aguardandoVaga: 0,
      maximo: 10,
      ultimaLicao: "Comparatives"
    }, {
      id: "jor",
      nome: "Jordan",
      professor: "Rhayane",
      horario: "Ter-Qui 20:00–21:00",
      inicio: "27/05/2025",
      termino: "21/05/2026",
      estagio: "First Steps",
      matriculados: 6,
      aguardandoVaga: 0,
      maximo: 12,
      ultimaLicao: "All future forms pt 3 (review and exercises) + devocional"
    }, {
      id: "mal",
      nome: "Maldivas",
      professor: "Ingrid",
      horario: "Sáb 09:00–11:20",
      inicio: "07/02/2026",
      termino: "",
      estagio: "First Steps",
      matriculados: 10,
      aguardandoVaga: 0,
      maximo: 15,
      ultimaLicao: ""
    }, {
      id: "mex",
      nome: "Mexico",
      professor: "Léo",
      horario: "Ter-Qui 07:00–08:00",
      inicio: "10/01/2024",
      termino: "28/05/2026",
      estagio: "First Steps",
      matriculados: 6,
      aguardandoVaga: 0,
      maximo: 20,
      ultimaLicao: "It Takes.."
    }, {
      id: "moz",
      nome: "Mozambique",
      professor: "Ana Luiza",
      horario: "Sáb 09:00–11:20",
      inicio: "20/09/2025",
      termino: "23/05/2026",
      estagio: "First Steps",
      matriculados: 5,
      aguardandoVaga: 1,
      maximo: 12,
      ultimaLicao: "General review + devocional"
    }, {
      id: "nga",
      nome: "Nigeria",
      professor: "Léo",
      horario: "Seg-Qua 20:00–21:00",
      inicio: "09/02/2025",
      termino: "27/05/2026",
      estagio: "First Steps",
      matriculados: 6,
      aguardandoVaga: 0,
      maximo: 13,
      ultimaLicao: "It Takes.."
    }, {
      id: "nko",
      nome: "North Korea",
      professor: "Gabe",
      horario: "Ter-Qui 19:15–20:15",
      inicio: "06/08/2024",
      termino: "21/08/2026",
      estagio: "First Steps",
      matriculados: 5,
      aguardandoVaga: 0,
      maximo: 12,
      ultimaLicao: "LOYAL FRIEND - MUSIC VOCAB"
    }, {
      id: "por",
      nome: "Portugal",
      professor: "Raquel",
      horario: "Seg-Qua 16:00–17:00",
      inicio: "28/10/2024",
      termino: "24/06/2026",
      estagio: "First Steps",
      matriculados: 5,
      aguardandoVaga: 0,
      maximo: 10,
      ultimaLicao: "warm-up + peace video + questions + feedback form"
    }, {
      id: "syr",
      nome: "Syria",
      professor: "Maria Júlia",
      horario: "Seg-Qua 20:00–21:00",
      inicio: "05/08/2024",
      termino: "17/09/2029",
      estagio: "First Steps",
      matriculados: 5,
      aguardandoVaga: 0,
      maximo: 20,
      ultimaLicao: "Pronouns 1 - reinforcing"
    }, {
      id: "vnm",
      nome: "Vietnam",
      professor: "Gabe",
      horario: "Seg-Qua 19:40–20:40",
      inicio: "10/01/2025",
      termino: "",
      estagio: "First Steps",
      matriculados: 13,
      aguardandoVaga: 0,
      maximo: 12,
      ultimaLicao: "The New of the Lord + Prophetic exercise for 2026"
    }, {
      id: "afg",
      nome: "Semi-Private Afghanistan (WED)",
      professor: "Gabe",
      horario: "Qua 08:00–09:00",
      inicio: "15/10/2025",
      termino: "",
      estagio: "First Steps",
      matriculados: 1,
      aguardandoVaga: 0,
      maximo: 15,
      ultimaLicao: ""
    }];
    GROUP_TURMAS.forEach(t => {
      t.vagas = Math.max(t.maximo - t.matriculados, 0);
      t.ocupacao = t.maximo > 0 ? Math.round(t.matriculados / t.maximo * 1000) / 10 : 0;
      t.alunos = buildStudents(t.id, t.matriculados, t.inicio);
    });

    // Individual (1:1) classes — student names ARE real, taken verbatim from the report.
    const INDIVIDUAL_TURMAS = [{
      id: "ind-aline",
      nome: "Aline Alves",
      professor: "Rebecca",
      horario: "Qui 07:00–08:00",
      inicio: "19/03/2026",
      estagio: "First Steps"
    }, {
      id: "ind-anapaula",
      nome: "Ana Paula Santos Paiva",
      professor: "Raquel",
      horario: "Qua 15:00–16:00",
      inicio: "24/06/2026",
      estagio: "First Steps"
    }, {
      id: "ind-anarita",
      nome: "Ana Rita de Araújo",
      professor: "Gabe",
      horario: "Qui 07:30–08:30",
      inicio: "21/05/2026",
      estagio: "First Steps"
    }, {
      id: "ind-ayla",
      nome: "Ayla Barbosa",
      professor: "Pamela",
      horario: "Sex 16:30–17:30",
      inicio: "17/10/2025",
      estagio: "First Steps"
    }, {
      id: "ind-gabriela",
      nome: "Gabriela Porto",
      professor: "Duda Torres",
      horario: "Qui 19:30–20:30",
      inicio: "19/01/2026",
      estagio: "First Steps",
      ultimaLicao: "family vocab and bible reading"
    }, {
      id: "ind-joice",
      nome: "Joice Freitas",
      professor: "Vitória",
      horario: "Seg 13:00–14:00",
      inicio: "01/02/2026",
      estagio: "First Steps",
      ultimaLicao: "For starters - getting to know each other - First prayer in English Matthew 6 + Our Father, Bethel (Worship)"
    }, {
      id: "ind-laira",
      nome: "Laira Maiewski",
      professor: "Lauren",
      horario: "Sáb 17:00–18:00",
      inicio: "07/03/2026",
      estagio: "Mid Journey"
    }, {
      id: "ind-luara",
      nome: "Luara Gaida",
      professor: "Vitória",
      horario: "Ter 15:00–16:00",
      inicio: "24/03/2026",
      estagio: "High Riders"
    }];
    INDIVIDUAL_TURMAS.forEach((t, i) => {
      t.matricula = matricula(yearOf(t.inicio), 900 + i);
      t.onboarding = i % 4 !== 0;
      t.primeiraAula = i % 3 !== 0;
    });
    function findTurma(id) {
      return GROUP_TURMAS.find(t => t.id === id);
    }

    // Flat roster for the student-login demo picker AND the "Alunos" admin tab.
    const ALL_STUDENTS = [...GROUP_TURMAS.flatMap(t => t.alunos.map(a => ({
      ...a,
      turmaId: t.id,
      turmaNome: t.nome
    }))), ...INDIVIDUAL_TURMAS.map(t => ({
      name: t.nome,
      matricula: t.matricula,
      turmaId: t.id,
      turmaNome: t.nome,
      individual: true,
      onboarding: t.onboarding,
      primeiraAula: t.primeiraAula
    }))];
    const MEDIA_ALUNOS_POR_TURMA = 5.41;
    const TOTAL_TURMAS = 46; // per source report, all statuses ("Total de Registros")

    // ---- Lesson log + comments + mural (illustrative — not in the source report) ----
    const LESSON_TOPICS_BY_STAGE = ["Warm-up + apresentações", "Simple present + vocabulário do dia a dia", "Perguntas e respostas curtas", "Devocional + leitura bíblica em inglês", "Vocabulário: trabalho e profissões", "Revisão geral + exercícios"];
    function lessonLogFor(turma) {
      const dates = ["03/06", "10/06", "17/06", "24/06"];
      return dates.map((d, i) => ({
        data: d,
        topico: i === dates.length - 1 && turma.ultimaLicao ? turma.ultimaLicao : LESSON_TOPICS_BY_STAGE[i % LESSON_TOPICS_BY_STAGE.length],
        presentes: turma.alunos.filter(a => (a.name.length + i) % 5 !== 0).map(a => a.matricula),
        comentario: i === dates.length - 1 ? `Turma engajada, seguir para o próximo estágio de ${turma.estagio === "First Steps" ? "gramática" : "conversação"}.` : ""
      }));
    }
    function muralFor(turma) {
      return internalNotesFor(turma);
    }

    // Staff-only observations tab inside a class — CAN reference internal
    // assessments and @mention teammates. Never shown to students.
    function internalNotesFor(turma) {
      return [{
        autor: turma.professor,
        data: "12/06",
        texto: `Turma bem participativa nas últimas semanas — considerar avançar o ritmo do vocabulário. @coordenacao, pode revisar a frequência de alguns alunos?`
      }, {
        autor: "Coordenação",
        data: "20/06",
        texto: `Confirmar renovação de matrícula antes do término em ${turma.termino || "definir"}.`
      }];
    }

    // Public class mural — visible to students too. Announcements/logistics
    // only, never a professor's internal assessment of the class or a student.
    function classMuralFor(turma) {
      return [{
        autor: "Commission School",
        data: "20/06",
        texto: `Próxima atividade da turma: dinâmica de conversação no encontro de ${turma.horario.split(" ")[0]}.`
      }, {
        autor: "Commission School",
        data: "05/06",
        texto: "Lembrete: tragam a Bíblia em inglês para a leitura devocional desta semana."
      }];
    }

    // All turma names (group + individual), for the "add student" form.
    function allTurmaOptions() {
      return [...GROUP_TURMAS.map(t => ({
        id: t.id,
        nome: t.nome,
        group: true
      })), ...INDIVIDUAL_TURMAS.map(t => ({
        id: t.id,
        nome: t.nome,
        group: false
      }))];
    }
    window.SchoolData = {
      MATRICULA_PREFIX,
      matricula,
      nextMatricula,
      TEACHERS,
      STAFF,
      GROUP_TURMAS,
      INDIVIDUAL_TURMAS,
      ALL_STUDENTS,
      allTurmaOptions,
      findTurma,
      MEDIA_ALUNOS_POR_TURMA,
      TOTAL_TURMAS,
      lessonLogFor,
      muralFor,
      internalNotesFor,
      classMuralFor
    };
  })();
}
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/data.js", error: String((e && e.message) || e) }); }

// ui_kits/school-platform/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *   credit       Optional attribution text (e.g. 'Photo by Jane Doe on
 *                Unsplash') shown as a small overlay at the bottom-left of
 *                the filled slot. It belongs to the src image, so it only
 *                shows while src is what's displayed — a user-dropped
 *                image hides it.
 *   credit-href  Optional link for the credit overlay (e.g. the
 *                photographer's profile). http(s) URLs only — anything
 *                else renders the credit as plain text.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' + '.credit[href]:hover{background:rgba(0,0,0,.8);text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      '<a class="credit" part="credit" target="_blank" rel="noopener noreferrer"></a>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._credit = root.querySelector('.credit');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + http(s)-only href keep external strings inert.
      const credit = this.getAttribute('credit');
      const showCredit = !!(url && credit && !this._userUrl);
      if (showCredit) {
        this._credit.textContent = credit;
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') href = u.href;
          } catch {}
        }
        if (href) this._credit.setAttribute('href', href);else this._credit.removeAttribute('href');
      } else {
        this._credit.textContent = '';
        this._credit.removeAttribute('href');
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/school-platform/image-slot.js", error: String((e && e.message) || e) }); }

__ds_ns.GrainBackground = __ds_scope.GrainBackground;

__ds_ns.HighlightMark = __ds_scope.HighlightMark;

__ds_ns.PostFrame = __ds_scope.PostFrame;

__ds_ns.QuoteMark = __ds_scope.QuoteMark;

__ds_ns.StickerElement = __ds_scope.StickerElement;

__ds_ns.InitialsAvatar = __ds_scope.InitialsAvatar;

__ds_ns.OccupancyMeter = __ds_scope.OccupancyMeter;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.CAROUSEL_SLIDES = __ds_scope.CAROUSEL_SLIDES;

__ds_ns.FeedScreen = __ds_scope.FeedScreen;

__ds_ns.CarouselViewer = __ds_scope.CarouselViewer;

__ds_ns.QuotePostScreen = __ds_scope.QuotePostScreen;

})();
