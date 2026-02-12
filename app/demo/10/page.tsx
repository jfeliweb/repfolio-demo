'use client';

import { useState, useRef, useEffect } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

const CLIENTS = [
  { id: 1, name: 'Sarah Martinez', avatar: 'avatar-5.jpg', age: 14, next: 'Today, 2:00 PM', progress: 85, sessions: 13, rating: 4.8, stars: 5 },
  { id: 2, name: 'Michael Chen', avatar: 'avatar-8.jpg', age: 16, next: 'Tomorrow, 10:00 AM', progress: 72, sessions: 8, rating: 4.5, stars: 4.5 },
  { id: 3, name: 'Emma Johnson', avatar: 'avatar-6.jpg', age: 15, next: 'Feb 11, 3:30 PM', progress: 91, sessions: 21, rating: 4.9, stars: 5 },
  { id: 4, name: 'David Thompson', avatar: 'avatar-3.jpg', age: 13, next: 'Feb 12, 4:00 PM', progress: 68, sessions: 11, rating: 4.6, stars: 4.5 },
  { id: 5, name: 'Olivia Rodriguez', avatar: 'avatar-7.jpg', age: 17, next: 'Feb 13, 5:00 PM', progress: 88, sessions: 17, rating: 4.7, stars: 4.5 },
  { id: 6, name: 'James Wilson', avatar: 'avatar-9.jpg', age: 14, next: 'Feb 14, 1:00 PM', progress: 76, sessions: 15, rating: 4.4, stars: 4 },
  { id: 7, name: 'Sophia Anderson', avatar: 'avatar-1.jpg', age: 16, next: 'Feb 15, 11:00 AM', progress: 94, sessions: 25, rating: 5.0, stars: 5 },
  { id: 8, name: 'Liam Brown', avatar: 'avatar-4.jpg', age: 15, next: 'Feb 16, 2:30 PM', progress: 81, sessions: 19, rating: 4.8, stars: 5 },
];

