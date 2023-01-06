import aws from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";

const s3 = new aws.S3({
  accessKeyId: "AKIASEOS4YNUNMY3TOVN",
  secretAccessKey: "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",
});

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await s3
      .selectObjectContent({
        Bucket: "testnet-blocks",
        Key: "000042381765/block.json",
        ExpressionType: "SQL",
        Expression: "SELECT * FROM S3Object",
        InputSerialization: {
          JSON: {
            Type: "DOCUMENT",
          },
        },
        OutputSerialization: {
          JSON: {},
        },
      })
      .promise();

    res.status(200).json({ data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
