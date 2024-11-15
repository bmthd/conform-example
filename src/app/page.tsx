import { Card, Container, Link } from "@yamada-ui/react";

export default function Home() {
  return (
    <Card as={Container} gap="sm">
      <Link href="/table">Table</Link>
      <Link href="/about">About</Link>
      <Link href="/form/server">Form</Link>
      <Link href="/form/client">Form (Client)</Link>
      <Link href="/not-found">Not Found</Link>
      <Link href="/error">Error</Link>
    </Card>
  );
}
