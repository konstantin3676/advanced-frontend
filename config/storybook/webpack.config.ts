import webpack, { DefinePlugin } from 'webpack';
import path from 'path';

import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoader(true));
  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API__: JSON.stringify(''),
    })
  );

  return config;
};
