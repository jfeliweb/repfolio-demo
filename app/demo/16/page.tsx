'use client';

import { useState } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

export default function Demo16() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [cancelledUpcomingIds, setCancelledUpcomingIds] = useState<Set<string>>(new Set());
  const [cancellingId, setCancellingId] = useState<string | null>(null);

  const handleCancelSession = (id: string) => {
    if (!confirm('Are you sure you want to cancel this session? This action cannot be undone.')) return;
    setCancellingId(id);
    setTimeout(() => {
      setCancelledUpcomingIds((prev) => new Set(prev).add(id));
      setCancellingId(null);
      alert('Session cancelled successfully. You will receive a confirmation email shortly.');
    }, 1500);
  };

  const handleSetRating = (sessionId: string, rating: number) => {
    setRatings((prev) => ({ ...prev, [sessionId]: rating }));
  };

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans">
        {/* Drawer overlay */}
        <div
          role="presentation"
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />

        {/* Sidebar drawer */}
        <aside
          className={`fixed top-0 left-0 w-[280px] h-full bg-white shadow-xl z-50 overflow-y-auto transition-transform duration-300 ease-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
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
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Select Player</h3>
              <select className="w-full bg-mocha-100 border border-mocha-200 rounded-lg px-4 py-3 text-charcoal-900 text-sm font-semibold">
                <option value="sarah-johnson">Sarah Johnson (Age 14)</option>
                <option value="mike-johnson">Mike Johnson (Age 11)</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">This Month</h3>
              <div className="space-y-2">
                <div className="bg-fern-600/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Sessions</span>
                    <span className="text-fern-600 font-bold text-lg">8</span>
                  </div>
                </div>
                <div className="bg-brightFern-400/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Progress Reports</span>
                    <span className="text-brightFern-600 font-bold text-lg">3</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Quick Links</h3>
              <div className="space-y-2">
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Schedule</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-chart-line text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Progress</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-message text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Messages</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-100 rounded-lg text-left">
                  <i className="fa-solid fa-credit-card text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Payments</span>
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
                  onClick={() => window.history.back()}
                  className="w-10 h-10 bg-mocha-100 rounded-lg flex items-center justify-center"
                  aria-label="Go back"
                >
                  <i className="fa-solid fa-arrow-left text-charcoal-900" />
                </button>
                <h1 className="text-charcoal-900 font-bold text-base">My Sessions</h1>
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
            <div className="bg-gradient-to-r from-yellowGreen-500/20 to-brightFern-400/20 rounded-2xl p-5 border border-yellowGreen-500/30 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-yellowGreen-500 rounded-xl flex items-center justify-center shadow-sm">
                    <i className="fa-solid fa-ticket text-charcoal-900 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-charcoal-900 font-bold text-base mb-1">Make-up Credits</h3>
                    <p className="text-charcoal-700 text-xs">Available for rescheduling</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-charcoal-900 font-bold text-3xl">2</div>
                  <div className="text-charcoal-700 text-xs">credits</div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-2 border border-mocha-200 shadow-sm">
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('upcoming')}
                  className={`font-bold text-sm py-3 px-4 rounded-xl transition-all ${
                    activeTab === 'upcoming'
                      ? 'bg-fern-600 text-white'
                      : 'bg-mocha-100 text-charcoal-900'
                  }`}
                >
                  Upcoming
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('past')}
                  className={`font-bold text-sm py-3 px-4 rounded-xl transition-all ${
                    activeTab === 'past'
                      ? 'bg-fern-600 text-white'
                      : 'bg-mocha-100 text-charcoal-900'
                  }`}
                >
                  Past
                </button>
              </div>
            </div>
          </section>

          {activeTab === 'upcoming' && (
            <section className="px-5 pb-4 bg-mocha-50">
              <div className="mb-3">
                <h3 className="text-charcoal-900 font-bold text-base">Upcoming Sessions</h3>
                <p className="text-charcoal-700 text-xs">4 sessions scheduled</p>
              </div>

              <div className="space-y-3">
                {!cancelledUpcomingIds.has('up-1') && (
                  <SessionCardUpcoming
                    id="up-1"
                    dateLabel="Tomorrow, Feb 10"
                    dateHighlight
                    coachName="Coach Marcus Thompson"
                    coachTitle="Professional Goalkeeper Coach"
                    coachAvatar="avatar-3.jpg"
                    rating={4.9}
                    sessionsCount={127}
                    time="4:00 PM - 5:00 PM"
                    location="Riverside Sports Complex"
                    locationSub="Field 3, 1250 River Rd"
                    sessionType="1-on-1 Goalkeeper Training"
                    onCancel={() => handleCancelSession('up-1')}
                    onReschedule={() => alert('Redirecting to reschedule page...')}
                    isCancelling={cancellingId === 'up-1'}
                  />
                )}
                {!cancelledUpcomingIds.has('up-2') && (
                  <SessionCardUpcoming
                    id="up-2"
                    dateLabel="Wed, Feb 14"
                    coachName="Coach David Chen"
                    coachTitle="Goalkeeper Specialist"
                    coachAvatar="avatar-8.jpg"
                    rating={4.8}
                    sessionsCount={94}
                    time="6:00 PM - 7:00 PM"
                    location="Central Park Training Ground"
                    locationSub="North Field, 890 Park Ave"
                    sessionType="Advanced Diving Techniques"
                    onCancel={() => handleCancelSession('up-2')}
                    onReschedule={() => alert('Redirecting to reschedule page...')}
                    isCancelling={cancellingId === 'up-2'}
                  />
                )}
                {!cancelledUpcomingIds.has('up-3') && (
                  <SessionCardUpcoming
                    id="up-3"
                    dateLabel="Sat, Feb 17"
                    coachName="Coach Marcus Thompson"
                    coachTitle="Professional Goalkeeper Coach"
                    coachAvatar="avatar-3.jpg"
                    rating={4.9}
                    sessionsCount={127}
                    time="10:00 AM - 11:00 AM"
                    location="Elite Sports Academy"
                    locationSub="Building A, 456 Sports Way"
                    sessionType="1-on-1 Goalkeeper Training"
                    onCancel={() => handleCancelSession('up-3')}
                    onReschedule={() => alert('Redirecting to reschedule page...')}
                    isCancelling={cancellingId === 'up-3'}
                  />
                )}
                {!cancelledUpcomingIds.has('up-4') && (
                  <SessionCardUpcoming
                    id="up-4"
                    dateLabel="Tue, Feb 20"
                    coachName="Coach Sarah Martinez"
                    coachTitle="Elite Goalkeeper Trainer"
                    coachAvatar="avatar-9.jpg"
                    rating={5.0}
                    sessionsCount={156}
                    time="3:00 PM - 4:00 PM"
                    location="Riverside Sports Complex"
                    locationSub="Field 3, 1250 River Rd"
                    sessionType="Mental Preparation & Strategy"
                    onCancel={() => handleCancelSession('up-4')}
                    onReschedule={() => alert('Redirecting to reschedule page...')}
                    isCancelling={cancellingId === 'up-4'}
                  />
                )}
              </div>
            </section>
          )}

          {activeTab === 'past' && (
            <section className="px-5 pb-4 bg-mocha-50">
              <div className="mb-3">
                <h3 className="text-charcoal-900 font-bold text-base">Past Sessions</h3>
                <p className="text-charcoal-700 text-xs">12 completed sessions</p>
              </div>

              <div className="space-y-3">
                <PastSessionCard
                  dateLabel="Mon, Feb 5"
                  coachName="Coach Marcus Thompson"
                  coachTitle="Professional Goalkeeper Coach"
                  coachAvatar="avatar-3.jpg"
                  rating={4.9}
                  sessionsCount={127}
                  time="4:00 PM - 5:00 PM"
                  location="Riverside Sports Complex"
                  sessionType="1-on-1 Goalkeeper Training"
                  userRating={5}
                  onViewNotes={() => alert('Opening session notes and coach feedback...')}
                />
                <PastSessionCard
                  sessionId="past-2"
                  dateLabel="Thu, Feb 1"
                  coachName="Coach David Chen"
                  coachTitle="Goalkeeper Specialist"
                  coachAvatar="avatar-8.jpg"
                  rating={4.8}
                  sessionsCount={94}
                  time="6:00 PM - 7:00 PM"
                  location="Central Park Training Ground"
                  sessionType="Advanced Diving Techniques"
                  userRating={ratings['past-2'] ?? 0}
                  onSetRating={(r) => handleSetRating('past-2', r)}
                  onViewNotes={() => alert('Opening session notes and coach feedback...')}
                />
                <PastSessionCard
                  dateLabel="Mon, Jan 29"
                  coachName="Coach Marcus Thompson"
                  coachTitle="Professional Goalkeeper Coach"
                  coachAvatar="avatar-3.jpg"
                  rating={4.9}
                  sessionsCount={127}
                  time="10:00 AM - 11:00 AM"
                  location="Elite Sports Academy"
                  sessionType="1-on-1 Goalkeeper Training"
                  userRating={4}
                  onViewNotes={() => alert('Opening session notes and coach feedback...')}
                />
                <PastSessionCard
                  dateLabel="Wed, Jan 24"
                  coachName="Coach Sarah Martinez"
                  coachTitle="Elite Goalkeeper Trainer"
                  coachAvatar="avatar-9.jpg"
                  rating={5.0}
                  sessionsCount={156}
                  time="3:00 PM - 4:00 PM"
                  location="Riverside Sports Complex"
                  sessionType="Mental Preparation & Strategy"
                  userRating={5}
                  onViewNotes={() => alert('Opening session notes and coach feedback...')}
                />
                <PastSessionCard
                  sessionId="past-5"
                  dateLabel="Sat, Jan 20"
                  coachName="Coach David Chen"
                  coachTitle="Goalkeeper Specialist"
                  coachAvatar="avatar-8.jpg"
                  rating={4.8}
                  sessionsCount={94}
                  time="2:00 PM - 3:00 PM"
                  location="Central Park Training Ground"
                  sessionType="Footwork & Agility Training"
                  userRating={ratings['past-5'] ?? 0}
                  onSetRating={(r) => handleSetRating('past-5', r)}
                  onViewNotes={() => alert('Opening session notes and coach feedback...')}
                />
              </div>
            </section>
          )}

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Session Insights</h3>
              <p className="text-charcoal-700 text-xs">Your training overview</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-calendar-check text-fern-600 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">16</div>
                <div className="text-charcoal-700 text-xs">Total Sessions</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-brightFern-400/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-clock text-brightFern-600 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">16h</div>
                <div className="text-charcoal-700 text-xs">Training Time</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-star text-charcoal-900 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">4.9</div>
                <div className="text-charcoal-700 text-xs">Avg Rating</div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-users text-fern-600 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-2xl mb-1">3</div>
                <div className="text-charcoal-700 text-xs">Coaches</div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-fern-600/10 rounded-2xl p-5 border border-fern-600/30 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-fern-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-bell text-white text-lg" />
                </div>
                <div className="flex-1">
                  <h3 className="text-charcoal-900 font-bold text-sm mb-1">Session Reminder</h3>
                  <p className="text-charcoal-700 text-xs mb-3">
                    Your next session with Coach Marcus Thompson is tomorrow at 4:00 PM. Make sure to arrive 10 minutes early for warm-up.
                  </p>
                  <button
                    type="button"
                    className="bg-fern-600 text-white font-bold text-xs py-2 px-4 rounded-lg flex items-center gap-2"
                  >
                    <i className="fa-solid fa-calendar-plus" />
                    <span>Add to Calendar</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-red-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fa-solid fa-shield-halved text-red-600 text-lg" />
                </div>
                <div>
                  <h3 className="text-charcoal-900 font-bold text-sm mb-1">Cancellation Policy</h3>
                  <p className="text-charcoal-700 text-xs">Important information</p>
                </div>
              </div>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-brightFern-600 text-xs mt-1" />
                  <span className="text-charcoal-900 text-xs">Free cancellation up to 24 hours before session</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-brightFern-600 text-xs mt-1" />
                  <span className="text-charcoal-900 text-xs">50% credit refund for cancellations within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="fa-solid fa-circle-check text-brightFern-600 text-xs mt-1" />
                  <span className="text-charcoal-900 text-xs">Receive make-up credit for coach cancellations</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Quick Actions</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-calendar-plus text-fern-600 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">Book Session</div>
                <div className="text-charcoal-700 text-xs">Schedule new training</div>
              </button>
              <button type="button" className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left">
                <div className="w-10 h-10 bg-brightFern-400/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-users text-brightFern-600 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">Find Coaches</div>
                <div className="text-charcoal-700 text-xs">Browse trainers</div>
              </button>
              <button type="button" className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left">
                <div className="w-10 h-10 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-chart-line text-charcoal-900 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">View Progress</div>
                <div className="text-charcoal-700 text-xs">Track development</div>
              </button>
              <button type="button" className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm text-left">
                <div className="w-10 h-10 bg-fern-600/10 rounded-lg flex items-center justify-center mb-3">
                  <i className="fa-solid fa-message text-fern-600 text-lg" />
                </div>
                <div className="text-charcoal-900 font-bold text-sm mb-1">Messages</div>
                <div className="text-charcoal-700 text-xs">Chat with coaches</div>
              </button>
            </div>
          </section>

          <section className="px-5 pb-4 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Session Activity</h3>
              <p className="text-charcoal-700 text-xs">Last 6 months</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-mocha-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-charcoal-900 font-bold text-2xl mb-1">48</div>
                  <div className="text-charcoal-700 text-xs">Total Sessions</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-brightFern-400 text-white text-xs font-bold px-2 py-1 rounded">+12%</span>
                  <span className="text-charcoal-700 text-xs">vs last period</span>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'September', sessions: 6, pct: 60 },
                  { label: 'October', sessions: 8, pct: 80 },
                  { label: 'November', sessions: 10, pct: 100 },
                  { label: 'December', sessions: 7, pct: 70 },
                  { label: 'January', sessions: 9, pct: 90 },
                  { label: 'February', sessions: 8, pct: 80, secondary: true },
                ].map(({ label, sessions, pct, secondary }) => (
                  <div key={label}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-charcoal-700 text-xs">{label}</span>
                      <span className="text-charcoal-900 font-semibold text-xs">{sessions} sessions</span>
                    </div>
                    <div className="w-full bg-mocha-100 rounded-full h-2">
                      <div
                        className={`rounded-full h-2 ${secondary ? 'bg-brightFern-400' : 'bg-fern-600'}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-5 pb-6 bg-mocha-50">
            <div className="mb-3">
              <h3 className="text-charcoal-900 font-bold text-base">Session FAQs</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">How do I reschedule a session?</h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Tap the &quot;Reschedule&quot; button on any upcoming session card. You can reschedule up to 12 hours before the session starts.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">What are make-up credits?</h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Make-up credits are issued when a coach cancels a session. You can use them to book replacement sessions at no additional cost.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-mocha-200 shadow-sm">
                <h4 className="text-charcoal-900 font-bold text-sm mb-2">Can I view session notes after completion?</h4>
                <p className="text-charcoal-700 text-xs leading-relaxed">
                  Yes! Tap &quot;View Notes&quot; on any completed session to see detailed feedback and progress notes from your coach.
                </p>
              </div>
            </div>
          </section>
        </main>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}

