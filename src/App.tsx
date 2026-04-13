/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  UserRound, 
  Calendar, 
  ArrowRight,
  X,
  ChevronRight,
  MapPin,
  Stethoscope
} from 'lucide-react';

// --- Constants ---
const EXPERT_NAME = "Dra Emanuella";
const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5562986230614&text=Ol%C3%A1%20Dra%20Emanuella,%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20gratuita.&type=phone_number&app_absent=0";
const INSTAGRAM_URL = "https://www.instagram.com/dra_emanuellapires?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const IMAGES = {
  hero: "https://i.imgur.com/U3TZ576.jpeg",
  heroAlt: "https://i.imgur.com/ZXZHJip.jpeg",
  about: "https://i.imgur.com/M5ejHR0.jpeg",
  behind: "https://i.imgur.com/PbLgxrN.jpeg",
  gallery: [
    "https://i.imgur.com/eRNZvhc.jpeg",
    "https://i.imgur.com/iu3HjUn.jpeg",
    "https://i.imgur.com/nezMmIq.jpeg",
    "https://i.imgur.com/aO0y9KN.jpeg",
    "https://i.imgur.com/haAG5W7.jpeg",
    "https://i.imgur.com/beV06DB.jpeg",
    "https://i.imgur.com/dmXckvx.jpeg",
    "https://i.imgur.com/uR1kQQr.jpeg",
    "https://i.imgur.com/p2xgQ51.jpeg",
    "https://i.imgur.com/Uj3dDne.jpeg",
    "https://i.imgur.com/YOrfon4.jpeg",
    "https://i.imgur.com/I5SKKrC.jpeg",
    "https://i.imgur.com/G3BGa27.jpeg",
    "https://i.imgur.com/der2BCw.jpeg"
  ]
};

// --- Components ---

