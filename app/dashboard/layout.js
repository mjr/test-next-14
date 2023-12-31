import Link from 'next/link'

import NavLinks from './navlinks'

import { signOut } from '../../auth'

function SideNav() {
  return (
    <div>
      <Link href="/">
        <div>ACME Logo</div>
      </Link>
      <div>
        <NavLinks />
        <div></div>
        <form
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <button>
            <div>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default function Layout({ children }) {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div>{children}</div>
    </div>
  )
}
