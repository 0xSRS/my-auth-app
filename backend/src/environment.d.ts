// environment.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_HOST: string;
      API_KEY: string;
      PORT?: string;
      SECRET_KEY: string; // Optional variable
    }
  }
}

// Needed to make this a module
export {};
