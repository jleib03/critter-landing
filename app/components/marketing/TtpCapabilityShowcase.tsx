'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react';
import { TogoIcon } from '@/app/components/icons/TogoIcon';

const capabilities = [
  { label: 'Snapshot', eyebrow: 'Your business snapshot', title: 'See the story behind the visits.', description: 'Spot repeat clients, the services they choose, and recorded revenue. Find a useful place to start.' },
  { label: 'Journey', eyebrow: 'Your customer journey', title: 'Know who needs what next.', description: 'See how clients are grouped and which rules move them. Review changes before applying them.' },
  { label: 'Lead capture', eyebrow: 'From inquiry to first visit', title: 'Give new clients a clear next step.', description: 'Collect the right details with a lead form, then make it easy to book a meet & greet.' },
  { label: 'Programs', eyebrow: 'Thoughtful follow-ups', title: 'Keep good relationships warm.', description: 'Start with a birthday or visit-milestone draft. Review the audience, copy, and timing before turning it on.' },
  { label: 'Task lists', eyebrow: 'A personal touch', title: 'Turn a check-in into a plan.', description: 'Use a task template to guide personal follow-up. Know what to review and what to do next.' },
  { label: 'Togo', eyebrow: 'Your guide, Togo', title: 'Talk through your next move.', description: 'Ask about your data, understand a journey rule, or get help with a draft. You decide what happens next.' },
] as const;

/** Product illustrations only: no customer data, inputs, draft creation or activation. */
function CapabilityIllustration({ index }: { index: number }) {
  const card = 'rounded-xl border border-critter-cream bg-white p-4';
  if (index === 0) return <div aria-hidden="true" className="flex h-full flex-col justify-center gap-3 sm:gap-5">
    <div className="flex items-center gap-3 sm:gap-5">
      <div className="h-16 w-16 shrink-0 rounded-full border-[10px] border-critter-orange/70 border-r-critter-blue border-t-critter-maroon sm:h-24 sm:w-24 sm:border-[13px]" />
      <div className="space-y-2 text-xs leading-4 text-critter-maroon sm:space-y-3 sm:text-sm sm:leading-5"><p>Who comes back</p><p>What clients book</p><p>Where to follow up</p></div>
    </div>
    <div className="grid grid-cols-3 gap-2 text-center text-xs font-subtitle text-critter-maroon">
      {['Clients', 'Services', 'Revenue'].map(label => <div key={label} className="rounded-lg bg-white px-2 py-3">{label}</div>)}
    </div>
    <div className="rounded-xl bg-critter-orange/10 px-4 py-3 text-xs text-critter-maroon sm:text-sm">One finding. A clearer next step.</div>
  </div>;
  if (index === 1) return <div aria-hidden="true" className="flex h-full flex-col justify-center gap-5">
    <div className="grid grid-cols-3 gap-2 text-center text-xs font-subtitle">
      {['Lead', 'Active', 'At Risk'].map((label, i) => <div key={label} className={`rounded-xl border-t-4 bg-white px-2 py-4 ${i === 0 ? 'border-critter-blue' : i === 1 ? 'border-critter-green' : 'border-critter-orange'}`}>
        <p>{label}</p><div className="mt-4 h-2 rounded bg-critter-cream" /><div className="mt-2 h-2 w-2/3 rounded bg-critter-cream" />
      </div>)}
    </div>
    <div className={card}><p className="text-xs text-critter-gray">Example rule</p><p className="mt-2 text-sm font-subtitle">Most-used service <span className="text-critter-orange">→</span> Service phase</p><p className="mt-2 text-xs text-critter-gray">See the reason behind each group.</p></div>
  </div>;
  if (index === 2) return <div aria-hidden="true" className="flex h-full items-center">
    <div className={`w-full ${card}`}><p className="font-subtitle text-sm">Let’s meet you and your pet</p>
      <div className="mt-3 rounded-lg bg-critter-beige px-3 py-2 text-xs text-critter-gray">Your name + pet</div>
      <p className="mb-2 mt-3 text-xs text-critter-gray">What care are you looking for?</p>
      <div className="flex flex-wrap gap-2 text-xs"><span className="rounded-full bg-critter-orange/10 px-2 py-2">Walking</span><span className="rounded-full bg-critter-beige px-2 py-2">Cat care</span></div>
      <div className="mt-3 flex items-center justify-between rounded-lg bg-critter-maroon px-3 py-2 text-xs text-white"><span>Next: meet & greet</span><ArrowRight size={14} /></div>
    </div>
  </div>;
  if (index === 3) return <div aria-hidden="true" className="flex h-full flex-col justify-center gap-3">
    {['Pet birthday', 'Visit milestone'].map((label, i) => <div key={label} className={card}>
      <div className="flex items-center justify-between gap-3"><span className="font-subtitle text-sm">{label}</span><span className="rounded-full bg-critter-orange/10 px-2 py-1 text-[11px] text-critter-maroon">Draft</span></div>
      <p className="mt-3 text-xs text-critter-gray">{i === 0 ? 'Make a familiar moment feel personal.' : 'Celebrate the visits that add up.'}</p>
    </div>)}
    <p className="mt-1 text-center text-xs text-critter-gray">Your copy. Your timing. Your go-ahead.</p>
  </div>;
  if (index === 4) return <div aria-hidden="true" className="flex h-full items-center">
    <div className={`w-full ${card}`}><div className="flex items-center justify-between gap-2"><p className="font-subtitle text-sm">Client check-in</p><span className="text-[11px] text-critter-gray">Task template</span></div>
      <div className="mt-4 space-y-3">{['Review visits', 'Plan a follow-up', 'Set a check-in date'].map(label => <div key={label} className="flex items-center gap-3 text-sm"><span className="h-4 w-4 shrink-0 rounded border border-critter-orange/60" />{label}</div>)}</div>
    </div>
  </div>;
  return <div aria-hidden="true" className="flex h-full flex-col justify-center gap-3">
    <div className="ml-4 rounded-2xl rounded-br-sm bg-white p-3 text-sm text-critter-maroon">Why are they in this phase?</div>
    <div className="rounded-2xl rounded-bl-sm bg-critter-maroon p-3 text-white">
      <div className="mb-2 flex items-center gap-2 text-sm font-subtitle"><TogoIcon size={21} />Togo</div>
      <p className="text-sm leading-5 text-white/85">Check their most-used service and the rule behind this phase.</p>
    </div>
  </div>;
}

