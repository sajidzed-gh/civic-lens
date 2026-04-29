import React from 'react';
import { Camera, Trash2, ArrowRight, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import type { HazardReport } from '../../services/someService';

interface ImageUploaderProps {
  image: string | null;
  loading: boolean;
  report: HazardReport | null;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onProcess: () => void;
  onReset: () => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  image, loading, report, fileInputRef, onFileUpload, onProcess, onReset
}) => {
  return (
    <div className="relative group">
      <input type="file" accept="image/*" className="hidden" ref={fileInputRef} onChange={onFileUpload} />
      
      {!image ? (
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full h-[480px] bg-white border border-slate-200 rounded-3xl flex flex-col items-center justify-center gap-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all group"
        >
          <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Camera className="w-10 h-10" />
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-slate-800">Capture Incident</p>
            <p className="text-sm text-slate-400">Tap to identify littered needles or hazardous waste</p>
          </div>
        </button>
      ) : (
        <div className="relative w-full h-[480px] bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-200">
          <img src={image} alt="Preview" className="w-full h-full object-cover" />
          
          {!report && !loading && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-indigo-400 rounded-lg border-dashed opacity-80 pointer-events-none">
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-indigo-500"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-indigo-500"></div>
            </div>
          )}

          <button onClick={onReset} className="absolute top-6 right-6 p-2.5 bg-white/90 backdrop-blur rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors shadow-lg z-10">
            <Trash2 className="w-5 h-5" />
          </button>

          <AnimatePresence>
            {!report && !loading && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="absolute bottom-6 left-6 right-6">
                <button onClick={onProcess} className="w-full py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all active:scale-95">
                  Transmit for Analysis <ArrowRight className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {loading && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center text-white">
              <Loader2 className="w-12 h-12 animate-spin mb-4" />
              <span className="font-bold text-lg">Processing Data...</span>
            </div>
          )}

          {report && (
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <span className="font-semibold">Incident: {report.identifiedHazard}</span>
                </div>
                <span className="text-xs font-mono opacity-80 uppercase">{report.urgency} Priority</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};