import React, { useState, useRef, useEffect } from 'react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeaderSection } from './components/reporting/HeaderSection';
import { ImageUploader } from './components/reporting/ImageUploader';
import { LocationBar } from './components/reporting/LocationBar';
import { AnalysisReport } from './components/reporting/AnalysisReport';
//import { analyzeHazard, HazardReport } from './services/someService';
import HazardService  from './services/hazard';
import type HazardReport from '@shared/entity/hazard-report';


export default function App() {
  const [image, setImage] = useState<string | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<HazardReport | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const hazardService = new HazardService();

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.warn("Location access denied", err)
      );
    }
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result as string);
      setReport(null);
      setError(null);
    };
    reader.readAsDataURL(file);
  };

  const processImage = async () => {
    if (!image) return;
    setLoading(true);
    setError(null);
    try {
      const base64Data = image.split(',')[1];
      //const result = await analyzeHazard(base64Data, location || undefined);
      
      const result = await hazardService.AnalyzeHazardAPI(base64Data, location || undefined);
      setReport(result);
    } catch (err) {
      console.error("Analysis error:", err);
      setError("Analysis failed. Please try again with a clearer photo.");
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setImage(null);
    setReport(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar location={location} />

      <main className="max-w-7xl mx-auto p-8">
        <HeaderSection />

        <div className="grid grid-cols-12 gap-8">
          <section className="col-span-12 lg:col-span-7 flex flex-col gap-6">
            <ImageUploader 
              image={image}
              loading={loading}
              report={report}
              fileInputRef={fileInputRef}
              onFileUpload={handleFileUpload}
              onProcess={processImage}
              onReset={reset}
            />
            <LocationBar location={location} />
          </section>

          <section className="col-span-12 lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm flex-1 overflow-y-auto">
              <AnalysisReport 
                report={report} 
                loading={loading} 
                error={error} 
                onReset={reset} 
              />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}