import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sticky-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sticky-cta" [class.visible]="isVisible">
      <div class="cta-content">
        <div class="cta-text">
          <strong>Ready to transform your home?</strong>
          <span>Get your free estimate today!</span>
        </div>
        <div class="cta-buttons">
          <a href="tel:+18645551234" class="cta-btn call">
            <span class="btn-icon">📞</span>
            Call
          </a>
          <a href="mailto:info@upcountryconstruction.com" class="cta-btn email">
            <span class="btn-icon">✉️</span>
            Email
          </a>
          <a href="sms:+18645551234" class="cta-btn text">
            <span class="btn-icon">💬</span>
            Text
          </a>
          <button class="cta-btn estimate" (click)="scrollToContact()">
            <span class="btn-icon">📋</span>
            Estimate
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .sticky-cta {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      transform: translateY(100%);
      transition: transform 0.3s ease;
      padding: 1rem 0;
    }

    .sticky-cta.visible {
      transform: translateY(0);
    }

    .cta-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .cta-text {
      display: flex;
      flex-direction: column;
      color: white;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .cta-text strong {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }

    .cta-text span {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .cta-buttons {
      display: flex;
      gap: 0.8rem;
    }

    .cta-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.8rem 1.2rem;
      border-radius: 25px;
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
      white-space: nowrap;
    }

    .cta-btn.call {
      background: linear-gradient(135deg, #ff6b6b, #ee5a24);
      color: white;
    }

    .cta-btn.text {
      background: linear-gradient(135deg, #4ecdc4, #44a08d);
      color: white;
    }

    .cta-btn.email {
      background: linear-gradient(135deg, #10b981, #059669);
      color: white;
    }

    .cta-btn.estimate {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }

    .btn-icon {
      font-size: 1rem;
    }

    @media (max-width: 768px) {
      .cta-content {
        flex-direction: column;
        gap: 0.8rem;
        text-align: center;
      }

      .cta-buttons {
        width: 100%;
        justify-content: center;
      }

      .cta-btn {
        flex: 1;
        justify-content: center;
        padding: 0.7rem 1rem;
        font-size: 0.85rem;
      }
    }

    @media (max-width: 480px) {
      .cta-buttons {
        flex-direction: column;
        gap: 0.5rem;
      }

      .cta-btn {
        width: 100%;
      }
    }
  `]
})
export class StickyCTAComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    
    // Show sticky CTA after scrolling past the hero section
    this.isVisible = scrollPosition > windowHeight * 0.8;
  }

  scrollToContact() {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}