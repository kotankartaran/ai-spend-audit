# AI Spend Audit

AI Spend Audit is a full-stack SaaS-style web application that helps teams identify unnecessary AI subscription costs and optimize monthly spending across modern AI tools.

## Features

- AI subscription cost analysis
- Smart savings recommendations
- Estimated monthly savings
- Estimated annual savings
- Dynamic audit engine
- Shareable audit URLs
- Persistent cloud database storage
- Persistent form state using localStorage
- Responsive modern UI
- Supabase PostgreSQL integration
- Live deployment on Vercel

## Supported Platforms

- ChatGPT
- Claude
- Cursor
- GitHub Copilot
- Gemini

## Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Backend / Database
- Supabase
- PostgreSQL

### Deployment
- Vercel

## Local Development

Clone repository:

```bash
git clone https://github.com/kotankartaran/ai-spend-audit.git

Install dependencies:

```bash
npm install
```

Create `.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Run development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Live Demo

https://ai-spend-audit-rose.vercel.app

## Application Workflow

1. User selects AI platform
2. User enters:
   - Current plan
   - Monthly spend
   - Team size
3. Audit engine analyzes spending
4. Platform generates:
   - Optimization recommendation
   - Monthly savings
   - Annual savings
5. Audit is saved in Supabase
6. Shareable audit URL is generated

## Database Schema

### audits table

| Column | Type |
|---|---|
| id | uuid |
| tool | text |
| plan | text |
| spend | bigint |
| team_size | bigint |
| savings | bigint |
| recommendation | text |
| created_at | timestamptz |

## Future Improvements

- AI-generated optimization summaries
- User authentication
- PDF exports
- Team analytics dashboard
- Email audit reports
- Stripe billing integration
- Admin dashboard

## Author

Taran Kotankar