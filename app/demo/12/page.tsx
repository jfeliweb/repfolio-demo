'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

const DAYS = [
  { key: 'monday', label: 'Monday', letter: 'M', start: '09:00', end: '17:00' },
  { key: 'tuesday', label: 'Tuesday', letter: 'T', start: '09:00', end: '17:00' },
  { key: 'wednesday', label: 'Wednesday', letter: 'W', start: '09:00', end: '17:00' },
  { key: 'thursday', label: 'Thursday', letter: 'T', start: '09:00', end: '17:00' },
  { key: 'friday', label: 'Friday', letter: 'F', start: '09:00', end: '17:00' },
  { key: 'saturday', label: 'Saturday', letter: 'S', start: '10:00', end: '14:00' },
  { key: 'sunday', label: 'Sunday', letter: 'S', start: '10:00', end: '14:00' },
] as const;

const initialDayActive: Record<string, boolean> = {
  monday: true,
  tuesday: true,
  wednesday: true,
  thursday: false,
  friday: true,
  saturday: true,
  sunday: false,
};

type SaveState = 'idle' | 'saving' | 'success';

export default function Demo12() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [addBreakModalOpen, setAddBreakModalOpen] = useState(false);
  const [addLocationModalOpen, setAddLocationModalOpen] = useState(false);
  const [dayActive, setDayActive] = useState(initialDayActive);
  const [autoAccept, setAutoAccept] = useState(true);
  const [sameDay, setSameDay] = useState(false);
  const [reminders, setReminders] = useState(true);
  const [holidays, setHolidays] = useState(true);
  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [timeFormat, setTimeFormat] = useState<'12h' | '24h'>('12h');
  const [breaks, setBreaks] = useState([{ id: '1', name: 'Lunch Break', start: '12:00', end: '13:00' }]);

  const toggleDay = (day: string) => {
    setDayActive((prev) => ({ ...prev, [day]: !prev[day] }));
  };

  const handleSaveAvailability = () => {
    setSaveState('saving');
    setTimeout(() => {
      setSaveState('success');
      setTimeout(() => setSaveState('idle'), 2000);
    }, 1500);
  };

  const handleDeleteBreak = (id: string) => {
    if (typeof window !== 'undefined' && window.confirm('Delete this break?')) {
      setBreaks((prev) => prev.filter((b) => b.id !== id));
    }
  };

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-20">
        {/* Drawer overlay */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setSidebarOpen(false)}
          className={`fixed inset-0 bg-charcoal-900/50 z-40 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Sidebar drawer */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 transform transition-transform duration-300 overflow-y-auto shadow-xl ${
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
                className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center"
                aria-label="Close menu"
              >
                <i className="fa-solid fa-times text-charcoal-900" />
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Today&apos;s Stats</h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Sessions Today</span>
                    <span className="text-fern-600 font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="bg-brightFern-400/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Upcoming</span>
                    <span className="text-brightFern-600 font-bold text-lg">2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Quick Links</h3>
              <div className="space-y-2">
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Calendar</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-users text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Clients</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
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
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center"
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
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center"
                  aria-label="Menu"
                >
                  <i className="fa-solid fa-bars text-charcoal-900" />
                </button>
              </div>
            </div>
          </header>

          <section className="px-5 pt-5 pb-4 bg-mocha-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-fern-600/10 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-calendar-clock text-fern-600 text-xl" />
              </div>
              <div>
                <h1 className="text-charcoal-900 font-bold text-xl">Availability Settings</h1>
                <p className="text-charcoal-700 text-sm">Set your weekly schedule</p>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-mocha-200">
                <h2 className="text-charcoal-900 font-bold text-base mb-1">Weekly Schedule</h2>
                <p className="text-charcoal-700 text-xs">Toggle days and set time ranges</p>
              </div>
              <div className="divide-y divide-mocha-200">
                {DAYS.map(({ key, label, letter, start, end }) => (
                  <div key={key} className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center">
                          <span className="text-fern-600 font-bold text-sm">{letter}</span>
                        </div>
                        <span className="text-charcoal-900 font-semibold text-sm">{label}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleDay(key)}
                        className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${
                          dayActive[key] ? 'bg-fern-600' : 'bg-mocha-50'
                        }`}
                        aria-pressed={dayActive[key]}
                        aria-label={`Toggle ${label}`}
                      >
                        <span
                          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                            dayActive[key] ? 'left-7' : 'left-1'
                          }`}
                        />
                      </button>
                    </div>
                    <div
                      className={`ml-12 space-y-2 ${dayActive[key] ? 'block' : 'hidden'}`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="time"
                          defaultValue={start}
                          className="flex-1 bg-mocha-100 border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-sm"
                        />
                        <span className="text-charcoal-700 text-xs">to</span>
                        <input
                          type="time"
                          defaultValue={end}
                          className="flex-1 bg-mocha-100 border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">Break Times</h3>
                  <p className="text-charcoal-700 text-xs">Add breaks to your schedule</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAddBreakModalOpen(true)}
                  className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center"
                  aria-label="Add break"
                >
                  <i className="fa-solid fa-plus text-white" />
                </button>
              </div>
              <div className="space-y-3">
                {breaks.map((b) => (
                  <div key={b.id} className="bg-mocha-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-charcoal-900 font-semibold text-sm">{b.name}</span>
                      <button
                        type="button"
                        onClick={() => handleDeleteBreak(b.id)}
                        className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center"
                        aria-label="Delete break"
                      >
                        <i className="fa-solid fa-trash text-red-500 text-xs" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="time"
                        defaultValue={b.start}
                        className="flex-1 bg-white border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-sm"
                      />
                      <span className="text-charcoal-700 text-xs">to</span>
                      <input
                        type="time"
                        defaultValue={b.end}
                        className="flex-1 bg-white border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-sm"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Session Settings</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Session Duration</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60" defaultValue="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Buffer Time Between Sessions</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="0">No buffer</option>
                    <option value="15" defaultValue="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                  <p className="text-charcoal-700 text-xs mt-2">Time needed between sessions for preparation</p>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Advance Booking Window</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="1">1 day ahead</option>
                    <option value="2">2 days ahead</option>
                    <option value="7" defaultValue="7">1 week ahead</option>
                    <option value="14">2 weeks ahead</option>
                    <option value="30">1 month ahead</option>
                    <option value="60">2 months ahead</option>
                  </select>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Minimum Notice Period</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="2">2 hours</option>
                    <option value="4">4 hours</option>
                    <option value="12">12 hours</option>
                    <option value="24" defaultValue="24">24 hours</option>
                    <option value="48">48 hours</option>
                  </select>
                  <p className="text-charcoal-700 text-xs mt-2">How far in advance clients must book</p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">Training Locations</h3>
                  <p className="text-charcoal-700 text-xs">Manage available locations</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAddLocationModalOpen(true)}
                  className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center"
                  aria-label="Add location"
                >
                  <i className="fa-solid fa-plus text-white" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="bg-fern-600/10 rounded-xl p-4 animate-slide-in">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 bg-fern-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-location-dot text-fern-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-charcoal-900 font-semibold text-sm mb-1">Main Training Ground</div>
                        <div className="text-charcoal-700 text-xs mb-2">123 Sports Complex, Downtown</div>
                        <div className="flex items-center gap-2">
                          <span className="bg-fern-600/20 text-fern-600 text-xs font-medium px-2 py-1 rounded-md">Primary</span>
                          <span className="bg-brightFern-400/20 text-brightFern-600 text-xs font-medium px-2 py-1 rounded-md">Indoor</span>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center ml-2 border border-mocha-200">
                      <i className="fa-solid fa-pencil text-fern-600 text-xs" />
                    </button>
                  </div>
                </div>
                <div className="bg-brightFern-400/10 rounded-xl p-4 animate-slide-in">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 bg-brightFern-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-location-dot text-brightFern-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-charcoal-900 font-semibold text-sm mb-1">Outdoor Field</div>
                        <div className="text-charcoal-700 text-xs mb-2">456 Park Avenue, North Side</div>
                        <div className="flex items-center gap-2">
                          <span className="bg-brightFern-400/20 text-brightFern-600 text-xs font-medium px-2 py-1 rounded-md">Outdoor</span>
                          <span className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-medium px-2 py-1 rounded-md">Grass</span>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center ml-2 border border-mocha-200">
                      <i className="fa-solid fa-pencil text-brightFern-600 text-xs" />
                    </button>
                  </div>
                </div>
                <div className="bg-yellowGreen-500/10 rounded-xl p-4 animate-slide-in">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="fa-solid fa-location-dot text-yellowGreen-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-charcoal-900 font-semibold text-sm mb-1">Community Center</div>
                        <div className="text-charcoal-700 text-xs mb-2">789 Community Blvd, East District</div>
                        <div className="flex items-center gap-2">
                          <span className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-medium px-2 py-1 rounded-md">Indoor</span>
                          <span className="bg-fern-600/20 text-fern-600 text-xs font-medium px-2 py-1 rounded-md">Turf</span>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center ml-2 border border-mocha-200">
                      <i className="fa-solid fa-pencil text-yellowGreen-600 text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brightFern-400/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-calendar-check text-brightFern-600" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base">Bookable Slots Preview</h3>
                  <p className="text-charcoal-700 text-xs">Next 7 days availability</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { day: 'Monday, Feb 12', slots: 6, times: ['9:00 AM', '10:15 AM', '11:30 AM', '1:15 PM', '2:30 PM', '3:45 PM'] },
                  { day: 'Tuesday, Feb 13', slots: 6, times: ['9:00 AM', '10:15 AM', '11:30 AM', '1:15 PM', '2:30 PM', '3:45 PM'] },
                  { day: 'Wednesday, Feb 14', slots: 6, times: ['9:00 AM', '10:15 AM', '11:30 AM', '1:15 PM', '2:30 PM', '3:45 PM'] },
                  { day: 'Friday, Feb 16', slots: 6, times: ['9:00 AM', '10:15 AM', '11:30 AM', '1:15 PM', '2:30 PM', '3:45 PM'] },
                  { day: 'Saturday, Feb 17', slots: 3, times: ['10:00 AM', '11:15 AM', '12:30 PM'] },
                ].map((row) => (
                  <div key={row.day} className="bg-mocha-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="text-charcoal-900 font-semibold text-sm mb-1">{row.day}</div>
                        <div className="text-charcoal-700 text-xs">{row.slots} available slots</div>
                      </div>
                      <div className="w-8 h-8 bg-brightFern-400/20 rounded-lg flex items-center justify-center">
                        <span className="text-brightFern-600 font-bold text-xs">{row.slots}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {row.times.map((t) => (
                        <span key={t} className="bg-white border border-mocha-200 text-charcoal-900 text-xs font-medium px-3 py-1 rounded-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Advanced Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-mocha-50 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Auto-Accept Bookings</div>
                    <div className="text-charcoal-700 text-xs">Automatically confirm new bookings</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAutoAccept(!autoAccept)}
                    className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${autoAccept ? 'bg-fern-600' : 'bg-mocha-50'}`}
                    aria-pressed={autoAccept}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${autoAccept ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-mocha-50 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Allow Same-Day Bookings</div>
                    <div className="text-charcoal-700 text-xs">Let clients book sessions today</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSameDay(!sameDay)}
                    className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${sameDay ? 'bg-fern-600' : 'bg-mocha-50'}`}
                    aria-pressed={sameDay}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${sameDay ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-mocha-50 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Send Booking Reminders</div>
                    <div className="text-charcoal-700 text-xs">Notify clients 24h before session</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setReminders(!reminders)}
                    className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${reminders ? 'bg-fern-600' : 'bg-mocha-50'}`}
                    aria-pressed={reminders}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${reminders ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-mocha-50 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Block Holidays</div>
                    <div className="text-charcoal-700 text-xs">Automatically block public holidays</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setHolidays(!holidays)}
                    className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors ${holidays ? 'bg-fern-600' : 'bg-mocha-50'}`}
                    aria-pressed={holidays}
                  >
                    <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${holidays ? 'left-7' : 'left-1'}`} />
                  </button>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Max Sessions Per Day</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="unlimited">Unlimited</option>
                    <option value="2">2 sessions</option>
                    <option value="3">3 sessions</option>
                    <option value="4">4 sessions</option>
                    <option value="5">5 sessions</option>
                    <option value="6" defaultValue="6">6 sessions</option>
                    <option value="8">8 sessions</option>
                  </select>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Cancellation Policy</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="flexible">Flexible - Free cancellation 24h before</option>
                    <option value="moderate" defaultValue="moderate">Moderate - Free cancellation 48h before</option>
                    <option value="strict">Strict - Free cancellation 72h before</option>
                    <option value="no-refund">No refunds</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Time Zone & Display</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Time Zone</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="est" defaultValue="est">Eastern Time (ET)</option>
                    <option value="cst">Central Time (CT)</option>
                    <option value="mst">Mountain Time (MT)</option>
                    <option value="pst">Pacific Time (PT)</option>
                    <option value="utc">UTC</option>
                  </select>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Time Format</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setTimeFormat('12h')}
                      className={`font-semibold py-3 px-4 rounded-lg text-sm ${timeFormat === '12h' ? 'bg-fern-600 text-white' : 'bg-mocha-50 text-charcoal-900'}`}
                    >
                      12-hour
                    </button>
                    <button
                      type="button"
                      onClick={() => setTimeFormat('24h')}
                      className={`font-semibold py-3 px-4 rounded-lg text-sm ${timeFormat === '24h' ? 'bg-fern-600 text-white' : 'bg-mocha-50 text-charcoal-900'}`}
                    >
                      24-hour
                    </button>
                  </div>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Week Starts On</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="sunday" defaultValue="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleSaveAvailability}
                disabled={saveState === 'saving'}
                className={`w-full font-bold py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-sm ${
                  saveState === 'success'
                    ? 'bg-brightFern-600 text-white'
                    : 'bg-fern-600 text-white'
                }`}
              >
                {saveState === 'saving' && (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" />
                    <span>Saving...</span>
                  </>
                )}
                {saveState === 'success' && (
                  <>
                    <i className="fa-solid fa-check" />
                    <span>Saved Successfully!</span>
                  </>
                )}
                {saveState === 'idle' && (
                  <>
                    <i className="fa-solid fa-check" />
                    <span>Save Availability</span>
                  </>
                )}
              </button>
              <button
                type="button"
                className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-rotate-left" />
                <span>Reset to Default</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-yellowGreen-500/10 border border-yellowGreen-500/30 rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-lightbulb text-yellowGreen-600" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-sm mb-1">Pro Tips</h3>
                  <p className="text-charcoal-700 text-xs">Optimize your availability</p>
                </div>
              </div>
              <ul className="space-y-3 ml-12">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-yellowGreen-600 text-[6px] mt-1.5 flex-shrink-0" />
                  <span className="text-charcoal-900 text-xs">Set buffer times to avoid back-to-back sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-yellowGreen-600 text-[6px] mt-1.5 flex-shrink-0" />
                  <span className="text-charcoal-900 text-xs">Add multiple locations to give clients flexibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-yellowGreen-600 text-[6px] mt-1.5 flex-shrink-0" />
                  <span className="text-charcoal-900 text-xs">Block lunch breaks to maintain energy levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-yellowGreen-600 text-[6px] mt-1.5 flex-shrink-0" />
                  <span className="text-charcoal-900 text-xs">Review your bookable slots preview before saving</span>
                </li>
              </ul>
            </div>
          </section>
        </main>

        {/* Add Break Modal */}
        {addBreakModalOpen && (
          <div
            className="fixed inset-0 bg-charcoal-900/60 z-[60] flex items-center justify-center p-5"
            onClick={() => setAddBreakModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-break-title"
          >
            <div
              className="bg-white rounded-2xl w-full max-w-[335px] max-h-[90vh] overflow-y-auto shadow-xl animate-modal-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-mocha-200">
                <div className="flex items-center justify-between">
                  <h3 id="add-break-title" className="text-charcoal-900 font-bold text-lg">Add Break Time</h3>
                  <button
                    type="button"
                    onClick={() => setAddBreakModalOpen(false)}
                    className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-times text-charcoal-900" />
                  </button>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Break Name</label>
                  <input type="text" placeholder="e.g., Lunch Break" className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Start Time</label>
                  <input type="time" className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">End Time</label>
                  <input type="time" className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Apply to Days</label>
                  <label className="flex items-center gap-3 p-3 bg-mocha-50 rounded-lg cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-fern-600 rounded" />
                    <span className="text-charcoal-900 text-sm">All Days</span>
                  </label>
                </div>
              </div>
              <div className="p-5 border-t border-mocha-200">
                <button type="button" className="w-full bg-fern-600 text-white font-bold py-3 px-4 rounded-xl text-sm">
                  Add Break
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Add Location Modal */}
        {addLocationModalOpen && (
          <div
            className="fixed inset-0 bg-charcoal-900/60 z-[60] flex items-center justify-center p-5"
            onClick={() => setAddLocationModalOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-location-title"
          >
            <div
              className="bg-white rounded-2xl w-full max-w-[335px] max-h-[90vh] overflow-y-auto shadow-xl animate-modal-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-mocha-200">
                <div className="flex items-center justify-between">
                  <h3 id="add-location-title" className="text-charcoal-900 font-bold text-lg">Add Location</h3>
                  <button
                    type="button"
                    onClick={() => setAddLocationModalOpen(false)}
                    className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center"
                    aria-label="Close"
                  >
                    <i className="fa-solid fa-times text-charcoal-900" />
                  </button>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Location Name</label>
                  <input type="text" placeholder="e.g., Main Training Ground" className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Address</label>
                  <input type="text" placeholder="Full address" className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Location Type</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="both">Both</option>
                  </select>
                </div>
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Surface Type</label>
                  <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="grass">Grass</option>
                    <option value="turf">Turf</option>
                    <option value="indoor">Indoor Court</option>
                    <option value="mixed">Mixed</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center gap-3 p-3 bg-mocha-50 rounded-lg cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 text-fern-600 rounded" />
                    <span className="text-charcoal-900 text-sm">Set as primary location</span>
                  </label>
                </div>
              </div>
              <div className="p-5 border-t border-mocha-200">
                <button type="button" className="w-full bg-fern-600 text-white font-bold py-3 px-4 rounded-xl text-sm">
                  Add Location
                </button>
              </div>
            </div>
          </div>
        )}

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
