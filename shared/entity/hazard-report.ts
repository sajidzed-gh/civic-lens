export default interface HazardReport {
  identifiedHazard: string;
  hazardDescription: string;
  safetyPrecautions: string[];
  recommendedActions: string[];
  legalContext: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
}
