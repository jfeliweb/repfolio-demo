'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo8() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-20">
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
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto ${
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
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Today&apos;s Stats</h3>
              <div className="space-y-2">
                <div className="bg-fern-50 rounded-lg p-3">
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
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Calendar</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-users text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Clients</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
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
                  onClick={() => router.back()}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Back"
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
                <h1 className="text-charcoal-900 font-bold text-xl">Session Details</h1>
                <p className="text-charcoal-700 text-xs">Friday, Feb 9 • 2:00 PM</p>
              </div>
            </div>
          </header>

          <section className="px-5 py-6 bg-mocha-50">
            <div className="bg-white rounded-2xl border border-mocha-200 overflow-hidden shadow-sm">
              <div className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3 flex-1">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                      alt="Sarah Martinez"
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-fern-600/20"
                    />
                    <div className="flex-1 min-w-0">
                      <h2 className="text-charcoal-900 font-bold text-lg mb-1">Sarah Martinez</h2>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-fern-50 rounded-lg flex items-center justify-center">
                          <i className="fa-solid fa-user text-fern-600 text-xs" />
                        </div>
                        <span className="text-charcoal-700 text-sm">1-on-1 Goalkeeper Training</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brightFern-400/10 rounded-full">
                        <div className="w-2 h-2 bg-brightFern-600 rounded-full" />
                        <span className="text-brightFern-600 text-xs font-semibold">Confirmed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-xl">
                    <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-calendar text-fern-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-charcoal-900 font-semibold text-sm mb-0.5">Date & Time</div>
                      <div className="text-charcoal-700 text-xs">Friday, February 9, 2024</div>
                      <div className="text-charcoal-900 text-sm font-medium">2:00 PM - 3:00 PM (60 min)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-xl">
                    <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-futbol text-fern-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-charcoal-900 font-semibold text-sm mb-0.5">Session Type</div>
                      <div className="text-charcoal-700 text-xs">1-on-1 Goalkeeper Training</div>
                      <div className="text-charcoal-900 text-sm">Individual coaching session</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-xl">
                    <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-dollar-sign text-fern-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-charcoal-900 font-semibold text-sm mb-0.5">Session Fee</div>
                      <div className="text-charcoal-900 text-lg font-bold">$80.00</div>
                      <div className="text-charcoal-700 text-xs">Payment confirmed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl border border-mocha-200 overflow-hidden shadow-sm">
              <div className="relative w-full h-[200px] bg-gradient-to-br from-fern-50 to-fern-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-fern-600/20">
                    <i className="fa-solid fa-location-dot text-fern-600 text-2xl" />
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <button
                    type="button"
                    className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-md border border-mocha-200"
                  >
                    <i className="fa-solid fa-expand text-charcoal-900 text-xs" />
                  </button>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-charcoal-900 font-bold text-base mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-map-marker-alt text-fern-600" />
                  <span>Location</span>
                </h3>

                <div className="space-y-2 mb-4">
                  <div className="text-charcoal-900 font-semibold text-sm">Riverside Sports Complex</div>
                  <div className="text-charcoal-700 text-sm">Field 3, Main Training Area</div>
                  <div className="text-charcoal-700 text-sm">4580 River Valley Road, Sacramento, CA 95831</div>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="flex-1 bg-fern-50 text-fern-600 border border-fern-600/30 font-semibold py-2.5 px-4 rounded-lg text-xs flex items-center justify-center gap-2"
                  >
                    <i className="fa-solid fa-directions" />
                    <span>Get Directions</span>
                  </button>
                  <button
                    type="button"
                    className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  >
                    <i className="fa-solid fa-share-nodes text-charcoal-900 text-xs" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-user-circle text-fern-600" />
                <span>Client Information</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-0.5">Age Group</div>
                    <div className="text-charcoal-700 text-xs">16 years old</div>
                  </div>
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-cake-candles text-fern-600" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-0.5">Skill Level</div>
                    <div className="text-charcoal-700 text-xs">Intermediate</div>
                  </div>
                  <div className="w-10 h-10 bg-brightFern-400/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-star text-brightFern-600" />
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-0.5">Sessions Completed</div>
                    <div className="text-charcoal-700 text-xs">12 total sessions</div>
                  </div>
                  <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-chart-line text-yellowGreen-600" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-4 bg-mocha-100 text-charcoal-900 font-semibold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-eye" />
                <span>View Full Profile</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-clipboard text-fern-600" />
                <span>Previous Session Notes</span>
              </h3>

              <div className="bg-mocha-100 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-calendar-check text-fern-600 text-xs" />
                  </div>
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm">Last Session</div>
                    <div className="text-charcoal-700 text-xs">Feb 2, 2024 • 2:00 PM</div>
                  </div>
                </div>

                <div className="text-charcoal-900 text-sm leading-relaxed mb-3">
                  <p className="mb-2">Great progress on diving technique. Sarah showed significant improvement in:</p>
                  <ul className="list-disc list-inside space-y-1 text-charcoal-700 text-sm ml-2">
                    <li>Low diving form and hand positioning</li>
                    <li>Reaction time to close-range shots</li>
                    <li>Communication with defenders</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-3 border border-mocha-200">
                  <div className="text-charcoal-900 font-semibold text-xs mb-2">Focus Areas for Next Session:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-fern-50 text-fern-600 rounded-full text-xs font-medium">High ball collection</span>
                    <span className="px-2.5 py-1 bg-fern-50 text-fern-600 rounded-full text-xs font-medium">Distribution accuracy</span>
                    <span className="px-2.5 py-1 bg-fern-50 text-fern-600 rounded-full text-xs font-medium">1v1 scenarios</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-mocha-100 text-charcoal-900 font-semibold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-history" />
                <span>View All Session History</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-bullseye text-fern-600" />
                <span>Today&apos;s Session Goals</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-mocha-100 rounded-lg">
                  <div className="w-5 h-5 bg-fern-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">High Ball Collection</div>
                    <div className="text-charcoal-700 text-xs">Work on timing and hand positioning for crosses</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-mocha-100 rounded-lg">
                  <div className="w-5 h-5 bg-fern-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Distribution Practice</div>
                    <div className="text-charcoal-700 text-xs">Improve accuracy on goal kicks and throws</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-mocha-100 rounded-lg">
                  <div className="w-5 h-5 bg-fern-600 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">1v1 Situations</div>
                    <div className="text-charcoal-700 text-xs">Decision-making when attacker breaks through</div>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="w-full mt-4 bg-fern-50 text-fern-600 border border-fern-600/30 font-semibold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-pen" />
                <span>Edit Session Plan</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-list-check text-fern-600" />
                <span>Equipment Checklist</span>
              </h3>

              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 bg-brightFern-400/5 rounded-lg border border-brightFern-600/20">
                  <div className="w-5 h-5 bg-brightFern-600 rounded flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </div>
                  <span className="text-charcoal-900 text-sm">Goalkeeper gloves</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-brightFern-400/5 rounded-lg border border-brightFern-600/20">
                  <div className="w-5 h-5 bg-brightFern-600 rounded flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </div>
                  <span className="text-charcoal-900 text-sm">Training cones (12)</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-brightFern-400/5 rounded-lg border border-brightFern-600/20">
                  <div className="w-5 h-5 bg-brightFern-600 rounded flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-check text-white text-xs" />
                  </div>
                  <span className="text-charcoal-900 text-sm">Soccer balls (6)</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-lg border border-mocha-200">
                  <div className="w-5 h-5 border-2 border-charcoal-700 rounded flex items-center justify-center flex-shrink-0" />
                  <span className="text-charcoal-700 text-sm">Agility ladder</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-mocha-100 rounded-lg border border-mocha-200">
                  <div className="w-5 h-5 border-2 border-charcoal-700 rounded flex items-center justify-center flex-shrink-0" />
                  <span className="text-charcoal-700 text-sm">Portable goal</span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-cloud-sun text-fern-600" />
                <span>Weather Conditions</span>
              </h3>

              <div className="flex items-center gap-4 p-4 bg-yellowGreen-500/10 rounded-xl border border-yellowGreen-500/30">
                <div className="w-16 h-16 bg-yellowGreen-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-sun text-yellowGreen-600 text-3xl" />
                </div>
                <div className="flex-1">
                  <div className="text-charcoal-900 font-bold text-2xl mb-1">72°F</div>
                  <div className="text-charcoal-900 text-sm mb-1">Partly Cloudy</div>
                  <div className="text-charcoal-700 text-xs">Perfect conditions for outdoor training</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="bg-mocha-100 rounded-lg p-3 text-center">
                  <i className="fa-solid fa-wind text-fern-600 mb-2" />
                  <div className="text-charcoal-900 font-semibold text-sm">8 mph</div>
                  <div className="text-charcoal-700 text-xs">Wind</div>
                </div>
                <div className="bg-mocha-100 rounded-lg p-3 text-center">
                  <i className="fa-solid fa-droplet text-fern-600 mb-2" />
                  <div className="text-charcoal-900 font-semibold text-sm">45%</div>
                  <div className="text-charcoal-700 text-xs">Humidity</div>
                </div>
                <div className="bg-mocha-100 rounded-lg p-3 text-center">
                  <i className="fa-solid fa-umbrella text-fern-600 mb-2" />
                  <div className="text-charcoal-900 font-semibold text-sm">0%</div>
                  <div className="text-charcoal-700 text-xs">Rain</div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-user-group text-fern-600" />
                <span>Parent/Guardian Contact</span>
              </h3>

              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg"
                  alt="Parent"
                  className="w-12 h-12 rounded-full object-cover border-2 border-fern-600/20"
                />
                <div className="flex-1">
                  <div className="text-charcoal-900 font-semibold text-sm">Maria Martinez</div>
                  <div className="text-charcoal-700 text-xs">Mother</div>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-phone text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm">Call Parent</div>
                    <div className="text-charcoal-700 text-xs">(916) 555-0147</div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700 text-xs" />
                </button>

                <button
                  type="button"
                  className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-message text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <div className="text-charcoal-900 font-semibold text-sm">Send Message</div>
                    <div className="text-charcoal-700 text-xs">In-app messaging</div>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700 text-xs" />
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="space-y-3">
              <button
                type="button"
                className="w-full bg-fern-600 text-white font-bold py-4 px-6 rounded-xl text-base shadow-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-play-circle text-lg" />
                <span>Start Session</span>
              </button>

              <button
                type="button"
                className="w-full bg-brightFern-600 text-white font-bold py-4 px-6 rounded-xl text-base shadow-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-message text-lg" />
                <span>Message Client</span>
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-calendar-xmark" />
                  <span>Reschedule</span>
                </button>

                <button
                  type="button"
                  className="bg-white border-2 border-red-600/30 text-red-600 font-semibold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-ban" />
                  <span>Cancel</span>
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Additional Options</h3>

              <div className="space-y-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-file-invoice text-fern-600" />
                    <span className="text-charcoal-900 text-sm font-medium">View Invoice</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700 text-xs" />
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-copy text-fern-600" />
                    <span className="text-charcoal-900 text-sm font-medium">Duplicate Session</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700 text-xs" />
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-share text-fern-600" />
                    <span className="text-charcoal-900 text-sm font-medium">Share Session Details</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700 text-xs" />
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-between p-3 bg-mocha-100 rounded-lg text-left"
                >
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-calendar-plus text-fern-600" />
                    <span className="text-charcoal-900 text-sm font-medium">Add to Calendar</span>
                  </div>
                  <i className="fa-solid fa-chevron-right text-charcoal-700 text-xs" />
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-red-600/10 rounded-2xl p-5 border-2 border-red-600/30">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-triangle-exclamation text-red-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">Emergency Contact</h3>
                  <p className="text-charcoal-700 text-xs">For urgent situations during the session</p>
                </div>
              </div>

              <button
                type="button"
                className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-phone" />
                <span>Call Emergency Contact</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-bell text-fern-600" />
                <span>Reminders & Notifications</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-brightFern-400/5 rounded-lg border border-brightFern-600/20">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-check-circle text-brightFern-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Client Confirmed</div>
                      <div className="text-charcoal-700 text-xs">2 hours ago</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-yellowGreen-500/10 rounded-lg border border-yellowGreen-500/30">
                  <div className="flex items-center gap-3">
                    <i className="fa-solid fa-clock text-yellowGreen-600" />
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Reminder Set</div>
                      <div className="text-charcoal-700 text-xs">1 hour before session</div>
                    </div>
                  </div>
                </div>
              </div>
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
