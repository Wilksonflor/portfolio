import Link from "next/link"

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">About Wilkson</h1>
      <p className="text-lg mb-4">Front-end developer passionate about creating amazing web experiences.</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to Home
      </Link>
    </div>
  )
}

