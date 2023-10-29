import Link from 'next/link'

export default function Page() {
  return (
    <main>
      <div>
        ACME Logo
      </div>
      <div>
        <div>
          <p>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link href="/login">Log in</Link>
        </div>
        <div>
        </div>
      </div>
    </main>
  )
}
