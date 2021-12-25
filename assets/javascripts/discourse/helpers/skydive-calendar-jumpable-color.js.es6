import { helperContext, registerUnbound } from "discourse-common/lib/helpers";
import { htmlSafe } from "@ember/template";

export default registerUnbound('skydive-calendar-jumpable-color', function(event, args) {
    let siteSettings = helperContext().siteSettings;
    var skydiveTitleRegex = /\[(.*?)\]/gm;
    var skydiveTitleMatch = skydiveTitleRegex.exec(event.title);

    if(skydiveTitleMatch){
        var skydiveTitleString =  skydiveTitleMatch.toString().replace('+', ' ');
        var skydiveTitleWords = skydiveTitleString.split(" ");
        skydiveTitleWords = skydiveTitleWords.toUpperCase();

        if(skydiveTitleWords.includes('P') && skydiveTitleWords.includes('I') && skydiveTitleWords.includes('HI')){
            return 'green';
        }
        if(skydiveTitleWords.includes('P') && skydiveTitleWords.includes('I')){
            return 'blue';
        }
        if(skydiveTitleWords.includes('P')){
            return 'orange';
        }
        return 'red';
    }
    return 'neutral';
});