function ClientCard({
  name,
  avatar,
  age,
  next,
  progress,
  sessions,
  rating,
  stars,
}: {
  name: string;
  avatar: string;
  age: number;
  next: string;
  progress: number;
  sessions: number;
  rating: number;
  stars: number;
}) {
  return (
    <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
      <div className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${avatar}`}
            alt={name}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 border-2 border-fern-600/20"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-charcoal-900 font-bold text-base mb-1">{name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 bg-fern-100 text-fern-600 text-xs font-semibold px-2 py-1 rounded-md">
                <i className="fa-solid fa-circle text-[6px]" />
                Active
              </span>
              <span className="text-charcoal-700 text-xs">Age {age}</span>
            </div>
            <div className="flex items-center gap-2 text-charcoal-700 text-xs">
              <i className="fa-solid fa-calendar text-fern-600" />
              <span className="font-medium">Next: {next}</span>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-charcoal-900 text-xs font-semibold">Progress</span>
            <span className="text-fern-600 text-xs font-bold">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
            <div className="h-full bg-fern-600 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-charcoal-900 font-bold text-lg">{sessions}</div>
              <div className="text-charcoal-700 text-xs">Sessions</div>
            </div>
            <div className="w-px h-8 bg-mocha-200" />
            <div className="text-center">
              <div className="text-charcoal-900 font-bold text-lg">{rating}</div>
              <div className="text-charcoal-700 text-xs">Avg Rating</div>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <i
                key={i}
                className={`text-sm ${
                  i <= Math.floor(stars)
                ? 'fa-solid fa-star text-yellowGreen-500'
                : stars > i - 1 && stars < i
                ? 'fa-solid fa-star-half-stroke text-yellowGreen-500'
                : 'fa-regular fa-star text-charcoal-700'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex-1 bg-fern-600 text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-user" />
            <span>View Profile</span>
          </button>
          <button
            type="button"
            className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center"
          >
            <i className="fa-solid fa-message text-fern-600" />
          </button>
          <button
            type="button"
            className="w-12 h-12 bg-mocha-100 rounded-xl flex items-center justify-center"
          >
            <i className="fa-solid fa-calendar-plus text-fern-600" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Demo10() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortMenuOpen, setSortMenuOpen] = useState(false);
  const [filter, setFilter] = useState<'all' | 'active' | 'inactive'>('all');
  const [loadMoreLoading, setLoadMoreLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const sortMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (sortMenuRef.current && !sortMenuRef.current.contains(e.target as Node)) {
        setSortMenuOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleLoadMore = () => {
    setLoadMoreLoading(true);
    setTimeout(() => setLoadMoreLoading(false), 1000);
  };

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-20">
        {/* Drawer overlay */}
        <div
          role="presentation"
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
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

            <div id="sidebar-quick-stats" className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Today&apos;s Stats</h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Sessions Today</span>
                    <span className="text-fern-600 font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="bg-charcoal-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Upcoming</span>
                    <span className="text-charcoal-600 font-bold text-lg">2</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="sidebar-navigation" className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Quick Links</h3>
              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Calendar</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-fern-600/10 rounded-lg text-left border-2 border-fern-600/30"
                >
                  <i className="fa-solid fa-users text-fern-600" />
                  <span className="text-fern-600 text-sm font-semibold">Clients</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <i className="fa-solid fa-message text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Messages</span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main id="main-content" className="min-h-screen">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between mb-3">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Go back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </button>
                <div className="flex items-center gap-2">
                  <RepfolioLogo width={100} height={28} />
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Menu"
                >
                  <i className="fa-solid fa-bars text-charcoal-900" />
                </button>
              </div>

              <div>
                <h1 className="text-charcoal-900 font-bold text-xl">My Clients</h1>
                <p className="text-charcoal-700 text-xs">Manage and track your athlete progress</p>
              </div>
            </div>
          </header>

          <section id="search-section" className="px-5 pt-5 pb-3 bg-mocha-50">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search clients by name..."
                className="w-full bg-white border border-mocha-200 rounded-xl py-3 pl-12 pr-4 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-fern-600 shadow-sm"
              />
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700" />
            </div>
          </section>

          <section id="filter-section" className="px-5 pb-4 bg-mocha-50">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-1">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`filter-btn px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
                    filter === 'all'
                      ? 'bg-fern-600 text-white border-fern-600'
                      : 'bg-white border-mocha-200 text-charcoal-900'
                  }`}
                >
                  All <span className="ml-1 text-xs">(24)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('active')}
                  className={`filter-btn px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
                    filter === 'active'
                      ? 'bg-fern-600 text-white border-fern-600'
                      : 'bg-white border-mocha-200 text-charcoal-900'
                  }`}
                >
                  Active <span className="ml-1 text-xs">(18)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('inactive')}
                  className={`filter-btn px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
                    filter === 'inactive'
                      ? 'bg-fern-600 text-white border-fern-600'
                      : 'bg-white border-mocha-200 text-charcoal-900'
                  }`}
                >
                  Inactive <span className="ml-1 text-xs">(6)</span>
                </button>
              </div>

              <div className="sort-dropdown relative" ref={sortMenuRef}>
                <button
                  type="button"
                  onClick={() => setSortMenuOpen((o) => !o)}
                  className="w-10 h-10 bg-white border border-mocha-200 rounded-lg flex items-center justify-center shadow-sm"
                  aria-label="Sort options"
                >
                  <i className="fa-solid fa-arrow-down-wide-short text-fern-600" />
                </button>
                <div
                  className={`sort-menu absolute right-0 top-full mt-1 bg-white border border-mocha-200 rounded-xl shadow-lg overflow-hidden z-20 ${
                    sortMenuOpen ? 'block' : 'hidden'
                  }`}
                >
                  <div className="p-2">
                    <button
                      type="button"
                      onClick={() => setSortMenuOpen(false)}
                      className="sort-option w-full text-left px-3 py-2 rounded-lg hover:bg-mocha-100 text-charcoal-900 text-sm font-medium flex items-center gap-2"
                      data-sort="name"
                    >
                      <i className="fa-solid fa-font text-fern-600 w-4" />
                      <span>Name (A-Z)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSortMenuOpen(false)}
                      className="sort-option w-full text-left px-3 py-2 rounded-lg hover:bg-mocha-100 text-charcoal-900 text-sm font-medium flex items-center gap-2"
                      data-sort="next-session"
                    >
                      <i className="fa-solid fa-calendar text-fern-600 w-4" />
                      <span>Next Session</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSortMenuOpen(false)}
                      className="sort-option w-full text-left px-3 py-2 rounded-lg hover:bg-mocha-100 text-charcoal-900 text-sm font-medium flex items-center gap-2"
                      data-sort="total-sessions"
                    >
                      <i className="fa-solid fa-chart-line text-fern-600 w-4" />
                      <span>Total Sessions</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setSortMenuOpen(false)}
                      className="sort-option w-full text-left px-3 py-2 rounded-lg hover:bg-mocha-100 text-charcoal-900 text-sm font-medium flex items-center gap-2"
                      data-sort="progress"
                    >
                      <i className="fa-solid fa-trophy text-fern-600 w-4" />
                      <span>Progress</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="stats-overview-section" className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-fern-600 font-bold text-2xl mb-1">24</div>
                  <div className="text-charcoal-700 text-xs">Total Clients</div>
                </div>
                <div className="text-center border-l border-r border-mocha-200">
                  <div className="text-charcoal-600 font-bold text-2xl mb-1">18</div>
                  <div className="text-charcoal-700 text-xs">Active</div>
                </div>
                <div className="text-center">
                  <div className="text-yellowGreen-500 font-bold text-2xl mb-1">156</div>
                  <div className="text-charcoal-700 text-xs">Sessions</div>
                </div>
              </div>
            </div>
          </section>

          <section id="client-cards-section" className="px-5 pb-6 bg-mocha-50">
            <div className="space-y-4">
              {CLIENTS.map((client) => (
                <ClientCard key={client.id} {...client} />
              ))}
            </div>
          </section>

          <section id="load-more-section" className="px-5 pb-6 bg-mocha-50">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={loadMoreLoading}
              className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loadMoreLoading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin" />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-chevron-down" />
                  <span>Load More Clients</span>
                </>
              )}
            </button>
          </section>

          <section id="quick-actions-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-fern-600 rounded-2xl p-5 shadow-lg">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-user-plus text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Add New Client</h3>
                  <p className="text-white/80 text-xs">Onboard a new athlete to start training</p>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-white text-fern-600 font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-plus" />
                <span>Add Client</span>
              </button>
            </div>
          </section>

          <section id="performance-insights-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-charcoal-600/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-charcoal-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Performance Insights</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-mocha-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-charcoal-600/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-arrow-trend-up text-charcoal-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Top Performer</div>
                      <div className="text-charcoal-700 text-xs">Sophia Anderson (5.0 avg)</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700" />
                </div>

                <div className="flex items-center justify-between p-3 bg-mocha-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-fire text-yellowGreen-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Most Improved</div>
                      <div className="text-charcoal-700 text-xs">Emma Johnson (+15% this month)</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700" />
                </div>

                <div className="flex items-center justify-between p-3 bg-mocha-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-fern-600/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-clock text-fern-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Needs Attention</div>
                      <div className="text-charcoal-700 text-xs">3 clients overdue for session</div>
                    </div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700" />
                </div>
              </div>
            </div>
          </section>

          <section id="upcoming-sessions-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-calendar-days text-fern-600" />
                  </div>
                  <h3 className="text-charcoal-900 font-bold text-base">Upcoming Sessions</h3>
                </div>
                <button type="button" className="text-fern-600 text-sm font-semibold">
                  View All
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-lg">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="Sarah Martinez"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Sarah Martinez</div>
                    <div className="text-charcoal-700 text-xs">Today, 2:00 PM - 3:00 PM</div>
                  </div>
                  <button
                    type="button"
                    className="w-9 h-9 bg-fern-600 rounded-lg flex items-center justify-center"
                  >
                    <i className="fa-solid fa-check text-white text-sm" />
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-lg">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                    alt="Michael Chen"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Michael Chen</div>
                    <div className="text-charcoal-700 text-xs">Tomorrow, 10:00 AM - 11:00 AM</div>
                  </div>
                  <button
                    type="button"
                    className="w-9 h-9 bg-white border border-mocha-200 rounded-lg flex items-center justify-center"
                  >
                    <i className="fa-solid fa-clock text-charcoal-700 text-sm" />
                  </button>
                </div>

                <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-lg">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Emma Johnson"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Emma Johnson</div>
                    <div className="text-charcoal-700 text-xs">Feb 11, 3:30 PM - 4:30 PM</div>
                  </div>
                  <button
                    type="button"
                    className="w-9 h-9 bg-white border border-mocha-200 rounded-lg flex items-center justify-center"
                  >
                    <i className="fa-solid fa-clock text-charcoal-700 text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="helpful-tips-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-yellowGreen-500/10 rounded-2xl p-5 border border-yellowGreen-500/30">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-lightbulb text-yellowGreen-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">Client Management Tips</h3>
                  <p className="text-charcoal-700 text-xs">Maximize your training effectiveness</p>
                </div>
              </div>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-fern-600 mt-1 flex-shrink-0" />
                  <span>Keep detailed session notes for better progress tracking</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-fern-600 mt-1 flex-shrink-0" />
                  <span>Send regular updates to parents to maintain engagement</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-fern-600 mt-1 flex-shrink-0" />
                  <span>Schedule sessions consistently for best results</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-fern-600 mt-1 flex-shrink-0" />
                  <span>Celebrate achievements to boost client motivation</span>
                </li>
              </ul>
            </div>
          </section>

          <footer className="px-5 pb-8 bg-mocha-50">
            <p className="text-center text-charcoal-700 text-xs">© 2024 Repfolio. All rights reserved.</p>
          </footer>
        </main>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
