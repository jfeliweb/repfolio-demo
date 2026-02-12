'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

const PLOTLY_SCRIPT = 'https://cdn.plot.ly/plotly-3.1.1.min.js';
const FERN_600 = 'rgb(70, 134, 87)';
const MOCHA_200 = 'rgb(209, 199, 200)';

function ProgressChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const loadPlotly = (): Promise<{
      newPlot: (
        el: HTMLElement,
        data: unknown[],
        layout: unknown,
        config: unknown
      ) => void;
      purge?: (el: HTMLElement) => void;
    }> => {
      return new Promise((resolve, reject) => {
        const win =
          typeof window !== 'undefined'
            ? (window as unknown as { Plotly?: { newPlot: unknown; purge?: unknown } })
            : null;
        if (win?.Plotly) {
          resolve(
            win.Plotly as {
              newPlot: (
                el: HTMLElement,
                data: unknown[],
                layout: unknown,
                config: unknown
              ) => void;
              purge?: (el: HTMLElement) => void;
            }
          );
          return;
        }
        const script = document.createElement('script');
        script.src = PLOTLY_SCRIPT;
        script.async = true;
        script.onload = () =>
          resolve(
            (
              window as unknown as {
                Plotly: {
                  newPlot: (
                    el: HTMLElement,
                    data: unknown[],
                    layout: unknown,
                    config: unknown
                  ) => void;
                  purge?: (el: HTMLElement) => void;
                };
              }
            ).Plotly
          );
        script.onerror = () => reject(new Error('Failed to load Plotly'));
        document.head.appendChild(script);
      });
    };

    loadPlotly()
      .then((Plotly) => {
        Plotly.newPlot(
          container,
          [
            {
              type: 'scatter',
              mode: 'lines',
              name: 'Overall Rating',
              x: [
                'Nov 9',
                'Nov 23',
                'Dec 7',
                'Dec 21',
                'Jan 4',
                'Jan 18',
                'Feb 1',
                'Feb 9',
              ],
              y: [3.2, 3.4, 3.6, 3.8, 3.7, 4.0, 4.2, 4.3],
              line: { color: FERN_600, width: 3 },
              fill: 'tozeroy',
              fillcolor: 'rgba(70, 134, 87, 0.1)',
            },
          ],
          {
            title: { text: '', font: { size: 0 } },
            xaxis: { title: '', gridcolor: MOCHA_200 },
            yaxis: {
              title: 'Rating',
              range: [0, 5],
              gridcolor: MOCHA_200,
            },
            margin: { t: 20, r: 20, b: 40, l: 50 },
            plot_bgcolor: '#ffffff',
            paper_bgcolor: '#ffffff',
            showlegend: false,
          },
          {
            responsive: true,
            displayModeBar: false,
            displaylogo: false,
          }
        );
      })
      .catch(() => {
        if (container) {
          container.innerHTML =
            '<div class="flex items-center justify-center h-full text-charcoal-700 text-sm">Chart unavailable</div>';
        }
      });

    return () => {
      try {
        if (
          container &&
          typeof (window as unknown as { Plotly?: { purge: (el: HTMLElement) => void } })
            .Plotly?.purge === 'function'
        ) {
          (
            window as unknown as { Plotly: { purge: (el: HTMLElement) => void } }
          ).Plotly.purge(container);
        }
      } catch {
        // ignore
      }
    };
  }, []);

  return <div ref={containerRef} className="h-[300px]" />;
}

