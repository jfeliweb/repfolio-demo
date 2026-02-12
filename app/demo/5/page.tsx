'use client';

import { useState } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo5() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-20">
        <main id="main-content" className="min-h-screen">
          <header className="px-5 pt-6 pb-4 bg-mocha-50 sticky top-0 z-40">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm"
                  aria-label="Menu"
                >
                  <i className="fa-solid fa-bars text-charcoal-900" />
                </button>
                <RepfolioLogo width={100} height={28} />
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm relative"
                >
                  <i className="fa-solid fa-bell text-charcoal-900" />
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 rounded-full text-[10px] text-white font-bold flex items-center justify-center">
                    3
                  </span>
                </button>
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Ronald"
                  className="w-10 h-10 rounded-full object-cover border-2 border-fern-600 shadow-sm"
                />
              </div>
            </div>
          </header>

          <section id="greeting-section" className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h1 className="text-charcoal-900 font-bold text-2xl mb-1">
                  Welcome back, Marcus
                </h1>
                <p className="text-charcoal-700 text-sm">
                  Ready for another great day of coaching
                </p>
              </div>
            </div>
            <div className="bg-fern-50 rounded-xl p-3 mt-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-calendar-day text-white text-lg" />
              </div>
              <div>
                <div className="text-charcoal-900 font-bold text-base">
                  Monday, February 10, 2025
                </div>
                <div className="text-charcoal-700 text-xs">2:34 PM</div>
              </div>
            </div>
          </section>

          <section id="stats-overview-section" className="px-5 pb-6 bg-mocha-50">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-calendar-check text-fern-600 text-lg" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-charcoal-900 mb-1">6</div>
                <div className="text-charcoal-700 text-xs font-medium">
                  Sessions Today
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-brightFern-400/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-users text-brightFern-600 text-lg" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-charcoal-900 mb-1">18</div>
                <div className="text-charcoal-700 text-xs font-medium">
                  Active Clients
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-clock text-yellowGreen-600 text-lg" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-charcoal-900 mb-1">14</div>
                <div className="text-charcoal-700 text-xs font-medium">
                  Hours This Week
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-dollar-sign text-fern-600 text-lg" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-charcoal-900 mb-1">
                  $1,260
                </div>
                <div className="text-charcoal-700 text-xs font-medium">
                  This Month
                </div>
              </div>
            </div>
          </section>

          <section id="quick-actions-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h2 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-bolt text-yellowGreen-500" />
                <span>Quick Actions</span>
              </h2>
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-3 bg-fern-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-fern-600 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-plus text-white text-lg" />
                  </div>
                  <span className="text-charcoal-900 text-xs font-semibold text-center">
                    Add Session
                  </span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-3 bg-brightFern-400/10 rounded-lg"
                >
                  <div className="w-12 h-12 bg-brightFern-600 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-user-plus text-white text-lg" />
                  </div>
                  <span className="text-charcoal-900 text-xs font-semibold text-center">
                    New Client
                  </span>
                </button>
                <button
                  type="button"
                  className="flex flex-col items-center gap-2 p-3 bg-yellowGreen-500/10 rounded-lg"
                >
                  <div className="w-12 h-12 bg-yellowGreen-500 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-chart-line text-charcoal-900 text-lg" />
                  </div>
                  <span className="text-charcoal-900 text-xs font-semibold text-center">
                    View Stats
                  </span>
                </button>
              </div>
            </div>
          </section>

          <section id="todays-schedule-section" className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-charcoal-900 font-bold text-lg flex items-center gap-2">
                <i className="fa-solid fa-calendar-days text-fern-600" />
                <span>Today&apos;s Schedule</span>
              </h2>
              <button type="button" className="text-fern-600 text-sm font-semibold">
                View All
              </button>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200 mb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-fern-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-futbol text-fern-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-charcoal-900 font-bold text-base">
                      3:00 PM - 4:00 PM
                    </div>
                    <div className="text-charcoal-700 text-xs">60 minutes</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-yellowGreen-500/20 rounded-lg">
                  <span className="text-yellowGreen-600 text-xs font-bold">
                    Upcoming
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Emma"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-charcoal-900 font-semibold text-sm">
                    Emma Rodriguez
                  </div>
                  <div className="text-charcoal-700 text-xs">U14 Goalkeeper</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-location-dot text-charcoal-700 text-sm" />
                <span className="text-charcoal-700 text-xs">
                  Central Park Sports Complex
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 bg-fern-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone" />
                  <span>Call</span>
                </button>
                <button
                  type="button"
                  className="flex-1 bg-brightFern-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-message" />
                  <span>Message</span>
                </button>
                <button
                  type="button"
                  className="w-11 bg-yellowGreen-500 text-charcoal-900 font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center"
                >
                  <i className="fa-solid fa-directions" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200 mb-3">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brightFern-400/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-hockey-puck text-brightFern-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-charcoal-900 font-bold text-base">
                      4:30 PM - 5:30 PM
                    </div>
                    <div className="text-charcoal-700 text-xs">60 minutes</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-mocha-100 rounded-lg">
                  <span className="text-charcoal-700 text-xs font-bold">Later</span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                  alt="Marcus"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-charcoal-900 font-semibold text-sm">
                    Marcus Thompson
                  </div>
                  <div className="text-charcoal-700 text-xs">U16 Goalkeeper</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-location-dot text-charcoal-700 text-sm" />
                <span className="text-charcoal-700 text-xs">
                  Riverside Hockey Arena
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 bg-fern-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone" />
                  <span>Call</span>
                </button>
                <button
                  type="button"
                  className="flex-1 bg-brightFern-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-message" />
                  <span>Message</span>
                </button>
                <button
                  type="button"
                  className="w-11 bg-yellowGreen-500 text-charcoal-900 font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center"
                >
                  <i className="fa-solid fa-directions" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellowGreen-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-lacrosse-stick text-yellowGreen-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-charcoal-900 font-bold text-base">
                      6:00 PM - 7:00 PM
                    </div>
                    <div className="text-charcoal-700 text-xs">60 minutes</div>
                  </div>
                </div>
                <div className="px-3 py-1 bg-mocha-100 rounded-lg">
                  <span className="text-charcoal-700 text-xs font-bold">
                    Evening
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                  alt="Sophia"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-charcoal-900 font-semibold text-sm">
                    Sophia Chen
                  </div>
                  <div className="text-charcoal-700 text-xs">U12 Goalkeeper</div>
                </div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-location-dot text-charcoal-700 text-sm" />
                <span className="text-charcoal-700 text-xs">
                  Lakeside Lacrosse Field
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 bg-fern-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone" />
                  <span>Call</span>
                </button>
                <button
                  type="button"
                  className="flex-1 bg-brightFern-600 text-white font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-message" />
                  <span>Message</span>
                </button>
                <button
                  type="button"
                  className="w-11 bg-yellowGreen-500 text-charcoal-900 font-semibold py-2.5 px-3 rounded-lg text-xs flex items-center justify-center"
                >
                  <i className="fa-solid fa-directions" />
                </button>
              </div>
            </div>
          </section>

          <section id="recent-activity-section" className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-charcoal-900 font-bold text-lg flex items-center gap-2">
                <i className="fa-solid fa-clock-rotate-left text-fern-600" />
                <span>Recent Activity</span>
              </h2>
              <button type="button" className="text-fern-600 text-sm font-semibold">
                See More
              </button>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-trophy text-yellowGreen-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">
                      Progress Milestone Reached
                    </div>
                    <p className="text-charcoal-700 text-xs mb-2">
                      Emma Rodriguez completed 20 sessions and improved reaction
                      time by 15%
                    </p>
                    <div className="text-charcoal-700 text-xs">2 hours ago</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-calendar-plus text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">
                      New Booking Request
                    </div>
                    <p className="text-charcoal-700 text-xs mb-2">
                      Sarah Martinez wants to book 3 sessions for her son next
                      week
                    </p>
                    <div className="flex gap-2 mb-2">
                      <button
                        type="button"
                        className="px-3 py-1.5 bg-fern-600 text-white rounded-lg text-xs font-semibold"
                      >
                        Accept
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1.5 bg-mocha-100 text-charcoal-700 rounded-lg text-xs font-semibold"
                      >
                        Decline
                      </button>
                    </div>
                    <div className="text-charcoal-700 text-xs">3 hours ago</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brightFern-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-star text-brightFern-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">
                      New 5-Star Review
                    </div>
                    <p className="text-charcoal-700 text-xs mb-2">
                      &quot;Ronald is an amazing coach! My daughter loves working
                      with him and has improved so much.&quot;
                    </p>
                    <div className="text-charcoal-700 text-xs">5 hours ago</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-dollar-sign text-yellowGreen-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">
                      Payment Received
                    </div>
                    <p className="text-charcoal-700 text-xs mb-2">
                      $120 for 2 sessions with Marcus Thompson
                    </p>
                    <div className="text-charcoal-700 text-xs">Yesterday</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-message text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">
                      New Message
                    </div>
                    <p className="text-charcoal-700 text-xs mb-2">
                      Jennifer Lee: &quot;Can we reschedule Thursday&apos;s session to
                      Friday?&quot;
                    </p>
                    <div className="text-charcoal-700 text-xs">Yesterday</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="performance-insights-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-charcoal-900 font-bold text-base flex items-center gap-2">
                  <i className="fa-solid fa-chart-line text-fern-600" />
                  <span>This Week&apos;s Performance</span>
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-700 text-xs font-semibold">
                      Sessions Completed
                    </span>
                    <span className="text-charcoal-900 text-sm font-bold">
                      12/15
                    </span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-fern-600 rounded-full"
                      style={{ width: '80%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-700 text-xs font-semibold">
                      Client Satisfaction
                    </span>
                    <span className="text-charcoal-900 text-sm font-bold">
                      4.9/5.0
                    </span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellowGreen-500 rounded-full"
                      style={{ width: '98%' }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-700 text-xs font-semibold">
                      Revenue Goal
                    </span>
                    <span className="text-charcoal-900 text-sm font-bold">
                      $1,840/$2,000
                    </span>
                  </div>
                  <div className="w-full h-2 bg-mocha-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brightFern-600 rounded-full"
                      style={{ width: '92%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="upcoming-availability-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-mocha-200">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-charcoal-900 font-bold text-base flex items-center gap-2">
                  <i className="fa-solid fa-calendar-check text-fern-600" />
                  <span>Availability This Week</span>
                </h2>
                <button type="button" className="text-fern-600 text-xs font-semibold">
                  Edit
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-mocha-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center">
                      <span className="text-fern-600 text-xs font-bold">M</span>
                    </div>
                    <span className="text-charcoal-900 text-sm font-medium">
                      Monday
                    </span>
                  </div>
                  <span className="text-charcoal-700 text-xs">
                    3:00 PM - 8:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-mocha-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center">
                      <span className="text-fern-600 text-xs font-bold">T</span>
                    </div>
                    <span className="text-charcoal-900 text-sm font-medium">
                      Tuesday
                    </span>
                  </div>
                  <span className="text-charcoal-700 text-xs">
                    4:00 PM - 9:00 PM
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-mocha-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-mocha-100 rounded-lg flex items-center justify-center">
                      <span className="text-charcoal-700 text-xs font-bold">W</span>
                    </div>
                    <span className="text-charcoal-700 text-sm font-medium">
                      Wednesday
                    </span>
                  </div>
                  <span className="text-charcoal-700 text-xs">Not Available</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center">
                      <span className="text-fern-600 text-xs font-bold">T</span>
                    </div>
                    <span className="text-charcoal-900 text-sm font-medium">
                      Thursday
                    </span>
                  </div>
                  <span className="text-charcoal-700 text-xs">
                    3:00 PM - 7:00 PM
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section id="client-spotlight-section" className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-charcoal-900 font-bold text-lg flex items-center gap-2">
                <i className="fa-solid fa-users text-fern-600" />
                <span>Top Clients</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Emma"
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                />
                <div className="text-charcoal-900 font-semibold text-sm text-center mb-1">
                  Emma Rodriguez
                </div>
                <div className="text-charcoal-700 text-xs text-center mb-3">
                  22 Sessions
                </div>
                <div className="flex items-center justify-center gap-1">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 shadow-sm border border-mocha-200">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                  alt="Marcus"
                  className="w-16 h-16 rounded-full object-cover mx-auto mb-3"
                />
                <div className="text-charcoal-900 font-semibold text-sm text-center mb-1">
                  Marcus Thompson
                </div>
                <div className="text-charcoal-700 text-xs text-center mb-3">
                  18 Sessions
                </div>
                <div className="flex items-center justify-center gap-1">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                </div>
              </div>
            </div>
          </section>

          <section id="coach-tips-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-yellowGreen-500/10 rounded-xl p-5 border border-yellowGreen-500/30">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-lightbulb text-yellowGreen-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">
                    Coach Tip of the Day
                  </h3>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Remember to document progress after each session. Parents love
                    seeing detailed feedback about their athlete&apos;s development!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="earnings-summary-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-charcoal-900 font-bold text-base flex items-center gap-2">
                  <i className="fa-solid fa-money-bill-trend-up text-fern-600" />
                  <span>Earnings Overview</span>
                </h2>
                <button type="button" className="text-fern-600 text-xs font-semibold">
                  Details
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="text-charcoal-700 text-xs mb-1">This Week</div>
                  <div className="text-charcoal-900 text-2xl font-bold">$680</div>
                </div>
                <div>
                  <div className="text-charcoal-700 text-xs mb-1">Last Week</div>
                  <div className="text-charcoal-700 text-2xl font-bold">$520</div>
                </div>
              </div>
              <div className="bg-brightFern-400/10 rounded-lg p-3 flex items-center justify-between">
                <div>
                  <div className="text-brightFern-600 text-xs font-semibold mb-0.5">
                    +30.8% Growth
                  </div>
                  <div className="text-charcoal-700 text-xs">vs last week</div>
                </div>
                <i className="fa-solid fa-arrow-trend-up text-brightFern-600 text-2xl" />
              </div>
            </div>
          </section>

          <section id="session-reminders-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-fern-50 rounded-xl p-5 border-2 border-fern-600/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-bell text-fern-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-semibold text-sm mb-2">
                    Upcoming Reminders
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle text-fern-600 text-[6px]" />
                      <span className="text-charcoal-700 text-xs">
                        Emma&apos;s session starts in 30 minutes
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle text-fern-600 text-[6px]" />
                      <span className="text-charcoal-700 text-xs">
                        Submit progress report for Marcus by EOD
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="fa-solid fa-circle text-fern-600 text-[6px]" />
                      <span className="text-charcoal-700 text-xs">
                        2 booking requests pending approval
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="motivational-quote-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 shadow-sm border border-mocha-200 text-center">
              <i className="fa-solid fa-quote-left text-fern-600 text-2xl mb-3" />
              <p className="text-charcoal-900 text-base font-semibold italic mb-3 leading-relaxed">
                &quot;Great coaches don&apos;t just teach skills, they inspire confidence
                and build character.&quot;
              </p>
              <div className="text-charcoal-700 text-xs">- Anonymous</div>
            </div>
          </section>
        </main>

        {/* Sidebar overlay */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
          className={`fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity ${
            sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />
        <div
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Ronald"
                  className="w-12 h-12 rounded-full object-cover border-2 border-fern-600"
                />
                <div>
                  <div className="text-charcoal-900 font-bold text-base">
                    Ronald
                  </div>
                  <div className="text-charcoal-700 text-xs">
                    Professional Coach
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="w-8 h-8 bg-mocha-100 rounded-lg flex items-center justify-center"
                aria-label="Close menu"
              >
                <i className="fa-solid fa-xmark text-charcoal-900" />
              </button>
            </div>

            <nav className="space-y-2">
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 bg-fern-50 rounded-lg"
              >
                <i className="fa-solid fa-house text-fern-600" />
                <span className="text-fern-600 font-semibold text-sm">
                  Dashboard
                </span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-mocha-100"
              >
                <i className="fa-solid fa-calendar text-charcoal-700" />
                <span className="text-charcoal-900 text-sm">My Schedule</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-mocha-100"
              >
                <i className="fa-solid fa-users text-charcoal-700" />
                <span className="text-charcoal-900 text-sm">My Clients</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-mocha-100"
              >
                <i className="fa-solid fa-chart-line text-charcoal-700" />
                <span className="text-charcoal-900 text-sm">Performance</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-mocha-100"
              >
                <i className="fa-solid fa-dollar-sign text-charcoal-700" />
                <span className="text-charcoal-900 text-sm">Earnings</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-mocha-100"
              >
                <i className="fa-solid fa-message text-charcoal-700" />
                <span className="text-charcoal-900 text-sm">Messages</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-mocha-100"
              >
                <i className="fa-solid fa-gear text-charcoal-700" />
                <span className="text-charcoal-900 text-sm">Settings</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-mocha-100"
              >
                <i className="fa-solid fa-circle-question text-charcoal-700" />
                <span className="text-charcoal-900 text-sm">Help & Support</span>
              </a>
            </nav>

            <div className="mt-6 pt-6 border-t border-mocha-200">
              <button
                type="button"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-100 w-full text-left"
              >
                <i className="fa-solid fa-right-from-bracket text-red-600" />
                <span className="text-red-600 font-semibold text-sm">
                  Log Out
                </span>
              </button>
            </div>
          </div>
        </div>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
