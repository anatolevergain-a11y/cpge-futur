import React, { useState, useEffect } from 'react';
import { CONCOURS_CALENDAR } from '../data/cpgeData';
import { Calendar, Clock, Trophy, Flame, ChevronRight } from 'lucide-react';

export const ConcoursCountdown: React.FC = () => {
  // Current time
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCountdown = (targetDateStr: string) => {
    const target = new Date(targetDateStr).getTime();
    const diff = target - now.getTime();

    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    return { days, hours, minutes, seconds, isPassed: false };
  };

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
          <span>Planning & Calendrier</span>
          <span aria-hidden="true">·</span>
          <span>Épreuves Écrites Concours 2027</span>
          <span aria-hidden="true">·</span>
          <span>Compte à Rebours</span>
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Calendrier Officiel des Écrits de Concours
        </h2>
      </div>

      {/* Countdown Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CONCOURS_CALENDAR.map((concours, idx) => {
          const cd = getCountdown(concours.date);
          return (
            <div
              key={idx}
              className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{concours.filieres.join(', ')}</span>
                <span className="font-mono">{new Date(concours.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>

              <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">{concours.nom}</h4>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-white">{cd.days}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Jours</div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-white">{cd.hours}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Heures</div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-lg font-mono font-bold text-slate-900 dark:text-white">{cd.minutes}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Min</div>
                </div>
                <div className="p-2 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="text-lg font-mono font-bold text-indigo-600 dark:text-indigo-400">{cd.seconds}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Sec</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Revisions Roadmap Advice */}
      <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl space-y-4 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500 dark:text-amber-400" />
          <span>Stratégie de Révision des 100 Derniers Jours</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300">
          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="font-bold text-indigo-600 dark:text-indigo-400 uppercase font-mono">1. Phase de Consolidation</div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Verrouillez 100% des questions de cours et théorèmes fondamentaux. Une question de cours bâclée à l'écrit comme à l'oral est rédhibitoire pour l'admissibilité.
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="font-bold text-amber-700 dark:text-amber-400 uppercase font-mono">2. Annales en temps limité</div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Faites des épreuves de 4 heures en conditions réelles (sans corrigé, sans musique, montre au poignet). Apprenez à sauter les questions qui bloquent après 10 minutes.
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 space-y-2">
            <div className="font-bold text-emerald-700 dark:text-emerald-400 uppercase font-mono">3. Les Réflexes de Rédaction</div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Soignez la copie : encadrez les résultats, justifiez chaque théorème invoqué (continuité, dérivation sous le signe somme, convergence normale).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcoursCountdown;
