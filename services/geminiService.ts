import { GoogleGenAI, Type } from "@google/genai";
import { NeuralCommand } from '../types';

// Fallback response if API key is missing or fails
const MOCK_RESPONSE: NeuralCommand = {
  action: 'info',
  message: 'NEURAL LINK UNSTABLE (API KEY MISSING). FALLING BACK TO LOCAL SHELL. COMMAND NOT RECOGNIZED.',
};

// Safe access to process.env for browser environments
const getApiKey = (): string | undefined => {
  try {
    if (typeof process !== 'undefined' && process.env) {
      return process.env.API_KEY;
    }
  } catch (e) {
    // process is not defined
  }
  return undefined;
};

export const processCommand = async (command: string): Promise<NeuralCommand> => {
  const apiKey = getApiKey();
  const lower = command.toLowerCase();

  // 1. Check for Help/HR commands immediately (works with or without API key)
  if (['help', 'hr', 'commands', 'menu', 'ls', 'list'].some(k => lower.includes(k))) {
    return {
      action: 'info',
      message: `
AVAILABLE PROTOCOLS:
> "IDENTITY" or "ABOUT"    :: Bio & Skills (Chirag Koyande)
> "MODULES" or "PROJECTS"  :: Opportune, LinkSniff, SentinelWatch
> "RESOURCES" or "LEARN"   :: Knowledge Base (Videos/Notes)
> "SIGNAL" or "CONTACT"    :: chiragk.dev@gmail.com
> "ROOT" or "HOME"         :: Return to Core
> "SUDO LOGIN"             :: Admin Access
      `.trim()
    };
  }
  
  // Admin Login Shortcut (Pre-AI check)
  if (lower.includes('sudo login') || lower === 'admin') {
      return { action: 'navigate', target: 'ADMIN', message: 'INITIATING ROOT ACCESS PROTOCOL...' };
  }

  // 2. Fallback logic if NO API KEY
  if (!apiKey) {
    console.warn("API Key missing, using mock response.");
    if (lower.includes('home') || lower.includes('root')) return { action: 'navigate', target: 'HOME', message: 'Rerouting to root...' };
    if (lower.includes('about') || lower.includes('who') || lower.includes('bio') || lower.includes('cv') || lower.includes('resume') || lower.includes('cert')) return { action: 'navigate', target: 'ABOUT', message: 'Accessing profile: Chirag Koyande...' };
    if (lower.includes('project') || lower.includes('work') || lower.includes('code') || lower.includes('opportune')) return { action: 'navigate', target: 'PROJECTS', message: 'Decrypting project files...' };
    if (lower.includes('resource') || lower.includes('learn') || lower.includes('video') || lower.includes('study')) return { action: 'navigate', target: 'RESOURCES', message: 'Opening data archives...' };
    if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) return { action: 'navigate', target: 'CONTACT', message: 'Opening secure channel...' };
    return MOCK_RESPONSE;
  }

  // 3. Gemini AI Logic
  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Input: "${command}"`,
      config: {
        systemInstruction: `You are the CLI OS for Chirag Koyande, a "Builder + Breaker" Hybrid Engineer.
You represent Chirag, an IT Engineering student from Pune who combines Full-Stack Development with Cybersecurity.

Identity:
- Name: Chirag Koyande
- Role: Student / Hybrid Engineer
- Focus: Secure Engineering, DevSecOps, Production-grade systems.
- Projects: Opportune (Aggregator), LinkSniff (Phishing detection), SentinelWatch (SIEM).

Analyze the user's intent and return a JSON object.

Possible actions: 
- 'navigate' (targets: 'HOME', 'PROJECTS', 'ABOUT', 'CONTACT', 'RESOURCES', 'ADMIN')
- 'info' (general chit-chat, help, or listing commands)
- 'error' (unknown command)

Response rules:
- Be confident, technical, and concise.
- Use "hacker" jargon (injecting, mounting, decrypting).
- If asked about "Opportune", "LinkSniff", or "SentinelWatch", navigate to PROJECTS.
- If asked about learning, videos, notes, or "Knowledge Base", navigate to RESOURCES.
- If asked about "Admin", "Root", or "Sudo", navigate to ADMIN (but warn them it is restricted).
- If asked who I am, navigate to ABOUT.
- If asked for email/contact, navigate to CONTACT.
- If asked for HR/Recruiter help, return action 'info' with commands.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            action: { type: Type.STRING, enum: ['navigate', 'info', 'error'] },
            target: { type: Type.STRING, nullable: true },
            message: { type: Type.STRING },
          },
          required: ['action', 'message']
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as NeuralCommand;
    }
    return { action: 'error', message: 'DATA CORRUPTION DETECTED.' };

  } catch (error) {
    console.error("Gemini Error:", error);
    return { action: 'error', message: 'NEURAL UPLINK FAILED.' };
  }
};