const Button = ({ children, className = "", primary = true, onClick }: { children: React.ReactNode, className?: string, primary?: boolean, onClick?: () => void }) => {
  const baseStyles = "flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 active:scale-95 shadow-lg";
  const primaryStyles = "bg-green-600 text-white hover:bg-green-700 shadow-green-200";
  const secondaryStyles = "bg-premium-dark text-white hover:bg-black shadow-gray-200";
  
  return (
    <a 
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${primary ? primaryStyles : secondaryStyles} ${className}`}
    >
      {children}
    </a>
  );
};

const SectionHeading = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
    <motion.span 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-premium-accent uppercase tracking-widest text-xs font-semibold mb-2 block"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-serif leading-tight"
    >
      {title}
    </motion.h2>
  </div>
);

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen selection:bg-premium-accent selection:text-white">
      
      {/* --- Lightbox --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              alt="Resultado" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- 1. HERO --- */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT_NAME} 
            className="w-full h-full object-cover object-center md:object-[center_20%]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-bg via-premium-bg/40 to-transparent" />
        </div>

        <div className="relative z-10 px-6 pb-12 max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-white/80 backdrop-blur-sm rounded-full text-xs font-semibold text-premium-accent mb-4 border border-premium-accent/20">
              CRM-GO 15.932
            </span>
            <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-[1.1]">
              Eu sou <span className="italic">{EXPERT_NAME}</span>, sua médica em Jaraguá e Goiânia.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl leading-relaxed">
              Cuido de você. Transformo com sutileza, resgatando sua autoestima através do rejuvenescimento facial e corporal.
            </p>
            
            <div className="flex flex-col gap-4">
              <Button className="w-full md:w-fit">
                <MessageCircle size={20} />
                Agendar consulta gratuita
              </Button>
              <p className="text-xs text-gray-500 flex items-center gap-2 px-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>

        {/* Vertical Accent */}
        <div className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 vertical-text text-premium-accent/30 font-serif text-sm tracking-[0.5em] uppercase pointer-events-none">
          Estética Avançada • Bem-estar • Autoestima
        </div>
      </section>

      {/* --- 2. QUEM SOU EU --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={IMAGES.about} 
                alt="Dra Emanuella em atendimento" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-premium-accent/10 rounded-full flex items-center justify-center text-premium-accent">
                  <Stethoscope size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Atendimento</p>
                  <p className="text-xs text-gray-500">Personalizado e Humano</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading 
              subtitle="Autoridade Pessoal" 
              title="Sutileza que transforma, cuidado que acolhe." 
            />
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Acredito que a verdadeira beleza não está em mudar quem você é, mas em realçar o que você tem de melhor. Meu foco é o rejuvenescimento natural, onde a sutileza é a chave para resultados elegantes.
              </p>
              <ul className="space-y-4">
                {[
                  "Atendimento focado na sua individualidade",
                  "Protocolos exclusivos de rejuvenescimento",
                  "Tecnologia de ponta e segurança médica",
                  "Acompanhamento próximo em cada etapa"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-premium-accent shrink-0 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a 
                  href={INSTAGRAM_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-premium-accent font-semibold hover:underline"
                >
                  <Instagram size={20} />
                  Acompanhe meu dia a dia no Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. RESULTADOS REAIS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            centered 
            subtitle="Galeria de Resultados" 
            title="Transformações que inspiram." 
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden cursor-pointer group relative"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  alt={`Resultado ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Sparkles className="text-white" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="mt-8 text-center text-xs text-gray-400 italic">
            *Resultados podem variar de pessoa para pessoa. Fotos autorizadas por pacientes.
          </p>
        </div>
      </section>

      {/* --- 4. POR QUE CONFIAR --- */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <SectionHeading 
          centered 
          subtitle="Diferenciais" 
          title="Por que confiar sua beleza a mim?" 
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <ShieldCheck size={32} />,
              title: "Segurança Médica",
              desc: "Procedimentos realizados com rigor técnico e materiais de altíssima qualidade."
            },
            {
              icon: <UserRound size={32} />,
              title: "Atendimento Comigo",
              desc: "Você não é apenas mais uma. Eu realizo pessoalmente cada avaliação e procedimento."
            },
            {
              icon: <Sparkles size={32} />,
              title: "Resultados Naturais",
              desc: "Minha filosofia é a sutileza. O objetivo é que as pessoas notem que você está melhor, sem saber o porquê."
            },
            {
              icon: <CheckCircle2 size={32} />,
              title: "Avaliação Honesta",
              desc: "Só indico o que você realmente precisa. Transparência total sobre expectativas e resultados."
            },
            {
              icon: <MapPin size={32} />,
              title: "Localização Fácil",
              desc: "Consultórios modernos e confortáveis em Jaraguá e Goiânia para sua conveniência."
            },
            {
              icon: <Calendar size={32} />,
              title: "Agenda Flexível",
              desc: "Horários pensados para se adaptar à sua rotina, com suporte pós-procedimento."
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-premium-accent mb-6">{card.icon}</div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5. CTA INTERMEDIÁRIO --- */}
      <section className="py-20 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-premium-dark text-white rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles size={120} />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6 relative z-10">
            Dê o primeiro passo para resgatar sua melhor versão hoje mesmo.
          </h2>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto relative z-10">
            Não deixe para depois o cuidado que você merece agora. A primeira consulta é o início da sua transformação.
          </p>
          <Button primary className="mx-auto relative z-10">
            <MessageCircle size={20} />
            Quero minha consulta gratuita
          </Button>
        </motion.div>
      </section>

      {/* --- 6. COMO FUNCIONA --- */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <SectionHeading 
          centered 
          subtitle="O Processo" 
          title="Como funciona sua primeira consulta?" 
        />
        
        <div className="space-y-12 relative">
          {/* Line connector */}
          <div className="absolute left-[27px] top-8 bottom-8 w-[2px] bg-premium-accent/20 hidden md:block" />
          
          {[
            {
              step: "01",
              title: "Contato via WhatsApp",
              desc: "Clique no botão e envie uma mensagem. Minha equipe ou eu mesma responderemos rapidamente para tirar dúvidas iniciais."
            },
            {
              step: "02",
              title: "Agendamento Sem Custos",
              desc: "Escolhemos o melhor horário para você em Jaraguá ou Goiânia. A primeira consulta de avaliação é totalmente gratuita."
            },
            {
              step: "03",
              title: "Avaliação e Plano",
              desc: "No dia, conversamos sobre seus desejos, analiso sua pele/corpo e montamos um plano de tratamento personalizado e honesto."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex gap-6 md:gap-10 items-start relative z-10"
            >
              <div className="w-14 h-14 rounded-full bg-premium-accent text-white flex items-center justify-center font-serif text-xl shrink-0 shadow-lg shadow-premium-accent/20">
                {item.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 7. MAIS PROVAS --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading 
            subtitle="Bastidores" 
            title="Excelência em cada detalhe." 
          />
          
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 snap-x">
            {[IMAGES.heroAlt, IMAGES.behind].map((img, i) => (
              <motion.div 
                key={i}
                className="min-w-[300px] md:min-w-[500px] aspect-video rounded-3xl overflow-hidden snap-center"
              >
                <img 
                  src={img} 
                  alt="Bastidores" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-2 text-premium-accent/40">
            <ChevronRight size={24} className="animate-bounce-x" />
          </div>
        </div>
      </section>

      {/* --- 8. CTA FINAL --- */}
      <section className="py-32 px-6 text-center bg-premium-bg relative">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="text-premium-accent mx-auto mb-6" size={48} />
            <h2 className="text-5xl md:text-6xl font-serif mb-8">
              Pronta para se sentir incrível novamente?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Agende agora sua <span className="text-premium-dark font-bold">primeira consulta gratuita</span> e descubra como podemos realçar sua beleza natural.
            </p>
            <Button className="mx-auto scale-110">
              <MessageCircle size={20} />
              Agendar agora no WhatsApp
            </Button>
            <p className="mt-6 text-sm text-gray-400">
              Vagas limitadas para consultas gratuitas este mês.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 9. FOOTER --- */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-1">{EXPERT_NAME}</h3>
            <p className="text-sm text-gray-500">Rejuvenescimento facial e corporal • CRM-GO 15.932</p>
            <p className="text-xs text-gray-400 mt-2">Jaraguá GO | Goiânia GO</p>
          </div>
          
          <div className="flex gap-6">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-premium-accent transition-colors">
              <Instagram size={24} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-600 transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
          
          <div className="text-xs text-gray-400 text-center md:text-right">
            <p>© {new Date().getFullYear()} {EXPERT_NAME}</p>
            <p className="mt-1">Desenvolvido com sutileza.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button (Mobile Only) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl animate-bounce"
        >
          <MessageCircle size={32} />
        </a>
      </div>

    </div>
  );
}
