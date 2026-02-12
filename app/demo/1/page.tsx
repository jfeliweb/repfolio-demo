'use client';

import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo1() {
  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans">
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-mocha-200 z-50">
          <div className="flex items-center justify-between px-5 py-4">
            <div className="flex items-center gap-2">
              <RepfolioLogo width={120} height={32} />
            </div>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center text-charcoal-700"
              aria-label="Menu"
            >
              <i className="fa-solid fa-bars text-xl" />
            </button>
          </div>
        </header>

        <main className="pt-16">
          <section id="hero-section" className="px-5 pt-12 pb-16 bg-white">
            <div className="mb-8">
              <div className="w-16 h-16 bg-fern-50 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-trophy text-fern-600 text-3xl" />
              </div>
              <h1 className="text-charcoal-900 font-bold text-4xl leading-tight mb-4">
                Transform Your Game with Expert Coaching
              </h1>
              <p className="text-charcoal-700 text-base leading-relaxed mb-8">
                Connect with specialized coaches across all sports and skill
                levels. From soccer to tennis, basketball to swimming - find the
                perfect coach to help you or your athlete reach their full
                potential.
              </p>
              <div className="space-y-3 mb-8">
                <button
                  type="button"
                  className="w-full bg-fern-600 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Start Coaching</span>
                  <i className="fa-solid fa-arrow-right" />
                </button>
                <button
                  type="button"
                  className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2"
                >
                  <span>Find a Coach</span>
                  <i className="fa-solid fa-search" />
                </button>
              </div>
            </div>
            <div className="h-64 rounded-2xl overflow-hidden">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/H8eqzcJJniU9EtY7xxSzj5UXU772%2F00996c39-1fa9-4ee3-aaa9-1c570d08e194.png"
                alt="professional goalkeeper in action making a save, dynamic sports photography, high energy, modern clean aesthetic"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          <section id="stats-section" className="px-5 py-12 bg-mocha-50">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-fern-600 font-bold text-3xl mb-1">
                  500+
                </div>
                <div className="text-charcoal-700 text-xs">Active Coaches</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-fern-600 font-bold text-3xl mb-1">
                  2.3k
                </div>
                <div className="text-charcoal-700 text-xs">Athletes</div>
              </div>
              <div className="bg-white rounded-xl p-5 text-center">
                <div className="text-fern-600 font-bold text-3xl mb-1">98%</div>
                <div className="text-charcoal-700 text-xs">Satisfaction</div>
              </div>
            </div>
          </section>

          <section id="how-it-works-section" className="px-5 py-12 bg-white">
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                HOW IT WORKS
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Getting Started is Simple
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Three easy steps to begin your coaching journey
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-fern-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-charcoal-900 font-semibold text-lg mb-2">
                    Create Your Profile
                  </h3>
                  <p className="text-charcoal-700 text-sm leading-relaxed mb-3">
                    Sign up in minutes and tell us about your goals, experience
                    level, and coaching preferences.
                  </p>
                  <div className="bg-mocha-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-fern-100 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-user text-fern-600" />
                      </div>
                      <div className="flex-1">
                        <div className="h-2 bg-mocha-200 rounded-full w-full mb-1.5" />
                        <div className="h-2 bg-mocha-200 rounded-full w-3/4" />
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-mocha-200 rounded-lg flex-1" />
                      <div className="h-8 bg-mocha-200 rounded-lg flex-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-fern-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-charcoal-900 font-semibold text-lg mb-2">
                    Browse & Connect
                  </h3>
                  <p className="text-charcoal-700 text-sm leading-relaxed mb-3">
                    Explore verified trainers, view their credentials, and read
                    reviews from other athletes and parents.
                  </p>
                  <div className="bg-mocha-50 rounded-xl p-4">
                    <div className="flex gap-2 mb-3">
                      <div className="w-12 h-12 bg-mocha-200 rounded-lg" />
                      <div className="flex-1">
                        <div className="h-2 bg-mocha-200 rounded-full w-full mb-1.5" />
                        <div className="h-2 bg-mocha-200 rounded-full w-2/3 mb-2" />
                        <div className="flex gap-1">
                          <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                          <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-fern-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-charcoal-900 font-semibold text-lg mb-2">
                    Start Training
                  </h3>
                  <p className="text-charcoal-700 text-sm leading-relaxed mb-3">
                    Schedule sessions, track your progress, and communicate
                    directly with your coach through our platform.
                  </p>
                  <div className="bg-mocha-50 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-charcoal-700">
                        Next Session
                      </span>
                      <div className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-semibold px-2 py-1 rounded">
                        Confirmed
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-calendar text-white" />
                      </div>
                      <div>
                        <div className="h-2 bg-mocha-200 rounded-full w-24 mb-1.5" />
                        <div className="h-2 bg-mocha-200 rounded-full w-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="featured-trainers-section"
            className="px-5 py-12 bg-mocha-50"
          >
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                FEATURED TRAINERS
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Meet Our Top Coaches
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Learn from experienced professionals who are passionate about
                goalkeeper development
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a0ff281796-e07c465fecdd372fe832.png"
                    alt="professional male soccer goalkeeper coach in training gear, confident pose, athletic, without background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-charcoal-900 font-bold text-lg mb-1">
                        Marcus Rodriguez
                      </h3>
                      <p className="text-charcoal-700 text-sm mb-2">
                        Elite Goalkeeper Coach
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <span className="text-charcoal-900 text-xs font-semibold ml-1">
                          5.0
                        </span>
                        <span className="text-charcoal-700 text-xs">(127)</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-fern-50 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-shield text-fern-600" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Shot Stopping
                    </span>
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Distribution
                    </span>
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Youth Dev
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-xs text-charcoal-700">
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-clock" />
                      <span>8+ years</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-users" />
                      <span>200+ athletes</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-fern-600 text-white font-semibold py-3 px-4 rounded-xl text-sm"
                  >
                    View Profile
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/7f043b1094-e7f5420ca1e674c43def.png"
                    alt="professional female soccer goalkeeper coach smiling, athletic wear, confident, without background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-charcoal-900 font-bold text-lg mb-1">
                        Sarah Chen
                      </h3>
                      <p className="text-charcoal-700 text-sm mb-2">
                        Technical Development Specialist
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <span className="text-charcoal-900 text-xs font-semibold ml-1">
                          5.0
                        </span>
                        <span className="text-charcoal-700 text-xs">(94)</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-fern-50 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-medal text-fern-600" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Positioning
                    </span>
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Footwork
                    </span>
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Mental Game
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-xs text-charcoal-700">
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-clock" />
                      <span>12+ years</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-users" />
                      <span>350+ athletes</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-fern-600 text-white font-semibold py-3 px-4 rounded-xl text-sm"
                  >
                    View Profile
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/789a01bb97-88b6c5f0662281b2efd4.png"
                    alt="professional male soccer goalkeeper coach demonstrating technique, athletic, experienced, without background"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-charcoal-900 font-bold text-lg mb-1">
                        James Patterson
                      </h3>
                      <p className="text-charcoal-700 text-sm mb-2">
                        Performance & Conditioning Coach
                      </p>
                      <div className="flex items-center gap-1 mb-2">
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star text-yellowGreen-500 text-xs" />
                        <i className="fa-solid fa-star-half-stroke text-yellowGreen-500 text-xs" />
                        <span className="text-charcoal-900 text-xs font-semibold ml-1">
                          4.8
                        </span>
                        <span className="text-charcoal-700 text-xs">(156)</span>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-fern-50 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-dumbbell text-fern-600" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Agility
                    </span>
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Strength
                    </span>
                    <span className="bg-mocha-50 text-charcoal-700 text-xs px-3 py-1 rounded-full">
                      Reflexes
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4 text-xs text-charcoal-700">
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-clock" />
                      <span>10+ years</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <i className="fa-solid fa-users" />
                      <span>280+ athletes</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-fern-600 text-white font-semibold py-3 px-4 rounded-xl text-sm"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="w-full mt-6 bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3.5 px-4 rounded-xl text-sm"
            >
              View All Coaches
            </button>
          </section>

          <section id="benefits-section" className="px-5 py-12 bg-white">
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                PLATFORM BENEFITS
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Everything You Need to Succeed
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Powerful tools designed to make coaching and learning seamless
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-mocha-50 rounded-2xl p-6">
                <div className="w-14 h-14 bg-fern-600 rounded-xl flex items-center justify-center mb-4">
                  <i className="fa-solid fa-calendar-check text-white text-2xl" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-xl mb-3">
                  Smart Scheduling
                </h3>
                <p className="text-charcoal-700 text-sm leading-relaxed mb-4">
                  Book sessions with ease using our intelligent calendar system.
                  Automatic reminders, rescheduling options, and conflict
                  detection keep everyone on track.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-charcoal-900">
                      This Week
                    </span>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-fern-600 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-mocha-200 rounded-full" />
                      <div className="w-1.5 h-1.5 bg-mocha-200 rounded-full" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 bg-fern-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-fern-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">M</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-2 bg-fern-600/30 rounded-full w-3/4 mb-1" />
                        <div className="h-1.5 bg-fern-600/20 rounded-full w-1/2" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-mocha-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-mocha-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-charcoal-700 text-xs font-bold">
                          W
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-2 bg-mocha-200 rounded-full w-2/3 mb-1" />
                        <div className="h-1.5 bg-mocha-200 rounded-full w-1/3" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-mocha-50 rounded-lg p-3">
                      <div className="w-8 h-8 bg-mocha-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-charcoal-700 text-xs font-bold">
                          F
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-2 bg-mocha-200 rounded-full w-3/5 mb-1" />
                        <div className="h-1.5 bg-mocha-200 rounded-full w-2/5" />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Automated notifications & reminders</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Easy rescheduling with one tap</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Sync with your personal calendar</span>
                  </li>
                </ul>
              </div>

              <div className="bg-mocha-50 rounded-2xl p-6">
                <div className="w-14 h-14 bg-fern-600 rounded-xl flex items-center justify-center mb-4">
                  <i className="fa-solid fa-chart-line text-white text-2xl" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-xl mb-3">
                  Progress Tracking
                </h3>
                <p className="text-charcoal-700 text-sm leading-relaxed mb-4">
                  Monitor improvement with detailed analytics, skill
                  assessments, and personalized feedback. Watch your performance
                  grow over time with visual insights.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-charcoal-900">
                      Skill Development
                    </span>
                    <span className="text-xs text-fern-600 font-semibold">
                      +12% this month
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-charcoal-700">
                          Shot Stopping
                        </span>
                        <span className="text-xs font-semibold text-charcoal-900">
                          85%
                        </span>
                      </div>
                      <div className="h-2 bg-mocha-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-fern-600 rounded-full"
                          style={{ width: '85%' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-charcoal-700">
                          Distribution
                        </span>
                        <span className="text-xs font-semibold text-charcoal-900">
                          72%
                        </span>
                      </div>
                      <div className="h-2 bg-mocha-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-fern-600 rounded-full"
                          style={{ width: '72%' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-charcoal-700">
                          Positioning
                        </span>
                        <span className="text-xs font-semibold text-charcoal-900">
                          78%
                        </span>
                      </div>
                      <div className="h-2 bg-mocha-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-fern-600 rounded-full"
                          style={{ width: '78%' }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs text-charcoal-700">
                          Reflexes
                        </span>
                        <span className="text-xs font-semibold text-charcoal-900">
                          90%
                        </span>
                      </div>
                      <div className="h-2 bg-mocha-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellowGreen-500 rounded-full"
                          style={{ width: '90%' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Detailed performance metrics</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Video analysis and feedback</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Goal setting and achievement tracking</span>
                  </li>
                </ul>
              </div>

              <div className="bg-mocha-50 rounded-2xl p-6">
                <div className="w-14 h-14 bg-fern-600 rounded-xl flex items-center justify-center mb-4">
                  <i className="fa-solid fa-comments text-white text-2xl" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-xl mb-3">
                  Seamless Communication
                </h3>
                <p className="text-charcoal-700 text-sm leading-relaxed mb-4">
                  Stay connected with built-in messaging, video calls, and
                  group discussions. Share updates, ask questions, and
                  collaborate in real-time.
                </p>
                <div className="bg-white rounded-xl p-4">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-fern-600 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="bg-mocha-50 rounded-2xl rounded-tl-sm p-3">
                          <div className="h-2 bg-mocha-200 rounded-full w-full mb-1.5" />
                          <div className="h-2 bg-mocha-200 rounded-full w-3/4" />
                        </div>
                        <span className="text-xs text-charcoal-700 mt-1 inline-block">
                          2:34 PM
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="flex-1">
                        <div
                          className="bg-fern-600/20 rounded-2xl rounded-tr-sm p-3 ml-auto max-w-[80%]"
                        >
                          <div className="h-2 bg-fern-600/30 rounded-full w-full mb-1.5" />
                          <div className="h-2 bg-fern-600/30 rounded-full w-2/3" />
                        </div>
                        <span className="text-xs text-charcoal-700 mt-1 inline-block float-right">
                          2:35 PM
                        </span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-yellowGreen-500 flex-shrink-0" />
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-fern-600 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="bg-mocha-50 rounded-2xl rounded-tl-sm p-3">
                          <div className="h-2 bg-mocha-200 rounded-full w-4/5" />
                        </div>
                        <span className="text-xs text-charcoal-700 mt-1 inline-block">
                          2:36 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Instant messaging with coaches</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Secure video conferencing</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-check text-fern-600 text-xs" />
                    <span>Share photos, videos, and documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            id="specializations-section"
            className="px-5 py-12 bg-mocha-50"
          >
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                SPECIALIZATIONS
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Goalkeeper Training Focus Areas
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Expert coaching across all aspects of goalkeeper development
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-hand text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Shot Stopping
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Master saves and reflexes
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-bullseye text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Positioning
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Perfect your angles
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-paper-plane text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Distribution
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Build from the back
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-shoe-prints text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Footwork
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Quick and agile movement
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-bolt text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Reaction Time
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Lightning fast reflexes
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-brain text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Mental Game
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Confidence & focus
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-people-group text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Communication
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Lead your defense
                </p>
              </div>
              <div className="bg-white rounded-xl p-4">
                <div className="w-12 h-12 bg-fern-50 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-dumbbell text-fern-600 text-xl" />
                </div>
                <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Conditioning
                </h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Strength & endurance
                </p>
              </div>
            </div>
          </section>

          <section id="testimonials-section" className="px-5 py-12 bg-white">
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                TESTIMONIALS
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                What Athletes & Parents Say
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Real stories from our community
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-mocha-50 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Athlete"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm">
                      David Martinez
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Parent of U16 Goalkeeper
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
                <p className="text-charcoal-900 text-sm leading-relaxed mb-3">
                  &quot;Repfolio has been a game-changer for my son&apos;s
                  development. The progress tracking feature lets me see exactly
                  how he&apos;s improving, and the communication with Coach
                  Marcus is seamless. Highly recommend!&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-charcoal-700">
                  <i className="fa-solid fa-clock" />
                  <span>2 weeks ago</span>
                </div>
              </div>
              <div className="bg-mocha-50 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="Athlete"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm">
                      Emma Thompson
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Goalkeeper, Age 15
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
                <p className="text-charcoal-900 text-sm leading-relaxed mb-3">
                  &quot;Training with Coach Sarah has helped me earn a starting
                  position on my club team. The video analysis and personalized
                  drills have made such a difference. This platform makes
                  everything so easy!&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-charcoal-700">
                  <i className="fa-solid fa-clock" />
                  <span>1 month ago</span>
                </div>
              </div>
              <div className="bg-mocha-50 rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                    alt="Athlete"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-charcoal-900 font-semibold text-sm">
                      Michael Chen
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Parent & Former Pro
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
                <p className="text-charcoal-900 text-sm leading-relaxed mb-3">
                  &quot;As a former goalkeeper myself, I&apos;m impressed by the
                  quality of coaching available on Repfolio. The scheduling
                  system is brilliant and the progress metrics give real insights
                  into development.&quot;
                </p>
                <div className="flex items-center gap-2 text-xs text-charcoal-700">
                  <i className="fa-solid fa-clock" />
                  <span>3 weeks ago</span>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-fern-50 rounded-xl p-5 text-center">
              <div className="text-fern-600 font-bold text-4xl mb-1">4.9/5.0</div>
              <div className="flex justify-center gap-1 mb-2">
                <i className="fa-solid fa-star text-yellowGreen-500" />
                <i className="fa-solid fa-star text-yellowGreen-500" />
                <i className="fa-solid fa-star text-yellowGreen-500" />
                <i className="fa-solid fa-star text-yellowGreen-500" />
                <i className="fa-solid fa-star text-yellowGreen-500" />
              </div>
              <p className="text-charcoal-700 text-sm">
                Based on 1,247+ reviews
              </p>
            </div>
          </section>

          <section
            id="pricing-preview-section"
            className="px-5 py-12 bg-mocha-50"
          >
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                FLEXIBLE PRICING
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Plans for Every Goal
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Choose the package that fits your training needs
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 border-2 border-mocha-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-charcoal-900 font-bold text-xl mb-1">
                      Starter
                    </h3>
                    <p className="text-charcoal-700 text-sm">
                      Perfect for beginners
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-charcoal-900 font-bold text-3xl">
                      $49
                    </div>
                    <div className="text-charcoal-700 text-xs">/month</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>4 sessions per month</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>Basic progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>Chat support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal-700">
                    <i className="fa-solid fa-xmark text-charcoal-700 mt-0.5 flex-shrink-0" />
                    <span>Video analysis</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3 px-4 rounded-xl text-sm"
                >
                  Get Started
                </button>
              </div>
              <div className="bg-fern-600 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-4 right-4 bg-yellowGreen-500 text-charcoal-900 text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Pro</h3>
                    <p className="text-white/80 text-sm">Most popular choice</p>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-bold text-3xl">$89</div>
                    <div className="text-white/80 text-xs">/month</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500 mt-0.5 flex-shrink-0" />
                    <span>8 sessions per month</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500 mt-0.5 flex-shrink-0" />
                    <span>Advanced progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500 mt-0.5 flex-shrink-0" />
                    <span>Priority chat & video support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white">
                    <i className="fa-solid fa-check text-yellowGreen-500 mt-0.5 flex-shrink-0" />
                    <span>Video analysis included</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-yellowGreen-500 text-charcoal-900 font-semibold py-3 px-4 rounded-xl text-sm"
                >
                  Get Started
                </button>
              </div>
              <div className="bg-white rounded-2xl p-6 border-2 border-mocha-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-charcoal-900 font-bold text-xl mb-1">
                      Elite
                    </h3>
                    <p className="text-charcoal-700 text-sm">
                      Maximum development
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-charcoal-900 font-bold text-3xl">
                      $149
                    </div>
                    <div className="text-charcoal-700 text-xs">/month</div>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>12 sessions per month</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>Premium analytics dashboard</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 coach access</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>Unlimited video analysis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-charcoal-900">
                    <i className="fa-solid fa-check text-fern-600 mt-0.5 flex-shrink-0" />
                    <span>Custom training plans</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-full bg-fern-600 text-white font-semibold py-3 px-4 rounded-xl text-sm"
                >
                  Get Started
                </button>
              </div>
            </div>
          </section>

          <section
            id="success-stories-section"
            className="px-5 py-12 bg-white"
          >
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                SUCCESS STORIES
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Athletes Who Made It
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                From Repfolio training to college scholarships and beyond
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-mocha-50 rounded-2xl overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ac80bbaf71-88a9746bdcbabc3eb866.png"
                    alt="young male goalkeeper celebrating with trophy, success story, athletic achievement"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg"
                      alt="Success story"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-charcoal-900 font-semibold text-sm">
                        Jake Morrison
                      </h4>
                      <p className="text-charcoal-700 text-xs">
                        NCAA Division 1 Scholarship
                      </p>
                    </div>
                  </div>
                  <p className="text-charcoal-900 text-sm leading-relaxed mb-3">
                    &quot;After 2 years with Coach Marcus, I earned a full
                    scholarship to play D1 soccer. The technical skills and
                    mental preparation I gained were invaluable.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-semibold px-2 py-1 rounded">
                      Scholarship Winner
                    </span>
                    <span className="bg-fern-600/20 text-fern-600 text-xs font-semibold px-2 py-1 rounded">
                      2 Years Training
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-mocha-50 rounded-2xl overflow-hidden">
                <div className="h-44 overflow-hidden">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/996148a51a-01bc0522e975c8f2ea64.png"
                    alt="young female goalkeeper training session, focused athlete, professional sports photography"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg"
                      alt="Success story"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-charcoal-900 font-semibold text-sm">
                        Sophia Williams
                      </h4>
                      <p className="text-charcoal-700 text-xs">
                        Youth National Team
                      </p>
                    </div>
                  </div>
                  <p className="text-charcoal-900 text-sm leading-relaxed mb-3">
                    &quot;Coach Sarah helped me make the U17 National Team. Her
                    focus on positioning and decision-making transformed my game
                    completely.&quot;
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-semibold px-2 py-1 rounded">
                      National Team
                    </span>
                    <span className="bg-fern-600/20 text-fern-600 text-xs font-semibold px-2 py-1 rounded">
                      18 Months Training
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="app-features-section"
            className="px-5 py-12 bg-mocha-50"
          >
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                MOBILE APP
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Train Anywhere, Anytime
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Download our app for iOS and Android to access all features on
                the go
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 mb-4">
              <div className="h-48 bg-mocha-50 rounded-xl mb-6 flex items-center justify-center">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/ff64be8651-c7afab5f187f03174768.png"
                  alt="modern smartphone displaying sports training app interface, mobile mockup, clean design"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-mobile-screen text-fern-600" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                      Mobile-First Design
                    </h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Intuitive interface optimized for on-the-go access
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-bell text-fern-600" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                      Push Notifications
                    </h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Never miss a session with instant alerts and reminders
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-cloud text-fern-600" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-1">
                      Cloud Sync
                    </h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      All your data synced across all your devices
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  className="flex-1 bg-charcoal-900 text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-apple text-lg" />
                  <span>App Store</span>
                </button>
                <button
                  type="button"
                  className="flex-1 bg-charcoal-900 text-white font-semibold py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-google-play text-lg" />
                  <span>Play Store</span>
                </button>
              </div>
            </div>
          </section>

          <section id="faq-section" className="px-5 py-12 bg-white">
            <div className="mb-8">
              <div className="inline-block bg-fern-50 text-fern-600 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                FAQ
              </div>
              <h2 className="text-charcoal-900 font-bold text-3xl mb-3">
                Common Questions
              </h2>
              <p className="text-charcoal-700 text-sm leading-relaxed">
                Everything you need to know about Repfolio
              </p>
            </div>
            <div className="space-y-3">
              <details className="bg-mocha-50 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>How do I find the right coach?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700" />
                </summary>
                <div className="px-5 pb-4 text-charcoal-700 text-sm leading-relaxed">
                  Browse our directory of verified coaches, filter by specialty,
                  location, and availability. Read reviews, check credentials,
                  and book a free consultation to ensure the perfect match.
                </div>
              </details>
              <details className="bg-mocha-50 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>Can I switch coaches?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700" />
                </summary>
                <div className="px-5 pb-4 text-charcoal-700 text-sm leading-relaxed">
                  Absolutely! You can change coaches at any time. Your progress
                  data transfers seamlessly, ensuring continuity in your
                  training journey.
                </div>
              </details>
              <details className="bg-mocha-50 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>What if I need to cancel a session?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700" />
                </summary>
                <div className="px-5 pb-4 text-charcoal-700 text-sm leading-relaxed">
                  Cancel up to 24 hours before your session for a full credit.
                  Emergency cancellations are handled case-by-case with your
                  coach.
                </div>
              </details>
              <details className="bg-mocha-50 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>Are all coaches verified?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700" />
                </summary>
                <div className="px-5 pb-4 text-charcoal-700 text-sm leading-relaxed">
                  Yes! Every coach undergoes background checks and credential
                  verification. We ensure they have proper certifications and
                  experience before joining our platform.
                </div>
              </details>
              <details className="bg-mocha-50 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>Can I train virtually?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700" />
                </summary>
                <div className="px-5 pb-4 text-charcoal-700 text-sm leading-relaxed">
                  Yes! Many coaches offer virtual training sessions via video
                  call. You can also combine in-person and virtual sessions
                  based on your needs.
                </div>
              </details>
              <details className="bg-mocha-50 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer flex items-center justify-between text-charcoal-900 font-semibold text-sm">
                  <span>What age groups do you serve?</span>
                  <i className="fa-solid fa-chevron-down text-charcoal-700" />
                </summary>
                <div className="px-5 pb-4 text-charcoal-700 text-sm leading-relaxed">
                  We work with goalkeepers from age 8 through adult. Our coaches
                  specialize in different age groups and skill levels to provide
                  age-appropriate training.
                </div>
              </details>
            </div>
          </section>

          <section id="cta-section" className="px-5 py-16 bg-fern-600">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-rocket text-white text-3xl" />
              </div>
              <h2 className="text-white font-bold text-3xl mb-4">
                Ready to Transform Your Game?
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-8">
                Join thousands of athletes and coaches who are already
                achieving their goals with Repfolio
              </p>
              <div className="space-y-3 mb-8">
                <button
                  type="button"
                  className="w-full bg-yellowGreen-500 text-charcoal-900 font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Get Started Free</span>
                  <i className="fa-solid fa-arrow-right" />
                </button>
                <button
                  type="button"
                  className="w-full bg-white/20 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <span>Schedule a Demo</span>
                  <i className="fa-solid fa-calendar" />
                </button>
              </div>
              <div className="flex items-center justify-center gap-6 text-white/80 text-xs">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-circle" />
                  <span>No credit card</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-check-circle" />
                  <span>14-day trial</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-white font-bold text-2xl mb-1">500+</div>
                  <div className="text-white/80 text-xs">Coaches</div>
                </div>
                <div>
                  <div className="text-white font-bold text-2xl mb-1">2.3k</div>
                  <div className="text-white/80 text-xs">Athletes</div>
                </div>
                <div>
                  <div className="text-white font-bold text-2xl mb-1">98%</div>
                  <div className="text-white/80 text-xs">Satisfaction</div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white border-t border-mocha-200 px-5 py-12">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <RepfolioLogo width={100} height={28} />
            </div>
            <p className="text-charcoal-700 text-sm leading-relaxed mb-6">
              Connecting elite goalkeeper coaches with passionate athletes
              worldwide.
            </p>
          </div>
          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-charcoal-900 font-semibold text-sm mb-3">
                Platform
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Find a Coach
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Become a Coach
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-charcoal-900 font-semibold text-sm mb-3">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Training Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-charcoal-900 font-semibold text-sm mb-3">
                Company
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Press Kit
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-charcoal-900 font-semibold text-sm mb-3">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-charcoal-700 text-sm">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-mocha-200 pt-6">
            <div className="flex items-center justify-center gap-4 mb-4">
              <a
                href="#"
                className="w-10 h-10 bg-mocha-50 rounded-full flex items-center justify-center text-charcoal-700 hover:bg-fern-600 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-mocha-50 rounded-full flex items-center justify-center text-charcoal-700 hover:bg-fern-600 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-twitter" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-mocha-50 rounded-full flex items-center justify-center text-charcoal-700 hover:bg-fern-600 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-instagram" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-mocha-50 rounded-full flex items-center justify-center text-charcoal-700 hover:bg-fern-600 hover:text-white transition-colors"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <p className="text-charcoal-700 text-xs text-center">
              © 2024 Repfolio. All rights reserved.
            </p>
          </div>
        </footer>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
