/* eslint-disable */
import _ from 'lodash';

export default {
  install(app) {
    const baseComponents = require.context(
      '../components/base/',
      false,
      /[A-Za-z0-9-_,\s]+\.vue$/i
    );
    baseComponents.keys().forEach((filename) => {
      const config = baseComponents(filename);
      const cmpName = _.upperFirst(
        _.camelCase(filename.replace(/^\.\//, '').replace(/\.\w+$/, ''))
      );
      app.component(`Base${cmpName}`, config.default || config);
    });
  },
};
