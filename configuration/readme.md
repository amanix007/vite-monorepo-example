# Default Build Configurations

## Instructions
This folder contains default build configurations for application packages. In the project we have the following types of packages:

1. Common a.k.a. isomorphic packages, containing code which is safe to run on front-end (the browser) as well as back-end (NodeJS runtime), such as `@vue-vite-monorepo/model` or `@vue-vite-monorepo/utilities`.
2. Back-end packages, containing code to be executed by NodeJS runtime
3. Front-end packages, containing code to be executed in the browser
4. Front-end applications

To simplify maintenance of the project, there three default build configurations for the above types of packages:

1.  `build/vite.common.js` for common packages
2.  `build/vite.server.js` for back-end packages and executables
3.  `build/vite.client.js` for front-end packages
4.  `build/vite.application.js` for front-end applications

Each package in its `vite.config.js` creates a build configuration using one of these shared configurations, using a factory function imported from `build` folder, respectively:

1. `getCommonConfiguration()`
2. `getServerConfiguration()`
3. `getClientConfiguration()`
4. `getApplicationConfiguration()`


## Background
There are many benefits of this approach. As the project grows, you'd have to maintain more and more individual build configurations, one for each of the packages. In large applications this can easily be a hundred of them. On the other hand, they are rarely different. Even if they are different, the differences are usually minimal - yet another external module, or a plugin added.

With shared build configurations this becomes much easier to manage. See for example `vite.config.js` file for `@vue-vite-monorepo/model` package, which is common (isomorphic) code:

    import { getCommonConfiguration } from '../../../configuration'
    export default getCommonConfiguration()

If you need to change build options for all packages, simply add them to the respective default configuration file. For example, if you want to have a closer look at all back-end bundles, just add `minify: false` in `build` section in `vite.server.js` file.

If you need to customize build options for a specific package, pass these options to the factory function in the package's `vite.config.js` file. These options will be merged with default options into the final build configuration.
