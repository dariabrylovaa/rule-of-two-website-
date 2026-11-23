/**
 * Mobile navigation: toggles the header dropdown below the desktop breakpoint.
 * The visual state lives in SCSS (.site-header--open), this class only keeps
 * the DOM state and ARIA attributes in sync.
 */
const OPEN_CLASS = 'site-header--open';
const DESKTOP_QUERY = '(min-width: 1280px)';

export class Navigation {
  constructor(header) {
    this.header = header;
    this.toggle = header.querySelector('[data-nav-toggle]');
    this.nav = header.querySelector('.site-header__nav');
  }

  get isOpen() {
    return this.header.classList.contains(OPEN_CLASS);
  }

  init() {
    if (!this.toggle || !this.nav) {
      return;
    }

    this.toggle.addEventListener('click', () => {
      this.setOpen(!this.isOpen);
    });

    this.nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        this.setOpen(false);
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && this.isOpen) {
        this.setOpen(false);
        this.toggle.focus();
      }
    });

    window.matchMedia(DESKTOP_QUERY).addEventListener('change', (event) => {
      if (event.matches) {
        this.setOpen(false);
      }
    });
  }

  setOpen(open) {
    this.header.classList.toggle(OPEN_CLASS, open);
    this.toggle.setAttribute('aria-expanded', String(open));
  }
}
