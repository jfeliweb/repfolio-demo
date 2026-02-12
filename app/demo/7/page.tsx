'use client';

import { useState, useEffect } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

const MINI_CALENDAR_DAYS = [
  28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 1, 2,
];

function TimeSlot({
  time,
  children,
}: {
  time: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="h-[60px] grid grid-cols-8 border-b border-mocha-200 relative">
      <div className="p-2 border-r border-mocha-200 bg-mocha-50/20 flex items-center justify-center">
        <span className="text-charcoal-700 text-xs font-medium">{time}</span>
      </div>
      {children}
    </div>
  );
}

function CalendarCell({ children }: { children?: React.ReactNode }) {
  return (
    <div className="border-r border-mocha-200 bg-white relative min-h-[60px]">
      {children}
    </div>
  );
}

function SessionBlock({
  variant,
  title,
  subtitle,
}: {
  variant: 'booked' | 'available';
  title: string;
  subtitle: string;
}) {
  const isBooked = variant === 'booked';
  return (
    <div
      className={
        `absolute left-1 right-1 rounded-md overflow-hidden p-2 top-1 h-[52px] text-xs ` +
        (isBooked ? 'bg-fern-600 text-white' : 'bg-brightFern-400 text-white')
      }
    >
      <div className="font-bold truncate">{title}</div>
      <div className="opacity-80 truncate">{subtitle}</div>
    </div>
  );
}

