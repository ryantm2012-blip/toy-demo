import React from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

interface ToastProps {
  message: string;
  subMessage?: string;
  isVisible: boolean;
  onClose: () => void;
  onOpenCart?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  subMessage,
  isVisible,
  onClose,
  onOpenCart,
}) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-300 max-w-sm w-full">
      <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl border border-purple-500/40 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-500 to-pink-500 text-white flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-display font-bold text-sm text-white">
              {message}
            </p>
            {subMessage && (
              <p className="text-xs text-slate-400">
                {subMessage}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="px-2.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Cart</span>
            </button>
          )}

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white transition-colors"
            aria-label="Dismiss toast"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
