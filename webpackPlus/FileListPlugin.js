function FileListPlugin(options) {}

FileListPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    // Create a header string for the generated file:
    var filelist = 'In this build:\n\n';
console.log("filelistfilelistfilelistfilelistfilelistfilelistfilelistfilelistfilelist打个断点")
    // Loop through all compiled assets,
    // adding a new line item for each filename.
    // 
    console.log(33333333333333333333)
    console.log(compilation.assets)
    console.log(33333333333333333333)


     console.log(11111111111111111111)
    for (var filename in compilation.assets) {
      console.log(filename)
      filelist += ('- '+ filename +'\n');
    }
    console.log(11111111111111111111)

    // Insert this list into the Webpack build as a new file asset:
    console.log(222222222222222222222222222)

    compilation.assets['filelist.md'] = {
      source: function() {
        console.log("sourcesourcesourcesourcesourcesourcesource")
        return filelist;
      },
      size: function() {
         console.log(filelist.length)
        return filelist.length;
      }
    };
console.log(222222222222222222222222222)
    callback();
  });
};

module.exports = FileListPlugin;