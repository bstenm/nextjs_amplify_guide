/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants');

const withPWA = require('next-pwa')({
    dest: 'public',
    // register: true,
    skipWaiting: true
});

module.exports = (phase) => {
    return withPWA({
        compiler: {
            removeConsole: phase !== PHASE_DEVELOPMENT_SERVER
        }
    });
};
