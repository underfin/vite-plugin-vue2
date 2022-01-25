## [1.9.3](https://github.com/underfin/vite-plugin-vue2/compare/v1.9.2...v1.9.3) (2022-01-25)


### Bug Fixes

* fixed HMR of styles on template change ([#153](https://github.com/underfin/vite-plugin-vue2/issues/153)) ([#170](https://github.com/underfin/vite-plugin-vue2/issues/170)) ([38b6d4f](https://github.com/underfin/vite-plugin-vue2/commit/38b6d4f569c203cd0ed74d85f0a46f29d27dc301))
* update babel dependencies ([#166](https://github.com/underfin/vite-plugin-vue2/issues/166)) ([bf46e25](https://github.com/underfin/vite-plugin-vue2/commit/bf46e2595819dfb5625aa24a3f28069f7c86a04d))



## [1.9.2](https://github.com/underfin/vite-plugin-vue2/compare/v1.9.1...v1.9.2) (2022-01-03)


### Bug Fixes

* ensure HMR stays working in SSR ([#160](https://github.com/underfin/vite-plugin-vue2/issues/160)) ([2cb9e0f](https://github.com/underfin/vite-plugin-vue2/commit/2cb9e0f68b5fc14fb69c7bb9ec69cae904d55f5e))



## [1.9.1](https://github.com/underfin/vite-plugin-vue2/compare/v1.9.0...v1.9.1) (2022-01-03)


### Bug Fixes

* consider window path at set descriptor cache ([bdfabc9](https://github.com/underfin/vite-plugin-vue2/commit/bdfabc99e8c50930bca5d9144cb1634f40609904)), closes [#129](https://github.com/underfin/vite-plugin-vue2/issues/129)
* don't inject hmr code in SSR ([#159](https://github.com/underfin/vite-plugin-vue2/issues/159)) ([d84ffec](https://github.com/underfin/vite-plugin-vue2/commit/d84ffecbac16b0bf28c72d285965c82a147a703b))
* missing sourcemap fields after compiling ts in dev ([#158](https://github.com/underfin/vite-plugin-vue2/issues/158)) ([ee1ff2e](https://github.com/underfin/vite-plugin-vue2/commit/ee1ff2e178426e6ef210a47d1cf8182423ad6e77))
* no corresponding SFC entry in the cache ([#155](https://github.com/underfin/vite-plugin-vue2/issues/155)) ([e1db32c](https://github.com/underfin/vite-plugin-vue2/commit/e1db32c0700294b723e6a9c3ac97fee315d06891))
* use correct target types ([f44ecea](https://github.com/underfin/vite-plugin-vue2/commit/f44ecead082014860a5ae8b34264ac0226fa4fa8))
* windows path contains \u symbols ([#152](https://github.com/underfin/vite-plugin-vue2/issues/152)) ([#154](https://github.com/underfin/vite-plugin-vue2/issues/154)) ([cddd1e9](https://github.com/underfin/vite-plugin-vue2/commit/cddd1e9ff0f0c842478455771f737b5d1aa122d4))



# [1.9.0](https://github.com/underfin/vite-plugin-vue2/compare/v1.8.2...v1.9.0) (2021-10-15)


### Bug Fixes

* hmr doesn't work when modifying the code of jsx in sfc（[#88](https://github.com/underfin/vite-plugin-vue2/issues/88)） ([#137](https://github.com/underfin/vite-plugin-vue2/issues/137)) ([66d6485](https://github.com/underfin/vite-plugin-vue2/commit/66d648574e634c962ecd38e2ac919c485bff74a6))
* prevent error when SFC script contains variable named render ([#145](https://github.com/underfin/vite-plugin-vue2/issues/145)) ([7a6f9e9](https://github.com/underfin/vite-plugin-vue2/commit/7a6f9e9a7970683b828bee11893be285bf0a002f))


### Features

* add 'target' options for transform script code ([#141](https://github.com/underfin/vite-plugin-vue2/issues/141)) ([940ec45](https://github.com/underfin/vite-plugin-vue2/commit/940ec45a3fd68bd9ba1b1a8808d96e6cbce13207))



## [1.8.2](https://github.com/underfin/vite-plugin-vue2/compare/71c768aedcc708f09b1a5b29c29facfede7bae44...v1.8.2) (2021-09-07)


### Bug Fixes

* add '\0' for virtual module ([b3c4a1b](https://github.com/underfin/vite-plugin-vue2/commit/b3c4a1bf02694cb574f03bd2e3c80353619e4028)), closes [#24](https://github.com/underfin/vite-plugin-vue2/issues/24)
* add `filename` option for compile jsx ([f8cd9c4](https://github.com/underfin/vite-plugin-vue2/commit/f8cd9c4b2bbbf6c7159f07833f888be8deac9d6f)), closes [#58](https://github.com/underfin/vite-plugin-vue2/issues/58)
* add default `doctype` option for pug ([65bcf92](https://github.com/underfin/vite-plugin-vue2/commit/65bcf92b99c50a727063057eb40ffaf1d40961ef))
* add miss dependency ([8e9d089](https://github.com/underfin/vite-plugin-vue2/commit/8e9d089863e6c77e835c4184ac46f053aa13fb7c)), closes [#14](https://github.com/underfin/vite-plugin-vue2/issues/14)
* add pure annotations for tree shaking support ([#105](https://github.com/underfin/vite-plugin-vue2/issues/105)) ([3622dae](https://github.com/underfin/vite-plugin-vue2/commit/3622dae6f1d6b3cdebec3a5268b8768ece8d00b2))
* add typescript support for jsx ([ee72c09](https://github.com/underfin/vite-plugin-vue2/commit/ee72c095e1938baf683ce107ec6a2a5062ee8916)), closes [#49](https://github.com/underfin/vite-plugin-vue2/issues/49) [#44](https://github.com/underfin/vite-plugin-vue2/issues/44)
* babel transform ignore babel.config.js file ([#78](https://github.com/underfin/vite-plugin-vue2/issues/78)) ([89cd5ed](https://github.com/underfin/vite-plugin-vue2/commit/89cd5edf72b3e6e62b266b91d9c7afeb6a614f1c))
* babel transform ignore babelrc file ([3735379](https://github.com/underfin/vite-plugin-vue2/commit/3735379f62ec5fbcee5aaee60af23c9c383a08db)), closes [#54](https://github.com/underfin/vite-plugin-vue2/issues/54)
* copy sfc descriptor to prevent caching issues ([#9](https://github.com/underfin/vite-plugin-vue2/issues/9)) ([0e13938](https://github.com/underfin/vite-plugin-vue2/commit/0e139381e205722bc8114d6b941b65d039364476))
* disable vite internal `rollup-plugin-vue` ([26f39d2](https://github.com/underfin/vite-plugin-vue2/commit/26f39d2d3952bffadd937a1c1cedf07062ec0119))
* Don't import from typescript source files ([#125](https://github.com/underfin/vite-plugin-vue2/issues/125)) ([d05f74d](https://github.com/underfin/vite-plugin-vue2/commit/d05f74d802ce524074d9181195fdc4356e08f7e8))
* expose file's full path in development ([#99](https://github.com/underfin/vite-plugin-vue2/issues/99)) ([eb26e6e](https://github.com/underfin/vite-plugin-vue2/commit/eb26e6ea588224a37b727e12d7fd852fe19d3622))
* fallback assets resolve + bump `@vue/component-compiler-utils` ([0d04c91](https://github.com/underfin/vite-plugin-vue2/commit/0d04c9120cb15c691e64b0e70942d4ec58894ab0))
* fix assets alias handling ([fed3acf](https://github.com/underfin/vite-plugin-vue2/commit/fed3acf476341e211dbf93f7de7f4b4d40cfda10)), closes [#26](https://github.com/underfin/vite-plugin-vue2/issues/26) [#21](https://github.com/underfin/vite-plugin-vue2/issues/21)
* fix build ([1ba366f](https://github.com/underfin/vite-plugin-vue2/commit/1ba366f0ef0807882e1b40e10e963c1ae4bdccd2))
* fix ci ([cb3b34c](https://github.com/underfin/vite-plugin-vue2/commit/cb3b34c04ea8946864621d70cd7bc8bb0a38fae0))
* fix dev type error + update package.json ([958ba81](https://github.com/underfin/vite-plugin-vue2/commit/958ba8159702cf4e95ed2905dd38b68787681f95))
* fix playground ([ba74992](https://github.com/underfin/vite-plugin-vue2/commit/ba749922e4c0fd43b8b636679a44ebe4b7991e5b))
* fix some importer from `vite` ([c52e513](https://github.com/underfin/vite-plugin-vue2/commit/c52e513b4badca5c1d678bf13132f8a83d4f0636))
* fix sourcemap ([9d59723](https://github.com/underfin/vite-plugin-vue2/commit/9d59723b6ecbc6f446809ca40b63959e3dc3e92f)), closes [#4](https://github.com/underfin/vite-plugin-vue2/issues/4)
* fix sourcemap for ts ([1e03983](https://github.com/underfin/vite-plugin-vue2/commit/1e0398323e62264ab374352d6a41282d5be23f73)), closes [#70](https://github.com/underfin/vite-plugin-vue2/issues/70)
* fix test ([b43cedf](https://github.com/underfin/vite-plugin-vue2/commit/b43cedf2e4317ada078b93dfe63f80147212ec32))
* fix test ([194f37e](https://github.com/underfin/vite-plugin-vue2/commit/194f37ed2fd3f95da0c251b2909bea900d878a31))
* fix test ([660eb5c](https://github.com/underfin/vite-plugin-vue2/commit/660eb5c06fb4324b218be8813eea8b2510e5ce6e))
* fix vue block src hmr ([606e01b](https://github.com/underfin/vite-plugin-vue2/commit/606e01b8bfca783c741def838c065aca7407c573))
* generate sourcemap ([612d2d5](https://github.com/underfin/vite-plugin-vue2/commit/612d2d5030a89823a12d5a9e78a8a764508585f3)), closes [#34](https://github.com/underfin/vite-plugin-vue2/issues/34)
* handle jsx ([7898936](https://github.com/underfin/vite-plugin-vue2/commit/7898936cd8b00fd0b2daeb1ed3e71c838f6263ff)), closes [#56](https://github.com/underfin/vite-plugin-vue2/issues/56)
* ignore empty style block ([0dd5e0a](https://github.com/underfin/vite-plugin-vue2/commit/0dd5e0a880dfb969e655fc1947c35cf7cfe4da11))
* ignore import transform for absolute urls ([#130](https://github.com/underfin/vite-plugin-vue2/issues/130)) ([0311694](https://github.com/underfin/vite-plugin-vue2/commit/0311694ce71bd2e694c10f39f56237e5cbcd8644))
* none vue script block sourcemap ([09259cc](https://github.com/underfin/vite-plugin-vue2/commit/09259cc08f08822db9cb899c5afda36929532de2))
* one block src file is referenced by diffrent vue files ([d9bb288](https://github.com/underfin/vite-plugin-vue2/commit/d9bb288a3a68767afa7b8ce33392a12a83179027)), closes [#116](https://github.com/underfin/vite-plugin-vue2/issues/116)
* pass transform with jsx is truly ([97c0916](https://github.com/underfin/vite-plugin-vue2/commit/97c0916ba3e4d0f1c4f1bb9b16f7c1c7d05a17d8)), closes [/github.com/vitejs/vite/issues/970#issuecomment-718461256](https://github.com//github.com/vitejs/vite/issues/970/issues/issuecomment-718461256)
* sfc src import respect alias ([4a834b7](https://github.com/underfin/vite-plugin-vue2/commit/4a834b735ce46f6ab907049e9a051b810729bf64))
* support no-protocol asset url ([cd171ec](https://github.com/underfin/vite-plugin-vue2/commit/cd171ec833d75dd762d6f020544e6277b1d8c730)), closes [#118](https://github.com/underfin/vite-plugin-vue2/issues/118)
* **deps:** move `vue-template-compiler` to peerDependencies ([4de9cb8](https://github.com/underfin/vite-plugin-vue2/commit/4de9cb8242551f1f0348e71f5acdb938c750f527))
* **template:** tips shouldn't use error to throw, should be use warn ([#89](https://github.com/underfin/vite-plugin-vue2/issues/89)) ([0deeaba](https://github.com/underfin/vite-plugin-vue2/commit/0deeabaa2b3033ab78d50cb41fa1f04ea48686d8))
* move vue-template-compiler to dependencies ([#87](https://github.com/underfin/vite-plugin-vue2/issues/87)) ([0de32c9](https://github.com/underfin/vite-plugin-vue2/commit/0de32c941d8aba66182460470dc990b11584ba0c))
* parse custom block code correctly. ([#66](https://github.com/underfin/vite-plugin-vue2/issues/66)) ([2d6175b](https://github.com/underfin/vite-plugin-vue2/commit/2d6175b8896dcb4c8c7ed6da81388bbb6a639e4e))
* remove `@vue/compiler-sfc` dep ([4146ef1](https://github.com/underfin/vite-plugin-vue2/commit/4146ef1401dc13e39b1f00d882e3e399fd1307fe)), closes [#45](https://github.com/underfin/vite-plugin-vue2/issues/45)
* reslove alias assets ([813c89c](https://github.com/underfin/vite-plugin-vue2/commit/813c89cd5312dc9b8b5310afb2517b7ac0f8235f)), closes [#21](https://github.com/underfin/vite-plugin-vue2/issues/21) [#20](https://github.com/underfin/vite-plugin-vue2/issues/20)
* revert add sourcemap for temaplate block ([6fa3cd0](https://github.com/underfin/vite-plugin-vue2/commit/6fa3cd0beae76e5415fb7509681e76b98b4c4417))
* rewrite asset with hash path, avoid name conflict ([b5cf6b1](https://github.com/underfin/vite-plugin-vue2/commit/b5cf6b130d15740f2f061edaf6d1610d37c70a20)), closes [#81](https://github.com/underfin/vite-plugin-vue2/issues/81)
* rewrite default for vue script block ([360b4dd](https://github.com/underfin/vite-plugin-vue2/commit/360b4dd1edac90018ff8a4a71af2a39c02b1509e))
* skip rewrite url for id refrence at `xlink:href` at `use` tag ([71b4263](https://github.com/underfin/vite-plugin-vue2/commit/71b42634a359f1c19ae467d805a2421cd38830fc)), closes [#36](https://github.com/underfin/vite-plugin-vue2/issues/36)
* source maps ([#84](https://github.com/underfin/vite-plugin-vue2/issues/84)) ([97f2ca4](https://github.com/underfin/vite-plugin-vue2/commit/97f2ca49d93712492887d43f6a18746646896527))
* special handling for class default export in sfc ([#29](https://github.com/underfin/vite-plugin-vue2/issues/29)) ([3be490d](https://github.com/underfin/vite-plugin-vue2/commit/3be490dbf01983001b610226988b7eb2a131ff40))
* start serve with `vite preview` ([ec972fd](https://github.com/underfin/vite-plugin-vue2/commit/ec972fdd217f0ba1b8e942438a75584c9635337a))
* support jsx script blocks within sfc ([#53](https://github.com/underfin/vite-plugin-vue2/issues/53)) ([ec3f329](https://github.com/underfin/vite-plugin-vue2/commit/ec3f3292c260e464f5d1d456ee878d3afaa98661))
* update client path + bump vite ([ea635d2](https://github.com/underfin/vite-plugin-vue2/commit/ea635d29285ecbb3792b6ae6ef717d5abf8084c0))
* update test ([cd5a360](https://github.com/underfin/vite-plugin-vue2/commit/cd5a360ef28fcf573b7c84be1ec09b5745306fef))
* use `esbuild` compile ts files ([378622b](https://github.com/underfin/vite-plugin-vue2/commit/378622bd81c1178cf29873e481d80292f7857c91)), closes [/github.com/underfin/vite-plugin-vue2/issues/49#issuecomment-799301238](https://github.com//github.com/underfin/vite-plugin-vue2/issues/49/issues/issuecomment-799301238)
* use `import` rather than dynamic `require` ([#51](https://github.com/underfin/vite-plugin-vue2/issues/51)) ([650e7f5](https://github.com/underfin/vite-plugin-vue2/commit/650e7f58509bffad7c92ccb37720d5ac6bc0ce14))
* **build:** resolve template assets reference on build ([94b3899](https://github.com/underfin/vite-plugin-vue2/commit/94b3899a097332dbe1e53ece660d562e65cc4ec0)), closes [#15](https://github.com/underfin/vite-plugin-vue2/issues/15)
* **dev:**  script gencode should place top to reflect sourcemap ([#8](https://github.com/underfin/vite-plugin-vue2/issues/8)) ([6ea995d](https://github.com/underfin/vite-plugin-vue2/commit/6ea995d6ef1720c983a6cedd45e8b3f16227ffe4))
* **hmr:** normalize dev path for hmr ([4ffb851](https://github.com/underfin/vite-plugin-vue2/commit/4ffb851619d2c35aa12e7096ef69dd5d2a811511))
* **playground:** move alias into resolve ([6e03e2c](https://github.com/underfin/vite-plugin-vue2/commit/6e03e2c38e23b01bb18cf2e5f341a131e67751dc))
* **sourcemap:** ignore sourceRoot before merge sourcemap ([2572aaa](https://github.com/underfin/vite-plugin-vue2/commit/2572aaac2755da3f62ecf2644deb22cd6d4a3734)), closes [#11](https://github.com/underfin/vite-plugin-vue2/issues/11)
* use esbuild for ts lang block script ([ee09922](https://github.com/underfin/vite-plugin-vue2/commit/ee09922fee2fcd5cd2dd25118353cdbc9121b3e4))


### Features

* add `vueTemplateCompiler` option ([3274c05](https://github.com/underfin/vite-plugin-vue2/commit/3274c05b3c5300282adbc3a9eb0375b8746e9f06)), closes [#76](https://github.com/underfin/vite-plugin-vue2/issues/76)
* add allowDeclareFields for babel ts option ([#120](https://github.com/underfin/vite-plugin-vue2/issues/120)) ([798953a](https://github.com/underfin/vite-plugin-vue2/commit/798953af7b273c8d31677632c94c7e1252c956ff))
* custom block ([19f7274](https://github.com/underfin/vite-plugin-vue2/commit/19f7274185dc6694f71d188c6e01efd2b296f75b))
* default compilerOptions: whitespace: 'condense' ([#62](https://github.com/underfin/vite-plugin-vue2/issues/62)) ([ab62cce](https://github.com/underfin/vite-plugin-vue2/commit/ab62cce0569db1bd655816d828f4000faad310dd))
* determine preprocessLang at template block ([#42](https://github.com/underfin/vite-plugin-vue2/issues/42)) ([c206f88](https://github.com/underfin/vite-plugin-vue2/commit/c206f880e740fcb1dce8f9cea404e9323e1fd170))
* error handling ([1c430ab](https://github.com/underfin/vite-plugin-vue2/commit/1c430ab7fceeb7a89c67065efb422389218c9cf1))
* import vue file as raw correctly ([#72](https://github.com/underfin/vite-plugin-vue2/issues/72)) ([175beb3](https://github.com/underfin/vite-plugin-vue2/commit/175beb3acc0a776c30be14e72ae3da4670326a0e))
* improve codegen compat, use var __component__ insteadof var component ([#115](https://github.com/underfin/vite-plugin-vue2/issues/115)) ([77d3cac](https://github.com/underfin/vite-plugin-vue2/commit/77d3cac77afdd180ea3c4d46d261d388075096c3))
* JSX handling ([cbd619d](https://github.com/underfin/vite-plugin-vue2/commit/cbd619db062c584b8f6dc9bd76c3a032228a5cfd)), closes [#5](https://github.com/underfin/vite-plugin-vue2/issues/5)
* support decorator at jsx ([08821c6](https://github.com/underfin/vite-plugin-vue2/commit/08821c6457ad22afd11e86d3fa118bc3c7ca7e25)), closes [#113](https://github.com/underfin/vite-plugin-vue2/issues/113) [#106](https://github.com/underfin/vite-plugin-vue2/issues/106)
* **jsx:** use `babel-preset-jsx` ([05248ff](https://github.com/underfin/vite-plugin-vue2/commit/05248ffa97ca17adbeccfbe6af64d9053219b9b6)), closes [#17](https://github.com/underfin/vite-plugin-vue2/issues/17)
* support build ([77a989d](https://github.com/underfin/vite-plugin-vue2/commit/77a989da2aad667d08d8894f132c128a4a839c86))
* support module css ([251e5cc](https://github.com/underfin/vite-plugin-vue2/commit/251e5cc9d72b7280f122ecfc48184b322ff264c2))
* support pass options for plugin ([3041c2d](https://github.com/underfin/vite-plugin-vue2/commit/3041c2de078ee5eba80daeafed845966307a7e7a))
* support vite@2.x ([#13](https://github.com/underfin/vite-plugin-vue2/issues/13)) ([2a9ac82](https://github.com/underfin/vite-plugin-vue2/commit/2a9ac82bc0e6ae4cd4c19e7e9037c5a5f1734478))
* **dev:** assets handling ([71c768a](https://github.com/underfin/vite-plugin-vue2/commit/71c768aedcc708f09b1a5b29c29facfede7bae44))
* **dev:** support block src import handling ([fef184b](https://github.com/underfin/vite-plugin-vue2/commit/fef184b6559ebbbace6e6f2a942a31d0f11febd0))
* **dev:** support script block src import handling ([87eaebe](https://github.com/underfin/vite-plugin-vue2/commit/87eaebe160b5befecc603588bc5fddc78d9637c4))



