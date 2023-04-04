# Pokedex

This simple pokedex exercise was developed to practice creating a project without using create-react-app. The main goal was to understand how Webpack works.

Webpack is one of the most popular bundlers in the market. It bundles all JavaScript files into one, improving the user experience when using our website. With Webpack, only one request is needed to obtain the JavaScript code.

To install Webpack, you can run the following command in the project's directory:

    npm install -D webpack webpack-cli
    
After that, you need to create a webpack.config.js file at the root of your project with the following content:

    const path = require('path');

    module.exports = {
      entry: './src/index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
    };
    
entry is the initial JavaScript file of your project, and output.path is the folder where Webpack saves the compiled file. By default, it minifies the code that goes into production.

To run Webpack and generate the bundle, you can execute:

    npx webpack 
  
While developing the project, you can add the flag -w to the command to watch the files and update the bundle whenever a change occurs. You can also use the Webpack Dev Server, which automatically updates the browser with changes in the code. To install it, run:

    npm install -D webpack-dev-server
    
To transpile the code and make it compatible with older browsers, you can use Babel. To install it, run:

    npm install -D @babel/core @babel/preset-env babel-loader
    
You can integrate Babel with Webpack by using loaders, which are plugins that extend Webpack's functionality.

In summary, this exercise taught us how to create a project without using create-react-app and how to use Webpack and Babel to bundle and transpile the code.

...

The development and production of front-end applications require different concerns. Development code should compile quickly and not need to be persisted, while production code doesn't need to compile quickly but needs to be persisted because it will be used by many people.

You can use Webpack's "mode" setting to manage code generation according to development or production mode. To make the mode dynamic, you can use environment variables. Environment variables can be accessed in code through the "process.env" object.

It is possible to generate source maps to allow debugging of minified or modified code. You can configure Webpack to generate different types of source maps for development and production. When deploying, it is important to pay attention to the configuration of build scripts, installation of dependencies and other necessary information.
