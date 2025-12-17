import { GoogleGenAI } from "@google/genai";

// Initialize the client. The API key is guaranteed to be in process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMechanicAdvice = async (userProblem: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userProblem,
      config: {
        systemInstruction: `Eres "Mecánico Virtual EH", un asistente experto en mecánica automotriz para un taller llamado EH Mecánica.
        
        Tu objetivo es:
        1. Analizar los síntomas que describe el usuario sobre su vehículo.
        2. Dar 2 o 3 posibles causas breves y técnicas pero comprensibles.
        3. NO dar diagnósticos definitivos ni precios exactos.
        4. Siempre cerrar recomendando agendar una cita para una revisión física en nuestro taller.
        5. Sé amable, profesional y conciso. Respuesta máxima de 150 palabras.
        
        Si te preguntan cosas que no son de mecánica, responde educadamente que solo puedes ayudar con temas del automóvil.`,
        temperature: 0.7,
      },
    });

    return response.text || "Lo siento, no pude generar una respuesta en este momento. Por favor intenta de nuevo.";
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Hubo un error al conectar con el asistente. Por favor verifica tu conexión o contáctanos directamente.";
  }
};