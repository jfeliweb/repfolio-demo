'use client';

import { useState } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? '';

export default function EarlyAccessPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
          source: 'prelaunch-landing',
        }),
      });

      setStatus('success');
      setEmail('');
    } catch (err) {
      console.error('Waitlist submission error:', err);
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email us directly.');
    }
  }

  return (
    <div className="bg-mocha-50 text-charcoal-900 antialiased">
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-mocha-50/85 border-b border-mocha-100">
        <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
          <RepfolioLogo variant="primary" width={130} height={36} />
          <a
            href="#waitlist"
            className="bg-fern-600 hover:bg-fern-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </nav>

      <section
        className="pt-28 pb-20 px-5"
        style={{
          background:
            'linear-gradient(135deg, rgb(21,26,30) 0%, rgb(42,51,60) 50%, rgb(35,67,44) 100%)',
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { label: 'Soccer', icon: 'fa-futbol' },
              { label: 'Basketball', icon: 'fa-basketball' },
              { label: 'Baseball', icon: 'fa-baseball' },
              { label: 'Football', icon: 'fa-football' },
              { label: 'Track', icon: 'fa-person-running' },
            ].map((sport) => (
              <span
                key={sport.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border bg-fern-900/60 text-fern-300 border-fern-700"
              >
                <i className={`fa-solid ${sport.icon} text-xs`} />
                {sport.label}
              </span>
            ))}
          </div>

          <h1
            className="text-white font-bold leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Stop Running Your Coaching Business
            <br className="hidden sm:block" />
            on Texts and <span className="text-fern-400">Spreadsheets.</span>
          </h1>

          <p className="text-charcoal-300 leading-relaxed mb-10 max-w-2xl mx-auto text-lg">
            Repfolio is the all-in-one platform built exclusively for private sports
            coaches — scheduling, payments, athlete progress tracking, and parent
            communication in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#waitlist"
              className="bg-fern-600 hover:bg-fern-500 text-white font-bold px-8 py-4 rounded-2xl transition-colors w-full sm:w-auto text-center"
            >
              Claim My Early Access Spot →
            </a>
            <a
              href="/demo/1"
              className="border border-charcoal-600 hover:border-charcoal-400 text-charcoal-300 hover:text-white font-semibold px-8 py-4 rounded-2xl transition-colors w-full sm:w-auto text-center"
            >
              See the Demo →
            </a>
          </div>

          <p className="text-charcoal-500 text-sm mt-8">
            🔒 No credit card. No commitment. Just early access.
          </p>
        </div>
      </section>

      <section className="py-20 px-5 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-fern-600 text-sm font-bold uppercase tracking-widest mb-4">
            Sound familiar?
          </span>
          <h2 className="font-bold text-charcoal-900 mb-6 text-3xl sm:text-4xl">
            You're a great coach. But you're spending more time running a
            business than actually coaching.
          </h2>
          <p className="text-charcoal-600 text-lg leading-relaxed">
            Between chasing payments, texting parents about cancellations, trying to
            remember what you worked on last session, and rescheduling when it rains
            — the admin never stops. You deserve better tools.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              icon: 'fa-comment-sms',
              iconBox: 'bg-red-50 text-red-400',
              title: 'Endless text threads',
              description:
                'Scheduling a single session takes 6 messages back and forth with a parent.',
            },
            {
              icon: 'fa-money-bill-wave',
              iconBox: 'bg-orange-50 text-orange-400',
              title: 'Chasing payments',
              description:
                'Clients forget. You feel awkward asking. Cash goes untracked.',
            },
            {
              icon: 'fa-cloud-rain',
              iconBox: 'bg-blue-50 text-blue-400',
              title: 'Weather chaos',
              description:
                'Rain means texting 12 people. Make-up credits tracked on a sticky note.',
            },
            {
              icon: 'fa-brain',
              iconBox: 'bg-purple-50 text-purple-400',
              title: "It's all in your head",
              description:
                "What did you work on with Jordan last week? You're hoping you remember.",
            },
            {
              icon: 'fa-users',
              iconBox: 'bg-yellow-50 text-yellow-500',
              title: 'Parents in the dark',
              description:
                "They're paying good money and have no idea what their kid is actually working on.",
            },
            {
              icon: 'fa-puzzle-piece',
              iconBox: 'bg-fern-50 text-fern-600',
              title: 'Fragmented tools',
              description:
                'Google Calendar, Venmo, WhatsApp, notes app — nothing talks to anything.',
            },
          ].map((pain) => (
            <div
              key={pain.title}
              className="bg-mocha-50 rounded-2xl p-6 border border-mocha-100"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${pain.iconBox}`}
              >
                <i className={`fa-solid ${pain.icon} text-lg`} />
              </div>
              <h3 className="font-bold text-charcoal-900 mb-2">{pain.title}</h3>
              <p className="text-charcoal-600 text-sm leading-relaxed">
                {pain.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-5 bg-mocha-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-fern-600 text-sm font-bold uppercase tracking-widest mb-4">
              The solution
            </span>
            <h2 className="font-bold text-charcoal-900 mb-4 text-3xl sm:text-4xl">
              Repfolio was built for coaches like you.
            </h2>
            <p className="text-charcoal-600 text-lg max-w-2xl mx-auto">
              Not for leagues. Not for teams. Not for gyms. For the independent coach
              who trains athletes one-on-one.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: 'fa-calendar-check',
                title: 'Smart Scheduling — No More Back-and-Forth',
                description:
                  'Athletes and parents book directly from your availability. No texts, no calls, no confusion. Automated reminders go out before every session so no-shows become a thing of the past.',
              },
              {
                icon: 'fa-wallet',
                title: 'Get Paid the Way You Already Get Paid',
                description:
                  'Cash, Zelle, CashApp, PayPal, Venmo — Repfolio tracks it all without forcing you into a payment processor that takes a cut of your income. You keep everything you earn.',
              },
              {
                icon: 'fa-cloud-sun-rain',
                title: 'Weather Cancellations? One Tap. Done.',
                description:
                  'Cancel a session and automatically issue a make-up credit to the client. Parents get notified instantly. No more mass texting. No more awkward conversations about refunds.',
              },
              {
                icon: 'fa-chart-line',
                title: "Track Every Athlete's Progress",
                description:
                  "Log what you worked on, set skill goals, and track improvement over time with sport-specific tools. Know exactly where each athlete started and how far they've come.",
              },
              {
                icon: 'fa-bell',
                title: 'Keep Parents in the Loop — Automatically',
                description:
                  "Session notes, progress milestones, and reminders go out without you lifting a finger. Parents feel involved, which means they keep coming back — and they tell other parents.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-7 border border-mocha-100 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-fern-600 flex items-center justify-center flex-shrink-0">
                  <i className={`fa-solid ${feature.icon} text-white text-xl`} />
                </div>
                <div>
                  <h3 className="font-bold text-charcoal-900 text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-charcoal-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-fern-600 text-sm font-bold uppercase tracking-widest mb-4">
            Who it's for
          </span>
          <h2 className="font-bold text-charcoal-900 mb-5 text-3xl sm:text-4xl">
            If you coach athletes one-on-one, this was made for you.
          </h2>
          <p className="text-charcoal-600 text-lg leading-relaxed mb-12">
            Repfolio works for private coaches across every sport. Whether you're
            training youth athletes on weekends or running a full-time elite training
            operation, if you run your own coaching business, you deserve tools that
            match your ambition.
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: 'Soccer', icon: 'fa-futbol' },
              { label: 'Basketball', icon: 'fa-basketball' },
              { label: 'Baseball', icon: 'fa-baseball' },
              { label: 'Football', icon: 'fa-football' },
              { label: 'Track', icon: 'fa-person-running' },
            ].map((sport) => (
              <div
                key={sport.label}
                className="bg-mocha-50 rounded-2xl p-5 border border-mocha-100 text-center"
              >
                <div className="w-12 h-12 bg-fern-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <i className={`fa-solid ${sport.icon} text-fern-600 text-xl`} />
                </div>
                <p className="font-semibold text-charcoal-800 text-sm">
                  {sport.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-5 bg-fern-900">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, index) => (
              <i key={index} className="fa-solid fa-star text-yellow-400" />
            ))}
          </div>
          <blockquote className="italic text-fern-100 text-xl leading-relaxed mb-6">
            &quot;I used to spend two hours a week just texting parents about
            scheduling. Managing payments was even worse. A tool built specifically for
            independent coaches is exactly what this space has been missing.&quot;
          </blockquote>
          <p className="text-fern-400 text-sm font-semibold">
            — Founding Coach, Early Access Program
          </p>
        </div>
      </section>

      <section id="waitlist" className="py-24 px-5 bg-charcoal-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-fern-900 border border-fern-700 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-fern-400 rounded-full animate-pulse" />
            <span className="text-fern-300 text-sm font-semibold">
              Now accepting founding coaches
            </span>
          </div>

          <h2 className="text-white font-bold mb-5 text-3xl sm:text-5xl">
            Be First. Shape the Future of Coaching.
          </h2>
          <p className="text-charcoal-400 text-lg leading-relaxed mb-10">
            We're building Repfolio alongside coaches who know what they actually
            need. Join the founding coach waitlist and get direct input on what we
            build first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <div className="flex items-center gap-2 text-fern-300 text-sm">
              <i className="fa-solid fa-check" />
              <span>Free early access before public launch</span>
            </div>
            <div className="flex items-center gap-2 text-fern-300 text-sm">
              <i className="fa-solid fa-check" />
              <span>Founding member pricing — locked in for life</span>
            </div>
            <div className="flex items-center gap-2 text-fern-300 text-sm">
              <i className="fa-solid fa-check" />
              <span>Direct line to the product team</span>
            </div>
          </div>

          {status !== 'success' && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === 'loading'}
                className="flex-1 bg-charcoal-800 border border-charcoal-700 text-white placeholder-charcoal-500 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-fern-500 focus:ring-2 focus:ring-fern-500/20 transition-all disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-fern-600 hover:bg-fern-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold px-7 py-4 rounded-2xl text-base transition-colors whitespace-nowrap shadow-lg"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-spinner fa-spin" />
                    Saving...
                  </span>
                ) : (
                  'Claim My Spot'
                )}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-red-400 text-sm mt-3 text-center">{errorMsg}</p>
          )}

          {status === 'success' && (
            <div className="bg-fern-900/50 border border-fern-700 rounded-2xl px-6 py-5 max-w-lg mx-auto">
              <div className="flex items-center gap-3 text-fern-300">
                <i className="fa-solid fa-circle-check text-fern-500 text-2xl flex-shrink-0" />
                <div>
                  <p className="font-bold text-fern-200 text-base">
                    You're on the list!
                  </p>
                  <p className="text-sm text-fern-400 mt-1">
                    We'll be in touch with early access details. Thanks for helping
                    shape Repfolio.
                  </p>
                </div>
              </div>
            </div>
          )}

          <p className="text-charcoal-600 text-sm mt-6">
            🔒 No spam. No credit card. Cancel anytime.
          </p>
        </div>
      </section>

      <footer className="bg-charcoal-900 border-t border-charcoal-800 py-10 px-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold">
            <span className="text-charcoal-400">Rep</span>
            <span className="text-fern-600">folio</span>
          </div>
          <p className="text-charcoal-600 text-sm text-center">
            Built by a sports parent who got tired of watching great coaches waste time
            on bad tools.
          </p>
          <p className="text-charcoal-700 text-xs">
            © 2025 Repfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
