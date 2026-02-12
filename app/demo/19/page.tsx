'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

type TimeSlotId = string | null;

export default function Demo19() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [rescheduleOpen, setRescheduleOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlotId>(null);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const confirmationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
        if (rescheduleOpen) setRescheduleOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [rescheduleOpen]);

  const handleBack = () => router.back();

  const handleRescheduleClick = () => {
    setRescheduleOpen(true);
    setSelectedSlot(null);
    setTimeout(() => {
      document.getElementById('reschedule-times-section')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const handleCloseReschedule = () => setRescheduleOpen(false);

  const handleConfirmReschedule = () => {
    if (!selectedSlot) return;
    setRescheduleOpen(false);
    setConfirmationVisible(true);
    setSelectedSlot(null);
    setTimeout(() => {
      confirmationRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  };

  const handleWaitUpdate = () => {
    if (typeof window !== 'undefined') {
      window.alert('You will be notified when your trainer updates the session status.');
    }
  };

  const availableSlots = [
    { id: '9am', time: '9:00 AM', status: 'Available', booked: false },
    { id: '10:30am', time: '10:30 AM', status: 'Available', booked: false },
    { id: '11am', time: '11:00 AM', status: 'Booked', booked: true },
    { id: '2pm', time: '2:00 PM', status: 'Available', booked: false },
    { id: '3:30pm', time: '3:30 PM', status: 'Available', booked: false },
    { id: '5pm', time: '5:00 PM', status: 'Available', booked: false },
    { id: '6:30pm', time: '6:30 PM', status: 'Booked', booked: true },
  ];

  const morningSlots = availableSlots.filter((s) => s.time.includes('AM'));
  const afternoonSlots = availableSlots.filter((s) => s.time.includes('PM'));

  return (
    <RequireAuth>
      <div className="min-h-screen bg-[rgb(244,241,241)] text-charcoal-700 font-sans pb-24">
        {/* Drawer overlay */}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setSidebarOpen(false)}
          onKeyDown={(e) => e.key === 'Enter' && setSidebarOpen(false)}
          className={`fixed inset-0 bg-charcoal-900/50 z-40 transition-opacity duration-300 ${
            sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Sidebar drawer */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] bg-white z-50 transform transition-transform duration-300 ease-out overflow-y-auto shadow-xl ${
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
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Schedule</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-chart-line text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Progress</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-message text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Messages</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-credit-card text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Payments</span>
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
                  onClick={handleBack}
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center"
                  aria-label="Go back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </button>
                <h1 className="text-charcoal-900 font-bold text-base">Weather Alert</h1>
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

          <section className="px-5 pt-6 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-red-600/10 rounded-2xl p-6 border border-red-600/30 shadow-sm">
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 bg-red-600/20 rounded-full flex items-center justify-center mb-4 animate-weather-pulse">
                  <i className="fa-solid fa-cloud-showers-heavy text-red-600 text-4xl" />
                </div>
                <h2 className="text-charcoal-900 font-bold text-xl mb-2">Severe Weather Alert</h2>
                <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
                  <i className="fa-solid fa-triangle-exclamation" />
                  <span>High Priority</span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-calendar text-fern-600" />
                  <span className="text-charcoal-900 font-bold text-sm">Scheduled Session</span>
                </div>
                <div className="bg-mocha-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-700 text-xs">Date & Time</span>
                    <span className="text-charcoal-900 font-bold text-sm">Feb 12, 2024 • 4:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-700 text-xs">Trainer</span>
                    <span className="text-charcoal-900 font-bold text-sm">Coach Marcus Thompson</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-cloud-rain text-red-600" />
                  <span className="text-charcoal-900 font-bold text-sm">Weather Forecast</span>
                </div>
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  Heavy rain forecasted for <span className="font-bold">February 12, 2024 between 3:00 PM - 6:00 PM</span>. Your session with <span className="font-bold">Coach Marcus Thompson</span> may need to be rescheduled for safety reasons.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-info-circle text-fern-600" />
                  <span className="text-charcoal-900 font-bold text-sm">Weather Details</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-mocha-50 rounded-lg p-3 text-center">
                    <i className="fa-solid fa-droplet text-red-600 text-lg mb-1" />
                    <div className="text-charcoal-900 font-bold text-xs">85% Rain</div>
                  </div>
                  <div className="bg-mocha-50 rounded-lg p-3 text-center">
                    <i className="fa-solid fa-wind text-red-600 text-lg mb-1" />
                    <div className="text-charcoal-900 font-bold text-xs">25 mph Wind</div>
                  </div>
                  <div className="bg-mocha-50 rounded-lg p-3 text-center">
                    <i className="fa-solid fa-temperature-half text-red-600 text-lg mb-1" />
                    <div className="text-charcoal-900 font-bold text-xs">52°F</div>
                  </div>
                  <div className="bg-mocha-50 rounded-lg p-3 text-center">
                    <i className="fa-solid fa-bolt text-red-600 text-lg mb-1" />
                    <div className="text-charcoal-900 font-bold text-xs">T-Storms</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">What would you like to do?</h3>

              <button
                type="button"
                onClick={handleRescheduleClick}
                className="w-full bg-fern-600 text-white rounded-xl p-4 mb-3 shadow-sm text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-calendar-plus text-white text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold text-sm mb-1">Reschedule Session</div>
                    <div className="text-white/80 text-xs">View available time slots</div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-white" />
                </div>
              </button>

              <button
                type="button"
                onClick={handleWaitUpdate}
                className="w-full bg-mocha-50 border border-mocha-200 rounded-xl p-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-mocha-200">
                    <i className="fa-solid fa-clock text-fern-600 text-xl" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-bold text-sm mb-1">Wait for Trainer Update</div>
                    <div className="text-charcoal-700 text-xs">Coach will notify you of changes</div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-900" />
                </div>
              </button>
            </div>
          </section>

          <section
            id="reschedule-times-section"
            className={`px-5 pb-4 bg-[rgb(244,241,241)] transition-all duration-300 ${rescheduleOpen ? 'block animate-fade-in' : 'hidden'}`}
          >
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-charcoal-900 font-bold text-base">Available Time Slots</h3>
                <button
                  type="button"
                  onClick={handleCloseReschedule}
                  className="w-8 h-8 bg-mocha-50 rounded-lg flex items-center justify-center"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-times text-charcoal-900" />
                </button>
              </div>

              <div className="mb-4">
                <label htmlFor="date-picker" className="text-charcoal-900 font-bold text-xs mb-2 block">Select Date</label>
                <input
                  type="date"
                  id="date-picker"
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold"
                  defaultValue="2024-02-13"
                />
              </div>

              <div className="mb-4">
                <label className="text-charcoal-900 font-bold text-xs mb-3 block">Morning Slots</label>
                <div className="grid grid-cols-2 gap-2">
                  {morningSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={slot.booked}
                      onClick={() => !slot.booked && setSelectedSlot(slot.id)}
                      className={`rounded-lg p-3 text-center border transition-all duration-200 hover:translate-y-[-2px] ${
                        slot.booked
                          ? 'opacity-50 cursor-default bg-mocha-50 border-mocha-200'
                          : selectedSlot === slot.id
                            ? 'border-fern-600 bg-fern-600'
                            : 'bg-mocha-50 border-mocha-200 hover:border-fern-600/50'
                      }`}
                    >
                      <div className={`font-bold text-sm mb-1 ${selectedSlot === slot.id ? 'text-white' : 'text-charcoal-900'}`}>
                        {slot.time}
                      </div>
                      <div className={`text-xs font-semibold ${selectedSlot === slot.id ? 'text-white' : slot.booked ? 'text-charcoal-700' : 'text-brightFern-600'}`}>
                        {slot.status}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="text-charcoal-900 font-bold text-xs mb-3 block">Afternoon Slots</label>
                <div className="grid grid-cols-2 gap-2">
                  {afternoonSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={slot.booked}
                      onClick={() => !slot.booked && setSelectedSlot(slot.id)}
                      className={`rounded-lg p-3 text-center border transition-all duration-200 hover:translate-y-[-2px] ${
                        slot.booked
                          ? 'opacity-50 cursor-default bg-mocha-50 border-mocha-200'
                          : selectedSlot === slot.id
                            ? 'border-fern-600 bg-fern-600'
                            : 'bg-mocha-50 border-mocha-200 hover:border-fern-600/50'
                      }`}
                    >
                      <div className={`font-bold text-sm mb-1 ${selectedSlot === slot.id ? 'text-white' : 'text-charcoal-900'}`}>
                        {slot.time}
                      </div>
                      <div className={`text-xs font-semibold ${selectedSlot === slot.id ? 'text-white' : slot.booked ? 'text-charcoal-700' : 'text-brightFern-600'}`}>
                        {slot.status}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleConfirmReschedule}
                disabled={!selectedSlot}
                className="w-full bg-fern-600 text-white rounded-xl py-4 font-bold text-sm shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm New Time
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-yellowGreen-500/10 rounded-2xl p-5 border border-yellowGreen-500/30 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-ticket text-charcoal-900 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="text-charcoal-900 font-bold text-sm mb-1">Make-up Credit Policy</h4>
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Your make-up credit will be automatically applied if this session is cancelled due to weather conditions.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-charcoal-700 text-xs">Credit Type</span>
                  <span className="text-charcoal-900 font-bold text-xs">Weather Cancellation</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-charcoal-700 text-xs">Valid Until</span>
                  <span className="text-charcoal-900 font-bold text-xs">60 Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-700 text-xs">Can Be Used For</span>
                  <span className="text-charcoal-900 font-bold text-xs">Any Session</span>
                </div>
              </div>
            </div>
          </section>

          <section
            ref={confirmationRef}
            className={`px-5 pb-4 bg-[rgb(244,241,241)] ${confirmationVisible ? 'block animate-fade-in' : 'hidden'}`}
          >
            <div className="bg-brightFern-400/10 rounded-2xl p-5 border border-brightFern-400/30 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-brightFern-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-check text-brightFern-600 text-xl" />
                </div>
                <div className="flex-1">
                  <h4 className="text-charcoal-900 font-bold text-sm mb-2">Session Rescheduled Successfully!</h4>
                  <p className="text-charcoal-900 text-xs leading-relaxed mb-3">
                    Your session with Coach Marcus Thompson has been rescheduled to <span className="font-bold">February 13, 2024 at 2:00 PM</span>.
                  </p>
                  <div className="bg-white rounded-lg p-3 mb-3">
                    <div className="flex items-center gap-2 text-xs text-charcoal-700 mb-2">
                      <i className="fa-solid fa-envelope" />
                      <span>Confirmation email sent</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-charcoal-700">
                      <i className="fa-solid fa-bell" />
                      <span>Calendar notification added</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-brightFern-600 text-white rounded-lg py-3 font-bold text-sm"
                  >
                    View Updated Schedule
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Coach"
                  className="w-14 h-14 rounded-full object-cover border-2 border-fern-600"
                />
                <div className="flex-1">
                  <h4 className="text-charcoal-900 font-bold text-sm">Coach Marcus Thompson</h4>
                  <div className="flex items-center gap-2 text-xs text-charcoal-700 mt-1">
                    <i className="fa-solid fa-circle text-brightFern-600 text-[8px]" />
                    <span>Available to chat</span>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center"
                >
                  <i className="fa-solid fa-message text-fern-600" />
                </button>
              </div>

              <div className="bg-mocha-50 rounded-lg p-3 mb-3">
                <p className="text-charcoal-900 text-xs leading-relaxed italic">
                  &quot;Hi! I&apos;m monitoring the weather closely. I&apos;ll update you by noon tomorrow if we need to make any changes. Stay safe!&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-charcoal-700 mt-2">
                  <i className="fa-solid fa-clock" />
                  <span>2 hours ago</span>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-mocha-50 border border-mocha-200 rounded-lg py-3 text-fern-600 font-bold text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-reply" />
                <span>Reply to Coach</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-charcoal-900 font-bold text-base">Weather Updates</h3>
                <div className="flex items-center gap-1 text-fern-600 text-xs font-semibold">
                  <i className="fa-solid fa-sync" />
                  <span>Live</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 pb-3 border-b border-mocha-200">
                  <div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-cloud-rain text-red-600 text-sm" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-charcoal-900 font-bold text-xs">Heavy Rain Expected</span>
                      <span className="text-charcoal-700 text-xs">3:00 PM - 6:00 PM</span>
                    </div>
                    <p className="text-charcoal-700 text-xs">85% chance of precipitation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-mocha-200">
                  <div className="w-8 h-8 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-wind text-red-600 text-sm" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-charcoal-900 font-bold text-xs">Strong Winds</span>
                      <span className="text-charcoal-700 text-xs">2:00 PM - 7:00 PM</span>
                    </div>
                    <p className="text-charcoal-700 text-xs">Gusts up to 25-30 mph</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-brightFern-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-sun text-brightFern-600 text-sm" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-charcoal-900 font-bold text-xs">Clear Tomorrow</span>
                      <span className="text-charcoal-700 text-xs">Feb 13</span>
                    </div>
                    <p className="text-charcoal-700 text-xs">Perfect conditions for training</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Weather Alert Settings</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-bell text-fern-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Push Notifications</div>
                      <div className="text-charcoal-700 text-xs">Get instant weather alerts</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setPushEnabled(!pushEnabled)}
                    className={`relative w-12 h-7 rounded-full transition-colors ${pushEnabled ? 'bg-fern-600' : 'bg-mocha-50'}`}
                    aria-pressed={pushEnabled}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${pushEnabled ? 'left-7' : 'left-1'}`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-envelope text-fern-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Email Updates</div>
                      <div className="text-charcoal-700 text-xs">Receive detailed forecasts</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setEmailEnabled(!emailEnabled)}
                    className={`relative w-12 h-7 rounded-full transition-colors ${emailEnabled ? 'bg-fern-600' : 'bg-mocha-50'}`}
                    aria-pressed={emailEnabled}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${emailEnabled ? 'left-7' : 'left-1'}`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-message text-fern-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">SMS Alerts</div>
                      <div className="text-charcoal-700 text-xs">Text message notifications</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSmsEnabled(!smsEnabled)}
                    className={`relative w-12 h-7 rounded-full transition-colors ${smsEnabled ? 'bg-fern-600' : 'bg-mocha-50'}`}
                    aria-pressed={smsEnabled}
                  >
                    <span
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${smsEnabled ? 'left-7' : 'left-1'}`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-file-contract text-fern-600" />
                <h3 className="text-charcoal-900 font-bold text-base">Weather Cancellation Policy</h3>
              </div>

              <div className="space-y-3">
                {[
                  { title: 'No Cancellation Fees', desc: 'Weather-related cancellations are free of charge' },
                  { title: 'Full Credit Applied', desc: 'Session credit is automatically added to your account' },
                  { title: 'Flexible Rescheduling', desc: 'Book any available slot within 60 days' },
                  { title: 'Priority Rebooking', desc: "Get first access to your trainer's next available times" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-fern-600/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className="fa-solid fa-check text-fern-600 text-xs" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-xs mb-1">{item.title}</div>
                      <p className="text-charcoal-700 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-[rgb(244,241,241)]">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Frequently Asked Questions</h3>

              <div className="space-y-3">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-3 bg-mocha-50 rounded-lg list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-charcoal-900 font-semibold text-sm">What happens to my payment?</span>
                    <i className="fa-solid fa-chevron-down text-fern-600 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-3 text-charcoal-700 text-xs leading-relaxed">
                    Your payment is fully protected. For weather cancellations, you&apos;ll receive a complete credit that can be used for any future session with no expiration penalty.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-3 bg-mocha-50 rounded-lg list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-charcoal-900 font-semibold text-sm">How will I know if it&apos;s cancelled?</span>
                    <i className="fa-solid fa-chevron-down text-fern-600 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-3 text-charcoal-700 text-xs leading-relaxed">
                    You&apos;ll receive notifications via your preferred channels (push, email, SMS) at least 4 hours before the scheduled session. Your trainer will also reach out directly.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-3 bg-mocha-50 rounded-lg list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-charcoal-900 font-semibold text-sm">Can I still attend if I want to?</span>
                    <i className="fa-solid fa-chevron-down text-fern-600 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-3 text-charcoal-700 text-xs leading-relaxed">
                    Safety is our priority. If severe weather is forecasted, sessions will be cancelled. However, for light rain, your trainer may offer indoor alternatives or modified outdoor training.
                  </div>
                </details>

                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-3 bg-mocha-50 rounded-lg list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-charcoal-900 font-semibold text-sm">Who makes the final decision?</span>
                    <i className="fa-solid fa-chevron-down text-fern-600 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="p-3 text-charcoal-700 text-xs leading-relaxed">
                    The trainer makes the final call based on real-time weather conditions and safety guidelines. We always err on the side of caution to protect our athletes.
                  </div>
                </details>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-[rgb(244,241,241)]">
            <div className="bg-fern-600/10 rounded-2xl p-5 border border-fern-600/30 shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-fern-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-headset text-fern-600 text-lg" />
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-bold text-sm mb-1">Need Help?</h4>
                  <p className="text-charcoal-900 text-xs leading-relaxed">
                    Our support team is available 24/7 to assist with weather-related questions and rescheduling.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="bg-fern-600 text-white rounded-lg py-3 font-bold text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone" />
                  <span>Call Support</span>
                </button>
                <button
                  type="button"
                  className="bg-white border border-mocha-200 rounded-lg py-3 text-fern-600 font-bold text-xs flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-comment" />
                  <span>Live Chat</span>
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-mocha-200 px-5 py-3 z-30">
          <div className="flex items-center justify-between">
            <button type="button" className="flex flex-col items-center gap-1 text-charcoal-700">
              <i className="fa-solid fa-house text-lg" />
              <span className="text-xs">Home</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-1 text-fern-600">
              <i className="fa-solid fa-calendar-days text-lg" />
              <span className="text-xs font-semibold">Schedule</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-1 text-charcoal-700">
              <i className="fa-solid fa-chart-line text-lg" />
              <span className="text-xs">Progress</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-1 text-charcoal-700">
              <i className="fa-solid fa-user text-lg" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </footer>
      </div>
      <DemoNavigation />
    </RequireAuth>
  );
}
