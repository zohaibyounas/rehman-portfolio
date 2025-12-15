import React from 'react';

export function Card({ children, className = '', ...props }) {
    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 p-6 transition-all duration-300 hover:shadow-xl ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
