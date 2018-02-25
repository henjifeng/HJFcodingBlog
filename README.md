# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
[hjf@iz2ze4cnlgx2ttgwunuz4nz HJFcoding]$ rails g mongoid:config


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      create  config/mongoid.yml
[hjf@iz2ze4cnlgx2ttgwunuz4nz HJFcoding]$ rails generate devise:install


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      create  config/initializers/devise.rb
      create  config/locales/devise.en.yml
===============================================================================

Some setup you must do manually if you haven't yet:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views

===============================================================================
[hjf@iz2ze4cnlgx2ttgwunuz4nz HJFcoding]$ rails generate devise User


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      invoke  mongoid
      create    app/models/user.rb
      invoke    test_unit
      create      test/models/user_test.rb
      create      test/fixtures/users.yml
      insert    app/models/user.rb
      insert    app/models/user.rb
       route  devise_for :users
[hjf@iz2ze4cnlgx2ttgwunuz4nz HJFcoding]$ rails generate devise:views users


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      invoke  Devise::Generators::SharedViewsGenerator
      create    app/views/users/shared
      create    app/views/users/shared/_links.html.erb
      invoke  form_for
      create    app/views/users/confirmations
      create    app/views/users/confirmations/new.html.erb
      create    app/views/users/passwords
      create    app/views/users/passwords/edit.html.erb
      create    app/views/users/passwords/new.html.erb
      create    app/views/users/registrations
      create    app/views/users/registrations/edit.html.erb
      create    app/views/users/registrations/new.html.erb
      create    app/views/users/sessions
      create    app/views/users/sessions/new.html.erb
      create    app/views/users/unlocks
      create    app/views/users/unlocks/new.html.erb
      invoke  erb
      create    app/views/users/mailer
      create    app/views/users/mailer/confirmation_instructions.html.erb
      create    app/views/users/mailer/email_changed.html.erb
      create    app/views/users/mailer/password_change.html.erb
      create    app/views/users/mailer/reset_password_instructions.html.erb
      create    app/views/users/mailer/unlock_instructions.html.erb
[hjf@iz2ze4cnlgx2ttgwunuz4nz HJFcoding]$ rails generate devise:controllers users


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      create  app/controllers/users/confirmations_controller.rb
      create  app/controllers/users/passwords_controller.rb
      create  app/controllers/users/registrations_controller.rb
      create  app/controllers/users/sessions_controller.rb
      create  app/controllers/users/unlocks_controller.rb
      create  app/controllers/users/omniauth_callbacks_controller.rb
===============================================================================

Some setup you must do manually if you haven't yet:

  Ensure you have overridden routes for generated controllers in your routes.rb.
  For example:

    Rails.application.routes.draw do
      devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
    end

===============================================================================
[hjf@iz2ze4cnlgx2ttgwunuz4nz HJFcoding]$ rails g cancan:ability


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      create  app/models/ability.rb







 rails webpacker:install


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      create  config/webpacker.yml
Copying webpack core config
      create  config/webpack
      create  config/webpack/development.js
      create  config/webpack/environment.js
      create  config/webpack/production.js
      create  config/webpack/test.js
Copying .postcssrc.yml to app root directory
      create  .postcssrc.yml
Copying .babelrc to app root directory
      create  .babelrc
Creating JavaScript app source directory
      create  app/javascript
      create  app/javascript/packs/application.js
Installing binstubs
         run  bundle binstubs webpacker from "."
Adding configurations
      append  .gitignore
Installing all JavaScript dependencies
         run  yarn add @rails/webpacker from "."
