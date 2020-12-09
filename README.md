# Greenhouse User Scripts

A collection of user scripts for use on Greenhouse to make life a little easier:

- [Auto-expand Scorecard Textareas](https://github.com/jeryj/greenhouse-user-scripts/raw/master/greenhouse-auto-expand-textareas.user.js)
- [Show/Hide Code Test Scorecard Sections](https://github.com/jeryj/greenhouse-user-scripts/raw/master/greenhouse-code-test-scorecard.user.js)

## Auto-expand textarea note fields
When using scorecards in the Note focus areas, the textarea often gets quite large. Each time you go to the scorecard you have to manually drag the textarea resizer to see all the content. This user script automatically expands all the notes to their full size plus a little extra for padding.

Install the script: https://github.com/jeryj/greenhouse-user-scripts/raw/master/greenhouse-auto-expand-textareas.user.js

## Tampermonkey Code Test Scorecard User Script
Manages which sections are shown/hidden on Greenhouse Scorecards. Greenhouse doesn't offer any way to only show certain attributes on a per-scorecard basis. That's where this user script comes in.

To set-up your scorecard:
- Add a stage with the title Code Test
- Create new Scorecard sections with "Code Test" in the title. 

If you're on a Greenhouse Scorecard, it will check if you're on a stage/step with the the title of "Code Test". If it _is_ a code test, it will hide all scorecard sections that do _not_ have "Code Test" in them.

If you are _not_ on a code test, it will hide any section that has "Code Test" in the section title.

To install the script, go to https://github.com/jeryj/greenhouse-user-scripts/raw/master/greenhouse-code-test-scorecard.user.js

Feel free to take the script and modify it. I tried to make it so you can change the "Code Test" match to a different name easily, or even add more, like ["Code Test", "Interview"].
