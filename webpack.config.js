const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web', // Define o ambiente de destino como web
  mode: 'development', // Define o modo de desenvolvimento

  entry: path.resolve(__dirname, 'src', 'main.js'), // Ponto de entrada do aplicativo independente do tipo de caminho do sistema operacional

  output: {
    filename: 'main.js', // Nome do arquivo de saída
    path: path.resolve(__dirname, 'dist') // Diretório de saída
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist') // Diretório para servir os arquivos estáticos
    },
    port: 3000,
    open: true, // Abre o navegador automaticamente
    liveReload: true // Habilita recarregamento automático
  },

  plugins: [new HTMLWebpackPlugin({
    template: path.resolve(__dirname, 'index.html'), // Template HTML para gerar o arquivo final
    favicon: path.resolve(__dirname, 'src', 'assets', 'scissors.svg') // Ícone do site
  }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/, // Aplica esta regra a arquivos .css
        use: ["style-loader", "css-loader"], // Usa style-loader e css-loader para processar arquivos CSS
      }
    ]
  }
}