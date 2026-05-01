import React from 'react';
import { ShieldAlert, MapPin } from 'lucide-react';

interface NavbarProps {
  location: { lat: number; lng: number } | null;
}

export const Navbar: React.FC<NavbarProps> = ({ location }) => (
  <nav id="nav-header" className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
        <ShieldAlert className="w-5 h-5 text-white" />
      </div>
      <span className="text-xl font-bold tracking-tight text-slate-800">
        CivicLens<span className="text-indigo-600">AI</span>
      </span>
    </div>
    <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-xs text-slate-600">
        <MapPin className="w-3.5 h-3.5 text-indigo-600" />
        {location ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}` : 'Detecting...'}
      </div>
      <div className="w-8 h-8 bg-slate-200 rounded-full hidden sm:block"></div>
    </div>
  </nav>
);