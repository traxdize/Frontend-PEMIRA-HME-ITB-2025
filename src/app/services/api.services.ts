// src/services/api.service.ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN;

interface LoginResponse {
  ID?: string;
  error?: string;
  message?: string;
}

export const authService = {
  login: async (username: string, password: string): Promise<LoginResponse> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          pass: password,
          token: API_TOKEN,
        }),
      });

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Server connection error');
    }
  },

  checkVoterExists: async (username: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/is_there`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          token: API_TOKEN,
        }),
      });

      const data = await response.json();
      return data.data === "true";
    } catch (error) {
      throw new Error('Failed to check voter status');
    }
  },

  checkVoteStatus: async (username: string): Promise<boolean> => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/is_vote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          token: API_TOKEN,
        }),
      });

      const data = await response.json();
      return data.data === "true";
    } catch (error) {
      throw new Error('Failed to check vote status');
    }
  }
};