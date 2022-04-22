import "../moduleAliases";
import path from "path";
import * as types from "./types";
import { declarativeWrappingPlugin, makeSchema } from "nexus";

export * from "./context";
export const schema = makeSchema({
  types,
  plugins: [declarativeWrappingPlugin()],
  outputs: {
    typegen: path.join(__dirname, "./libs/generated/nexus-typegen.ts"),
    schema: path.join(__dirname, "./libs/generated/schema.graphql"),
  },
  contextType: {
    module: path.join(__dirname, "./libs/schema/context/index.ts"),
    export: "Context",
  },
});
