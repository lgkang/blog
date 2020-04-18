const ghpages = require('gh-pages');
ghpages.publish('./dist', {
    branch: 'gh-pages',
}, function (res) {
    console.log('docs同步完成!');
});