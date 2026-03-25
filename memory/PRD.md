# RevLabs Website - Product Requirements Document

## Original Problem Statement
Build a high-end, modern, bilingual (Dutch default + English toggle) website for RevLabs - a premium automation company that helps blue collar businesses (roofing, HVAC) gain more control, reduce administrative work, and run efficient workflows through smart automation.

## Brand Identity
- **Name**: RevLabs
- **Tagline**: "The future of business"
- **Positioning**: Control, Structure, Efficiency (NOT "we take everything over")

## Target Audience
Blue collar business owners - specifically roofing companies, HVAC installers, and construction business managers. Practical, no-nonsense professionals who value efficiency and results.

## Design System
- **Theme**: Dark premium (#0A0A0A background)
- **Primary Accent**: Neon green (#CCFF00)
- **Secondary Accent**: Purple (#8B5CF6) - limited use
- **Logo Accent**: Bronze (#CD7F32) for "Labs" text
- **Typography**: Chivo (headings), Manrope (body)

## Core Requirements (Static)
1. Bilingual support (Dutch default, English toggle)
2. Lead generation via contact form
3. CTA buttons linking to external Calendly
4. Premium, futuristic, minimal design
5. Mobile responsive

## What's Been Implemented (December 2025)
- [x] Hero section with animated gradient background
- [x] Problem → Solution visual section
- [x] How it works (3 steps)
- [x] Systems/Services cards (2 automation systems)
- [x] Benefits section with stats
- [x] Testimonials (3 static placeholders)
- [x] CTA conversion block
- [x] FAQ accordion
- [x] Contact form (Name, Email, Phone, Company, Industry dropdown, Message)
- [x] Footer with contact info
- [x] NL/EN language toggle with persistence
- [x] Backend API for contact form submissions
- [x] MongoDB integration for storing leads

## Tech Stack
- **Frontend**: React with Tailwind CSS, Shadcn/UI components
- **Backend**: FastAPI
- **Database**: MongoDB
- **Fonts**: Google Fonts (Chivo, Manrope)

## User Personas
1. **Dakwerker/Roofer**: Needs to reduce paperwork, streamline work orders to invoices
2. **HVAC Installateur**: Wants better lead qualification and follow-up
3. **Bouwbedrijf Zaakvoerder**: Seeks overall process control and efficiency

## Prioritized Backlog

### P0 (Critical) - DONE
- Bilingual website with all sections
- Contact form with database storage
- Mobile responsive design

### P1 (High Priority) - Future
- Actual Calendly integration with real booking URL
- Email notifications for new contact submissions
- Admin dashboard for viewing leads

### P2 (Medium Priority) - Future
- Analytics integration (Google Analytics/Plausible)
- Cookie consent banner
- SEO meta tags optimization
- Performance optimization (image lazy loading)

### P3 (Nice to Have) - Future
- Blog section
- Case studies page
- Pricing page
- Live chat integration

## Next Tasks List
1. Replace placeholder Calendly URL with actual booking link
2. Set up email notifications for new leads
3. Add admin authentication for viewing submissions
4. Implement SEO meta tags
5. Add cookie consent for GDPR compliance
