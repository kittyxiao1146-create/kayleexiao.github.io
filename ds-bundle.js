/* @ds-bundle: {"format":3,"namespace":"KayleeXiaoDesignSystem_fb95c0","components":[{"name":"Pills","sourcePath":"components/buttons/Pills.jsx"},{"name":"ChoiceCard","sourcePath":"components/cards/ChoiceCard.jsx"},{"name":"GestureGlow","sourcePath":"components/feedback/GestureGlow.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"Field","sourcePath":"components/site/Field.jsx"},{"name":"SiteButton","sourcePath":"components/site/SiteButton.jsx"},{"name":"ThemeToggle","sourcePath":"components/site/ThemeToggle.jsx"}],"sourceHashes":{"components/buttons/Pills.jsx":"21f804130b05","components/cards/ChoiceCard.jsx":"3da693294bc9","components/feedback/GestureGlow.jsx":"d98ef3dddce1","components/icons/Icon.jsx":"f05c6e72dae2","components/site/Field.jsx":"ad8e557c4180","components/site/SiteButton.jsx":"ba7a606793cf","components/site/ThemeToggle.jsx":"f51595cbc0dc","ui_kits/kaylee-portfolio/Site.jsx":"3e27d0d20888","ui_kits/rock-paper-scissors/Game.jsx":"ee64ce01a136"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KayleeXiaoDesignSystem_fb95c0 = window.KayleeXiaoDesignSystem_fb95c0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Pills.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pills — the Rock Paper Scissors action button.
 * A fully-rounded "pill" with three sizes, three emphasis levels and an
 * optional leading icon or trailing dropdown chevron. Colours come from
 * the design-system tokens (--rps-indigo / --rps-indigo-soft).
 */

