const path = require('path');

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
  }
}