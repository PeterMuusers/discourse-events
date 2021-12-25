import { helperContext, registerUnbound } from "discourse-common/lib/helpers";
import { htmlSafe } from "@ember/template";

export default registerUnbound('skydive-calendar-title', function(event, args) {
    let siteSettings = helperContext().siteSettings;
    var skydiveTitleRegex = /\[(.*?)\]/gm;
    console.log('event.title');
    console.log(event.title);
    var skydiveTitleMatch = skydiveTitleRegex.exec(event.title);
    if(skydiveTitleMatch && skydiveTitleMatch.length > 0){
        console.log(skydiveTitleMatch.length);
        console.log(skydiveTitleMatch[0]);
        return htmlSafe(skydiveTitleMatch[0]);
    }
    return htmlSafe(event.title);
});
