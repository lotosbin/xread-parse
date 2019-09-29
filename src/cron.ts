import {runParseArticlePriority} from "./job/priority";
import {runParseArticleKeywords} from "./job/keywords";
import {runParseArticleTopic} from "./job/topic";
import {runParseArticleSeries} from "./job/series";

setInterval(runParseArticlePriority, 5000);
setInterval(runParseArticleKeywords, 5000);
setInterval(runParseArticleTopic, 5000);
setInterval(runParseArticleSeries, 5000);
