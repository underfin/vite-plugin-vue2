## [1.0.2](https://github.com/underfin/vite-plugin-vue2/compare/v1.0.1...v1.0.2) (2021-01-11)


### Features

* **jsx:** use `babel-preset-jsx` ([05248ff](https://github.com/underfin/vite-plugin-vue2/commit/05248ffa97ca17adbeccfbe6af64d9053219b9b6)), closes [#17](https://github.com/underfin/vite-plugin-vue2/issues/17)



## [1.0.1](https://github.com/underfin/vite-plugin-vue2/compare/v1.0.0...v1.0.1) (2021-01-08)


### Bug Fixes

* **build:** resolve template assets reference on build ([94b3899](https://github.com/underfin/vite-plugin-vue2/commit/94b3899a097332dbe1e53ece660d562e65cc4ec0)), closes [#15](https://github.com/underfin/vite-plugin-vue2/issues/15)
* add miss dependency ([8e9d089](https://github.com/underfin/vite-plugin-vue2/commit/8e9d089863e6c77e835c4184ac46f053aa13fb7c)), closes [#14](https://github.com/underfin/vite-plugin-vue2/issues/14)



# [1.0.0](https://github.com/underfin/vite-plugin-vue2/compare/v0.2.2...v1.0.0) (2021-01-05)


### Features

* support vite@2.x ([#13](https://github.com/underfin/vite-plugin-vue2/issues/13)) ([2a9ac82](https://github.com/underfin/vite-plugin-vue2/commit/2a9ac82bc0e6ae4cd4c19e7e9037c5a5f1734478))



## [0.2.2](https://github.com/underfin/vite-plugin-vue2/compare/v0.2.1...v0.2.2) (2020-12-01)


### Bug Fixes

* **sourcemap:** ignore sourceRoot before merge sourcemap ([2572aaa](https://github.com/underfin/vite-plugin-vue2/commit/2572aaac2755da3f62ecf2644deb22cd6d4a3734)), closes [#11](https://github.com/underfin/vite-plugin-vue2/issues/11)
* ignore empty style block ([0dd5e0a](https://github.com/underfin/vite-plugin-vue2/commit/0dd5e0a880dfb969e655fc1947c35cf7cfe4da11))



## [0.2.1](https://github.com/underfin/vite-plugin-vue2/compare/v0.2.0...v0.2.1) (2020-10-29)


### Bug Fixes

* pass transform with jsx is truly ([97c0916](https://github.com/underfin/vite-plugin-vue2/commit/97c0916ba3e4d0f1c4f1bb9b16f7c1c7d05a17d8)), closes [/github.com/vitejs/vite/issues/970#issuecomment-718461256](https://github.com//github.com/vitejs/vite/issues/970/issues/issuecomment-718461256)



# [0.2.0](https://github.com/underfin/vite-plugin-vue2/compare/71c768aedcc708f09b1a5b29c29facfede7bae44...v0.2.0) (2020-10-13)


### Bug Fixes

* copy sfc descriptor to prevent caching issues ([#9](https://github.com/underfin/vite-plugin-vue2/issues/9)) ([0e13938](https://github.com/underfin/vite-plugin-vue2/commit/0e139381e205722bc8114d6b941b65d039364476))
* **dev:**  script gencode should place top to reflect sourcemap ([#8](https://github.com/underfin/vite-plugin-vue2/issues/8)) ([6ea995d](https://github.com/underfin/vite-plugin-vue2/commit/6ea995d6ef1720c983a6cedd45e8b3f16227ffe4))
* disable vite internal `rollup-plugin-vue` ([26f39d2](https://github.com/underfin/vite-plugin-vue2/commit/26f39d2d3952bffadd937a1c1cedf07062ec0119))
* fallback assets resolve + bump `@vue/component-compiler-utils` ([0d04c91](https://github.com/underfin/vite-plugin-vue2/commit/0d04c9120cb15c691e64b0e70942d4ec58894ab0))
* fix dev type error + update package.json ([958ba81](https://github.com/underfin/vite-plugin-vue2/commit/958ba8159702cf4e95ed2905dd38b68787681f95))
* fix playground ([ba74992](https://github.com/underfin/vite-plugin-vue2/commit/ba749922e4c0fd43b8b636679a44ebe4b7991e5b))
* fix some importer from `vite` ([c52e513](https://github.com/underfin/vite-plugin-vue2/commit/c52e513b4badca5c1d678bf13132f8a83d4f0636))
* fix sourcemap ([9d59723](https://github.com/underfin/vite-plugin-vue2/commit/9d59723b6ecbc6f446809ca40b63959e3dc3e92f)), closes [#4](https://github.com/underfin/vite-plugin-vue2/issues/4)
* fix test ([194f37e](https://github.com/underfin/vite-plugin-vue2/commit/194f37ed2fd3f95da0c251b2909bea900d878a31))
* fix test ([660eb5c](https://github.com/underfin/vite-plugin-vue2/commit/660eb5c06fb4324b218be8813eea8b2510e5ce6e))
* fix vue block src hmr ([606e01b](https://github.com/underfin/vite-plugin-vue2/commit/606e01b8bfca783c741def838c065aca7407c573))
* none vue script block sourcemap ([09259cc](https://github.com/underfin/vite-plugin-vue2/commit/09259cc08f08822db9cb899c5afda36929532de2))
* rewrite default for vue script block ([360b4dd](https://github.com/underfin/vite-plugin-vue2/commit/360b4dd1edac90018ff8a4a71af2a39c02b1509e))
* update client path + bump vite ([ea635d2](https://github.com/underfin/vite-plugin-vue2/commit/ea635d29285ecbb3792b6ae6ef717d5abf8084c0))
* update test ([cd5a360](https://github.com/underfin/vite-plugin-vue2/commit/cd5a360ef28fcf573b7c84be1ec09b5745306fef))
* use esbuild for ts lang block script ([ee09922](https://github.com/underfin/vite-plugin-vue2/commit/ee09922fee2fcd5cd2dd25118353cdbc9121b3e4))


### Features

* JSX handling ([cbd619d](https://github.com/underfin/vite-plugin-vue2/commit/cbd619db062c584b8f6dc9bd76c3a032228a5cfd)), closes [#5](https://github.com/underfin/vite-plugin-vue2/issues/5)
* support build ([77a989d](https://github.com/underfin/vite-plugin-vue2/commit/77a989da2aad667d08d8894f132c128a4a839c86))
* support module css ([251e5cc](https://github.com/underfin/vite-plugin-vue2/commit/251e5cc9d72b7280f122ecfc48184b322ff264c2))
* support pass options for plugin ([3041c2d](https://github.com/underfin/vite-plugin-vue2/commit/3041c2de078ee5eba80daeafed845966307a7e7a))
* **dev:** assets handling ([71c768a](https://github.com/underfin/vite-plugin-vue2/commit/71c768aedcc708f09b1a5b29c29facfede7bae44))
* **dev:** support block src import handling ([fef184b](https://github.com/underfin/vite-plugin-vue2/commit/fef184b6559ebbbace6e6f2a942a31d0f11febd0))
* **dev:** support script block src import handling ([87eaebe](https://github.com/underfin/vite-plugin-vue2/commit/87eaebe160b5befecc603588bc5fddc78d9637c4))



