import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    new sst.Function(this, "F1", {
      handler: "src/lambda.handler",
    });

    scope.setDefaultFunctionProps({
      permissions: [
        's3',
        [props.topicStack.topic.snsTopic, 'grantPublish'],
      ]
    });

    new sst.Function(this, "F2", {
      handler: "src/lambda.handler",
    });
  }
}
