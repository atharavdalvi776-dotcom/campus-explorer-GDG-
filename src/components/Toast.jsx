import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toasts, onDismiss }) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => {
          const isError = toast.type === 'error';
          const isSuccess = toast.type === 'success';

          return (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={`pointer-events-auto p-4 rounded-xl shadow-glass-md flex items-start gap-3 border ${
                isError
                  ? 'bg-charcoal border-red-500/40 text-ivory'
                  : isSuccess
                  ? 'bg-charcoal border-lime/40 text-ivory'
                  : 'bg-charcoal border-muted-stone/20 text-ivory'
              }`}
            >
              <div className="shrink-0 mt-0.5">
                {isError ? (
                  <AlertCircle className="w-5 h-5 text-red-400" />
                ) : isSuccess ? (
                  <CheckCircle2 className="w-5 h-5 text-lime" />
                ) : (
                  <Info className="w-5 h-5 text-muted-stone" />
                )}
              </div>
              <div className="flex-1 text-sm">
                {toast.title && <div className="font-semibold text-ivory">{toast.title}</div>}
                <div className="text-muted-stone text-xs leading-relaxed mt-0.5">{toast.message}</div>
              </div>
              <button
                onClick={() => onDismiss(toast.id)}
                className="text-muted-stone hover:text-ivory transition-colors p-1"
                aria-label="Dismiss notification"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

