const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:[
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'],
  externals:{
    jquery:'jQuery',
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output:{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    alias:{
      TodoApp:path.resolve(__dirname,'./app/components/TodoApp.js'),
      TodoList:path.resolve(__dirname,'./app/components/TodoList.js'),
      TodoSearch:path.resolve(__dirname,'./app/components/TodoSearch.js'),
      AddTodo:path.resolve(__dirname,'./app/components/AddTodo.js'),
      Todo:path.resolve(__dirname,'./app/components/Todo.js'),
      TodoAPI:path.resolve(__dirname,'./app/api/TodoAPI.js'),
      applicationStyles:path.resolve(__dirname,'./app/styles/app.scss'),
      actions:path.resolve(__dirname,'./app/actions/actions.js'),
      reducers:path.resolve(__dirname,'./app/reducers/reducers.js'),
      configureStore:path.resolve(__dirname,'./app/store/configureStore.js')
    },
    extensions:[' ', '.js', '.jsx', '.css', '.scss']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['es2015', 'react', 'stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]

  }
};
