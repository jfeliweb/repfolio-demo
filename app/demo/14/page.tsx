'use client';

import { useState, useEffect } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

function useCountdown() {
  const [text, setText] = useState('');

  useEffect(() => {
    function update() {
      const targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 1);
      targetDate.setHours(16, 0, 0, 0);
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setText(`${hours}h ${minutes}m`);
      }
    }
    update();
    const id = setInterval(update, 60000);
    return () => clearInterval(id);
  }, []);

  return text;
}

export default function Demo14() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const countdown = useCountdown();

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-20">
        {/* Drawer overlay */}
        <div
          role="presentation"
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />

        {/* Sidebar drawer */}
        <aside
          className={`fixed top-0 left-0 w-[280px] h-full bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-out ${
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

            <div id="sidebar-player-selector" className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                Select Player
              </h3>
              <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold">
                <option value="sarah-johnson">Sarah Johnson (Age 14)</option>
                <option value="mike-johnson">Mike Johnson (Age 11)</option>
              </select>
            </div>

            <div id="sidebar-quick-stats" className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                This Month
              </h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Sessions
                    </span>
                    <span className="text-fern-600 font-bold text-lg">8</span>
                  </div>
                </div>
                <div className="bg-yellowGreen-500/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Progress Reports
                    </span>
                    <span className="text-yellowGreen-600 font-bold text-lg">
                      3
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div id="sidebar-navigation" className="mb-6">
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

        <main id="main-content" className="min-h-screen pb-20">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RepfolioLogo width={100} height={28} />
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    className="relative w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                    aria-label="Notifications"
                  >
                    <i className="fa-solid fa-bell text-charcoal-900" />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-600 rounded-full" />
                  </button>
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
            </div>
          </header>

          <section
            id="welcome-section"
            className="px-5 pt-5 pb-4 bg-mocha-50"
          >
            <div className="flex items-center justify-between mb-3">
              <div>
                <h1 className="text-charcoal-900 font-bold text-2xl mb-1">
                  Hi Sarah! 👋
                </h1>
                <p className="text-charcoal-700 text-sm">
                  Welcome back to your dashboard
                </p>
              </div>
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover border-2 border-fern-600"
              />
            </div>
          </section>

          <section
            id="player-selector-section"
            className="px-5 pb-4 bg-mocha-50"
          >
            <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
              <label className="text-charcoal-900 font-semibold text-sm mb-2 block">
                Viewing Progress For
              </label>
              <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold">
                <option value="sarah-johnson">Sarah Johnson (Age 14)</option>
                <option value="mike-johnson">Mike Johnson (Age 11)</option>
              </select>
            </div>
          </section>

          <section id="next-session-section" className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Next Session
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c1d431f9dc-8a158dec63cf99f63f3c.png"
                  alt="professional male goalkeeper coach in training gear on soccer field, outdoor training session, athletic pose"
                />
                <div className="absolute top-3 right-3 bg-fern-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  Confirmed
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Coach"
                    className="w-12 h-12 rounded-full object-cover border-2 border-fern-600"
                  />
                  <div className="flex-1">
                    <h3 className="text-charcoal-900 font-bold text-base mb-1">
                      Coach Marcus Thompson
                    </h3>
                    <p className="text-charcoal-700 text-xs">
                      Professional Goalkeeper Coach
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-calendar-days text-fern-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">
                        Tomorrow, Feb 10
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        4:00 PM - 5:00 PM
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-location-dot text-yellowGreen-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">
                        Riverside Sports Complex
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        Field 3, 1250 River Rd
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-clock text-charcoal-900" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">
                        Session starts in
                      </div>
                      <div
                        className="text-charcoal-900 text-xs font-bold tabular-nums"
                        aria-live="polite"
                      >
                        {countdown || '—'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-mocha-100 rounded-lg p-3 mb-4">
                  <div className="text-charcoal-900 font-semibold text-xs mb-1">
                    Focus Areas
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-fern-600/20 text-fern-600 text-xs font-semibold px-2 py-1 rounded">
                      Diving Technique
                    </span>
                    <span className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-semibold px-2 py-1 rounded">
                      Positioning
                    </span>
                    <span className="bg-yellowGreen-500/30 text-charcoal-900 text-xs font-semibold px-2 py-1 rounded">
                      Reaction Speed
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full bg-fern-600 text-white font-bold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-eye" />
                  <span>View Session Details</span>
                </button>
              </div>
            </div>
          </section>

          <section
            id="recent-progress-section"
            className="px-5 pb-4 bg-mocha-50"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Recent Progress
              </h2>
              <button
                type="button"
                className="text-fern-600 text-sm font-semibold"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-trophy text-yellowGreen-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-charcoal-900 font-bold text-base mb-1">
                      Diving Technique Improved
                    </h3>
                    <p className="text-charcoal-700 text-xs mb-2">
                      Feb 7, 2024 • Session #24
                    </p>
                  </div>
                </div>

                <div className="bg-mocha-100 rounded-lg p-3 mb-3">
                  <p className="text-charcoal-900 text-sm leading-relaxed">
                    Sarah showed excellent progress in low diving technique
                    today. Her form has improved significantly, with better
                    body positioning and hand placement. She&apos;s now
                    consistently catching balls that she would have deflected
                    last month.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="Coach"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-charcoal-700 text-xs">
                      Coach Marcus
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-chart-line text-fern-600 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-charcoal-900 font-bold text-base mb-1">
                      Reaction Time Enhancement
                    </h3>
                    <p className="text-charcoal-700 text-xs mb-2">
                      Feb 5, 2024 • Session #23
                    </p>
                  </div>
                </div>

                <div className="bg-mocha-100 rounded-lg p-3 mb-3">
                  <p className="text-charcoal-900 text-sm leading-relaxed">
                    Worked on reaction drills with rapid-fire shots.
                    Sarah&apos;s response time has decreased by 0.3 seconds
                    compared to last month. Her anticipation skills are
                    developing well, reading the striker&apos;s body language
                    more effectively.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="Coach"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-charcoal-700 text-xs">
                      Coach Marcus
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-regular fa-star text-charcoal-700" />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-bullseye text-charcoal-900 text-lg" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-charcoal-900 font-bold text-base mb-1">
                      Positioning Fundamentals
                    </h3>
                    <p className="text-charcoal-700 text-xs mb-2">
                      Feb 3, 2024 • Session #22
                    </p>
                  </div>
                </div>

                <div className="bg-mocha-100 rounded-lg p-3 mb-3">
                  <p className="text-charcoal-900 text-sm leading-relaxed">
                    Focused on proper positioning relative to the goal and ball.
                    Sarah is now maintaining better angles and cutting down
                    shooting space more effectively. Her footwork while
                    adjusting position has become more fluid.
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                      alt="Coach"
                      className="w-7 h-7 rounded-full object-cover"
                    />
                    <span className="text-charcoal-700 text-xs">
                      Coach Marcus
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="upcoming-sessions-section"
            className="px-5 pb-4 bg-mocha-50"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Upcoming Sessions
              </h2>
              <button
                type="button"
                className="text-fern-600 text-sm font-semibold"
              >
                View Calendar
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-fern-600/10 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-fern-600 text-xs font-bold">FEB</div>
                    <div className="text-fern-600 text-xl font-bold">10</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                      Goalkeeper Training
                    </h3>
                    <div className="text-charcoal-700 text-xs mb-1">
                      4:00 PM - 5:00 PM
                    </div>
                    <div className="text-charcoal-700 text-xs">
                      Riverside Sports Complex
                    </div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-yellowGreen-500/10 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-yellowGreen-600 text-xs font-bold">
                      FEB
                    </div>
                    <div className="text-yellowGreen-600 text-xl font-bold">
                      13
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                      Advanced Diving Drills
                    </h3>
                    <div className="text-charcoal-700 text-xs mb-1">
                      4:00 PM - 5:00 PM
                    </div>
                    <div className="text-charcoal-700 text-xs">
                      Riverside Sports Complex
                    </div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700" />
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-yellowGreen-500/20 rounded-xl flex flex-col items-center justify-center flex-shrink-0">
                    <div className="text-charcoal-900 text-xs font-bold">FEB</div>
                    <div className="text-charcoal-900 text-xl font-bold">15</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                      Game Situation Practice
                    </h3>
                    <div className="text-charcoal-700 text-xs mb-1">
                      4:00 PM - 5:00 PM
                    </div>
                    <div className="text-charcoal-700 text-xs">
                      Riverside Sports Complex
                    </div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700" />
                </div>
              </div>
            </div>
          </section>

          <section id="messages-section" className="px-5 pb-4 bg-mocha-50">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <h2 className="text-charcoal-900 font-bold text-lg">
                  Messages
                </h2>
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  2
                </span>
              </div>
              <button
                type="button"
                className="text-fern-600 text-sm font-semibold"
              >
                View All
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-4 border-2 border-fern-600 shadow-sm">
                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Coach"
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-charcoal-900 font-bold text-sm">
                        Coach Marcus
                      </h3>
                      <span className="text-charcoal-700 text-xs">2h ago</span>
                    </div>
                    <p className="text-charcoal-900 text-sm mb-2 line-clamp-2">
                      Hi Sarah! Great work in yesterday&apos;s session. I&apos;ve
                      uploaded a video analysis of your diving technique. Check
                      it out when you have time!
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="bg-fern-600 text-white text-xs font-semibold px-2 py-1 rounded">
                        Unread
                      </span>
                      <span className="text-charcoal-700 text-xs">
                        + 1 attachment
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border-2 border-fern-600 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 bg-yellowGreen-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-bell text-yellowGreen-600 text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-charcoal-900 font-bold text-sm">
                        System Notification
                      </h3>
                      <span className="text-charcoal-700 text-xs">5h ago</span>
                    </div>
                    <p className="text-charcoal-900 text-sm mb-2">
                      Your session package (5 sessions) expires in 30 days.
                      Book your remaining sessions soon!
                    </p>
                    <span className="bg-fern-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      Unread
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm opacity-60">
                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Coach"
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-charcoal-900 font-bold text-sm">
                        Coach Marcus
                      </h3>
                      <span className="text-charcoal-700 text-xs">1d ago</span>
                    </div>
                    <p className="text-charcoal-900 text-sm mb-2 line-clamp-2">
                      Don&apos;t forget to bring your water bottle and gloves
                      for tomorrow&apos;s session. We&apos;ll be doing intense
                      diving drills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="performance-stats-section"
            className="px-5 pb-4 bg-mocha-50"
          >
            <div className="mb-3">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Performance Overview
              </h2>
              <p className="text-charcoal-700 text-xs">Last 30 days</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-calendar-check text-fern-600 text-lg" />
                </div>
                <div className="text-charcoal-700 text-xs mb-1">
                  Sessions Completed
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">
                  8
                </div>
                <div className="text-yellowGreen-600 text-xs font-semibold">
                  +2 vs last month
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-clock text-yellowGreen-600 text-lg" />
                </div>
                <div className="text-charcoal-700 text-xs mb-1">
                  Training Hours
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">
                  8.5
                </div>
                <div className="text-yellowGreen-600 text-xs font-semibold">
                  +2.5 vs last month
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-star text-charcoal-900 text-lg" />
                </div>
                <div className="text-charcoal-700 text-xs mb-1">
                  Avg. Rating
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">
                  4.8
                </div>
                <div className="text-charcoal-900 text-xs font-semibold">
                  Excellent progress
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-trophy text-fern-600 text-lg" />
                </div>
                <div className="text-charcoal-700 text-xs mb-1">
                  Skills Improved
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">
                  12
                </div>
                <div className="text-fern-600 text-xs font-semibold">
                  +4 this month
                </div>
              </div>
            </div>
          </section>

          <section
            id="skill-progress-section"
            className="px-5 pb-4 bg-mocha-50"
          >
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">
                Skill Development
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-900 text-sm font-semibold">
                      Diving Technique
                    </span>
                    <span className="text-fern-600 text-sm font-bold">85%</span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-fern-600 rounded-full"
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-900 text-sm font-semibold">
                      Reaction Speed
                    </span>
                    <span className="text-yellowGreen-600 text-sm font-bold">
                      78%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellowGreen-500 rounded-full"
                      style={{ width: '78%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-900 text-sm font-semibold">
                      Positioning
                    </span>
                    <span className="text-charcoal-900 text-sm font-bold">
                      92%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellowGreen-500 rounded-full"
                      style={{ width: '92%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-900 text-sm font-semibold">
                      Communication
                    </span>
                    <span className="text-fern-600 text-sm font-bold">70%</span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-fern-600 rounded-full"
                      style={{ width: '70%' }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-900 text-sm font-semibold">
                      Distribution
                    </span>
                    <span className="text-yellowGreen-600 text-sm font-bold">
                      81%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellowGreen-500 rounded-full"
                      style={{ width: '81%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="quick-actions-section"
            className="px-5 pb-4 bg-mocha-50"
          >
            <div className="mb-3">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Quick Actions
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left"
              >
                <div className="w-12 h-12 bg-fern-600/10 rounded-xl flex items-center justify-center mb-3">
                  <i className="fa-solid fa-calendar-plus text-fern-600 text-xl" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                  Book Session
                </h3>
                <p className="text-charcoal-700 text-xs">Schedule training</p>
              </button>

              <button
                type="button"
                className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left"
              >
                <div className="w-12 h-12 bg-yellowGreen-500/10 rounded-xl flex items-center justify-center mb-3">
                  <i className="fa-solid fa-comment text-yellowGreen-600 text-xl" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                  Message Coach
                </h3>
                <p className="text-charcoal-700 text-xs">Send message</p>
              </button>

              <button
                type="button"
                className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left"
              >
                <div className="w-12 h-12 bg-yellowGreen-500/20 rounded-xl flex items-center justify-center mb-3">
                  <i className="fa-solid fa-file-invoice text-charcoal-900 text-xl" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                  View Invoices
                </h3>
                <p className="text-charcoal-700 text-xs">Payment history</p>
              </button>

              <button
                type="button"
                className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left"
              >
                <div className="w-12 h-12 bg-fern-600/10 rounded-xl flex items-center justify-center mb-3">
                  <i className="fa-solid fa-video text-fern-600 text-xl" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                  Training Videos
                </h3>
                <p className="text-charcoal-700 text-xs">Watch replays</p>
              </button>
            </div>
          </section>

          <section
            id="package-info-section"
            className="px-5 pb-4 bg-mocha-50"
          >
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-fern-600/10 rounded-xl flex items-center justify-center">
                  <i className="fa-solid fa-box text-fern-600 text-xl" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base">
                    Current Package
                  </h3>
                  <p className="text-charcoal-700 text-xs">10-Session Pack</p>
                </div>
              </div>

              <div className="bg-mocha-100 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-charcoal-900 text-sm font-semibold">
                    Sessions Remaining
                  </span>
                  <span className="text-fern-600 text-lg font-bold">2 / 10</span>
                </div>
                <div className="w-full h-2 bg-mocha-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-fern-600 rounded-full"
                    style={{ width: '80%' }}
                  />
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-xs">
                    Package Expires
                  </span>
                  <span className="text-charcoal-900 text-xs font-semibold">
                    Mar 15, 2024
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-xs">
                    Days Remaining
                  </span>
                  <span className="text-charcoal-900 text-xs font-bold">
                    30 days
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-fern-600 text-white font-bold py-3 px-4 rounded-xl text-sm"
              >
                Renew Package
              </button>
            </div>
          </section>

          <section
            id="achievements-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="mb-3">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Recent Achievements
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-center">
                <div className="w-14 h-14 bg-yellowGreen-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-medal text-charcoal-900 text-2xl" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-xs mb-1">
                  5 Sessions
                </h4>
                <p className="text-charcoal-700 text-[10px]">Completed</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-center">
                <div className="w-14 h-14 bg-yellowGreen-500/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-fire text-yellowGreen-600 text-2xl" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-xs mb-1">
                  7 Day Streak
                </h4>
                <p className="text-charcoal-700 text-[10px]">Training</p>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-center">
                <div className="w-14 h-14 bg-fern-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <i className="fa-solid fa-star text-fern-600 text-2xl" />
                </div>
                <h4 className="text-charcoal-900 font-bold text-xs mb-1">
                  Top Rated
                </h4>
                <p className="text-charcoal-700 text-[10px]">This Month</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-mocha-200 px-5 py-3 z-30">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="flex flex-col items-center gap-1 text-fern-600"
            >
              <i className="fa-solid fa-house text-lg" />
              <span className="text-xs font-semibold">Home</span>
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
              className="flex flex-col items-center gap-1 text-charcoal-700"
            >
              <i className="fa-solid fa-chart-line text-lg" />
              <span className="text-xs">Progress</span>
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
