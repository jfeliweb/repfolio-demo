'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex gap-2 flex-row-reverse justify-end">
      {[3, 2, 1].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          className="text-[28px] transition-colors focus:outline-none focus:ring-0"
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
        >
          <i
            className={`fa-solid fa-star ${
              value >= n ? 'text-yellowGreen-500' : 'text-mocha-200'
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function Demo9() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [shotStopping, setShotStopping] = useState(0);
  const [positioning, setPositioning] = useState(0);
  const [distribution, setDistribution] = useState(0);
  const [footwork, setFootwork] = useState(0);
  const [decisionMaking, setDecisionMaking] = useState(0);
  const [communication, setCommunication] = useState(0);
  const [notifyParent, setNotifyParent] = useState(false);
  const [requestFeedback, setRequestFeedback] = useState(false);

  const handleSaveShare = () => {
    const summary = (document.getElementById('session-summary') as HTMLTextAreaElement)?.value ?? '';
    const achievements = (document.getElementById('key-achievements') as HTMLTextAreaElement)?.value ?? '';
    const improvements = (document.getElementById('areas-improve') as HTMLTextAreaElement)?.value ?? '';
    const nextFocus = (document.getElementById('next-focus') as HTMLTextAreaElement)?.value ?? '';
    if (!summary || !achievements || !improvements || !nextFocus) {
      alert('Please fill in all required fields before saving.');
      return;
    }
    alert('Session update saved and shared with parent successfully!');
  };

  const handleDiscard = () => {
    if (confirm('Are you sure you want to discard this update? All changes will be lost.')) {
      router.back();
    }
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
          className={`fixed inset-0 bg-charcoal-900/50 z-40 transition-opacity ${
            sidebarOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Sidebar drawer */}
        <aside
          className={`fixed top-0 left-0 bottom-0 w-[280px] bg-white z-50 transform transition-transform duration-300 overflow-y-auto shadow-xl ${
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
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Today&apos;s Stats</h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
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
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Calendar</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-users text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Clients</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
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
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center"
                  aria-label="Go back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </button>
                <div className="flex items-center gap-2">
                  <RepfolioLogo width={100} height={28} />
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center"
                  aria-label="Menu"
                >
                  <i className="fa-solid fa-bars text-charcoal-900" />
                </button>
              </div>
              <div>
                <h1 className="text-charcoal-900 font-bold text-xl">Post-Session Update</h1>
                <p className="text-charcoal-700 text-xs">Document session progress and achievements</p>
              </div>
            </div>
          </header>

          <section className="px-5 py-5 bg-mocha-50">
            <div className="bg-white rounded-2xl border border-mocha-200 overflow-hidden shadow-sm">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                    alt="Sarah Martinez"
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0 border-2 border-fern-600/20"
                  />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-charcoal-900 font-bold text-lg mb-1">
                      Post-Session Update for Sarah Martinez
                    </h2>
                    <div className="text-charcoal-700 text-sm">1-on-1 Goalkeeper Training</div>
                  </div>
                </div>
                <div className="bg-mocha-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <i className="fa-solid fa-calendar text-fern-600 text-sm" />
                    <span className="text-charcoal-900 font-semibold text-sm">Session Date & Time</span>
                  </div>
                  <div className="text-charcoal-900 text-base font-medium">Friday, February 9, 2024</div>
                  <div className="text-charcoal-700 text-sm">2:00 PM - 3:00 PM (60 minutes)</div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-file-lines text-fern-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Session Summary</h3>
              </div>
              <div className="mb-2">
                <label className="text-charcoal-900 text-sm font-medium mb-2 block">
                  Overall session notes and observations
                </label>
                <textarea
                  id="session-summary"
                  rows={6}
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg p-3 text-charcoal-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fern-600"
                  placeholder="Describe the session activities, client's engagement level, what was covered, and general observations..."
                />
              </div>
              <div className="flex items-center gap-2 text-charcoal-700 text-xs">
                <i className="fa-solid fa-info-circle" />
                <span>Be specific and detailed to help track progress over time</span>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-star text-fern-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Skill Assessment</h3>
              </div>
              <p className="text-charcoal-700 text-sm mb-5">Rate each skill based on today&apos;s performance</p>
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Shot Stopping</div>
                      <div className="text-charcoal-700 text-xs">Reaction time and technique</div>
                    </div>
                  </div>
                  <StarRating value={shotStopping} onChange={setShotStopping} />
                  <div className="h-px bg-mocha-200 mt-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Positioning</div>
                      <div className="text-charcoal-700 text-xs">Goal coverage and angles</div>
                    </div>
                  </div>
                  <StarRating value={positioning} onChange={setPositioning} />
                  <div className="h-px bg-mocha-200 mt-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Distribution</div>
                      <div className="text-charcoal-700 text-xs">Passing accuracy and decision-making</div>
                    </div>
                  </div>
                  <StarRating value={distribution} onChange={setDistribution} />
                  <div className="h-px bg-mocha-200 mt-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Footwork</div>
                      <div className="text-charcoal-700 text-xs">Movement and agility</div>
                    </div>
                  </div>
                  <StarRating value={footwork} onChange={setFootwork} />
                  <div className="h-px bg-mocha-200 mt-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Decision Making</div>
                      <div className="text-charcoal-700 text-xs">Game awareness and choices</div>
                    </div>
                  </div>
                  <StarRating value={decisionMaking} onChange={setDecisionMaking} />
                  <div className="h-px bg-mocha-200 mt-4" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-charcoal-900 font-semibold text-sm mb-1">Communication</div>
                      <div className="text-charcoal-700 text-xs">Verbal cues and leadership</div>
                    </div>
                  </div>
                  <StarRating value={communication} onChange={setCommunication} />
                </div>
              </div>
              <div className="mt-5 bg-mocha-50 rounded-lg p-3 flex items-start gap-2">
                <i className="fa-solid fa-lightbulb text-yellowGreen-600 mt-0.5" />
                <div className="text-charcoal-700 text-xs">
                  <span className="font-semibold text-charcoal-900">Rating Guide:</span> 1 star = Needs work, 2
                  stars = Good progress, 3 stars = Excellent performance
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-brightFern-400/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-trophy text-brightFern-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Key Achievements</h3>
              </div>
              <div className="mb-2">
                <label className="text-charcoal-900 text-sm font-medium mb-2 block">What went well today?</label>
                <textarea
                  id="key-achievements"
                  rows={5}
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg p-3 text-charcoal-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fern-600"
                  placeholder="List specific accomplishments, breakthroughs, or notable improvements during this session..."
                />
              </div>
              <div className="bg-brightFern-400/5 rounded-lg p-3 border border-brightFern-400/20">
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-check-circle text-brightFern-600 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <span className="font-semibold text-charcoal-900">Tip:</span> Highlight specific moments,
                    successful techniques, or mental/physical improvements
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-yellowGreen-500/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-line text-yellowGreen-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Areas to Improve</h3>
              </div>
              <div className="mb-2">
                <label className="text-charcoal-900 text-sm font-medium mb-2 block">What needs more work?</label>
                <textarea
                  id="areas-improve"
                  rows={5}
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg p-3 text-charcoal-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fern-600"
                  placeholder="Identify specific skills, techniques, or aspects that need continued development..."
                />
              </div>
              <div className="bg-yellowGreen-500/10 rounded-lg p-3 border border-yellowGreen-500/30">
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-exclamation-circle text-yellowGreen-600 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <span className="font-semibold text-charcoal-900">Note:</span> Be constructive and specific
                    about what to focus on
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-bullseye text-fern-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Next Session Focus</h3>
              </div>
              <div className="mb-2">
                <label className="text-charcoal-900 text-sm font-medium mb-2 block">
                  What should we work on next time?
                </label>
                <textarea
                  id="next-focus"
                  rows={5}
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg p-3 text-charcoal-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fern-600"
                  placeholder="Outline specific drills, techniques, or goals for the upcoming session..."
                />
              </div>
              <div className="bg-fern-600/5 rounded-lg p-3 border border-fern-600/20">
                <div className="flex items-start gap-2">
                  <i className="fa-solid fa-target text-fern-600 mt-0.5" />
                  <div className="text-xs text-charcoal-700">
                    <span className="font-semibold text-charcoal-900">Planning Ahead:</span> Set clear, actionable
                    goals for continued progress
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-note-sticky text-charcoal-900" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Additional Notes</h3>
              </div>
              <div className="mb-3">
                <label className="text-charcoal-900 text-sm font-medium mb-2 block">
                  Any other observations or comments?
                </label>
                <textarea
                  id="additional-notes"
                  rows={4}
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg p-3 text-charcoal-900 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-fern-600"
                  placeholder="Equipment needs, schedule changes, parent feedback requests, etc..."
                />
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-camera text-fern-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Session Media</h3>
              </div>
              <p className="text-charcoal-700 text-sm mb-4">Add photos or videos from today&apos;s session</p>
              <div className="border-2 border-dashed border-mocha-200 rounded-lg p-6 text-center">
                <div className="w-14 h-14 bg-mocha-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="fa-solid fa-cloud-arrow-up text-fern-600 text-2xl" />
                </div>
                <div className="text-charcoal-900 font-semibold text-sm mb-1">Upload Photos or Videos</div>
                <div className="text-charcoal-700 text-xs mb-4">Tap to select files from your device</div>
                <button
                  type="button"
                  className="bg-fern-600/10 text-fern-600 border border-fern-600/30 font-semibold py-2 px-4 rounded-lg text-sm"
                >
                  Choose Files
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2 text-charcoal-700 text-xs">
                <i className="fa-solid fa-info-circle" />
                <span>Max 10 files, up to 50MB each</span>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-brightFern-400/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-bell text-brightFern-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Parent Notification</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-mocha-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="notify-parent"
                    checked={notifyParent}
                    onChange={(e) => setNotifyParent(e.target.checked)}
                    className="mt-1 w-5 h-5 text-fern-600 border-mocha-200 rounded focus:ring-2 focus:ring-fern-600"
                  />
                  <div className="flex-1">
                    <label htmlFor="notify-parent" className="text-charcoal-900 font-semibold text-sm block mb-1 cursor-pointer">
                      Send update to parent immediately
                    </label>
                    <div className="text-charcoal-700 text-xs">
                      Maria Martinez will receive this update via email and in-app notification
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-mocha-50 rounded-lg">
                  <input
                    type="checkbox"
                    id="request-feedback"
                    checked={requestFeedback}
                    onChange={(e) => setRequestFeedback(e.target.checked)}
                    className="mt-1 w-5 h-5 text-fern-600 border-mocha-200 rounded focus:ring-2 focus:ring-fern-600"
                  />
                  <div className="flex-1">
                    <label htmlFor="request-feedback" className="text-charcoal-900 font-semibold text-sm block mb-1 cursor-pointer">
                      Request parent feedback
                    </label>
                    <div className="text-charcoal-700 text-xs">
                      Ask parent about client&apos;s experience and any questions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-5 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center">
                  <i className="fa-solid fa-chart-simple text-fern-600" />
                </div>
                <h3 className="text-charcoal-900 font-bold text-base">Session Statistics</h3>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-mocha-50 rounded-lg p-3 text-center">
                  <div className="text-charcoal-900 font-bold text-xl mb-1">60</div>
                  <div className="text-charcoal-700 text-xs">Minutes</div>
                </div>
                <div className="bg-mocha-50 rounded-lg p-3 text-center">
                  <div className="text-charcoal-900 font-bold text-xl mb-1">13</div>
                  <div className="text-charcoal-700 text-xs">Total Sessions</div>
                </div>
                <div className="bg-mocha-50 rounded-lg p-3 text-center">
                  <div className="text-charcoal-900 font-bold text-xl mb-1">4.8</div>
                  <div className="text-charcoal-700 text-xs">Avg Rating</div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="space-y-3">
              <button
                type="button"
                onClick={handleSaveShare}
                className="w-full bg-fern-600 text-white font-bold py-4 px-6 rounded-xl text-base shadow-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-paper-plane text-lg" />
                <span>Save & Share with Parent</span>
              </button>
              <button
                type="button"
                onClick={() => alert('Session update saved as draft.')}
                className="w-full bg-white border-2 border-mocha-200 text-charcoal-900 font-semibold py-4 px-6 rounded-xl text-base flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-floppy-disk" />
                <span>Save as Draft</span>
              </button>
              <button
                type="button"
                onClick={handleDiscard}
                className="w-full bg-white border-2 border-red-600/30 text-red-600 font-semibold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2"
              >
                <i className="fa-solid fa-trash-can" />
                <span>Discard Update</span>
              </button>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="bg-yellowGreen-500/10 rounded-2xl p-5 border border-yellowGreen-500/30">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-lightbulb text-yellowGreen-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-base mb-1">Helpful Tips</h3>
                  <p className="text-charcoal-700 text-xs">Make your updates more effective</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-brightFern-600 mt-1 flex-shrink-0" />
                  <span>Be specific with examples of what the client did well</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-brightFern-600 mt-1 flex-shrink-0" />
                  <span>Focus on progress rather than perfection</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-brightFern-600 mt-1 flex-shrink-0" />
                  <span>Set clear, achievable goals for next session</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-charcoal-900">
                  <i className="fa-solid fa-check text-brightFern-600 mt-1 flex-shrink-0" />
                  <span>Include photos or videos when possible</span>
                </li>
              </ul>
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
