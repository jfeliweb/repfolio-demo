'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

function usePasswordStrength(password: string) {
  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const strength =
    (hasLength ? 1 : 0) +
    (hasUppercase ? 1 : 0) +
    (hasNumber ? 1 : 0) +
    (hasSpecial ? 1 : 0);
  const label =
    strength === 0
      ? 'Not set'
      : strength === 1
        ? 'Weak'
        : strength === 2
          ? 'Fair'
          : strength === 3
            ? 'Good'
            : 'Strong';
  return {
    hasLength,
    hasUppercase,
    hasNumber,
    hasSpecial,
    strength,
    label,
  };
}

export default function Demo3() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const strengthResult = usePasswordStrength(password);
  const passwordsMatch =
    confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const form = e.target as HTMLFormElement;
      const fullname = (form.querySelector('#fullname') as HTMLInputElement)
        ?.value;
      const email = (form.querySelector('#email') as HTMLInputElement)?.value;
      const phone = (form.querySelector('#phone') as HTMLInputElement)?.value;
      const termsAccepted = (
        form.querySelector('#terms-checkbox') as HTMLInputElement
      )?.checked;

      if (!fullname || !email || !phone || !password || !confirmPassword) {
        alert('Please fill in all required fields');
        return;
      }
      if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if (!termsAccepted) {
        alert('Please accept the Terms of Service and Privacy Policy');
        return;
      }
      console.log('Form submitted successfully');
    },
    [password, confirmPassword]
  );

  const strengthBarClass = (index: number) => {
    if (index >= strengthResult.strength)
      return 'flex-1 h-1.5 bg-mocha-200 rounded-full';
    if (strengthResult.strength === 1)
      return 'flex-1 h-1.5 bg-red-500 rounded-full';
    if (strengthResult.strength === 2)
      return 'flex-1 h-1.5 bg-yellowGreen-500 rounded-full';
    if (strengthResult.strength === 3)
      return 'flex-1 h-1.5 bg-brightFern-400 rounded-full';
    return 'flex-1 h-1.5 bg-fern-600 rounded-full';
  };

  const strengthTextClass =
    strengthResult.strength === 0
      ? 'text-charcoal-700 text-xs'
      : strengthResult.strength === 1
        ? 'text-red-500 text-xs font-semibold'
        : strengthResult.strength === 2
          ? 'text-yellowGreen-500 text-xs font-semibold'
          : strengthResult.strength === 3
            ? 'text-brightFern-600 text-xs font-semibold'
            : 'text-fern-600 text-xs font-semibold';

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans flex flex-col">
        <main id="main-content" className="flex-1 flex flex-col">
          <section
            id="header-section"
            className="px-5 pt-8 pb-4 bg-mocha-50"
          >
            <div className="flex items-center justify-between">
              <Link
                href="/demo/2"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm text-charcoal-900"
                aria-label="Go back"
              >
                <i className="fa-solid fa-arrow-left" />
              </Link>
              <div className="flex items-center gap-2">
                <RepfolioLogo width={120} height={32} />
              </div>
              <div className="w-10" />
            </div>
          </section>

          <section id="progress-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-charcoal-900 font-bold text-sm">
                  Step 1 of 3
                </span>
                <span className="text-charcoal-700 text-xs">
                  Account Details
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1 h-2 bg-fern-600 rounded-full" />
                <div className="flex-1 h-2 bg-mocha-50 rounded-full" />
                <div className="flex-1 h-2 bg-mocha-50 rounded-full" />
              </div>
            </div>
          </section>

          <section id="title-section" className="px-5 pb-6 bg-mocha-50">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 bg-fern-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-user-tie text-fern-600 text-xl" />
              </div>
              <div>
                <h1 className="text-charcoal-900 font-bold text-2xl mb-1">
                  Create Your Account
                </h1>
                <p className="text-charcoal-700 text-sm leading-relaxed">
                  Join as a goalkeeper coach and start building your training
                  business
                </p>
              </div>
            </div>
          </section>

          <section id="coach-badge-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-fern-600 rounded-xl p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className="fa-solid fa-certificate text-white text-xl" />
              </div>
              <div>
                <h3 className="text-white font-bold text-sm mb-0.5">
                  Coach Registration
                </h3>
                <p className="text-white/80 text-xs">
                  Creating a professional trainer account
                </p>
              </div>
            </div>
          </section>

          <section id="form-section" className="px-5 pb-6 bg-mocha-50">
            <form
              id="signup-form"
              className="space-y-5"
              onSubmit={handleSubmit}
            >
              <div id="full-name-field">
                <label
                  htmlFor="fullname"
                  className="block text-charcoal-900 font-semibold text-sm mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                    <i className="fa-solid fa-user" />
                  </div>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="Enter your full name"
                    required
                    className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                  />
                </div>
                <p className="text-charcoal-700 text-xs mt-1.5">
                  This will appear on your coach profile
                </p>
              </div>

              <div id="email-field">
                <label
                  htmlFor="email"
                  className="block text-charcoal-900 font-semibold text-sm mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                    <i className="fa-solid fa-envelope" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="coach@example.com"
                    required
                    className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                  />
                </div>
                <p className="text-charcoal-700 text-xs mt-1.5">
                  We&apos;ll send booking notifications here
                </p>
              </div>

              <div id="phone-field">
                <label
                  htmlFor="phone"
                  className="block text-charcoal-900 font-semibold text-sm mb-2"
                >
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                    <i className="fa-solid fa-phone" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-4 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                  />
                </div>
                <p className="text-charcoal-700 text-xs mt-1.5">
                  For urgent communication with parents
                </p>
              </div>

              <div id="password-field">
                <label
                  htmlFor="password"
                  className="block text-charcoal-900 font-semibold text-sm mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Create a strong password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-12 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                  />
                  <button
                    type="button"
                    id="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-700"
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    <i
                      className={
                        showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'
                      }
                    />
                  </button>
                </div>
              </div>

              <div id="password-strength-section">
                <div className="bg-mocha-50 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-charcoal-900 text-xs font-semibold">
                      Password Strength:
                    </span>
                    <span id="strength-text" className={strengthTextClass}>
                      {strengthResult.label}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <div
                      id="strength-1"
                      className={strengthBarClass(0)}
                    />
                    <div
                      id="strength-2"
                      className={strengthBarClass(1)}
                    />
                    <div
                      id="strength-3"
                      className={strengthBarClass(2)}
                    />
                    <div
                      id="strength-4"
                      className={strengthBarClass(3)}
                    />
                  </div>
                </div>
              </div>

              <div id="password-requirements-section">
                <div className="space-y-2">
                  <div id="req-length" className="flex items-center gap-2">
                    <i
                      className={
                        strengthResult.hasLength
                          ? 'fa-solid fa-check-circle text-yellowGreen-500 text-xs'
                          : 'fa-solid fa-circle text-charcoal-700 text-xs'
                      }
                    />
                    <span className="text-charcoal-700 text-xs">
                      At least 8 characters
                    </span>
                  </div>
                  <div id="req-uppercase" className="flex items-center gap-2">
                    <i
                      className={
                        strengthResult.hasUppercase
                          ? 'fa-solid fa-check-circle text-yellowGreen-500 text-xs'
                          : 'fa-solid fa-circle text-charcoal-700 text-xs'
                      }
                    />
                    <span className="text-charcoal-700 text-xs">
                      One uppercase letter
                    </span>
                  </div>
                  <div id="req-number" className="flex items-center gap-2">
                    <i
                      className={
                        strengthResult.hasNumber
                          ? 'fa-solid fa-check-circle text-yellowGreen-500 text-xs'
                          : 'fa-solid fa-circle text-charcoal-700 text-xs'
                      }
                    />
                    <span className="text-charcoal-700 text-xs">
                      One number
                    </span>
                  </div>
                  <div id="req-special" className="flex items-center gap-2">
                    <i
                      className={
                        strengthResult.hasSpecial
                          ? 'fa-solid fa-check-circle text-yellowGreen-500 text-xs'
                          : 'fa-solid fa-circle text-charcoal-700 text-xs'
                      }
                    />
                    <span className="text-charcoal-700 text-xs">
                      One special character
                    </span>
                  </div>
                </div>
              </div>

              <div id="confirm-password-field">
                <label
                  htmlFor="confirm-password"
                  className="block text-charcoal-900 font-semibold text-sm mb-2"
                >
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-700">
                    <i className="fa-solid fa-lock" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirm-password"
                    name="confirmPassword"
                    placeholder="Re-enter your password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 pl-12 pr-12 py-3.5 rounded-lg text-sm focus:outline-none focus:border-fern-600 focus:ring-2 focus:ring-fern-600/20 transition-all"
                  />
                  <button
                    type="button"
                    id="toggle-confirm-password"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-700"
                    aria-label={
                      showConfirmPassword
                        ? 'Hide password'
                        : 'Show password'
                    }
                  >
                    <i
                      className={
                        showConfirmPassword
                          ? 'fa-solid fa-eye-slash'
                          : 'fa-solid fa-eye'
                      }
                    />
                  </button>
                </div>
                {passwordsMatch && (
                  <p
                    id="password-match-message"
                    className="text-yellowGreen-500 text-xs mt-1.5 flex items-center gap-1"
                  >
                    <i className="fa-solid fa-check-circle" /> Passwords match
                  </p>
                )}
                {passwordsMismatch && (
                  <p
                    id="password-match-message"
                    className="text-red-500 text-xs mt-1.5 flex items-center gap-1"
                  >
                    <i className="fa-solid fa-circle-xmark" /> Passwords do not
                    match
                  </p>
                )}
              </div>
            </form>
          </section>

          <section id="terms-section" className="px-5 pb-6 bg-mocha-50">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="terms-checkbox"
                name="terms"
                className="w-5 h-5 rounded border-2 border-mocha-200 text-fern-600 focus:ring-2 focus:ring-fern-600/20 cursor-pointer mt-0.5 flex-shrink-0"
              />
              <span className="text-charcoal-700 text-xs leading-relaxed">
                I agree to the{' '}
                <Link href="#" className="text-fern-600 font-semibold">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-fern-600 font-semibold">
                  Privacy Policy
                </Link>
                . I understand that my profile will be visible to parents and
                athletes.
              </span>
            </label>
          </section>

          <section id="marketing-section" className="px-5 pb-6 bg-mocha-50">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                id="marketing-checkbox"
                name="marketing"
                className="w-5 h-5 rounded border-2 border-mocha-200 text-fern-600 focus:ring-2 focus:ring-fern-600/20 cursor-pointer mt-0.5 flex-shrink-0"
              />
              <span className="text-charcoal-700 text-xs leading-relaxed">
                Send me coaching tips, platform updates, and special offers
              </span>
            </label>
          </section>

          <section id="next-button-section" className="px-5 pb-6 bg-mocha-50">
            <button
              type="submit"
              id="next-button"
              form="signup-form"
              className="w-full bg-fern-600 text-white font-bold py-4 px-6 rounded-xl text-base shadow-sm flex items-center justify-center gap-2"
            >
              <span>Continue to Step 2</span>
              <i className="fa-solid fa-arrow-right" />
            </button>
          </section>

          <section id="benefits-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-5">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">
                What You&apos;ll Get as a Coach
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-calendar-days text-yellowGreen-500 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">
                      Smart Scheduling
                    </h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Automated booking system that syncs with your calendar and
                      sends reminders
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-wallet text-yellowGreen-500 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">
                      Easy Payments
                    </h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Get paid instantly with automated invoicing and payment
                      processing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-chart-simple text-yellowGreen-500 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">
                      Progress Tracking
                    </h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Track athlete development with detailed analytics and
                      performance metrics
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fa-solid fa-comments text-yellowGreen-500 text-sm" />
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-sm mb-0.5">
                      Direct Communication
                    </h4>
                    <p className="text-charcoal-700 text-xs leading-relaxed">
                      Built-in messaging system to stay connected with parents
                      and athletes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="security-info-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-fern-50 rounded-xl p-4 border-2 border-fern-600/20">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fern-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-shield-check text-fern-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-semibold text-sm mb-1">
                    Your Data is Secure
                  </h3>
                  <p className="text-charcoal-700 text-xs leading-relaxed">
                    We use bank-level 256-bit encryption to protect your
                    personal information and payment details. All data is stored
                    securely and never shared with third parties.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            id="coach-testimonial-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="bg-white rounded-xl p-5 border border-mocha-200">
              <div className="flex gap-1 mb-3">
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
                <i className="fa-solid fa-star text-yellowGreen-500 text-sm" />
              </div>
              <p className="text-charcoal-900 text-sm leading-relaxed mb-4">
                &quot;Setting up my profile took less than 10 minutes. Within a
                week, I had my first three bookings. The platform makes it so
                easy to manage my training business.&quot;
              </p>
              <div className="flex items-center gap-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg"
                  alt="Coach Sarah"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="text-charcoal-900 font-semibold text-sm">
                    Sarah Mitchell
                  </div>
                  <div className="text-charcoal-700 text-xs">
                    Professional GK Coach
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="next-steps-preview-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="bg-mocha-50 rounded-xl p-5">
              <h3 className="text-charcoal-900 font-bold text-sm mb-4">
                What&apos;s Next?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-mocha-200">
                    <span className="text-fern-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-xs">
                      Professional Profile
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Add your experience and certifications
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 border border-mocha-200">
                    <span className="text-fern-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-charcoal-900 font-semibold text-xs">
                      Availability &amp; Pricing
                    </h4>
                    <p className="text-charcoal-700 text-xs">
                      Set your schedule and session rates
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="trust-indicators-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-yellowGreen-500 text-sm" />
                <span className="text-charcoal-700 text-xs font-medium">
                  No Setup Fees
                </span>
              </div>
              <div className="w-px h-4 bg-mocha-200" />
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check-circle text-yellowGreen-500 text-sm" />
                <span className="text-charcoal-700 text-xs font-medium">
                  Cancel Anytime
                </span>
              </div>
            </div>
          </section>

          <section
            id="already-account-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="text-center">
              <p className="text-charcoal-700 text-sm">
                Already have an account?{' '}
                <Link href="/demo/1" className="text-fern-600 font-bold ml-1">
                  Go to Demo
                </Link>
              </p>
            </div>
          </section>

          <section id="help-center-section" className="px-5 pb-6 bg-mocha-50">
            <div className="bg-white rounded-xl p-4 text-center border border-mocha-200">
              <i className="fa-solid fa-circle-question text-fern-600 text-2xl mb-2" />
              <h3 className="text-charcoal-900 font-semibold text-sm mb-1">
                Need Help Getting Started?
              </h3>
              <p className="text-charcoal-700 text-xs mb-3">
                Our team is here to guide you through the setup
              </p>
              <button
                type="button"
                className="text-fern-600 text-sm font-semibold flex items-center justify-center gap-1 mx-auto"
              >
                <i className="fa-solid fa-headset text-xs" />
                <span>Contact Support</span>
              </button>
            </div>
          </section>

          <section
            id="footer-links-section"
            className="px-5 pb-6 bg-mocha-50"
          >
            <div className="flex items-center justify-center gap-4 text-xs text-charcoal-700 flex-wrap">
              <Link href="#" className="hover:text-fern-600">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-fern-600">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-fern-600">
                Help Center
              </Link>
            </div>
          </section>

          <footer id="footer" className="px-5 pb-8 bg-mocha-50">
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
