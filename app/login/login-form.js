'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { authenticate } from '../../actions'

function Button({ children, ...rest }) {
  return <button {...rest}>{children}</button>
}

export default function LoginForm() {
  const [code, action] = useFormState(authenticate, undefined)
  const { pending } = useFormStatus()

  return (
    <form action={action}>
      <div>
        <h1>Please log in to continue.</h1>
        <div>
          <div>
            <label htmlFor="email">Email</label>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
        <LoginButton />
        <div>
          {code === 'CredentialSignin' && (
            <>
              <p aria-live="polite">Invalid credentials</p>
            </>
          )}
        </div>
      </div>
    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return <Button aria-disabled={pending}>Log in</Button>
}
