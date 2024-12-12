import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Collect customer feedback to build better product</h1>
      <div>
        Create a feedback board in minutes, prioritize features, and build products
        that your customers will love.
      </div>
      <Link href="/dashboard/">Dashboard</Link>
    </main>
  );
}
