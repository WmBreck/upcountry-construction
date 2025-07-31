import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="business-header">
      <div class="header-content">
        <h1 class="business-name">Upcountry Contractors</h1>
      </div>
    </header>
  `,
  styles: [`
    .business-header {
      position: relative;
      background: linear-gradient(135deg, 
        rgba(37, 99, 235, 0.95) 0%, 
        rgba(29, 78, 216, 0.95) 25%, 
        rgba(14, 165, 233, 0.95) 50%, 
        rgba(6, 182, 212, 0.95) 75%, 
        rgba(16, 185, 129, 0.95) 100%);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      padding: 2rem 0;
      overflow: hidden;
    }

    .business-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
      animation: shimmer 8s ease-in-out infinite;
    }

    @keyframes shimmer {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.7; }
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    .business-name {
      font-size: 4rem;
      font-weight: 900;
      color: white;
      margin: 0;
      text-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.4),
        0 2px 10px rgba(0, 0, 0, 0.3),
        0 1px 5px rgba(0, 0, 0, 0.2);
      letter-spacing: -0.02em;
      line-height: 1.1;
      background: linear-gradient(135deg, 
        rgba(255, 255, 255, 1) 0%, 
        rgba(255, 255, 255, 0.9) 50%, 
        rgba(255, 255, 255, 1) 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: textShine 3s ease-in-out infinite;
      position: relative;
    }

    .business-name::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 100px;
      height: 4px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 255, 255, 0.8) 50%, 
        transparent 100%);
      border-radius: 2px;
      animation: underlineGlow 2s ease-in-out infinite alternate;
    }

    @keyframes textShine {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes underlineGlow {
      0% { 
        opacity: 0.5;
        width: 80px;
      }
      100% { 
        opacity: 1;
        width: 120px;
      }
    }

    @media (max-width: 768px) {
      .business-header {
        padding: 1.5rem 0;
      }

      .business-name {
        font-size: 2.8rem;
      }

      .business-name::after {
        width: 80px;
      }
    }

    @media (max-width: 480px) {
      .business-name {
        font-size: 2.2rem;
      }

      .business-name::after {
        width: 60px;
      }
    }
  `]
})
export class HeaderComponent {}