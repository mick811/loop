import { authClient, useSession } from '@/lib/auth-client'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data } = useSession()

  return (
    <div>
      <button onClick={async () => {
        await authClient.signIn.social({
          provider: "github",
        })
      }}
      >
        Sign up
      </button>
      {data ? (
        <p>{data.user.name}</p>
      ) : null}
    </div>
  )
}
