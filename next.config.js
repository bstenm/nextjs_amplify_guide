/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants');

const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public'
});

module.exports = (phase) => {
    return withPWA({
        reactStrictMode: true,
        compiler: {
            removeConsole: phase !== PHASE_DEVELOPMENT_SERVER
        }
    });
};
