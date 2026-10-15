import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { business } from '../../data/business';
import { mainNav, serviceNav } from '../../data/navigation';
import { Brand } from '../ui/Brand';
import { ButtonLink } from '../ui/ButtonLink';
import { Icon } from '../ui/Icon';

function DesktopServicesMenu() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const active = pathname.startsWith('/services');

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div
      className="nav-dropdown"
      ref={ref}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`main-nav__link${active ? ' is-active' : ''}`}
        aria-expanded={open}
        aria-controls={id}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
      >
        Services
        <Icon name="chevronDown" size={12} />
      </button>
      {open && (
        <div className="nav-dropdown__panel" id={id}>
          {serviceNav.map((s) => (
            <Link key={s.to} to={s.to}>
              {s.label}
              {s.description && <small>{s.description}</small>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a,button')?.focus();
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          className="mobile-nav"
          ref={panelRef}
          initial={reduce ? false : { opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: reduce ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav className="mobile-nav__inner" aria-label="Mobile">
            <button
              type="button"
              className="mobile-nav__link"
              style={{ background: 'none', border: 0, borderBottom: '1px solid var(--bg-muted)', width: '100%', cursor: 'pointer' }}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services"
              onClick={() => setServicesOpen((s) => !s)}
            >
              Services
              <Icon name="chevronDown" size={18} className={servicesOpen ? 'rot' : ''} />
            </button>
            {servicesOpen && (
              <div className="mobile-nav__sub" id="mobile-services">
                {serviceNav.map((s) => (
                  <NavLink key={s.to} to={s.to} end>
                    {s.label}
                  </NavLink>
                ))}
              </div>
            )}
            {mainNav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `mobile-nav__link${isActive ? ' is-active' : ''}`}>
                {n.label}
              </NavLink>
            ))}
            <div className="mobile-nav__cta">
              <ButtonLink to="/contact" block>
                Request Service
              </ButtonLink>
              <ButtonLink to={business.phoneHref} variant="secondary" icon="phone" block>
                Call {business.phone}
              </ButtonLink>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="wrap">
          <p className="utility-bar__notice">
            <span className="utility-bar__dot" aria-hidden="true" />
            <span>
              {business.utilityNotice}
              <span className="utility-bar__region"> • {business.utilityRegion}</span>
            </span>
          </p>
          <div className="utility-bar__right">
            <span className="utility-bar__hours">{business.utilityHours}</span>
            <a className="utility-bar__call" href={business.phoneHref}>
              <small>CALL</small> {business.phone}
            </a>
          </div>
        </div>
      </div>
      <div className="main-bar">
        <div className="wrap">
          <Brand />
          <nav className="main-nav" aria-label="Primary">
            <DesktopServicesMenu />
            {mainNav.map((n) => (
              <NavLink key={n.to} to={n.to} className={({ isActive }) => `main-nav__link${isActive ? ' is-active' : ''}`}>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-actions">
            <div className="dispatch">
              <small>Direct dispatch</small>
              <a href={business.phoneHref}>{business.phone}</a>
            </div>
            <ButtonLink to="/contact">Request Service</ButtonLink>
            <Link to="/contact" className="icon-circle" aria-label="Contact and booking">
              <Icon name="user" size={13} />
            </Link>
            <button
              type="button"
              className="menu-toggle"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
        <MobileNav open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}