export default function Demo7() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const openDrawer = () => setDrawerOpen(true);
  const closeDrawer = () => setDrawerOpen(false);

  // Body scroll lock when sidebar is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Close sidebar on Escape (overlay onKeyDown only fires when overlay is focused)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    if (drawerOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [drawerOpen]);

  const filters = [
    { id: 'all', label: 'All Clients' },
    { id: '1on1', label: '1-on-1 Training' },
    { id: 'group', label: 'Group Session' },
    { id: 'assessment', label: 'Assessment' },
  ];

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans">
        {/* Sidebar overlay - same pattern as demo 8 */}
        <div
          role="button"
          tabIndex={0}
          onClick={closeDrawer}
          onKeyDown={(e) => e.key === 'Escape' && closeDrawer()}
          className={`fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity ${
            drawerOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />
        {/* Sidebar drawer - use transform like demo 8 so it doesn't block hamburger */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          aria-label="Sidebar"
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
                onClick={closeDrawer}
                className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                aria-label="Close menu"
              >
                <i className="fa-solid fa-times" />
              </button>
            </div>

            <div className="mb-6">
              <div className="bg-white rounded-xl p-4 border border-mocha-200">
                <div className="flex items-center justify-between mb-3">
                  <button
                    type="button"
                    className="w-8 h-8 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900 text-xs"
                  >
                    <i className="fa-solid fa-chevron-left" />
                  </button>
                  <h3 className="text-charcoal-900 font-bold text-sm">
                    February 2024
                  </h3>
                  <button
                    type="button"
                    className="w-8 h-8 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900 text-xs"
                  >
                    <i className="fa-solid fa-chevron-right" />
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
                    <div
                      key={d}
                      className="text-charcoal-700 text-xs font-semibold text-center"
                    >
                      {d}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {MINI_CALENDAR_DAYS.map((day, i) => {
                    const isGray = i < 4 || i >= 33;
                    const isToday = day === 9 && !isGray;
                    return (
                      <button
                        key={`${day}-${i}`}
                        type="button"
                        className={`w-7 h-7 flex items-center justify-center rounded-lg text-xs font-medium ${
                          isToday
                            ? 'bg-fern-600 text-white font-bold'
                            : isGray
                              ? 'text-charcoal-700'
                              : 'text-charcoal-900 hover:bg-mocha-50'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                This Week
              </h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Total Sessions
                    </span>
                    <span className="text-fern-600 font-bold text-lg">12</span>
                  </div>
                </div>
                <div className="bg-brightFern-400/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Available Slots
                    </span>
                    <span className="text-brightFern-600 font-bold text-lg">
                      8
                    </span>
                  </div>
                </div>
                <div className="bg-yellowGreen-500/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Hours Booked
                    </span>
                    <span className="text-charcoal-900 font-bold text-lg">
                      18h
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                Next Session
              </h3>
              <div className="bg-white rounded-lg p-3 border border-mocha-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-user text-fern-600 text-xs" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-charcoal-900 font-semibold text-xs truncate">
                      Sarah Martinez
                    </div>
                    <div className="text-charcoal-700 text-xs">
                      1-on-1 Training
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-charcoal-700 text-xs">
                  <i className="fa-solid fa-clock text-fern-600 text-xs" />
                  <span>Today at 2:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">
                Legend
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-fern-600 rounded" />
                  <span className="text-charcoal-900 text-xs">
                    Booked Session
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-brightFern-400 rounded" />
                  <span className="text-charcoal-900 text-xs">
                    Available Slot
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-mocha-50 border border-mocha-200 rounded" />
                  <span className="text-charcoal-900 text-xs">Blocked Time</span>
                </div>
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
                  onClick={() => setDrawerOpen(true)}
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                  aria-label="Open menu"
                  aria-expanded={drawerOpen}
                >
                  <i className="fa-solid fa-bars text-charcoal-900" />
                </button>
                <div className="flex items-center gap-2">
                  <RepfolioLogo width={100} height={28} />
                </div>
                <button
                  type="button"
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center relative text-charcoal-900"
                  aria-label="Notifications"
                >
                  <i className="fa-solid fa-bell" />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-charcoal-900 font-bold text-xl">
                    My Calendar
                  </h1>
                  <p className="text-charcoal-700 text-xs">
                    Week of Feb 5-11, 2024
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => alert("Scrolling to today's date...")}
                  className="px-3 py-1.5 bg-fern-600/10 text-fern-600 rounded-lg text-xs font-semibold"
                >
                  Today
                </button>
              </div>
            </div>
          </header>

          <section className="px-5 py-4 bg-mocha-50">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {filters.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex items-center gap-2 ${
                    activeFilter === f.id
                      ? 'bg-fern-600 text-white'
                      : 'bg-white border border-mocha-200 text-charcoal-900'
                  }`}
                >
                  {activeFilter === f.id && (
                    <i className="fa-solid fa-check-circle" />
                  )}
                  <span>{f.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-mocha-200 text-charcoal-900"
              >
                <i className="fa-solid fa-chevron-left" />
              </button>
              <div className="flex-1 mx-3 bg-white rounded-xl p-3 border border-mocha-200">
                <div className="flex items-center justify-center gap-2">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 font-bold text-sm">
                    Feb 5 - Feb 11
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm border border-mocha-200 text-charcoal-900"
              >
                <i className="fa-solid fa-chevron-right" />
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <button
              type="button"
              onClick={() => alert('Opening availability form...')}
              className="w-full bg-brightFern-400 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-plus-circle" />
              <span>Add Availability</span>
            </button>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl border border-mocha-200 overflow-hidden">
              <div className="grid grid-cols-8 border-b border-mocha-200 bg-mocha-50/30">
                <div className="p-2 border-r border-mocha-200">
                  <div className="text-charcoal-700 text-xs font-semibold text-center">
                    Time
                  </div>
                </div>
                <div className="p-2 border-r border-mocha-200">
                  <div className="text-charcoal-900 text-xs font-bold text-center">
                    Mon
                  </div>
                  <div className="text-charcoal-700 text-xs text-center">5</div>
                </div>
                <div className="p-2 border-r border-mocha-200">
                  <div className="text-charcoal-900 text-xs font-bold text-center">
                    Tue
                  </div>
                  <div className="text-charcoal-700 text-xs text-center">6</div>
                </div>
                <div className="p-2 border-r border-mocha-200">
                  <div className="text-charcoal-900 text-xs font-bold text-center">
                    Wed
                  </div>
                  <div className="text-charcoal-700 text-xs text-center">7</div>
                </div>
                <div className="p-2 border-r border-mocha-200">
                  <div className="text-charcoal-900 text-xs font-bold text-center">
                    Thu
                  </div>
                  <div className="text-charcoal-700 text-xs text-center">8</div>
                </div>
                <div className="p-2 border-r border-mocha-200 bg-fern-600/5">
                  <div className="text-fern-600 text-xs font-bold text-center">
                    Fri
                  </div>
                  <div className="text-fern-600 text-xs text-center">9</div>
                </div>
                <div className="p-2 border-r border-mocha-200">
                  <div className="text-charcoal-900 text-xs font-bold text-center">
                    Sat
                  </div>
                  <div className="text-charcoal-700 text-xs text-center">10</div>
                </div>
                <div className="p-2">
                  <div className="text-charcoal-900 text-xs font-bold text-center">
                    Sun
                  </div>
                  <div className="text-charcoal-700 text-xs text-center">11</div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[640px]">
                  <TimeSlot time="6 AM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="7 AM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="8 AM">
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Mike Chen"
                        subtitle="1-on-1"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="9 AM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="available"
                        title="Available"
                        subtitle="Open slot"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="10 AM">
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Emma Davis"
                        subtitle="Group"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="available"
                        title="Available"
                        subtitle="Open slot"
                      />
                    </CalendarCell>
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="11 AM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Alex Johnson"
                        subtitle="1-on-1"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="12 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="1 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]">
                      <SessionBlock
                        variant="available"
                        title="Available"
                        subtitle="Open slot"
                      />
                    </div>
                  </TimeSlot>
                  <TimeSlot time="2 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Sarah Martinez"
                        subtitle="1-on-1"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="3 PM">
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Jordan Lee"
                        subtitle="Assessment"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="available"
                        title="Available"
                        subtitle="Open slot"
                      />
                    </CalendarCell>
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="4 PM">
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Olivia Brown"
                        subtitle="1-on-1"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="5 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Noah Wilson"
                        subtitle="Group"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]">
                      <SessionBlock
                        variant="available"
                        title="Available"
                        subtitle="Open slot"
                      />
                    </div>
                  </TimeSlot>
                  <TimeSlot time="6 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="booked"
                        title="Liam Garcia"
                        subtitle="1-on-1"
                      />
                    </CalendarCell>
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="7 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell>
                      <SessionBlock
                        variant="available"
                        title="Available"
                        subtitle="Open slot"
                      />
                    </CalendarCell>
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="8 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                  <TimeSlot time="9 PM">
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <CalendarCell />
                    <div className="bg-white relative min-h-[60px]" />
                  </TimeSlot>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 border border-mocha-200">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-chart-simple text-fern-600" />
                <span>This Week Overview</span>
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-fern-600/10 rounded-lg p-3 text-center">
                  <div className="text-fern-600 font-bold text-2xl mb-1">12</div>
                  <div className="text-charcoal-900 text-xs font-medium">
                    Booked
                  </div>
                </div>
                <div className="bg-brightFern-400/10 rounded-lg p-3 text-center">
                  <div className="text-brightFern-600 font-bold text-2xl mb-1">
                    8
                  </div>
                  <div className="text-charcoal-900 text-xs font-medium">
                    Available
                  </div>
                </div>
                <div className="bg-yellowGreen-500/10 rounded-lg p-3 text-center">
                  <div className="text-charcoal-900 font-bold text-2xl mb-1">
                    20
                  </div>
                  <div className="text-charcoal-900 text-xs font-medium">
                    Total Slots
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Upcoming Sessions
              </h2>
              <button type="button" className="text-fern-600 text-sm font-semibold">
                View All
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-mocha-200">
                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="Sarah Martinez"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-charcoal-900 font-bold text-sm">
                          Sarah Martinez
                        </h3>
                        <p className="text-charcoal-700 text-xs">
                          1-on-1 Training Session
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-user text-fern-600 text-xs" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5 text-charcoal-700">
                        <i className="fa-solid fa-calendar text-fern-600" />
                        <span>Today</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-charcoal-700">
                        <i className="fa-solid fa-clock text-fern-600" />
                        <span>2:00 PM - 3:00 PM</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        className="flex-1 bg-fern-600 text-white text-xs font-semibold py-2 px-3 rounded-lg"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                      >
                        <i className="fa-solid fa-message text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-mocha-200">
                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                    alt="Mike Chen"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-charcoal-900 font-bold text-sm">
                          Mike Chen
                        </h3>
                        <p className="text-charcoal-700 text-xs">
                          1-on-1 Training Session
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-user text-fern-600 text-xs" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5 text-charcoal-700">
                        <i className="fa-solid fa-calendar text-fern-600" />
                        <span>Mon, Feb 5</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-charcoal-700">
                        <i className="fa-solid fa-clock text-fern-600" />
                        <span>8:00 AM - 9:00 AM</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        className="flex-1 bg-fern-600 text-white text-xs font-semibold py-2 px-3 rounded-lg"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                      >
                        <i className="fa-solid fa-message text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-mocha-200">
                <div className="flex items-start gap-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Emma Davis"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-charcoal-900 font-bold text-sm">
                          Emma Davis
                        </h3>
                        <p className="text-charcoal-700 text-xs">
                          Group Training Session
                        </p>
                      </div>
                      <div className="w-8 h-8 bg-brightFern-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-users text-brightFern-600 text-xs" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="flex items-center gap-1.5 text-charcoal-700">
                        <i className="fa-solid fa-calendar text-fern-600" />
                        <span>Tue, Feb 6</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-charcoal-700">
                        <i className="fa-solid fa-clock text-fern-600" />
                        <span>10:00 AM - 11:00 AM</span>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <button
                        type="button"
                        className="flex-1 bg-fern-600 text-white text-xs font-semibold py-2 px-3 rounded-lg"
                      >
                        View Details
                      </button>
                      <button
                        type="button"
                        className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                      >
                        <i className="fa-solid fa-message text-xs" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 border border-mocha-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-charcoal-900 font-bold text-base">
                  Manage Availability
                </h3>
                <i className="fa-solid fa-clock text-fern-600 text-lg" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-brightFern-400/5 rounded-lg border border-brightFern-400/20">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-0.5">
                      Open Slots This Week
                    </div>
                    <div className="text-charcoal-700 text-xs">
                      8 available time slots
                    </div>
                  </div>
                  <div className="text-brightFern-600 font-bold text-xl">8</div>
                </div>
                <div className="flex items-center justify-between p-3 bg-mocha-50 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-0.5">
                      Recurring Availability
                    </div>
                    <div className="text-charcoal-700 text-xs">
                      Set weekly patterns
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-fern-600 text-xs font-semibold"
                  >
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
                <button
                  type="button"
                  className="w-full bg-fern-600/10 text-fern-600 border-2 border-dashed border-fern-600/30 font-semibold py-3 px-6 rounded-lg text-sm flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-calendar-plus" />
                  <span>Block Time Off</span>
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Session Types
            </h2>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-mocha-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-user text-fern-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-bold text-sm">
                        1-on-1 Training
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        60 min • $80/session
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                  >
                    <i className="fa-solid fa-pen text-xs" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-mocha-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brightFern-400/10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-users text-brightFern-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-bold text-sm">
                        Group Session
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        90 min • $50/person
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                  >
                    <i className="fa-solid fa-pen text-xs" />
                  </button>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-mocha-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-clipboard-check text-charcoal-900" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-bold text-sm">
                        Assessment
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        45 min • $60/session
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center text-charcoal-900"
                  >
                    <i className="fa-solid fa-pen text-xs" />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-mocha-50 border-2 border-dashed border-mocha-200 text-charcoal-900 font-semibold py-4 px-6 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-plus text-fern-600" />
                <span>Add Session Type</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 border border-mocha-200">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-gear text-fern-600" />
                <span>Calendar Settings</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-mocha-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-bell text-fern-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">
                        Session Reminders
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        1 hour before
                      </div>
                    </div>
                  </div>
                  <div className="w-11 h-6 bg-fern-600 rounded-full relative">
                    <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 shadow-sm" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-mocha-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-calendar-xmark text-fern-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">
                        Cancellation Policy
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        24 hours notice
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-fern-600 text-xs font-semibold"
                  >
                    Edit
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 bg-mocha-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-calendar-days text-fern-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">
                        Booking Window
                      </div>
                      <div className="text-charcoal-700 text-xs">
                        30 days in advance
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-fern-600 text-xs font-semibold"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-yellowGreen-500/10 rounded-xl p-5 border border-yellowGreen-500/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-sync text-charcoal-900 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">
                    Sync Your Calendar
                  </h3>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Connect Google Calendar or Outlook to avoid double bookings
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="flex-1 bg-white text-charcoal-900 font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2 border border-mocha-200"
                >
                  <i className="fa-brands fa-google text-red-500" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="flex-1 bg-white text-charcoal-900 font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2 border border-mocha-200"
                >
                  <i className="fa-brands fa-microsoft text-fern-600" />
                  <span>Outlook</span>
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="bg-white rounded-xl p-4 border border-mocha-200 text-left"
              >
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-calendar-plus text-fern-600" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">
                  Add Session
                </div>
                <div className="text-charcoal-700 text-xs">Create new booking</div>
              </button>
              <button
                type="button"
                className="bg-white rounded-xl p-4 border border-mocha-200 text-left"
              >
                <div className="w-10 h-10 bg-brightFern-400/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-clock text-brightFern-600" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">
                  Set Hours
                </div>
                <div className="text-charcoal-700 text-xs">
                  Update availability
                </div>
              </button>
              <button
                type="button"
                className="bg-white rounded-xl p-4 border border-mocha-200 text-left"
              >
                <div className="w-10 h-10 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-file-export text-charcoal-900" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">
                  Export
                </div>
                <div className="text-charcoal-700 text-xs">
                  Download schedule
                </div>
              </button>
              <button
                type="button"
                className="bg-white rounded-xl p-4 border border-mocha-200 text-left"
              >
                <div className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-print text-charcoal-900" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">
                  Print
                </div>
                <div className="text-charcoal-700 text-xs">Print calendar</div>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 border border-mocha-200">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-lightbulb text-fern-600" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-sm mb-1">
                    Pro Tip
                  </h3>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Keep your availability up to date to maximize bookings.
                    Clients are 3x more likely to book when they see multiple
                    open slots.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <footer className="px-5 pb-8 pt-4 bg-mocha-50">
            <p className="text-center text-charcoal-700 text-xs">
              © 2024 Repfolio. All rights reserved.
            </p>
          </footer>

          <DemoNavigation />
        </main>
      </div>
    </RequireAuth>
  );
}
