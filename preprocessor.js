var ReactTools = require('react-tools');
console.log('preprocessor');
module.exports = {
    process: function(src) {
        return ReactTools.transform(src, {
            harmony: true
        });
    }
};
