import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationBarProps {
  location: { lat: number; lng: number } | null;
}

export const LocationBar: React.FC<LocationBarProps> = ({ location }) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
        <MapPin className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-slate-800">
          {location ? 'Active Reporting Site' : 'Acquiring Location...'}
        </h4>
        <p className="text-xs text-slate-500 font-mono">
          {location ? `${location.lat.toFixed(6)}° N, ${location.lng.toFixed(6)}° W` : 'Waiting for GPS signal...'}
        </p>
      </div>
      <div className="text-right">
        <span className="text-[10px] uppercase tracking-widest text-slate-400 block mb-1">Status</span>
        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
          {location ? 'Connected' : 'Standby'}
        </span>
      </div>
    </div>
  );
};