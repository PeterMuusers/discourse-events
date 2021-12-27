import { helperContext, registerUnbound } from "discourse-common/lib/helpers";
import { htmlSafe } from "@ember/template";

export default registerUnbound('skydive-calendar-jumpable-color', function(title) {
    var skydiveTitleRegex = /\[(.*?)\]/gm;
    var skydiveTitleMatch = skydiveTitleRegex.exec(title);

    if(skydiveTitleMatch && skydiveTitleMatch.length > 0){
        var skydiveTitleString = skydiveTitleMatch[0].toUpperCase().replace('+', ' ');
        skydiveTitleString = skydiveTitleString.substr(1, skydiveTitleString.length - 2);
        var skydiveTitleWords = skydiveTitleString.split(" ");

        if(skydiveTitleWords.includes('P') && skydiveTitleWords.includes('I') && skydiveTitleWords.includes('HI')){
            return 'green';
        }
        if(skydiveTitleWords.includes('P') && skydiveTitleWords.includes('I')){
            return 'blue';
        }
        if(skydiveTitleWords.includes('P')){
            return 'orange';
        }
        if(skydiveTitleWords.includes('ANIMO') || skydiveTitleWords.includes('ANIMOCHECK')){
            return 'purple';
        }
        if(skydiveTitleWords.includes('CANCEL') || skydiveTitleWords.includes('GESLOTEN') || skydiveTitleWords.includes('CLOSED') || skydiveTitleWords.includes('XX')){
            return 'red';
        }
    }
    return 'neutral';
});
