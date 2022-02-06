import { Client } from "@notionhq/client";

const notionToken = process.env.NOTION_TOKEN || "";
const databaseId = process.env.DATABASE_ID || "";

// 初期化
const client = new Client({
  auth: notionToken,
});

// DB にページ作成
client.pages.create({
  parent: { database_id: databaseId },
  properties: {
    Name: {
      title: [
        {
          type: "text",
          text: {
            content: "🐈 にゃーん",
          },
        },
      ],
    },
  },
});
