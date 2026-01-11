
import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  PlayCircle, 
  ChevronRight,
  Monitor,
  Heart,
  Smartphone,
  Cloud,
  Layers,
  Sparkles,
  Bot,
  BrainCircuit,
  Upload,
  ClipboardList,
  PenTool,
  Instagram,
  Youtube,
  Music2,
  // Added missing icons used in the component
  Share2,
  RefreshCcw,
  ShieldCheck
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { PricingTable } from './components/PricingTable';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Logo } from './components/Logo';
import { BENEFITS, IA_STANDARD, IA_EMOTION, ICON_MAP } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <div className="hero-glow"></div>
      <Navbar />

      {/* Hero Section */}
      <header className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-sky-500/20 text-sky-400 text-sm font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-ping"></span>
              Nouveau · Photo → Vidéo en 1 clic
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Faites revivre vos photos en <span className="text-gradient">vidéos émouvantes.</span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              Transformez des souvenirs (mariage, anniversaire, hommage, voyage) en un montage vidéo animé, musical et prêt à partager, en quelques minutes, sans compétence de montage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-primary px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-xl shadow-sky-500/25">
                Essayer avec une image <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-bold glass-card border-white/10 hover:bg-white/5 transition-all">
                Créer ma première vidéo
              </button>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-500" />
                Import en lot & drag-and-drop
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-500" />
                Animations naturelles & transitions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-sky-500" />
                Musiques & export HD prêt à partager
              </li>
            </ul>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative aspect-video rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/memories/1200/675" 
                alt="Exemple de vidéo" 
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button className="p-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:scale-110 transition-transform">
                  <PlayCircle className="w-16 h-16 text-white fill-white/20" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl flex items-center justify-between border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Rendu IA en cours...</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">Optimisation émotionnelle</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3].map(i => <div key={i} className="w-1 h-6 bg-sky-500/50 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trust Logos */}
      <section className="py-12 border-y border-white/5 bg-white/2">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-8">Utilisé par les créateurs de souvenirs</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center gap-2 font-bold text-2xl"><span>LUMINA</span></div>
            <div className="flex items-center gap-2 font-bold text-2xl italic underline decoration-sky-500">VOYAGE</div>
            <div className="flex items-center gap-2 font-bold text-2xl uppercase tracking-tighter">EventPro</div>
            <div className="flex items-center gap-2 font-bold text-2xl line-through decoration-indigo-500">LEGACY</div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="produit" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Une vidéo qui touche, <span className="text-gradient">sans passer des heures à monter.</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">La technologie au service de vos souvenirs les plus précieux.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, idx) => (
            <div key={idx} className="p-8 rounded-3xl glass-card border-white/5 hover:border-sky-500/30 transition-all group">
              <div className="mb-6 p-3 w-fit rounded-2xl bg-white/5 group-hover:bg-sky-500/10 transition-colors">
                {ICON_MAP[benefit.icon]}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-20">Votre vidéo en 3 étapes.</h2>
          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-sky-500/20"></div>
            
            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-black shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform relative z-10">
                1
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-bold">Import</h4>
                <p className="text-gray-400">Déposez vos photos en une fois. Mettez-les dans l’ordre souhaité par simple glisser-déposer.</p>
              </div>
              <div className="pt-4 flex justify-center"><Upload className="text-sky-400/50 w-12 h-12" /></div>
            </div>

            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-black shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform relative z-10">
                2
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-bold">Validation IA</h4>
                <p className="text-gray-400">Validez les vidéos créées par l’IA et demandez des modifications précises si nécessaire.</p>
              </div>
              <div className="pt-4 flex justify-center"><BrainCircuit className="text-indigo-400/50 w-12 h-12" /></div>
            </div>

            <div className="text-center space-y-6 group">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center text-3xl font-black shadow-lg shadow-sky-500/30 group-hover:scale-110 transition-transform relative z-10">
                3
              </div>
              <div className="space-y-3">
                <h4 className="text-2xl font-bold">Éditez & Exportez</h4>
                <p className="text-gray-400">Éditez, réorganisez, ajoutez de la musique et exportez votre vidéo finale en haute définition.</p>
              </div>
              <div className="pt-4 flex justify-center"><Share2 className="text-sky-400/50 w-12 h-12" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16">Tout ce qu'il faut pour un montage parfait.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-8 rounded-3xl border-white/5 space-y-4">
            <div className="p-3 bg-sky-500/10 w-fit rounded-xl"><Layers className="text-sky-400" /></div>
            <h4 className="text-xl font-bold">Timeline visuelle</h4>
            <p className="text-gray-400">Déplacez vos photos comme dans un éditeur classique. Gardez le contrôle complet sur le storytelling.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl border-white/5 space-y-4">
            <div className="p-3 bg-indigo-500/10 w-fit rounded-xl"><ClipboardList className="text-indigo-400" /></div>
            <h4 className="text-xl font-bold">Bibliothèque média</h4>
            <p className="text-gray-400">Accédez instantanément à toutes vos photos et musiques importées dans un espace organisé.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl border-white/5 space-y-4">
            <div className="p-3 bg-sky-500/10 w-fit rounded-xl"><Music2 className="text-sky-400" /></div>
            <h4 className="text-xl font-bold">Musiques & ambiance</h4>
            <p className="text-gray-400">Ajoutez et synchronisez une piste audio parmi notre catalogue ou votre propre musique.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl border-white/5 space-y-4">
            <div className="p-3 bg-indigo-500/10 w-fit rounded-xl"><RefreshCcw className="text-indigo-400" /></div>
            <h4 className="text-xl font-bold">Régénération</h4>
            <p className="text-gray-400">Régénérez une scène spécifique à l'infini jusqu'à obtenir l'émotion parfaite sans toucher au reste.</p>
          </div>
          <div className="glass-card p-8 rounded-3xl border-white/5 space-y-4 lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="p-3 bg-sky-500/10 w-fit rounded-xl"><Monitor className="text-sky-400 shrink-0" /></div>
              <div>
                <h4 className="text-xl font-bold">Export Multi-Format HD</h4>
                <p className="text-gray-400">Formats prêts pour Instagram, TikTok (9:16), TV 4K et partage privé par lien sécurisé.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-24 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold">Une tarification transparente.</h2>
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl border-white/10 space-y-4 italic text-gray-400">
              <p>Oui, ça peut paraître cher.</p>
              <p className="text-white font-medium">Mais nous utilisons les meilleures IA possibles pour garantir un rendu réaliste, fluide et émotionnel, sans compromis.</p>
              <p className="text-sky-400 font-bold text-lg">Faire vivre vos souvenirs n’a pas de prix.</p>
            </div>
          </div>

          <div className="space-y-24">
            <PricingTable 
              title="🤖 IA Standard" 
              subtitle="Vidéo 720p · 4 secondes par image (rapide, idéale pour la majorité des usages)"
              icon={<Bot className="w-8 h-8 text-sky-400" />}
              tiers={IA_STANDARD}
            />
            
            <PricingTable 
              title="🧠 IA Émotion" 
              subtitle="Vidéo 1080p · 5 secondes par image (animations plus réalistes, expressions naturelles)"
              icon={<BrainCircuit className="w-8 h-8 text-indigo-400" />}
              tiers={IA_EMOTION}
            />
          </div>
        </div>
      </section>

      <Testimonials />

      <FAQ />

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-primary p-12 md:p-24 text-center space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
          
          <h2 className="text-4xl md:text-6xl font-black max-w-4xl mx-auto leading-tight">
            Prêt à transformer vos souvenirs en moments d'éternité ?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-950 px-10 py-5 rounded-full text-xl font-black flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-2xl">
              Essayer avec une image <ArrowRight className="w-6 h-6" />
            </button>
            <button className="px-10 py-5 rounded-full text-xl font-black bg-black/20 text-white border border-white/20 hover:bg-black/30 transition-all">
              Créer ma première vidéo
            </button>
          </div>
          
          <p className="text-white/60 font-medium">Sans abonnement · Payez uniquement ce que vous créez</p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-20 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Logo />
            <p className="text-gray-500 text-sm leading-relaxed">
              Donnez vie à vos souvenirs grâce à l'intelligence artificielle émotionnelle la plus avancée du marché.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-sky-500/20 transition-colors text-gray-400 hover:text-sky-400"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-sky-500/20 transition-colors text-gray-400 hover:text-sky-400"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-sky-500/20 transition-colors text-gray-400 hover:text-sky-400"><Smartphone className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6">Produit</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Comment ça marche</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarifs Standard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tarifs Émotion</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Démonstration</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Support</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aide en ligne</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog technique</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6">Légal</h5>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sécurité des données</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 font-medium">
          <p>MEMO IA © {new Date().getFullYear()} - Tous droits réservés.</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1"><Cloud className="w-4 h-4" /> Stockage sécurisé</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> RGPD Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
