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
        rgba(101, 67, 33, 0.95) 0%, 
        rgba(139, 69, 19, 0.95) 25%, 
        rgba(160, 82, 45, 0.95) 50%, 
        rgba(205, 133, 63, 0.95) 75%, 
        rgba(222, 184, 135, 0.95) 100%);
      backdrop-filter: blur(20px);
      border-bottom: 3px solid rgba(139, 69, 19, 0.8);
      padding: 2rem 0;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(101, 67, 33, 0.3);
    }

    .business-header::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.15) 0%, transparent 50%),
        linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%);
      animation: constructionShimmer 12s ease-in-out infinite;
    }

    @keyframes constructionShimmer {
      0%, 100% { 
        opacity: 0.4;
        transform: translateX(-100%);
      }
      50% { 
        opacity: 0.8;
        transform: translateX(100%);
      }
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
      font-size: 4.5rem;
      font-weight: 800;
      color: #fff;
      margin: 0;
      text-shadow: 
        0 3px 6px rgba(101, 67, 33, 0.8),
        0 6px 12px rgba(139, 69, 19, 0.6),
        0 9px 18px rgba(160, 82, 45, 0.4),
        2px 2px 4px rgba(0, 0, 0, 0.5);
      letter-spacing: 0.02em;
      line-height: 1.1;
      background: linear-gradient(135deg, 
        #fff 0%, 
        #f5f5dc 25%,
        #ffd700 50%, 
        #f5f5dc 75%,
        #fff 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% 200%;
      animation: goldShine 4s ease-in-out infinite;
      position: relative;
      font-family: 'Georgia', 'Times New Roman', serif;
      text-transform: uppercase;
    }

    .business-name::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 120px;
      height: 6px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(255, 215, 0, 0.9) 20%,
        rgba(255, 140, 0, 1) 50%, 
        rgba(255, 215, 0, 0.9) 80%,
        transparent 100%);
      border-radius: 3px;
      animation: constructionGlow 3s ease-in-out infinite alternate;
      box-shadow: 0 2px 8px rgba(255, 140, 0, 0.6);
    }

    @keyframes goldShine {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }

    @keyframes constructionGlow {
      0% { 
        opacity: 0.7;
        width: 100px;
        box-shadow: 0 2px 8px rgba(255, 140, 0, 0.4);
      }
      100% { 
        opacity: 1;
        width: 140px;
        box-shadow: 0 2px 15px rgba(255, 140, 0, 0.8);
      }
    }

    @media (max-width: 768px) {
      .business-header {
        padding: 1.5rem 0;
      }

      .business-name {
        font-size: 3.2rem;
      }

      .business-name::after {
        width: 90px;
      }
    }

    @media (max-width: 480px) {
      .business-name {
        font-size: 2.6rem;
      }

      .business-name::after {
        width: 70px;
      }
    }
  `]
})
export class HeaderComponent {}