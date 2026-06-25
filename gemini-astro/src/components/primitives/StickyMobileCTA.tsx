/**
 * Gemini AMPM — Sticky mobile CTA primitive.
 *
 * Fixed-bottom 56px bar shown on mobile viewports only. Two CTAs sit side-by-
 * side: a `tel:` link to the DDI on the left and an in-page anchor to the
 * quote-form section on the right. The bar is the always-available conversion
 * surface on long service pages where the hero CTA has scrolled away.
 *
 * Visibility rules (all evaluated client-side via vanilla listeners, no deps):
 *  1. Only mounts/renders below 768px — desktop never sees it (CSS guard).
 *  2. Hidden until the user has scrolled past the hero (~70vh) so it doesn't
 *     compete with the in-hero CTAs on first paint.
 *  3. Hidden while a form field has focus (scroll listener watches focusin /
 *     focusout) so it can't sit on top of the on-screen keyboard.
 *  4. Honours prefers-reduced-motion by skipping the slide-up transition.
 *
 * Brand tokens come straight from src/styles/tokens.css — accent amber on
 * deep-navy elevated surface, hairline top border, Big Shoulders Display
 * label, Archivo body. The CTAs intentionally mirror Button.astro's primary
 * + secondary variants but as plain inline styles so the island ships
 * without dragging the whole Button system into the React bundle.
 *
 * Hydrate with `client:idle` on layout — it's below-fold and never blocks
 * LCP, so an idle hydration is fine.
 */
import { useEffect, useState } from 'react';

interface Props {
  /** DDI to dial. Pass the human-formatted string; we strip whitespace for tel:. */
  phone?: string;
  /** Hash or path the "Get a quote" CTA should jump to. */
  quoteHref?: string;
  /** Scroll threshold in px before the bar reveals. Default ~one hero height. */
  revealAt?: number;
}

const FORM_TAGS = new Set(['INPUT', 'TEXTAREA', 'SELECT']);

const isFormField = (el: EventTarget | null): boolean => {
  if (!el || !(el instanceof HTMLElement)) return false;
  if (FORM_TAGS.has(el.tagName)) return true;
  // Catches contenteditable rich-text fields too.
  return el.isContentEditable;
};

export default function StickyMobileCTA({
  phone = '0330 043 0080',
  quoteHref = '#quote',
  revealAt,
}: Props) {
  const [visible, setVisible] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    // Compute threshold lazily so SSR doesn't touch window.
    const threshold =
      typeof revealAt === 'number'
        ? revealAt
        : Math.round(window.innerHeight * 0.7);

    const onScroll = () => {
      setVisible(window.scrollY > threshold);
    };

    const onFocusIn = (e: FocusEvent) => {
      if (isFormField(e.target)) setTyping(true);
    };

    const onFocusOut = (e: FocusEvent) => {
      if (isFormField(e.target)) setTyping(false);
    };

    // Initial state in case the page lands deep-scrolled (back-button restore).
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('focusout', onFocusOut);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('focusout', onFocusOut);
    };
  }, [revealAt]);

  const telHref = `tel:${phone.replace(/\s+/g, '')}`;
  const shown = visible && !typing;

  return (
    <div
      className="g-sticky-cta"
      data-shown={shown ? 'true' : 'false'}
      aria-hidden={shown ? 'false' : 'true'}
    >
      <a
        className="g-sticky-cta__btn g-sticky-cta__btn--tel"
        href={telHref}
        aria-label={`Call Gemini AMPM on ${phone}`}
        tabIndex={shown ? 0 : -1}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
        </svg>
        <span>Call</span>
      </a>
      <a
        className="g-sticky-cta__btn g-sticky-cta__btn--quote"
        href={quoteHref}
        tabIndex={shown ? 0 : -1}
      >
        Get a quote
      </a>

      <style>{`
        .g-sticky-cta {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          height: 56px;
          z-index: 60;

          display: none; /* off by default — only mobile breakpoint flips it on */
          align-items: stretch;
          gap: var(--s-2, 8px);
          padding: var(--s-2, 8px);

          background: var(--bg-elev, #131831);
          border-top: 1px solid var(--line-strong, rgba(255,255,255,0.16));
          box-shadow: 0 -6px 24px rgba(0,0,0,0.45);

          /* iOS safe-area: nudge above the home-indicator. */
          padding-bottom: calc(var(--s-2, 8px) + env(safe-area-inset-bottom, 0px));
          height: calc(56px + env(safe-area-inset-bottom, 0px));

          transform: translateY(100%);
          transition: transform 0.2s var(--ease, cubic-bezier(0.2, 0.7, 0.2, 1));
          will-change: transform;
        }

        @media (max-width: 767px) {
          .g-sticky-cta { display: flex; }
        }

        .g-sticky-cta[data-shown='true'] {
          transform: translateY(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .g-sticky-cta { transition: none; }
        }

        .g-sticky-cta__btn {
          flex: 1 1 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--s-2, 8px);

          border-radius: var(--radius, 12px);
          border: 1px solid transparent;

          font-family: var(--f-display, "Big Shoulders Display", "Archivo", system-ui, sans-serif);
          font-weight: 700;
          font-size: 1rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          text-decoration: none;
          line-height: 1;

          transition:
            background 0.15s var(--ease, cubic-bezier(0.2, 0.7, 0.2, 1)),
            color 0.15s var(--ease, cubic-bezier(0.2, 0.7, 0.2, 1)),
            border-color 0.15s var(--ease, cubic-bezier(0.2, 0.7, 0.2, 1));
        }

        .g-sticky-cta__btn:focus-visible {
          outline: 2px solid var(--accent, #E8742C);
          outline-offset: 2px;
        }

        /* Tel — secondary/outline variant so the amber stays focused on the
           quote conversion. Phone digits sit on the baseline cleanly. */
        .g-sticky-cta__btn--tel {
          background: transparent;
          color: var(--text, #f4ead8);
          border-color: var(--line-strong, rgba(255,255,255,0.16));
          text-transform: none;
          letter-spacing: 0.02em;
          font-variant-numeric: tabular-nums;
        }
        .g-sticky-cta__btn--tel:hover,
        .g-sticky-cta__btn--tel:active {
          color: var(--accent, #E8742C);
          border-color: var(--accent, #E8742C);
        }

        /* Quote — primary amber. */
        .g-sticky-cta__btn--quote {
          background: var(--accent, #E8742C);
          color: #1a0e00;
          border-color: var(--accent, #E8742C);
        }
        .g-sticky-cta__btn--quote:hover,
        .g-sticky-cta__btn--quote:active {
          background: #f08233;
        }
      `}</style>
    </div>
  );
}
