'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

// Calendar grid: 5 rows x 7 cols. Each cell: { day, type: 'prev'|'current'|'next', available?: boolean }
const CALENDAR_CELLS: { day: number; type: 'prev' | 'current' | 'next'; available?: boolean }[] = [
  ...([28, 29, 30, 31, 1, 2, 3].map((day) => ({ day, type: 'prev' as const }))),
  ...([4, 5, 6, 7, 8].map((day) => ({ day, type: 'current' as const }))),
  { day: 9, type: 'current' },
  { day: 10, type: 'current', available: true },
  ...([11, 12, 13].map((day) => ({ day, type: 'current' as const, available: true }))),
  { day: 14, type: 'current' },
  ...([15, 16, 17].map((day) => ({ day, type: 'current' as const, available: true }))),
  ...([18, 19, 20].map((day) => ({ day, type: 'current' as const, available: true }))),
  { day: 21, type: 'current' },
  ...([22, 23, 24].map((day) => ({ day, type: 'current' as const, available: true }))),
  ...([25, 26, 27].map((day) => ({ day, type: 'current' as const, available: true }))),
  { day: 28, type: 'current' },
  { day: 29, type: 'current', available: true },
  ...([1, 2].map((day) => ({ day, type: 'next' as const }))),
];
const TIME_SLOTS = [
  { period: 'Morning', times: ['9:00 AM', '10:00 AM', '11:00 AM'] },
  { period: 'Afternoon', times: ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'] },
  { period: 'Evening', times: ['6:00 PM', '7:00 PM'] },
];

type LocationId = 'riverside' | 'central' | 'elite';
type PackageId = 'credit' | 'single' | 'package';

export default function Demo15() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(10);
  const [selectedTime, setSelectedTime] = useState('4:00 PM');
  const [selectedLocation, setSelectedLocation] = useState<LocationId>('riverside');
  const [selectedPackage, setSelectedPackage] = useState<PackageId>('credit');
  const [confirmLoading, setConfirmLoading] = useState(false);

  const closeSidebar = () => setSidebarOpen(false);

  const handleConfirmBooking = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      alert('Booking confirmed! You will receive a confirmation email shortly.');
    }, 1500);
  };

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-24">
        {/* Drawer overlay */}
        <div
          role="presentation"
          className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
            sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeSidebar}
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
                onClick={closeSidebar}
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

        <main className="min-h-screen pb-24">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/demo/14"
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Go back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </Link>
                <h1 className="text-charcoal-900 font-bold text-base">Book Session</h1>
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
            <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
              <div className="relative h-40 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c1d431f9dc-8a158dec63cf99f63f3c.png"
                  alt="professional male goalkeeper coach in training gear on soccer field"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Coach"
                    className="w-14 h-14 rounded-full object-cover border-2 border-fern-600 flex-shrink-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-charcoal-900 font-bold text-lg mb-1">Coach Marcus Thompson</h2>
                    <p className="text-charcoal-700 text-xs mb-2">Professional Goalkeeper Coach</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                        <span className="text-charcoal-900 font-bold text-sm">4.9</span>
                      </div>
                      <span className="text-charcoal-700 text-xs">• 127 sessions</span>
                    </div>
                  </div>
                </div>
                <div className="bg-mocha-100 rounded-lg p-3">
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Specialized in goalkeeper training with 15+ years of experience. Former professional goalkeeper with expertise in diving techniques, positioning, and mental preparation.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Select Date</h3>
              <p className="text-charcoal-700 text-xs">Choose an available date for your session</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <button type="button" className="w-9 h-9 bg-mocha-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chevron-left text-charcoal-900" />
                </button>
                <h4 className="text-charcoal-900 font-bold text-base">February 2024</h4>
                <button type="button" className="w-9 h-9 bg-mocha-100 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chevron-right text-charcoal-900" />
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 mb-3">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                  <div key={d} className="text-center text-charcoal-700 text-xs font-semibold py-2">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {CALENDAR_CELLS.map((cell, idx) => {
                  if (cell.type === 'prev' || cell.type === 'next' || (cell.type === 'current' && !cell.available)) {
                    const isBox = cell.type === 'current' && (cell.day === 8 || cell.day === 9);
                    return (
                      <div
                        key={`${cell.type}-${cell.day}-${idx}`}
                        className={`text-center text-charcoal-700 text-xs py-2 ${!isBox ? 'opacity-40' : ''}`}
                      >
                        {isBox ? (
                          <span className="inline-block w-full bg-mocha-100 rounded-lg font-semibold py-2 border-2 border-mocha-200">
                            {cell.day}
                          </span>
                        ) : (
                          cell.day
                        )}
                      </div>
                    );
                  }
                  return (
                    <button
                      key={`current-${cell.day}-${idx}`}
                      type="button"
                      onClick={() => setSelectedDate(cell.day)}
                      className={`calendar-day rounded-lg text-center text-xs font-semibold py-2 border-2 transition-all active:scale-95 ${
                        selectedDate === cell.day
                          ? 'bg-fern-600 text-white border-fern-600'
                          : 'bg-fern-600/10 text-fern-600 border-fern-600/30'
                      }`}
                    >
                      {cell.day}
                    </button>
                  );
                })}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-fern-600/10 rounded border-2 border-fern-600/30" />
                  <span className="text-charcoal-700">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-fern-600 rounded" />
                  <span className="text-charcoal-700">Selected</span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Select Time</h3>
              <p className="text-charcoal-700 text-xs">Available times for Feb {selectedDate}, 2024</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              {TIME_SLOTS.map(({ period, times }) => (
                <div key={period} className={period !== 'Evening' ? 'mb-3' : ''}>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-3">{period}</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {times.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`rounded-lg py-3 text-xs font-semibold border-2 transition-all active:scale-95 ${
                          selectedTime === time
                            ? 'bg-fern-600 text-white border-fern-600'
                            : 'bg-mocha-100 border-mocha-200 text-charcoal-900'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Select Location</h3>
              <p className="text-charcoal-700 text-xs">Choose training venue</p>
            </div>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setSelectedLocation('riverside')}
                className={`location-option w-full rounded-2xl p-4 border-2 shadow-sm text-left transition-all active:scale-[0.98] ${
                  selectedLocation === 'riverside'
                    ? 'bg-fern-600 border-fern-600 text-white'
                    : 'bg-white border-mocha-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selectedLocation === 'riverside' ? 'bg-white/20' : 'bg-fern-600/10'
                  }`}>
                    <i className={`fa-solid fa-location-dot text-lg ${selectedLocation === 'riverside' ? 'text-white' : 'text-fern-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm mb-1">Riverside Sports Complex</h4>
                    <p className="text-xs mb-2 opacity-90">Field 3, 1250 River Rd</p>
                    <div className="flex items-center gap-2">
                      <span className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded">Indoor/Outdoor</span>
                      <span className="text-xs opacity-90">• 2.3 mi away</span>
                    </div>
                  </div>
                  {selectedLocation === 'riverside' && <i className="fa-solid fa-circle-check text-xl" />}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLocation('central')}
                className={`location-option w-full rounded-2xl p-4 border-2 shadow-sm text-left transition-all active:scale-[0.98] ${
                  selectedLocation === 'central'
                    ? 'bg-fern-600 border-fern-600 text-white'
                    : 'bg-white border-mocha-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selectedLocation === 'central' ? 'bg-white/20' : 'bg-brightFern-400/20'
                  }`}>
                    <i className={`fa-solid fa-location-dot text-lg ${selectedLocation === 'central' ? 'text-white' : 'text-brightFern-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-sm mb-1 ${selectedLocation === 'central' ? 'text-white' : 'text-charcoal-900'}`}>Central Park Training Ground</h4>
                    <p className={`text-xs mb-2 ${selectedLocation === 'central' ? 'opacity-90' : 'text-charcoal-700'}`}>North Field, 890 Park Ave</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${selectedLocation === 'central' ? 'bg-white/20' : 'bg-brightFern-400/20 text-brightFern-600'}`}>Outdoor</span>
                      <span className={`text-xs ${selectedLocation === 'central' ? 'opacity-90' : 'text-charcoal-700'}`}>• 3.8 mi away</span>
                    </div>
                  </div>
                  {selectedLocation === 'central' && <i className="fa-solid fa-circle-check text-xl" />}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedLocation('elite')}
                className={`location-option w-full rounded-2xl p-4 border-2 shadow-sm text-left transition-all active:scale-[0.98] ${
                  selectedLocation === 'elite'
                    ? 'bg-fern-600 border-fern-600 text-white'
                    : 'bg-white border-mocha-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selectedLocation === 'elite' ? 'bg-white/20' : 'bg-yellowGreen-500/20'
                  }`}>
                    <i className={`fa-solid fa-location-dot text-lg ${selectedLocation === 'elite' ? 'text-white' : 'text-charcoal-900'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-sm mb-1 ${selectedLocation === 'elite' ? 'text-white' : 'text-charcoal-900'}`}>Elite Sports Academy</h4>
                    <p className={`text-xs mb-2 ${selectedLocation === 'elite' ? 'opacity-90' : 'text-charcoal-700'}`}>Building A, 456 Sports Way</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${selectedLocation === 'elite' ? 'bg-white/20' : 'bg-yellowGreen-500/30 text-charcoal-900'}`}>Indoor</span>
                      <span className={`text-xs ${selectedLocation === 'elite' ? 'opacity-90' : 'text-charcoal-700'}`}>• 5.1 mi away</span>
                    </div>
                  </div>
                  {selectedLocation === 'elite' && <i className="fa-solid fa-circle-check text-xl" />}
                </div>
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Payment Method</h3>
              <p className="text-charcoal-700 text-xs">Choose how to pay for this session</p>
            </div>
            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setSelectedPackage('credit')}
                className={`package-option w-full rounded-2xl p-4 border-2 shadow-sm text-left transition-all active:scale-[0.98] ${
                  selectedPackage === 'credit'
                    ? 'bg-fern-600 border-fern-600 text-white'
                    : 'bg-white border-mocha-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selectedPackage === 'credit' ? 'bg-white/20' : 'bg-fern-600/10'
                  }`}>
                    <i className={`fa-solid fa-box text-lg ${selectedPackage === 'credit' ? 'text-white' : 'text-fern-600'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-sm">Use Existing Credit</h4>
                      {selectedPackage === 'credit' && <i className="fa-solid fa-circle-check text-xl" />}
                    </div>
                    <p className="text-xs mb-2 opacity-90">From your 10-Session Package</p>
                    <div className="bg-white/20 rounded-lg p-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold">Remaining Sessions</span>
                        <span className="text-sm font-bold">2 / 10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPackage('single')}
                className={`package-option w-full rounded-2xl p-4 border-2 shadow-sm text-left transition-all active:scale-[0.98] ${
                  selectedPackage === 'single'
                    ? 'bg-fern-600 border-fern-600 text-white'
                    : 'bg-white border-mocha-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selectedPackage === 'single' ? 'bg-white/20' : 'bg-brightFern-400/20'
                  }`}>
                    <i className={`fa-solid fa-credit-card text-lg ${selectedPackage === 'single' ? 'text-white' : 'text-brightFern-600'}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold text-sm mb-1 ${selectedPackage === 'single' ? 'text-white' : 'text-charcoal-900'}`}>Pay Per Session</h4>
                    <p className={`text-xs mb-2 ${selectedPackage === 'single' ? 'opacity-90' : 'text-charcoal-700'}`}>Single session payment</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${selectedPackage === 'single' ? 'text-white' : 'text-charcoal-900'}`}>$75</span>
                      <span className={`text-xs ${selectedPackage === 'single' ? 'opacity-90' : 'text-charcoal-700'}`}>per session</span>
                    </div>
                  </div>
                  {selectedPackage === 'single' && <i className="fa-solid fa-circle-check text-xl" />}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedPackage('package')}
                className={`package-option w-full rounded-2xl p-4 border-2 shadow-sm text-left transition-all active:scale-[0.98] ${
                  selectedPackage === 'package'
                    ? 'bg-fern-600 border-fern-600 text-white'
                    : 'bg-white border-mocha-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    selectedPackage === 'package' ? 'bg-white/20' : 'bg-yellowGreen-500/20'
                  }`}>
                    <i className={`fa-solid fa-boxes-stacked text-lg ${selectedPackage === 'package' ? 'text-white' : 'text-charcoal-900'}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className={`font-bold text-sm ${selectedPackage === 'package' ? 'text-white' : 'text-charcoal-900'}`}>Purchase New Package</h4>
                      <span className="bg-brightFern-600 text-white text-xs font-bold px-2 py-0.5 rounded">Save 20%</span>
                    </div>
                    <p className={`text-xs mb-2 ${selectedPackage === 'package' ? 'opacity-90' : 'text-charcoal-700'}`}>10-Session Package</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-lg font-bold ${selectedPackage === 'package' ? 'text-white' : 'text-charcoal-900'}`}>$600</span>
                      <span className={`text-xs line-through ${selectedPackage === 'package' ? 'opacity-90' : 'text-charcoal-700'}`}>$750</span>
                      <span className="text-brightFern-600 text-xs font-semibold">($60/session)</span>
                    </div>
                  </div>
                  {selectedPackage === 'package' && <i className="fa-solid fa-circle-check text-xl" />}
                </div>
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Session Details</h3>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-user text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-700 text-xs mb-1">Athlete</div>
                    <div className="text-charcoal-900 font-semibold text-sm">Sarah Johnson (Age 14)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brightFern-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-dumbbell text-brightFern-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-700 text-xs mb-1">Session Type</div>
                    <div className="text-charcoal-900 font-semibold text-sm">1-on-1 Goalkeeper Training</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-clock text-charcoal-900" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-700 text-xs mb-1">Duration</div>
                    <div className="text-charcoal-900 font-semibold text-sm">60 minutes</div>
                  </div>
                </div>
              </div>
              <div className="bg-mocha-100 rounded-lg p-3">
                <label className="text-charcoal-900 font-semibold text-xs mb-2 block">Add Notes (Optional)</label>
                <textarea
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-3 py-2 text-charcoal-900 text-xs resize-none"
                  rows={3}
                  placeholder="Any specific areas you'd like to focus on?"
                />
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Booking Summary</h3>
              <div className="space-y-3 mb-4 pb-4 border-b border-mocha-200">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-sm">Date</span>
                  <span className="text-charcoal-900 font-semibold text-sm">Feb {selectedDate}, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-sm">Time</span>
                  <span className="text-charcoal-900 font-semibold text-sm">
                    {selectedTime} – {(() => {
                      const match = selectedTime.match(/(\d+):(\d+) (AM|PM)/);
                      if (!match) return '5:00 PM';
                      let h = parseInt(match[1], 10);
                      const m = match[2];
                      const ap = match[3];
                      const nextH = h === 12 ? 1 : h + 1;
                      const nextAp = h === 11 && ap === 'AM' ? 'PM' : h === 12 && ap === 'PM' ? 'AM' : ap;
                      return `${nextH}:${m} ${nextAp}`;
                    })()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-sm">Location</span>
                  <span className="text-charcoal-900 font-semibold text-sm text-right">
                    {selectedLocation === 'riverside' && 'Riverside Sports Complex'}
                    {selectedLocation === 'central' && 'Central Park Training Ground'}
                    {selectedLocation === 'elite' && 'Elite Sports Academy'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-sm">Coach</span>
                  <span className="text-charcoal-900 font-semibold text-sm">Marcus Thompson</span>
                </div>
              </div>
              <div className="space-y-2 mb-4 pb-4 border-b border-mocha-200">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-sm">Session Fee</span>
                  <span className="text-charcoal-900 font-semibold text-sm">$0.00</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-sm">Payment Method</span>
                  <span className="text-fern-600 font-semibold text-sm">
                    {selectedPackage === 'credit' && 'Existing Credit'}
                    {selectedPackage === 'single' && 'Pay Per Session'}
                    {selectedPackage === 'package' && 'New Package'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-sm">Processing Fee</span>
                  <span className="text-charcoal-900 font-semibold text-sm">$0.00</span>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-charcoal-900 font-bold text-lg">Total</span>
                <span className="text-fern-600 font-bold text-2xl">$0.00</span>
              </div>
              <div className="bg-yellowGreen-500/20 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-info text-charcoal-900 text-sm mt-0.5" />
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Using 1 session credit from your package. You will have 1 session remaining after this booking.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleConfirmBooking}
                disabled={confirmLoading}
                className="w-full bg-fern-600 text-white font-bold py-4 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
              >
                {confirmLoading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-check-circle" />
                    <span>Confirm Booking</span>
                  </>
                )}
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-shield-halved text-red-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-sm mb-1">Cancellation Policy</h3>
                  <p className="text-charcoal-700 text-xs">Please review before booking</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-brightFern-600 text-xs mt-1" />
                  <span className="text-charcoal-900 text-xs">Free cancellation up to 24 hours before session</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-brightFern-600 text-xs mt-1" />
                  <span className="text-charcoal-900 text-xs">50% credit refund for cancellations within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-brightFern-600 text-xs mt-1" />
                  <span className="text-charcoal-900 text-xs">No refund for no-shows or same-day cancellations</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-brightFern-600 text-xs mt-1" />
                  <span className="text-charcoal-900 text-xs">Rescheduling available up to 12 hours before session</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <button type="button" className="w-full flex items-start justify-between gap-3 text-left">
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm mb-1">What should I bring to the session?</h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">Bring your goalkeeper gloves, water bottle, and appropriate athletic wear. The coach will provide all training equipment.</p>
                  </div>
                </button>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <button type="button" className="w-full flex items-start justify-between gap-3 text-left">
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm mb-1">What if weather is bad?</h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">For outdoor sessions, the coach will contact you 2 hours before to reschedule if weather conditions are unsafe.</p>
                  </div>
                </button>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <button type="button" className="w-full flex items-start justify-between gap-3 text-left">
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-bold text-sm mb-1">Can parents watch the session?</h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">Yes! Parents are welcome to observe from designated viewing areas at all training facilities.</p>
                  </div>
                </button>
              </div>
            </div>
          </section>
        </main>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
