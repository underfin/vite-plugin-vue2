## [1.4.3](https://github.com/underfin/vite-plugin-vue2/compare/v1.2.2...v1.4.3) (2021-04-03)


### Bug Fixes

* add `filename` option for compile jsx ([f8cd9c4](https://github.com/underfin/vite-plugin-vue2/commit/f8cd9c4b2bbbf6c7159f07833f888be8deac9d6f)), closes [#58](https://github.com/underfin/vite-plugin-vue2/issues/58)
* add default `doctype` option for pug ([65bcf92](https://github.com/underfin/vite-plugin-vue2/commit/65bcf92b99c50a727063057eb40ffaf1d40961ef))
* add typescript support for jsx ([ee72c09](https://github.com/underfin/vite-plugin-vue2/commit/ee72c095e1938baf683ce107ec6a2a5062ee8916)), closes [#49](https://github.com/underfin/vite-plugin-vue2/issues/49) [#44](https://github.com/underfin/vite-plugin-vue2/issues/44)
* babel transform ignore babelrc file ([3735379](https://github.com/underfin/vite-plugin-vue2/commit/3735379f62ec5fbcee5aaee60af23c9c383a08db)), closes [#54](https://github.com/underfin/vite-plugin-vue2/issues/54)
* generate sourcemap ([612d2d5](https://github.com/underfin/vite-plugin-vue2/commit/612d2d5030a89823a12d5a9e78a8a764508585f3)), closes [#34](https://github.com/underfin/vite-plugin-vue2/issues/34)
* handle jsx ([7898936](https://github.com/underfin/vite-plugin-vue2/commit/7898936cd8b00fd0b2daeb1ed3e71c838f6263ff)), closes [#56](https://github.com/underfin/vite-plugin-vue2/issues/56)
* remove `@vue/compiler-sfc` dep ([4146ef1](https://github.com/underfin/vite-plugin-vue2/commit/4146ef1401dc13e39b1f00d882e3e399fd1307fe)), closes [#45](https://github.com/underfin/vite-plugin-vue2/issues/45)
* start serve with `vite preview` ([ec972fd](https://github.com/underfin/vite-plugin-vue2/commit/ec972fdd217f0ba1b8e942438a75584c9635337a))
* support jsx script blocks within sfc ([#53](https://github.com/underfin/vite-plugin-vue2/issues/53)) ([ec3f329](https://github.com/underfin/vite-plugin-vue2/commit/ec3f3292c260e464f5d1d456ee878d3afaa98661))
* use `esbuild` compile ts files ([378622b](https://github.com/underfin/vite-plugin-vue2/commit/378622bd81c1178cf29873e481d80292f7857c91)), closes [/github.com/underfin/vite-plugin-vue2/issues/49#issuecomment-799301238](https://github.com//github.com/underfin/vite-plugin-vue2/issues/49/issues/issuecomment-799301238)
* use `import` rather than dynamic `require` ([#51](https://github.com/underfin/vite-plugin-vue2/issues/51)) ([650e7f5](https://github.com/underfin/vite-plugin-vue2/commit/650e7f58509bffad7c92ccb37720d5ac6bc0ce14))



## [1.2.2](https://github.com/underfin/vite-plugin-vue2/compare/71c768aedcc708f09b1a5b29c29facfede7bae44...v1.2.2) (2021-02-27)


### Bug Fixes

* **playground:** move alias into resolve ([6e03e2c](https://github.com/underfin/vite-plugin-vue2/commit/6e03e2c38e23b01bb18cf2e5f341a131e67751dc))
* add '\0' for virtual module ([b3c4a1b](https://github.com/underfin/vite-plugin-vue2/commit/b3c4a1bf02694cb574f03bd2e3c80353619e4028)), closes [#24](https://github.com/underfin/vite-plugin-vue2/issues/24)
* add miss dependency ([8e9d089](https://github.com/underfin/vite-plugin-vue2/commit/8e9d089863e6c77e835c4184ac46f053aa13fb7c)), closes [#14](https://github.com/underfin/vite-plugin-vue2/issues/14)
* copy sfc descriptor to prevent caching issues ([#9](https://github.com/underfin/vite-plugin-vue2/issues/9)) ([0e13938](https://github.com/underfin/vite-plugin-vue2/commit/0e139381e205722bc8114d6b941b65d039364476))
* disable vite internal `rollup-plugin-vue` ([26f39d2](https://github.com/underfin/vite-plugin-vue2/commit/26f39d2d3952bffadd937a1c1cedf07062ec0119))
* fallback assets resolve + bump `@vue/component-compiler-utils` ([0d04c91](https://github.com/underfin/vite-plugin-vue2/commit/0d04c9120cb15c691e64b0e70942d4ec58894ab0))
* fix assets alias handling ([fed3acf](https://github.com/underfin/vite-plugin-vue2/commit/fed3acf476341e211dbf93f7de7f4b4d40cfda10)), closes [#26](https://github.com/underfin/vite-plugin-vue2/issues/26) [#21](https://github.com/underfin/vite-plugin-vue2/issues/21)
* fix dev type error + update package.json ([958ba81](https://github.com/underfin/vite-plugin-vue2/commit/958ba8159702cf4e95ed2905dd38b68787681f95))
* fix playground ([ba74992](https://github.com/underfin/vite-plugin-vue2/commit/ba749922e4c0fd43b8b636679a44ebe4b7991e5b))
* fix some importer from `vite` ([c52e513](https://github.com/underfin/vite-plugin-vue2/commit/c52e513b4badca5c1d678bf13132f8a83d4f0636))
* fix sourcemap ([9d59723](https://github.com/underfin/vite-plugin-vue2/commit/9d59723b6ecbc6f446809ca40b63959e3dc3e92f)), closes [#4](https://github.com/underfin/vite-plugin-vue2/issues/4)
* fix test ([194f37e](https://github.com/underfin/vite-plugin-vue2/commit/194f37ed2fd3f95da0c251b2909bea900d878a31))
* fix test ([660eb5c](https://github.com/underfin/vite-plugin-vue2/commit/660eb5c06fb4324b218be8813eea8b2510e5ce6e))
* fix vue block src hmr ([606e01b](https://github.com/underfin/vite-plugin-vue2/commit/606e01b8bfca783c741def838c065aca7407c573))
* ignore empty style block ([0dd5e0a](https://github.com/underfin/vite-plugin-vue2/commit/0dd5e0a880dfb969e655fc1947c35cf7cfe4da11))
* none vue script block sourcemap ([09259cc](https://github.com/underfin/vite-plugin-vue2/commit/09259cc08f08822db9cb899c5afda36929532de2))
* pass transform with jsx is truly ([97c0916](https://github.com/underfin/vite-plugin-vue2/commit/97c0916ba3e4d0f1c4f1bb9b16f7c1c7d05a17d8)), closes [/github.com/vitejs/vite/issues/970#issuecomment-718461256](https://github.com//github.com/vitejs/vite/issues/970/issues/issuecomment-718461256)
* reslove alias assets ([813c89c](https://github.com/underfin/vite-plugin-vue2/commit/813c89cd5312dc9b8b5310afb2517b7ac0f8235f)), closes [#21](https://github.com/underfin/vite-plugin-vue2/issues/21) [#20](https://github.com/underfin/vite-plugin-vue2/issues/20)
* sfc src import respect alias ([4a834b7](https://github.com/underfin/vite-plugin-vue2/commit/4a834b735ce46f6ab907049e9a051b810729bf64))
* skip rewrite url for id refrence at `xlink:href` at `use` tag ([71b4263](https://github.com/underfin/vite-plugin-vue2/commit/71b42634a359f1c19ae467d805a2421cd38830fc)), closes [#36](https://github.com/underfin/vite-plugin-vue2/issues/36)
* special handling for class default export in sfc ([#29](https://github.com/underfin/vite-plugin-vue2/issues/29)) ([3be490d](https://github.com/underfin/vite-plugin-vue2/commit/3be490dbf01983001b610226988b7eb2a131ff40))
* **build:** resolve template assets reference on build ([94b3899](https://github.com/underfin/vite-plugin-vue2/commit/94b3899a097332dbe1e53ece660d562e65cc4ec0)), closes [#15](https://github.com/underfin/vite-plugin-vue2/issues/15)
* **dev:**  script gencode should place top to reflect sourcemap ([#8](https://github.com/underfin/vite-plugin-vue2/issues/8)) ([6ea995d](https://github.com/underfin/vite-plugin-vue2/commit/6ea995d6ef1720c983a6cedd45e8b3f16227ffe4))
* **hmr:** normalize dev path for hmr ([4ffb851](https://github.com/underfin/vite-plugin-vue2/commit/4ffb851619d2c35aa12e7096ef69dd5d2a811511))
* **sourcemap:** ignore sourceRoot before merge sourcemap ([2572aaa](https://github.com/underfin/vite-plugin-vue2/commit/2572aaac2755da3f62ecf2644deb22cd6d4a3734)), closes [#11](https://github.com/underfin/vite-plugin-vue2/issues/11)
* rewrite default for vue script block ([360b4dd](https://github.com/underfin/vite-plugin-vue2/commit/360b4dd1edac90018ff8a4a71af2a39c02b1509e))
* update client path + bump vite ([ea635d2](https://github.com/underfin/vite-plugin-vue2/commit/ea635d29285ecbb3792b6ae6ef717d5abf8084c0))
* update test ([cd5a360](https://github.com/underfin/vite-plugin-vue2/commit/cd5a360ef28fcf573b7c84be1ec09b5745306fef))
* use esbuild for ts lang block script ([ee09922](https://github.com/underfin/vite-plugin-vue2/commit/ee09922fee2fcd5cd2dd25118353cdbc9121b3e4))


### Features

* custom block ([19f7274](https://github.com/underfin/vite-plugin-vue2/commit/19f7274185dc6694f71d188c6e01efd2b296f75b))
* determine preprocessLang at template block ([#42](https://github.com/underfin/vite-plugin-vue2/issues/42)) ([c206f88](https://github.com/underfin/vite-plugin-vue2/commit/c206f880e740fcb1dce8f9cea404e9323e1fd170))
* error handling ([1c430ab](https://github.com/underfin/vite-plugin-vue2/commit/1c430ab7fceeb7a89c67065efb422389218c9cf1))
* **jsx:** use `babel-preset-jsx` ([05248ff](https://github.com/underfin/vite-plugin-vue2/commit/05248ffa97ca17adbeccfbe6af64d9053219b9b6)), closes [#17](https://github.com/underfin/vite-plugin-vue2/issues/17)
* JSX handling ([cbd619d](https://github.com/underfin/vite-plugin-vue2/commit/cbd619db062c584b8f6dc9bd76c3a032228a5cfd)), closes [#5](https://github.com/underfin/vite-plugin-vue2/issues/5)
* support build ([77a989d](https://github.com/underfin/vite-plugin-vue2/commit/77a989da2aad667d08d8894f132c128a4a839c86))
* support module css ([251e5cc](https://github.com/underfin/vite-plugin-vue2/commit/251e5cc9d72b7280f122ecfc48184b322ff264c2))
* support pass options for plugin ([3041c2d](https://github.com/underfin/vite-plugin-vue2/commit/3041c2de078ee5eba80daeafed845966307a7e7a))
* support vite@2.x ([#13](https://github.com/underfin/vite-plugin-vue2/issues/13)) ([2a9ac82](https://github.com/underfin/vite-plugin-vue2/commit/2a9ac82bc0e6ae4cd4c19e7e9037c5a5f1734478))
* **dev:** assets handling ([71c768a](https://github.com/underfin/vite-plugin-vue2/commit/71c768aedcc708f09b1a5b29c29facfede7bae44))
* **dev:** support block src import handling ([fef184b](https://github.com/underfin/vite-plugin-vue2/commit/fef184b6559ebbbace6e6f2a942a31d0f11febd0))
* **dev:** support script block src import handling ([87eaebe](https://github.com/underfin/vite-plugin-vue2/commit/87eaebe160b5befecc603588bc5fddc78d9637c4))