export default function Demo17() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-24">
        {/* Drawer overlay - z-50 so same as aside; pointer-events-none when closed */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
          className={`fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Sidebar drawer - use transform (like demo 8) so closed sidebar doesn't block hamburger */}
        <aside
          className={`fixed top-0 left-0 w-[280px] h-full bg-white shadow-2xl z-50 overflow-y-auto transform transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-fern-600 rounded-xl flex items-center justify-center shadow-sm">
                  <i className="fa-solid fa-shield-halved text-white text-lg" />
                </div>
                <RepfolioLogo width={100} height={28} />
              </div>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="w-9 h-9 bg-mocha-100 rounded-lg flex items-center justify-center"
                aria-label="Close menu"
              >
                <i className="fa-solid fa-times text-charcoal-900" />
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                Select Player
              </h3>
              <select className="w-full bg-mocha-50 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold">
                <option value="sarah-johnson">Sarah Johnson (Age 14)</option>
                <option value="mike-johnson">Mike Johnson (Age 11)</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                This Month
              </h3>
              <div className="space-y-2">
                <div className="bg-fern-50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Sessions
                    </span>
                    <span className="text-fern-600 font-bold text-lg">8</span>
                  </div>
                </div>
                <div className="bg-fern-100 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Progress Reports
                    </span>
                    <span className="text-brightFern-600 font-bold text-lg">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                Quick Links
              </h3>
              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">
                    Schedule
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <i className="fa-solid fa-chart-line text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">
                    Progress
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <i className="fa-solid fa-message text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">
                    Messages
                  </span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <i className="fa-solid fa-credit-card text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">
                    Payments
                  </span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main id="main-content" className="min-h-screen">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </button>
                <h1 className="text-charcoal-900 font-bold text-base">
                  Progress Dashboard
                </h1>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Menu"
                >
                  <i className="fa-solid fa-bars text-charcoal-900" />
                </button>
              </div>
            </div>
          </header>

          <section className="px-5 pt-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
              <label className="text-charcoal-900 font-bold text-sm mb-2 block">
                Select Player
              </label>
              <select
                id="player-select"
                className="w-full bg-mocha-50 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold"
              >
                <option value="sarah-johnson">Sarah Johnson (Age 14)</option>
                <option value="mike-johnson">Mike Johnson (Age 11)</option>
              </select>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
              <label className="text-charcoal-900 font-bold text-sm mb-2 block">
                Date Range
              </label>
              <div className="grid grid-cols-2 gap-3">
                <select className="bg-mocha-50 border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-xs font-semibold">
                  <option value="last-3-months">Last 3 Months</option>
                  <option value="last-6-months">Last 6 Months</option>
                  <option value="last-year">Last Year</option>
                  <option value="all-time">All Time</option>
                </select>
                <button
                  type="button"
                  className="bg-fern-600 text-white font-bold text-xs py-2 px-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-calendar-alt" />
                  <span>Custom Range</span>
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">
                Skills Overview
              </h3>
              <p className="text-charcoal-700 text-xs">
                Current performance ratings
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-hands text-fern-600 text-lg" />
                  </div>
                  <i className="fa-solid fa-arrow-up text-brightFern-600 text-lg" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">
                  Shot Stopping
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                </div>
                <button
                  type="button"
                  className="text-fern-600 text-xs font-semibold flex items-center gap-1"
                >
                  <span>See Details</span>
                  <i className="fa-solid fa-chevron-right text-xs" />
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-fern-100 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-futbol text-brightFern-600 text-lg" />
                  </div>
                  <i className="fa-solid fa-arrow-up text-brightFern-600 text-lg" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">
                  Distribution
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                </div>
                <button
                  type="button"
                  className="text-fern-600 text-xs font-semibold flex items-center gap-1"
                >
                  <span>See Details</span>
                  <i className="fa-solid fa-chevron-right text-xs" />
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-person-running text-charcoal-900 text-lg" />
                  </div>
                  <i className="fa-solid fa-minus text-charcoal-700 text-lg" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">
                  Positioning
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                </div>
                <button
                  type="button"
                  className="text-fern-600 text-xs font-semibold flex items-center gap-1"
                >
                  <span>See Details</span>
                  <i className="fa-solid fa-chevron-right text-xs" />
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-brain text-fern-600 text-lg" />
                  </div>
                  <i className="fa-solid fa-arrow-up text-brightFern-600 text-lg" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">
                  Decision Making
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                </div>
                <button
                  type="button"
                  className="text-fern-600 text-xs font-semibold flex items-center gap-1"
                >
                  <span>See Details</span>
                  <i className="fa-solid fa-chevron-right text-xs" />
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-fern-100 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-dumbbell text-brightFern-600 text-lg" />
                  </div>
                  <i className="fa-solid fa-arrow-down text-red-500 text-lg" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">
                  Agility
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                  <i className="fa-regular fa-star text-charcoal-700 text-sm" />
                </div>
                <button
                  type="button"
                  className="text-fern-600 text-xs font-semibold flex items-center gap-1"
                >
                  <span>See Details</span>
                  <i className="fa-solid fa-chevron-right text-xs" />
                </button>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-comments text-charcoal-900 text-lg" />
                  </div>
                  <i className="fa-solid fa-arrow-up text-brightFern-600 text-lg" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">
                  Communication
                </h4>
                <div className="flex items-center gap-1 mb-2">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                </div>
                <button
                  type="button"
                  className="text-fern-600 text-xs font-semibold flex items-center gap-1"
                >
                  <span>See Details</span>
                  <i className="fa-solid fa-chevron-right text-xs" />
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">
                Overall Progress
              </h3>
              <p className="text-charcoal-700 text-xs">Last 3 months trend</p>
            </div>

            <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
              <ProgressChart />
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">
                Recent Achievements
              </h3>
              <p className="text-charcoal-700 text-xs">Milestones unlocked</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gradient-to-br from-yellowGreen-500/20 to-yellowGreen-500/5 rounded-2xl p-4 border border-yellowGreen-500/30 shadow-sm text-center">
                <div className="w-12 h-12 bg-yellowGreen-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-medal text-charcoal-900 text-xl" />
                </div>
                <div className="text-charcoal-900 font-bold text-xs mb-1">
                  Perfect Week
                </div>
                <div className="text-charcoal-700 text-xs">5 sessions</div>
              </div>

              <div className="bg-gradient-to-br from-fern-600/20 to-fern-600/5 rounded-2xl p-4 border border-fern-600/30 shadow-sm text-center">
                <div className="w-12 h-12 bg-fern-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-star text-white text-xl" />
                </div>
                <div className="text-charcoal-900 font-bold text-xs mb-1">
                  Star Player
                </div>
                <div className="text-charcoal-700 text-xs">Top rated</div>
              </div>

              <div className="bg-gradient-to-br from-brightFern-600/20 to-brightFern-600/5 rounded-2xl p-4 border border-brightFern-600/30 shadow-sm text-center">
                <div className="w-12 h-12 bg-brightFern-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-fire text-white text-xl" />
                </div>
                <div className="text-charcoal-900 font-bold text-xs mb-1">
                  On Fire
                </div>
                <div className="text-charcoal-700 text-xs">10 day streak</div>
              </div>

              <div className="bg-gradient-to-br from-yellowGreen-500/20 to-yellowGreen-500/5 rounded-2xl p-4 border border-yellowGreen-500/30 shadow-sm text-center">
                <div className="w-12 h-12 bg-yellowGreen-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-trophy text-charcoal-900 text-xl" />
                </div>
                <div className="text-charcoal-900 font-bold text-xs mb-1">
                  Champion
                </div>
                <div className="text-charcoal-700 text-xs">25 sessions</div>
              </div>

              <div className="bg-gradient-to-br from-fern-600/20 to-fern-600/5 rounded-2xl p-4 border border-fern-600/30 shadow-sm text-center">
                <div className="w-12 h-12 bg-fern-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-rocket text-white text-xl" />
                </div>
                <div className="text-charcoal-900 font-bold text-xs mb-1">
                  Fast Learner
                </div>
                <div className="text-charcoal-700 text-xs">Quick progress</div>
              </div>

              <div className="bg-gradient-to-br from-brightFern-600/20 to-brightFern-600/5 rounded-2xl p-4 border border-brightFern-600/30 shadow-sm text-center">
                <div className="w-12 h-12 bg-brightFern-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-heart text-white text-xl" />
                </div>
                <div className="text-charcoal-900 font-bold text-xs mb-1">
                  Dedicated
                </div>
                <div className="text-charcoal-700 text-xs">Never missed</div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">
                Latest Session Notes
              </h3>
              <p className="text-charcoal-700 text-xs">Recent coach feedback</p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Coach"
                    className="w-10 h-10 rounded-full object-cover border-2 border-fern-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm mb-1">
                      Coach Marcus Thompson
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      <i className="fa-solid fa-calendar text-charcoal-700" />
                      <span className="text-charcoal-700">Feb 5, 2024</span>
                    </div>
                  </div>
                </div>
                <p className="text-charcoal-900 text-xs leading-relaxed mb-3">
                  Excellent progress on shot stopping technique. Sarah showed
                  great improvement in diving form and reaction time. Focus on
                  footwork positioning for next session.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-fern-100 text-brightFern-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Shot Stopping
                  </span>
                  <span className="bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Diving
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                    alt="Coach"
                    className="w-10 h-10 rounded-full object-cover border-2 border-brightFern-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm mb-1">
                      Coach David Chen
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      <i className="fa-solid fa-calendar text-charcoal-700" />
                      <span className="text-charcoal-700">Feb 1, 2024</span>
                    </div>
                  </div>
                </div>
                <p className="text-charcoal-900 text-xs leading-relaxed mb-3">
                  Great session today! Distribution skills are really coming
                  along. Accurate throws and kicks under pressure. Keep working
                  on communication with defenders.
                </p>
                <div className="flex items-center gap-2">
                  <span className="bg-yellowGreen-500/20 text-charcoal-900 text-xs font-semibold px-3 py-1 rounded-full">
                    Distribution
                  </span>
                  <span className="bg-fern-100 text-brightFern-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Communication
                  </span>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-mocha-200 px-5 py-3 z-30">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-charcoal-700"
            >
              <i className="fa-solid fa-house text-lg" />
              <span className="text-xs">Home</span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-charcoal-700"
            >
              <i className="fa-solid fa-calendar-days text-lg" />
              <span className="text-xs">Schedule</span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-fern-600"
            >
              <i className="fa-solid fa-chart-line text-lg" />
              <span className="text-xs font-semibold">Progress</span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-charcoal-700"
            >
              <i className="fa-solid fa-user text-lg" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </footer>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