const SIZES = {
  sm: {
    radius: 'var(--radius-pill-sm)',
    padV: 8,
    padH: 12,
    font: 12,
    lh: 16,
    track: '0.6px',
    icon: 16,
    gap: 4
  },
  md: {
    radius: 'var(--radius-pill-md)',
    padV: 10,
    padH: 16,
    font: 14,
    lh: 20,
    track: '0.4px',
    icon: 20,
    gap: 6
  },
  lg: {
    radius: 'var(--radius-pill-lg)',
    padV: 12,
    padH: 20,
    font: 16,
    lh: 24,
    track: '0.2px',
    icon: 24,
    gap: 6
  }
};
function fills(state) {
  switch (state) {
    case 'secondary':
      return {
        bg: 'var(--rps-indigo-soft)',
        fg: 'var(--rps-indigo)'
      };
    case 'tertiary':
      return {
        bg: 'transparent',
        fg: 'var(--rps-indigo)'
      };
    default:
      return {
        bg: 'var(--rps-indigo)',
        fg: '#FFFFFF'
      };
  }
}
const Chevron = ({
  s
}) => /*#__PURE__*/React.createElement("svg", {
  width: s,
  height: s,
  viewBox: "0 0 24 24",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4.5 8.5 12 16l7.5-7.5",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}));
function Pills({
  children,
  label,
  size = 'lg',
  state = 'primary',
  icon = 'none',
  // 'none' | 'left' | 'dropdown'
  leadingIcon,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.lg;
  const {
    bg,
    fg
  } = fills(state);
  const text = children ?? label ?? 'Label';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: `${s.padV}px ${s.padH}px`,
      borderRadius: s.radius,
      border: 'none',
      background: bg,
      color: fg,
      fontFamily: 'var(--rps-font)',
      fontWeight: 500,
      fontSize: s.font,
      lineHeight: `${s.lh}px`,
      letterSpacing: s.track,
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transition: 'transform var(--dur-fast) var(--ease-standard), opacity var(--dur-fast) var(--ease-standard)',
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.96)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon === 'left' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("span", null, text), icon === 'dropdown' && /*#__PURE__*/React.createElement(Chevron, {
    s: s.icon
  }));
}
Object.assign(__ds_scope, { Pills });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Pills.jsx", error: String((e && e.message) || e) }); }

// components/cards/ChoiceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ChoiceCard — the Rock Paper Scissors pastel choice card.
 * A rounded rectangle in one of the four pastel tones, holding a hand-drawn
 * illustration (passed as `image`) and a Work Sans label. Used on the
 * Choose and Result screens. Supports a selected ring and a dimmed state.
 */

const TONES = {
  blue: 'var(--rps-pastel-blue)',
  yellow: 'var(--rps-pastel-yellow)',
  green: 'var(--rps-pastel-green)',
  red: 'var(--rps-pastel-red)'
};
function ChoiceCard({
  image,
  label,
  tone = 'blue',
  selected = false,
  dimmed = false,
  width = 240,
  height = 300,
  onClick,
  style,
  ...rest
}) {
  const bg = TONES[tone] || TONES.blue;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: 'relative',
      width,
      height,
      borderRadius: 'var(--radius-card)',
      background: bg,
      boxShadow: selected ? '0 0 0 4px var(--rps-indigo), var(--shadow-card)' : 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-3)',
      cursor: onClick ? 'pointer' : 'default',
      opacity: dimmed ? 0.25 : 1,
      transition: 'opacity var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
      userSelect: 'none',
      overflow: 'hidden',
      ...style
    },
    onMouseDown: e => {
      if (onClick) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: label || '',
    style: {
      width: '70%',
      height: 'auto',
      objectFit: 'contain',
      mixBlendMode: 'multiply'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--rps-font)',
      fontWeight: 400,
      fontSize: 28,
      lineHeight: '36px',
      color: 'var(--rps-ink)'
    }
  }, label));
}
Object.assign(__ds_scope, { ChoiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ChoiceCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/GestureGlow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GestureGlow — the Rock Paper Scissors "tap to pair" pulse.
 * Concentric radial-glow rings (1 / 2 / 3) recreated from the Figma
 * Gesture-Graphic component. `animate` adds a gentle outward pulse.
 */

const GLOW = 'var(--rps-glow)';
function ring(d, opts = {}) {
  const {
    stroke,
    blur
  } = opts;
  return {
    position: 'absolute',
    left: (160 - d) / 2,
    top: (160 - d) / 2,
    width: d,
    height: d,
    borderRadius: '50%',
    opacity: 0.67,
    background: `radial-gradient(${d / 2}px ${d / 2}px at 50% 50%, rgba(10,132,255,0) ${100 - d / 160 * 60}%, rgba(10,132,255,${0.6 - (160 - d) / 400}) 100%)`,
    boxShadow: blur ? `inset 0 0 0 4px ${GLOW}, var(--shadow-glow)` : `inset 0 0 0 ${stroke}px ${GLOW}`
  };
}
function GestureGlow({
  gesture = 'tap',
  size = 160,
  animate = true,
  style,
  ...rest
}) {
  const count = gesture === 'triple' ? 3 : gesture === 'double' ? 2 : 1;
  const scale = size / 160;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: size,
      height: size,
      position: 'relative',
      transform: scale !== 1 ? `scale(${scale})` : undefined,
      transformOrigin: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `
        @keyframes rps-pulse { 0%,100% { transform: scale(1); opacity:.67 } 50% { transform: scale(1.06); opacity:1 } }
      `), count >= 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      ...ring(160, {
        stroke: 1
      }),
      animation: animate ? 'rps-pulse 2.4s var(--ease-standard) infinite' : undefined
    }
  }), count >= 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      ...ring(120, {
        stroke: 3
      }),
      animation: animate ? 'rps-pulse 2.4s var(--ease-standard) .15s infinite' : undefined
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...ring(80, {
        blur: true
      }),
      animation: animate ? 'rps-pulse 2.4s var(--ease-standard) .3s infinite' : undefined
    }
  }));
}
Object.assign(__ds_scope, { GestureGlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/GestureGlow.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — the shared glyph set.
 * Outline icons from the Rock Paper Scissors UI (Iconly-style) plus a few
 * common interface glyphs. All paths use `currentColor`, so set colour via
 * the `color` style prop or a parent.
 */

const PATHS = {
  // RPS / Iconly outline set
  'arrow-down': /*#__PURE__*/React.createElement("path", {
    d: "M5 9l7 7 7-7",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }),
  'arrow-up': /*#__PURE__*/React.createElement("path", {
    d: "M5 15l7-7 7 7",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }),
  image: /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "8.5",
    r: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 16l4-4 3 3 4-5 5 5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })),
  refresh: /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 7v5h-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 17v-5h5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12a7 7 0 0 0-12-4L4 11M5 12a7 7 0 0 0 12 4l3-3"
  })),
  person: /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"
  })),
  // Common interface glyphs (portfolio + game chrome)
  menu: /*#__PURE__*/React.createElement("g", {
    stroke: "currentColor",
    strokeWidth: "2.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "8",
    x2: "19",
    y2: "8"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "13",
    x2: "19",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "18",
    x2: "19",
    y2: "18"
  })),
  close: /*#__PURE__*/React.createElement("path", {
    d: "M6 6l12 12M18 6L6 18",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    fill: "none"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4 10-10",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    fill: "none"
  }),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7.5-4.6-10-9.3C.6 8.4 2.3 4.5 6 4.5c2.1 0 3.3 1.2 4 2.3.7-1.1 1.9-2.3 4-2.3 3.7 0 5.4 3.9 4 7.2C19.5 16.4 12 21 12 21z",
    fill: "currentColor"
  })
};
function Icon({
  name,
  size = 24,
  color,
  strokeWidth,
  style,
  ...rest
}) {
  const glyph = PATHS[name] || PATHS.image;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    role: "img",
    "aria-label": name,
    style: {
      display: 'block',
      color,
      flexShrink: 0,
      ...style
    }
  }, rest), glyph);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/site/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — the portfolio form field (label + input/textarea).
 * Lavender-bordered, soft-white fill, rounded 8px. Set `multiline` for a
 * textarea. Mirrors the contact form on the Kaylee Xiao site.
 */
