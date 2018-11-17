Curriculum-Vitae
================

My Curriculum Vitae or resumé if you like.
Serves as my data sheet, and as a subject/experiment for needless amounts of load optimization. :)

## How to release
After having done changes to master.
Switch to `gh-pages` branch merge master in and run `yarn ghpages`.
The commit the changes to the branch up the remote and wait a few minutes for the changes to reflect.

**Tecknical Todo**
* Cleanup styles and naming
* Implement simple Jest React tests

**Content todo**
* Add back the portfolio
* Add the secret ingredient
* Adobt Sebb.dk color scheme?
* Improve print design, goal is a single A4 page.

**Performance todo**
* Setup dependency analyses 
* Optimise script size, currently script size is about 74.2kb
* preact?
* Avoid umd in served production js?
* Ensure images have dimensions and color placeholders
* Webservers should not care about gzip... use compression-webpack-plugin?
* Implement semantic tags for better indexing and assistive tecknology reasons, main, section etc.
* Implement as PWA using Workbox

**Done list**
* Inject base styles into html instead of requesting seperately, wastes 32ms on TTFB requesting it seperately, vs only about 0.6ms on actual download...
* Move license comments to separate js file

# Other notes
Size budget kb size is max 14 kb.
Defered loading can' be larger, but prefrebly max 200 kb
Images and videos can be undefined larger
