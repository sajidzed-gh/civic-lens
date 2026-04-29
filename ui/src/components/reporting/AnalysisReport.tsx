import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle } from 'lucide-react';
import type { HazardReport } from '../../services/someService';

interface AnalysisReportProps {
  report: HazardReport | null;
  loading: boolean;
  error: string | null;
  onReset: () => void;
}

export const AnalysisReport: React.FC<AnalysisReportProps> = ({ report, loading, error, onReset }) => {
  if (!report && !loading) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-12">
        <ShieldAlert className="w-16 h-16 mb-4 text-slate-300" />
        <h2 className="text-xl font-bold text-slate-800">No Active Analysis</h2>
        <p className="text-sm max-w-[200px]">Upload an image to generate a detailed safety report.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-600 rounded-2xl flex items-center gap-3">
        <AlertTriangle className="w-5 h-5" />
        <p className="text-sm font-medium">{error}</p>
      </div>
    );
  }

  if (!report) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-800">Analysis Report</h2>
      <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-600 text-sm">
        {report.hazardDescription}
      </div>

      <div className="p-4 bg-indigo-50/30 rounded-2xl border border-indigo-100">
        <h3 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-3">Legal Framework</h3>
        <p className="text-sm text-slate-700 font-medium">{report.legalContext}</p>
      </div>

      <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-4">Required Actions</h3>
        <ul className="space-y-3">
          {report.recommendedActions.map((action, i) => (
            <li key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] mt-0.5 shrink-0 font-bold">{i + 1}</div>
              <p className="text-sm text-slate-700 font-medium">{action}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-5 bg-slate-900 rounded-2xl text-white">
        <div className="flex items-center gap-2 mb-4">
          <ShieldAlert className="w-4 h-4 text-red-500" />
          <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Safety Protocols</h3>
        </div>
        <ul className="space-y-2">
          {report.safetyPrecautions.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
              <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="space-y-3 pt-4">
        <button className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl flex items-center justify-center gap-2 text-lg hover:bg-indigo-700 transition-all">
          <CheckCircle className="w-5 h-5" /> Mark Resolved
        </button>
        <button onClick={onReset} className="w-full py-4 bg-white text-slate-600 border border-slate-200 rounded-2xl font-semibold text-sm hover:bg-slate-50 transition-colors">
          Discard Incident
        </button>
      </div>
    </div>
  );
};