yarn add v1.2.1
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "postcss-cssnext@3.1.0" has unmet peer dependency "caniuse-lite@^1.0.30000697".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 621 new dependencies.
├─ @rails/webpacker@3.2.2
├─ abbrev@1.1.1
├─ acorn-dynamic-import@2.0.2
├─ acorn@5.4.1
├─ ajv-keywords@3.1.0
├─ ajv@6.1.1
├─ align-text@0.1.4
├─ alphanum-sort@1.0.2
├─ amdefine@1.0.1
├─ ansi-regex@2.1.1
├─ ansi-styles@2.2.1
├─ anymatch@1.3.2
├─ aproba@1.2.0
├─ are-we-there-yet@1.1.4
├─ argparse@1.0.10
├─ arr-diff@2.0.0
├─ arr-flatten@1.1.0
├─ array-find-index@1.0.2
├─ array-unique@0.2.1
├─ asn1.js@4.10.1
├─ asn1@0.2.3
├─ assert-plus@1.0.0
├─ assert@1.4.1
├─ async-each@1.0.1
├─ async-foreach@0.1.3
├─ async@2.6.0
├─ asynckit@0.4.0
├─ autoprefixer@7.2.6
├─ aws-sign2@0.6.0
├─ aws4@1.6.0
├─ babel-code-frame@6.26.0
├─ babel-core@6.26.0
├─ babel-generator@6.26.1
├─ babel-helper-builder-binary-assignment-operator-visitor@6.24.1
├─ babel-helper-call-delegate@6.24.1
├─ babel-helper-define-map@6.26.0
├─ babel-helper-explode-assignable-expression@6.24.1
├─ babel-helper-function-name@6.24.1
├─ babel-helper-get-function-arity@6.24.1
├─ babel-helper-hoist-variables@6.24.1
├─ babel-helper-optimise-call-expression@6.24.1
├─ babel-helper-regex@6.26.0
├─ babel-helper-remap-async-to-generator@6.24.1
├─ babel-helper-replace-supers@6.24.1
├─ babel-helpers@6.24.1
├─ babel-loader@7.1.2
├─ babel-messages@6.23.0
├─ babel-plugin-check-es2015-constants@6.22.0
├─ babel-plugin-syntax-async-functions@6.13.0
├─ babel-plugin-syntax-class-properties@6.13.0
├─ babel-plugin-syntax-dynamic-import@6.18.0
├─ babel-plugin-syntax-exponentiation-operator@6.13.0
├─ babel-plugin-syntax-object-rest-spread@6.13.0
├─ babel-plugin-syntax-trailing-function-commas@6.22.0
├─ babel-plugin-transform-async-to-generator@6.24.1
├─ babel-plugin-transform-class-properties@6.24.1
├─ babel-plugin-transform-es2015-arrow-functions@6.22.0
├─ babel-plugin-transform-es2015-block-scoped-functions@6.22.0
├─ babel-plugin-transform-es2015-block-scoping@6.26.0
├─ babel-plugin-transform-es2015-classes@6.24.1
├─ babel-plugin-transform-es2015-computed-properties@6.24.1
├─ babel-plugin-transform-es2015-destructuring@6.23.0
├─ babel-plugin-transform-es2015-duplicate-keys@6.24.1
├─ babel-plugin-transform-es2015-for-of@6.23.0
├─ babel-plugin-transform-es2015-function-name@6.24.1
├─ babel-plugin-transform-es2015-literals@6.22.0
├─ babel-plugin-transform-es2015-modules-amd@6.24.1
├─ babel-plugin-transform-es2015-modules-commonjs@6.26.0
├─ babel-plugin-transform-es2015-modules-systemjs@6.24.1
├─ babel-plugin-transform-es2015-modules-umd@6.24.1
├─ babel-plugin-transform-es2015-object-super@6.24.1
├─ babel-plugin-transform-es2015-parameters@6.24.1
├─ babel-plugin-transform-es2015-shorthand-properties@6.24.1
├─ babel-plugin-transform-es2015-spread@6.22.0
├─ babel-plugin-transform-es2015-sticky-regex@6.24.1
├─ babel-plugin-transform-es2015-template-literals@6.22.0
├─ babel-plugin-transform-es2015-typeof-symbol@6.23.0
├─ babel-plugin-transform-es2015-unicode-regex@6.24.1
├─ babel-plugin-transform-exponentiation-operator@6.24.1
├─ babel-plugin-transform-object-rest-spread@6.26.0
├─ babel-plugin-transform-regenerator@6.26.0
├─ babel-plugin-transform-strict-mode@6.24.1
├─ babel-polyfill@6.26.0
├─ babel-preset-env@1.6.1
├─ babel-register@6.26.0
├─ babel-runtime@6.26.0
├─ babel-template@6.26.0
├─ babel-traverse@6.26.0
├─ babel-types@6.26.0
├─ babylon@6.18.0
├─ balanced-match@0.4.2
├─ base64-js@1.2.3
├─ bcrypt-pbkdf@1.0.1
├─ big.js@3.2.0
├─ binary-extensions@1.11.0
├─ block-stream@0.0.9
├─ bluebird@3.5.1
├─ bn.js@4.11.8
├─ boom@2.10.1
├─ brace-expansion@1.1.11
├─ braces@1.8.5
├─ brorand@1.1.0
├─ browserify-aes@1.1.1
├─ browserify-cipher@1.0.0
├─ browserify-des@1.0.0
├─ browserify-rsa@4.0.1
├─ browserify-sign@4.0.4
├─ browserify-zlib@0.2.0
├─ browserslist@2.11.3
├─ buffer-xor@1.0.3
├─ buffer@4.9.1
├─ builtin-modules@1.1.1
├─ builtin-status-codes@3.0.0
├─ cacache@10.0.4
├─ camelcase-keys@2.1.0
├─ camelcase@3.0.0
├─ caniuse-api@2.0.0
├─ caniuse-db@1.0.30000810
├─ caniuse-lite@1.0.30000810
├─ case-sensitive-paths-webpack-plugin@2.1.1
├─ caseless@0.12.0
├─ center-align@0.1.3
├─ chalk@1.1.3
├─ chokidar@1.7.0
├─ chownr@1.0.1
├─ cipher-base@1.0.4
├─ clap@1.2.3
├─ cliui@3.2.0
├─ clone-deep@0.3.0
├─ clone@1.0.3
├─ co@4.6.0
├─ coa@1.0.4
├─ code-point-at@1.1.0
├─ color-convert@1.9.1
├─ color-name@1.1.3
├─ color-string@1.5.2
├─ color@0.11.4
├─ colormin@1.1.2
├─ colors@1.1.2
├─ combined-stream@1.0.6
├─ commander@2.14.1
├─ commondir@1.0.1
├─ compression-webpack-plugin@1.1.8
├─ concat-map@0.0.1
├─ concat-stream@1.6.0
├─ console-browserify@1.1.0
├─ console-control-strings@1.1.0
├─ constants-browserify@1.0.0
├─ convert-source-map@1.5.1
├─ copy-concurrently@1.0.5
├─ core-js@2.5.3
├─ core-util-is@1.0.2
├─ cosmiconfig@2.2.2
├─ create-ecdh@4.0.0
├─ create-hash@1.1.3
├─ create-hmac@1.1.6
├─ cross-spawn@3.0.1
├─ cryptiles@2.0.5
├─ crypto-browserify@3.12.0
├─ css-color-function@1.3.3
├─ css-color-names@0.0.4
├─ css-loader@0.28.10
├─ css-selector-tokenizer@0.7.0
├─ css-unit-converter@1.1.1
├─ cssesc@0.1.0
├─ cssnano@3.10.0
├─ csso@2.3.2
├─ currently-unhandled@0.4.1
├─ cyclist@0.2.2
├─ d@1.0.0
├─ dashdash@1.14.1
├─ date-now@0.1.4
├─ debug@2.6.9
├─ decamelize@1.2.0
├─ defined@1.0.0
├─ delayed-stream@1.0.0
├─ delegates@1.0.0
├─ des.js@1.0.0
├─ detect-indent@4.0.0
├─ diffie-hellman@5.0.2
├─ domain-browser@1.2.0
├─ duplexify@3.5.3
├─ ecc-jsbn@0.1.1
├─ electron-to-chromium@1.3.34
├─ elliptic@6.4.0
├─ emojis-list@2.1.0
├─ end-of-stream@1.4.1
├─ enhanced-resolve@3.4.1
├─ errno@0.1.7
├─ error-ex@1.3.1
├─ es5-ext@0.10.39
├─ es6-iterator@2.0.3
├─ es6-map@0.1.5
├─ es6-set@0.1.5
├─ es6-symbol@3.1.1
├─ es6-weak-map@2.0.2
├─ escape-string-regexp@1.0.5
├─ escope@3.6.0
├─ esprima@4.0.0
├─ esrecurse@4.2.0
├─ estraverse@4.2.0
├─ esutils@2.0.2
├─ event-emitter@0.3.5
├─ events@1.1.1
├─ evp_bytestokey@1.0.3
├─ execa@0.7.0
├─ expand-brackets@0.1.5
├─ expand-range@1.8.2
├─ extend@3.0.1
├─ extglob@0.3.2
├─ extract-text-webpack-plugin@3.0.2
├─ extsprintf@1.3.0
├─ fast-deep-equal@1.0.0
├─ fast-json-stable-stringify@2.0.0
├─ fastparse@1.1.1
├─ file-loader@1.1.9
├─ filename-regex@2.0.1
├─ fill-range@2.2.3
├─ find-cache-dir@1.0.0
├─ find-up@2.1.0
├─ flatten@1.0.2
├─ flush-write-stream@1.0.2
├─ for-in@1.0.2
├─ for-own@1.0.0
├─ forever-agent@0.6.1
├─ form-data@2.1.4
├─ from2@2.3.0
├─ fs-extra@0.30.0
├─ fs-write-stream-atomic@1.0.10
├─ fs.realpath@1.0.0
├─ fstream@1.0.11
├─ function-bind@1.1.1
├─ gauge@2.7.4
├─ gaze@1.1.2
├─ generate-function@2.0.0
├─ generate-object-property@1.2.0
├─ get-caller-file@1.0.2
├─ get-stdin@4.0.1
├─ get-stream@3.0.0
├─ getpass@0.1.7
├─ glob-base@0.3.0
├─ glob-parent@2.0.0
├─ glob@7.1.2
├─ globals@9.18.0
├─ globule@1.2.0
├─ graceful-fs@4.1.11
├─ har-schema@2.0.0
├─ har-validator@2.0.6
├─ has-ansi@2.0.0
├─ has-flag@3.0.0
├─ has-unicode@2.0.1
├─ has@1.0.1
├─ hash-base@2.0.2
├─ hash.js@1.1.3
├─ hawk@3.1.3
├─ hmac-drbg@1.0.1
├─ hoek@4.2.1
├─ home-or-tmp@2.0.0
├─ hosted-git-info@2.5.0
├─ html-comment-regex@1.1.1
├─ http-signature@1.1.1
├─ https-browserify@1.0.0
├─ icss-replace-symbols@1.1.0
├─ icss-utils@2.1.0
├─ ieee754@1.1.8
├─ iferr@0.1.5
├─ imurmurhash@0.1.4
├─ in-publish@2.0.0
├─ indent-string@2.1.0
├─ indexes-of@1.0.1
├─ indexof@0.0.1
├─ inflight@1.0.6
├─ inherits@2.0.3
├─ interpret@1.1.0
├─ invariant@2.2.3
├─ invert-kv@1.0.0
├─ is-absolute-url@2.1.0
├─ is-arrayish@0.3.1
├─ is-binary-path@1.0.1
├─ is-buffer@1.1.6
├─ is-builtin-module@1.0.0
├─ is-directory@0.3.1
├─ is-dotfile@1.0.3
├─ is-equal-shallow@0.1.3
├─ is-extendable@0.1.1
├─ is-extglob@1.0.0
├─ is-finite@1.0.2
├─ is-fullwidth-code-point@1.0.0
├─ is-glob@2.0.1
├─ is-my-ip-valid@1.0.0
├─ is-my-json-valid@2.17.2
├─ is-number@2.1.0
├─ is-plain-obj@1.1.0
├─ is-plain-object@2.0.4
├─ is-posix-bracket@0.1.1
├─ is-primitive@2.0.0
├─ is-property@1.0.2
├─ is-stream@1.1.0
├─ is-svg@2.1.0
├─ is-typedarray@1.0.0
├─ is-utf8@0.2.1
├─ isarray@1.0.0
├─ isexe@2.0.0
├─ isnumeric@0.2.0
├─ isobject@3.0.1
├─ isstream@0.1.2
├─ js-base64@2.4.3
├─ js-tokens@3.0.2
├─ js-yaml@3.10.0
├─ jsbn@0.1.1
├─ jsesc@1.3.0
├─ json-loader@0.5.7
├─ json-schema-traverse@0.3.1
├─ json-schema@0.2.3
├─ json-stringify-safe@5.0.1
├─ json5@0.5.1
├─ jsonfile@2.4.0
├─ jsonpointer@4.0.1
├─ jsprim@1.4.1
├─ kind-of@3.2.2
├─ klaw@1.3.1
├─ lazy-cache@0.2.7
├─ lcid@1.0.0
├─ load-json-file@1.1.0
├─ loader-runner@2.3.0
├─ loader-utils@1.1.0
├─ locate-path@2.0.0
├─ lodash._reinterpolate@3.0.0
├─ lodash.assign@4.2.0
├─ lodash.camelcase@4.3.0
├─ lodash.clonedeep@4.5.0
├─ lodash.memoize@4.1.2
├─ lodash.mergewith@4.6.1
├─ lodash.tail@4.1.1
├─ lodash.template@4.4.0
├─ lodash.templatesettings@4.1.0
├─ lodash.uniq@4.5.0
├─ lodash@4.17.5
├─ longest@1.0.1
├─ loose-envify@1.3.1
├─ loud-rejection@1.6.0
├─ lru-cache@4.1.1
├─ macaddress@0.2.8
├─ make-dir@1.2.0
├─ map-obj@1.0.1
├─ math-expression-evaluator@1.2.17
├─ md5.js@1.3.4
├─ mem@1.1.0
├─ memory-fs@0.4.1
├─ meow@3.7.0
├─ micromatch@2.3.11
├─ miller-rabin@4.0.1
├─ mime-db@1.33.0
├─ mime-types@2.1.18
├─ mimic-fn@1.2.0
├─ minimalistic-assert@1.0.0
├─ minimalistic-crypto-utils@1.0.1
├─ minimatch@3.0.4
├─ minimist@1.2.0
├─ mississippi@2.0.0
├─ mixin-object@2.0.1
├─ mkdirp@0.5.1
├─ move-concurrently@1.0.1
├─ ms@2.0.0
├─ nan@2.9.2
├─ node-gyp@3.6.2
├─ node-libs-browser@2.1.0
├─ node-sass@4.7.2
├─ nopt@3.0.6
├─ normalize-package-data@2.4.0
├─ normalize-path@2.1.1
├─ normalize-range@0.1.2
├─ normalize-url@1.9.1
├─ npm-run-path@2.0.2
├─ npmlog@4.1.2
├─ num2fraction@1.2.2
├─ number-is-nan@1.0.1
├─ oauth-sign@0.8.2
├─ object-assign@4.1.1
├─ object.omit@2.0.1
├─ once@1.4.0
├─ onecolor@3.0.5
├─ os-browserify@0.3.0
├─ os-homedir@1.0.2
├─ os-locale@2.1.0
├─ os-tmpdir@1.0.2
├─ osenv@0.1.5
├─ p-finally@1.0.0
├─ p-limit@1.2.0
├─ p-locate@2.0.0
├─ p-try@1.0.0
├─ pako@1.0.6
├─ parallel-transform@1.1.0
├─ parse-asn1@5.1.0
├─ parse-glob@3.0.4
├─ parse-json@2.2.0
├─ path-browserify@0.0.0
├─ path-complete-extname@0.1.0
├─ path-exists@2.1.0
├─ path-is-absolute@1.0.1
├─ path-key@2.0.1
├─ path-parse@1.0.5
├─ path-type@1.1.0
├─ pbkdf2@3.0.14
├─ performance-now@2.1.0
├─ pify@2.3.0
├─ pinkie-promise@2.0.1
├─ pinkie@2.0.4
├─ pixrem@4.0.1
├─ pkg-dir@2.0.0
├─ pleeease-filters@4.0.0
├─ postcss-apply@0.8.0
├─ postcss-attribute-case-insensitive@2.0.0
├─ postcss-calc@6.0.1
├─ postcss-color-function@4.0.1
├─ postcss-color-gray@4.1.0
├─ postcss-color-hex-alpha@3.0.0
├─ postcss-color-hsl@2.0.0
├─ postcss-color-hwb@3.0.0
├─ postcss-color-rebeccapurple@3.0.0
├─ postcss-color-rgb@2.0.0
├─ postcss-color-rgba-fallback@3.0.0
├─ postcss-colormin@2.2.2
├─ postcss-convert-values@2.6.1
├─ postcss-cssnext@3.1.0
├─ postcss-custom-media@6.0.0
├─ postcss-custom-properties@6.3.1
├─ postcss-custom-selectors@4.0.1
├─ postcss-discard-comments@2.0.4
├─ postcss-discard-duplicates@2.1.0
├─ postcss-discard-empty@2.1.0
├─ postcss-discard-overridden@0.1.1
├─ postcss-discard-unused@2.2.3
├─ postcss-filter-plugins@2.0.2
├─ postcss-font-family-system-ui@3.0.0
├─ postcss-font-variant@3.0.0
├─ postcss-image-set-polyfill@0.3.5
├─ postcss-import@11.1.0
├─ postcss-initial@2.0.0
├─ postcss-load-config@1.2.0
├─ postcss-load-options@1.2.0
├─ postcss-load-plugins@2.3.0
├─ postcss-loader@2.1.0
├─ postcss-media-minmax@3.0.0
├─ postcss-media-query-parser@0.2.3
├─ postcss-merge-idents@2.1.7
├─ postcss-merge-longhand@2.0.2
├─ postcss-merge-rules@2.1.2
├─ postcss-message-helpers@2.0.0
├─ postcss-minify-font-values@1.0.5
├─ postcss-minify-gradients@1.0.5
├─ postcss-minify-params@1.2.2
├─ postcss-minify-selectors@2.1.1
├─ postcss-modules-extract-imports@1.2.0
├─ postcss-modules-local-by-default@1.2.0
├─ postcss-modules-scope@1.1.0
├─ postcss-modules-values@1.3.0
├─ postcss-nesting@4.2.1
├─ postcss-normalize-charset@1.1.1
├─ postcss-normalize-url@3.0.8
├─ postcss-ordered-values@2.2.3
├─ postcss-pseudo-class-any-link@4.0.0
├─ postcss-pseudoelements@5.0.0
├─ postcss-reduce-idents@2.4.0
├─ postcss-reduce-initial@1.0.1
├─ postcss-reduce-transforms@1.0.4
├─ postcss-replace-overflow-wrap@2.0.0
├─ postcss-selector-matches@3.0.1
├─ postcss-selector-not@3.0.1
├─ postcss-selector-parser@2.2.3
├─ postcss-svgo@2.1.6
├─ postcss-unique-selectors@2.0.2
├─ postcss-value-parser@3.3.0
├─ postcss-zindex@2.2.0
├─ postcss@6.0.19
├─ prepend-http@1.0.4
├─ preserve@0.2.0
├─ private@0.1.8
├─ process-nextick-args@2.0.0
├─ process@0.11.10
├─ promise-inflight@1.0.1
├─ prr@1.0.1
├─ pseudomap@1.0.2
├─ public-encrypt@4.0.0
├─ pump@2.0.1
├─ pumpify@1.4.0
├─ punycode@1.4.1
├─ q@1.5.1
├─ qs@6.3.2
├─ query-string@4.3.4
├─ querystring-es3@0.2.1
├─ querystring@0.2.0
├─ randomatic@1.1.7
├─ randombytes@2.0.6
├─ randomfill@1.0.4
├─ read-cache@1.0.0
├─ read-pkg-up@1.0.1
├─ read-pkg@1.1.0
├─ readable-stream@2.3.4
├─ readdirp@2.1.0
├─ redent@1.0.0
├─ reduce-css-calc@1.3.0
├─ reduce-function-call@1.0.2
├─ regenerate@1.3.3
├─ regenerator-runtime@0.10.5
├─ regenerator-transform@0.10.1
├─ regex-cache@0.4.4
├─ regexpu-core@1.0.0
├─ regjsgen@0.2.0
├─ regjsparser@0.1.5
├─ remove-trailing-separator@1.1.0
├─ repeat-element@1.1.2
├─ repeat-string@1.6.1
├─ repeating@2.0.1
├─ request@2.79.0
├─ require-directory@2.1.1
├─ require-from-string@1.2.1
├─ require-main-filename@1.0.1
├─ resolve@1.5.0
├─ rgb-hex@2.1.0
├─ rgb@0.1.0
├─ right-align@0.1.3
├─ rimraf@2.6.2
├─ ripemd160@2.0.1
├─ run-queue@1.0.3
├─ safe-buffer@5.1.1
├─ sass-graph@2.2.4
├─ sass-loader@6.0.6
├─ sax@1.2.4
├─ schema-utils@0.4.5
├─ scss-tokenizer@0.2.3
├─ semver@5.5.0
├─ serialize-javascript@1.4.0
├─ set-blocking@2.0.0
├─ set-immediate-shim@1.0.1
├─ setimmediate@1.0.5
├─ sha.js@2.4.10
├─ shallow-clone@0.1.2
├─ shebang-command@1.2.0
├─ shebang-regex@1.0.0
├─ signal-exit@3.0.2
├─ simple-swizzle@0.2.2
├─ slash@1.0.0
├─ sntp@1.0.9
├─ sort-keys@1.1.2
├─ source-list-map@2.0.0
├─ source-map-support@0.4.18
├─ source-map@0.5.7
├─ spdx-correct@1.0.2
├─ spdx-expression-parse@1.0.4
├─ spdx-license-ids@1.2.2
├─ sprintf-js@1.0.3
├─ sshpk@1.13.1
├─ ssri@5.2.4
├─ stdout-stream@1.4.0
├─ stream-browserify@2.0.1
├─ stream-each@1.2.2
├─ stream-http@2.8.0
├─ stream-shift@1.0.0
├─ strict-uri-encode@1.1.0
├─ string_decoder@1.0.3
├─ string-width@1.0.2
├─ stringstream@0.0.5
├─ strip-ansi@3.0.1
├─ strip-bom@2.0.0
├─ strip-eof@1.0.0
├─ strip-indent@1.0.1
├─ style-loader@0.20.2
├─ supports-color@5.2.0
├─ svgo@0.7.2
├─ tapable@0.2.8
├─ tar@2.2.1
├─ through2@2.0.3
├─ timers-browserify@2.0.6
├─ to-arraybuffer@1.0.1
├─ to-fast-properties@1.0.3
├─ tough-cookie@2.3.3
├─ trim-newlines@1.0.0
├─ trim-right@1.0.1
├─ true-case-path@1.0.2
├─ tty-browserify@0.0.0
├─ tunnel-agent@0.6.0
├─ tweetnacl@0.14.5
├─ typedarray@0.0.6
├─ uglify-es@3.3.10
├─ uglify-js@2.8.29
├─ uglify-to-browserify@1.0.2
├─ uglifyjs-webpack-plugin@1.2.2
├─ uniq@1.0.1
├─ uniqid@4.1.1
├─ uniqs@2.0.0
├─ unique-filename@1.1.0
├─ unique-slug@2.0.0
├─ units-css@0.4.0
├─ url@0.11.0
├─ util-deprecate@1.0.2
├─ util@0.10.3
├─ uuid@3.2.1
├─ validate-npm-package-license@3.0.1
├─ vendors@1.0.1
├─ verror@1.10.0
├─ viewport-dimensions@0.2.0
├─ vm-browserify@0.0.4
├─ watchpack@1.4.0
├─ webpack-manifest-plugin@1.3.2
├─ webpack-sources@1.1.0
├─ webpack@3.11.0
├─ whet.extend@0.9.9
├─ which-module@2.0.0
├─ which@1.3.0
├─ wide-align@1.1.2
├─ window-size@0.1.0
├─ wordwrap@0.0.2
├─ worker-farm@1.5.2
├─ wrap-ansi@2.1.0
├─ wrappy@1.0.2
├─ xtend@4.0.1
├─ y18n@3.2.1
├─ yallist@2.1.2
├─ yargs-parser@7.0.0
└─ yargs@8.0.2
Done in 76.25s.
Installing dev server for live reloading
         run  yarn add --dev webpack-dev-server from "."
