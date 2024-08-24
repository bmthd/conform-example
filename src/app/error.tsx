"use client";
import { Button, Card, Container, Heading, Text } from "@yamada-ui/react";

export default function Error({
  error,
  reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  return (
    <Card as={Container} gap="sm">
      <Heading>サーバーエラー</Heading>
      <Text>エラーが発生しました。</Text>
      <Text>{error.digest}</Text>
      <Button onClick={reset}>再読み込み</Button>
    </Card>
  );
}
