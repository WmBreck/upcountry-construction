import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="contact-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Get Your Free Estimate Today</h2>
          <p class="section-subtitle">
            Ready to transform your home? Contact us for a free consultation and estimate
          </p>
        </div>
        
        <div class="contact-content">
          <div class="contact-info glass-panel">
            <h3 class="contact-title">Get In Touch</h3>
            
            <div class="contact-methods">
              <a href="tel:+18645551234" class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-info">
                  <div class="method-label">Call Us Now</div>
                  <div class="method-value">(864) 555-1234</div>
                </div>
              </a>
              
              <a href="sms:+18645551234" class="contact-method">
                <div class="method-icon">💬</div>
                <div class="method-info">
                  <div class="method-label">Text Us</div>
                  <div class="method-value">(864) 555-1234</div>
                </div>
              </a>
              
              <a href="mailto:info@upcountrybuilding.com" class="contact-method">
                <div class="method-icon">✉️</div>
                <div class="method-info">
                  <div class="method-label">Email Us</div>
                  <div class="method-value">info&#64;upcountryconstruction.com</div>
                </div>
              </a>
            </div>

            <div class="service-area">
              <h4 class="area-title">Service Areas</h4>
              <div class="areas">
                <span class="area">Greenville</span>
                <span class="area">Spartanburg</span>
                <span class="area">Greer</span>
                <span class="area">Simpsonville</span>
                <span class="area">Mauldin</span>
                <span class="area">Taylors</span>
                <span class="area">Boiling Springs</span>
                <span class="area">Duncan</span>
              </div>
            </div>

            <div class="emergency-banner glass-panel">
              <div class="banner-icon">🎯</div>
              <div class="banner-text">
                <strong>Limited Time Offer!</strong><br>
                Free consultation for upcountry residents this month
              </div>
            </div>
          </div>
          
          <form class="contact-form glass-panel" (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <h3 class="form-title">Request Your Free Estimate</h3>
            
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                [(ngModel)]="formData.name" 
                required 
                class="form-input">
            </div>
            
            <div class="form-group">
              <label for="phone">Phone Number *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                [(ngModel)]="formData.phone" 
                required 
                class="form-input">
            </div>
            
            <div class="form-group">
              <label for="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                [(ngModel)]="formData.email" 
                class="form-input">
            </div>
            
            <div class="form-group">
              <label for="service">Service Needed</label>
              <select id="service" name="service" [(ngModel)]="formData.service" class="form-input">
                <option value="">Select a service...</option>
                <option value="kitchen">Kitchen Remodeling</option>
                <option value="bathroom">Bathroom Renovation</option>
                <option value="addition">Home Addition</option>
                <option value="outdoor">Outdoor Living</option>
                <option value="whole-home">Whole Home Renovation</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Project Details</label>
              <textarea 
                id="message" 
                name="message" 
                [(ngModel)]="formData.message" 
                rows="4" 
                class="form-input"
                placeholder="Tell us about your project..."></textarea>
            </div>
            
            <button type="submit" class="submit-button" [disabled]="!contactForm.form.valid">
              <span class="button-icon">🚀</span>
              Get My Free Estimate
            </button>
            
            <p class="form-note">
              * Required fields. We'll contact you within 24 hours to schedule your free consultation.
            </p>
          </form>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-section {
      padding: 6rem 0;
      background: linear-gradient(135deg, 
        #2563eb 0%, 
        #1d4ed8 25%, 
        #0ea5e9 50%, 
        #06b6d4 75%, 
        #10b981 100%);
      background-size: 400% 400%;
      animation: gradientShift 35s ease infinite;
      position: relative;
    }

    .contact-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 2;
    }

    .section-header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .section-title {
      font-size: 3rem;
      font-weight: 800;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: rgba(255, 255, 255, 0.9);
      max-width: 600px;
      margin: 0 auto;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .contact-info {
      padding: 2.5rem;
    }

    .contact-title {
      font-size: 1.8rem;
      font-weight: 700;
      color: white;
      margin-bottom: 2rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .contact-methods {
      margin-bottom: 2.5rem;
    }

    .contact-method {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem;
      margin-bottom: 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 15px;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .contact-method:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateX(5px);
    }

    .method-icon {
      font-size: 1.5rem;
      width: 40px;
      text-align: center;
    }

    .method-label {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 0.2rem;
    }

    .method-value {
      font-size: 1.1rem;
      font-weight: 600;
      color: white;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .service-area {
      margin-bottom: 2rem;
    }

    .area-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .areas {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .area {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 15px;
      font-size: 0.85rem;
      font-weight: 500;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .emergency-banner {
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(255, 193, 7, 0.2);
      border: 1px solid rgba(255, 193, 7, 0.3);
    }

    .banner-icon {
      font-size: 2rem;
    }

    .banner-text {
      color: white;
      font-size: 0.95rem;
      line-height: 1.4;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .contact-form {
      padding: 2.5rem;
    }

    .form-title {
      font-size: 1.8rem;
      font-weight: 700;
      color: white;
      margin-bottom: 2rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      font-size: 0.95rem;
      font-weight: 600;
      color: white;
      margin-bottom: 0.5rem;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }

    .form-input {
      width: 100%;
      padding: 0.8rem 1rem;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 10px;
      background: rgba(255, 255, 255, 0.1);
      color: white;
      font-size: 1rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .form-input::placeholder {
      color: rgba(255, 255, 255, 0.6);
    }

    .form-input:focus {
      outline: none;
      border-color: rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.15);
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
    }

    .submit-button {
      width: 100%;
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      margin-bottom: 1rem;
    }

    .submit-button:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .submit-button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .button-icon {
      font-size: 1.2rem;
    }

    .form-note {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      line-height: 1.4;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @media (max-width: 768px) {
      .contact-section {
        padding: 4rem 0;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
      }

      .contact-info,
      .contact-form {
        padding: 2rem;
      }

      .areas {
        justify-content: center;
      }

      .emergency-banner {
        flex-direction: column;
        text-align: center;
        gap: 0.5rem;
      }
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // In a real application, you would send this data to your backend
    alert('Thank you for your inquiry! We\'ll contact you within 24 hours to schedule your free consultation.');
    
    // Reset form
    this.formData = {
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    };
  }
}