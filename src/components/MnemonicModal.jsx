import React, { useState, useEffect } from 'react';
import { CATEGORIES } from '../data/categoriesData';
import { LAKES_DATA } from '../data/lakesData';
import { GULF_CATEGORIES, GULFS_DATA } from '../data/gulfsData';
import { MOUNTAIN_CATEGORIES, MOUNTAINS_DATA } from '../data/mountainsData';
import { PLAIN_CATEGORIES, PLAINS_MNEMONICS_DATA } from '../data/plainsData';
import { PLATEAU_CATEGORIES, PLATEAUS_MNEMONICS_DATA } from '../data/plateausData';
import { NATIONAL_PARK_CATEGORIES, NATIONAL_PARKS_DATA } from '../data/nationalParksData';
import { renderFormattedText } from '../utils/formatText';
import { X, Search, BookOpen, Waves, Mountain, Compass, Trees, Layers, Wheat, Sparkles } from 'lucide-react';

const TABS = [
  { id: 'goller', name: 'Göller', icon: Waves, color: 'text-blue-400', badgeColor: 'bg-blue-500/10 border-blue-500/30' },
  { id: 'korfezler', name: 'Körfezler', icon: Compass, color: 'text-indigo-400', badgeColor: 'bg-indigo-500/10 border-indigo-500/30' },
  { id: 'daglar', name: 'Dağlar', icon: Mountain, color: 'text-rose-400', badgeColor: 'bg-rose-500/10 border-rose-500/30' },
  { id: 'ovalar', name: 'Ovalar', icon: Wheat, color: 'text-emerald-400', badgeColor: 'bg-emerald-500/10 border-emerald-500/30' },
  { id: 'platolar', name: 'Platolar', icon: Layers, color: 'text-amber-400', badgeColor: 'bg-amber-500/10 border-amber-500/30' },
  { id: 'milli-parklar', name: 'Milli Parklar', icon: Trees, color: 'text-teal-400', badgeColor: 'bg-teal-500/10 border-teal-500/30' },
];

