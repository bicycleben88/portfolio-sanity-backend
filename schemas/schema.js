import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import technology from "./technology";
import bikePicture from "./bikePicture";
import miniBuild from "./miniBuild";
import pageSettings from "./pageSettings";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    project,
    technology,
    bikePicture,
    miniBuild,
    pageSettings,
  ]),
});