function Field({
  label,
  required = false,
  multiline = false,
  rows = 6,
  placeholder,
  value,
  onChange,
  style,
  ...rest
}) {
  const control = {
    width: '100%',
    boxSizing: 'border-box',
    padding: '0.7em',
    marginTop: '0.4em',
    fontFamily: 'var(--site-body)',
    fontSize: '1em',
    color: 'var(--site-text)',
    border: '2px solid var(--site-field-border)',
    borderRadius: 'var(--radius-site)',
    background: 'var(--site-field-bg)',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      fontFamily: 'var(--site-body)',
      fontWeight: 900,
      fontSize: '1.05em',
      color: 'var(--site-text)',
      ...style
    }
  }, label, required && ' (required)', multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: control
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    style: control
  }, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/Field.jsx", error: String((e && e.message) || e) }); }

// components/site/SiteButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SiteButton — the Kaylee Xiao portfolio button.
 * Solid purple, rounded 8px, League Spartan. Used for form submit + CTAs.
 * Reads the portfolio theme tokens so it tracks light / dark mode.
 */
function SiteButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    style: {
      appearance: 'none',
      border: 'none',
      padding: '0.8em 1.6em',
      background: 'var(--site-accent)',
      color: '#FFFFFF',
      fontFamily: 'var(--site-body)',
      fontWeight: 900,
      fontSize: '1.05em',
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-site)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard)',
      ...style
    },
    onMouseOver: e => {
      if (!disabled) e.currentTarget.style.background = 'var(--site-accent-press)';
    },
    onMouseOut: e => {
      e.currentTarget.style.background = 'var(--site-accent)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SiteButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/SiteButton.jsx", error: String((e && e.message) || e) }); }

// components/site/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ThemeToggle — the portfolio light/dark switch.
 * The half-filled circle glyph from the Kaylee Xiao site. Click flips the
 * `site-dark` class on <html> (or call your own onToggle).
 */
function ThemeToggle({
  dark,
  onToggle,
  size = 30,
  style,
  ...rest
}) {
  const handle = () => {
    if (onToggle) return onToggle(!dark);
    document.documentElement.classList.toggle('site-dark');
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: handle,
    "aria-label": "Toggle colour mode",
    style: {
      appearance: 'none',
      border: 'none',
      background: 'transparent',
      padding: 6,
      cursor: 'pointer',
      lineHeight: 0,
      transition: 'opacity var(--dur-fast) var(--ease-standard)',
      ...style
    },
    onMouseOver: e => {
      e.currentTarget.style.opacity = '0.5';
    },
    onMouseOut: e => {
      e.currentTarget.style.opacity = '1';
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 100 100",
    "aria-hidden": "true",
    style: {
      fill: 'var(--site-icon)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m50,0C22.39,0,0,22.39,0,50s22.39,50,50,50,50-22.39,50-50S77.61,0,50,0Zm0,94V6c24.26,0,44,19.74,44,44s-19.74,44-44,44Z"
  })));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/site/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/kaylee-portfolio/Site.jsx
try { (() => {
/* Kaylee Xiao — personal portfolio, interactive recreation.
   Uses design-system components: SiteButton, Field, ThemeToggle, Icon. */

const DS = window.KayleeXiaoDesignSystem_fb95c0;
const {
  SiteButton,
  Field,
  ThemeToggle,
  Icon
} = DS;
const {
  useState
} = React;
const IMG = '../../assets/images/';
const NAV = ['Home', 'About', 'Education', 'Contact'];

/* ---------- chrome ---------- */
function Header({
  page,
  setPage,
  open,
  setOpen
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 30,
      background: 'var(--site-cover-bg)',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 22px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setPage('Home'),
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--site-wordmark)',
      fontSize: 26,
      color: 'var(--site-text)'
    }
  }, "Kaylee Xiao"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    className: "kx-burger",
    "aria-label": "Menu",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--site-icon)',
      display: 'none'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 30
  })), /*#__PURE__*/React.createElement("nav", {
    className: "kx-nav",
    "data-open": open,
    style: {
      display: 'flex',
      gap: 22
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    onClick: () => {
      setPage(n);
      setOpen(false);
    },
    style: {
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--site-nav)',
      fontSize: 21,
      color: n === page ? 'var(--site-selected)' : 'var(--site-text)'
    }
  }, n))));
}
function Cover({
  title,
  img
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 460,
      background: 'var(--site-cover-bg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      position: 'absolute',
      zIndex: 2,
      margin: 0,
      fontFamily: 'var(--site-display)',
      fontSize: 96,
      letterSpacing: '.08em',
      color: 'var(--site-text)',
      textAlign: 'center',
      lineHeight: 1
    }
  }, title), /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: title,
    style: {
      position: 'relative',
      zIndex: 3,
      height: '100%',
      width: 'auto',
      objectFit: 'cover'
    }
  }));
}
const HL = ({
  children
}) => /*#__PURE__*/React.createElement("span", {
  style: {
    background: 'var(--site-highlight)',
    fontWeight: 900,
    padding: '0 .15em'
  }
}, children);
function Section({
  img,
  alt,
  alt2,
  children,
  bg
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 40,
      alignItems: 'center',
      maxWidth: 1000,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: alt,
    style: {
      width: '100%',
      maxWidth: 440,
      borderRadius: 4,
      justifySelf: 'center'
    }
  }), /*#__PURE__*/React.createElement("div", null, children)));
}
const H3 = ({
  children
}) => /*#__PURE__*/React.createElement("h3", {
  style: {
    margin: '0 0 .3em',
    fontFamily: 'var(--site-heading)',
    fontSize: 40,
    color: 'var(--site-text)'
  }
}, children);
const H4 = ({
  children
}) => /*#__PURE__*/React.createElement("h4", {
  style: {
    margin: '.6em 0 .1em',
    fontFamily: 'var(--site-body)',
    fontWeight: 900,
    fontSize: 24,
    color: 'var(--site-text)'
  }
}, children);
const P = ({
  children
}) => /*#__PURE__*/React.createElement("p", {
  style: {
    fontFamily: 'var(--site-body)',
    fontSize: 19,
    lineHeight: 1.5,
    color: 'var(--site-text)',
    maxWidth: 520
  }
}, children);