yarn add v1.2.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "postcss-cssnext@3.1.0" has unmet peer dependency "caniuse-lite@^1.0.30000697".
warning "webpack-dev-middleware@2.0.6" has unmet peer dependency "webpack@^2.2.0 || ^3.0.0 || ^4.0.0-alpha || ^4.0.0-beta || ^4.0.0".
warning "webpack-dev-server@3.0.0" has unmet peer dependency "webpack@^4.0.0-beta.1".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 182 new dependencies.
├─ accepts@1.3.4
├─ ansi-html@0.0.7
├─ anymatch@2.0.0
├─ arr-diff@4.0.0
├─ arr-union@3.1.0
├─ array-flatten@1.1.1
├─ array-includes@3.0.3
├─ array-union@1.0.2
├─ array-uniq@1.0.3
├─ array-unique@0.3.2
├─ assign-symbols@1.0.0
├─ atob@2.0.3
├─ base@0.11.2
├─ batch@0.6.1
├─ body-parser@1.18.2
├─ bonjour@3.5.0
├─ braces@2.3.1
├─ buffer-indexof@1.1.1
├─ bytes@3.0.0
├─ cache-base@1.0.1
├─ chokidar@2.0.2
├─ class-utils@0.3.6
├─ collection-visit@1.0.0
├─ component-emitter@1.2.1
├─ compressible@2.0.13
├─ compression@1.7.2
├─ connect-history-api-fallback@1.5.0
├─ content-disposition@0.5.2
├─ content-type@1.0.4
├─ cookie-signature@1.0.6
├─ cookie@0.3.1
├─ copy-descriptor@0.1.1
├─ decode-uri-component@0.2.0
├─ deep-equal@1.0.1
├─ define-properties@1.1.2
├─ define-property@0.2.5
├─ del@3.0.0
├─ depd@1.1.2
├─ destroy@1.0.4
├─ detect-node@2.0.3
├─ dns-equal@1.0.0
├─ dns-packet@1.3.1
├─ dns-txt@2.0.2
├─ ee-first@1.1.1
├─ encodeurl@1.0.2
├─ es-abstract@1.10.0
├─ es-to-primitive@1.1.1
├─ escape-html@1.0.3
├─ etag@1.8.1
├─ eventemitter3@1.2.0
├─ eventsource@0.1.6
├─ express@4.16.2
├─ extend-shallow@2.0.1
├─ faye-websocket@0.10.0
├─ fill-range@4.0.0
├─ finalhandler@1.1.0
├─ foreach@2.0.5
├─ forwarded@0.1.2
├─ fragment-cache@0.2.1
├─ fresh@0.5.2
├─ get-value@2.0.6
├─ globby@6.1.0
├─ handle-thing@1.2.5
├─ has-value@1.0.0
├─ has-values@1.0.0
├─ hpack.js@2.1.6
├─ html-entities@1.2.1
├─ http-deceiver@1.2.7
├─ http-errors@1.6.2
├─ http-parser-js@0.4.10
├─ http-proxy-middleware@0.17.4
├─ http-proxy@1.16.2
├─ iconv-lite@0.4.19
├─ import-local@1.0.0
├─ internal-ip@1.2.0
├─ ip@1.1.5
├─ ipaddr.js@1.6.0
├─ is-accessor-descriptor@1.0.0
├─ is-callable@1.1.3
├─ is-data-descriptor@1.0.0
├─ is-date-object@1.0.1
├─ is-descriptor@1.0.2
├─ is-odd@2.0.0
├─ is-path-cwd@1.0.0
├─ is-path-in-cwd@1.0.0
├─ is-path-inside@1.0.1
├─ is-regex@1.0.4
├─ is-symbol@1.0.1
├─ is-windows@1.0.2
├─ is-wsl@1.1.0
├─ json3@3.3.2
├─ killable@1.0.0
├─ lazy-cache@2.0.2
├─ lodash.endswith@4.2.1
├─ lodash.isfunction@3.0.9
├─ lodash.isstring@4.0.1
├─ lodash.startswith@4.2.1
├─ log-symbols@2.2.0
├─ loglevel@1.6.1
├─ loglevelnext@1.0.3
├─ map-cache@0.2.2
├─ map-visit@1.0.0
├─ media-typer@0.3.0
├─ merge-descriptors@1.0.1
├─ methods@1.1.2
├─ mime@2.2.0
├─ mixin-deep@1.3.1
├─ multicast-dns-service-types@1.1.0
├─ multicast-dns@6.2.3
├─ nanomatch@1.2.9
├─ negotiator@0.6.1
├─ node-forge@0.7.1
├─ object-copy@0.1.0
├─ object-keys@1.0.11
├─ object-visit@1.0.1
├─ object.pick@1.3.0
├─ obuf@1.1.1
├─ on-finished@2.3.0
├─ on-headers@1.0.1
├─ opn@5.2.0
├─ original@1.0.0
├─ p-map@1.2.0
├─ parseurl@1.3.2
├─ pascalcase@0.1.1
├─ path-dirname@1.0.2
├─ path-is-inside@1.0.2
├─ path-to-regexp@0.1.7
├─ portfinder@1.0.13
├─ posix-character-classes@0.1.1
├─ proxy-addr@2.0.3
├─ querystringify@1.0.0
├─ range-parser@1.2.0
├─ raw-body@2.3.2
├─ regex-not@1.0.2
├─ requires-port@1.0.0
├─ resolve-cwd@2.0.0
├─ resolve-from@3.0.0
├─ resolve-url@0.2.1
├─ ret@0.1.15
├─ safe-regex@1.1.0
├─ select-hose@2.0.0
├─ selfsigned@1.10.2
├─ send@0.16.1
├─ serve-index@1.9.1
├─ serve-static@1.13.1
├─ set-getter@0.1.0
├─ set-value@2.0.0
├─ setprototypeof@1.1.0
├─ snapdragon-node@2.1.1
├─ snapdragon-util@3.0.1
├─ snapdragon@0.8.1
├─ sockjs-client@1.1.4
├─ sockjs@0.3.19
├─ source-map-resolve@0.5.1
├─ source-map-url@0.4.0
├─ spdy-transport@2.0.20
├─ spdy@3.4.7
├─ split-string@3.1.0
├─ static-extend@0.1.2
├─ statuses@1.3.1
├─ thunky@1.0.2
├─ to-object-path@0.3.0
├─ to-regex-range@2.1.1
├─ to-regex@3.0.2
├─ type-is@1.6.16
├─ union-value@1.0.0
├─ unpipe@1.0.0
├─ unset-value@1.0.0
├─ upath@1.0.2
├─ urix@0.1.0
├─ url-join@2.0.5
├─ url-parse@1.2.0
├─ use@2.0.2
├─ utils-merge@1.0.1
├─ vary@1.1.2
├─ wbuf@1.7.2
├─ webpack-dev-middleware@2.0.6
├─ webpack-dev-server@3.0.0
├─ webpack-log@1.1.2
├─ websocket-driver@0.7.0
├─ websocket-extensions@0.1.3
└─ yargs@9.0.1
Done in 23.59s.
Webpacker successfully installed 🎉 🍰



