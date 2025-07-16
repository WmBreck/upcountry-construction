import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-content">
        <div class="glass-panel hero-panel">
          <div class="business-name">Upcountry Construction & Remodeling</div>
          <h1 class="hero-title">Transform Your Upcountry Home Today</h1>
          <p class="hero-subtitle">
            Expert construction & remodeling services with 15+ years of local expertise 
            in Greenville, Spartanburg, and surrounding upcountry communities
          </p>
          <div class="cta-buttons">
            <a href="tel:+18645551234" class="cta-button primary">
              <span class="cta-icon">📞</span>
              Call Now
            </a>
            <a href="mailto:info@upcountryconstruction.com" class="cta-button secondary">
              <span class="cta-icon">✉️</span>
              Email Us
            </a>
            <a href="sms:+18645551234" class="cta-button secondary">
              <span class="cta-icon">💬</span>
              Text Us
            </a>
            <button class="cta-button tertiary" (click)="scrollToContact()">
              <span class="cta-icon">📋</span>
              Free Estimate
            </button>
          </div>
        </div>
      </div>
      <div class="hero-stats">
        <div class="stat-item glass-panel">
          <div class="stat-number">150+</div>
          <div class="stat-label">Homes Remodeled</div>
        </div>
        <div class="stat-item glass-panel">
          <div class="stat-number">98%</div>
          <div class="stat-label">Customer Satisfaction</div>
        </div>
        <div class="stat-item glass-panel">
          <div class="stat-number">15+</div>
          <div class="stat-label">Years Experience</div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      overflow: hidden;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        #2563eb 0%, 
        #1d4ed8 25%, 
        #0ea5e9 50%, 
        #06b6d4 75%, 
        #10b981 100%);
      background-size: 400% 400%;
      animation: gradientShift 15s ease infinite;
      background-image: url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920');
      background-size: cover;
      background-position: center;
      background-blend-mode: overlay;
    }

    .hero-background::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.4) 0%, transparent 50%);
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 800px;
      margin-bottom: 3rem;
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
      transition: all 0.3s ease;
    }

    .hero-panel {
      padding: 3rem;
      animation: fadeInUp 1s ease-out;
    }

    .business-name {
      font-size: 1.2rem;
      font-weight: 600;
      color: rgba(255, 255, 255, 0.9);
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 1rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      color: white;
      margin-bottom: 1.5rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
      line-height: 1.1;
    }

    .hero-subtitle {
      font-size: 1.3rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2.5rem;
      line-height: 1.6;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }

    .cta-button.primary {
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      color: white;
    }

    .cta-button.secondary {
      background: linear-gradient(135deg, #4ecdc4, #44a08d);
      color: white;
    }

    .cta-button.tertiary {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .cta-icon {
      font-size: 1.2rem;
    }

    .hero-stats {
      display: flex;
      gap: 2rem;
      position: relative;
      z-index: 2;
      flex-wrap: wrap;
      justify-content: center;
    }

    .stat-item {
      padding: 1.5rem 2rem;
      text-align: center;
      min-width: 150px;
      animation: fadeInUp 1s ease-out;
    }

    .stat-item:nth-child(2) {
      animation-delay: 0.2s;
    }

    .stat-item:nth-child(3) {
      animation-delay: 0.4s;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: white;
      margin-bottom: 0.5rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .stat-label {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .hero-panel {
        padding: 2rem;
      }

      .cta-buttons {
        flex-direction: column;
        align-items: center;
      }

      .cta-button {
        width: 100%;
        max-width: 250px;
        justify-content: center;
      }

      .hero-stats {
        gap: 1rem;
      }

      .stat-item {
        min-width: 120px;
        padding: 1rem 1.5rem;
      }

      .stat-number {
        font-size: 2rem;
      }
    }
  `]
})
export class HeroComponent {
  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}