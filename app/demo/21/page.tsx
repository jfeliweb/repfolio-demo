'use client';

import { useState, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo21() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fabMenuOpen, setFabMenuOpen] = useState(false);
  const [quickActionOpen, setQuickActionOpen] = useState(false);
  const [quickActionType, setQuickActionType] = useState<'next-session' | 'reschedule' | null>(null);
  const [messageInput, setMessageInput] = useState('');
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const closeAll = useCallback(() => {
    setSidebarOpen(false);
    setQuickActionOpen(false);
    setFabMenuOpen(false);
    setQuickActionType(null);
  }, []);

  const handleFabAction = (action: 'next-session' | 'reschedule') => {
    setFabMenuOpen(false);
    setQuickActionType(action);
    setQuickActionOpen(true);
  };

  const handleTemplateSelect = (text: string) => {
    setMessageInput(text);
    setQuickActionOpen(false);
    setQuickActionType(null);
    messageInputRef.current?.focus();
  };

  const handleSend = () => {
    if (messageInput.trim()) {
      setMessageInput('');
      if (messageInputRef.current) messageInputRef.current.style.height = 'auto';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageInput(e.target.value);
    const el = e.target;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans pb-24">
        {/* Drawer overlay */}
        <div
          role="presentation"
          className={`fixed inset-0 bg-black/50 z-40 transition-all duration-300 ${
            sidebarOpen || fabMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
          onClick={closeAll}
          aria-hidden
        />

        {/* Sidebar drawer */}
        <aside
          className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-out ${
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
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Today&apos;s Overview</h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Unread Messages</span>
                    <span className="text-fern-600 font-bold text-lg">12</span>
                  </div>
                </div>
                <div className="bg-yellowGreen-500/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Active Chats</span>
                    <span className="text-yellowGreen-600 font-bold text-lg">8</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Quick Links</h3>
              <div className="space-y-2">
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-house text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Home</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Schedule</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-fern-600 rounded-lg text-left">
                  <i className="fa-solid fa-message text-white" />
                  <span className="text-white text-sm font-medium">Messages</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-credit-card text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Payments</span>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Message Settings</h3>
              <div className="space-y-2">
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-bell text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Notifications</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-archive text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Archived Chats</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-star text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Starred Messages</span>
                </button>
              </div>
            </div>
          </div>
        </aside>

        <main className="min-h-screen pb-24">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center"
                  aria-label="Back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </button>
                <div className="flex items-center gap-2 flex-1 mx-3 min-w-0">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                    alt="Coach Marcus"
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h1 className="text-charcoal-900 font-bold text-sm truncate">Coach Marcus</h1>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-yellowGreen-500 rounded-full" />
                      <span className="text-yellowGreen-600 text-xs font-semibold">Active now</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center flex-shrink-0"
                  aria-label="Menu"
                >
                  <i className="fa-solid fa-ellipsis-vertical text-charcoal-900" />
                </button>
              </div>
            </div>
          </header>

          <section className="px-5 pt-3 pb-2 bg-mocha-50">
            <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                  alt="Coach Marcus"
                  className="w-16 h-16 rounded-full object-cover border-2 border-fern-600"
                />
                <div className="flex-1 min-w-0">
                  <h2 className="text-charcoal-900 font-bold text-base mb-1">Coach Marcus Thompson</h2>
                  <div className="flex items-center gap-2 text-xs text-charcoal-700 mb-1">
                    <i className="fa-solid fa-certificate text-fern-600" />
                    <span>Certified Goalkeeper Coach</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-charcoal-700">
                    <i className="fa-solid fa-star text-yellowGreen-500" />
                    <span>4.9 Rating • 12 Years Experience</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="flex-1 bg-fern-600 text-white rounded-lg py-2.5 text-xs font-bold">
                  <i className="fa-solid fa-phone mr-1" /> Call Coach
                </button>
                <button type="button" className="flex-1 bg-mocha-50 text-charcoal-900 rounded-lg py-2.5 text-xs font-bold">
                  <i className="fa-solid fa-user mr-1" /> View Profile
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pt-3 pb-2 bg-mocha-50">
            <div className="bg-gradient-to-br from-fern-600/20 to-yellowGreen-500/20 rounded-2xl p-4 border border-fern-600/30 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-fern-600 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-calendar-check text-white text-xs" />
                  </div>
                  <span className="text-charcoal-900 font-bold text-sm">Next Training Session</span>
                </div>
                <span className="bg-yellowGreen-500 text-charcoal-900 text-xs font-bold px-3 py-1 rounded-full">Tomorrow</span>
              </div>
              <div className="bg-white rounded-xl p-3 mb-3">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="text-charcoal-900 font-bold text-base">Monday, Feb 10</div>
                    <div className="text-charcoal-700 text-xs">4:00 PM - 5:30 PM</div>
                  </div>
                  <div className="text-right">
                    <div className="text-charcoal-900 font-bold text-sm">Advanced Goalkeeper</div>
                    <div className="text-charcoal-700 text-xs">Riverside Field #2</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-charcoal-700">
                  <i className="fa-solid fa-location-dot text-fern-600" />
                  <span>123 Sports Complex Dr, Downtown</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="flex-1 bg-fern-600 text-white rounded-lg py-2 text-xs font-bold">
                  <i className="fa-solid fa-check mr-1" /> Confirm
                </button>
                <button type="button" className="flex-1 bg-white text-charcoal-900 border border-mocha-200 rounded-lg py-2 text-xs font-bold">
                  <i className="fa-solid fa-clock mr-1" /> Reschedule
                </button>
              </div>
            </div>
          </section>

          <section className="px-5 pt-4 pb-[180px] bg-mocha-50">
            <div className="flex justify-center mb-4">
              <div className="bg-mocha-100 rounded-full px-4 py-2">
                <span className="text-charcoal-700 text-xs font-semibold">Yesterday</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">Hi Coach Marcus! Sarah had a great time at yesterday&apos;s session. Thank you!</p>
                <span className="text-white/80 text-xs mt-1 block text-right">9:15 AM</span>
                <div className="flex gap-1 flex-wrap mt-1">
                  <div className="flex items-center gap-1 bg-mocha-50 border border-mocha-200 rounded-xl px-2 py-0.5 text-xs">
                    <span>👍</span>
                    <span className="text-charcoal-900 font-semibold">1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">So glad to hear that! Sarah is making excellent progress. Her diving technique has really improved.</p>
                <span className="text-charcoal-700 text-xs mt-1 block">9:20 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">That&apos;s wonderful! She&apos;s been practicing at home too. Quick question - what time should we arrive for tomorrow&apos;s session?</p>
                <span className="text-white/80 text-xs mt-1 block text-right">9:25 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">Please arrive about 10 minutes early so Sarah can warm up properly. We start at 4:00 PM sharp.</p>
                <span className="text-charcoal-700 text-xs mt-1 block">9:30 AM</span>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="bg-mocha-100 rounded-full px-4 py-2">
                <span className="text-charcoal-700 text-xs font-semibold">Today</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">Perfect! We&apos;ll be there at 3:50 PM. Should she bring any special equipment?</p>
                <span className="text-white/80 text-xs mt-1 block text-right">10:15 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">Just her goalkeeper gloves, water bottle, and comfortable athletic wear. I&apos;ll provide all the training equipment.</p>
                <span className="text-charcoal-700 text-xs mt-1 block">10:18 AM</span>
                <div className="flex gap-1 flex-wrap mt-1">
                  <div className="flex items-center gap-1 bg-mocha-50 border border-mocha-200 rounded-xl px-2 py-0.5 text-xs">
                    <span>👌</span>
                    <span className="text-charcoal-900 font-semibold">1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed mb-2">Also, here&apos;s Sarah&apos;s progress report from last month. I&apos;ve highlighted areas of improvement and goals for the next sessions.</p>
                <div className="bg-mocha-50 rounded-lg p-3 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-file-pdf text-red-600 text-2xl" />
                    <div className="flex-1 min-w-0">
                      <div className="text-charcoal-900 font-bold text-xs truncate">Sarah_Progress_Report_Jan_2024.pdf</div>
                      <div className="text-charcoal-700 text-xs">2.4 MB • 8 pages</div>
                    </div>
                  </div>
                  <button type="button" className="w-full bg-fern-600 text-white rounded-lg py-2 text-xs font-bold">
                    <i className="fa-solid fa-download mr-1" /> Download Report
                  </button>
                </div>
                <span className="text-charcoal-700 text-xs mt-1 block">10:20 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">Thank you so much! I&apos;ll review it tonight. Your detailed feedback really helps us support her training at home.</p>
                <span className="text-white/80 text-xs mt-1 block text-right">10:25 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">You&apos;re very welcome! Parent support is crucial for athlete development. Feel free to reach out if you have any questions about the report.</p>
                <span className="text-charcoal-700 text-xs mt-1 block">10:30 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">Will do! Also, Sarah mentioned you&apos;re planning some special drills tomorrow. She&apos;s very excited! 🎯</p>
                <span className="text-white/80 text-xs mt-1 block text-right">11:00 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">Yes! We&apos;re going to work on reaction training and penalty saves. I have some new equipment that will really challenge her reflexes.</p>
                <span className="text-charcoal-700 text-xs mt-1 block">11:05 AM</span>
                <div className="flex gap-1 flex-wrap mt-1">
                  <div className="flex items-center gap-1 bg-mocha-50 border border-mocha-200 rounded-xl px-2 py-0.5 text-xs">
                    <span>🔥</span>
                    <span className="text-charcoal-900 font-semibold">1</span>
                  </div>
                  <div className="flex items-center gap-1 bg-mocha-50 border border-mocha-200 rounded-xl px-2 py-0.5 text-xs">
                    <span>💪</span>
                    <span className="text-charcoal-900 font-semibold">1</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed mb-2">Here&apos;s a preview of the training plan for tomorrow:</p>
                <div className="bg-fern-600/10 rounded-lg p-3 border border-fern-600/30 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-clipboard-list text-fern-600 text-lg" />
                    <span className="text-charcoal-900 font-bold text-xs">Tomorrow&apos;s Training Plan</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-check text-yellowGreen-600 text-xs mt-0.5" />
                      <span className="text-charcoal-900">Warm-up &amp; Dynamic Stretching (10 min)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-check text-yellowGreen-600 text-xs mt-0.5" />
                      <span className="text-charcoal-900">Reaction Drills with Light Board (20 min)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-check text-yellowGreen-600 text-xs mt-0.5" />
                      <span className="text-charcoal-900">Penalty Save Practice (25 min)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-check text-yellowGreen-600 text-xs mt-0.5" />
                      <span className="text-charcoal-900">Distribution &amp; Footwork (20 min)</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fa-solid fa-circle-check text-yellowGreen-600 text-xs mt-0.5" />
                      <span className="text-charcoal-900">Cool-down &amp; Feedback (15 min)</span>
                    </div>
                  </div>
                </div>
                <span className="text-charcoal-700 text-xs mt-1 block">11:10 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">This looks fantastic! Sarah will love the variety. Thank you for always being so organized and thorough.</p>
                <span className="text-white/80 text-xs mt-1 block text-right">11:15 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">My pleasure! Structure and variety keep training engaging and effective. See you both tomorrow! 👍</p>
                <span className="text-charcoal-700 text-xs mt-1 block">11:20 AM</span>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="bg-mocha-100 rounded-full px-4 py-2">
                <span className="text-charcoal-700 text-xs font-semibold">1 hour ago</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">One more quick question - is there parking available near Field #2?</p>
                <span className="text-white/80 text-xs mt-1 block text-right">1:30 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">Yes! There&apos;s a large parking lot right next to Field #2. It&apos;s free and usually has plenty of space. Look for the green &quot;Field Access&quot; signs.</p>
                <span className="text-charcoal-700 text-xs mt-1 block">1:35 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg"
                alt="Parent"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">Perfect! That&apos;s all I needed to know. Thanks again, Coach! 😊</p>
                <span className="text-white/80 text-xs mt-1 block text-right">1:40 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 flex-shrink-0" />
              <div className="max-w-[75%] bg-mocha-100 rounded-2xl rounded-tl-sm p-3">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-charcoal-700 animate-typing" style={{ animationDelay: '0s' }} />
                  <span className="w-2 h-2 rounded-full bg-charcoal-700 animate-typing" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 rounded-full bg-charcoal-700 animate-typing" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* FAB */}
        <div className="fixed bottom-[140px] right-5 z-20">
          <div
            className={`absolute bottom-[70px] right-0 flex flex-col gap-3 transition-all duration-300 ${
              fabMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-5'
            }`}
          >
            <button
              type="button"
              onClick={() => handleFabAction('next-session')}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="bg-white px-3 py-2 rounded-lg shadow-md text-charcoal-900 text-[13px] font-semibold whitespace-nowrap">
                Ask about next session
              </span>
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                <i className="fa-solid fa-calendar-plus text-fern-600 text-lg" />
              </div>
            </button>
            <button
              type="button"
              onClick={() => handleFabAction('reschedule')}
              className="flex items-center gap-3 cursor-pointer"
            >
              <span className="bg-white px-3 py-2 rounded-lg shadow-md text-charcoal-900 text-[13px] font-semibold whitespace-nowrap">
                Request reschedule
              </span>
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center">
                <i className="fa-solid fa-clock-rotate-left text-yellowGreen-600 text-lg" />
              </div>
            </button>
          </div>
          <button
            type="button"
            onClick={() => {
              setFabMenuOpen(!fabMenuOpen);
              if (fabMenuOpen) setQuickActionType(null);
            }}
            className="w-14 h-14 rounded-full bg-fern-600 shadow-lg flex items-center justify-center cursor-pointer transition-transform active:scale-95"
          >
            <i className={`fa-solid ${fabMenuOpen ? 'fa-times' : 'fa-plus'} text-white text-xl`} />
          </button>
        </div>

        {/* Message input - fixed above bottom nav space */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-mocha-200 z-30 px-5 py-3">
          <div className="flex items-end gap-2">
            <button
              type="button"
              className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center flex-shrink-0"
              aria-label="Emoji"
            >
              <i className="fa-regular fa-face-smile text-fern-600 text-lg" />
            </button>
            <button
              type="button"
              className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center flex-shrink-0"
              aria-label="Attachment"
            >
              <i className="fa-solid fa-paperclip text-fern-600 text-lg" />
            </button>
            <div className="flex-1 relative">
              <textarea
                ref={messageInputRef}
                placeholder="Type a message..."
                value={messageInput}
                onChange={handleInputChange}
                onKeyDown={handleKeyPress}
                rows={1}
                className="w-full bg-mocha-100 border border-mocha-200 rounded-xl px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-700 resize-none max-h-[120px]"
              />
            </div>
            <button
              type="button"
              className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center flex-shrink-0"
              aria-label="Voice"
            >
              <i className="fa-solid fa-microphone text-fern-600 text-lg" />
            </button>
            <button
              type="button"
              onClick={handleSend}
              className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center flex-shrink-0"
              aria-label="Send"
            >
              <i className="fa-solid fa-paper-plane text-white" />
            </button>
          </div>
        </div>

        {/* Quick action modal */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white z-[35] max-h-[70vh] overflow-y-auto transition-transform duration-300 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)] ${
            quickActionOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-charcoal-900 font-bold text-base">Quick Action</h3>
              <button
                type="button"
                onClick={() => { setQuickActionOpen(false); setQuickActionType(null); }}
                className="w-8 h-8 bg-mocha-50 rounded-lg flex items-center justify-center"
                aria-label="Close"
              >
                <i className="fa-solid fa-times text-charcoal-900" />
              </button>
            </div>

            {quickActionType === 'next-session' && (
              <div className="bg-fern-600/10 rounded-xl p-4 border border-fern-600/30 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-calendar-plus text-fern-600 text-xl" />
                  <span className="text-charcoal-900 font-bold text-sm">Ask About Next Session</span>
                </div>
                <p className="text-charcoal-700 text-xs mb-4">Select a question template or write your own:</p>
                <div className="space-y-2">
                  <button type="button" onClick={() => handleTemplateSelect('When is our next scheduled session?')} className="template-btn w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">When is our next scheduled session?</p>
                  </button>
                  <button type="button" onClick={() => handleTemplateSelect('Can we schedule an additional session this week?')} className="w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">Can we schedule an additional session this week?</p>
                  </button>
                  <button type="button" onClick={() => handleTemplateSelect('What should we focus on in the next session?')} className="w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">What should we focus on in the next session?</p>
                  </button>
                  <button type="button" onClick={() => handleTemplateSelect('Are there any openings for next week?')} className="w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">Are there any openings for next week?</p>
                  </button>
                </div>
              </div>
            )}

            {quickActionType === 'reschedule' && (
              <div className="bg-yellowGreen-500/10 rounded-xl p-4 border border-yellowGreen-500/30 mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <i className="fa-solid fa-clock-rotate-left text-yellowGreen-600 text-xl" />
                  <span className="text-charcoal-900 font-bold text-sm">Request Reschedule</span>
                </div>
                <p className="text-charcoal-700 text-xs mb-4">Select a reschedule request template:</p>
                <div className="space-y-2">
                  <button type="button" onClick={() => handleTemplateSelect("Could we reschedule tomorrow's session? Something came up.")} className="w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">Could we reschedule tomorrow&apos;s session? Something came up.</p>
                  </button>
                  <button type="button" onClick={() => handleTemplateSelect('We need to reschedule due to a family emergency. When are you available?')} className="w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">We need to reschedule due to a family emergency. When are you available?</p>
                  </button>
                  <button type="button" onClick={() => handleTemplateSelect('Can we move our session to a different time this week?')} className="w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">Can we move our session to a different time this week?</p>
                  </button>
                  <button type="button" onClick={() => handleTemplateSelect('Would it be possible to reschedule to next week instead?')} className="w-full bg-white border border-mocha-200 rounded-lg p-3 text-left">
                    <p className="text-charcoal-900 text-sm">Would it be possible to reschedule to next week instead?</p>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
