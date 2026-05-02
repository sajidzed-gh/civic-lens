# 🛡️ CivicLens
### *Enhancing Community Safety Through AI-Powered Hazard Detection*

**CivicLens** is a robust community safety application designed to empower citizens to identify and report public hazards, such as littered needles and drug paraphernalia, using **Gemini 3 Flash**. By combining real-time AI image analysis with geospatial intelligence, the app provides immediate safety protocols and localized reporting steps to keep public spaces safe.

---

## 🚀 Overview
Public safety is a collective effort. CivicLens simplifies the process of identifying biohazards and notifying the correct authorities. 

*   **Analyze**: Upload images for instant AI verification of needles, syringes, and other biohazards.
*   **Safety First**: Receive immediate, expert-backed protocols before taking any action.
*   **Report**: Access localized, step-by-step instructions for city officials based on your current location[cite: 1].

---

## 🛠️ Tech Stack

### Frontend
- **React 18 & Vite**: For a high-performance, modern web experience[cite: 1].
- **Tailwind CSS**: Designed with a "Clean Utility / Minimal" aesthetic to foster transparency and trust[cite: 1].
- **Framer Motion**: Smooth transitions and interactive state changes via `motion/react`[cite: 1].
- **Lucide React**: Clear, accessible UI markers for better navigation[cite: 1].

### Backend & AI
- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **Gemini 3 Flash**: Powered for fast, multimodal analysis and structured JSON reporting[cite: 1].

---

## ✨ Key Features
*   **AI Hazard Identification**: Uses Gemini to analyze images for syringes and biohazards, assigning an urgency level from Low to Critical[cite: 1].
*   **Geospatial Intelligence**: Automatically detects your current location to provide localized context in the reporting prompt[cite: 1].
*   **Expert Safety Protocols**: Prominently displays critical "Safety First" guidelines (e.g., "Do not touch", "Keep children away")[cite: 1].
*   **Actionable Reporting**: Gives step-by-step instructions on who to call and how to report the hazard to city officials[cite: 1].
*   **Legal & Regulatory Context**: Includes AI-generated insights into local laws regarding biohazard disposal[cite: 1].

---

## ⚙️ Installation & Setup

### 1. Prerequisites
*   Node.js (v18 or higher)
*   A Google AI Studio API Key (for Gemini 3 Flash)

### 2. Clone and Install
```bash
git clone [https://github.com/your-username/CivicLens.git](https://github.com/your-username/CivicLens.git)
cd CivicLens

# Install Backend Dependencies
cd backend
npm install

# Install Frontend Dependencies
cd ../frontend
npm install

---

## ⚠️ Disclaimer

**CivicLens is an informational and reporting tool only.**

*   **Not a Professional Service**: This application does not replace emergency services or professional biohazard remediation teams [cite: 1].
*   **AI Limitations**: Hazard identification is performed by AI and may occasionally be inaccurate. Users should always exercise extreme caution regardless of the app''s analysis [cite: 1].
*   **No Physical Contact**: Users are strictly advised **never** to touch, move, or attempt to dispose of needles or drug paraphernalia themselves [cite: 1].
*   **Personal Risk**: The creators of CivicLens are not liable for any injuries or legal issues arising from the use of this application or the handling of public hazards [cite: 1].