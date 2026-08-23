/** Arquitetura de Âmbar: contacto claro, validação local e sucesso simulado sem qualquer envio a servidor. */
import type { FormEvent } from "react";
import { useState } from "react";
import { CheckCircle2, Clock3, Mail, MapPin, Phone, Send, Smartphone } from "lucide-react";
import { toast } from "sonner";
import SectionHeading from "../components/SectionHeading";
import { contact } from "../data/contact";

const channels = [
  { icon: Phone, ...contact.phone },
  { icon: Smartphone, ...contact.whatsapp },
  { icon: Mail, ...contact.email },
  { icon: MapPin, ...contact.address },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Indique o seu nome.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Indique um e-mail válido.";
    if (!form.subject.trim()) next.subject = "Indique o assunto.";
    if (form.message.trim().length < 10) next.message = "Escreva uma mensagem com pelo menos 10 caracteres.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setLoading(true);
    window.setTimeout(() => { setLoading(false); setSubmitted(true); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); toast.success("Mensagem preparada com sucesso.", { description: "Esta demonstração não envia dados para nenhum servidor." }); }, 850);
  };

  return (
    <section id="contactos" className="bg-[#eee8dd] px-5 py-24 text-[#11100e] sm:px-8 lg:px-12 lg:py-32"><div className="mx-auto max-w-[1320px]"><SectionHeading index="07" eyebrow="Vamos conversar" title="Contactos" description="Partilhe o seu contexto. O formulário abaixo funciona apenas no navegador e está pronto para ganhar integração mais tarde." light />
      <div className="mt-14 grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20"><div><div className="space-y-5">{channels.map((channel) => { const Icon = channel.icon; return <div key={channel.label} className="flex gap-4 border-b border-[#d1c8b9] pb-5"><span className="grid h-10 w-10 shrink-0 place-items-center bg-[#d8c6a8] text-[#81520c]"><Icon size={18} /></span><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6c6255]">{channel.label}</p><p className="mt-1 text-sm text-[#29241f]">{channel.value}</p></div></div>})}</div><div className="mt-8 flex gap-4"><Clock3 className="mt-1 shrink-0 text-[#b77618]" size={20} /><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6c6255]">Horário</p><p className="mt-1 text-sm leading-6 text-[#29241f]">{contact.hours}</p></div></div><div className="mt-10 border-t border-[#d1c8b9] pt-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#6c6255]">Redes sociais</p><div className="mt-4 flex flex-wrap gap-3">{contact.socialLinks.map((link) => <span key={link.label} className="border border-[#bfb3a1] px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#544b40]" title="Ligação a configurar">{link.label}</span>)}</div></div></div>
        <form onSubmit={handleSubmit} noValidate className="border border-[#d1c8b9] bg-[#e7dfd2] p-6 sm:p-8"><div className="flex items-start justify-between gap-5 border-b border-[#d1c8b9] pb-6"><div><h3 className="font-display text-3xl">Envie uma mensagem</h3><p className="mt-2 text-sm leading-6 text-[#625b51]">Receberá uma confirmação simulada no browser. Nenhum dado será enviado.</p></div>{submitted && <CheckCircle2 className="shrink-0 text-[#5a7a55]" size={24} />}</div><div className="mt-7 grid gap-5 sm:grid-cols-2"><Field label="Nome" name="name" value={form.name} error={errors.name} onChange={(value) => setForm({ ...form, name: value })} /><Field label="E-mail" name="email" type="email" value={form.email} error={errors.email} onChange={(value) => setForm({ ...form, email: value })} /><Field label="Telefone" name="phone" type="tel" value={form.phone} onChange={(value) => setForm({ ...form, phone: value })} /><Field label="Assunto" name="subject" value={form.subject} error={errors.subject} onChange={(value) => setForm({ ...form, subject: value })} /></div><div className="mt-5"><label htmlFor="message" className="field-label">Mensagem</label><textarea id="message" name="message" rows={5} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} className="field-control min-h-[128px] resize-y" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <p id="message-error" className="mt-1 text-xs text-[#a23b2b]">{errors.message}</p>}</div><button type="submit" disabled={loading} className="button-primary mt-7 disabled:opacity-65">{loading ? "A preparar mensagem…" : "Enviar mensagem"} <Send size={16} /></button></form>
      </div></div>
    </section>
  );
}

function Field({ label, name, type = "text", value, error, onChange }: { label: string; name: string; type?: string; value: string; error?: string; onChange: (value: string) => void }) {
  return <div><label htmlFor={name} className="field-label">{label}{name !== "phone" && <span className="ml-1 text-[#a23b2b]">*</span>}</label><input id={name} name={name} type={type} value={value} onChange={(event) => onChange(event.target.value)} className="field-control" aria-invalid={Boolean(error)} aria-describedby={error ? `${name}-error` : undefined} />{error && <p id={`${name}-error`} className="mt-1 text-xs text-[#a23b2b]">{error}</p>}</div>;
}
