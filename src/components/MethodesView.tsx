import React, { useState } from 'react';
import { FICHES_REFLEXES, FicheReflexe, Matiere } from '../data/cpgeData';
import MathRenderer from './MathRenderer';
import { Sparkles, Search, Compass, BookOpen, CheckCircle } from 'lucide-react';

export const MethodesView: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere | 'Toutes'>('Toutes');
  const [selectedReflexe, setSelectedReflexe] = useState<FicheReflexe>(FICHES_REFLEXES[0]);

  const filtered = FICHES_REFLEXES.filter((item) => {
    const matchMat = selectedMatiere === 'Toutes' || item.matiere === selectedMatiere;
    const matchText =
      search.trim() === '' ||
      item.titre.toLowerCase().includes(search.toLowerCase()) ||
      item.quandUtiliser.toLowerCase().includes(search.toLowerCase()) ||
      item.formuleOuTheoreme.toLowerCase().includes(search.toLowerCase());
    return matchMat && matchText;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span>Fiches Réflexes</span>
            <span aria-hidden="true">·</span>
            <span>Astuces de Major</span>
            <span aria-hidden="true">·</span>
            <span>Méthodologie des Concours</span>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Les Réflexes Incontournables de Concours
          </h2>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une méthode clé..."
            className="w-full pl-9 pr-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-x-auto">
        {(['Toutes', 'Mathématiques', 'Physique'] as const).map((mat) => (
          <button
            key={mat}
            onClick={() => setSelectedMatiere(mat)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedMatiere === mat
                ? 'bg-white dark:bg-indigo-600 text-slate-900 dark:text-white shadow-sm border border-slate-200/80 dark:border-transparent'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
            }`}
          >
            {mat}
          </button>
        ))}
      </div>

      {/* Split Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* List */}
        <div className="lg:col-span-4 space-y-3">
          {filtered.map((item) => {
            const isSelected = selectedReflexe.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedReflexe(item)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-indigo-50 dark:bg-indigo-500/10 border-indigo-300 dark:border-indigo-500/40 text-slate-900 dark:text-white ring-1 ring-indigo-400/30'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">{item.matiere}</div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{item.titre}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{item.quandUtiliser}</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Ref Card */}
        {selectedReflexe && (
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 space-y-6 shadow-sm">
            <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
              <span className="text-xs font-mono uppercase text-indigo-600 dark:text-indigo-400 font-semibold">
                Fiche Méthode · {selectedReflexe.matiere}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{selectedReflexe.titre}</h3>
            </div>

            {/* Formule clé */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Énoncé / Formule de référence :</div>
              <div className="text-xs text-slate-900 dark:text-white">
                <MathRenderer content={selectedReflexe.formuleOuTheoreme} />
              </div>
            </div>

            {/* Quand l'utiliser */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>Quand dégainer ce réflexe aux écrits ou aux oraux ?</span>
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed p-3.5 bg-amber-50/40 dark:bg-slate-950/70 border border-amber-200/60 dark:border-slate-800 rounded-lg">
                <MathRenderer content={selectedReflexe.quandUtiliser} />
              </p>
            </div>

            {/* Étapes pratiques */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                L'algorithme de résolution étape par étape
              </h4>
              <div className="space-y-2">
                {selectedReflexe.etapesPratiques.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-xs text-slate-800 dark:text-slate-300 leading-relaxed font-sans">
                      <MathRenderer content={step} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exemple d'application */}
            <div className="p-4 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 rounded-xl space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                Exemple canonique décortiqué
              </div>
              <div className="text-xs text-indigo-950 dark:text-indigo-200/90 leading-relaxed font-sans">
                <MathRenderer content={selectedReflexe.exempleApplication} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MethodesView;