export default function TtpCapabilityShowcase() {
  const id = useId();
  const container = useRef<HTMLElement>(null);
  const rotationPointerFocus = useRef(false);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPlaying(!motion.matches);
    const onMotionChange = () => { if (motion.matches) setPlaying(false); };
    const onVisibilityChange = () => setPageVisible(document.visibilityState === 'visible');
    onVisibilityChange();
    motion.addEventListener('change', onMotionChange);
    document.addEventListener('visibilitychange', onVisibilityChange);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    if (container.current) observer.observe(container.current);
    return () => { motion.removeEventListener('change', onMotionChange); document.removeEventListener('visibilitychange', onVisibilityChange); observer.disconnect(); };
  }, []);

  const rotating = playing && !hovered && visible && pageVisible;
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => setIndex(current => (current + 1) % capabilities.length), 7000);
    return () => window.clearInterval(timer);
  }, [rotating]);

  const show = (next: number) => { setPlaying(false); setIndex((next + capabilities.length) % capabilities.length); };
  const current = capabilities[index];
  const control = 'inline-flex h-10 w-9 shrink-0 items-center justify-center rounded-full border border-critter-maroon/15 bg-white text-critter-maroon transition-colors hover:bg-critter-beige focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-critter-orange sm:w-10';

  return <section ref={container} aria-label="Explore Critter capabilities" aria-roledescription="carousel"
    onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }}
    onPointerLeave={() => setHovered(false)}
    onFocusCapture={event => {
      // Keyboard entry always stops rotation. Preserve a pointer click's original
      // Play/Pause action instead of changing its meaning between focus and click.
      if (!(rotationPointerFocus.current && (event.target as HTMLElement).closest('[data-rotation-control]'))) setPlaying(false);
    }}
    className="relative min-w-0 rounded-[28px] border border-critter-orange/20 bg-[#FBEBDD] p-4 sm:p-6">
    <div className="mb-4 flex items-center justify-between gap-3">
      <p className="font-subtitle text-xs uppercase tracking-widest text-critter-maroon">A look inside Critter</p>
      <button type="button" data-rotation-control aria-label={playing ? 'Pause highlights' : 'Play highlights'}
        onPointerDown={() => { rotationPointerFocus.current = true; }}
        onPointerCancel={() => { rotationPointerFocus.current = false; }}
        onBlur={() => { rotationPointerFocus.current = false; }}
        onClick={() => { rotationPointerFocus.current = false; setPlaying(value => !value); }} className={control}>
        {playing ? <Pause size={15} aria-hidden="true" /> : <Play size={15} aria-hidden="true" />}
      </button>
    </div>
    <div id={id} aria-live={playing ? 'off' : 'polite'} aria-atomic="true">
      <article role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${capabilities.length}: ${current.label}`} data-capability={current.label}
        className="grid grid-rows-[auto_300px_132px] gap-4 rounded-2xl bg-white p-5 shadow-sm min-[360px]:grid-rows-[auto_260px_132px] sm:grid-rows-[auto_260px_88px] sm:p-6">
        <div>
          <div className="flex h-8 items-center gap-2 text-critter-orange">{index === 5 ? <TogoIcon size={22} className="shrink-0" /> : <Image src="/images/critter-favicon-circle.png" alt="" width={24} height={24} className="shrink-0" />}<p className="font-subtitle text-[11px] uppercase tracking-widest">{current.eyebrow}</p></div>
          <h2 className="mt-4 h-[108px] font-title text-[28px] leading-[1.15] sm:h-[80px] sm:text-[32px]">{current.title}</h2>
        </div>
        <div className="rounded-xl bg-critter-beige p-3"><CapabilityIllustration index={index} /></div>
        <p className="font-body text-sm leading-relaxed text-critter-gray">{current.description}</p>
      </article>
    </div>
    <div className="mt-4 flex items-center justify-between gap-2">
      <button type="button" aria-label="Previous capability" aria-controls={id} onClick={() => show(index - 1)} className={control}><ArrowLeft size={16} aria-hidden="true" /></button>
      <div className="flex items-center justify-center sm:gap-1">
        {capabilities.map((item, position) => <button key={item.label} type="button" aria-label={`Show ${item.label}`} aria-current={position === index ? 'true' : undefined} aria-controls={id} onClick={() => show(position)}
          className="flex h-9 w-6 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-critter-orange sm:w-7"><span aria-hidden="true" className={`h-2 rounded-full transition-all motion-reduce:transition-none ${position === index ? 'w-5 bg-critter-maroon' : 'w-2 bg-critter-maroon/25'}`} /></button>)}
      </div>
      <button type="button" aria-label="Next capability" aria-controls={id} onClick={() => show(index + 1)} className={control}><ArrowRight size={16} aria-hidden="true" /></button>
    </div>
    <p className="mt-3 text-center font-body text-xs text-critter-gray">Illustrative product highlights · {index + 1} of {capabilities.length}</p>
  </section>;
}
