# Introduction #

This is a responsive website created for studying the Japanese writing system. It includes explanations on Hiragana, Katakana, and Kanji. For kanji, it also has a search feature which uses the [Kanji Alive API](https://app.kanjialive.com/api/docs) to provide the meaning and reading of the entered kanji.

# Project Setup #

To get started, all you need is a text editor and a web browser. The website uses a combination of Bootstrap 4 and custom styles, both of which are included in the project folder.

# Current Functionality #

Most of the content is written directly in the HTML. Only stroke order images for the first ten numbers in kanji and the kanji search field results are loaded using the Kanji Alive API.

## Kanji Search ##

The kanji search field on the Kanji page allows the user to enter a kanji to look up. The Kanji Alive API only has information on 1235 kanji at this time, so there will be times when a user enters a valid kanji but gets no results. However, if there are results, it will show the kanji, English meaning, kunyomi, onyomi, and examples with English translations.