import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, ArrowRight, Ticket, Calendar, Users, Copy, Check, ShieldAlert, Sparkles } from 'lucide-react';
import { EVENTS, CLUBS } from '../data/campusData';

export default function RegistrationModal({
  isOpen,
  onClose,
  initialItem,
  initialType, // 'event' or 'club'
  onSuccessToast
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    branch: 'Computer Science & Engineering',
    yearOfStudy: 'Year 2 (Sophomore)',
    targetType: initialType || 'event',
    targetId: initialItem?.id || EVENTS[0].id,
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [copiedToken, setCopiedToken] = useState(false);

  useEffect(() => {
    if (initialItem) {
      setFormData((prev) => ({
        ...prev,
        targetType: initialType || 'event',
        targetId: initialItem.id,
      }));
    }
  }, [initialItem, initialType]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full legal or campus name is required.';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'College email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g., student@campus.edu).';
    }

    if (!formData.branch.trim()) {
      newErrors.branch = 'Please specify your branch or academic course.';
    }

    if (!formData.targetId) {
      newErrors.targetId = 'Please select a specific event or club.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate authentic client-side token generation and verification
    setTimeout(() => {
      const selectedItem =
        formData.targetType === 'event'
          ? EVENTS.find((evt) => evt.id === formData.targetId)
          : CLUBS.find((clb) => clb.id === formData.targetId);

      const passToken = `CMP-${Math.floor(1000 + Math.random() * 9000)}-${Date.now().toString().slice(-4)}`;

      const record = {
        token: passToken,
        attendeeName: formData.fullName,
        email: formData.email,
        branch: formData.branch,
        year: formData.yearOfStudy,
        type: formData.targetType,
        itemName: selectedItem ? (formData.targetType === 'event' ? selectedItem.title : selectedItem.name) : 'Campus Registry',
        venue: selectedItem?.venue || 'Campus Main Grounds',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      // Store simulated registration in localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('campus_registrations') || '[]');
        localStorage.setItem('campus_registrations', JSON.stringify([record, ...existing]));
      } catch (err) {
        console.warn('Storage not available', err);
      }

      setIsSubmitting(false);
      setSuccessData(record);
      if (onSuccessToast) {
        onSuccessToast({
          title: 'Demo Pass Generated',
          message: `Digital pass confirmed for ${record.attendeeName} (${record.token}).`,
          type: 'success',
        });
      }
    }, 750);
  };

  const handleCopyPass = () => {
    if (successData?.token) {
      navigator.clipboard.writeText(successData.token);
      setCopiedToken(true);
      setTimeout(() => setCopiedToken(false), 2000);
    }
  };

  const handleResetForAnother = () => {
    setSuccessData(null);
    setFormData({
      fullName: '',
      email: '',
      branch: 'Computer Science & Engineering',
      yearOfStudy: 'Year 2 (Sophomore)',
      targetType: 'event',
      targetId: EVENTS[0].id,
      notes: '',
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-obsidian/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl bg-charcoal border border-muted-stone/20 rounded-2xl shadow-glass-lg overflow-hidden my-auto z-10 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-charcoal/95 backdrop-blur-md border-b border-muted-stone/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-forest flex items-center justify-center text-lime font-mono text-xs">
                <Ticket className="w-3.5 h-3.5" />
              </div>
              <span className="font-display font-semibold text-base text-ivory">
                {successData ? 'Campus Pass Issued' : 'Campus Interest & RSVP Portal'}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg bg-obsidian border border-muted-stone/20 text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1">
            {successData ? (
              /* Success Digital Pass State */
              <div className="space-y-6 text-center">
                <div className="w-14 h-14 rounded-full bg-forest/40 border border-lime/40 text-lime flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-lime" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-2xl text-ivory mb-1">
                    Registration Confirmed
                  </h3>
                  <p className="text-xs text-muted-stone max-w-sm mx-auto">
                    Your student discovery interest has been logged for this browser session.
                  </p>
                </div>

                {/* Digital Ticket Representation */}
                <div className="p-5 rounded-2xl bg-obsidian border border-lime/30 text-left relative overflow-hidden shadow-glass-md">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-lime/5 rounded-full blur-xl pointer-events-none"></div>
                  
                  <div className="flex items-center justify-between pb-3 border-b border-muted-stone/15 mb-3 text-xs font-mono">
                    <span className="text-lime font-bold">CAMPUS / CULTURE DIGITAL PASS</span>
                    <span className="text-muted-stone">SESSION PASS</span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <div className="text-[10px] text-muted-stone uppercase">Selected Activity</div>
                      <div className="text-sm font-display font-semibold text-ivory mt-0.5 line-clamp-1">
                        {successData.itemName}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <div>
                        <div className="text-[10px] text-muted-stone uppercase">Attendee</div>
                        <div className="text-xs text-ivory truncate">{successData.attendeeName}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-stone uppercase">Academic Branch</div>
                        <div className="text-xs text-ivory truncate">{successData.branch}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-muted-stone/10">
                      <div>
                        <div className="text-[10px] text-muted-stone uppercase">Location / Venue</div>
                        <div className="text-xs text-ivory truncate">{successData.venue}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-muted-stone uppercase">Issued At</div>
                        <div className="text-xs text-ivory">{successData.timestamp}</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-muted-stone/15 flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-muted-stone uppercase">Pass Token</div>
                        <div className="text-sm font-bold text-lime tracking-wider">{successData.token}</div>
                      </div>
                      <button
                        onClick={handleCopyPass}
                        className="px-2.5 py-1.5 rounded-lg bg-charcoal border border-muted-stone/20 text-[11px] text-muted-stone hover:text-ivory hover:border-lime/50 hover:scale-105 active:scale-95 flex items-center gap-1.5 transition-all duration-200"
                      >
                        {copiedToken ? <Check className="w-3.5 h-3.5 text-lime" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedToken ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Honest Transparency Notice */}
                <div className="p-3.5 rounded-xl bg-charcoal/90 border border-muted-stone/20 text-xs text-muted-stone leading-relaxed flex items-start gap-2.5 text-left">
                  <ShieldAlert className="w-4 h-4 text-lime shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ivory">Demonstration Note:</strong> This is a client-side simulated registration designed for college portfolio evaluation. No real external server database is written to.
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={handleResetForAnother}
                    className="flex-1 py-3 px-4 rounded-xl border border-muted-stone/20 text-xs font-mono text-muted-stone hover:text-ivory hover:border-muted-stone/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
                  >
                    Register Another Activity
                  </button>
                  <button
                    onClick={onClose}
                    className="flex-1 py-3 px-4 rounded-xl bg-lime text-obsidian text-xs font-semibold hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* Registration Form */
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Notice banner */}
                <div className="p-3 rounded-xl bg-forest/20 border border-forest/40 text-xs text-muted-stone leading-relaxed flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime shrink-0"></span>
                  <span>Instant digital pass issued immediately on submission.</span>
                </div>

                {/* Target Type Toggle (Event vs Club) */}
                <div>
                  <label className="block text-xs font-mono text-muted-stone mb-1.5">
                    Registration Type
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-obsidian border border-muted-stone/20">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          targetType: 'event',
                          targetId: EVENTS[0].id,
                        }));
                      }}
                      className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
                        formData.targetType === 'event'
                          ? 'bg-forest text-lime border border-forest/60 shadow-sm'
                          : 'text-muted-stone hover:text-ivory hover:bg-charcoal'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Event RSVP</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          targetType: 'club',
                          targetId: CLUBS[0].id,
                        }));
                      }}
                      className={`py-2 px-3 rounded-lg text-xs font-mono font-medium transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 ${
                        formData.targetType === 'club'
                          ? 'bg-forest text-lime border border-forest/60 shadow-sm'
                          : 'text-muted-stone hover:text-ivory hover:bg-charcoal'
                      }`}
                    >
                      <Users className="w-3.5 h-3.5" />
                      <span>Club Membership</span>
                    </button>
                  </div>
                </div>

                {/* Specific Event or Club Dropdown */}
                <div>
                  <label className="block text-xs font-mono text-muted-stone mb-1.5">
                    Select {formData.targetType === 'event' ? 'Event' : 'Club'}
                  </label>
                  <select
                    value={formData.targetId}
                    onChange={(e) => setFormData({ ...formData, targetId: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian border border-muted-stone/20 hover:border-muted-stone/40 text-xs text-ivory focus:outline-none focus:border-lime/80 focus:ring-1 focus:ring-lime/30 transition-all duration-200"
                  >
                    {formData.targetType === 'event'
                      ? EVENTS.map((evt) => (
                          <option key={evt.id} value={evt.id}>
                            {evt.title} ({evt.date})
                          </option>
                        ))
                      : CLUBS.map((clb) => (
                          <option key={clb.id} value={clb.id}>
                            {clb.name} ({clb.category})
                          </option>
                        ))}
                  </select>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-mono text-muted-stone mb-1.5">
                    Full Name <span className="text-lime">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: null });
                    }}
                    placeholder="e.g. Atharav Dalvi"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-obsidian border text-xs text-ivory placeholder-muted-stone/50 hover:border-muted-stone/40 focus:outline-none focus:ring-1 focus:ring-lime/30 transition-all duration-200 ${
                      errors.fullName ? 'border-red-500/80 focus:border-red-500' : 'border-muted-stone/20 focus:border-lime'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* College Email */}
                <div>
                  <label className="block text-xs font-mono text-muted-stone mb-1.5">
                    College / Institutional Email <span className="text-lime">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: null });
                    }}
                    placeholder="student@campus.edu"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-obsidian border text-xs text-ivory placeholder-muted-stone/50 hover:border-muted-stone/40 focus:outline-none focus:ring-1 focus:ring-lime/30 transition-all duration-200 ${
                      errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-muted-stone/20 focus:border-lime'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Branch and Year of Study (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-muted-stone mb-1.5">
                      Academic Branch / Major
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-obsidian border border-muted-stone/20 hover:border-muted-stone/40 text-xs text-ivory focus:outline-none focus:border-lime/80 focus:ring-1 focus:ring-lime/30 transition-all duration-200"
                    >
                      <option value="Computer Science & Engineering">Computer Science & Eng</option>
                      <option value="Mechanical & Mechatronics">Mechanical & Mechatronics</option>
                      <option value="Electrical & Electronics">Electrical & Electronics</option>
                      <option value="Architecture & Built Environments">Architecture & Built Env</option>
                      <option value="Applied Design & Visual Arts">Applied Design & Visual Arts</option>
                      <option value="Physics & Mathematics">Physics & Mathematics</option>
                      <option value="Biotechnology & Ecology">Biotechnology & Ecology</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-muted-stone mb-1.5">
                      Year of Study
                    </label>
                    <select
                      value={formData.yearOfStudy}
                      onChange={(e) => setFormData({ ...formData, yearOfStudy: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-obsidian border border-muted-stone/20 hover:border-muted-stone/40 text-xs text-ivory focus:outline-none focus:border-lime/80 focus:ring-1 focus:ring-lime/30 transition-all duration-200"
                    >
                      <option value="Year 1 (Freshman)">Year 1 (Freshman)</option>
                      <option value="Year 2 (Sophomore)">Year 2 (Sophomore)</option>
                      <option value="Year 3 (Junior)">Year 3 (Junior)</option>
                      <option value="Year 4 (Senior)">Year 4 (Senior)</option>
                      <option value="Postgraduate / PhD">Postgraduate / PhD</option>
                    </select>
                  </div>
                </div>

                {/* Additional Note or Portfolio Link */}
                <div>
                  <label className="block text-xs font-mono text-muted-stone mb-1.5">
                    What excites you about joining or attending? (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Interested in robotics hardware / previously built quadrotors..."
                    className="w-full px-3.5 py-2 rounded-xl bg-obsidian border border-muted-stone/20 hover:border-muted-stone/40 text-xs text-ivory placeholder-muted-stone/50 focus:outline-none focus:border-lime/80 focus:ring-1 focus:ring-lime/30 transition-all duration-200 resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-lime text-obsidian font-semibold text-xs tracking-wide hover:bg-lime-hover hover:shadow-lime-glow hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-200 shadow-sm flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-obsidian border-t-transparent rounded-full animate-spin"></span>
                        <span>Verifying & Generating Pass...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Registration & Get Pass</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

