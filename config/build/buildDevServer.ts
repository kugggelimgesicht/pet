import type { Configuration as DevServerConfigurtion } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions):DevServerConfigurtion {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
