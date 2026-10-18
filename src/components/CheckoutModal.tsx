import React, { useState } from 'react';
import { CartItem, OrderDetails } from '../types';
import { X, ShieldCheck, CheckCircle2, AlertTriangle, ArrowLeft, Printer, ShoppingBag, Sparkles } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: (order: OrderDetails) => void;
  onContinueShopping: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderComplete,
  onContinueShopping,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: 'Gauteng',
    postalCode: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal >= 500 ? 0 : 60;
  const total = subtotal + shipping;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    }
    if (!formData.address.trim()) errs.address = 'Delivery street address is required.';
    if (!formData.city.trim()) errs.city = 'City or town is required.';
    if (!formData.postalCode.trim()) errs.postalCode = 'Postal code is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const orderNumber = `PTE-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: OrderDetails = {
        orderNumber,
        date: new Date().toLocaleDateString('en-ZA', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }),
        items: [...items],
        subtotal,
        shipping,
        total,
        customerName: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}, ${formData.city}, ${formData.province}, ${formData.postalCode}`,
        notes: formData.notes,
      };

      setCompletedOrder(order);
      setIsSubmitting(false);
      onOrderComplete(order);
    }, 800);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog */}
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-purple-100 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {!completedOrder ? (
          <div>
            {/* Checkout Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-display font-bold text-xl">
                🧸
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-slate-900">
                  Demo Toy Checkout
                </h3>
                <p className="text-xs text-slate-500">
                  Enter your delivery information to simulate placing an order
                </p>
              </div>
            </div>

            {/* Crucial Transparent Demo Notice Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-900 text-xs flex items-start gap-3 mb-6">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <strong className="font-display font-bold block mb-0.5 text-amber-950">
                  DEMO PROTOTYPE ONLY
                </strong>
                <p className="leading-relaxed">
                  No real payment provider is connected to this site. No bank card details are requested, and no physical order or payment will actually be processed. This interface is provided for demonstration and layout evaluation.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sindi Khumalo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-2 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.name
                        ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. sindi@example.co.za"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-2 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Phone Number (South Africa) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 082 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`w-full px-4 py-2 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                      : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                  }`}
                />
                {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Delivery Street Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. 42 Sunshine Avenue, Rosebank"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className={`w-full px-4 py-2 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                    errors.address
                      ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                      : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                  }`}
                />
                {errors.address && <p className="text-[11px] text-rose-500 mt-1">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Town <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Johannesburg"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={`w-full px-3 py-2 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.city
                        ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                    }`}
                  />
                  {errors.city && <p className="text-[11px] text-rose-500 mt-1">{errors.city}</p>}
                </div>

                {/* Province */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Province
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Gauteng">Gauteng</option>
                    <option value="Western Cape">Western Cape</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Free State">Free State</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="North West">North West</option>
                    <option value="Northern Cape">Northern Cape</option>
                  </select>
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Postal Code <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="2196"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className={`w-full px-3 py-2 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.postalCode
                        ? 'border-rose-400 bg-rose-50/50 focus:ring-rose-400'
                        : 'border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-purple-500'
                    }`}
                  />
                  {errors.postalCode && <p className="text-[11px] text-rose-500 mt-1">{errors.postalCode}</p>}
                </div>
              </div>

              {/* Delivery Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Delivery Notes / Gift Message (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Please ring gate intercom or leave at front desk"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 bg-slate-50/50 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Order Items Breakdown */}
              <div className="pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-2xl">
                <h4 className="font-display font-bold text-sm text-slate-900 mb-2">
                  Basket Summary ({items.length} items)
                </h4>
                <div className="space-y-1.5 text-xs text-slate-600 max-h-36 overflow-y-auto pr-1">
                  {items.map((i) => (
                    <div key={i.product.id} className="flex justify-between items-center py-1 border-b border-slate-200/50">
                      <span className="truncate max-w-[260px]">
                        {i.quantity}x {i.product.name}
                      </span>
                      <span className="font-semibold tabular-nums text-slate-800">
                        R {i.product.price * i.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 mt-2 border-t border-slate-200 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span className="tabular-nums font-semibold">R {subtotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Simulated Shipping</span>
                    <span className="tabular-nums font-semibold">
                      {shipping === 0 ? <strong className="text-emerald-600">FREE</strong> : `R ${shipping}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm font-display font-bold text-slate-900 pt-1">
                    <span>Simulated Total</span>
                    <span className="text-purple-700 tabular-nums">R {total}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 text-slate-600 hover:text-slate-900 font-semibold text-xs rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Return to Cart
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-7 py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-bold text-sm rounded-2xl shadow-md shadow-purple-500/20 hover:shadow-lg disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Processing Demo Order...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Complete Demo Order</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        ) : (
          /* Simulated Order Confirmation View */
          <div className="text-center py-4 space-y-6 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
              🎉
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Simulated Order Success
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 mt-2">
                Thank You, {completedOrder.customerName}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                Your demo order has been logged successfully. Below is your simulated customer receipt.
              </p>
            </div>

            {/* Receipt Card */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-left space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-200 text-xs">
                <div>
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">Order Reference</span>
                  <strong className="font-display text-base text-purple-700 font-bold">{completedOrder.orderNumber}</strong>
                </div>
                <div className="mt-2 sm:mt-0 text-right sm:text-right">
                  <span className="text-slate-400 block uppercase font-bold text-[10px]">Date</span>
                  <span className="font-semibold text-slate-700">{completedOrder.date}</span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2 text-xs">
                {completedOrder.items.map((i) => (
                  <div key={i.product.id} className="flex justify-between text-slate-700">
                    <span>{i.quantity}x {i.product.name}</span>
                    <span className="font-semibold tabular-nums">R {i.product.price * i.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 space-y-1 text-xs">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-semibold">R {completedOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery</span>
                  <span className="tabular-nums font-semibold">
                    {completedOrder.shipping === 0 ? 'FREE' : `R ${completedOrder.shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-display font-bold text-slate-900 pt-2 border-t border-slate-200">
                  <span>Total Amount</span>
                  <span className="text-purple-700 tabular-nums">R {completedOrder.total}</span>
                </div>
              </div>

              {/* Shipping Details */}
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-600">
                <p><strong>Deliver to:</strong> {completedOrder.address}</p>
                <p><strong>Contact:</strong> {completedOrder.email} · {completedOrder.phone}</p>
                {completedOrder.notes && <p><strong>Notes:</strong> {completedOrder.notes}</p>}
              </div>
            </div>

            {/* Note banner */}
            <p className="text-[11px] text-slate-400 italic">
              *Notice: In a production store, this order would be transmitted to an inventory backend and trigger real dispatch alerts.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Print Receipt</span>
              </button>
              <button
                onClick={() => {
                  setCompletedOrder(null);
                  onContinueShopping();
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-display font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>Continue Toy Shopping</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
