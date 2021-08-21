import * as sst from "@serverless-stack/resources";

export default class TopicStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    this.topic = new sst.Topic(this, "T1", {
      subscribers: ["src/lambda.handler"],
    });
  }
}
