import handlebars from 'handlebars';
import fs from 'fs';

import { RenderTypes } from './types';

const Render: RenderTypes = {
  award: handlebars.compile(
    fs.readFileSync(__dirname + '/templates/award.hbs', 'utf8')
  ),
  comment: handlebars.compile(
    fs.readFileSync(__dirname + '/templates/comment.hbs', 'utf8')
  ),
  everything: handlebars.compile(
    fs.readFileSync(__dirname + '/templates/everything.hbs', 'utf8')
  ),
  imageSubmission: handlebars.compile(
    fs.readFileSync(__dirname + '/templates/imageSubmission.hbs', 'utf8')
  ),
  textSubmission: handlebars.compile(
    fs.readFileSync(__dirname + '/templates/textSubmission.hbs', 'utf8')
  ),
  // selfText: handlebars.compile(
  //   fs.readFileSync(__dirname + '/templates/selfText.hbs', 'utf8')
  // ),
};

export default Render;
