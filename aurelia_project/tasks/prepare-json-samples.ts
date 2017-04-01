//http://stackoverflow.com/questions/39271458/how-can-i-add-font-awesome-to-my-aurelia-project-using-npm
import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';

export default function prepareJsonSamples() {
  const source = './src/models';

  const taskJson = gulp.src(`${source}/data.json`)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(`${project.platform.output}/json`));

  return merge(taskJson);
}