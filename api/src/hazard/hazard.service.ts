/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';
import HazardReport from '../entity/hazard-report';

@Injectable()
export class HazardService {
  private ai: GoogleGenerativeAI;

  constructor() {
    this.ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
  }
  async analyzeHazard(
    base64Image: string,
    location?: { lat: number; lng: number },
  ): Promise<HazardReport> {
    const modelName = 'gemini-1.5-flash';

    const prompt = `Analyze this image for public safety hazards. 
  Focus on identifying if there are discarded needles (syringes) or other drug paraphernalia.
  Provide a detailed report including:
  1. Specifically what was identified.
  2. Immediate safety precautions for a citizen standing nearby.
  3. Action items (how to report, who to call).
  4. Local laws or regulations that might apply (general US/City context if specific location is not provided).
  5. Urgency level.
  
  ${location ? `The coordinates are: Lat ${location.lat}, Lng ${location.lng}` : 'Location was not provided.'}
  `;

    const model = this.ai.getGenerativeModel({
      model: modelName,
      generationConfig: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            identifiedHazard: { type: SchemaType.STRING },
            hazardDescription: { type: SchemaType.STRING },
            safetyPrecautions: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
            recommendedActions: {
              type: SchemaType.ARRAY,
              items: { type: SchemaType.STRING },
            },
            legalContext: { type: SchemaType.STRING },
            urgency: {
              type: SchemaType.STRING,
              format: 'enum',
              enum: ['low', 'medium', 'high', 'critical'],
            },
          },
          required: [
            'identifiedHazard',
            'hazardDescription',
            'safetyPrecautions',
            'recommendedActions',
            'legalContext',
            'urgency',
          ],
        },
      },
    });

    const imagePart = {
      inlineData: {
        data: base64Image,
        mimeType: 'image/jpeg',
      },
    };

    const result = await model.generateContent([prompt, imagePart]);

    const response = result.response;
    const text = response.text();

    if (!text) {
      throw new Error('Failed to analyze image');
    }

    return JSON.parse(text.trim()) as HazardReport;
  }
}
