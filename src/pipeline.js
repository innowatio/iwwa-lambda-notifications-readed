import {map} from "bluebird";

import log from "./services/logger";
import {setNotificationReaded} from "./steps/set-notification-readed";

export default async function pipeline (event) {
    log.info("Received notification-readed event", event);
    var element = event.data.element;
    if (!element) {
        return null;
    }
    await map(element.notificationsIds, setNotificationReaded);
    return null;
}
