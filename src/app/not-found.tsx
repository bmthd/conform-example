import { Card, Container, Heading, Text } from "@yamada-ui/react";

export default function NotFound() {
  return (
    <Card as={Container} gap="sm">
      <Heading>404 ページが見つかりません</Heading>
      <Text>お探しのページが見つかりませんでした。URLが正しいか確認してください。</Text>
    </Card>
  );
}
