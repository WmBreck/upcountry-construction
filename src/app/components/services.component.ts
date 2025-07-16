import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Expert Services</h2>
          <p class="section-subtitle">
            From kitchen remodels to complete home renovations, we bring your vision to life
          </p>
        </div>
        
        <div class="services-grid">
          <div class="service-card glass-panel" *ngFor="let service of services; let i = index"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="service-icon">{{ service.icon }}</div>
            <h3 class="service-title">{{ service.title }}</h3>
            <p class="service-description">{{ service.description }}</p>
            <div class="service-features">
              <span class="feature" *ngFor="let feature of service.features">{{ feature }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services-section {
      padding: 6rem 0;
      background: linear-gradient(135deg, 
        #1e40af 0%, 
        #1d4ed8 25%, 
        #0ea5e9 50%, 
        #06b6d4 75%, 
        #059669 100%);
      background-size: 400% 400%;
      animation: gradientShift 20s ease infinite;
      position: relative;
    }

    .services-section::before {
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

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .service-card {
      padding: 2.5rem;
      text-align: center;
      transition: all 0.3s ease;
      animation: fadeInUp 0.8s ease-out both;
      position: relative;
      overflow: hidden;
    }

    .service-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.1) 0%, 
        rgba(255, 255, 255, 0.05) 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .service-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    }

    .service-card:hover::before {
      opacity: 1;
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

    .service-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      display: block;
    }

    .service-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .service-description {
      font-size: 1rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }

    .service-features {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      justify-content: center;
    }

    .feature {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.85rem;
      font-weight: 500;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
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
      .services-section {
        padding: 4rem 0;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .services-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .service-card {
        padding: 2rem;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      icon: '🏠',
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen into the heart of your home with custom cabinets, countertops, and modern appliances.',
      features: ['Custom Cabinets', 'Granite Counters', 'Modern Appliances', 'Open Concepts']
    },
    {
      icon: '🛁',
      title: 'Bathroom Renovation',
      description: 'Create your personal spa with luxurious fixtures, tile work, and efficient layouts that maximize space.',
      features: ['Luxury Fixtures', 'Custom Tile', 'Walk-in Showers', 'Vanity Design']
    },
    {
      icon: '🏗️',
      title: 'Home Additions',
      description: 'Expand your living space with seamless additions that blend perfectly with your existing home.',
      features: ['Room Additions', 'Second Stories', 'Sunrooms', 'Garages']
    },
    {
      icon: '🌿',
      title: 'Outdoor Living',
      description: 'Extend your home outdoors with decks, patios, and outdoor kitchens perfect for entertaining.',
      features: ['Custom Decks', 'Outdoor Kitchens', 'Fire Features', 'Landscaping']
    },
    {
      icon: '🔨',
      title: 'Whole Home Renovation',
      description: 'Complete home transformations that modernize every aspect of your living space.',
      features: ['Full Renovation', 'Structural Work', 'Modern Updates', 'Energy Efficiency']
    },
    {
      icon: '🔧',
      title: 'Home Repairs',
      description: 'Professional repair services to fix and maintain your home, from minor fixes to major repairs.',
      features: ['Plumbing Repairs', 'Electrical Work', 'Drywall Fixes', 'Emergency Service']
    }
  ];
}