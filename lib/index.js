import TopicStack from "./TopicStack";
import MyStack from "./MyStack";

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: "nodejs12.x",
    permissions: ['ssm'],
  });

  const topicStack = new TopicStack(app, "topic-stack");
  new MyStack(app, "my-stack", { topicStack });

  // Add more stacks
}
