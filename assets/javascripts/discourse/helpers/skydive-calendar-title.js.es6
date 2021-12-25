import { helperContext, registerUnbound } from "discourse-common/lib/helpers";
import { htmlSafe } from "@ember/template";

export default registerUnbound('skydive-calendar-title', function(event, args) {
    let siteSettings = helperContext().siteSettings;
    var skydiveTitleRegex = /\[(.*?)\]/gm;
    var skydiveTitleMatch = skydiveTitleRegex.exec(event.title);
    if(skydiveTitleMatch && skydiveTitleMatch.length > 0){
        return htmlSafe(skydiveTitleMatch[0]);
    }
    return htmlSafe(event.title);
});
