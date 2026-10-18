import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock, Instagram, Facebook, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please choose or type a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please enter a message with at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-white via-purple-50/20 to-amber-50/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-purple-700 font-display font-semibold text-xs tracking-wider uppercase mb-2">
            <MessageSquare className="w-4 h-4 text-purple-600" />
            <span>Say Hello</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            We’d Love to Hear From You!
          </h2>
          <p className="mt-2 text-slate-600 text-sm sm:text-base">
            Have a question about a toy, want birthday gift recommendations, or interested in stock updates? Drop us a note!
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 text-xs px-3.5 py-1.5 rounded-full border border-amber-200">
            <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
            <span>Contact details and social links below are placeholders to be customized by the business owner</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Details & Store Hours Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Contact Information
              </h3>
              <p className="text-xs text-slate-500">
                Official contact details must be provided by the store owner upon live domain launch.
              </p>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500">
                    Phone / WhatsApp (Sample)
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    +27 (0) 11 000 0000
                  </p>
                  <span className="text-[11px] text-teal-600 font-medium">Mon-Sat 08:30 – 17:00</span>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500">
                    Email Support (Sample)
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    hello@puritystoys.co.za
                  </p>
                  <span className="text-[11px] text-purple-600 font-medium">Responses within 24 business hours</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500">
                    Warehouse Location (Sample)
                  </h4>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    Gauteng / Western Cape, South Africa
                  </p>
                  <span className="text-[11px] text-slate-400">Online store dispatch centre</span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500">
                    Customer Care Hours
                  </h4>
                  <p className="text-xs text-slate-700 mt-0.5">
                    Monday to Friday: 08:30 – 17:00<br />
                    Saturday: 09:00 – 13:00 (Sundays Closed)
                  </p>
                </div>
              </div>

              {/* Social Channels Placeholders */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="font-display font-bold text-xs uppercase tracking-wider text-slate-500 mb-3">
                  Connect on Socials (Placeholders)
                </h4>
                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                    title="Instagram (Sample)"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-blue-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                    title="Facebook (Sample)"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-500 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-xs"
                    title="WhatsApp (Sample)"
                  >
                    <span className="text-lg">💬</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-sm relative">
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-slate-900">
                  Send a Message to Purity’s Team
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below. Note: In this demo interface, submissions are processed locally with a simulated receipt.
                </p>
              </div>

              {/* Success confirmation message */}
              {isSubmitted && (
                <div className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 animate-in fade-in">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <h4 className="font-display font-bold text-sm text-emerald-950">
                        Demo Message Received!
                      </h4>
                      <p className="text-xs text-emerald-800">
                        Thank you, <strong>{submittedData?.name}</strong>! Your message regarding &ldquo;{submittedData?.subject}&rdquo; was simulated and recorded locally for this demo store preview.
                      </p>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 underline mt-2 inline-block cursor-pointer"
                      >
                        Send another demo inquiry
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thabo Ndlovu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                          : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. thabo@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                          : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Inquiry Subject <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                    }`}
                  >
                    <option value="">Select a topic...</option>
                    <option value="Product Availability & Stock">Product Availability & Stock</option>
                    <option value="Age Recommendations & Gift Advice">Age Recommendations & Gift Advice</option>
                    <option value="Delivery & Order Inquiries">Delivery & Order Inquiries</option>
                    <option value="Wholesale or Birthday Party Orders">Wholesale or Birthday Party Orders</option>
                    <option value="General Hello & Feedback">General Hello & Feedback</option>
                  </select>
                  {errors.subject && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you're looking for or how we can help make play extra special..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.message
                        ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-semibold text-sm rounded-2xl shadow-md shadow-purple-500/20 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Demo Inquiry</span>
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
