Pluralsight React Webpack
=========================
This repo is the product of following [Steve Michelotti](http://app.pluralsight.com/author/steve-michelotti)'s class:[Yeoman Fundamentals](http://app.pluralsight.com/courses/yeoman-fundamentals).

I went beyond the scope of this class by adding thorough [ESLinting](http://eslint.org/) and git hooks.

Finally, I used [VSCode](https://code.visualstudio.com/) as a text editor, so some useful features will also be found in this repo, such as the use of [typings](https://github.com/typings)
that provide useful autocomplete features (IntelliSense) and some launch/task settings.

# Installation

## Requirements
* `npm install -g yo`
* `git clone git@github.com:fxlemire/pluralsight-yeoman.git`
* `npm install`

## VS Code Users
* `npm install -g typings`
* `typings install`
* Install ESLint extension (`CTRL+P` + `'ext install ESLint'`)

## Scaffold
* `npm run build`
* `npm link`
* `yo pluralsight-yeoman MyAppName` in the directory you want to scaffold
  * `yo pluralsight-yeoman:ngc MyController`
  * `yo pluralsight-yeoman --help`
  * `yo pluralsight-yeoman:ngc --help`

### Remove your npm link
* `npm unlink`
* `cd $(npm root -g)` then `ls` and remove the symbolic link