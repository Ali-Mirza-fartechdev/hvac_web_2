import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Icon } from '../ui/Icon';

export interface FaqItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FaqItem[];
  /** Index opened on first render; pass -1 to start collapsed */
  defaultOpen?: number;
}

/**
 * Accessible disclosure list: each question is a real <button> with
 * aria-expanded / aria-controls, and the answer region is labelled by it.
 */
export function FAQAccordion({ items, defaultOpen = 0 }: FAQAccordionProps) {
  const base = useId();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div className="faq">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-q${i}`;
        const panelId = `${base}-a${i}`;
        return (
          <div className="faq__item" data-open={isOpen} key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                type="button"
                id={btnId}
                className="faq__q"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <Icon name="chevronDown" size={18} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  key="panel"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p className="faq__a">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
