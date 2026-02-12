'use client';

import { useState, useRef, useCallback } from 'react';
import { RepfolioLogo } from '@/components/RepfolioLogo';
import { DemoNavigation } from '@/components/DemoNavigation';
import { RequireAuth } from '@/components/RequireAuth';

const CLIENTS = [
  { id: 'sarah-johnson', name: 'Sarah Johnson', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg', time: '2:45 PM', preview: 'Great progress today! See you next...', unread: 3, online: true },
  { id: 'mike-anderson', name: 'Mike Anderson', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg', time: 'Yesterday', preview: 'Thanks for rescheduling!', unread: 0, online: false },
  { id: 'emily-davis', name: 'Emily Davis', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-6.jpg', time: 'Yesterday', preview: 'Can we add an extra session?', unread: 1, online: true },
  { id: 'james-wilson', name: 'James Wilson', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg', time: 'Feb 8', preview: "Looking forward to Monday's session", unread: 0, online: false },
  { id: 'lisa-brown', name: 'Lisa Brown', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-7.jpg', time: 'Feb 7', preview: 'Thank you for the progress report!', unread: 2, online: true },
  { id: 'david-martinez', name: 'David Martinez', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-4.jpg', time: 'Feb 6', preview: 'Sounds good, see you then!', unread: 0, online: false },
  { id: 'rachel-taylor', name: 'Rachel Taylor', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-1.jpg', time: 'Feb 5', preview: 'Perfect timing!', unread: 0, online: false },
  { id: 'kevin-thomas', name: 'Kevin Thomas', avatar: 'https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-9.jpg', time: 'Feb 4', preview: 'Got it, thanks coach!', unread: 5, online: false },
] as const;

const QUICK_REPLIES = [
  { title: 'Confirm Session', text: "Yes, I'll see you at [time] for our session!" },
  { title: 'Running Late', text: "I'm running about 10 minutes late. Be there soon!" },
  { title: 'Need to Reschedule', text: "Could we reschedule today's session? Something came up." },
  { title: 'Thank You', text: 'Thanks for the great session today! See you next time.' },
  { title: 'Progress Update Request', text: 'When will the next progress report be available?' },
  { title: 'Equipment Question', text: 'What equipment should I bring to the next session?' },
  { title: 'Weather Check', text: 'Are we still on for today given the weather?' },
];

export default function Demo20() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clientsSidebarOpen, setClientsSidebarOpen] = useState(false);
  const [activeClientId, setActiveClientId] = useState('sarah-johnson');
  const [quickReplyOpen, setQuickReplyOpen] = useState(false);
  const [attachmentOpen, setAttachmentOpen] = useState(false);
  const [messageText, setMessageText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const closeOverlays = useCallback(() => {
    setSidebarOpen(false);
    setClientsSidebarOpen(false);
    setQuickReplyOpen(false);
    setAttachmentOpen(false);
  }, []);

  const handleClientSelect = (id: string) => {
    setActiveClientId(id);
    setClientsSidebarOpen(false);
    closeOverlays();
  };

  const handleQuickReplySelect = (text: string) => {
    setMessageText(text);
    setQuickReplyOpen(false);
    closeOverlays();
    textareaRef.current?.focus();
  };

  const handleSend = () => {
    const trimmed = messageText.trim();
    if (trimmed) {
      setMessageText('');
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }
  };

  const handleTextareaInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const activeClient = CLIENTS.find((c) => c.id === activeClientId) ?? CLIENTS[0];

  return (
    <RequireAuth>
      <div className="min-h-screen bg-mocha-50 text-charcoal-700 font-sans">
        {/* Drawer overlay - z-50 so closed sidebar (transform) doesn't block hamburger */}
        <div
          role="button"
          tabIndex={0}
          onClick={closeOverlays}
          onKeyDown={(e) => e.key === 'Escape' && closeOverlays()}
          className={`fixed inset-0 bg-charcoal-900/50 z-50 transition-opacity duration-300 ${
            sidebarOpen || clientsSidebarOpen || quickReplyOpen || attachmentOpen
              ? 'opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Sidebar drawer - use transform so closed state doesn't block hamburger (same as demo 8) */}
        <aside
          className={`fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white z-50 overflow-y-auto shadow-xl transform transition-transform duration-300 ease-out ${
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
                <div className="bg-brightFern-400/10 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-900 text-xs font-semibold">Active Chats</span>
                    <span className="text-brightFern-600 font-bold text-lg">8</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-charcoal-900 font-bold text-sm mb-3">Quick Links</h3>
              <div className="space-y-2">
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-calendar-days text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Schedule</span>
                </button>
                <button type="button" className="w-full flex items-center gap-3 p-3 bg-mocha-50 rounded-lg text-left">
                  <i className="fa-solid fa-chart-line text-fern-600" />
                  <span className="text-charcoal-900 text-sm font-medium">Progress</span>
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
          </div>
        </aside>

        {/* Clients sidebar - use transform so closed state doesn't block "Open conversations" button */}
        <aside
          className={`fixed top-0 left-0 w-full h-full bg-white z-[45] overflow-y-auto transform transition-transform duration-300 ease-out ${
            clientsSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="sticky top-0 bg-white border-b border-mocha-200 z-10">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-charcoal-900 font-bold text-lg">Conversations</h2>
                <button
                  type="button"
                  onClick={() => setClientsSidebarOpen(false)}
                  className="w-9 h-9 bg-mocha-50 rounded-lg flex items-center justify-center"
                  aria-label="Close"
                >
                  <i className="fa-solid fa-times text-charcoal-900" />
                </button>
              </div>
              <div className="relative">
                <i className="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-700 text-sm" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  className="w-full bg-mocha-100 border border-mocha-200 rounded-lg pl-10 pr-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-700"
                />
              </div>
            </div>
          </div>
          <div className="p-3">
            {CLIENTS.map((client) => (
              <button
                key={client.id}
                type="button"
                onClick={() => handleClientSelect(client.id)}
                className={`client-item w-full flex items-center gap-3 p-3 rounded-lg mb-2 text-left transition-all active:scale-[0.98] ${
                  activeClientId === client.id ? 'bg-fern-600' : 'hover:bg-mocha-50'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={client.avatar}
                    alt={client.name}
                    className={`w-14 h-14 rounded-full object-cover border-2 ${activeClientId === client.id ? 'border-fern-600' : 'border-transparent'}`}
                  />
                  <div
                    className={`absolute bottom-0 right-0 w-4 h-4 border-2 border-white rounded-full ${
                      client.online ? 'bg-brightFern-400' : 'bg-mocha-50'
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-bold text-sm truncate ${
                        activeClientId === client.id ? 'text-white' : 'text-charcoal-900'
                      }`}
                    >
                      {client.name}
                    </span>
                    <span
                      className={`text-xs ${activeClientId === client.id ? 'text-white/80' : 'text-charcoal-700'}`}
                    >
                      {client.time}
                    </span>
                  </div>
                  <p
                    className={`text-xs truncate ${
                      activeClientId === client.id ? 'text-white/80' : 'text-charcoal-700'
                    }`}
                  >
                    {client.preview}
                  </p>
                </div>
                {client.unread > 0 && (
                  <div className="min-w-[20px] h-5 flex items-center justify-center text-[10px] font-bold bg-yellowGreen-500 text-charcoal-900 rounded-full px-2 py-0.5">
                    {client.unread}
                  </div>
                )}
              </button>
            ))}
          </div>
        </aside>

        <main className="min-h-screen pb-24">
          <header className="sticky top-0 z-30 bg-white border-b border-mocha-200">
            <div className="px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <img
                    src={activeClient.avatar}
                    alt={activeClient.name}
                    className="w-9 h-9 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h1 className="text-charcoal-900 font-bold text-sm truncate">{activeClient.name}</h1>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-brightFern-400 rounded-full" />
                      <span className="text-brightFern-600 text-xs font-semibold">Online</span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSidebarOpen(true)}
                  className="w-10 h-10 bg-mocha-50 rounded-lg flex flex-col items-center justify-center gap-1.5 shrink-0"
                  aria-label="Menu"
                >
                  <span className="w-5 h-0.5 bg-charcoal-900 rounded-full" />
                  <span className="w-5 h-0.5 bg-charcoal-900 rounded-full" />
                  <span className="w-5 h-0.5 bg-charcoal-900 rounded-full" />
                </button>
              </div>
            </div>
          </header>

          <section className="sticky top-[60px] z-20 px-5 pt-3 pb-2 bg-mocha-50">
            <div className="bg-fern-600/10 rounded-2xl p-4 border border-fern-600/30 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-calendar-check text-fern-600 text-sm" />
                  <span className="text-charcoal-900 font-bold text-xs">Next Session</span>
                </div>
                <button type="button" className="text-fern-600 text-xs font-semibold">
                  View Details
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-charcoal-900 font-bold text-sm">Tomorrow, Feb 10</div>
                  <div className="text-charcoal-700 text-xs">4:00 PM - 5:00 PM</div>
                </div>
                <div className="text-right">
                  <div className="text-charcoal-900 font-bold text-xs">Goalkeeper Training</div>
                  <div className="text-charcoal-700 text-xs">Field #2</div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-5 pt-4 pb-[140px] bg-mocha-50">
            <div className="flex justify-center mb-4">
              <div className="bg-mocha-50 rounded-full px-4 py-2">
                <span className="text-charcoal-700 text-xs font-semibold">Today</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm animate-slide-in">
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  Hi Coach! Just wanted to check in about tomorrow&apos;s session. Is it still on?
                </p>
                <span className="text-charcoal-700 text-xs mt-1 block">10:30 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">
                  Hey Sarah! Yes, we&apos;re all set for tomorrow at 4 PM. Looking forward to it!
                </p>
                <span className="text-white/80 text-xs mt-1 block text-right">10:32 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  Perfect! I&apos;ve been practicing the diving techniques you showed me last week.
                </p>
                <span className="text-charcoal-700 text-xs mt-1 block">10:35 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">
                  That&apos;s great to hear! We&apos;ll work on refining those tomorrow. Don&apos;t forget to bring your
                  gloves and water bottle.
                </p>
                <span className="text-white/80 text-xs mt-1 block text-right">10:38 AM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">Will do! 👍</p>
                <span className="text-charcoal-700 text-xs mt-1 block">10:40 AM</span>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="bg-mocha-50 rounded-full px-4 py-2">
                <span className="text-charcoal-700 text-xs font-semibold">2 hours ago</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  Quick question - should I warm up before coming or will we do that together?
                </p>
                <span className="text-charcoal-700 text-xs mt-1 block">12:15 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">
                  We&apos;ll warm up together! I have a new dynamic stretching routine I want to show you. Just come
                  ready to train 💪
                </p>
                <span className="text-white/80 text-xs mt-1 block text-right">12:20 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  Awesome! Can&apos;t wait to learn it. See you tomorrow!
                </p>
                <span className="text-charcoal-700 text-xs mt-1 block">12:25 PM</span>
              </div>
            </div>

            <div className="flex justify-center mb-4">
              <div className="bg-mocha-50 rounded-full px-4 py-2">
                <span className="text-charcoal-700 text-xs font-semibold">30 minutes ago</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">
                  By the way, I&apos;ve uploaded your progress report from last month. Check it out when you get a
                  chance!
                </p>
                <span className="text-white/80 text-xs mt-1 block text-right">2:15 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <div className="bg-white/20 rounded-lg p-3 mb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <i className="fa-solid fa-file-pdf text-white text-xl" />
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-bold text-xs truncate">Progress_Report_Jan_2024.pdf</div>
                      <div className="text-white/70 text-xs">2.4 MB</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-white text-fern-600 rounded-lg py-2 text-xs font-bold"
                  >
                    <i className="fa-solid fa-download mr-1" /> Download
                  </button>
                </div>
                <span className="text-white/80 text-xs mt-1 block text-right">2:16 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  Thank you so much! I&apos;ll review it tonight with my parents. Really appreciate all the detailed
                  feedback!
                </p>
                <span className="text-charcoal-700 text-xs mt-1 block">2:20 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">
                  You&apos;re welcome! You&apos;ve made excellent progress. Keep up the great work! 🌟
                </p>
                <span className="text-white/80 text-xs mt-1 block text-right">2:25 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  One more thing - is there anything specific I should focus on before tomorrow?
                </p>
                <span className="text-charcoal-700 text-xs mt-1 block">2:30 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4 flex-row-reverse">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-3.jpg"
                alt="Coach"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-fern-600 rounded-2xl rounded-tr-sm p-3 shadow-sm">
                <p className="text-white text-sm leading-relaxed">
                  Just get good rest tonight! We&apos;ll be doing some high-intensity drills, so come with lots of
                  energy. 😊
                </p>
                <span className="text-white/80 text-xs mt-1 block text-right">2:35 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <img
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg"
                alt="Sarah"
                className="w-9 h-9 rounded-full object-cover flex-shrink-0"
              />
              <div className="max-w-[75%] bg-white border border-mocha-200 rounded-2xl rounded-tl-sm p-3 shadow-sm">
                <p className="text-charcoal-900 text-sm leading-relaxed">
                  Great progress today! See you next week 🎯
                </p>
                <span className="text-charcoal-700 text-xs mt-1 block">2:45 PM</span>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <div className="w-9 h-9 flex-shrink-0" />
              <div className="max-w-[75%] bg-mocha-50 rounded-2xl rounded-tl-sm p-3">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-charcoal-700 animate-typing" />
                  <span className="w-2 h-2 rounded-full bg-charcoal-700 animate-typing [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-charcoal-700 animate-typing [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          </section>
        </main>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-mocha-200 z-30 px-5 py-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setAttachmentOpen(true)}
              className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center flex-shrink-0"
              aria-label="Attach"
            >
              <i className="fa-solid fa-paperclip text-fern-600 text-lg" />
            </button>
            <button
              type="button"
              onClick={() => setQuickReplyOpen(true)}
              className="w-10 h-10 bg-mocha-50 rounded-lg flex items-center justify-center flex-shrink-0"
              aria-label="Quick replies"
            >
              <i className="fa-solid fa-bolt text-fern-600 text-lg" />
            </button>
            <div className="flex-1 relative">
              <textarea
                ref={textareaRef}
                placeholder="Type a message..."
                value={messageText}
                onChange={(e) => setMessageText(e.target.value)}
                onInput={handleTextareaInput}
                onKeyPress={handleKeyPress}
                rows={1}
                className="w-full bg-mocha-100 border border-mocha-200 rounded-xl px-4 py-3 text-sm text-charcoal-900 placeholder-charcoal-700 resize-none max-h-[120px]"
              />
            </div>
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

        {/* Quick reply modal */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white z-[35] transition-transform duration-300 ease-out rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)] max-h-[60vh] overflow-y-auto ${
            quickReplyOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-charcoal-900 font-bold text-base">Quick Replies</h3>
              <button
                type="button"
                onClick={() => setQuickReplyOpen(false)}
                className="w-8 h-8 bg-mocha-50 rounded-lg flex items-center justify-center"
                aria-label="Close"
              >
                <i className="fa-solid fa-times text-charcoal-900" />
              </button>
            </div>
            <div className="space-y-2">
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply.title}
                  type="button"
                  onClick={() => handleQuickReplySelect(reply.text)}
                  className="w-full bg-mocha-50 border border-mocha-200 rounded-lg p-4 text-left hover:bg-mocha-100"
                >
                  <div className="text-charcoal-900 font-semibold text-sm mb-1">{reply.title}</div>
                  <p className="text-charcoal-700 text-xs">{reply.text}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Attachment modal */}
        <div
          className={`fixed bottom-0 left-0 right-0 bg-white z-[35] transition-transform duration-300 ease-out rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.15)] ${
            attachmentOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-charcoal-900 font-bold text-base">Send Attachment</h3>
              <button
                type="button"
                onClick={() => setAttachmentOpen(false)}
                className="w-8 h-8 bg-mocha-50 rounded-lg flex items-center justify-center"
                aria-label="Close"
              >
                <i className="fa-solid fa-times text-charcoal-900" />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button type="button" className="flex flex-col items-center gap-2 bg-mocha-50 rounded-xl p-4 hover:bg-mocha-100">
                <div className="w-12 h-12 bg-fern-600/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-camera text-fern-600 text-xl" />
                </div>
                <span className="text-charcoal-900 text-xs font-semibold">Camera</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-2 bg-mocha-50 rounded-xl p-4 hover:bg-mocha-100">
                <div className="w-12 h-12 bg-brightFern-400/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-image text-brightFern-600 text-xl" />
                </div>
                <span className="text-charcoal-900 text-xs font-semibold">Gallery</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-2 bg-mocha-50 rounded-xl p-4 hover:bg-mocha-100">
                <div className="w-12 h-12 bg-yellowGreen-500/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-file text-yellowGreen-600 text-xl" />
                </div>
                <span className="text-charcoal-900 text-xs font-semibold">Document</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-2 bg-mocha-50 rounded-xl p-4 hover:bg-mocha-100">
                <div className="w-12 h-12 bg-fern-600/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-video text-fern-600 text-xl" />
                </div>
                <span className="text-charcoal-900 text-xs font-semibold">Video</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-2 bg-mocha-50 rounded-xl p-4 hover:bg-mocha-100">
                <div className="w-12 h-12 bg-brightFern-400/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-location-dot text-brightFern-600 text-xl" />
                </div>
                <span className="text-charcoal-900 text-xs font-semibold">Location</span>
              </button>
              <button type="button" className="flex flex-col items-center gap-2 bg-mocha-50 rounded-xl p-4 hover:bg-mocha-100">
                <div className="w-12 h-12 bg-yellowGreen-500/20 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-user text-yellowGreen-600 text-xl" />
                </div>
                <span className="text-charcoal-900 text-xs font-semibold">Contact</span>
              </button>
            </div>
          </div>
        </div>

        <DemoNavigation />
      </div>
    </RequireAuth>
  );
}