rails webpacker:install:react
Webpacker is installed 🎉 🍰
Using /home/hjf/HJFcoding/config/webpacker.yml file for setting up webpack paths


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

Copying react preset to your .babelrc file
Copying react example entry file to /home/hjf/HJFcoding/app/javascript/packs
      create  app/javascript/packs/hello_react.jsx
Updating webpack paths to include .jsx file extension
      insert  config/webpacker.yml
Installing all react dependencies
         run  yarn add react react-dom babel-preset-react prop-types from "."
yarn add v1.2.1
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@1.1.3: The platform "linux" is incompatible with this module.
info "fsevents@1.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
warning "postcss-cssnext@3.1.0" has unmet peer dependency "caniuse-lite@^1.0.30000697".
warning "webpack-dev-server@3.0.0" has unmet peer dependency "webpack@^4.0.0-beta.1".
warning "webpack-dev-middleware@2.0.6" has unmet peer dependency "webpack@^2.2.0 || ^3.0.0 || ^4.0.0-alpha || ^4.0.0-beta || ^4.0.0".
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 21 new dependencies.
├─ asap@2.0.6
├─ babel-helper-builder-react-jsx@6.26.0
├─ babel-plugin-syntax-flow@6.18.0
├─ babel-plugin-syntax-jsx@6.18.0
├─ babel-plugin-transform-flow-strip-types@6.22.0
├─ babel-plugin-transform-react-display-name@6.25.0
├─ babel-plugin-transform-react-jsx-self@6.22.0
├─ babel-plugin-transform-react-jsx-source@6.22.0
├─ babel-plugin-transform-react-jsx@6.24.1
├─ babel-preset-flow@6.23.0
├─ babel-preset-react@6.24.1
├─ encoding@0.1.12
├─ fbjs@0.8.16
├─ isomorphic-fetch@2.2.1
├─ node-fetch@1.7.3
├─ promise@7.3.1
├─ prop-types@15.6.0
├─ react-dom@16.2.0
├─ react@16.2.0
├─ ua-parser-js@0.7.17
└─ whatwg-fetch@2.0.3
Done in 15.83s.
Webpacker now supports react.js 🎉



rails generate react:install


  RuCaptcha's cache_store requirements are stored across processes and machines,
  such as :mem_cache_store, :redis_store, or other distributed storage.
  But your current set is null_store, it has changed to :file_store for working.
  NOTE: :file_store is still not a good way, it only works with single server case.

  Please make config file `config/initializers/rucaptcha.rb` to setup `cache_store`.
  More infomation please read GitHub RuCaptcha README file.
  https://github.com/huacnlee/rucaptcha

      create  app/javascript/components
      create  app/javascript/components/.gitkeep
warning "postcss-cssnext@3.1.0" has unmet peer dependency "caniuse-lite@^1.0.30000697".
warning "webpack-dev-server@3.0.0" has unmet peer dependency "webpack@^4.0.0-beta.1".
warning "webpack-dev-middleware@2.0.6" has unmet peer dependency "webpack@^2.2.0 || ^3.0.0 || ^4.0.0-alpha || ^4.0.0-beta || ^4.0.0".
      append  app/javascript/packs/application.js
      create  app/javascript/packs/server_rendering.js
