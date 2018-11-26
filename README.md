Curriculum-Vitae
================

My Curriculum Vitae or resumé if you like.
Serves as my data sheet, and as a subject/experiment for needless amounts of load optimization. :)

## How to release
After having done changes to master.
Switch to `gh-pages` branch merge master in and run `yarn ghpages`.
The commit the changes to the branch up the remote and wait a few minutes for the changes to reflect.

## Stuff that needs doing

**Tecknical Todo**
* Cleanup styles and naming
* Implement simple Jest React testing

**Content todo**
* Add the secret ingredient
* Improve on print design

**Performance todo**
* Setup dependency analyses 
* Optimise script size - preact + preact-compat
* Migrate to css-in-js
* Ensure images have dimensions and color placeholders
* Implement semantic tags for better indexing and assistive tecknology reasons, main, section etc.
* Implement as PWA using Workbox

# Other notes
Initial payload (html+css) budget kb size is max 14 kb.
Defered loaded items can' be larger, goal is less than 100kb, not included media.
