'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

type StrengthLevel = 0 | 1 | 2 | 3 | 4;

export default function Demo4() {
  const [showParentPassword, setShowParentPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState('');
  const [strength, setStrength] = useState<StrengthLevel>(0);

  const strengthLabels: Record<StrengthLevel, string> = {
    0: 'Not set',
    1: 'Weak',
    2: 'Fair',
    3: 'Good',
    4: 'Strong',
  };

  const strengthTextColor: Record<StrengthLevel, string> = {
    0: 'text-charcoal-700',
    1: 'text-red-600 font-semibold',
    2: 'text-yellowGreen-500 font-semibold',
    3: 'text-fern-600 font-semibold',
    4: 'text-fern-600 font-semibold',
  };

  const barColor = (index: number): string => {
    if (index >= strength) return 'bg-mocha-200';
    if (strength === 1) return 'bg-red-600';
    if (strength === 2) return 'bg-yellowGreen-500';
    if (strength === 3) return 'bg-fern-500';
    return 'bg-fern-600';
  };

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPasswordValue(password);
    let s: StrengthLevel = 0;
    if (password.length >= 8) s++;
    if (/[A-Z]/.test(password)) s++;
    if (/[0-9]/.test(password)) s++;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) s++;
    setStrength(s);
  }, []);

  const handleCreateAccount = (e: React.MouseEvent) => {
    e.preventDefault();
    const parentName = (document.getElementById('parent-name') as HTMLInputElement)?.value;
    const parentEmail = (document.getElementById('parent-email') as HTMLInputElement)?.value;
    const parentPhone = (document.getElementById('parent-phone') as HTMLInputElement)?.value;
    const playerName = (document.getElementById('player-name') as HTMLInputElement)?.value;
    const playerAge = (document.getElementById('player-age') as HTMLInputElement)?.value;
    const playerSport = (document.getElementById('player-sport') as HTMLInputElement)?.value;
    const skillLevel = (document.getElementById('skill-level') as HTMLSelectElement)?.value;
    const trainingGoals = (document.getElementById('training-goals') as HTMLTextAreaElement)?.value;
    const termsAccepted = (document.getElementById('terms-checkbox') as HTMLInputElement)?.checked;

    if (!parentName || !parentEmail || !parentPhone || !passwordValue) {
      alert('Please fill in all parent information fields');
      return;
    }
    if (!playerName || !playerAge || !playerSport || !skillLevel || !trainingGoals) {
      alert('Please fill in all player information fields');
      return;
    }
    if (!termsAccepted) {
      alert('Please accept the Terms of Service and Privacy Policy');
      return;
    }
    console.log('Parent account created successfully');
  };

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans flex flex-col">
        <header className="px-5 pt-8 pb-4 bg-mocha-50">
          <div className="flex items-center justify-between">
            <Link
              href="/demo/3"
              className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-charcoal-900"
              aria-label="Back"
            >
              <i className="fa-solid fa-arrow-left" />
            </Link>
            <div className="flex items-center gap-2">
              <RepfolioLogo width={120} height={32} />
            </div>
            <div className="w-10" />
          </div>
        </header>

        <main className="flex-1">
          <section className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-fern-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-users text-fern-600 text-xl" />
              </div>
              <div>
                <h1 className="text-charcoal-900 font-bold text-2xl mb-1">Join Our Community</h1>
                <p className="text-charcoal-700 text-sm leading-relaxed">
                  Create an account to connect with top goalkeeper coaches for your athlete
                </p>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-fern-50 rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-fern-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-user-group text-fern-600 text-xl" />
              </div>
              <div>
                <h3 className="text-charcoal-900 font-bold text-sm mb-0.5">Parent/Guardian Account</h3>
                <p className="text-charcoal-700/80 text-xs">Manage your athlete&apos;s training journey</p>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <i className="fa-solid fa-user text-fern-600 text-lg" />
                <h2 className="text-charcoal-900 font-bold text-lg">Parent Information</h2>
              </div>

              <form id="parent-form" className="space-y-5">
                <div>
                  <label htmlFor="parent-name" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Parent/Guardian Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-user" />
                    </div>
                    <input
                      type="text"
                      id="parent-name"
                      placeholder="Enter your full name"
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                    />
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">This will be visible to coaches</p>
                </div>

                <div>
                  <label htmlFor="parent-email" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <input
                      type="email"
                      id="parent-email"
                      placeholder="parent@example.com"
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                    />
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">Session confirmations will be sent here</p>
                </div>

                <div>
                  <label htmlFor="parent-phone" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-phone" />
                    </div>
                    <input
                      type="tel"
                      id="parent-phone"
                      placeholder="+1 (555) 000-0000"
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                    />
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">For urgent communication about sessions</p>
                </div>

                <div>
                  <label htmlFor="parent-password" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Password <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-lock" />
                    </div>
                    <input
                      type={showParentPassword ? 'text' : 'password'}
                      id="parent-password"
                      placeholder="Create a secure password"
                      required
                      value={passwordValue}
                      onChange={handlePasswordChange}
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-12 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowParentPassword((s) => !s)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-700"
                      aria-label={showParentPassword ? 'Hide password' : 'Show password'}
                    >
                      <i className={`fa-solid ${showParentPassword ? 'fa-eye-slash' : 'fa-eye'}`} />
                    </button>
                  </div>
                </div>

                <div className="bg-mocha-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-900 text-xs font-semibold">Password Strength:</span>
                    <span id="strength-text" className={`text-xs ${strengthTextColor[strength]}`}>
                      {strengthLabels[strength]}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div id="strength-1" className={`flex-1 h-1.5 rounded-full ${barColor(0)}`} />
                    <div id="strength-2" className={`flex-1 h-1.5 rounded-full ${barColor(1)}`} />
                    <div id="strength-3" className={`flex-1 h-1.5 rounded-full ${barColor(2)}`} />
                    <div id="strength-4" className={`flex-1 h-1.5 rounded-full ${barColor(3)}`} />
                  </div>
                </div>
              </form>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-mocha-200" />
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-futbol text-fern-600" />
                <span className="text-charcoal-700 text-sm font-semibold">Player Details</span>
              </div>
              <div className="flex-1 h-px bg-mocha-200" />
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 border-2 border-fern-600/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-user-plus text-fern-600 text-lg" />
                  <h2 className="text-charcoal-900 font-bold text-lg">Add Player</h2>
                </div>
                <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center">
                  <span className="text-fern-600 font-bold text-xs">1</span>
                </div>
              </div>

              <form id="player-form" className="space-y-5">
                <div>
                  <label htmlFor="player-name" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Player Name <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-child text-sm" />
                    </div>
                    <input
                      type="text"
                      id="player-name"
                      placeholder="Enter player's full name"
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                    />
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">The athlete receiving training</p>
                </div>

                <div>
                  <label htmlFor="player-age" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Age <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-calendar-days text-sm" />
                    </div>
                    <input
                      type="number"
                      id="player-age"
                      placeholder="Enter age"
                      min={5}
                      max={25}
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                    />
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">Helps match with age-appropriate coaches</p>
                </div>

                <div>
                  <label htmlFor="player-sport" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Sport <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-futbol text-sm" />
                    </div>
                    <input
                      type="text"
                      id="player-sport"
                      placeholder="e.g., Soccer, Hockey, Lacrosse"
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                    />
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">Primary sport for goalkeeper training</p>
                </div>

                <div>
                  <label htmlFor="skill-level" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Current Skill Level <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                      <i className="fa-solid fa-signal text-sm" />
                    </div>
                    <select
                      id="skill-level"
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-10 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all appearance-none"
                    >
                      <option value="" disabled defaultValue="">
                        Select skill level
                      </option>
                      <option value="beginner">Beginner - Just starting out</option>
                      <option value="intermediate">Intermediate - Some experience</option>
                      <option value="advanced">Advanced - Competitive level</option>
                      <option value="elite">Elite - High performance</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-700 pointer-events-none">
                      <i className="fa-solid fa-chevron-down text-xs" />
                    </div>
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">Helps find coaches matching their level</p>
                </div>

                <div>
                  <label htmlFor="training-goals" className="block text-charcoal-900 font-semibold text-sm mb-2">
                    Training Goals <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute left-4 top-4 text-charcoal-700">
                      <i className="fa-solid fa-bullseye text-sm" />
                    </div>
                    <textarea
                      id="training-goals"
                      placeholder="What do you hope to achieve? (e.g., improve reflexes, positioning, confidence...)"
                      rows={4}
                      required
                      className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all resize-none"
                    />
                  </div>
                  <p className="text-charcoal-700 text-xs mt-1.5">Share specific areas of focus or development</p>
                </div>
              </form>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <button
              type="button"
              onClick={() => alert('Add another player functionality would open a new player form')}
              className="w-full bg-mocha-50 border-2 border-dashed border-mocha-200 text-charcoal-900 font-semibold py-4 px-6 rounded-xl text-sm flex items-center justify-center gap-2"
            >
              <i className="fa-solid fa-plus text-fern-600" />
              <span>Add Another Player</span>
            </button>
            <p className="text-charcoal-700 text-xs text-center mt-2">You can manage multiple players from one account</p>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-yellowGreen-500/10 rounded-xl p-5 border border-yellowGreen-500/30">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-star text-yellowGreen-500 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">What Parents Love</h3>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Join thousands of families improving their goalkeeper skills
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { title: 'Vetted Coaches', desc: 'All coaches are certified and background-checked' },
                  { title: 'Flexible Scheduling', desc: "Book sessions that fit your family's schedule" },
                  { title: 'Track Progress', desc: 'Watch your athlete improve with detailed analytics' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-check text-yellowGreen-500 text-sm" />
                    </div>
                    <div>
                      <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">{item.title}</h4>
                      <p className="text-charcoal-700 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="terms-checkbox"
                className="w-5 h-5 rounded border-2 border-mocha-200 text-fern-600 focus:ring-2 focus:ring-fern-600/20 cursor-pointer mt-0.5 flex-shrink-0"
              />
              <span className="text-charcoal-700 text-xs leading-relaxed">
                I agree to the <a href="#" className="text-fern-600 font-semibold">Terms of Service</a> and{' '}
                <a href="#" className="text-fern-600 font-semibold">Privacy Policy</a>. I consent to sharing my
                child&apos;s information with coaches for training purposes.
              </span>
            </label>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="marketing-checkbox"
                className="w-5 h-5 rounded border-2 border-mocha-200 text-fern-600 focus:ring-2 focus:ring-fern-600/20 cursor-pointer mt-0.5 flex-shrink-0"
              />
              <span className="text-charcoal-700 text-xs leading-relaxed">
                Send me training tips, coach recommendations, and special offers
              </span>
            </label>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <button
              type="button"
              id="create-account-button"
              onClick={handleCreateAccount}
              className="w-full bg-fern-600 text-white font-bold py-4 px-6 rounded-xl text-base shadow-sm flex items-center justify-center gap-2"
            >
              <span>Create Account</span>
              <i className="fa-solid fa-check-circle" />
            </button>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-fern-50 rounded-xl p-4 border-2 border-fern-600/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fern-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-shield-check text-fern-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-semibold text-sm mb-1">Safe & Secure Platform</h3>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Your family&apos;s information is protected with bank-level encryption. We never share your data
                    without permission.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 border border-mocha-200">
              <div className="flex gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <i key={i} className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                ))}
              </div>
              <p className="text-charcoal-900 text-sm leading-relaxed mb-4">
                &quot;My daughter&apos;s confidence has skyrocketed since we found her coach through this platform. The
                booking system is so easy to use, and I love being able to track her progress.&quot;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                  alt="Parent Jennifer"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-charcoal-900 font-semibold text-sm">Jennifer Martinez</div>
                  <div className="text-charcoal-700 text-xs">Parent of U14 Goalkeeper</div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5">
              <h3 className="text-charcoal-900 font-bold text-base mb-4 flex items-center gap-2">
                <i className="fa-solid fa-route text-fern-600" />
                <span>How It Works</span>
              </h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: 'Browse Coaches', desc: 'Search by location, specialization, availability, and reviews' },
                  { step: 2, title: 'Book Sessions', desc: 'Choose times that work for you and pay securely online' },
                  { step: 3, title: 'Track Development', desc: 'Get detailed feedback and progress reports after each session' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="w-8 h-8 bg-fern-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-charcoal-900 font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-charcoal-700 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-mocha-50 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <i className="fa-solid fa-tag text-fern-600 text-lg" />
                <h3 className="text-charcoal-900 font-bold text-base">Transparent Pricing</h3>
              </div>
              <p className="text-charcoal-700 text-sm leading-relaxed mb-4">
                Session rates vary by coach experience and location. Most sessions range from $40-$100 per hour.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-yellowGreen-500 text-sm" />
                  <span className="text-charcoal-900 text-xs font-medium">No hidden fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-circle-check text-yellowGreen-500 text-sm" />
                  <span className="text-charcoal-900 text-xs font-medium">Cancel anytime</span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5 border border-mocha-200">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Quick Questions</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-1">Can I book a trial session?</h4>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Yes! Most coaches offer discounted first sessions to ensure it&apos;s a good fit.
                  </p>
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-1">What if we need to reschedule?</h4>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    You can reschedule up to 24 hours before the session with no penalty.
                  </p>
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-1">Are group sessions available?</h4>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Many coaches offer both private and small group training options.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-certificate text-yellowGreen-500 text-sm" />
                <span className="text-charcoal-700 text-xs font-medium">Verified Coaches</span>
              </div>
              <div className="w-px h-4 bg-mocha-200" />
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-lock text-yellowGreen-500 text-sm" />
                <span className="text-charcoal-700 text-xs font-medium">Secure Payments</span>
              </div>
              <div className="w-px h-4 bg-mocha-200" />
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-heart text-yellowGreen-500 text-sm" />
                <span className="text-charcoal-700 text-xs font-medium">5K+ Families</span>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="text-center">
              <p className="text-charcoal-700 text-sm">
                Already have an account?{' '}
                <Link href="/demo/18" className="text-fern-600 font-bold ml-1">
                  Log in
                </Link>
              </p>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-4 text-center border border-mocha-200">
              <i className="fa-solid fa-circle-question text-fern-600 text-2xl mb-2" />
              <h3 className="text-charcoal-900 font-semibold text-sm mb-1">Questions About Getting Started?</h3>
              <p className="text-charcoal-700 text-xs mb-3">We&apos;re here to help you find the perfect coach</p>
              <button type="button" className="text-fern-600 text-sm font-semibold flex items-center justify-center gap-1 mx-auto">
                <i className="fa-solid fa-headset text-xs" />
                <span>Contact Support</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center justify-center gap-4 text-xs text-charcoal-700 flex-wrap">
              <a href="#" className="hover:text-fern-600">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-fern-600">
                Terms of Service
              </a>
              <span>•</span>
              <a href="#" className="hover:text-fern-600">
                Help Center
              </a>
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
