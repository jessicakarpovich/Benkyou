# Introduction #

This is a responsive website created for studying the Japanese writing system. It includes explanations on Hiragana, Katakana, and Kanji. For kanji, it also has a search feature which uses the [Kanji Alive API](https://app.kanjialive.com/api/docs) to provide the meaning and reading of the entered kanji. View the page at <https://jessicakarpovich.github.io/Benkyou/>.

# Project Setup #

To get started, all you need is a text editor and a web browser. The website uses a combination of Bootstrap 4 and custom styles, both of which are included in the project folder.

# Current Functionality #

Most of the content is written directly in the HTML. Only stroke order images for the first ten numbers in kanji and the kanji search field results are loaded using the Kanji Alive API.

## Kanji Search ##

The kanji search field on the Kanji page allows the user to enter a kanji to look up. The Kanji Alive API only has information on 1235 kanji at this time, so there will be times when a user enters a valid kanji but gets no results. However, if there are results, it will show the kanji, English meaning, kunyomi, onyomi, and examples with English translations.

## Browser Compatibility ##

Currently, I use CSS.escape() to pass a string variable to querySelector in both functions that access the Kanji Alive API. This means that any browser that does not support CSS.escape() will not be able to load the stroke order images and will not have a working kanji search.

Based on [Net Market Share](https://netmarketshare.com/browser-market-share.aspx?options=%7B%22filter%22%3A%7B%22%24and%22%3A%5B%7B%22deviceType%22%3A%7B%22%24in%22%3A%5B%22Mobile%22%5D%7D%7D%5D%7D%2C%22dateLabel%22%3A%22Trend%22%2C%22attributes%22%3A%22share%22%2C%22group%22%3A%22browser%22%2C%22sort%22%3A%7B%22share%22%3A-1%7D%2C%22id%22%3A%22browsersDesktop%22%2C%22dateInterval%22%3A%22Monthly%22%2C%22dateStart%22%3A%222017-02%22%2C%22dateEnd%22%3A%222018-01%22%2C%22segments%22%3A%22-1000%22%7D), most people that use desktops/laptops or mobile devices, use Chrome, Safari, or Firefox. I have tested and verified that on these three browsers, CSS.escape is supported and my website is fully functional. 

However, it does not fully work on several others such as Internet Explorer, Edge, and Opera. As most users use Chrome, Safari, or Firefox, I have decided to leave it as is. 