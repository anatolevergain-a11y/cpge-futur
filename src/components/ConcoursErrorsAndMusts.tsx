import React, { useState } from 'react';
import {
  ERREURS_CONCOURS,
  QUESTIONS_INCONTOURNABLES,
  ErreurConcoursItem,
  QuestionIncontournableItem,
  Matiere,
  Filiere
} from '../data/cpgeData';
import MathRenderer from './MathRenderer';
import {
  AlertTriangle,
  CheckCircle2,
  Quote,
  Search,
  BookOpen,
  Award,
  Sparkles,
  Flame,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';

export const ConcoursErrorsAndMusts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'erreurs' | 'incontournables'>('erreurs');
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere | 'Toutes'>('Toutes');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Selected item state
  const [selectedErreur, setSelectedErreur] = useState<ErreurConcoursItem>(ERREURS_CONCOURS[0]);
  const [selectedMust, setSelectedMust] = useState<QuestionIncontournableItem>(QUESTIONS_INCONTOURNABLES[0]);

  // Filtering
  const filteredErreurs = ERREURS_CONCOURS.filter((item) => {
    const matchMatiere = selectedMatiere === 'Toutes' || item.matiere === selectedMatiere;
    const matchSearch =
      searchQuery.trim() === '' ||
      item.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.concoursImpact.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.lErreur.toLowerCase().includes(searchQuery.toLowerCase());
    return matchMatiere && matchSearch;
  });

  const filteredMusts = QUESTIONS_INCONTOURNABLES.filter((item) => {
    const matchMatiere = selectedMatiere === 'Toutes' || item.matiere === selectedMatiere;
    const matchSearch =
      searchQuery.trim() === '' ||
      item.titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.chapitreAssocie.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.enonceType.toLowerCase().includes(searchQuery.toLowerCase());
    return matchMatiere && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Rapports de Jurys & Statistiques Écrits</span>
            <span aria-hidden="true">·</span>
            <span>Mines-Ponts · Centrale-Supélec · X-ENS · CCINP</span>
            <span aria-hidden="true">·</span>
            <span>Rédaction & Barèmes</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Erreurs Fréquentes & Questions Incontournables
          </h2>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher (ex: équivalent, Poynting)..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Main Mode Switcher (Erreurs vs Incontournables) */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto">
        <button
          onClick={() => setActiveTab('erreurs')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'erreurs'
              ? 'bg-rose-50 dark:bg-rose-500/15 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-500 dark:text-rose-400" />
          <span>Erreurs Fréquentes des Copies (Rapports de Jurys)</span>
        </button>

        <button
          onClick={() => setActiveTab('incontournables')}
          className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
            activeTab === 'incontournables'
              ? 'bg-indigo-50 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
          }`}
        >
          <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
          <span>Questions les Plus Présentes aux Concours (Rédaction Modèle)</span>
        </button>
      </div>

      {/* Matière Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto">
        {(['Toutes', 'Mathématiques', 'Physique', 'Informatique'] as const).map((mat) => (
          <button
            key={mat}
            onClick={() => setSelectedMatiere(mat)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedMatiere === mat
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm border border-slate-200/80 dark:border-slate-700'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
            }`}
          >
            {mat}
          </button>
        ))}
      </div>

      {/* VIEW 1: ERREURS FREQUENTES */}
      {activeTab === 'erreurs' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* List */}
          <div className="lg:col-span-5 space-y-3 max-h-[850px] overflow-y-auto pr-1">
            {filteredErreurs.length === 0 ? (
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-500">
                Aucune erreur ne correspond à ce filtre.
              </div>
            ) : (
              filteredErreurs.map((err) => {
                const isSelected = selectedErreur.id === err.id;
                return (
                  <div
                    key={err.id}
                    onClick={() => setSelectedErreur(err)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-rose-50 dark:bg-rose-500/10 border-rose-300 dark:border-rose-500/40 text-slate-900 dark:text-white ring-1 ring-rose-400/30'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                      <span className="font-semibold text-rose-600 dark:text-rose-400">{err.matiere}</span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">{err.frequenceRapport}</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{err.titre}</h4>

                    <div className="text-xs text-slate-700 dark:text-slate-400 font-mono line-clamp-2 bg-slate-50 dark:bg-slate-950/60 p-2 rounded border border-slate-200 dark:border-slate-800/60">
                      <MathRenderer content={err.lErreur} />
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-2">
                      <span>Concours : {err.concoursImpact}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Detailed Workbench */}
          {selectedErreur && (
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-sm">
              {/* Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 font-semibold mb-1">
                  <span>{selectedErreur.matiere}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedErreur.frequenceRapport}</span>
                  <span aria-hidden="true">·</span>
                  <span>Impact : {selectedErreur.concoursImpact}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedErreur.titre}</h3>
              </div>

              {/* Ce que font les élèves (Carton Rouge) */}
              <div className="p-4 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-500/40 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-rose-700 dark:text-rose-400 font-bold">
                  <ShieldAlert className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                  <span>L'Erreur Fatale constatée dans les copies :</span>
                </div>
                <div className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed font-sans">
                  <MathRenderer content={selectedErreur.lErreur} />
                </div>
              </div>

              {/* Pourquoi c'est faux (Contre-exemple) */}
              <div className="p-4 bg-amber-50/60 dark:bg-slate-950 rounded-xl border border-amber-200/80 dark:border-slate-800 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-400">
                  Pourquoi ce raisonnement est faux (Contre-exemple & Physique) :
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-sans">
                  <MathRenderer content={selectedErreur.pourquoiCestFaux} />
                </div>
              </div>

              {/* La rédaction exemplaire attendue par le jury */}
              <div className="p-4 bg-emerald-50 dark:bg-emerald-950/25 border border-emerald-200 dark:border-emerald-500/40 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>La Rédaction Exemplaire Attendue par le Jury :</span>
                </div>
                <div className="text-xs text-emerald-950 dark:text-emerald-100 leading-relaxed font-sans">
                  <MathRenderer content={selectedErreur.laCorrectionParfaite} />
                </div>
              </div>

              {/* Citation officielle du rapport de jury */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-700 dark:text-slate-300 flex items-start gap-3 italic">
                <Quote className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <MathRenderer content={selectedErreur.citationRapportJury} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* VIEW 2: QUESTIONS INCONTOURNABLES */}
      {activeTab === 'incontournables' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* List */}
          <div className="lg:col-span-5 space-y-3 max-h-[850px] overflow-y-auto pr-1">
            {filteredMusts.length === 0 ? (
              <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center text-xs text-slate-500">
                Aucune question ne correspond à ce filtre.
              </div>
            ) : (
              filteredMusts.map((must) => {
                const isSelected = selectedMust.id === must.id;
                return (
                  <div
                    key={must.id}
                    onClick={() => setSelectedMust(must)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-300 dark:border-indigo-500/40 text-slate-900 dark:text-white ring-1 ring-indigo-400/30'
                        : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                      <span className="font-semibold text-indigo-600 dark:text-indigo-400">{must.matiere}</span>
                      <span className="text-[11px] font-mono text-amber-700 dark:text-amber-400 font-semibold">{must.tauxPresence}</span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{must.titre}</h4>

                    <div className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      <MathRenderer content={must.enonceType} />
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-2">
                      <span>{must.chapitreAssocie}</span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Detailed Workbench */}
          {selectedMust && (
            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-sm">
              {/* Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                  <span>{selectedMust.matiere}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-700 dark:text-amber-400 font-mono font-semibold">{selectedMust.tauxPresence}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedMust.chapitreAssocie}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedMust.titre}</h3>
              </div>

              {/* Énoncé type canonique */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Énoncé Canonique des Concours
                </div>
                <div className="text-xs text-slate-800 dark:text-slate-200 leading-relaxed font-sans">
                  <MathRenderer content={selectedMust.enonceType} />
                </div>
              </div>

              {/* Pièges immédiats */}
              <div className="p-3.5 bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/25 rounded-xl space-y-1.5">
                <div className="text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500 dark:text-rose-400" />
                  <span>Pièges à éviter absolument :</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-rose-900 dark:text-rose-200/90 leading-relaxed">
                  {selectedMust.piegesImmediats.map((p, idx) => (
                    <li key={idx}>
                      <MathRenderer content={p} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rédaction modèle pas à pas */}
              <div className="space-y-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Rédaction Modèle Ligne par Ligne (Garantie Tous Points) :</span>
                </div>

                <div className="space-y-3">
                  {selectedMust.redactionModele.map((step, idx) => (
                    <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono">
                        {step.etape}
                      </div>
                      <div className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-sans">
                        <MathRenderer content={step.justification} />
                      </div>
                      {step.formule && (
                        <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white overflow-x-auto">
                          <MathRenderer content={`$$${step.formule}$$`} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Barème & Points clés */}
              <div className="p-4 bg-indigo-50/80 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 rounded-xl space-y-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Points Clés du Barème des Jurys</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-indigo-950 dark:text-indigo-200/90 leading-relaxed">
                  {selectedMust.baremeEtPointsCles.map((pt, idx) => (
                    <li key={idx}>
                      <MathRenderer content={pt} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ConcoursErrorsAndMusts;
