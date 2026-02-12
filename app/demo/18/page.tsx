'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo18() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-900 pb-24">
        {/* Drawer overlay */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
          className={`fixed inset-0 bg-charcoal-900/50 z-40 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden
        />

        {/* Sidebar drawer */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 transition-transform duration-300 overflow-y-auto ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
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
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Select Player</h3>
              <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold">
                <option value="sarah-johnson">Sarah Johnson (Age 14)</option>
                <option value="mike-johnson">Mike Johnson (Age 11)</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">This Month</h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Sessions</span>
                    <span className="text-fern-600 font-bold text-lg">8</span>
                  </div>
                </div>
                <div className="bg-brightFern-400/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Progress Reports</span>
                    <span className="text-brightFern-600 font-bold text-lg">3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Quick Links</h3>
              <div className="space-y-2">
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Schedule</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-chart-line text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Progress</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-message text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Messages</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-credit-card text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Payments</span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-h-screen">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Go back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </button>
                <h1 className="text-charcoal-900 font-bold text-base">Progress History</h1>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Open menu"
                >
                  <i className="fa-solid fa-bars text-charcoal-900" />
                </button>
              </div>
            </div>
          </header>

          <section className="px-5 pt-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
              <label className="text-charcoal-900 font-bold text-sm mb-2 block">Select Player</label>
              <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold">
                <option value="sarah-johnson">Sarah Johnson (Age 14)</option>
                <option value="mike-johnson">Mike Johnson (Age 11)</option>
              </select>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search sessions, trainers, notes..."
                    className="w-full bg-mocha-100 border border-mocha-200 rounded-lg pl-11 pr-4 py-3 text-charcoal-900 text-sm font-medium placeholder:text-charcoal-700 focus:outline-none focus:ring-2 focus:ring-fern-600"
                  />
                  <i className="fa-solid fa-search text-charcoal-700 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="mb-3">
                <label className="text-charcoal-900 font-bold text-xs mb-2 block">Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    className="bg-mocha-100 border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-xs font-semibold"
                  />
                  <input
                    type="date"
                    className="bg-mocha-100 border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-xs font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="text-charcoal-900 font-bold text-xs mb-2 block">Skill Category</label>
                <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-xs font-semibold">
                  <option value="all">All Skills</option>
                  <option value="shot-stopping">Shot Stopping</option>
                  <option value="distribution">Distribution</option>
                  <option value="positioning">Positioning</option>
                  <option value="decision-making">Decision Making</option>
                  <option value="agility">Agility</option>
                  <option value="communication">Communication</option>
                </select>
              </div>
            </div>
          </section>

          <section className="px-5 pb-3 bg-mocha-50">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-charcoal-900 font-bold text-base">Session Timeline</h3>
                <p className="text-charcoal-700 text-xs">47 total sessions</p>
              </div>
              <button type="button" className="text-fern-600 text-xs font-semibold flex items-center gap-1">
                <span>View All</span>
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50 relative">
            {/* Timeline line */}
            <div
              className="absolute left-[19px] top-12 bottom-0 w-0.5 bg-mocha-200"
              style={{ bottom: '-24px' }}
              aria-hidden
            />

            {/* Timeline entry 1 - primary */}
            <div className="relative pl-[52px] mb-6">
              <div className="absolute left-3 top-0 w-4 h-4 rounded-full bg-white border-[3px] border-fern-600 z-[2]" />
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Coach"
                    className="w-12 h-12 rounded-full object-cover border-2 border-fern-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm">Coach Marcus Thompson</h4>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <i className="fa-solid fa-calendar text-charcoal-700" />
                      <span className="text-charcoal-700">Feb 9, 2024</span>
                      <span className="text-charcoal-700">•</span>
                      <span className="text-fern-600 font-semibold">Session #47</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Skill Updates</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Shot Stopping</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Diving Technique</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Session Notes</h5>
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Outstanding session today! Sarah&apos;s diving form has improved dramatically. She&apos;s now consistently landing properly and recovering quickly. Her reaction time to low shots is exceptional.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Key Achievements</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brightFern-400/10 text-brightFern-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-trophy" />
                      <span>Perfect diving form</span>
                    </span>
                    <span className="bg-fern-600/10 text-fern-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-star" />
                      <span>Quick recovery</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Next Session Focus</h5>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Continue refining diving technique. Introduce advanced positioning drills for crosses and corner kicks.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline entry 2 - secondary */}
            <div className="relative pl-[52px] mb-6">
              <div className="absolute left-3 top-0 w-4 h-4 rounded-full bg-white border-[3px] border-brightFern-600 z-[2]" />
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                    alt="Coach"
                    className="w-12 h-12 rounded-full object-cover border-2 border-brightFern-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm">Coach David Chen</h4>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <i className="fa-solid fa-calendar text-charcoal-700" />
                      <span className="text-charcoal-700">Feb 5, 2024</span>
                      <span className="text-charcoal-700">•</span>
                      <span className="text-brightFern-600 font-semibold">Session #46</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Skill Updates</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Distribution</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Communication</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Session Notes</h5>
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Fantastic progress on distribution! Sarah&apos;s throws are now reaching 30+ yards with accuracy. Her decision-making on when to throw vs kick has improved significantly.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Key Achievements</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-yellowGreen-500/20 text-charcoal-900 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-bullseye" />
                      <span>Accurate long throws</span>
                    </span>
                    <span className="bg-fern-600/10 text-fern-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-comments" />
                      <span>Clear communication</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Next Session Focus</h5>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Work on distribution under pressure. Practice quick releases and decision-making with approaching forwards.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline entry 3 - accent */}
            <div className="relative pl-[52px] mb-6">
              <div className="absolute left-3 top-0 w-4 h-4 rounded-full bg-white border-[3px] border-yellowGreen-500 z-[2]" />
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="Coach"
                    className="w-12 h-12 rounded-full object-cover border-2 border-yellowGreen-500 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm">Coach Sarah Martinez</h4>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <i className="fa-solid fa-calendar text-charcoal-700" />
                      <span className="text-charcoal-700">Feb 1, 2024</span>
                      <span className="text-charcoal-700">•</span>
                      <span className="text-charcoal-900 font-semibold">Session #45</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Skill Updates</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Decision Making</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Positioning</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Session Notes</h5>
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Excellent mental preparation today. Sarah showed remarkable improvement in reading the game and making split-second decisions. Her positioning awareness during set pieces was outstanding.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Key Achievements</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-fern-600/10 text-fern-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-brain" />
                      <span>Smart decisions</span>
                    </span>
                    <span className="bg-brightFern-400/10 text-brightFern-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-eye" />
                      <span>Better anticipation</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Next Session Focus</h5>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Continue mental game development. Work on staying calm under high-pressure situations.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline entry 4 - primary */}
            <div className="relative pl-[52px] mb-6">
              <div className="absolute left-3 top-0 w-4 h-4 rounded-full bg-white border-[3px] border-fern-600 z-[2]" />
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                    alt="Coach"
                    className="w-12 h-12 rounded-full object-cover border-2 border-fern-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm">Coach James Wilson</h4>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <i className="fa-solid fa-calendar text-charcoal-700" />
                      <span className="text-charcoal-700">Jan 28, 2024</span>
                      <span className="text-charcoal-700">•</span>
                      <span className="text-fern-600 font-semibold">Session #44</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Skill Updates</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Agility</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-minus text-charcoal-700 text-[10px]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Footwork</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Session Notes</h5>
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Good session focusing on agility drills. Sarah&apos;s lateral movement speed has improved. We worked on quick directional changes and reaction drills.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Key Achievements</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-brightFern-400/10 text-brightFern-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-running" />
                      <span>Faster movements</span>
                    </span>
                    <span className="bg-yellowGreen-500/20 text-charcoal-900 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-shoe-prints" />
                      <span>Better footwork</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Next Session Focus</h5>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Increase intensity of agility drills. Add plyometric exercises to enhance explosive power.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline entry 5 - secondary */}
            <div className="relative pl-[52px] mb-6">
              <div className="absolute left-3 top-0 w-4 h-4 rounded-full bg-white border-[3px] border-brightFern-600 z-[2]" />
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Coach"
                    className="w-12 h-12 rounded-full object-cover border-2 border-brightFern-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm">Coach Emily Roberts</h4>
                    <div className="flex items-center gap-2 text-xs mt-1">
                      <i className="fa-solid fa-calendar text-charcoal-700" />
                      <span className="text-charcoal-700">Jan 24, 2024</span>
                      <span className="text-charcoal-700">•</span>
                      <span className="text-brightFern-600 font-semibold">Session #43</span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Skill Updates</h5>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Shot Stopping</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-minus text-charcoal-700 text-[10px]" />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-charcoal-900 text-xs font-medium">Reflexes</span>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-solid fa-star text-charcoal-700 text-[10px]" />
                          <i className="fa-regular fa-star text-charcoal-700 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-right text-charcoal-700 text-[10px]" />
                        <div className="flex items-center gap-0.5">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-[10px]" />
                        </div>
                        <i className="fa-solid fa-arrow-up text-brightFern-600 text-[10px]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Session Notes</h5>
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Phenomenal reflexes today! Sarah made several incredible saves during rapid-fire drills. Her hand-eye coordination is exceptional.
                  </p>
                </div>

                <div className="mb-3">
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Key Achievements</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-fern-600/10 text-fern-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-bolt" />
                      <span>Lightning reflexes</span>
                    </span>
                    <span className="bg-yellowGreen-500/20 text-charcoal-900 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                      <i className="fa-solid fa-hand" />
                      <span>Perfect saves</span>
                    </span>
                  </div>
                </div>

                <div>
                  <h5 className="text-charcoal-900 font-bold text-xs mb-2">Next Session Focus</h5>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Maintain reflex training intensity. Combine reflexes with positioning drills.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <button
              type="button"
              className="w-full bg-fern-600 text-white rounded-2xl py-4 font-bold text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-arrow-down" />
              <span>Load More Sessions</span>
            </button>
          </section>
        </main>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
