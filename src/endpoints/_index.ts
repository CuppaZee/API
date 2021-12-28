import auth from "./auth/_index";
import player from "./player/_index";
import bouncer from "./bouncer/_index";
import map from "./map/_index";
import database from "./database/_index";
import shadow from "./shadow/_index";

export default [...auth, ...player, ...bouncer, ...map, ...database, ...shadow];