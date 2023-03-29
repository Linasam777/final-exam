import Jumbotron from '../components/cards/Jumbotron'
import { useAuth } from '../context/auth'

export default function Home() {
  const [auth, setAuth] = useAuth()

  return (
    <div>
      <Jumbotron title="Sveiki atvykę!" />
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  )
}
