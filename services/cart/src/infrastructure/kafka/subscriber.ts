  import userCreatedConsumer from "./consumers/userCreatedConsumer";
  import productCreatedConsumer from "./consumers/productCreatedConsumer";

  export const creatSubscriber = () => {
    return {
      userCreated:userCreatedConsumer,
      productCreated:productCreatedConsumer
    };
  };

