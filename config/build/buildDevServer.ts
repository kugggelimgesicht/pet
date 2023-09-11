import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfigurtion} from 'webpack-dev-server';

export function buildDevServer(options: BuildOptions):DevServerConfigurtion{
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
    }
}