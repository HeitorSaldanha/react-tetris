const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@enums': path.resolve(__dirname, './src/enums/enums.ts'),
      '@hooks': path.resolve(__dirname, './src/hooks/'),
      '@constants': path.resolve(__dirname, './src/constants/constants.ts'),
      '@types': path.resolve(__dirname, './src/types/types.ts'),
      '@utils': path.resolve(__dirname, './src/utils/'),
      '@images': path.resolve(__dirname, './src/img/'),
    },
  },
};
