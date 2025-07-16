import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="gallery-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Recent Projects</h2>
          <p class="section-subtitle">
            See the amazing transformations we've completed for upcountry families
          </p>
        </div>
        
        <div class="gallery-grid">
          <div class="project-card glass-panel" *ngFor="let project of projects; let i = index"
               [style.animation-delay]="(i * 0.1) + 's'">
            <div class="project-images">
              <div class="image-container before">
                <img [src]="project.beforeImage" [alt]="project.title + ' before'" loading="lazy">
                <div class="image-label">Before</div>
              </div>
              <div class="image-container after">
                <img [src]="project.afterImage" [alt]="project.title + ' after'" loading="lazy">
                <div class="image-label">After</div>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-details">
                <span class="detail">{{ project.location }}</span>
                <span class="detail">{{ project.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .gallery-section {
      padding: 6rem 0;
      background: linear-gradient(135deg, 
        #0ea5e9 0%, 
        #06b6d4 25%, 
        #2563eb 50%, 
        #1d4ed8 75%, 
        #10b981 100%);
      background-size: 400% 400%;
      animation: gradientShift 25s ease infinite;
      position: relative;
    }

    .gallery-section::before {
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

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      overflow: hidden;
      transition: all 0.3s ease;
      animation: fadeInUp 0.8s ease-out both;
    }

    .project-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
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

    .project-images {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      margin-bottom: 1.5rem;
    }

    .image-container {
      position: relative;
      aspect-ratio: 4/3;
      overflow: hidden;
      border-radius: 15px;
    }

    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .project-card:hover .image-container img {
      transform: scale(1.05);
    }

    .image-label {
      position: absolute;
      top: 10px;
      left: 10px;
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
      font-weight: 600;
      backdrop-filter: blur(10px);
    }

    .project-info {
      padding: 0 1.5rem 1.5rem;
    }

    .project-title {
      font-size: 1.3rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.8rem;
      text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
    }

    .project-description {
      font-size: 0.95rem;
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 1rem;
      line-height: 1.5;
    }

    .project-details {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .detail {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 15px;
      font-size: 0.8rem;
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
      .gallery-section {
        padding: 4rem 0;
      }

      .section-title {
        font-size: 2.5rem;
      }

      .gallery-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .project-images {
        grid-template-columns: 1fr;
        gap: 0.5rem;
      }
    }
  `]
})
export class GalleryComponent {
  projects = [
    {
      title: 'Modern Kitchen Transformation',
      description: 'Complete kitchen renovation featuring custom cabinets, quartz countertops, and stainless steel appliances.',
      location: 'Greenville, SC',
      duration: '3 weeks',
      beforeImage: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Luxury Master Bathroom',
      description: 'Spa-like bathroom renovation with walk-in shower, double vanity, and premium tile work.',
      location: 'Spartanburg, SC',
      duration: '2 weeks',
      beforeImage: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Outdoor Living Paradise',
      description: 'Custom deck and outdoor kitchen perfect for entertaining family and friends.',
      location: 'Greer, SC',
      duration: '4 weeks',
      beforeImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Whole Home Renovation',
      description: 'Complete home transformation including kitchen, bathrooms, and living spaces.',
      location: 'Simpsonville, SC',
      duration: '8 weeks',
      beforeImage: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=400',
      afterImage: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];
}