import styles from '../styles/Home.module.css'

import { useUser, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import { auth, currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const { isSignedIn, isLoading } = useUser;
  const { userId } = auth();
  const user = await currentUser();
  console.log(user)
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <h2>Metric Coders Starter</h2>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <div>
            <SignInButton />
            <SignUpButton />
          </div>
        )}
      </nav>

      <div>
          <div>
            {isSignedIn ? (
              <div>
                <p>Welcome {user.firstName}!</p>
              </div>
            ) : (
              <p>Sign in to view your tasks!</p>
            )}
          </div>
      </div>
    </div>
  )
}