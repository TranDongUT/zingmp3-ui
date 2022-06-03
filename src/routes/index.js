import config from "~/config";

//page
import Discovery from "~/pages/Discovery";
import Following from "~/pages/Following";
import Radio from "~/pages/Radio";
import YourLibrary from "~/pages/YourLibrary";
import ZingChart from "~/pages/ZingChart";

//public route
const publicRoutes = [
  { path: config.routes.YourLibrary, component: YourLibrary },
  { path: config.routes.Discover, component: Discovery },
  { path: config.routes.ZingChart, component: ZingChart },
  { path: config.routes.Radio, component: Radio },
  { path: config.routes.Following, component: Following },
];

export default publicRoutes;
