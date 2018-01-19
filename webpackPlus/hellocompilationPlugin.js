function MyPlugin(options) {
  // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {
	// console.log(compiler)
  compiler.plugin("compile", function(params) {
  	// console.log("8888888888888888")
  	console.log(params)
  	// console.log("8888888888888888")
    console.log("111====The compiler is starting to compile...");
  });

  compiler.plugin("compilation", function(compilation) {
    console.log("222====The compiler is starting a new compilation...");

    // console.log("=======!!!!!!!!!!!!!!============")
    // // console.log(compilation)
    // console.log("=======!!!!!!!!!!!!!!============")


    compilation.plugin("optimize", function() {
      console.log("333====The compilation is starting to optimize files...");
    });
  });

  compiler.plugin("emit", function(compilation, callback) {
    console.log("444====The compilation is going to emit files...");

    callback();
  });
///["make", "compile", "emit", "after-emit", "invalid", "done", "this-compilation"]  生命周期
  // compiler.plugin('make', function() {
  //   console.log('Hello World ；；11111；；；；；!');
  // });


//   console.log("====================")
// // console.log(compilation)
// console.log("====================")

};

module.exports = MyPlugin;