/* ---------- pages ---------- */
function Home() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cover, {
    title: "Kaylee Xiao",
    img: IMG + 'cover-1000.webp'
  }), /*#__PURE__*/React.createElement(Section, {
    img: IMG + 'welcome-1000.webp',
    alt: "Welcome",
    bg: "var(--site-container)"
  }, /*#__PURE__*/React.createElement(H3, null, "Welcome!"), /*#__PURE__*/React.createElement(P, null, "Hi! I'm Kaylee, a student at NYU studying ", /*#__PURE__*/React.createElement(HL, null, "Media and Communication"), ". I'm super passionate about ", /*#__PURE__*/React.createElement(HL, null, "music"), ", ", /*#__PURE__*/React.createElement(HL, null, "film"), ", and ", /*#__PURE__*/React.createElement(HL, null, "television"), "."), /*#__PURE__*/React.createElement(P, null, "This website is a space where I share insights about my education, experiences, and life journey.")));
}
function About() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cover, {
    title: "About",
    img: IMG + 'cover3-1000.webp'
  }), /*#__PURE__*/React.createElement(Section, {
    img: IMG + 'about-1000.webp',
    alt: "Me on horse",
    bg: "var(--site-container)"
  }, /*#__PURE__*/React.createElement(H3, null, "Who am I?"), /*#__PURE__*/React.createElement(P, null, "I'm Kaylee. In Chinese, it's ", /*#__PURE__*/React.createElement(HL, null, "Yingrui Xiao"), "."), /*#__PURE__*/React.createElement(P, null, "I'm a ", /*#__PURE__*/React.createElement(HL, null, "student"), ", ", /*#__PURE__*/React.createElement(HL, null, "vlogger"), ", ", /*#__PURE__*/React.createElement(HL, null, "photographer"), ", and ", /*#__PURE__*/React.createElement(HL, null, "amateur music producer"), ". I love to create \u2014 anything related to creative work!")));
}
function Education() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cover, {
    title: "Education",
    img: IMG + 'cover-1000.webp'
  }), /*#__PURE__*/React.createElement(Section, {
    img: IMG + 'college-1000.webp',
    alt: "College",
    bg: "var(--site-container)"
  }, /*#__PURE__*/React.createElement(H3, null, "College"), /*#__PURE__*/React.createElement(H4, null, "2024 \u2013 2028"), /*#__PURE__*/React.createElement(P, null, "I'm a student at ", /*#__PURE__*/React.createElement(HL, null, "NYU Steinhardt"), ", majoring in Media, Culture, and Communication and minoring in the Business of Entertainment, Media, and Technology.")), /*#__PURE__*/React.createElement(Section, {
    img: IMG + 'highschool-1000.webp',
    alt: "High school",
    bg: "var(--site-container2)"
  }, /*#__PURE__*/React.createElement(H3, null, "High School"), /*#__PURE__*/React.createElement(H4, null, "2021 \u2013 2024"), /*#__PURE__*/React.createElement(P, null, "I completed my diploma at ", /*#__PURE__*/React.createElement(HL, null, "Vanke Meisha Academy"), " in Shenzhen, China \u2014 in the Student Council (\"Prefect\") and the Choir.")));
}
function Contact() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Cover, {
    title: "Contact",
    img: IMG + 'contact-1000.webp'
  }), /*#__PURE__*/React.createElement(Section, {
    img: IMG + 'contact-1000.webp',
    alt: "Contact",
    bg: "var(--site-container)"
  }, /*#__PURE__*/React.createElement(H3, null, "Contact Information"), /*#__PURE__*/React.createElement(H4, null, "Phone"), /*#__PURE__*/React.createElement(P, null, "+1 646-345-7392"), /*#__PURE__*/React.createElement(H4, null, "Email"), /*#__PURE__*/React.createElement(P, null, "yx3544@nyu.edu")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--site-container2)',
      padding: '56px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      background: 'var(--site-form-bg)',
      padding: 24,
      borderRadius: 'var(--radius-site-lg)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(H3, null, "Get in Touch"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First Name",
    required: true,
    placeholder: "Kaylee",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Last Name",
    required: true,
    placeholder: "Xiao",
    style: {
      flex: 1
    }
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email Address",
    type: "email",
    required: true,
    placeholder: "you@email.com"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    multiline: true,
    rows: 5,
    required: true,
    placeholder: "Enter your message here."
  }), /*#__PURE__*/React.createElement(SiteButton, {
    type: "button",
    onClick: () => alert('Thanks! (demo)')
  }, "Send"))));
}
const PAGES = {
  Home,
  About,
  Education,
  Contact
};
function App() {
  const [page, setPage] = useState('Home');
  const [open, setOpen] = useState(false);
  const Page = PAGES[page];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    page: page,
    setPage: setPage,
    open: open,
    setOpen: setOpen
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Page, null)), /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--site-footer)',
      padding: '34px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/icon.png",
    alt: "Kaylee Xiao",
    style: {
      height: 90,
      width: 'auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 18,
      bottom: 18,
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    size: 30
  })));
}
window.KayleeSite = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/kaylee-portfolio/Site.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rock-paper-scissors/Game.jsx
try { (() => {
/* Rock Paper Scissors — interactive game flow.
   Uses design-system components: Pills, ChoiceCard, GestureGlow, Icon.
   Reads them from window.KayleeXiaoDesignSystem_fb95c0 at mount. */

const DS = window.KayleeXiaoDesignSystem_fb95c0;
const {
  Pills,
  ChoiceCard,
  GestureGlow,
  Icon
} = DS;
const {
  useState
} = React;
const A = '../../assets/illustrations/';
const MOVES = [{
  key: 'rock',
  label: 'Rock',
  tone: 'blue',
  img: A + 'rps-rock.png'
}, {
  key: 'paper',
  label: 'Paper',
  tone: 'green',
  img: A + 'rps-paper.png'
}, {
  key: 'scissors',
  label: 'Scissor',
  tone: 'red',
  img: A + 'rps-scissors.png'
}];
const BEATS = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};
function judge(me, them) {
  if (me === them) return 'tie';
  return BEATS[me] === them ? 'win' : 'lose';
}

/* ---- scattered hand-drawn background pattern ---- */
function SketchBg() {
  const items = [{
    img: 'rps-paper.png',
    top: -10,
    left: -8,
    w: 200,
    rot: -8
  }, {
    img: 'rps-scissors.png',
    top: 4,
    left: 58,
    w: 210,
    rot: 14
  }, {
    img: 'rps-rock.png',
    top: 40,
    left: -12,
    w: 200,
    rot: -6
  }, {
    img: 'rps-paper.png',
    top: 62,
    left: 55,
    w: 215,
    rot: 10
  }, {
    img: 'rps-scissors.png',
    top: 78,
    left: -6,
    w: 200,
    rot: 18
  }, {
    img: 'rps-rock.png',
    top: 82,
    left: 60,
    w: 190,
    rot: -10
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("img", {
    key: i,
    src: A + it.img,
    alt: "",
    style: {
      position: 'absolute',
      top: it.top + '%',
      left: it.left + '%',
      width: it.w,
      height: 'auto',
      opacity: 0.5,
      mixBlendMode: 'multiply',
      transform: `rotate(${it.rot}deg)`
    }
  })));
}
const Prompt = ({
  children,
  top = 148,
  color = 'var(--rps-ink)',
  size = 24
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    position: 'absolute',
    top,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontFamily: 'var(--rps-font)',
    fontSize: size,
    lineHeight: 1.35,
    color,
    padding: '0 40px'
  }
}, children);

/* ---- Screens ---- */
function Intro({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--rps-canvas)'
    }
  }, /*#__PURE__*/React.createElement(SketchBg, null), /*#__PURE__*/React.createElement(Prompt, {
    top: 150,
    size: 40
  }, "Rock", /*#__PURE__*/React.createElement("br", null), "Paper", /*#__PURE__*/React.createElement("br", null), "Scissors!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 470,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pills, {
    size: "lg",
    state: "primary",
    style: {
      minWidth: 150,
      fontSize: 18
    },
    onClick: () => go('pair')
  }, "PLAY")));
}
function Pairing({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--rps-surface)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 36,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(GestureGlow, {
    gesture: "double",
    size: 150
  })), /*#__PURE__*/React.createElement(Prompt, {
    top: 200
  }, "Tap the top of your iPhone near another iPhone to ", /*#__PURE__*/React.createElement("b", null, "PAIR")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 360,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Pills, {
    size: "md",
    state: "secondary",
    onClick: () => go('choose')
  }, "Simulate pair \u2192")));
}
function Choose({
  go,
  setMe
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--rps-surface)'
    }
  }, /*#__PURE__*/React.createElement(Prompt, {
    top: 120
  }, "Make your decision!"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 180,
      bottom: 28,
      left: 28,
      right: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, MOVES.map(m => /*#__PURE__*/React.createElement(ChoiceCard, {
    key: m.key,
    tone: m.tone,
    image: m.img,
    label: m.label,
    width: "100%",
    height: "100%",
    onClick: () => {
      setMe(m.key);
      go('reveal');
    }
  }))));
}
function Reveal({
  go,
  me,
  them,
  setThem
}) {
  // pick opponent move once
  React.useEffect(() => {
    const opp = MOVES[Math.floor(Math.random() * 3)].key;
    setThem(opp);
    const t = setTimeout(() => go('result'), 1100);
    return () => clearTimeout(t);
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--rps-canvas)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(GestureGlow, {
    gesture: "triple",
    size: 170
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--rps-font)',
      fontSize: 24,
      color: 'var(--rps-ink-muted)'
    }
  }, "Revealing\u2026"));
}
const RESULT_COPY = {
  win: {
    word: 'WIN',
    color: 'var(--rps-accent-green)',
    tone: 'green'
  },
  lose: {
    word: 'LOSE',
    color: 'var(--rps-accent-red)',
    tone: 'red'
  },
  tie: {
    word: 'TIE',
    color: 'var(--rps-accent-yellow)',
    tone: 'yellow'
  }
};
function Result({
  go,
  me,
  them
}) {
  const outcome = judge(me, them);
  const c = RESULT_COPY[outcome];
  const myMove = MOVES.find(m => m.key === me);
  const theirMove = MOVES.find(m => m.key === them);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--rps-surface)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 70,
      fontFamily: 'var(--rps-font)',
      fontSize: 16,
      letterSpacing: '.16px',
      color: c.color,
      fontWeight: 600,
      textTransform: 'uppercase'
    }
  }, "Result\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--rps-font)',
      fontSize: 64,
      fontWeight: 700,
      lineHeight: 1.1,
      color: c.color
    }
  }, c.word), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(ChoiceCard, {
    tone: myMove.tone,
    image: myMove.img,
    label: "You",
    width: 150,
    height: 200,
    selected: outcome === 'win'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--rps-font)',
      fontSize: 22,
      color: 'var(--rps-ink-muted)'
    }
  }, "vs"), /*#__PURE__*/React.createElement(ChoiceCard, {
    tone: theirMove.tone,
    image: theirMove.img,
    label: "Them",
    width: 150,
    height: 200,
    selected: outcome === 'lose'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Pills, {
    size: "lg",
    state: "primary",
    icon: "left",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "refresh",
      size: 24
    }),
    onClick: () => go('choose')
  }, "Again"), /*#__PURE__*/React.createElement(Pills, {
    size: "lg",
    state: "tertiary",
    onClick: () => go('intro')
  }, "Quit")));
}
function App() {
  const [screen, setScreen] = useState('intro');
  const [me, setMe] = useState('rock');
  const [them, setThem] = useState('scissors');
  const go = s => setScreen(s);
  return /*#__PURE__*/React.createElement(React.Fragment, null, screen === 'intro' && /*#__PURE__*/React.createElement(Intro, {
    go: go
  }), screen === 'pair' && /*#__PURE__*/React.createElement(Pairing, {
    go: go
  }), screen === 'choose' && /*#__PURE__*/React.createElement(Choose, {
    go: go,
    setMe: setMe
  }), screen === 'reveal' && /*#__PURE__*/React.createElement(Reveal, {
    go: go,
    me: me,
    them: them,
    setThem: setThem
  }), screen === 'result' && /*#__PURE__*/React.createElement(Result, {
    go: go,
    me: me,
    them: them
  }));
}
window.RPSGame = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rock-paper-scissors/Game.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Pills = __ds_scope.Pills;

__ds_ns.ChoiceCard = __ds_scope.ChoiceCard;

__ds_ns.GestureGlow = __ds_scope.GestureGlow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.SiteButton = __ds_scope.SiteButton;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();
