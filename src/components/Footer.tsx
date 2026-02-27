import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const nav = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];
  const go = (s: string) => document.querySelector(`#${s.toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
            <span className="text-zinc-950 font-black text-xs">SK</span>
          </div>
          <span className="text-sm text-zinc-500">© {new Date().getFullYear()} Sayand K K</span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          {nav.map((n) => (
            <button key={n} onClick={() => go(n)} className="text-xs text-zinc-600 hover:text-emerald-400 transition-colors duration-150 font-medium">
              {n}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: 'https://github.com/sayandkk', icon: Github, l: 'GitHub' },
            { href: 'https://linkedin.com/in/sayandkk', icon: Linkedin, l: 'LinkedIn' },
            { href: 'mailto:sayandkk53@gmail.com', icon: Mail, l: 'Email' },
          ].map(({ href, icon: Icon, l }) => (
            <a key={l} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" aria-label={l}
              className="w-7 h-7 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-600 hover:border-emerald-600 hover:text-emerald-400 transition-all duration-150">
              <Icon size={13} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-7 h-7 flex items-center justify-center rounded-lg border border-zinc-800 text-zinc-600 hover:border-emerald-600 hover:text-emerald-400 transition-all duration-150"
          >
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
