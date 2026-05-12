import './globals.css'

export const metadata = {
  title: 'Sonu — Full Stack Developer',
  description: `Full Stack Developer with ${process.env.NEXT_PUBLIC_EXP}+ years experience in MERN Stack, Next.js, PostgreSQL. Building scalable web applications.`,
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'PostgreSQL'],
  authors: [{ name: 'Sonu' }],
  openGraph: {
    title: 'Sonu — Full Stack Developer',
    description: 'Full Stack Developer | MERN Stack | Next.js | PostgreSQL',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
