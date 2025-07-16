import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Our Customers Say</h2>
          <div class="rating-display glass-panel">
            <div class="stars">
              <span class="star" *ngFor="let star of stars">⭐</span>
            </div>
            <div class="rating-text">
              <strong>4.9/5 stars</strong> from 87 Google reviews
            </div>
          </div>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card glass-panel" *ngFor="let testimonial of testimonials; let i = index"
               [style.animation-delay]="(i * 0.2) + 's'">
            <div class="testimonial-content">
              <div class="quote-icon">"</div>
              <p class="testimonial-text">{{ testimonial.text }}</p>
            </div>
            <div class="testimonial-author">
              <img [src]="testimonial.avatar" [alt]="testimonial.name" class="author-avatar">
              <div class="author-info">
                <div class="author-name">{{ testimonial.name }}</div>
                <div class="author-location">{{ testimonial.location }}</div>
                <div class="testimonial-stars">
                  <span class="star" *ngFor="let star of testimonial.rating">⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="trust-badges">
          <div class="badge glass-panel">
            <div class="badge-icon">🛡️</div>
            <div class="badge-text">Licensed & Insured</div>
          </div>
          <div class="badge glass-panel">
            <div class="badge-icon">🏠</div>
            <div class="badge-text">Locally Owned</div>
          </div>
          <div class="badge glass-panel">
            <div class="badge-icon">✅</div>
            <div class="badge-text">BBB Accredited</div>
          </div>
          <div class="badge glass-panel">
            <div class="badge-icon">🔧</div>
            <div class="badge-text">15+ Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      padding: 6rem 0;
      background: linear-gradient(135deg, 
        #10b981 0%, 
        #059669 25%, 
        #0ea5e9 50%, 
        #06b6d4 75%, 
        #2563eb 100%);
      background-size: 400% 400%;
      animation: gradientShift 30s ease infinite;
      position: relative;
    }

    .testimonials-section::before {
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
      margin-bottom: 2rem;
      text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    .rating-display {
      display: inline-block;
      padding: 1.5rem 2rem;
      text-align: center;
    }

    .stars {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    .rating-text {
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }

    .testimonial-card {
      padding: 2rem;
      transition: all 0.3s ease;
      animation: fadeInUp 0.8s ease-out both;
      position: relative;
    }

    .testimonial-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
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

    .testimonial-content {
      margin-bottom: 1.5rem;
      position: relative;
    }

    .quote-icon {
      font-size: 4rem;
      color: rgba(255, 255, 255, 0.3);
      position: absolute;
      top: -1rem;
      left: -0.5rem;
      font-family: serif;
    }

    .testimonial-text {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.95);
      line-height: 1.6;
      margin-left: 2rem;
      font-style: italic;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .author-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .author-name {
      font-size: 1.1rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.2rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .author-location {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 0.3rem;
    }

    .testimonial-stars {
      font-size: 0.9rem;
    }

    .trust-badges {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
    }

    .badge {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      text-align: center;
      justify-content: center;
      transition: all 0.3s ease;
    }

    .badge:hover {
      transform: translateY(-3px);
    }

    .badge-icon {
      font-size: 2rem;
    }

    .badge-text {
      font-size: 1rem;
      font-weight: 600;
      color: white;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
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
      .testimonials-section {
        padding: 4rem 0;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .testimonials-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .trust-badges {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
      }

      .badge {
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
      }

      .badge-text {
        font-size: 0.9rem;
      }
    }
  `]
})
export class TestimonialsComponent {
  stars = [1, 2, 3, 4, 5];
  
  testimonials = [
    {
      text: "Upcountry Building transformed our outdated kitchen into a modern masterpiece! The attention to detail and quality of work exceeded our expectations. They completed the project on time and within budget.",
      name: "Sarah & Mike Johnson",
      location: "Greenville, SC",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: [1, 2, 3, 4, 5]
    },
    {
      text: "From start to finish, the team was professional, courteous, and skilled. Our bathroom renovation turned out better than we ever imagined. We've already recommended them to our neighbors!",
      name: "Jennifer Martinez",
      location: "Spartanburg, SC",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: [1, 2, 3, 4, 5]
    },
    {
      text: "The whole home addition project was handled with such care and expertise. They worked around our family's schedule and kept everything clean and organized. Truly the best contractors in the upcountry!",
      name: "Robert & Linda Davis",
      location: "Greer, SC",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: [1, 2, 3, 4, 5]
    }
  ];
}