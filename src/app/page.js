import styles from '../styles/Home.module.css'
import { fetchUsers } from "@/db/queries/users";
import { useUser, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import { auth, currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const { isSignedIn, isLoading } = useUser;
  const { userId } = auth();
  console.log("USERID:", userId)
  const user = await currentUser();
  console.log(user)
  let posts = []
  if(userId){
    posts = await fetchUsers();
  }
  
  return (
    <div className={styles.container}>
        <h2>Metric Coders Starter</h2>
        {userId && posts && posts.map((p,i) => {
          return <div key={p.id}>
            {p.email}
          </div>
        })}
    </div>
  )
}