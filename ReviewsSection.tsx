import React, { useState } from 'react';
import { REVIEWS_DATA, REVIEW_TAGS, GYM_DETAILS } from '../data/gymData';
import { Star, MessageSquare, ExternalLink, ThumbsUp, CheckCircle, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const filteredReviews =
    selectedTag === 'all'
      ? REVIEWS_DATA
      : REVIEWS_DATA.filter((r) =>
          r.tags.some(
            (t) =>
              t.toLowerCase().includes(selectedTag.toLowerCase()) ||
              (selectedTag === 'fees' && t.includes('fees')) ||
              (selectedTag === 'trainer' && (t.includes('trainer') || t.includes('coach')))
          )
        );

  return (
    <section id="reviews" className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-amber-400 text-xs uppercase tracking-widest font-bold">
              Google Maps Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-wide font-bold text-white mt-1">
              Member <span className="text-amber-400">Reviews & Ratings</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mt-2">
              Authentic feedback from real members on Google Maps who train every day at Delhi gay gym in Durga Vihar.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <a
              id="google-maps-add-review-btn"
              href={GYM_DETAILS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md active:scale-95"
            >
              <Star className="w-4 h-4 fill-neutral-950" />
              <span>Write a Review on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Rating Breakdown Card matching Google Maps layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Summary Box */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-900/90 border border-neutral-800 p-6 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-5">
                <div>
                  <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold">
                    Google Maps Rating
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Delhi gay gym
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/20">
                  Verified Local Business
                </span>
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-display font-extrabold text-white leading-none">
                    4.5
                  </div>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < 4 ? 'fill-amber-400 text-amber-400' : 'fill-amber-400/50 text-amber-400'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-xs text-neutral-400 mt-1 font-medium">
                    105 Google Reviews
                  </div>
                </div>

                {/* Rating bars */}
                <div className="flex-1 space-y-1.5 text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3">5</span>
                    <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[78%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3">4</span>
                    <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[14%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3">3</span>
                    <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[4%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3">2</span>
                    <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[2%]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3">1</span>
                    <div className="flex-1 h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <div className="h-full bg-amber-400 rounded-full w-[2%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick snippet highlights from screenshot */}
            <div className="space-y-2 pt-4 border-t border-neutral-800 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>"... Experienced trainers." — 5 verified mentions</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>"All machines available for all kind of exercise."</span>
              </div>
              <div className="flex items-center gap-2 text-neutral-300">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span>"Pocket friendly fees & certified coach."</span>
              </div>
            </div>
          </div>

          {/* Tags Filter & Mentions from Google Maps */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-3">
                Filter by Member Topics (Google Mentions)
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {REVIEW_TAGS.map((tag) => (
                  <button
                    key={tag.key}
                    onClick={() => setSelectedTag(tag.key)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                      selectedTag === tag.key
                        ? 'bg-amber-400 text-neutral-950 font-bold shadow'
                        : 'bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800'
                    }`}
                  >
                    <span>{tag.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        selectedTag === tag.key
                          ? 'bg-neutral-950 text-amber-400'
                          : 'bg-neutral-800 text-neutral-400'
                      }`}
                    >
                      {tag.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="text-xs text-neutral-300">
                  Read all reviews directly on Google Maps or contribute your own workout feedback.
                </span>
              </div>
              <a
                href={GYM_DETAILS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-amber-400 hover:underline flex items-center gap-1 flex-shrink-0 ml-2"
              >
                <span>View Google Profile</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-2xl bg-neutral-900/70 border border-neutral-800/90 p-6 flex flex-col justify-between hover:border-neutral-700 transition-all shadow-md"
            >
              <div>
                {/* Author Info */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${rev.avatarBg} text-white font-bold flex items-center justify-center text-sm shadow`}
                    >
                      {rev.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{rev.author}</span>
                      </h4>
                      <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                        {rev.isLocalGuide && (
                          <span className="text-amber-400 font-medium">Local Guide</span>
                        )}
                        {rev.reviewsCount && <span>• {rev.reviewsCount} reviews</span>}
                        <span>• {rev.timeAgo}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < rev.rating
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-neutral-700 text-neutral-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-4">
                  "{rev.text}"
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-800/80">
                {rev.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
