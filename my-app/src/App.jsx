import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react'

function App() {
  return (
    <div style={{ padding: '500px'  }}>
      <h1>Salam, Clerk ilə Auth!</h1>

      <SignedOut>
        <p>Siz çıxmısınız</p>
        <SignInButton />
        <SignUpButton />
      </SignedOut>

      <SignedIn>
        <p>Giriş etmisiniz!</p>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default App
