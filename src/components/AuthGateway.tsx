import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface AuthGatewayProps {
  onAuthenticated: () => void
}

export default function AuthGateway({ onAuthenticated }: AuthGatewayProps) {
  const [phrase, setPhrase] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (phrase.toLowerCase() === "caput draconis") {
      onAuthenticated()
    } else {
      setError("Incorrect magic phrase")
    }
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <Card className="w-full max-w-md relative z-10 bg-white/95 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Enter the Magic Phrase</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Enter magic phrase"
                value={phrase}
                onChange={(e) => {
                  setPhrase(e.target.value)
                  setError("")
                }}
                className={error ? "border-red-500" : ""}
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Button type="submit" className="w-full">
              Enter Dashboard
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
} 