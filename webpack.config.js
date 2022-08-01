/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable flowtype/require-valid-file-annotation */

/* eslint import/no-nodejs-modules: off */


import { getWebpackConfig } from '@krakenjs/grumbler-scripts/config/webpack.config';

const FILE_NAME = 'index';
const MODULE_NAME = 'paypal-legal-components';

export const WEBPACK_CONFIG = getWebpackConfig({
    filename:   `${ FILE_NAME }.js`,
    modulename: MODULE_NAME
});

export const WEBPACK_CONFIG_MIN = getWebpackConfig({
    filename:   `${ FILE_NAME }.min.js`,
    modulename: MODULE_NAME,
    minify:     true,
    vars:       {
        __MIN__: true
    }
});


export default [ WEBPACK_CONFIG, WEBPACK_CONFIG_MIN ]; // eslint-disable-line import/no-default-export
