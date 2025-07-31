import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl = 'https://cmdegjiluyuqcbpsoclk.supabase.co';
  private supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtZGVnamlsdXl1cWNicHNvY2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwMDEzMTIsImV4cCI6MjA2OTU3NzMxMn0.mpNl9vaoAtgdcZdbXC5Xp4Zd21QjuzdkdTJ7HbjDp70';

  async getProjectAssistance(userInput: string, serviceType?: string): Promise<{suggestion: string, success: boolean}> {
    const apiUrl = `${this.supabaseUrl}/functions/v1/project-assistant`;

    const headers = {
      'Authorization': `Bearer ${this.supabaseAnonKey}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          userInput,
          serviceType
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Supabase function error:', error);
      throw error;
    }
  }
}