# Architecture Overview

## Frontend

The frontend is built using Next.js 16 with React and TypeScript.

### UI Layer
- Tailwind CSS for styling
- shadcn/ui components
- Responsive dark SaaS design

### State Management
React useState hooks manage:
- tool selection
- plan details
- spend amount
- audit results
- recommendations

### Persistence
localStorage is used to persist form state across browser refreshes.

---

## Audit Engine

The audit engine uses rule-based logic to:
- analyze AI tool usage
- estimate overspending
- calculate monthly savings
- calculate annual savings
- generate optimization recommendations

---

## Deployment

The application is deployed on Vercel using automatic GitHub integration.

---

## Future Backend

Planned backend stack:
- Supabase
- PostgreSQL
- OpenAI API integration
- User authentication
- Shareable audit reports