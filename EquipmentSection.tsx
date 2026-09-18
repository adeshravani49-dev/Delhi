import React, { useState } from 'react';
import { EQUIPMENT_LIST } from '../data/gymData';
import { Dumbbell, Activity, Flame, Zap, Layers, Target, CheckCircle } from 'lucide-react';

export const EquipmentSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Equipment' },
    { id: 'Chest & Shoulders', label: 'Chest & Shoulders' },
    { id: 'Full Body Isolation', label: 'Cable & Pulley Stations' },
    { id: 'Cardio & Fat Burn', label: 'Cardio Treadmill Deck' },
    { id: 'Functional & Hypertrophy', label: 'Astro-Turf Zone' },
    { id: 'Strength Training', label: 'Dumbbells & Barbells' },
  ];

  const filteredEquipment =
    activeCategory === 'all'
      ? EQUIPMENT_LIST
      : EQUIPMENT_LIST.filter((eq) => eq.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Dumbbell':
        return <Dumbbell className="w-5 h-5 text-amber-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-emerald-400" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-rose-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-purple-400" />;
      default:
        return <Dumbbell className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="equipment" className="py-20 bg-neutral-900/60 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Machines & Facility
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-wide font-bold text-white mt-1">
              Complete Training <span className="text-amber-400">Equipment</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-2xl mt-2">
              Equipped with commercial plate-loaded frames, Elite Fitness cables, motorized treadmills, and
              our signature green astro-turf functional area.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-300 border border-neutral-700">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full machines for every muscle group</span>
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-amber-500/5"
            >
              {/* Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-900/85 backdrop-blur-md text-[11px] font-semibold text-neutral-300 border border-neutral-700/60">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-1.5 rounded-lg bg-neutral-900 border border-neutral-800">
                      {getIcon(item.iconName)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-900 flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Targets:</span>
                  <span className="font-semibold text-neutral-300 text-right">
                    {item.targetMuscles}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
