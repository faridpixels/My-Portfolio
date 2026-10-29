import React, { useState } from 'react';
import {
  Mail,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight,
  AlertCircle,
  Instagram,
  Info,
} from 'lucide-react';
import { CONTACT_INFO } from '../data/contactInfo';
import { ContactFormData } from '../types';
import { getContactFormWhatsAppUrl, getGeneralIntroWhatsAppUrl } from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    service: '',
    budget: '',
    description: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);
  const [submissionGuidance, setSubmissionGuidance] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(CONTACT_INFO.email);
        setCopiedEmail(true);
        setCopyFeedback('Email copied to clipboard!');
        setTimeout(() => {
          setCopiedEmail(false);
          setCopyFeedback(null);
        }, 3000);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = CONTACT_INFO.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopiedEmail(true);
          setCopyFeedback('Email copied to clipboard!');
          setTimeout(() => {
            setCopiedEmail(false);
            setCopyFeedback(null);
          }, 3000);
        } else {
          setCopyFeedback(`Could not auto-copy. Please write to: ${CONTACT_INFO.email}`);
        }
      }
    } catch {
      setCopyFeedback(`Please email directly at ${CONTACT_INFO.email}`);
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappUrl = getContactFormWhatsAppUrl(formData);

    // Open WhatsApp in new tab
    const win = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // User communication guidance: clarify that user must hit send in WhatsApp
    setSubmissionGuidance(
      'WhatsApp has been opened with your formatted project brief. Please click "Send" in WhatsApp to submit it to Farid.'
    );

    if (!win) {
      // Popup blocked or link failed to open
      setSubmissionGuidance(
        `If WhatsApp did not open automatically, you can email Farid directly at ${CONTACT_INFO.email}.`
      );
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#050914] transition-colors border-t border-slate-200 dark:border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="text-xs font-semibold tracking-wider uppercase text-electric dark:text-[#00CFFF]">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start Your Project with FaridPixelPro
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Have an upcoming project, design inquiry, or document formatting requirement?
            Fill out the brief below to connect instantly on WhatsApp, or send an email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Direct Communication Info (Left Column) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 dark:bg-[#071B3D]/40 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                Direct Contact Channels
              </h3>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 dark:text-white">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    <span>WhatsApp</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider">
                    Direct Chat
                  </span>
                </div>
                <div className="font-mono text-base font-semibold text-slate-800 dark:text-slate-200">
                  {CONTACT_INFO.phoneDisplay}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fastest response time for design briefs, quotations, and inquiries.
                </p>
                <div className="pt-2">
                  <a
                    href={getGeneralIntroWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-electric dark:text-[#00CFFF] hover:underline"
                  >
                    <span>Message on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 dark:text-white">
                    <Mail className="w-4 h-4 text-electric dark:text-[#00CFFF]" />
                    <span>Official Email</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                    Proposals &amp; Files
                  </span>
                </div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="block font-mono text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 hover:text-electric dark:hover:text-[#00CFFF] transition-colors break-all"
                >
                  {CONTACT_INFO.email}
                </a>

                {/* Copy Email Button */}
                <div className="pt-1 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                  {copyFeedback && (
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {copyFeedback}
                    </span>
                  )}
                </div>
              </div>

              {/* Instagram Placeholder (Hidden until configured as requested) */}
              {CONTACT_INFO.instagramUrl && (
                <div className="p-4 rounded-xl bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-900 dark:text-white">
                    <Instagram className="w-4 h-4 text-pink-500" />
                    <span>Instagram</span>
                  </div>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-electric dark:text-[#00CFFF] hover:underline"
                  >
                    View Profile →
                  </a>
                </div>
              )}

              {/* Client Reach Note */}
              <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2 pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>{CONTACT_INFO.availability}</span>
              </div>
            </div>
          </div>

          {/* Project Inquiry Form (Right Column) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 dark:bg-[#071B3D]/40 rounded-2xl border border-slate-200 dark:border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                Send a Project Brief
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Fill in the details below. When you submit, your brief is automatically formatted into WhatsApp for immediate discussion.
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-2.5 text-sm bg-white dark:bg-[#050914] border rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00CFFF] transition-all ${
                      errors.name ? 'border-red-500' : 'border-slate-300 dark:border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@example.com"
                    className={`w-full px-4 py-2.5 text-sm bg-white dark:bg-[#050914] border rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00CFFF] transition-all ${
                      errors.email ? 'border-red-500' : 'border-slate-300 dark:border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>


                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white gradient-brand rounded-xl hover:opacity-95 transition-all shadow-[0_0_20px_rgba(8,123,255,0.35)] active:scale-98 cursor-pointer whitespace-nowrap"
                  >
                    <span>Format &amp; Open in WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Guidance Banner (Clarifying user must hit send) */}
                {submissionGuidance && (
                  <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2.5 animate-in fade-in duration-200">
                    <Info className="w-4 h-4 text-electric dark:text-[#00CFFF] shrink-0 mt-0.5" />
                    <p>{submissionGuidance}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
