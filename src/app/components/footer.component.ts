import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3 class="footer-title">Upcountry Construction & Remodeling</h3>
            <p class="footer-description">
              Transforming homes across upcountry South Carolina with quality craftsmanship 
              and exceptional service for over 15 years.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" aria-label="Facebook">📘</a>
              <a href="#" class="social-link" aria-label="Instagram">📷</a>
              <a href="#" class="social-link" aria-label="LinkedIn">💼</a>
              <a href="#" class="social-link" aria-label="Google">🔍</a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Services</h4>
            <ul class="footer-links">
              <li><a href="#services">Kitchen Remodeling</a></li>
              <li><a href="#services">Bathroom Renovation</a></li>
              <li><a href="#services">Home Additions</a></li>
              <li><a href="#services">Outdoor Living</a></li>
              <li><a href="#services">Whole Home Renovation</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Service Areas</h4>
            <ul class="footer-links">
              <li>Greenville, SC</li>
              <li>Spartanburg, SC</li>
              <li>Greer, SC</li>
              <li>Simpsonville, SC</li>
              <li>Mauldin, SC</li>
              <li>Taylors, SC</li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="section-title">Contact Info</h4>
            <div class="contact-info">
              <a href="tel:+18645551234" class="contact-item">
                <span class="contact-icon">📞</span>
                (864) 555-1234
              </a>
              <a href="mailto:info@upcountrybuilding.com" class="contact-item">
                <span class="contact-icon">✉️</span>
                info&#64;upcountryconstruction.com
              </a>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                Serving Upcountry South Carolina
              </div>
              <div class="contact-item">
                <span class="contact-icon">🕒</span>
                Mon-Fri: 7AM-6PM, Sat: 8AM-4PM
              </div>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">
              © 2025 Upcountry Construction & Remodeling. All rights reserved.
            </p>
            <div class="footer-badges">
              <span class="badge">Licensed & Insured</span>
              <span class="badge">BBB Accredited</span>
              <span class="badge">Locally Owned</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(135deg, 
        rgba(37, 99, 235, 0.9) 0%, 
        rgba(29, 78, 216, 0.9) 50%, 
        rgba(14, 165, 233, 0.9) 100%);
      backdrop-filter: blur(20px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: white;
      padding: 3rem 0 1rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      margin-bottom: 2rem;
    }

    .footer-section h3.footer-title {
      font-size: 1.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .footer-section h4.section-title {
      font-size: 1.2rem;
      font-weight: 700;
      margin-bottom: 1rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .footer-description {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
      color: rgba(255, 255, 255, 0.9);
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      text-decoration: none;
      font-size: 1.2rem;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: 0.5rem;
    }

    .footer-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-links a:hover {
      color: white;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: rgba(255, 255, 255, 0.9);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .contact-item:hover {
      color: white;
    }

    .contact-icon {
      font-size: 1rem;
      width: 20px;
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding-top: 1.5rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .copyright {
      font-size: 0.85rem;
      color: rgba(255, 255, 255, 0.7);
      margin: 0;
    }

    .footer-badges {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .badge {
      background: rgba(255, 255, 255, 0.1);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 500;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      .footer {
        padding: 2rem 0 1rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: 2rem;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }

      .footer-bottom-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .footer-badges {
        justify-content: center;
      }
    }

    @media (max-width: 1024px) and (min-width: 769px) {
      .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
      }
    }
  `]
})
export class FooterComponent {}