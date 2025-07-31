import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  // Replace these with your actual Firebase config values
  apiKey: "AIzaSyBvOkBH0ImXbtzQi5KW2lHqYK4c-MtKQOY",
  authDomain: "upcountry-contractors.firebaseapp.com",
  projectId: "upcountry-contractors",
  storageBucket: "upcountry-contractors.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456789012345"
};

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private app = initializeApp(firebaseConfig);
  private functions = getFunctions(this.app);

  async getProjectAssistance(userInput: string, serviceType?: string): Promise<{suggestion: string, success: boolean}> {
    const projectAssistant = httpsCallable(this.functions, 'projectAssistant');
    
    try {
      const result = await projectAssistant({
        userInput,
        serviceType
      });
      
      return result.data as {suggestion: string, success: boolean};
    } catch (error) {
      console.error('Firebase function error:', error);
      throw error;
    }
  }
}