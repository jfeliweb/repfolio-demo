'use client';

import { useState } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo2() {
  const [activeTab, setActiveTab] = useState<'coach' | 'parent'>('coach');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleCoachTab = () => {
    setActiveTab('coach');
  };

  const handleParentTab = () => {
    setActiveTab('parent');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  return (
    <RequireAuth>
      <div className="min-h-screen flex flex-col bg-mocha-50 text-charcoal-700 font-sans">
        <main id="main-content" className="min-h-screen flex flex-col">
          <section
            id="logo-section"
            className="px-5 pt-12 pb-6 bg-mocha-50"
          >
            <div className="flex justify-center mb-3">
              <RepfolioLogo width={120} height={40} />
            </div>
            <p className="text-center text-charcoal-700 text-xs mt-1">
              Professional Goalkeeper Training
            </p>
          </section>

          <section id="tab-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-1.5 flex gap-1 shadow-sm">
              <button
                type="button"
                id="coach-tab"
                onClick={handleCoachTab}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === 'coach'
                    ? 'bg-fern-50 text-fern-600'
                    : 'text-charcoal-700'
                }`}
              >
                Coach Login
              </button>
              <button
                type="button"
                id="parent-tab"
                onClick={handleParentTab}
                className={`flex-1 py-3 px-4 rounded-lg font-semibold text-sm transition-all ${
                  activeTab === 'parent'
                    ? 'bg-fern-50 text-fern-600'
                    : 'text-charcoal-700'
                }`}
              >
                Parent Login
              </button>
            </div>
          </section>

          <section id="welcome-section" className="px-5 pb-6 bg-mocha-50">
            <h2 className="text-charcoal-900 font-bold text-2xl mb-2">
              Welcome Back
            </h2>
            <p className="text-charcoal-700 text-sm">
              Sign in to continue your coaching journey
            </p>
          </section>

          <section
            id="form-section"
            className="px-5 pb-6 bg-mocha-50 flex-1"
          >
            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <div id="email-field">
                <label
                  htmlFor="email"
                  className="block text-charcoal-900 font-semibold text-sm mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    placeholder={
                      activeTab === 'coach'
                        ? 'coach@example.com'
                        : 'parent@example.com'
                    }
                    className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                  />
                </div>
              </div>

              <div id="password-field">
                <label
                  htmlFor="password"
                  className="block text-charcoal-900 font-semibold text-sm mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter your password"
                    className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-12 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-700 hover:text-charcoal-900"
                    aria-label={passwordVisible ? 'Hide password' : 'Show password'}
                  >
                    <i
                      className={`fa-solid ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`}
                    />
                  </button>
                </div>
              </div>

              <div
                id="remember-forgot-section"
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-5 h-5 rounded border-2 border-mocha-200 text-fern-600 focus:ring-2 focus:ring-fern-600/20 cursor-pointer"
                  />
                  <span className="text-charcoal-900 text-sm font-medium">
                    Remember me
                  </span>
                </label>
                <a
                  href="#"
                  className="text-fern-600 text-sm font-semibold hover:text-fern-700"
                >
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                id="login-button"
                className="w-full bg-fern-600 text-white font-bold py-4 px-6 rounded-xl text-base shadow-sm mt-6 hover:bg-fern-700 transition-colors"
              >
                Log In
              </button>
            </form>
          </section>

          <section id="divider-section" className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-mocha-200" />
              <span className="text-charcoal-700 text-xs font-medium">
                OR CONTINUE WITH
              </span>
              <div className="flex-1 h-px bg-mocha-200" />
            </div>
          </section>

          <section id="social-login-section" className="px-5 pb-6 bg-mocha-50">
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm hover:border-mocha-600 transition-colors"
              >
                <i className="fa-brands fa-google text-lg" />
                <span>Google</span>
              </button>
              <button
                type="button"
                className="bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3.5 px-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-sm hover:border-mocha-600 transition-colors"
              >
                <i className="fa-brands fa-apple text-lg" />
                <span>Apple</span>
              </button>
            </div>
          </section>

          <section
            id="security-badge-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="bg-white rounded-xl p-4 flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-shield-check text-yellowGreen-500 text-lg" />
              </div>
              <div>
                <h3 className="text-charcoal-900 font-semibold text-sm mb-1">
                  Secure Login
                </h3>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Your data is protected with bank-level 256-bit encryption and
                  secure authentication protocols.
                </p>
              </div>
            </div>
          </section>

          <section id="features-section" className="px-5 pb-6 bg-mocha-50">
            <h3 className="text-charcoal-900 font-bold text-base mb-4">
              Why Coaches Choose Repfolio
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-calendar-check text-fern-600 text-sm" />
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">
                    Smart Scheduling
                  </h4>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Automated booking system that syncs with your calendar
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-chart-line text-fern-600 text-sm" />
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">
                    Progress Tracking
                  </h4>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Track athlete development with detailed analytics
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-fern-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-credit-card text-fern-600 text-sm" />
                </div>
                <div>
                  <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">
                    Secure Payments
                  </h4>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    Get paid instantly with automated invoicing
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="testimonial-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex gap-1 mb-3">
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
              </div>
              <p className="text-charcoal-900 text-sm leading-relaxed mb-4 italic">
                &quot;Repfolio has transformed how I manage my training
                business. The scheduling tools save me hours every week, and
                parents love the communication features.&quot;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg"
                  alt="Coach testimonial"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-charcoal-900 font-semibold text-sm">
                    Marcus Johnson
                  </div>
                  <div className="text-charcoal-700 text-xs">
                    Goalkeeper Coach, 8 years
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="stats-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-fern-600 rounded-xl p-5">
              <h3 className="text-white font-bold text-base mb-4 text-center">
                Join Our Growing Community
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center">
                  <div className="text-white font-bold text-2xl mb-1">
                    500+
                  </div>
                  <div className="text-white/80 text-xs">Active Coaches</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-2xl mb-1">
                    10K+
                  </div>
                  <div className="text-white/80 text-xs">Athletes</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-2xl mb-1">
                    50K+
                  </div>
                  <div className="text-white/80 text-xs">Sessions</div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="trust-badges-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <h3 className="text-charcoal-900 font-bold text-sm mb-3 text-center">
              Trusted By
            </h3>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-white rounded-lg px-4 py-2 border border-mocha-200">
                <span className="text-charcoal-700 text-xs font-semibold">
                  USSF
                </span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 border border-mocha-200">
                <span className="text-charcoal-700 text-xs font-semibold">
                  FIFA
                </span>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 border border-mocha-200">
                <span className="text-charcoal-700 text-xs font-semibold">
                  NSCAA
                </span>
              </div>
            </div>
          </section>

          <section id="help-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-mocha-100 rounded-xl p-4 text-center">
              <i className="fa-solid fa-headset text-fern-600 text-2xl mb-2" />
              <h3 className="text-charcoal-900 font-semibold text-sm mb-1">
                Need Help?
              </h3>
              <p className="text-charcoal-700 text-xs mb-3">
                Our support team is available 24/7
              </p>
              <button
                type="button"
                className="text-fern-600 text-sm font-semibold flex items-center justify-center gap-1 mx-auto hover:text-fern-700"
              >
                <span>Contact Support</span>
                <i className="fa-solid fa-arrow-right text-xs" />
              </button>
            </div>
          </section>

          <section
            id="signup-section"
            className="px-5 pb-8 bg-mocha-50"
          >
            <div className="text-center">
              <p className="text-charcoal-700 text-sm">
                Don&apos;t have an account?{' '}
                <a
                  href="#"
                  className="text-fern-600 font-bold ml-1 hover:text-fern-700"
                >
                  Sign up
                </a>
              </p>
            </div>
          </section>

          <section
            id="footer-links-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="flex items-center justify-center gap-4 text-xs text-charcoal-700 flex-wrap">
              <a
                href="#"
                className="hover:text-fern-600"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-fern-600"
              >
                Terms of Service
              </a>
              <span>•</span>
              <a
                href="#"
                className="hover:text-fern-600"
              >
                Help Center
              </a>
            </div>
          </section>

          <footer
            id="footer"
            className="px-5 pb-8 bg-mocha-50"
          >
            <p className="text-center text-charcoal-700 text-xs">
              © 2024 Repfolio. All rights reserved.
            </p>
          </footer>
        </main>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
