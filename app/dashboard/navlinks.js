'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/dashboard/' },
  { name: 'Invoices', href: '/dashboard/invoices/' },
  { name: 'Customers', href: '/dashboard/customers/' },
]

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        return (
          <Link key={link.name} href={link.href} style={{ color: pathname === link.href ? 'deepskyblue' : 'blue' }}>
            <p>{link.name}</p>
          </Link>
        )
      })}
    </>
  )
}
