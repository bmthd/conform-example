import { Card, Container } from "@yamada-ui/react";
import { Column, Table } from "@yamada-ui/table";
import { FC } from "react";

interface Data {
  name: string;
  broadcastPeriod: string;
  episode: string;
}

const columns: Column<Data>[] = [
  {
    accessorKey: "name",
    header: "作品名",
  },
  {
    accessorKey: "broadcastPeriod",
    header: "放送期間",
  },
  {
    accessorKey: "episode",
    header: "話数",
  },
];

const data: Data[] = [
  {
    name: "ドラゴンボール",
    broadcastPeriod: "1986年2月26日 - 1989年4月19日",
    episode: "全153話",
  },
  {
    name: "ドラゴンボールZ",
    broadcastPeriod: "1989年4月26日 - 1996年1月31日",
    episode: "全291話 + スペシャル2話",
  },
  {
    name: "ドラゴンボールGT",
    broadcastPeriod: "1996年2月7日 - 1997年11月19日",
    episode: "全64話 + 番外編1話",
  },
  {
    name: "ドラゴンボール改",
    broadcastPeriod: "2009年4月5日 - 2015年6月28日",
    episode: "全159話",
  },
  {
    name: "ドラゴンボール超",
    broadcastPeriod: "2015年7月5日 - 2018年3月25日",
    episode: "全131話",
  },
];

export default (() => (
  <Card as={Container}>
    <Table {...{ columns, data }} />
  </Card>
)) satisfies FC;
