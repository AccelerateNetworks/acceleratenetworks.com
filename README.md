# Accelerate Networks

![Accelerate Networks](public/assets/img/accelerate.png)

## Developing

You need four things:

1. [node](http://nodejs.org/)
2. [npm](https://www.npmjs.com/)
3. [bower](http://bower.io/)
4. [gulp](http://gulpjs.com/)

To set everything up for the first time:

```bash
npm install
bower install
gulp
```

For developing easily, you can run `gulp watch` to automatically generate new `main.js` and `main.css` files when you save them in your text editor of choice. Running `gulp watch` also turns on a [livereload](http://livereload.com/) server, so you can use your browser extension as well.

## Deploying

To make everything easier, this repository will keep the most up-to-date versions of `main.js` and `main.css` in the public folder so nothing special has to be done when deploying.

The root of the website should be the `public` folder so only the files and directories we say are publicly viewable.
