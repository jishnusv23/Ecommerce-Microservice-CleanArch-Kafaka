import { producer } from "..";
import { ProductRequest } from "../../../domain/entities";

export const productCreatedProducer = async (data: ProductRequest) => {
  try {
    await producer.connect();
    const message = {
      topic: "product",
      messages: [
        {
          key: "productcreated",
          value: JSON.stringify(data),
        },
      ],
    };
    console.log(
      "🚀 ~ file: productCreatedProducer.ts:16 ~ productCreatedProducer ~ message:",
      message
    );
    await producer.send(message)
  } catch (error: any) {
    console.error("Something problem in prdoctproducer", error?.message);
  }
};
