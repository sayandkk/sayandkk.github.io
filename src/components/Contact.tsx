import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle, Github, Linkedin, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1600));
    setSending(false);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  const inputCls = 'w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 placeholder-zinc-600 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/30 transition-all duration-150';

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
          >
            <span className="section-num">06</span>
            <span className="label">Contact</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-100 mb-6">Let's work<br /><span className="text-emerald-400">together.</span></h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-10 max-w-sm">
              Whether it's a new project, a job opportunity, or just a friendly hello — drop me a message and I'll get back within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Mail, v: 'sayandkk53@gmail.com', href: 'mailto:sayandkk53@gmail.com' },
                { icon: Phone, v: '+91 8138950624', href: 'tel:+918138950624' },
                { icon: MapPin, v: 'Edappal, Malappuram, Kerala, India', href: '' },
              ].map(({ icon: Icon, v, href }, i) => (
                <div key={v} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-emerald-400" />
                  </div>
                  {href ? (
                    <a href={href} className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-150 font-medium">{v}</a>
                  ) : (
                    <span className="text-sm text-zinc-400 font-medium">{v}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {[
                { href: 'https://github.com/sayandkk', icon: Github, l: 'GitHub' },
                { href: 'https://linkedin.com/in/sayandkk', icon: Linkedin, l: 'LinkedIn' },
              ].map(({ href, icon: Icon, l }) => (
                <a key={l} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-800 text-zinc-500 hover:border-emerald-600 hover:text-emerald-400 text-xs font-semibold transition-all duration-150 bg-zinc-900">
                  <Icon size={13} /> {l}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-dark p-7 md:p-9">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-14 text-center gap-4"
                >
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-bold text-zinc-100 mb-1">Message sent!</p>
                    <p className="text-zinc-500 text-sm">I'll get back to you soon.</p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1.5 uppercase tracking-widest">Name</label>
                      <input name="name" value={form.name} onChange={onChange} required placeholder="John Doe" className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-600 mb-1.5 uppercase tracking-widest">Email</label>
                      <input name="email" type="email" value={form.email} onChange={onChange} required placeholder="john@email.com" className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-zinc-600 mb-1.5 uppercase tracking-widest">Message</label>
                    <textarea name="message" rows={6} value={form.message} onChange={onChange} required placeholder="Tell me about your project or idea..." className={inputCls + ' resize-none'} />
                  </div>
                  <button type="submit" disabled={sending} className="btn-em w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed">
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight size={15} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
