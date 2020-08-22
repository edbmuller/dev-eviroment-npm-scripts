# Starter kit dev env with npm scripts
Development enviroment using npm scripts insted of building abstractions like gulp and grunt


## Get Started

1. **Editorconfig setup**

    This project use an .editorconfig to standardize the coding styling among the team.
		To enable go to [editorconfig](https://editorconfig.org/) and select the editor of your choice to make the condiguration.

## Todos

Reference: [Why npm scripts](https://css-tricks.com/why-npm-scripts/)

- [ ] Production build
- [ ] Production Deploy
- [ ] Compile SCSS to CSS
- [ ] Autoprefix CSS with PostCSS
- [ ] Uglifying JavaScript files
- [ ] Compressing Images
- [ ] SVG Sprites
- [ ] Implement @wordpress/dependency-extraction-webpack-plugin for handle the bundle for wordpress sites
- [ ] Demo app
	- Organize js folders by feature
	- Extract logic into POJOs insted of using to much the framework

## Possible Upgrades

* **whatwg-fetch**
* **Mock HTTP**
	Reference: [Building a JavaScript Development Environment](https://app.pluralsight.com/library/courses/javascript-development-environment/table-of-contents)
* **webpack optimization: splitChunks**
	For spliting vendor modules and cache then, since they are unlike to change as often as application code.
