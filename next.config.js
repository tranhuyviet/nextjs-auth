module.exports = {
    reactStrictMode: true,
    images: {
        domains: [
            'lh3.googleusercontent.com',
            'avatars.githubusercontent.com',
            'platform-lookaside.fbsbx.com',
        ],
    },

    // webpack5: true,
    // webpack: (config) => {
    //     config.resolve.fallback = { fs: false, path: false };

    //     return config;
    // },

    // webpack: (config, { isServer }) => {
    //     if (!isServer) {
    //         config.resolve.fallback.fs = false;
    //     }
    //     return config;
    // },
    // webpack: (config, { isServer }) => {
    //     // Fixes npm packages that depend on `fs` module
    //     if (!isServer) {
    //         config.node = {
    //             fs: 'empty',
    //         };
    //     }

    //     return config;
    // },
};
