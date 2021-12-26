import { helperContext, registerUnbound } from "discourse-common/lib/helpers";
import { htmlSafe } from "@ember/template";

export default registerUnbound('skydive-calendar-title', function(title) {
    var skydiveTitleRegex = /\[(.*?)\]/gm;
    var skydiveTitleMatch = skydiveTitleRegex.exec(title);
    if(skydiveTitleMatch && skydiveTitleMatch.length > 0){
        var skydiveTitleString =  skydiveTitleMatch.toString();
        skydiveTitleString = skydiveTitleMatch.replace('[', '');
        skydiveTitleString = skydiveTitleMatch.replace(']', '');
        return htmlSafe(skydiveTitleString);
    }
    return htmlSafe(title);
});
