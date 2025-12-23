# LAPS Group - Multi-Division Corporate Website

A modern, enterprise-grade website for LAPS Group - a multi-division startup brand with one master identity and multiple verticals.

## 🏢 Brand Structure

**Master Brand:** LAPS Group  
**Founder:** Venugopal Meesala  
**Tagline:** Excellence Across Horizons

### Divisions

| Division | Full Name | Focus |
|----------|-----------|-------|
| 🏛️ Architecture | Landscape + Architecture + Planning Studios | Architectural design, urban planning |
| 💻 Apps | Launchpad for Applications & Platforms | Software development, SaaS |
| 📢 Ads | Launchpad for Ads & Services | Digital marketing |
| 🎉 Suites | Living and Party Suites | Events & hospitality |
| 📸 Photo | Lifestyle and Photography Studios | Professional photography |

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation

### Backend
- **Python 3.11+** with FastAPI
- **SQLAlchemy** ORM
- **PostgreSQL** database
- **Redis** for caching
- **Pydantic** for validation

## 📁 Project Structure

```
laps/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── common/       # Shared components
│   │   │   ├── home/         # Homepage sections
│   │   │   └── layout/       # Layout components
│   │   ├── pages/            # Page components
│   │   ├── data/             # Static data and content
│   │   ├── types/            # TypeScript type definitions
│   │   ├── styles/           # Global styles
│   │   └── services/         # API service layer
│   ├── package.json
│   └── vite.config.ts
│
├── backend/                  # Python FastAPI backend
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   └── v1/
│   │   │       └── endpoints/
│   │   ├── core/             # Core configuration
│   │   ├── models/           # Database models
│   │   └── schemas/          # Pydantic schemas
│   ├── main.py
│   └── pyproject.toml
│
├── BRAND_STRATEGY.md         # Complete brand strategy document
├── docker-compose.yml        # Docker orchestration
└── README.md                 # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.11+
- PostgreSQL (optional for local dev)
- Docker & Docker Compose (optional)

### Frontend Setup

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -e .

# Copy environment file
cp .env.example .env

# Start development server
uvicorn main:app --reload --port 8000
```

The backend API will be available at `http://localhost:8000`  
API docs at `http://localhost:8000/api/docs`

### Using Docker

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## 🎨 Brand Guidelines

### Colors

```css
/* Primary */
--laps-navy:     #0A1628;    /* Primary brand color */
--laps-blue:     #0066CC;    /* Accent, CTAs */
--laps-white:    #FFFFFF;    /* Background */

/* Secondary */
--laps-gold:     #C9A227;    /* Premium accents */
--laps-slate:    #64748B;    /* Body text */

/* Division Accents */
--div-architecture: #2D5016;  /* Green */
--div-apps:         #7C3AED;  /* Purple */
--div-ads:          #DC2626;  /* Red */
--div-suites:       #F59E0B;  /* Amber */
--div-photo:        #0891B2;  /* Cyan */
```

### Typography
- **Headings:** Inter (600-700 weight)
- **Body:** Inter (400 weight)
- **Accent:** Playfair Display (serif)

### Logo Usage
- ONE logo for all divisions
- Division name appears as text descriptor
- Never rotate, stretch, or add effects

## 📱 Key Features

- **Hero Carousel** - Full-width animated carousel
- **Division Cards** - Interactive cards with hover effects
- **News Section** - Latest updates with category filters
- **Timeline** - Company milestones visualization
- **Careers Section** - Job listings with application form
- **Brand Carousel** - Division showcase above footer
- **Contact Form** - Division-specific routing
- **Newsletter** - Email subscription

## 🌐 URL Structure

```
lapsgroup.com/
├── /                         # Homepage
├── /about                    # About LAPS Group
├── /architecture-planning    # Architecture division
├── /apps-platforms           # Software division
├── /ads-services             # Marketing division
├── /suites                   # Events division
├── /photography-studios      # Photo division
├── /careers                  # Job listings
├── /newsroom                 # News and updates
└── /contact                  # Contact form
```

## 📈 SEO Strategy

- Subpages (not subdomains) for SEO consolidation
- Schema markup for Organization
- Breadcrumbs on all pages
- Meta tags optimized per page
- Internal linking between divisions

## 📱 Instagram Strategy

**Account:** @lapsgroup

**Content Pillars:**
- Monday: Architecture projects
- Tuesday: Tech tips/products
- Wednesday: Marketing insights
- Thursday: Event highlights
- Friday: Photo features
- Saturday: Behind-the-scenes
- Sunday: Founder/culture

## 🔮 Future Scalability

- Multi-language support (i18n ready)
- Additional divisions
- New locations
- Investor relations page
- Mobile applications

## 📄 License

Proprietary - LAPS Group

---

**Built with ❤️ by LAPS Group**
