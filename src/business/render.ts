import handlebars from 'handlebars';
import fs from 'fs';
import { RenderTypes } from './types';

const Render = (templateName: RenderTypes): HandlebarsTemplateDelegate<any> => {
  return handlebars.compile(
    fs.readFileSync(__dirname + `/templates/${templateName}`)
  );
};

export default Render;
