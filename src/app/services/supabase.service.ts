import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseUrl = 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL
  private supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase anon key

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