import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFunctions, httpsCallable } from 'firebase/functions';

const firebaseConfig = {
  // You'll need to add your Firebase config here
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
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