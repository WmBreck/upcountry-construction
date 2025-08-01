import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../services/supabase.service';

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
              <a href="tel:+16783868951" class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-info">
                  <div class="method-label">Call Us Now</div>
                  <div class="method-value">(678) 386-8951</div>
                </div>
              </a>
              
              <a href="sms:+16783868951" class="contact-method">
                <div class="method-icon">💬</div>
                <div class="method-info">
                  <div class="method-label">Text Us</div>
                  <div class="method-value">(678) 386-8951</div>
                </div>
              </a>
              
              <a href="mailto:e.garrett.lovin@gmail.com" class="contact-method">
                <div class="method-icon">✉️</div>
                <div class="method-info">
                  <div class="method-label">Email Us</div>
                  <div class="method-value">e.garrett.lovin&#64;gmail.com</div>
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
                <option value="repair">Home Repair</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div class="form-group">
              <label for="message">Project Details</label>
              <div class="textarea-container">
              <textarea 
                id="message" 
                name="message" 
                [(ngModel)]="formData.message" 
                rows="4" 
                class="form-input"
                placeholder="Tell us about your project..."></textarea>
                <button 
                  type="button" 
                  class="ai-assist-btn" 
                  (click)="getAIAssistance()"
                  [disabled]="!formData.message.trim() || isLoadingAI">
                  <span class="ai-icon">🤖</span>
                  {{ isLoadingAI ? 'Getting AI Help...' : 'AI Assist' }}
                </button>
              </div>
              
              <div class="ai-suggestion" *ngIf="aiSuggestion">
                <div class="suggestion-header">
                  <span class="suggestion-icon">💡</span>
                  <strong>AI Suggestion:</strong>
                </div>
                <div class="suggestion-content">{{ aiSuggestion }}</div>
                <button type="button" class="use-suggestion-btn" (click)="useSuggestion()">
                  Use This Suggestion
                </button>
              </div>
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

    .textarea-container {
      position: relative;
    }

    .ai-assist-btn {
      position: absolute;
      top: 8px;
      right: 8px;
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
      border: none;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .ai-assist-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .ai-assist-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .ai-icon {
      font-size: 1rem;
    }

    .ai-suggestion {
      margin-top: 1rem;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.3);
      border-radius: 10px;
      padding: 1rem;
      backdrop-filter: blur(10px);
    }

    .suggestion-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.8rem;
      color: white;
      font-size: 0.95rem;
    }

    .suggestion-icon {
      font-size: 1.2rem;
    }

    .suggestion-content {
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.5;
      margin-bottom: 1rem;
      font-size: 0.9rem;
      white-space: pre-wrap;
    }

    .use-suggestion-btn {
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      border: none;
      border-radius: 20px;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    .use-suggestion-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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
  constructor(private supabaseService: SupabaseService) {}

  formData = {
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  };

  isLoadingAI = false;
  aiSuggestion = '';

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

  async getAIAssistance() {
    if (!this.formData.message.trim()) {
      alert('Please enter some project details first before using AI assistance.');
      return;
    }

    this.isLoadingAI = true;
    this.aiSuggestion = '';

    try {
      const result = await this.supabaseService.getProjectAssistance(this.formData.message, this.formData.service);
      if (result.success) {
        this.aiSuggestion = result.suggestion;
      } else {
        // Use fallback response when API fails
        this.aiSuggestion = this.getFallbackSuggestion(this.formData.message, this.formData.service);
      }
    } catch (error) {
      console.error('AI assistance error:', error);
      // Use fallback response when there's an error
      this.aiSuggestion = this.getFallbackSuggestion(this.formData.message, this.formData.service);
    } finally {
      this.isLoadingAI = false;
    }
  }
  useSuggestion() {
    if (this.aiSuggestion) {
      this.formData.message = this.aiSuggestion;
      this.aiSuggestion = '';
    }
  }

  getFallbackSuggestion(message: string, serviceType: string): string {
    const input = message.toLowerCase();
    
    // Kitchen remodeling suggestions
    if (input.includes('kitchen') || serviceType === 'kitchen') {
      return `**Kitchen Remodeling Project Analysis**

Based on your input, here are key considerations for your kitchen project:

**Project Scope Questions:**
- Are you planning a full renovation or partial update?
- Do you want to change the kitchen layout or keep existing footprint?
- What's your priority: functionality, aesthetics, or both?

**Important Details to Consider:**
- Cabinet style and material preferences
- Countertop material (granite, quartz, marble)
- Appliance package and energy efficiency needs
- Lighting plan (task, ambient, accent)
- Flooring coordination with rest of home

**Timeline & Budget Considerations:**
- Full kitchen remodel: 4-8 weeks
- Partial updates: 2-4 weeks
- Budget range varies significantly based on finishes and scope

**Next Steps:**
Please provide more details about your specific goals, budget range, and timeline preferences so we can create a more detailed project plan.`;
    }
    
    // Bathroom renovation suggestions
    if (input.includes('bathroom') || serviceType === 'bathroom') {
      return `**Bathroom Renovation Project Analysis**

Your bathroom project considerations:

**Key Questions:**
- Is this a master bath, guest bath, or powder room?
- Do you want to reconfigure the layout?
- Are you interested in accessibility features?

**Important Elements:**
- Shower/tub preferences (walk-in shower, soaking tub)
- Vanity size and storage needs
- Tile selections for floors and walls
- Lighting and ventilation requirements
- Plumbing fixture quality and style

**Timeline Expectations:**
- Full bathroom renovation: 2-4 weeks
- Partial updates: 1-2 weeks

**Considerations for Upstate SC:**
- Humidity control is important
- Consider resale value in local market

Let us know your specific vision and we'll help refine the project details.`;
    }
    
    // Home addition suggestions
    if (input.includes('addition') || input.includes('add room') || serviceType === 'addition') {
      return `**Home Addition Project Analysis**

For your home addition project:

**Planning Considerations:**
- What type of space are you adding? (bedroom, family room, office)
- Do you want the addition to match existing architecture?
- How will this connect to your current home layout?

**Important Factors:**
- Foundation requirements and site conditions
- Electrical and HVAC integration
- Permits and local building codes
- Roofline integration with existing structure

**Timeline & Process:**
- Design and permitting: 4-8 weeks
- Construction: 8-16 weeks depending on size
- Weather considerations for outdoor work

**Local Considerations:**
- Greenville/Spartanburg area building codes
- HOA requirements if applicable
- Utility access and connections

Please share more about the intended use and size of your addition for a more detailed assessment.`;
    }
    
    // Outdoor living suggestions
    if (input.includes('deck') || input.includes('patio') || input.includes('outdoor') || serviceType === 'outdoor') {
      return `**Outdoor Living Project Analysis**

For your outdoor living space:

**Design Questions:**
- What's the primary use? (entertaining, relaxation, dining)
- Do you want covered or open space?
- How does this connect to your indoor living areas?

**Material Considerations:**
- Decking material (composite, wood, stone)
- Railing style and height requirements
- Lighting for evening use
- Weather protection options

**Special Features:**
- Outdoor kitchen or grilling area
- Fire pit or fireplace
- Built-in seating or planters
- Pergola or shade structures

**Climate Considerations for Upstate SC:**
- Materials that handle humidity and temperature changes
- Drainage planning for heavy rains
- Seasonal use optimization

**Timeline:**
- Simple deck: 1-2 weeks
- Complex outdoor living space: 3-6 weeks

Tell us more about your vision and how you plan to use the space!`;
    }
    
    // Home repair suggestions
    if (input.includes('repair') || input.includes('fix') || serviceType === 'repair') {
      return `**Home Repair Project Analysis**

For your home repair needs:

**Common Repair Categories:**
- Plumbing issues (leaks, clogs, fixture replacement)
- Electrical problems (outlets, switches, lighting)
- HVAC maintenance and repairs
- Roofing and gutter issues
- Drywall and paint touch-ups
- Flooring repairs and replacement

**Assessment Questions:**
- Is this an emergency repair or planned maintenance?
- How long has the issue been present?
- Have you noticed any related problems?

**Safety Considerations:**
- Electrical and plumbing work may require permits
- Some repairs need immediate attention to prevent damage
- Professional assessment recommended for structural issues

**Timeline Expectations:**
- Emergency repairs: Same day to 48 hours
- Standard repairs: 1-3 days
- Complex repairs: 1-2 weeks

**Local Expertise:**
- Licensed professionals for electrical/plumbing
- Knowledge of local building codes
- Quality materials suited for SC climate

Please describe the specific repair issue so we can provide targeted guidance and timeline estimates.`;
    }
    
    // General project suggestions
    return `**Project Planning Assistant**

Thank you for reaching out about your project. To provide the best guidance, we'd like to understand:

**Project Basics:**
- What type of project are you considering?
- What's driving this project? (functionality, aesthetics, damage repair)
- What's your ideal timeline?

**Our Specialties:**
- Kitchen Remodeling
- Bathroom Renovation  
- Home Additions
- Outdoor Living Spaces
- Home Repair
- Whole Home Renovation

**Next Steps:**
Please provide more details about your specific project goals, and we'll help you create a comprehensive project description that covers all the important considerations.

**Why Choose Upcountry Contractors:**
- Local expertise in Greenville & Spartanburg areas
- Quality craftsmanship and materials
- Transparent communication throughout the process
- Licensed and insured professionals

We're here to help bring your vision to life!`;
  }
}