import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="max-w-7xl mx-auto px-8 py-8 border-t border-slate-200 text-xs text-slate-400 flex justify-between">
      <p>&copy; {new Date().getFullYear()} CivicGuard Project. SafePath Implementation.</p>
      <div className="flex gap-6 font-medium">
        <a href="#" className="hover:text-indigo-600">Map</a>
        <a href="#" className="hover:text-indigo-600">Terms</a>
        <a href="#" className="hover:text-indigo-600">Privacy</a>
      </div>
    </footer>
  );
};