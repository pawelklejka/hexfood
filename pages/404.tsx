import Link from "next/link";

export default function NotFound() {
    return <div className="flex center">
    <h1>404 - Page Not Found</h1>
    <Link href="/">
        Go back home
    </Link>
  </div>
}
