//http://stackoverflow.com/questions/39271458/how-can-i-add-font-awesome-to-my-aurelia-project-using-npm

import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function preparePrismJs() {
  const source = './node_modules/prismjs';
  
  const taskCss = gulp.src(`${source}/themes/prism.css`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/css`)); //scripts folder

  return taskCss;
}