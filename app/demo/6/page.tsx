'use client';

import { useState } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo6() {
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(0);

  const weekDays = [
    { label: 'Mon', date: 18 },
    { label: 'Tue', date: 19 },
    { label: 'Wed', date: 20 },
    { label: 'Thu', date: 21 },
    { label: 'Fri', date: 22 },
    { label: 'Sat', date: 23 },
    { label: 'Sun', date: 24 },
  ];

  const timeSlots = [
    { label: '9:00 AM - 10:00 AM', available: true },
    { label: '10:30 AM - 11:30 AM', available: true },
    { label: '2:00 PM - 3:00 PM', available: true },
    { label: '4:00 PM - 5:00 PM', available: true },
    { label: '6:00 PM - 7:00 PM', available: false },
  ];

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans">
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-mocha-200 z-50">
          <div className="flex items-center justify-between px-5 py-4">
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center text-charcoal-700"
              aria-label="Back"
            >
              <i className="fa-solid fa-arrow-left text-xl" />
            </button>
            <RepfolioLogo width={120} height={32} />
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center text-charcoal-700"
              aria-label="Share"
            >
              <i className="fa-solid fa-share-nodes text-xl" />
            </button>
          </div>
        </header>

        <main className="pt-16 pb-24">
          <section
            id="profile-hero-section"
            className="px-5 pt-6 pb-8 bg-white"
          >
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-4">
                <div className="h-32 w-32 overflow-hidden rounded-2xl">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/8435028950-70af537f6abe257262e5.png"
                    alt="Marcus Chen professional soccer finishing coach portrait, Asian male athletic coach, confident sports instructor without background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellowGreen-500 rounded-full flex items-center justify-center border-4 border-white">
                  <i className="fa-solid fa-futbol text-charcoal-900 text-sm" />
                </div>
              </div>
              <h1 className="text-charcoal-900 font-bold text-2xl mb-1">
                Marcus Chen
              </h1>
              <p className="text-charcoal-700 text-sm mb-3">
                Soccer Finishing Coach
              </p>
              <div className="flex items-center gap-1 mb-4">
                <i className="fa-solid fa-star text-yellowGreen-500 text-base" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-base" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-base" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-base" />
                <i className="fa-solid fa-star-half-stroke text-yellowGreen-500 text-base" />
                <span className="text-charcoal-900 text-base font-bold ml-2">
                  4.7
                </span>
                <span className="text-charcoal-700 text-sm ml-1">
                  (31 reviews)
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-charcoal-700">
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-clock" />
                  <span>8+ years</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-users" />
                  <span>200+ athletes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fa-solid fa-location-dot" />
                  <span>San Diego, CA</span>
                </div>
              </div>
            </div>
          </section>

          <section id="bio-section" className="px-5 py-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-lg mb-3">
              About Marcus
            </h2>
            <p className="text-charcoal-700 text-sm leading-relaxed mb-4">
              Elite finishing specialist with 8+ years developing prolific goal
              scorers at all levels. Former collegiate striker turned dedicated
              coach, I&apos;ve helped hundreds of players unlock their scoring
              potential through proven techniques and game-realistic training. My
              mission is to transform hesitant shooters into clinical finishers
              who thrive in pressure moments.
            </p>
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <i className="fa-solid fa-certificate text-fern-600 text-sm" />
                <span className="text-charcoal-900 font-semibold text-sm">
                  Certifications
                </span>
              </div>
              <ul className="space-y-1.5 text-sm text-charcoal-700">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-fern-600 text-xs mt-0.5" />
                  <span>USSF A License</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-fern-600 text-xs mt-0.5" />
                  <span>UEFA B Coaching Badge</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-check text-fern-600 text-xs mt-0.5" />
                  <span>Advanced Striker Development Certificate</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="specialties-section" className="px-5 py-6 bg-white">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Specialties
            </h2>
            <div className="flex flex-wrap gap-2">
              <div className="bg-fern-50 text-fern-600 text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2">
                <i className="fa-solid fa-crosshairs text-base" />
                <span>Shot Accuracy</span>
              </div>
              <div className="bg-fern-50 text-fern-600 text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2">
                <i className="fa-solid fa-trophy text-base" />
                <span>1v1 Finishing</span>
              </div>
              <div className="bg-fern-50 text-fern-600 text-sm font-semibold px-4 py-2.5 rounded-full flex items-center gap-2">
                <i className="fa-solid fa-location-crosshairs text-base" />
                <span>Box Positioning</span>
              </div>
              <div className="bg-mocha-50 text-charcoal-700 text-sm font-medium px-4 py-2.5 rounded-full">
                Weak Foot Development
              </div>
              <div className="bg-mocha-50 text-charcoal-700 text-sm font-medium px-4 py-2.5 rounded-full">
                Volleys &amp; Headers
              </div>
              <div className="bg-mocha-50 text-charcoal-700 text-sm font-medium px-4 py-2.5 rounded-full">
                Clinical Finishing
              </div>
            </div>
          </section>

          <section id="pricing-section" className="px-5 py-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Training Packages
            </h2>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-5 border-2 border-mocha-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-charcoal-900 font-bold text-base mb-1">
                      Single Session
                    </h3>
                    <p className="text-charcoal-700 text-xs">
                      Perfect for trial or one-time training
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-fern-600 font-bold text-2xl">$85</div>
                    <div className="text-charcoal-700 text-xs">per session</div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>60-minute session</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>Finishing drills &amp; scenarios</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>Session notes</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3 px-4 rounded-lg text-sm"
                >
                  Select Package
                </button>
              </div>

              <div className="bg-fern-600 rounded-xl p-5 relative overflow-hidden">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">
                      5-Session Pack
                    </h3>
                    <p className="text-white/80 text-xs">Most popular choice</p>
                  </div>
                  <div className="text-right min-h-[80px]">
                    <div className="text-white font-bold text-2xl">$400</div>
                    <div className="text-white/80 text-xs">per session</div>
                    <div className="text-white/80 text-xs line-through">
                      $425
                    </div>
                    <div className="absolute top-3 right-3 bg-yellowGreen-500 text-charcoal-900 text-xs font-bold px-2.5 py-1 rounded-full">
                      SAVE $25
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-xs text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500" />
                    <span>5 x 60-minute sessions</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500" />
                    <span>Custom finishing program</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500" />
                    <span>Shot analysis &amp; feedback</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500" />
                    <span>Progress tracking</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-yellowGreen-500 text-charcoal-900 font-semibold py-3 px-4 rounded-lg text-sm"
                >
                  Select Package
                </button>
              </div>

              <div className="bg-white rounded-xl p-5 border-2 border-mocha-200 relative">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-charcoal-900 font-bold text-base mb-1">
                      10-Session Pack
                    </h3>
                    <div className="absolute top-3 right-3 bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-bold px-2.5 py-1 rounded-full">
                      BEST VALUE
                    </div>
                    <p className="text-charcoal-700 text-xs">
                      Maximum development &amp; savings
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-fern-600 font-bold text-2xl">$750</div>
                    <div className="text-charcoal-700 text-xs">per session</div>
                    <div className="text-charcoal-700 text-xs line-through">
                      $850
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>10 x 60-minute sessions</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>Complete finishing mastery program</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>Weekly video analysis</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>Detailed performance reports</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600" />
                    <span>Priority scheduling</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-fern-600 text-white font-semibold py-3 px-4 rounded-lg text-sm"
                >
                  Select Package
                </button>
              </div>
            </div>
          </section>

          <section
            id="training-philosophy-section"
            className="px-5 py-6 bg-white"
          >
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Training Philosophy
            </h2>
            <div className="space-y-4">
              <div className="bg-mocha-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-repeat text-fern-600" />
                  </div>
                  <div>
                    <h3 className="text-charcoal-900 font-semibold text-sm mb-2">
                      Repetition Creates Instinct
                    </h3>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Elite finishers don&apos;t think—they react. Through
                      thousands of quality repetitions, I help players develop
                      muscle memory and split-second decision-making that
                      translates directly to match situations.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-mocha-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-gamepad text-fern-600" />
                  </div>
                  <div>
                    <h3 className="text-charcoal-900 font-semibold text-sm mb-2">
                      Game-Realistic Scenarios
                    </h3>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Every drill mirrors real match situations—pressure from
                      defenders, varying service types, limited time and space.
                      Training must replicate the chaos of actual games to
                      produce confident, clinical finishers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-mocha-50 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-bullseye text-fern-600" />
                  </div>
                  <div>
                    <h3 className="text-charcoal-900 font-semibold text-sm mb-2">
                      Quality Over Quantity
                    </h3>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      It&apos;s not about taking 100 shots—it&apos;s about
                      taking 100 perfect shots. I emphasize proper technique,
                      body positioning, and decision-making on every single
                      attempt to build elite finishing habits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="credentials-section" className="px-5 py-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Credentials &amp; Experience
            </h2>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-graduation-cap text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                      Education
                    </h4>
                    <p className="text-charcoal-700 text-xs mb-1">
                      Bachelor&apos;s in Kinesiology
                    </p>
                    <p className="text-charcoal-700 text-xs">
                      San Diego State University
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-futbol text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                      Playing Career
                    </h4>
                    <p className="text-charcoal-700 text-xs mb-1">
                      NCAA Division 1 Forward
                    </p>
                    <p className="text-charcoal-700 text-xs">
                      4-year starter • 45 career goals • All-Conference honors
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-chalkboard-user text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                      Coaching Experience
                    </h4>
                    <p className="text-charcoal-700 text-xs mb-1">
                      8+ years professional coaching
                    </p>
                    <p className="text-charcoal-700 text-xs">
                      Finishing specialist • Academy coach • Private training
                      expert
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-trophy text-fern-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                      Notable Achievements
                    </h4>
                    <p className="text-charcoal-700 text-xs mb-1">
                      20+ athletes earned college scholarships
                    </p>
                    <p className="text-charcoal-700 text-xs">
                      5 players signed professional contracts
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="availability-section" className="px-5 py-6 bg-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Available Times
              </h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center text-charcoal-700"
                  aria-label="Previous week"
                  onClick={() =>
                    setSelectedDateIndex((i) => Math.max(0, i - 1))
                  }
                >
                  <i className="fa-solid fa-chevron-left" />
                </button>
                <button
                  type="button"
                  className="w-8 h-8 flex items-center justify-center text-charcoal-700"
                  aria-label="Next week"
                  onClick={() =>
                    setSelectedDateIndex((i) =>
                      Math.min(weekDays.length - 1, i + 1)
                    )
                  }
                >
                  <i className="fa-solid fa-chevron-right" />
                </button>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex gap-2 overflow-x-auto pb-2">
                {weekDays.map((day, i) => (
                  <button
                    key={day.label}
                    type="button"
                    onClick={() => setSelectedDateIndex(i)}
                    className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold ${
                      selectedDateIndex === i
                        ? 'bg-fern-600 text-white'
                        : 'bg-mocha-50 text-charcoal-700'
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-xs opacity-80 mb-0.5">
                        {day.label}
                      </div>
                      <div className="text-base font-bold">{day.date}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              {timeSlots.map((slot, i) => (
                <button
                  key={slot.label}
                  type="button"
                  disabled={!slot.available}
                  onClick={() => slot.available && setSelectedTimeIndex(i)}
                  className={`w-full py-3 px-4 rounded-lg text-sm flex items-center justify-between ${
                    !slot.available
                      ? 'bg-mocha-100 text-charcoal-700/50 cursor-not-allowed'
                      : selectedTimeIndex === i
                        ? 'bg-yellowGreen-500/10 border-2 border-yellowGreen-500 text-yellowGreen-600 font-semibold'
                        : 'bg-mocha-50 text-charcoal-700 font-medium'
                  }`}
                >
                  <span>{slot.label}</span>
                  {slot.available ? (
                    <i
                      className={`fa-solid ${
                        selectedTimeIndex === i
                          ? 'fa-circle-check text-yellowGreen-500'
                          : 'fa-circle text-charcoal-700'
                      }`}
                    />
                  ) : (
                    <span className="text-xs bg-mocha-50 px-2 py-0.5 rounded">
                      Booked
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="mt-4 bg-mocha-50 rounded-lg p-3 flex items-start gap-2">
              <i className="fa-solid fa-circle-info text-fern-600 text-sm mt-0.5" />
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Showing availability for next 2 weeks. More times available -
                select a date to view full schedule.
              </p>
            </div>
          </section>

          <section id="testimonials-section" className="px-5 py-6 bg-mocha-50">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-charcoal-900 font-bold text-lg">
                Client Testimonials
              </h2>
              <button
                type="button"
                className="text-fern-600 text-xs font-semibold"
              >
                View All (31)
              </button>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                    alt="Client"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm">
                      Sarah Williams
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Parent of U16 Forward
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  </div>
                </div>
                <p className="text-charcoal-900 text-xs leading-relaxed mb-2">
                  &quot;Marcus transformed my daughter from a timid shooter to
                  our team&apos;s leading scorer. She went from 3 goals last
                  season to 18 this season! His focus on repetition and building
                  confidence in the box has been game-changing.&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-charcoal-700">
                  <i className="fa-solid fa-clock" />
                  <span>1 week ago</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg"
                    alt="Client"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm">
                      Alex Rodriguez
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Forward, Age 17
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  </div>
                </div>
                <p className="text-charcoal-900 text-xs leading-relaxed mb-2">
                  &quot;Coach Marcus helped me develop my weak foot and improve my
                  finishing under pressure. I scored the winning goal in our state
                  championship game using techniques we practiced. Now I have
                  multiple D1 scholarship offers!&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-charcoal-700">
                  <i className="fa-solid fa-clock" />
                  <span>3 weeks ago</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                    alt="Client"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm">
                      James Park
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Parent &amp; Team Coach
                    </p>
                  </div>
                  <div className="flex gap-0.5">
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                    <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                  </div>
                </div>
                <p className="text-charcoal-900 text-xs leading-relaxed mb-2">
                  &quot;My son&apos;s finishing accuracy improved dramatically
                  after working with Marcus. He went from missing easy chances to
                  being clinical in front of goal. The game-realistic scenarios
                  Marcus creates are brilliant coaching.&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-charcoal-700">
                  <i className="fa-solid fa-clock" />
                  <span>2 weeks ago</span>
                </div>
              </div>
            </div>
          </section>

          <section id="stats-section" className="px-5 py-6 bg-white">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Training Impact
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-mocha-50 rounded-xl p-4 text-center">
                <div className="text-fern-600 font-bold text-3xl mb-1">
                  200+
                </div>
                <div className="text-charcoal-700 text-xs">
                  Athletes Trained
                </div>
              </div>
              <div className="bg-mocha-50 rounded-xl p-4 text-center">
                <div className="text-fern-600 font-bold text-3xl mb-1">
                  2,500+
                </div>
                <div className="text-charcoal-700 text-xs">
                  Training Hours
                </div>
              </div>
              <div className="bg-mocha-50 rounded-xl p-4 text-center">
                <div className="text-fern-600 font-bold text-3xl mb-1">20</div>
                <div className="text-charcoal-700 text-xs">
                  College Scholarships
                </div>
              </div>
              <div className="bg-mocha-50 rounded-xl p-4 text-center">
                <div className="text-fern-600 font-bold text-3xl mb-1">
                  97%
                </div>
                <div className="text-charcoal-700 text-xs">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </section>

          <section id="video-section" className="px-5 py-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Training Preview
            </h2>
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="h-48 bg-mocha-50 flex items-center justify-center relative overflow-hidden">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/1744febee7-9134d2a0820dc20543d0.png"
                  alt="soccer striker finishing training action shot, coach demonstrating shooting technique, professional soccer training session"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal-900/30 flex items-center justify-center">
                  <button
                    type="button"
                    className="w-16 h-16 bg-fern-600 rounded-full flex items-center justify-center"
                    aria-label="Play video"
                  >
                    <i className="fa-solid fa-play text-white text-xl ml-1" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-charcoal-900 font-semibold text-sm mb-2">
                  Finishing Mastery Training Methods
                </h3>
                <p className="text-charcoal-700 text-xs leading-relaxed mb-3">
                  Watch this 2-minute video to see my coaching approach and the
                  drills that create clinical finishers.
                </p>
                <div className="flex items-center gap-3 text-xs text-charcoal-700">
                  <div className="flex items-center gap-1.5">
                    <i className="fa-solid fa-play-circle" />
                    <span>2:30 min</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <i className="fa-solid fa-eye" />
                    <span>412 views</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="location-section" className="px-5 py-6 bg-white">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Training Location
            </h2>
            <div className="bg-mocha-50 rounded-xl p-4 mb-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-location-dot text-fern-600" />
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                    Primary Training Facility
                  </h4>
                  <p className="text-charcoal-700 text-xs leading-relaxed mb-2">
                    ProScore Soccer Complex
                    <br />
                    5678 Champions Way
                    <br />
                    San Diego, CA 92101
                  </p>
                  <button
                    type="button"
                    className="text-fern-600 text-xs font-semibold flex items-center gap-1"
                  >
                    <span>Get Directions</span>
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
            <div className="h-40 bg-mocha-50 rounded-xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3a3ddcfefb-00b1efaecf438fed4e1d.png"
                alt="modern soccer training facility exterior, professional sports complex with goals, aerial view daytime"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 flex items-start gap-2 bg-mocha-50 rounded-lg p-3">
              <i className="fa-solid fa-circle-info text-fern-600 text-sm mt-0.5" />
              <p className="text-xs text-charcoal-700 leading-relaxed">
                Mobile training available within 20-mile radius. Contact for
                custom location arrangements.
              </p>
            </div>
          </section>

          <section id="faq-section" className="px-5 py-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              <details className="bg-white rounded-lg overflow-hidden">
                <summary className="px-4 py-3 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>What equipment do I need?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700 text-xs" />
                </summary>
                <div className="px-4 pb-3 text-charcoal-700 text-xs leading-relaxed">
                  Just cleats, shin guards, and athletic wear. I provide all
                  training equipment including balls, cones, and shooting
                  targets.
                </div>
              </details>
              <details className="bg-white rounded-lg overflow-hidden">
                <summary className="px-4 py-3 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>Do you offer group training?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700 text-xs" />
                </summary>
                <div className="px-4 pb-3 text-charcoal-700 text-xs leading-relaxed">
                  Yes! Small group sessions (2-4 forwards) are available at
                  discounted rates. Contact me for group pricing and scheduling.
                </div>
              </details>
              <details className="bg-white rounded-lg overflow-hidden">
                <summary className="px-4 py-3 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>What&apos;s your cancellation policy?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700 text-xs" />
                </summary>
                <div className="px-4 pb-3 text-charcoal-700 text-xs leading-relaxed">
                  Cancel up to 24 hours before session for full credit. Late
                  cancellations may forfeit the session.
                </div>
              </details>
              <details className="bg-white rounded-lg overflow-hidden">
                <summary className="px-4 py-3 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>Do you work with beginners?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700 text-xs" />
                </summary>
                <div className="px-4 pb-3 text-charcoal-700 text-xs leading-relaxed">
                  Absolutely! I work with all skill levels from youth beginners to
                  advanced competitive strikers preparing for college.
                </div>
              </details>
            </div>
          </section>

          <section id="contact-section" className="px-5 py-6 bg-white">
            <h2 className="text-charcoal-900 font-bold text-lg mb-4">
              Get in Touch
            </h2>
            <div className="space-y-3 mb-4">
              <a
                href="tel:+16195551234"
                className="flex items-center gap-3 bg-mocha-50 rounded-xl p-4"
              >
                <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-phone text-fern-600" />
                </div>
                <div>
                  <div className="text-charcoal-700 text-xs mb-0.5">Phone</div>
                  <div className="text-charcoal-900 font-semibold text-sm">
                    (619) 555-1234
                  </div>
                </div>
              </a>
              <a
                href="mailto:marcus.chen@finishingpro.com"
                className="flex items-center gap-3 bg-mocha-50 rounded-xl p-4"
              >
                <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-envelope text-fern-600" />
                </div>
                <div>
                  <div className="text-charcoal-700 text-xs mb-0.5">Email</div>
                  <div className="text-charcoal-900 font-semibold text-sm">
                    marcus.chen@finishingpro.com
                  </div>
                </div>
              </a>
            </div>
            <button
              type="button"
              className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3 px-4 rounded-lg text-sm flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-message" />
              <span>Send Message</span>
            </button>
          </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-mocha-200 px-5 py-4 shadow-lg z-40">
          <button
            type="button"
            className="w-full bg-fern-600 text-white font-bold py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-sm"
          >
            <i className="fa-solid fa-calendar-check" />
            <span>Book Session with Marcus</span>
          </button>
        </div>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
