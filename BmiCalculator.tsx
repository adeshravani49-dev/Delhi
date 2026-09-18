import React, { useState } from 'react';
import { Calculator, Sparkles, Dumbbell, Activity, Check } from 'lucide-react';

export const BmiCalculator: React.FC = () => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [heightCm, setHeightCm] = useState<number>(172);
  const [weightKg, setWeightKg] = useState<number>(72);
  const [goal, setGoal] = useState<'muscle' | 'fatloss' | 'maintenance'>('muscle');

  // Calculate BMI: weight / (height/100)^2
  const heightM = heightCm / 100;
  const bmi = parseFloat((weightKg / (heightM * heightM)).toFixed(1));

  let bmiCategory = 'Normal Weight';
  let badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    badgeColor = 'text-blue-400 bg-blue-500/10 border-blue-500/20';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    bmiCategory = 'Normal / Healthy';
    badgeColor = 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
    badgeColor = 'text-amber-400 bg-amber-500/10 border-amber-500/20';
  } else {
    bmiCategory = 'Obesity Class';
    badgeColor = 'text-rose-400 bg-rose-500/10 border-rose-500/20';
  }

  // Protein requirement estimation based on weight and goal
  const proteinMultiplier = goal === 'muscle' ? 1.8 : goal === 'fatloss' ? 2.0 : 1.4;
  const dailyProteinGrams = Math.round(weightKg * proteinMultiplier);

  // Daily estimated calories
  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * 26 + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * 26 - 161;
  const activityMultiplier = 1.4; // gym workout 4-5x a week
  const maintenanceCalories = Math.round(bmr * activityMultiplier);
  const targetCalories =
    goal === 'muscle'
      ? maintenanceCalories + 300
      : goal === 'fatloss'
      ? maintenanceCalories - 400
      : maintenanceCalories;

  return (
    <section id="calculator" className="py-20 bg-neutral-900/50 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
            Fitness Tools
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-wide font-bold text-white mt-1">
            Free BMI & <span className="text-amber-400">Diet Targets Calculator</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Calculate your current body mass index, daily protein targets, and calorie blueprint to plan
            your workouts at Delhi gay gym.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <div className="lg:col-span-6 rounded-2xl bg-neutral-950 border border-neutral-800 p-6 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-amber-400" />
              <span>Enter Your Body Parameters</span>
            </h3>

            {/* Gender Toggle */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Gender
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    gender === 'male'
                      ? 'bg-amber-400 text-neutral-950 shadow'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                    gender === 'female'
                      ? 'bg-amber-400 text-neutral-950 shadow'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Height Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Height: {heightCm} cm ({Math.floor(heightCm / 30.48)}' {Math.round((heightCm % 30.48) / 2.54)}")
                </label>
              </div>
              <input
                type="range"
                min="130"
                max="210"
                value={heightCm}
                onChange={(e) => setHeightCm(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>130 cm</span>
                <span>170 cm</span>
                <span>210 cm</span>
              </div>
            </div>

            {/* Weight Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Weight: {weightKg} kg ({Math.round(weightKg * 2.205)} lbs)
                </label>
              </div>
              <input
                type="range"
                min="40"
                max="140"
                value={weightKg}
                onChange={(e) => setWeightKg(Number(e.target.value))}
                className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 mt-1">
                <span>40 kg</span>
                <span>75 kg</span>
                <span>140 kg</span>
              </div>
            </div>

            {/* Fitness Goal */}
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Primary Workout Goal
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setGoal('muscle')}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                    goal === 'muscle'
                      ? 'bg-amber-400 text-neutral-950 shadow'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Muscle Gain
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('fatloss')}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                    goal === 'fatloss'
                      ? 'bg-amber-400 text-neutral-950 shadow'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Fat Loss
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('maintenance')}
                  className={`p-2.5 rounded-xl text-xs font-bold text-center transition-all ${
                    goal === 'maintenance'
                      ? 'bg-amber-400 text-neutral-950 shadow'
                      : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  Maintenance
                </button>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl bg-neutral-950 border border-neutral-800 p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    Calculated Result
                  </div>
                  <h4 className="text-lg font-bold text-white">Your Body Metrics</h4>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold border ${badgeColor}`}>
                  {bmiCategory}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {bmi}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">BMI Score</div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-amber-400">
                    {dailyProteinGrams}g
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Daily Protein</div>
                </div>

                <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
                    {targetCalories}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">Target Kcal/Day</div>
                </div>
              </div>

              {/* Indian Diet Protein Recommendations */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-amber-400 mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Trainer Recommended Protein Sources (Indian Diet)</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-neutral-300">
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="font-bold text-white">100g Paneer</span>
                    <span className="block text-[10px] text-amber-400">~18g Protein</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="font-bold text-white">50g Soya Chunks</span>
                    <span className="block text-[10px] text-amber-400">~26g Protein</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="font-bold text-white">4 Whole Eggs</span>
                    <span className="block text-[10px] text-amber-400">~24g Protein</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="font-bold text-white">100g Chicken</span>
                    <span className="block text-[10px] text-amber-400">~31g Protein</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="font-bold text-white">1 Scoop Whey</span>
                    <span className="block text-[10px] text-amber-400">~24g Protein</span>
                  </div>
                  <div className="p-2 rounded-lg bg-neutral-950 border border-neutral-800">
                    <span className="font-bold text-white">100g Sprouts / Daal</span>
                    <span className="block text-[10px] text-amber-400">~12g Protein</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span>Want a personalized workout plan?</span>
                <span className="text-amber-400 font-semibold">Consult coach at gym reception</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