function SessionCardUpcoming({
  id,
  dateLabel,
  dateHighlight,
  coachName,
  coachTitle,
  coachAvatar,
  rating,
  sessionsCount,
  time,
  location,
  locationSub,
  sessionType,
  onCancel,
  onReschedule,
  isCancelling,
}: {
  id: string;
  dateLabel: string;
  dateHighlight?: boolean;
  coachName: string;
  coachTitle: string;
  coachAvatar: string;
  rating: number;
  sessionsCount: number;
  time: string;
  location: string;
  locationSub: string;
  sessionType: string;
  onCancel: () => void;
  onReschedule: () => void;
  isCancelling: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl overflow-hidden shadow-sm transition-all active:scale-[0.98] ${
        dateHighlight ? 'border-2 border-fern-600/30' : 'border border-mocha-200'
      } ${isCancelling ? 'opacity-50' : ''}`}
    >
      <div className={`px-5 py-3 border-b ${dateHighlight ? 'bg-fern-600/10 border-fern-600/20' : 'bg-mocha-100 border-mocha-200'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className={`fa-solid fa-calendar-day text-sm ${dateHighlight ? 'text-fern-600' : 'text-charcoal-900'}`} />
            <span className={`font-bold text-sm ${dateHighlight ? 'text-fern-600' : 'text-charcoal-900'}`}>{dateLabel}</span>
          </div>
          <span className={`text-xs font-bold px-3 py-1 rounded-full ${dateHighlight ? 'bg-fern-600 text-white' : 'bg-brightFern-400 text-white'}`}>
            Confirmed
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <img
            src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${coachAvatar}`}
            alt="Coach"
            className={`w-14 h-14 rounded-full object-cover border-2 flex-shrink-0 ${dateHighlight ? 'border-fern-600' : 'border-brightFern-400'}`}
          />
          <div className="flex-1">
            <h4 className="text-charcoal-900 font-bold text-base mb-1">{coachName}</h4>
            <p className="text-charcoal-700 text-xs mb-2">{coachTitle}</p>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-star text-yellowGreen-500" />
                <span className="text-charcoal-900 font-semibold">{rating}</span>
              </div>
              <span className="text-charcoal-700">• {sessionsCount} sessions</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-clock text-fern-600" />
            </div>
            <div className="flex-1">
              <div className="text-charcoal-700 text-xs mb-1">Time</div>
              <div className="text-charcoal-900 font-semibold text-sm">{time}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-brightFern-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-location-dot text-brightFern-600" />
            </div>
            <div className="flex-1">
              <div className="text-charcoal-700 text-xs mb-1">Location</div>
              <div className="text-charcoal-900 font-semibold text-sm">{location}</div>
              <div className="text-charcoal-700 text-xs">{locationSub}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-dumbbell text-charcoal-900" />
            </div>
            <div className="flex-1">
              <div className="text-charcoal-700 text-xs mb-1">Session Type</div>
              <div className="text-charcoal-900 font-semibold text-sm">{sessionType}</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onCancel}
            disabled={isCancelling}
            className="bg-mocha-100 text-charcoal-900 font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 disabled:opacity-70"
          >
            {isCancelling ? (
              <>
                <i className="fa-solid fa-spinner fa-spin" />
                <span>Canceling...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-calendar-xmark" />
                <span>Cancel</span>
              </>
            )}
          </button>
          <button
            type="button"
            onClick={onReschedule}
            className="bg-fern-600 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
          >
            <i className="fa-solid fa-calendar-days" />
            <span>Reschedule</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function PastSessionCard({
  sessionId,
  dateLabel,
  coachName,
  coachTitle,
  coachAvatar,
  rating,
  sessionsCount,
  time,
  location,
  sessionType,
  userRating,
  onSetRating,
  onViewNotes,
}: {
  sessionId?: string;
  dateLabel: string;
  coachName: string;
  coachTitle: string;
  coachAvatar: string;
  rating: number;
  sessionsCount: number;
  time: string;
  location: string;
  sessionType: string;
  userRating: number;
  onSetRating?: (rating: number) => void;
  onViewNotes: () => void;
}) {
  const showRatingInput = sessionId != null && userRating === 0 && onSetRating != null;
  return (
    <div className="bg-white rounded-2xl border border-mocha-200 shadow-sm overflow-hidden transition-all active:scale-[0.98]">
      <div className="bg-mocha-100 px-5 py-3 border-b border-mocha-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-calendar-day text-charcoal-900 text-sm" />
            <span className="text-charcoal-900 font-bold text-sm">{dateLabel}</span>
          </div>
          <span className="bg-brightFern-400 text-white text-xs font-bold px-3 py-1 rounded-full">Completed</span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start gap-3 mb-4">
          <img
            src={`https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/${coachAvatar}`}
            alt="Coach"
            className="w-14 h-14 rounded-full object-cover border-2 border-brightFern-400 flex-shrink-0"
          />
          <div className="flex-1">
            <h4 className="text-charcoal-900 font-bold text-base mb-1">{coachName}</h4>
            <p className="text-charcoal-700 text-xs mb-2">{coachTitle}</p>
            <div className="flex items-center gap-2 text-xs">
              <div className="flex items-center gap-1">
                <i className="fa-solid fa-star text-yellowGreen-500" />
                <span className="text-charcoal-900 font-semibold">{rating}</span>
              </div>
              <span className="text-charcoal-700">• {sessionsCount} sessions</span>
            </div>
          </div>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-fern-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-clock text-fern-600" />
            </div>
            <div className="flex-1">
              <div className="text-charcoal-700 text-xs mb-1">Time</div>
              <div className="text-charcoal-900 font-semibold text-sm">{time}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-brightFern-400/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-location-dot text-brightFern-600" />
            </div>
            <div className="flex-1">
              <div className="text-charcoal-700 text-xs mb-1">Location</div>
              <div className="text-charcoal-900 font-semibold text-sm">{location}</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-yellowGreen-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-dumbbell text-charcoal-900" />
            </div>
            <div className="flex-1">
              <div className="text-charcoal-700 text-xs mb-1">Session Type</div>
              <div className="text-charcoal-900 font-semibold text-sm">{sessionType}</div>
            </div>
          </div>
        </div>
        {showRatingInput ? (
          <div className="bg-mocha-100 rounded-lg p-3 mb-3">
            <div className="text-charcoal-900 font-semibold text-xs mb-2">Rate this session</div>
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => onSetRating?.(r)}
                  className="transition-transform active:scale-90 cursor-pointer"
                  aria-label={`Rate ${r} stars`}
                >
                  <i className={`text-lg ${r <= (userRating || 0) ? 'fa-solid fa-star text-yellowGreen-500' : 'fa-regular fa-star text-charcoal-700'}`} />
                </button>
              ))}
            </div>
            <p className="text-charcoal-700 text-xs">Tap to rate</p>
          </div>
        ) : (
          userRating > 0 && (
            <div className="bg-yellowGreen-500/10 rounded-lg p-3 mb-3">
              <div className="text-charcoal-900 font-semibold text-xs mb-2">Your Rating</div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((r) => (
                  <i
                    key={r}
                    className={`text-lg ${r <= userRating ? 'fa-solid fa-star text-yellowGreen-500' : 'fa-regular fa-star text-charcoal-700'}`}
                  />
                ))}
              </div>
            </div>
          )
        )}
        <button
          type="button"
          onClick={onViewNotes}
          className="w-full bg-fern-600 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <i className="fa-solid fa-file-lines" />
          <span>View Notes</span>
        </button>
      </div>
    </div>
  );
}
