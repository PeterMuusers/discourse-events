import { helperContext, registerUnbound } from "discourse-common/lib/helpers";
import { htmlSafe } from "@ember/template";

export default registerUnbound('skydive-calendar-jumpable-color', function(title) {
    var skydiveTitleRegex = /\[(.*?)\]/gm;
    var skydiveTitleMatch = skydiveTitleRegex.exec(title);

    if(skydiveTitleMatch && skydiveTitleMatch.length > 0){
        var skydiveTitleString = skydiveTitleMatch[0].toUpperCase().replace('+', ' ');
        skydiveTitleString = skydiveTitleString.replace('[', '');
        skydiveTitleString = skydiveTitleString.replace(']', '');
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
        return 'red';
    }
    return 'neutral';
});
