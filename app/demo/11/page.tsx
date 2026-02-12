'use client';

import { useState } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';
import { SkillProgressionChart } from '@/components/SkillProgressionChart';

type TabId = 'overview' | 'progress' | 'schedule' | 'payments';

export default function Demo11() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>('overview');

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans overflow-x-hidden">
        {/* Mobile sidebar overlay */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
          className={`fixed inset-0 z-40 transition-opacity ${sidebarOpen ? 'bg-charcoal-900/60 opacity-100' : 'pointer-events-none opacity-0'}`}
          aria-hidden="true"
        />

        {/* Mobile sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 shadow-lg overflow-y-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="p-4 border-b border-mocha-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-dumbbell text-white text-lg" />
              </div>
              <RepfolioLogo width={100} height={28} />
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-charcoal-700 hover:text-charcoal-900"
              aria-label="Close menu"
            >
              <i className="fa-solid fa-xmark text-xl" />
            </button>
          </div>

          <div className="p-4 border-b border-mocha-200">
            <h3 className="text-xs font-semibold text-charcoal-700 uppercase tracking-wide mb-3">Today&apos;s Quick Stats</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-mocha-50 rounded-lg">
                <span className="text-sm text-charcoal-900">Sessions</span>
                <span className="font-bold text-fern-600">8</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-mocha-50 rounded-lg">
                <span className="text-sm text-charcoal-900">Clients</span>
                <span className="font-bold text-brightFern-600">24</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-mocha-50 rounded-lg">
                <span className="text-sm text-charcoal-900">Messages</span>
                <span className="font-bold text-charcoal-900">12</span>
              </div>
            </div>
          </div>

          <nav className="p-4">
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-charcoal-700 hover:bg-mocha-50 hover:text-charcoal-900 transition-colors">
                  <i className="fa-solid fa-house w-5" />
                  <span className="font-medium">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-charcoal-700 hover:bg-mocha-50 hover:text-charcoal-900 transition-colors">
                  <i className="fa-solid fa-calendar-days w-5" />
                  <span className="font-medium">Calendar</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-fern-50 text-fern-600 transition-colors">
                  <i className="fa-solid fa-users w-5" />
                  <span className="font-medium">Clients</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-charcoal-700 hover:bg-mocha-50 hover:text-charcoal-900 transition-colors">
                  <i className="fa-solid fa-message w-5" />
                  <span className="font-medium">Messages</span>
                  <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-charcoal-700 hover:bg-mocha-50 hover:text-charcoal-900 transition-colors">
                  <i className="fa-solid fa-chart-line w-5" />
                  <span className="font-medium">Analytics</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-charcoal-700 hover:bg-mocha-50 hover:text-charcoal-900 transition-colors">
                  <i className="fa-solid fa-gear w-5" />
                  <span className="font-medium">Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSidebarOpen(true)}
                className="w-10 h-10 flex items-center justify-center text-charcoal-900 hover:bg-mocha-50 rounded-lg transition-colors"
                aria-label="Menu"
              >
                <i className="fa-solid fa-bars text-lg" />
              </button>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center text-charcoal-900 hover:bg-mocha-50 rounded-lg transition-colors"
                aria-label="Back"
              >
                <i className="fa-solid fa-arrow-left text-lg" />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center text-charcoal-900 hover:bg-mocha-50 rounded-lg transition-colors relative"
                aria-label="Notifications"
              >
                <i className="fa-solid fa-bell text-lg" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              <button
                type="button"
                className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-full border-2 border-fern-600"
                aria-label="Profile"
              >
                <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" alt="Coach" className="w-full h-full object-cover" />
              </button>
            </div>
          </div>
        </header>

        <main className="pb-20">
          {/* Client header section */}
          <section className="bg-white border-b border-mocha-200">
            <div className="px-4 pt-6 pb-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-fern-600 shadow-lg">
                    <img src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg" alt="Marcus Silva" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brightFern-600 rounded-full border-2 border-white flex items-center justify-center">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h1 className="text-xl font-bold text-charcoal-900 mb-1">Marcus Silva</h1>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-fern-50 text-fern-600 text-xs font-semibold rounded-full">
                      <i className="fa-solid fa-futbol text-[10px]" />
                      Goalkeeper
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellowGreen-500/20 text-charcoal-900 text-xs font-semibold rounded-full">
                      16 years old
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-charcoal-700">
                    <i className="fa-solid fa-calendar-check" />
                    <span>Active since Jan 2024</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-mocha-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-fern-600 mb-1">42</div>
                  <div className="text-xs text-charcoal-700">Sessions</div>
                </div>
                <div className="bg-mocha-50 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold text-brightFern-600 mb-1">87%</div>
                  <div className="text-xs text-charcoal-700">Progress</div>
                </div>
                <div className="bg-mocha-50 rounded-lg p-3 text-center">
                  <div className="flex items-center justify-center gap-0.5 mb-1">
                    <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                    <span className="text-2xl font-bold text-charcoal-900">4.9</span>
                  </div>
                  <div className="text-xs text-charcoal-700">Rating</div>
                </div>
              </div>
            </div>

            {/* Tab navigation */}
            <div className="flex border-t border-mocha-200">
              {(['overview', 'progress', 'schedule', 'payments'] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 text-sm font-semibold border-b-2 capitalize ${
                    activeTab === tab
                      ? 'text-fern-600 border-fern-600'
                      : 'text-charcoal-700 border-transparent'
                  }`}
                >
                  {tab === 'overview' ? 'Overview' : tab === 'progress' ? 'Progress' : tab === 'schedule' ? 'Schedule' : 'Payments'}
                </button>
              ))}
            </div>
          </section>

          {/* Overview tab */}
          {activeTab === 'overview' && (
            <>
              <section className="px-4 py-4 space-y-3">
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal-700 mb-1">Total Sessions</h3>
                      <div className="text-3xl font-bold text-charcoal-900">42</div>
                    </div>
                    <div className="w-12 h-12 bg-fern-50 rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-clipboard-list text-fern-600 text-xl" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 text-xs text-brightFern-600 font-semibold">
                      <i className="fa-solid fa-arrow-up" />
                      <span>12%</span>
                    </div>
                    <span className="text-xs text-charcoal-700">vs last month</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal-700 mb-1">Payment Status</h3>
                      <div className="text-3xl font-bold text-brightFern-600">Paid</div>
                    </div>
                    <div className="w-12 h-12 bg-brightFern-400/10 rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-circle-check text-brightFern-600 text-xl" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-charcoal-700">Next payment: Mar 15, 2024</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal-700 mb-1">Next Session</h3>
                      <div className="text-xl font-bold text-charcoal-900">Tomorrow</div>
                    </div>
                    <div className="w-12 h-12 bg-yellowGreen-500/20 rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-clock text-charcoal-900 text-xl" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-charcoal-900">
                      <i className="fa-solid fa-calendar text-xs text-charcoal-700" />
                      <span>March 12, 2024</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-900">
                      <i className="fa-solid fa-clock text-xs text-charcoal-700" />
                      <span>10:00 AM - 11:30 AM</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-charcoal-900">
                      <i className="fa-solid fa-location-dot text-xs text-charcoal-700" />
                      <span>Field A, Training Center</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Performance Metrics</h2>
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm space-y-4">
                  {[
                    { label: 'Reflexes', value: 92, color: 'fern' },
                    { label: 'Positioning', value: 85, color: 'brightFern' },
                    { label: 'Distribution', value: 78, color: 'yellowGreen' },
                    { label: 'Communication', value: 88, color: 'fern' },
                    { label: 'Aerial Ability', value: 81, color: 'brightFern' },
                  ].map(({ label, value, color }) => (
                    <div key={label}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-charcoal-900">{label}</span>
                        <span className={`text-sm font-bold ${color === 'fern' ? 'text-fern-600' : color === 'brightFern' ? 'text-brightFern-600' : 'text-yellowGreen-500'}`}>{value}%</span>
                      </div>
                      <div className="h-2 bg-mocha-50 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${color === 'fern' ? 'bg-fern-600' : color === 'brightFern' ? 'bg-brightFern-600' : 'bg-yellowGreen-500'}`}
                          style={{ width: `${value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Recent Session Notes</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Goalkeeper Training', date: 'Mar 8', desc: 'Excellent reflexes during one-on-one drills. Showed significant improvement in diving technique. Focus on positioning for next session.', tag: 'Excellent', tagStyle: 'brightFern', iconStyle: 'fern', mins: '90 min session' },
                    { title: 'Penalty Practice', date: 'Mar 5', desc: 'Good anticipation skills. Saved 7 out of 10 penalties. Work on reading body language of strikers for better prediction.', tag: 'Good', tagStyle: 'fern', iconStyle: 'yellowGreen', mins: '60 min session' },
                    { title: 'Distribution Training', date: 'Mar 1', desc: 'Improved accuracy on long throws. Kicking technique needs refinement. Practice more goal kicks with both feet.', tag: 'Average', tagStyle: 'yellowGreen', iconStyle: 'brightFern', mins: '75 min session' },
                    { title: 'Match Simulation', date: 'Feb 28', desc: 'Outstanding performance under pressure. Made crucial saves. Great communication with defenders throughout the game.', tag: 'Excellent', tagStyle: 'brightFern', iconStyle: 'fern', mins: '120 min session' },
                  ].map((note) => (
                    <div key={note.title + note.date} className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${note.iconStyle === 'fern' ? 'bg-fern-50' : note.iconStyle === 'brightFern' ? 'bg-brightFern-400/10' : 'bg-yellowGreen-500/20'}`}>
                          <i className={`fa-solid fa-note-sticky ${note.iconStyle === 'fern' ? 'text-fern-600' : note.iconStyle === 'brightFern' ? 'text-brightFern-600' : 'text-charcoal-900'}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-sm text-charcoal-900">{note.title}</h3>
                            <span className="text-xs text-charcoal-700">{note.date}</span>
                          </div>
                          <p className="text-sm text-charcoal-700 leading-relaxed">{note.desc}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-full ${note.tagStyle === 'fern' ? 'bg-fern-50 text-fern-600' : note.tagStyle === 'brightFern' ? 'bg-brightFern-400/10 text-brightFern-600' : 'bg-yellowGreen-500/20 text-charcoal-900'}`}>
                          <i className="fa-solid fa-star text-[10px]" />
                          {note.tag}
                        </span>
                        <span className="text-xs text-charcoal-700">{note.mins}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Training Goals</h2>
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm space-y-4">
                  {[
                    { title: 'Master diving technique', sub: 'Complete 50 diving drills with proper form', done: true, pct: 100, bar: 'fern' },
                    { title: 'Improve distribution accuracy', sub: 'Achieve 85% accuracy on long passes', done: false, pct: 72, bar: 'brightFern' },
                    { title: 'Penalty save percentage', sub: 'Reach 75% save rate in practice', done: false, pct: 68, bar: 'yellowGreen' },
                  ].map((goal) => (
                    <div key={goal.title} className="flex items-start gap-3">
                      <div className="mt-1">
                        <input type="checkbox" defaultChecked={goal.done} className="w-5 h-5 rounded border-mocha-200 text-fern-600 focus:ring-fern-500 accent-fern-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-charcoal-900 mb-1">{goal.title}</h4>
                        <p className="text-xs text-charcoal-700 mb-2">{goal.sub}</p>
                        <div className="h-1.5 bg-mocha-50 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${goal.bar === 'fern' ? 'bg-fern-600' : goal.bar === 'brightFern' ? 'bg-brightFern-600' : 'bg-yellowGreen-500'}`} style={{ width: `${goal.pct}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="bg-fern-600 text-white rounded-xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
                    <i className="fa-solid fa-calendar-plus text-2xl" />
                    <span className="text-sm font-semibold">Book Session</span>
                  </button>
                  <button type="button" className="bg-brightFern-600 text-white rounded-xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
                    <i className="fa-solid fa-message text-2xl" />
                    <span className="text-sm font-semibold">Send Message</span>
                  </button>
                  <button type="button" className="bg-white border border-mocha-200 text-charcoal-900 rounded-xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
                    <i className="fa-solid fa-file-invoice text-2xl" />
                    <span className="text-sm font-semibold">View Invoices</span>
                  </button>
                  <button type="button" className="bg-white border border-mocha-200 text-charcoal-900 rounded-xl p-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
                    <i className="fa-solid fa-chart-simple text-2xl" />
                    <span className="text-sm font-semibold">Full Report</span>
                  </button>
                </div>
              </section>
            </>
          )}

          {/* Progress tab */}
          {activeTab === 'progress' && (
            <>
              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Skill Progression</h2>
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                  <SkillProgressionChart />
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Detailed Skill Analysis</h2>
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm space-y-4">
                  {[
                    { name: 'Reflexes', sub: 'Shot stopping ability', value: 92, change: '+8%', icon: 'fa-hand', color: 'fern' },
                    { name: 'Positioning', sub: 'Goal area awareness', value: 85, change: '+5%', icon: 'fa-location-crosshairs', color: 'brightFern' },
                    { name: 'Distribution', sub: 'Passing accuracy', value: 78, change: '+3%', icon: 'fa-arrows-up-down-left-right', color: 'yellowGreen' },
                    { name: 'Communication', sub: 'Team coordination', value: 88, change: '+6%', icon: 'fa-comments', color: 'fern' },
                    { name: 'Aerial Ability', sub: 'High ball handling', value: 81, change: '+4%', icon: 'fa-up-long', color: 'brightFern' },
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${skill.color === 'fern' ? 'bg-fern-50' : skill.color === 'brightFern' ? 'bg-brightFern-400/10' : 'bg-yellowGreen-500/20'}`}>
                            <i className={`fa-solid ${skill.icon} ${skill.color === 'fern' ? 'text-fern-600' : skill.color === 'brightFern' ? 'text-brightFern-600' : 'text-charcoal-900'}`} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-charcoal-900">{skill.name}</h4>
                            <p className="text-xs text-charcoal-700">{skill.sub}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`text-xl font-bold ${skill.color === 'fern' ? 'text-fern-600' : skill.color === 'brightFern' ? 'text-brightFern-600' : 'text-charcoal-900'}`}>{skill.value}%</div>
                          <div className="flex items-center gap-1 text-xs text-brightFern-600">
                            <i className="fa-solid fa-arrow-up" />
                            <span>{skill.change}</span>
                          </div>
                        </div>
                      </div>
                      <div className="h-2 bg-mocha-50 rounded-full overflow-hidden">
                        <div className={`h-full rounded-full ${skill.color === 'fern' ? 'bg-fern-600' : skill.color === 'brightFern' ? 'bg-brightFern-600' : 'bg-yellowGreen-500'}`} style={{ width: `${skill.value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Session History</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Goalkeeper Training', date: 'Mar 8, 2024', mins: '90 minutes', tag: 'Excellent', tagStyle: 'brightFern', iconStyle: 'fern', summary: 'Focused on reflexes and diving technique. Great improvement shown.' },
                    { title: 'Penalty Practice', date: 'Mar 5, 2024', mins: '60 minutes', tag: 'Good', tagStyle: 'fern', iconStyle: 'yellowGreen', summary: 'Penalty stopping drills. 7/10 saves recorded.' },
                    { title: 'Distribution Training', date: 'Mar 1, 2024', mins: '75 minutes', tag: 'Average', tagStyle: 'yellowGreen', iconStyle: 'brightFern', summary: 'Long throws and kicking practice. Needs more work.' },
                    { title: 'Match Simulation', date: 'Feb 28, 2024', mins: '120 minutes', tag: 'Excellent', tagStyle: 'brightFern', iconStyle: 'fern', summary: 'Full match practice. Outstanding performance under pressure.' },
                    { title: 'Agility Drills', date: 'Feb 25, 2024', mins: '60 minutes', tag: 'Good', tagStyle: 'fern', iconStyle: 'yellowGreen', summary: 'Speed and movement exercises. Good footwork improvement.' },
                  ].map((s) => (
                    <div key={s.title + s.date} className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${s.iconStyle === 'fern' ? 'bg-fern-50' : s.iconStyle === 'brightFern' ? 'bg-brightFern-400/10' : 'bg-yellowGreen-500/20'}`}>
                            <i className={`fa-solid fa-dumbbell ${s.iconStyle === 'fern' ? 'text-fern-600' : s.iconStyle === 'brightFern' ? 'text-brightFern-600' : 'text-charcoal-900'}`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm text-charcoal-900 mb-1">{s.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-charcoal-700 mb-2">
                              <span>{s.date}</span>
                              <span>•</span>
                              <span>{s.mins}</span>
                            </div>
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-full ${s.tagStyle === 'fern' ? 'bg-fern-50 text-fern-600' : s.tagStyle === 'brightFern' ? 'bg-brightFern-400/10 text-brightFern-600' : 'bg-yellowGreen-500/20 text-charcoal-900'}`}>
                              <i className="fa-solid fa-star text-[10px]" />
                              {s.tag}
                            </span>
                          </div>
                        </div>
                        <button type="button" className="text-charcoal-700 hover:text-charcoal-900">
                          <i className="fa-solid fa-chevron-right" />
                        </button>
                      </div>
                      <p className="text-sm text-charcoal-700">{s.summary}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Milestones Achieved</h2>
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 pb-4 border-b border-mocha-200">
                      <div className="w-12 h-12 bg-fern-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-trophy text-white text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-charcoal-900 mb-1">Clean Sheet Master</h4>
                        <p className="text-xs text-charcoal-700 mb-2">Achieved 5 consecutive clean sheets</p>
                        <span className="text-xs text-charcoal-700">Unlocked: Mar 8, 2024</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pb-4 border-b border-mocha-200">
                      <div className="w-12 h-12 bg-brightFern-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-medal text-white text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-charcoal-900 mb-1">Penalty Specialist</h4>
                        <p className="text-xs text-charcoal-700 mb-2">Saved 75% of penalties in training</p>
                        <span className="text-xs text-charcoal-700">Unlocked: Feb 28, 2024</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-yellowGreen-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-star text-charcoal-900 text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-charcoal-900 mb-1">Consistent Performer</h4>
                        <p className="text-xs text-charcoal-700 mb-2">Attended 40+ training sessions</p>
                        <span className="text-xs text-charcoal-700">Unlocked: Feb 20, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}

          {/* Schedule tab */}
          {activeTab === 'schedule' && (
            <>
              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Upcoming Sessions</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Goalkeeper Training', day: 'Tomorrow, March 12, 2024', time: '10:00 AM - 11:30 AM', loc: 'Field A, Training Center', status: 'Confirmed', border: 'fern', btn: 'fern' },
                    { title: 'Penalty Practice', day: 'Friday, March 15, 2024', time: '3:00 PM - 4:00 PM', loc: 'Field B, Training Center', status: 'Confirmed', border: 'brightFern', btn: 'brightFern' },
                    { title: 'Match Simulation', day: 'Monday, March 18, 2024', time: '5:00 PM - 7:00 PM', loc: 'Main Stadium', status: 'Pending', border: 'yellowGreen', btn: 'outline' },
                  ].map((s) => (
                    <div key={s.title} className={`bg-white rounded-xl p-4 border-l-4 border-y border-r border-mocha-200 shadow-sm ${s.border === 'fern' ? 'border-l-fern-600' : s.border === 'brightFern' ? 'border-l-brightFern-600' : 'border-l-yellowGreen-500'}`}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-base text-charcoal-900 mb-2">{s.title}</h3>
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2 text-sm text-charcoal-700">
                              <i className="fa-solid fa-calendar w-4" />
                              <span>{s.day}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-charcoal-700">
                              <i className="fa-solid fa-clock w-4" />
                              <span>{s.time}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-charcoal-700">
                              <i className="fa-solid fa-location-dot w-4" />
                              <span>{s.loc}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full ${s.status === 'Confirmed' ? (s.border === 'fern' ? 'bg-fern-50 text-fern-600' : 'bg-brightFern-400/10 text-brightFern-600') : 'bg-mocha-50 text-charcoal-700'}`}>
                          <i className="fa-solid fa-circle text-[6px]" />
                          {s.status}
                        </span>
                        <button
                          type="button"
                          className={`ml-auto px-4 py-2 text-xs font-semibold rounded-lg active:scale-95 transition-transform ${s.btn === 'fern' ? 'bg-fern-600 text-white' : s.btn === 'brightFern' ? 'bg-brightFern-600 text-white' : 'bg-white border border-mocha-200 text-charcoal-900'}`}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">March 2024</h2>
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                  <div className="grid grid-cols-7 gap-2 mb-3">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                      <div key={d} className="text-center text-xs font-semibold text-charcoal-700 py-2">{d}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {[null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map((n, i) => {
                      if (n === null) return <div key={i} className="aspect-square" />;
                      const isSession = [8, 12, 15, 18, 22].includes(n);
                      const isToday = n === 11;
                      const style = isToday ? 'bg-fern-600 text-white font-bold' : isSession ? (n === 12 || n === 15 ? 'bg-brightFern-400/20 text-brightFern-600' : n === 18 ? 'bg-yellowGreen-500/30 text-charcoal-900' : 'bg-fern-50 text-fern-600') : 'text-charcoal-700';
                      return (
                        <div key={i} className={`aspect-square flex items-center justify-center text-sm rounded-lg relative ${style}`}>
                          {n}
                          {isSession && !isToday && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-fern-600 rounded-full" />}
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-fern-600 rounded-full" />
                      <span className="text-charcoal-700">Training</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-brightFern-600 rounded-full" />
                      <span className="text-charcoal-700">Practice</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellowGreen-500 rounded-full" />
                      <span className="text-charcoal-700">Match</span>
                    </div>
                  </div>
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Past Sessions</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Goalkeeper Training', date: 'March 8, 2024', time: '10:00 AM - 11:30 AM' },
                    { title: 'Penalty Practice', date: 'March 5, 2024', time: '3:00 PM - 4:00 PM' },
                    { title: 'Distribution Training', date: 'March 1, 2024', time: '2:00 PM - 3:15 PM' },
                  ].map((s) => (
                    <div key={s.title + s.date} className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm opacity-75">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm text-charcoal-900 mb-1">{s.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-charcoal-700 mb-2">
                            <i className="fa-solid fa-calendar w-3" />
                            <span>{s.date}</span>
                            <span>•</span>
                            <span>{s.time}</span>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brightFern-400/10 text-brightFern-600 text-xs font-medium rounded-full">
                          <i className="fa-solid fa-check text-[8px]" />
                          Completed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <button type="button" className="w-full bg-fern-600 text-white rounded-xl p-4 font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  <i className="fa-solid fa-calendar-plus" />
                  <span>Schedule New Session</span>
                </button>
              </section>
            </>
          )}

          {/* Payments tab */}
          {activeTab === 'payments' && (
            <>
              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Payment Overview</h2>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-dollar-sign text-fern-600 text-sm" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-charcoal-900 mb-1">$1,680</div>
                    <div className="text-xs text-charcoal-700">Total Paid</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-brightFern-400/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-receipt text-brightFern-600 text-sm" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-charcoal-900 mb-1">42</div>
                    <div className="text-xs text-charcoal-700">Invoices</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-sm font-semibold text-charcoal-700 mb-1">Next Payment</h3>
                      <div className="text-2xl font-bold text-charcoal-900 mb-1">$120</div>
                      <div className="text-xs text-charcoal-700">Due: March 15, 2024</div>
                    </div>
                    <div className="w-12 h-12 bg-brightFern-400/10 rounded-xl flex items-center justify-center">
                      <i className="fa-solid fa-calendar-check text-brightFern-600 text-xl" />
                    </div>
                  </div>
                  <button type="button" className="w-full bg-brightFern-600 text-white rounded-lg py-2.5 font-semibold text-sm active:scale-95 transition-transform">
                    Pay Now
                  </button>
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Transaction History</h2>
                <div className="space-y-3">
                  {[
                    { title: 'Monthly Training Package', date: 'March 1, 2024', inv: '#1234', amount: '$120' },
                    { title: 'Monthly Training Package', date: 'February 1, 2024', inv: '#1233', amount: '$120' },
                    { title: 'Monthly Training Package', date: 'January 1, 2024', inv: '#1232', amount: '$120' },
                    { title: 'Registration Fee', date: 'January 1, 2024', inv: '#1231', amount: '$50' },
                  ].map((t) => (
                    <div key={t.inv} className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 bg-brightFern-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <i className="fa-solid fa-check text-brightFern-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-sm text-charcoal-900 mb-1">{t.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-charcoal-700 mb-1">
                              <span>{t.date}</span>
                              <span>•</span>
                              <span>Invoice {t.inv}</span>
                            </div>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-brightFern-400/10 text-brightFern-600 text-xs font-medium rounded-full">
                              <i className="fa-solid fa-circle text-[6px]" />
                              Paid
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-charcoal-900">{t.amount}</div>
                        </div>
                      </div>
                      <button type="button" className="text-xs text-fern-600 font-semibold">View Invoice</button>
                    </div>
                  ))}
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Payment Methods</h2>
                <div className="space-y-3">
                  <div className="bg-white rounded-xl p-4 border-2 border-fern-600 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center">
                          <i className="fa-brands fa-cc-visa text-fern-600 text-2xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-charcoal-900">Visa ending in 4242</h4>
                          <p className="text-xs text-charcoal-700">Expires 12/25</p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-1 bg-fern-50 text-fern-600 text-xs font-semibold rounded-full">Default</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-mocha-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-mocha-50 rounded-lg flex items-center justify-center">
                          <i className="fa-brands fa-cc-mastercard text-charcoal-700 text-2xl" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-charcoal-900">Mastercard ending in 8888</h4>
                          <p className="text-xs text-charcoal-700">Expires 09/26</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="w-full bg-white border-2 border-dashed border-mocha-200 text-charcoal-900 rounded-xl p-4 font-semibold flex items-center justify-center gap-2 active:scale-95 transition-colors hover:border-fern-600 hover:text-fern-600">
                    <i className="fa-solid fa-plus" />
                    <span>Add Payment Method</span>
                  </button>
                </div>
              </section>

              <section className="px-4 py-4">
                <h2 className="text-lg font-bold text-charcoal-900 mb-4">Current Plan</h2>
                <div className="bg-gradient-to-br from-fern-600 to-brightFern-600 rounded-xl p-6 text-white shadow-lg">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-1">Monthly Training Package</h3>
                    <p className="text-sm opacity-90">8 sessions per month</p>
                  </div>
                  <div className="flex items-end gap-2 mb-6">
                    <div className="text-4xl font-bold">$120</div>
                    <div className="text-sm opacity-90 mb-1">/month</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {['8 training sessions', 'Personalized training plans', 'Progress tracking', 'Direct messaging'].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <i className="fa-solid fa-check" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <button type="button" className="w-full bg-white text-fern-600 rounded-lg py-2.5 font-semibold text-sm active:scale-95 transition-transform">
                    Upgrade Plan
                  </button>
                </div>
              </section>
            </>
          )}
        </main>

        {/* Bottom nav footer */}
        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-mocha-200 z-20">
          <nav className="flex items-center justify-around px-4 py-3">
            <a href="#" className="flex flex-col items-center gap-1 text-charcoal-700 hover:text-fern-600 transition-colors">
              <i className="fa-solid fa-house text-lg" />
              <span className="text-[10px] font-medium">Home</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-charcoal-700 hover:text-fern-600 transition-colors">
              <i className="fa-solid fa-calendar-days text-lg" />
              <span className="text-[10px] font-medium">Calendar</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-fern-600 transition-colors">
              <i className="fa-solid fa-users text-lg" />
              <span className="text-[10px] font-medium">Clients</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-charcoal-700 hover:text-fern-600 transition-colors relative">
              <i className="fa-solid fa-message text-lg" />
              <span className="absolute -top-1 -right-2 w-4 h-4 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">3</span>
              <span className="text-[10px] font-medium">Messages</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-1 text-charcoal-700 hover:text-fern-600 transition-colors">
              <i className="fa-solid fa-gear text-lg" />
              <span className="text-[10px] font-medium">Settings</span>
            </a>
          </nav>
        </footer>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