export default function MnemonicModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('goller');
  const [searchQuery, setSearchQuery] = useState('');

  // Lock body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Filter Lake Categories
  const filteredLakeCategories = CATEGORIES.map(cat => {
    const lakes = LAKES_DATA.filter(l => l.type === cat.name);
    const matchesSearch = 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lakes.some(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return {
      ...cat,
      items: lakes,
      matchesSearch
    };
  }).filter(c => c.matchesSearch);

  // Filter Gulf Categories
  const filteredGulfCategories = GULF_CATEGORIES.map(cat => {
    const gulfs = GULFS_DATA.filter(g => cat.gulfs.includes(g.id));
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gulfs.some(g => g.name.toLowerCase().includes(searchQuery.toLowerCase()) || g.province.toLowerCase().includes(searchQuery.toLowerCase()));

    return {
      ...cat,
      items: gulfs,
      matchesSearch
    };
  }).filter(c => c.matchesSearch);

  // Filter Mountain Categories
  const filteredMountainCategories = MOUNTAIN_CATEGORIES.map(cat => {
    const mountains = MOUNTAINS_DATA.filter(m => cat.mountains.includes(m.id));
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mountains.some(m => m.name.toLowerCase().includes(searchQuery.toLowerCase()) || m.province.toLowerCase().includes(searchQuery.toLowerCase()));

    return {
      ...cat,
      items: mountains,
      matchesSearch
    };
  }).filter(c => c.matchesSearch);

  // Filter Plain Categories
  const filteredPlainCategories = PLAIN_CATEGORIES.map(cat => {
    const plains = PLAINS_MNEMONICS_DATA.filter(p => cat.plains.includes(p.id));
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plains.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.province.toLowerCase().includes(searchQuery.toLowerCase()));

    return {
      ...cat,
      items: plains,
      matchesSearch
    };
  }).filter(c => c.matchesSearch);

  // Filter Plateau Categories
  const filteredPlateauCategories = PLATEAU_CATEGORIES.map(cat => {
    const plateaus = PLATEAUS_MNEMONICS_DATA.filter(p => cat.plateaus.includes(p.id));
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plateaus.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.province.toLowerCase().includes(searchQuery.toLowerCase()));

    return {
      ...cat,
      items: plateaus,
      matchesSearch
    };
  }).filter(c => c.matchesSearch);

  // Filter National Park Categories
  const filteredNationalParkCategories = NATIONAL_PARK_CATEGORIES.map(cat => {
    const parks = NATIONAL_PARKS_DATA.filter(p => cat.parks.includes(p.id));
    const matchesSearch =
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.story.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parks.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.province.toLowerCase().includes(searchQuery.toLowerCase()));

    return {
      ...cat,
      items: parks,
      matchesSearch
    };
  }).filter(c => c.matchesSearch);

  const activeTabMeta = TABS.find(t => t.id === activeTab);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 animate-fadeIn">
      {/* Responsive modal container */}
      <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-2xl h-[88vh] sm:h-[82vh] max-h-[640px] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/60 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                KPSS Coğrafya Kodlama Rehberi
              </h3>
              <p className="text-xs text-slate-400">Hafıza Teknikleri & Şifreli Kodlamalar</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Category Navigation Tabs */}
        <div className="px-4 pt-3 pb-2 border-b border-white/10 bg-slate-950/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery('');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 transition-all duration-200 flex items-center gap-2 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900/90 text-slate-400 border-white/10 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : tab.color}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input (Always visible across all tabs) */}
        <div className="p-4 border-b border-white/5 bg-slate-950/30 shrink-0">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-500" />
            <input
              type="text"
              placeholder={`${activeTabMeta?.name || 'Konu'} için adı veya şifre kelimesi ara...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Tab Content (Scrollable area) */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 flex flex-col gap-4">
          {/* Göller Tab */}
          {activeTab === 'goller' && (
            filteredLakeCategories.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
                <Search className="w-8 h-8 text-slate-600" />
                <p className="text-sm font-medium text-slate-300">
                  "{searchQuery}" için sonuç bulunamadı.
                </p>
              </div>
            ) : (
              filteredLakeCategories.map(cat => (
                <div key={cat.id} className="bg-slate-950/70 rounded-2xl p-4 border border-white/10 flex flex-col gap-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                      <h4 className="text-sm font-extrabold text-white tracking-tight">{cat.name}</h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                      {cat.items.length} Göl
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 my-0.5">
                    {cat.items.map(l => (
                      <span key={l.id} className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] font-medium text-slate-200 flex items-center gap-1 shadow-sm">
                        <span className="font-semibold text-slate-100">{l.name}</span>
                        {l.region && <span className="text-[10px] text-indigo-300/80 font-mono">({l.region.includes('/') ? l.region.split('/')[1].trim() : l.region})</span>}
                      </span>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-indigo-950/40 border border-indigo-500/20 text-xs text-slate-200 leading-relaxed font-sans shadow-inner">
                    <div className="text-indigo-400 font-bold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>HAFIZA KODLAMA HİKAYESİ:</span>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed whitespace-pre-line">
                      {renderFormattedText(cat.story)}
                    </p>
                  </div>
                </div>
              ))
            )
          )}

          {/* Körfezler Tab */}
          {activeTab === 'korfezler' && (
            filteredGulfCategories.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
                <Search className="w-8 h-8 text-slate-600" />
                <p className="text-sm font-medium text-slate-300">
                  "{searchQuery}" için sonuç bulunamadı.
                </p>
              </div>
            ) : (
              filteredGulfCategories.map(cat => (
                <div key={cat.id} className="bg-slate-950/70 rounded-2xl p-4 border border-white/10 flex flex-col gap-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                      <h4 className="text-sm font-extrabold text-white tracking-tight">{cat.name}</h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                      {cat.items.length} Körfez
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 my-0.5">
                    {cat.items.map(g => (
                      <span key={g.id} className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] font-medium text-slate-200 flex items-center gap-1 shadow-sm">
                        <span className="font-semibold text-slate-100">{g.name}</span>
                        <span className="text-[10px] text-indigo-300/80 font-mono">({g.province})</span>
                      </span>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-indigo-950/40 border border-indigo-500/20 text-xs text-slate-200 leading-relaxed font-sans shadow-inner">
                    <div className="text-indigo-400 font-bold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>KODLAMA & SIRALAMA ŞİFRESİ:</span>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed whitespace-pre-line">
                      {renderFormattedText(cat.story)}
                    </p>
                  </div>
                </div>
              ))
            )
          )}

          {/* Dağlar Tab */}
          {activeTab === 'daglar' && (
            filteredMountainCategories.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
                <Search className="w-8 h-8 text-slate-600" />
                <p className="text-sm font-medium text-slate-300">
                  "{searchQuery}" için sonuç bulunamadı.
                </p>
              </div>
            ) : (
              filteredMountainCategories.map(cat => (
                <div key={cat.id} className="bg-slate-950/70 rounded-2xl p-4 border border-white/10 flex flex-col gap-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                      <h4 className="text-sm font-extrabold text-white tracking-tight">{cat.name}</h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                      {cat.items.length} Dağ
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 my-0.5">
                    {cat.items.map(m => (
                      <span key={m.id} className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] font-medium text-slate-200 flex items-center gap-1 shadow-sm">
                        <span className="font-semibold text-slate-100">{m.name}</span>
                        <span className="text-[10px] text-rose-300/80 font-mono">({m.province})</span>
                      </span>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-rose-950/40 border border-rose-500/20 text-xs text-slate-200 leading-relaxed font-sans shadow-inner">
                    <div className="text-rose-400 font-bold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>HAFIZA KODLAMASI & KISALTMA:</span>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed whitespace-pre-line">
                      {renderFormattedText(cat.story)}
                    </p>
                  </div>
                </div>
              ))
            )
          )}

          {/* Ovalar Tab */}
          {activeTab === 'ovalar' && (
            filteredPlainCategories.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
                <Search className="w-8 h-8 text-slate-600" />
                <p className="text-sm font-medium text-slate-300">
                  "{searchQuery}" için sonuç bulunamadı.
                </p>
              </div>
            ) : (
              filteredPlainCategories.map(cat => (
                <div key={cat.id} className="bg-slate-950/70 rounded-2xl p-4 border border-white/10 flex flex-col gap-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                      <h4 className="text-sm font-extrabold text-white tracking-tight">{cat.name}</h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                      {cat.items.length} Ova
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 my-0.5">
                    {cat.items.map(p => (
                      <span key={p.id} className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] font-medium text-slate-200 flex items-center gap-1 shadow-sm">
                        <span className="font-semibold text-slate-100">{p.name}</span>
                        <span className="text-[10px] text-emerald-300/80 font-mono">({p.province})</span>
                      </span>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-emerald-950/40 border border-emerald-500/20 text-xs text-slate-200 leading-relaxed font-sans shadow-inner">
                    <div className="text-emerald-400 font-bold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>HAFIZA KODLAMASI & ÖZELLİKLER:</span>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed whitespace-pre-line">
                      {renderFormattedText(cat.story)}
                    </p>
                  </div>
                </div>
              ))
            )
          )}

          {/* Platolar Tab */}
          {activeTab === 'platolar' && (
            filteredPlateauCategories.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
                <Search className="w-8 h-8 text-slate-600" />
                <p className="text-sm font-medium text-slate-300">
                  "{searchQuery}" için sonuç bulunamadı.
                </p>
              </div>
            ) : (
              filteredPlateauCategories.map(cat => (
                <div key={cat.id} className="bg-slate-950/70 rounded-2xl p-4 border border-white/10 flex flex-col gap-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                      <h4 className="text-sm font-extrabold text-white tracking-tight">{cat.name}</h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                      {cat.items.length} Plato
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 my-0.5">
                    {cat.items.map(p => (
                      <span key={p.id} className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] font-medium text-slate-200 flex items-center gap-1 shadow-sm">
                        <span className="font-semibold text-slate-100">{p.name}</span>
                        <span className="text-[10px] text-amber-300/80 font-mono">({p.province})</span>
                      </span>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-amber-950/40 border border-amber-500/20 text-xs text-slate-200 leading-relaxed font-sans shadow-inner">
                    <div className="text-amber-400 font-bold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>HAFIZA KODLAMASI & ÖZELLİKLER:</span>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed whitespace-pre-line">
                      {renderFormattedText(cat.story)}
                    </p>
                  </div>
                </div>
              ))
            )
          )}

          {/* Milli Parklar Tab */}
          {activeTab === 'milli-parklar' && (
            filteredNationalParkCategories.length === 0 ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-2">
                <Search className="w-8 h-8 text-slate-600" />
                <p className="text-sm font-medium text-slate-300">
                  "{searchQuery}" için sonuç bulunamadı.
                </p>
              </div>
            ) : (
              filteredNationalParkCategories.map(cat => (
                <div key={cat.id} className="bg-slate-950/70 rounded-2xl p-4 border border-white/10 flex flex-col gap-3 shadow-lg backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-3 h-3 rounded-full shadow-sm" style={{ backgroundColor: cat.color, boxShadow: `0 0 10px ${cat.color}` }} />
                      <h4 className="text-sm font-extrabold text-white tracking-tight">{cat.name}</h4>
                    </div>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-slate-400 font-mono">
                      {cat.items.length} Millî Park
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 my-0.5">
                    {cat.items.map(p => (
                      <span key={p.id} className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-white/10 text-[11px] font-medium text-slate-200 flex items-center gap-1 shadow-sm">
                        <span className="font-semibold text-slate-100">{p.name}</span>
                        <span className="text-[10px] text-teal-300/80 font-mono">({p.province})</span>
                        {p.isUNESCO && <span className="text-[9px] px-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">UNESCO</span>}
                      </span>
                    ))}
                  </div>
                  <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950/90 via-slate-900/90 to-teal-950/40 border border-teal-500/20 text-xs text-slate-200 leading-relaxed font-sans shadow-inner">
                    <div className="text-teal-400 font-bold flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>HAFIZA KODLAMASI & ÖZETİ:</span>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed whitespace-pre-line">
                      {renderFormattedText(cat.story)}
                    </p>
                  </div>
                </div>
              ))
            )
          )}
        </div>
      </div>
    </div>
  );
}
