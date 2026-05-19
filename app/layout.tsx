import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Legal Contract Deadline Tracker — Never Miss a Renewal Again',
  description: 'Upload contracts, extract key dates with AI, and get smart reminders before every deadline. Built for small business owners, freelancers, and consultants.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="984c5ec2-9660-4de7-90a8-5222f8ec2bf7"></script>
      </head>
      <body style={{ backgroundColor: '#0d1117', color: '#c9d1d9', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
