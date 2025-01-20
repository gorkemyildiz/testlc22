import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-7xl font-bold">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p className="text-muted-foreground max-w-[500px]">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Button asChild>
        <Link href="/">
          Back to Home
        </Link>
      </Button>
    </div>
  )
}
