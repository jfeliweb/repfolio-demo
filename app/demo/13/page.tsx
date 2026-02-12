'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

function ToggleSwitch({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={active}
      onClick={onClick}
      className={`w-11 h-6 rounded-full transition-colors duration-200 flex items-center ${
        active ? 'bg-fern-600' : 'bg-mocha-200'
      }`}
    >
      <span
        className={`inline-block w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
          active ? 'translate-x-[22px]' : 'translate-x-0.5'
        }`}
      />
    </button>
  );
}

export default function Demo13() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [createPackageOpen, setCreatePackageOpen] = useState(false);
  const [addDiscountOpen, setAddDiscountOpen] = useState(false);
  const [saveState, setSaveState] = useState<'idle' | 'saving' | 'saved'>('idle');

  const [toggles, setToggles] = useState<Record<string, boolean>>({
    'single-active': true,
    'five-active': true,
    'ten-active': true,
    'monthly-sub-active': true,
    'quarterly-sub-active': true,
    'payment-plans': true,
    'early-bird': false,
    'referrals': true,
    'family-discount': false,
    'tax-inclusive': true,
    'cards': true,
    'paypal': true,
    'bank': false,
    'cash': true,
  });

  const [singleDiscountMsg, setSingleDiscountMsg] = useState('No discount applied');
  const [fiveDiscountMsg, setFiveDiscountMsg] = useState('10% discount applied');
  const [tenDiscountMsg, setTenDiscountMsg] = useState('20% discount applied');

  const toggle = (key: string) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setSaveState('saving');
    setTimeout(() => {
      setSaveState('saved');
      setTimeout(() => setSaveState('idle'), 2000);
    }, 1500);
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
          className={`fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity ${
            sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Sidebar drawer */}
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
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Sessions Today</span>
                    <span className="text-fern-600 font-bold text-lg">3</span>
                  </div>
                </div>
                <div className="bg-yellowGreen-500/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Upcoming</span>
                    <span className="text-yellowGreen-600 font-bold text-lg">2</span>
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

        <main id="main-content" className="min-h-screen pb-20">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
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
            </div>
          </header>

          <section className="px-5 pt-5 pb-4 bg-mocha-50">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 bg-fern-600/10 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-tags text-fern-600 text-xl" />
              </div>
              <div>
                <h1 className="text-charcoal-900 font-bold text-xl">Pricing & Packages</h1>
                <p className="text-charcoal-700 text-sm">Manage your service pricing</p>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <button
              type="button"
              onClick={() => setCreatePackageOpen(true)}
              className="w-full bg-fern-600 text-white font-bold py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-sm"
            >
              <i className="fa-solid fa-plus" />
              <span>Create New Package</span>
            </button>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-4">
              <h2 className="text-charcoal-900 font-bold text-base mb-1">Session Packages</h2>
              <p className="text-charcoal-700 text-xs">Edit your package offerings</p>
            </div>

            <div className="space-y-4">
              {/* Single Session card */}
              <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-mocha-200 bg-fern-600/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-charcoal-900 font-bold text-lg">Single Session</h3>
                    <div className="flex items-center gap-2">
                      <button type="button" className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-pencil text-fern-600 text-sm" />
                      </button>
                      <button type="button" className="w-9 h-9 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-trash text-red-600 text-sm" />
                      </button>
                    </div>
                  </div>
                  <p className="text-charcoal-700 text-xs">One-time training session</p>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-900 font-bold">$</span>
                      <input type="number" defaultValue={75} className="w-full bg-white border border-mocha-200 rounded-lg pl-8 pr-4 py-3 text-charcoal-900 text-sm font-semibold" />
                    </div>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Discount (%)</label>
                    <input
                      type="number"
                      defaultValue={0}
                      min={0}
                      max={100}
                      className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm"
                      onChange={(e) => {
                        const v = parseFloat(e.target.value) || 0;
                        setSingleDiscountMsg(v > 0 ? `${v}% discount applied` : 'No discount applied');
                      }}
                    />
                    <p className={`text-xs mt-1 ${singleDiscountMsg === 'No discount applied' ? 'text-charcoal-700' : 'text-fern-600 font-semibold'}`}>
                      {singleDiscountMsg}
                    </p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Description</label>
                    <textarea rows={3} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm resize-none" placeholder="Package description..." defaultValue="Perfect for trying out goalkeeper training. Includes 60 minutes of personalized coaching." />
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Cancellation Policy</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="flexible">Flexible - Free 24h before</option>
                      <option value="moderate" defaultChecked>Moderate - Free 48h before</option>
                      <option value="strict">Strict - Free 72h before</option>
                      <option value="no-refund">No refunds</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Active Package</div>
                      <div className="text-charcoal-700 text-xs">Visible to clients</div>
                    </div>
                    <ToggleSwitch active={toggles['single-active']} onClick={() => toggle('single-active')} />
                  </div>
                </div>
              </div>

              {/* 5-Session Pack */}
              <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-mocha-200 bg-yellowGreen-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-charcoal-900 font-bold text-lg">5-Session Pack</h3>
                      <span className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-bold px-2 py-1 rounded-md">SAVE 10%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-pencil text-yellowGreen-600 text-sm" />
                      </button>
                      <button type="button" className="w-9 h-9 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-trash text-red-600 text-sm" />
                      </button>
                    </div>
                  </div>
                  <p className="text-charcoal-700 text-xs">Five training sessions</p>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-900 font-bold">$</span>
                      <input type="number" defaultValue={340} className="w-full bg-white border border-mocha-200 rounded-lg pl-8 pr-4 py-3 text-charcoal-900 text-sm font-semibold" />
                    </div>
                    <p className="text-charcoal-700 text-xs mt-1">Regular price: $375 (Save $35)</p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Discount (%)</label>
                    <input
                      type="number"
                      defaultValue={10}
                      min={0}
                      max={100}
                      className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm"
                      onChange={(e) => {
                        const v = parseFloat(e.target.value) || 0;
                        setFiveDiscountMsg(v > 0 ? `${v}% discount applied` : 'No discount applied');
                      }}
                    />
                    <p className="text-yellowGreen-600 text-xs mt-1 font-semibold">{fiveDiscountMsg}</p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Description</label>
                    <textarea rows={3} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm resize-none" placeholder="Package description..." defaultValue="Great value for committed athletes. Five 60-minute sessions to develop your skills. Valid for 2 months." />
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Cancellation Policy</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="flexible">Flexible - Free 24h before</option>
                      <option value="moderate" defaultChecked>Moderate - Free 48h before</option>
                      <option value="strict">Strict - Free 72h before</option>
                      <option value="no-refund">No refunds</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Package Validity</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="30">30 days</option>
                      <option value="60" defaultChecked>60 days</option>
                      <option value="90">90 days</option>
                      <option value="180">6 months</option>
                      <option value="365">1 year</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Active Package</div>
                      <div className="text-charcoal-700 text-xs">Visible to clients</div>
                    </div>
                    <ToggleSwitch active={toggles['five-active']} onClick={() => toggle('five-active')} />
                  </div>
                </div>
              </div>

              {/* 10-Session Pack */}
              <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-mocha-200 bg-brightFern-400/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-charcoal-900 font-bold text-lg">10-Session Pack</h3>
                      <span className="bg-brightFern-400/30 text-brightFern-600 text-xs font-bold px-2 py-1 rounded-md">SAVE 20%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" className="w-9 h-9 bg-brightFern-400/20 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-pencil text-brightFern-600 text-sm" />
                      </button>
                      <button type="button" className="w-9 h-9 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-trash text-red-600 text-sm" />
                      </button>
                    </div>
                  </div>
                  <p className="text-charcoal-700 text-xs">Ten training sessions</p>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-900 font-bold">$</span>
                      <input type="number" defaultValue={600} className="w-full bg-white border border-mocha-200 rounded-lg pl-8 pr-4 py-3 text-charcoal-900 text-sm font-semibold" />
                    </div>
                    <p className="text-charcoal-700 text-xs mt-1">Regular price: $750 (Save $150)</p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Discount (%)</label>
                    <input
                      type="number"
                      defaultValue={20}
                      min={0}
                      max={100}
                      className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm"
                      onChange={(e) => {
                        const v = parseFloat(e.target.value) || 0;
                        setTenDiscountMsg(v > 0 ? `${v}% discount applied` : 'No discount applied');
                      }}
                    />
                    <p className="text-brightFern-600 text-xs mt-1 font-semibold">{tenDiscountMsg}</p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Description</label>
                    <textarea rows={3} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm resize-none" placeholder="Package description..." defaultValue="Best value for serious goalkeepers. Ten 60-minute sessions for comprehensive skill development. Valid for 3 months." />
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Cancellation Policy</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="flexible">Flexible - Free 24h before</option>
                      <option value="moderate">Moderate - Free 48h before</option>
                      <option value="strict" defaultChecked>Strict - Free 72h before</option>
                      <option value="no-refund">No refunds</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Package Validity</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="30">30 days</option>
                      <option value="60">60 days</option>
                      <option value="90" defaultChecked>90 days</option>
                      <option value="180">6 months</option>
                      <option value="365">1 year</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Active Package</div>
                      <div className="text-charcoal-700 text-xs">Visible to clients</div>
                    </div>
                    <ToggleSwitch active={toggles['ten-active']} onClick={() => toggle('ten-active')} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Subscription Plans */}
          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-repeat text-yellowGreen-600" />
                </div>
                <div>
                  <h2 className="text-charcoal-900 font-bold text-base">Subscription Plans</h2>
                  <p className="text-charcoal-700 text-xs">Recurring billing options</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-mocha-200 bg-fern-600/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-charcoal-900 font-bold text-lg">Monthly Subscription</h3>
                    <div className="flex items-center gap-2">
                      <button type="button" className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-pencil text-fern-600 text-sm" />
                      </button>
                    </div>
                  </div>
                  <p className="text-charcoal-700 text-xs">Unlimited sessions per month</p>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Monthly Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-900 font-bold">$</span>
                      <input type="number" defaultValue={499} className="w-full bg-white border border-mocha-200 rounded-lg pl-8 pr-4 py-3 text-charcoal-900 text-sm font-semibold" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-700 text-xs">/month</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Billing Frequency</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="monthly" defaultChecked>Monthly</option>
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Sessions Included</label>
                    <input type="number" defaultValue={8} min={1} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                    <p className="text-charcoal-700 text-xs mt-1">Number of sessions per month</p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Description</label>
                    <textarea rows={3} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm resize-none" placeholder="Plan description..." defaultValue="Unlimited training sessions each month. Perfect for dedicated athletes looking for consistent development. Cancel anytime." />
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Minimum Commitment</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="none" defaultChecked>No commitment</option>
                      <option value="1">1 month</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Active Plan</div>
                      <div className="text-charcoal-700 text-xs">Visible to clients</div>
                    </div>
                    <ToggleSwitch active={toggles['monthly-sub-active']} onClick={() => toggle('monthly-sub-active')} />
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-mocha-200 bg-yellowGreen-500/5">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-charcoal-900 font-bold text-lg">Quarterly Subscription</h3>
                      <span className="bg-yellowGreen-500/20 text-yellowGreen-600 text-xs font-bold px-2 py-1 rounded-md">SAVE 15%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button type="button" className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center">
                        <i className="fa-solid fa-pencil text-yellowGreen-600 text-sm" />
                      </button>
                    </div>
                  </div>
                  <p className="text-charcoal-700 text-xs">3-month commitment plan</p>
                </div>

                <div className="p-5 space-y-4">
                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Quarterly Price</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-900 font-bold">$</span>
                      <input type="number" defaultValue={1275} className="w-full bg-white border border-mocha-200 rounded-lg pl-8 pr-4 py-3 text-charcoal-900 text-sm font-semibold" />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal-700 text-xs">/3 months</span>
                    </div>
                    <p className="text-charcoal-700 text-xs mt-1">Regular price: $1,497 (Save $222)</p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Billing Frequency</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="quarterly" defaultChecked>Every 3 months</option>
                      <option value="monthly">Monthly installments</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Sessions Included</label>
                    <input type="number" defaultValue={24} min={1} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                    <p className="text-charcoal-700 text-xs mt-1">Total sessions over 3 months (8 per month)</p>
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Description</label>
                    <textarea rows={3} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm resize-none" placeholder="Plan description..." defaultValue="Best value for long-term development. 24 sessions over 3 months with 15% savings. Priority booking and personalized training plans included." />
                  </div>

                  <div>
                    <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Minimum Commitment</label>
                    <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                      <option value="3" defaultChecked>3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Active Plan</div>
                      <div className="text-charcoal-700 text-xs">Visible to clients</div>
                    </div>
                    <ToggleSwitch active={toggles['quarterly-sub-active']} onClick={() => toggle('quarterly-sub-active')} />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Additional Features */}
          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Additional Features</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Accept Payment Plans</div>
                    <div className="text-charcoal-700 text-xs">Allow split payments for packages</div>
                  </div>
                  <ToggleSwitch active={toggles['payment-plans']} onClick={() => toggle('payment-plans')} />
                </div>

                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Early Bird Discounts</div>
                    <div className="text-charcoal-700 text-xs">Offer discounts for advance bookings</div>
                  </div>
                  <ToggleSwitch active={toggles['early-bird']} onClick={() => toggle('early-bird')} />
                </div>

                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Referral Rewards</div>
                    <div className="text-charcoal-700 text-xs">Give discounts for client referrals</div>
                  </div>
                  <ToggleSwitch active={toggles['referrals']} onClick={() => toggle('referrals')} />
                </div>

                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Family Discounts</div>
                    <div className="text-charcoal-700 text-xs">Special rates for multiple family members</div>
                  </div>
                  <ToggleSwitch active={toggles['family-discount']} onClick={() => toggle('family-discount')} />
                </div>
              </div>
            </div>
          </section>

          {/* Tax & Fees */}
          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Tax & Fees</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Sales Tax Rate (%)</label>
                  <input type="number" defaultValue={8.5} min={0} max={100} step={0.1} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
                  <p className="text-charcoal-700 text-xs mt-1">Applied to all transactions</p>
                </div>

                <div>
                  <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Processing Fee</label>
                  <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                    <option value="included" defaultChecked>Included in price</option>
                    <option value="client">Pass to client</option>
                    <option value="split">Split 50/50</option>
                  </select>
                </div>

                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div>
                    <div className="text-charcoal-900 font-semibold text-sm mb-1">Display Prices with Tax</div>
                    <div className="text-charcoal-700 text-xs">Show tax-inclusive pricing</div>
                  </div>
                  <ToggleSwitch active={toggles['tax-inclusive']} onClick={() => toggle('tax-inclusive')} />
                </div>
              </div>
            </div>
          </section>

          {/* Payment Methods */}
          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Accepted Payment Methods</h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-fern-600/5 border border-fern-600/20 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-fern-600/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-credit-card text-fern-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Credit/Debit Cards</div>
                      <div className="text-charcoal-700 text-xs">Visa, Mastercard, Amex</div>
                    </div>
                  </div>
                  <ToggleSwitch active={toggles['cards']} onClick={() => toggle('cards')} />
                </div>

                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center">
                      <i className="fa-brands fa-paypal text-yellowGreen-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">PayPal</div>
                      <div className="text-charcoal-700 text-xs">Online payment</div>
                    </div>
                  </div>
                  <ToggleSwitch active={toggles['paypal']} onClick={() => toggle('paypal')} />
                </div>

                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brightFern-400/20 rounded-lg flex items-center justify-center">
                      <i className="fa-solid fa-building-columns text-brightFern-600" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Bank Transfer</div>
                      <div className="text-charcoal-700 text-xs">Direct bank payment</div>
                    </div>
                  </div>
                  <ToggleSwitch active={toggles['bank']} onClick={() => toggle('bank')} />
                </div>

                <div className="flex items-center justify-between p-4 bg-mocha-100 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-mocha-200 rounded-lg flex items-center justify-center border border-mocha-200">
                      <i className="fa-solid fa-money-bill text-charcoal-900" />
                    </div>
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm">Cash</div>
                      <div className="text-charcoal-700 text-xs">Pay in person</div>
                    </div>
                  </div>
                  <ToggleSwitch active={toggles['cash']} onClick={() => toggle('cash')} />
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Performance */}
          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-fern-600" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base">Pricing Performance</h3>
                  <p className="text-charcoal-700 text-xs">Last 30 days</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-fern-600/5 rounded-lg p-4">
                  <div className="text-charcoal-700 text-xs mb-1">Most Popular</div>
                  <div className="text-charcoal-900 font-bold text-lg mb-1">5-Session Pack</div>
                  <div className="text-fern-600 text-xs font-semibold">42 sold</div>
                </div>

                <div className="bg-yellowGreen-500/5 rounded-lg p-4">
                  <div className="text-charcoal-700 text-xs mb-1">Revenue</div>
                  <div className="text-charcoal-900 font-bold text-lg mb-1">$18,450</div>
                  <div className="text-yellowGreen-600 text-xs font-semibold">+12% vs last month</div>
                </div>

                <div className="bg-brightFern-400/5 rounded-lg p-4">
                  <div className="text-charcoal-700 text-xs mb-1">Avg. Package Value</div>
                  <div className="text-charcoal-900 font-bold text-lg mb-1">$385</div>
                  <div className="text-brightFern-600 text-xs font-semibold">Up from $340</div>
                </div>

                <div className="bg-mocha-100 rounded-lg p-4">
                  <div className="text-charcoal-700 text-xs mb-1">Active Subscriptions</div>
                  <div className="text-charcoal-900 font-bold text-lg mb-1">12</div>
                  <div className="text-fern-600 text-xs font-semibold">$5,988/month</div>
                </div>
              </div>
            </div>
          </section>

          {/* Package Comparison */}
          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <h3 className="text-charcoal-900 font-bold text-base mb-4">Package Comparison</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-mocha-200">
                      <th className="text-left text-charcoal-900 text-xs font-semibold py-3 pr-4">Package</th>
                      <th className="text-center text-charcoal-900 text-xs font-semibold py-3 px-2">Price</th>
                      <th className="text-center text-charcoal-900 text-xs font-semibold py-3 px-2">Per Session</th>
                      <th className="text-center text-charcoal-900 text-xs font-semibold py-3 pl-2">Savings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-mocha-200">
                      <td className="text-charcoal-900 text-sm py-3 pr-4">Single</td>
                      <td className="text-center text-charcoal-900 text-sm font-semibold py-3 px-2">$75</td>
                      <td className="text-center text-charcoal-900 text-sm py-3 px-2">$75</td>
                      <td className="text-center text-charcoal-700 text-sm py-3 pl-2">-</td>
                    </tr>
                    <tr className="border-b border-mocha-200 bg-yellowGreen-500/5">
                      <td className="text-charcoal-900 text-sm py-3 pr-4">5-Pack</td>
                      <td className="text-center text-charcoal-900 text-sm font-semibold py-3 px-2">$340</td>
                      <td className="text-center text-charcoal-900 text-sm py-3 px-2">$68</td>
                      <td className="text-center text-yellowGreen-600 text-sm font-semibold py-3 pl-2">$35</td>
                    </tr>
                    <tr className="bg-brightFern-400/5">
                      <td className="text-charcoal-900 text-sm py-3 pr-4">10-Pack</td>
                      <td className="text-center text-charcoal-900 text-sm font-semibold py-3 px-2">$600</td>
                      <td className="text-center text-charcoal-900 text-sm py-3 px-2">$60</td>
                      <td className="text-center text-brightFern-600 text-sm font-semibold py-3 pl-2">$150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Discount Codes */}
          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">Discount Codes</h3>
                  <p className="text-charcoal-700 text-xs">Manage promotional codes</p>
                </div>
                <button
                  type="button"
                  onClick={() => setAddDiscountOpen(true)}
                  className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center"
                >
                  <i className="fa-solid fa-plus text-white" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="bg-fern-600/5 border border-fern-600/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-fern-600 text-white text-xs font-bold px-2 py-1 rounded font-mono">WELCOME10</span>
                      <span className="text-fern-600 text-xs font-semibold">10% OFF</span>
                    </div>
                    <button type="button" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-mocha-200">
                      <i className="fa-solid fa-pencil text-fern-600 text-xs" />
                    </button>
                  </div>
                  <div className="text-charcoal-700 text-xs">New clients only • Valid until Mar 31, 2024</div>
                </div>

                <div className="bg-yellowGreen-500/5 border border-yellowGreen-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-yellowGreen-600 text-white text-xs font-bold px-2 py-1 rounded font-mono">SPRING25</span>
                      <span className="text-yellowGreen-600 text-xs font-semibold">25% OFF</span>
                    </div>
                    <button type="button" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-mocha-200">
                      <i className="fa-solid fa-pencil text-yellowGreen-600 text-xs" />
                    </button>
                  </div>
                  <div className="text-charcoal-700 text-xs">10-session packs only • 15 uses remaining</div>
                </div>

                <div className="bg-mocha-100 rounded-lg p-4 opacity-60">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-white border border-mocha-200 text-charcoal-900 text-xs font-bold px-2 py-1 rounded font-mono">SUMMER20</span>
                      <span className="text-charcoal-900 text-xs font-semibold">20% OFF</span>
                    </div>
                    <button type="button" className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-mocha-200">
                      <i className="fa-solid fa-pencil text-charcoal-900 text-xs" />
                    </button>
                  </div>
                  <div className="text-charcoal-700 text-xs">Expired • Jan 31, 2024</div>
                </div>
              </div>
            </div>
          </section>

          {/* Save actions */}
          <section className="px-5 pb-6 bg-mocha-50">
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleSave}
                disabled={saveState === 'saving'}
                className={`w-full font-bold py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2 shadow-sm ${
                  saveState === 'saved'
                    ? 'bg-yellowGreen-500 text-white'
                    : 'bg-fern-600 text-white'
                }`}
              >
                {saveState === 'saving' && <i className="fa-solid fa-spinner fa-spin" />}
                {saveState === 'idle' && <i className="fa-solid fa-check" />}
                {saveState === 'saved' && <i className="fa-solid fa-check" />}
                <span>
                  {saveState === 'saving' && 'Saving...'}
                  {saveState === 'saved' && 'Saved Successfully!'}
                  {saveState === 'idle' && 'Save All Changes'}
                </span>
              </button>

              <button type="button" className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2">
                <i className="fa-solid fa-eye" />
                <span>Preview Client View</span>
              </button>
            </div>
          </section>

          {/* Pricing Tips */}
          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-brightFern-400/10 border border-brightFern-400/30 rounded-2xl p-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-brightFern-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-lightbulb text-brightFern-600" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-sm mb-1">Pricing Tips</h3>
                  <p className="text-charcoal-700 text-xs">Maximize your revenue</p>
                </div>
              </div>

              <div className="space-y-3 ml-12">
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-brightFern-600 text-[6px] mt-1.5" />
                  <p className="text-charcoal-900 text-xs">Offer larger discounts on bigger packages to encourage commitment</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-brightFern-600 text-[6px] mt-1.5" />
                  <p className="text-charcoal-900 text-xs">Subscriptions provide predictable monthly income</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-brightFern-600 text-[6px] mt-1.5" />
                  <p className="text-charcoal-900 text-xs">Use discount codes strategically for promotions and referrals</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-brightFern-600 text-[6px] mt-1.5" />
                  <p className="text-charcoal-900 text-xs">Review pricing analytics monthly to optimize your packages</p>
                </div>
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-circle text-brightFern-600 text-[6px] mt-1.5" />
                  <p className="text-charcoal-900 text-xs">Clear cancellation policies build trust with clients</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Create Package Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="create-package-title"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${
            createPackageOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-charcoal-900/50"
            onClick={() => setCreatePackageOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-2xl border border-mocha-200 shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-md">
            <div className="p-5 border-b border-mocha-200 sticky top-0 bg-white">
              <div className="flex items-center justify-between">
                <h3 id="create-package-title" className="text-charcoal-900 font-bold text-lg">Create New Package</h3>
                <button
                  type="button"
                  onClick={() => setCreatePackageOpen(false)}
                  className="w-9 h-9 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-times text-charcoal-900" />
                </button>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Package Name</label>
                <input type="text" placeholder="e.g., 3-Session Pack" className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Number of Sessions</label>
                <input type="number" defaultValue={3} min={1} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Price</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-900 font-bold">$</span>
                  <input type="number" placeholder="0.00" className="w-full bg-white border border-mocha-200 rounded-lg pl-8 pr-4 py-3 text-charcoal-900 text-sm" />
                </div>
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Discount (%)</label>
                <input type="number" defaultValue={0} min={0} max={100} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Description</label>
                <textarea rows={3} className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm resize-none" placeholder="Describe this package..." />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Package Type</label>
                <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                  <option value="session-pack">Session Pack</option>
                  <option value="subscription">Subscription</option>
                </select>
              </div>
            </div>

            <div className="p-5 border-t border-mocha-200">
              <button type="button" className="w-full bg-fern-600 text-white font-bold py-3 px-4 rounded-xl text-sm">
                Create Package
              </button>
            </div>
          </div>
        </div>

        {/* Add Discount Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="add-discount-title"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity ${
            addDiscountOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-charcoal-900/50"
            onClick={() => setAddDiscountOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-white rounded-2xl border border-mocha-200 shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-md">
            <div className="p-5 border-b border-mocha-200 sticky top-0 bg-white">
              <div className="flex items-center justify-between">
                <h3 id="add-discount-title" className="text-charcoal-900 font-bold text-lg">New Discount Code</h3>
                <button
                  type="button"
                  onClick={() => setAddDiscountOpen(false)}
                  className="w-9 h-9 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-times text-charcoal-900" />
                </button>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Code</label>
                <input type="text" placeholder="e.g., SAVE20" className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-mono uppercase" />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Discount Type</label>
                <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Discount Value</label>
                <input type="number" placeholder="20" className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Valid Until</label>
                <input type="date" className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Usage Limit</label>
                <input type="number" placeholder="Unlimited" className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm" />
              </div>

              <div>
                <label className="text-charcoal-900 font-semibold text-sm mb-2 block">Applies To</label>
                <select className="w-full bg-white border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm">
                  <option value="all">All packages</option>
                  <option value="single">Single sessions only</option>
                  <option value="packs">Session packs only</option>
                  <option value="subscriptions">Subscriptions only</option>
                </select>
              </div>
            </div>

            <div className="p-5 border-t border-mocha-200">
              <button type="button" className="w-full bg-fern-600 text-white font-bold py-3 px-4 rounded-xl text-sm">
                Create Discount Code
              </button>
            </div>
          </div>
        </div>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
