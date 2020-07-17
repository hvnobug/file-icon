const fileIcon = {
    fileIcons: {
        defaultIcon: {name: 'file'},
        icons: [
            {name: 'html', fileExtensions: ['htm', 'xhtml', 'html_vm', 'asp']},
            {
                name: 'pug',
                fileExtensions: ['jade', 'pug'],
                fileNames: [
                    '.pug-lintrc',
                    '.pug-lintrc.js',
                    '.pug-lintrc.json'
                ]
            },
            {
                name: 'markdown',
                fileExtensions: [
                    'md',
                    'markdown',
                    'rst'
                ]
            },
            {name: 'blink', fileExtensions: ['blink']},
            {name: 'css', fileExtensions: ['css']},
            {name: 'sass', fileExtensions: ['scss', 'sass']},
            {name: 'less', fileExtensions: ['less']},
            {
                name: 'json',
                fileExtensions: ['json', 'tsbuildinfo', 'json5'],
                fileNames: [
                    '.jscsrc',
                    '.jshintrc',
                    'composer.lock',
                    '.jsbeautifyrc',
                    '.esformatter',
                    'cdp.pid',
                    '.mjmlconfig',
                ]
            },
            {
                name: 'jinja',
                fileExtensions: ['jinja', 'jinja2', 'j2']
            },
            {
                name: 'sublime',
                fileExtensions: ['sublime-project', 'sublime-workspace']
            },
            {name: 'yaml', fileExtensions: ['yaml', 'YAML-tmLanguage', 'yml']},
            {
                name: 'xml',
                fileExtensions: [
                    'xml',
                    'plist',
                    'xsd',
                    'dtd',
                    'xsl',
                    'xslt',
                    'resx',
                    'iml',
                    'xquery',
                    'tmLanguage',
                    'manifest',
                    'project'
                ],
                fileNames: ['.htaccess']
            },
            {
                name: 'image',
                fileExtensions: [
                    'png',
                    'jpeg',
                    'jpg',
                    'gif',
                    'ico',
                    'tif',
                    'tiff',
                    'psd',
                    'psb',
                    'ami',
                    'apx',
                    'bmp',
                    'bpg',
                    'brk',
                    'cur',
                    'dds',
                    'dng',
                    'exr',
                    'fpx',
                    'gbr',
                    'img',
                    'jbig2',
                    'jb2',
                    'jng',
                    'jxr',
                    'pbm',
                    'pgf',
                    'pic',
                    'raw',
                    'webp',
                    'eps',
                    'afphoto',
                    'ase',
                    'aseprite',
                    'clip',
                    'cpt',
                    'heif',
                    'heic',
                    'kra',
                    'mdp',
                    'ora',
                    'pdn',
                    'reb',
                    'sai',
                    'tga',
                    'xcf'
                ]
            },
            {name: 'javascript', fileExtensions: ['js', 'esx', 'mjs']},
            {name: 'react', fileExtensions: ['jsx']},
            {name: 'react_ts', fileExtensions: ['tsx']},
            {
                name: 'routing',
                fileExtensions: ['routing.ts', 'routing.tsx', 'routing.js', 'routing.jsx', 'routes.ts', 'routes.tsx', 'routes.js', 'routes.jsx'],
                fileNames: ['router.js', 'router.jsx', 'router.ts', 'router.tsx', 'routes.js', 'routes.jsx', 'routes.ts', 'routes.tsx']
            },
            {
                name: 'redux-action',
                fileExtensions: ['action.js', 'actions.js', 'action.ts', 'actions.ts'],
                fileNames: ['action.js', 'actions.js', 'action.ts', 'actions.ts']
            },
            {
                name: 'redux-reducer',
                fileExtensions: ['reducer.js', 'reducers.js', 'reducer.ts', 'reducers.ts'],
                fileNames: ['reducer.js', 'reducers.js', 'reducer.ts', 'reducers.ts']
            },
            {
                name: 'redux-store',
                fileExtensions: ['store.js', 'store.ts'],
                fileNames: ['store.js', 'store.ts']
            },
            {
                name: 'settings',
                fileExtensions: [
                    'ini',
                    'dlc',
                    'dll',
                    'config',
                    'conf',
                    'properties',
                    'prop',
                    'settings',
                    'option',
                    'props',
                    'toml',
                    'prefs',
                    'sln.dotsettings',
                    'sln.dotsettings.user',
                    'cfg'
                ],
                fileNames: [
                    '.jshintignore',
                    '.buildignore',
                    '.mrconfig',
                    '.yardopts',
                    'manifest.mf',
                    '.clang-format',
                    '.clang-tidy'
                ]
            },
            {name: 'typescript', fileExtensions: ['ts']},
            {name: 'typescript-def', fileExtensions: ['d.ts']},
            {name: 'markojs', fileExtensions: ['marko']},
            {name: 'pdf', fileExtensions: ['pdf']},
            {name: 'table', fileExtensions: ['xlsx', 'xls', 'csv', 'tsv']},
            {
                name: 'vscode',
                fileExtensions: ['vscodeignore', 'vsixmanifest', 'vsix', 'code-workplace']
            },
            {
                name: 'visualstudio',
                fileExtensions: [
                    'csproj',
                    'ruleset',
                    'sln',
                    'suo',
                    'vb',
                    'vbs',
                    'vcxitems',
                    'vcxitems.filters',
                    'vcxproj',
                    'vcxproj.filters'
                ]
            },
            {
                name: 'database',
                fileExtensions: ['pdb', 'sql', 'pks', 'pkb', 'accdb', 'mdb', 'sqlite', 'pgsql', 'postgres', 'psql']
            },
            {name: 'csharp', fileExtensions: ['cs', 'csx']},
            {name: 'qsharp', fileExtensions: ['qs']},
            {
                name: 'zip',
                fileExtensions: [
                    'zip',
                    'tar',
                    'gz',
                    'xz',
                    'br',
                    'bzip2',
                    'gzip',
                    'brotli',
                    '7z',
                    'rar',
                    'tgz'
                ]
            },
            {name: 'vala', fileExtensions: ['vala']},
            {name: 'zig', fileExtensions: ['zig']},
            {name: 'exe', fileExtensions: ['exe', 'msi']},
            {name: 'java', fileExtensions: ['java', 'jar', 'jsp']},
            {name: 'c', fileExtensions: ['c', 'm', 'i', 'mi']},
            {name: 'h', fileExtensions: ['h']},
            {name: 'cpp', fileExtensions: ['cc', 'cpp', 'cxx', 'c++', 'cp', 'mm', 'mii', 'ii']},
            {name: 'hpp', fileExtensions: ['hh', 'hpp', 'hxx', 'h++', 'hp', 'tcc', 'inl']},
            {name: 'go', fileExtensions: ['go']},
            {name: 'go-mod', fileNames: ['go.mod', 'go.sum']},
            {name: 'python', fileExtensions: ['py']},
            {
                name: 'python-misc',
                fileExtensions: ['pyc', 'whl'],
                fileNames: ['requirements.txt', 'pipfile', '.python-version', 'manifest.in']
            },
            {name: 'url', fileExtensions: ['url']},
            {
                name: 'console',
                fileExtensions: [
                    'sh',
                    'ksh',
                    'csh',
                    'tcsh',
                    'zsh',
                    'bash',
                    'bat',
                    'cmd',
                    'awk',
                    'fish'
                ]
            },
            {
                name: 'powershell',
                fileExtensions: ['ps1', 'psm1', 'psd1', 'ps1xml', 'psc1', 'pssc']
            },
            {
                name: 'gradle',
                fileExtensions: ['gradle'],
                fileNames: ['gradle.properties', 'gradlew', 'gradle-wrapper.properties']
            },
            {name: 'word', fileExtensions: ['doc', 'docx', 'rtf']},
            {
                name: 'certificate',
                fileExtensions: ['cer', 'cert', 'crt'],
                fileNames: [
                    'license',
                    'license.md',
                    'license.txt',
                    'licence',
                    'licence.md',
                    'licence.txt',
                    'unlicense',
                    'unlicense.md',
                    'unlicense.txt'
                ]
            },
            {
                name: 'key',
                fileExtensions: ['pub', 'key', 'pem', 'asc', 'gpg'],
                fileNames: ['.htpasswd']
            },
            {
                name: 'font',
                fileExtensions: [
                    'woff',
                    'woff2',
                    'ttf',
                    'eot',
                    'suit',
                    'otf',
                    'bmap',
                    'fnt',
                    'odttf',
                    'ttc',
                    'font',
                    'fonts',
                    'sui',
                    'ntf',
                    'mrf'
                ]
            },
            {name: 'lib', fileExtensions: ['lib', 'bib']},
            {name: 'ruby', fileExtensions: ['rb', 'erb']},
            {name: 'gemfile', fileNames: ['gemfile']},
            {name: 'fsharp', fileExtensions: ['fs', 'fsx', 'fsi', 'fsproj']},
            {name: 'swift', fileExtensions: ['swift']},
            {name: 'arduino', fileExtensions: ['ino']},
            {
                name: 'docker',
                fileExtensions: ['dockerignore', 'dockerfile'],
                fileNames: [
                    'dockerfile',
                    'docker-compose.yml',
                    'docker-compose.yaml',
                    'docker-compose.dev.yml',
                    'docker-compose.local.yml',
                    'docker-compose.ci.yml',
                    'docker-compose.override.yml',
                    'docker-compose.staging.yml',
                    'docker-compose.prod.yml',
                    'docker-compose.production.yml',
                    'docker-compose.test.yml'
                ]
            },
            {name: 'tex', fileExtensions: ['tex', 'cls', 'sty', 'dtx', 'ltx']},
            {
                name: 'powerpoint',
                fileExtensions: [
                    'pptx',
                    'ppt',
                    'pptm',
                    'potx',
                    'potm',
                    'ppsx',
                    'ppsm',
                    'pps',
                    'ppam',
                    'ppa'
                ]
            },
            {
                name: 'video',
                fileExtensions: [
                    'webm',
                    'mkv',
                    'flv',
                    'vob',
                    'ogv',
                    'ogg',
                    'gifv',
                    'avi',
                    'mov',
                    'qt',
                    'wmv',
                    'yuv',
                    'rm',
                    'rmvb',
                    'mp4',
                    'm4v',
                    'mpg',
                    'mp2',
                    'mpeg',
                    'mpe',
                    'mpv',
                    'm2v'
                ]
            },
            {name: 'virtual', fileExtensions: ['vdi', 'vbox', 'vbox-prev']},
            {name: 'email', fileExtensions: ['ics'], fileNames: ['.mailmap']},
            {name: 'audio', fileExtensions: ['mp3', 'flac', 'm4a', 'wma', 'aiff']},
            {name: 'coffee', fileExtensions: ['coffee', 'cson', 'iced']},
            {name: 'document', fileExtensions: ['txt']},
            {name: 'graphql', fileExtensions: ['graphql', 'gql'], fileNames: ['.graphqlconfig']},
            {name: 'rust', fileExtensions: ['rs']},
            {name: 'raml', fileExtensions: ['raml']},
            {name: 'xaml', fileExtensions: ['xaml']},
            {name: 'haskell', fileExtensions: ['hs']},
            {name: 'kotlin', fileExtensions: ['kt', 'kts']},
            {
                name: 'git',
                fileExtensions: ['patch'],
                fileNames: [
                    '.gitignore',
                    '.gitconfig',
                    '.gitattributes',
                    '.gitmodules',
                    '.gitkeep',
                    'git-history'
                ]
            },
            {name: 'lua', fileExtensions: ['lua'], fileNames: ['.luacheckrc']},
            {name: 'clojure', fileExtensions: ['clj', 'cljs', 'cljc']},
            {name: 'groovy', fileExtensions: ['groovy']},
            {name: 'r', fileExtensions: ['r', 'rmd'], fileNames: ['.Rhistory']},
            {name: 'dart', fileExtensions: ['dart']},
            {name: 'actionscript', fileExtensions: ['as']},
            {name: 'mxml', fileExtensions: ['mxml']},
            {name: 'autohotkey', fileExtensions: ['ahk']},
            {name: 'flash', fileExtensions: ['swf']},
            {name: 'swc', fileExtensions: ['swc']},
            {
                name: 'cmake',
                fileExtensions: ['cmake'],
                fileNames: ['cmakelists.txt', 'cmakecache.txt']
            },
            {
                name: 'assembly',
                fileExtensions: [
                    'asm',
                    'a51',
                    'inc',
                    'nasm',
                    's',
                    'ms',
                    'agc',
                    'ags',
                    'aea',
                    'argus',
                    'mitigus',
                    'binsource'
                ]
            },
            {name: 'vue', fileExtensions: ['vue']},
            {name: 'vue-config', fileNames: ['vue.config.js', 'vue.config.ts']},
            {
                name: 'vuex-store',
                fileExtensions: ['store.js', 'store.ts'],
                fileNames: ['store.js', 'store.ts']
            },
            {name: 'nuxt', fileNames: ['nuxt.config.js', 'nuxt.config.ts']},
            {name: 'ocaml', fileExtensions: ['ml', 'mli', 'cmx']},
            {name: 'javascript-map', fileExtensions: ['js.map', 'mjs.map']},
            {name: 'css-map', fileExtensions: ['css.map']},
            {name: 'lock', fileExtensions: ['lock'], fileNames: ['security.md', 'security.txt', 'security']},
            {name: 'handlebars', fileExtensions: ['hbs', 'mustache']},
            {name: 'perl', fileExtensions: ['pm', 'raku']},
            {name: 'haxe', fileExtensions: ['hx']},
            {name: 'test-ts', fileExtensions: ['spec.ts', 'e2e-spec.ts', 'test.ts', 'ts.snap']},
            {
                name: 'test-jsx',
                fileExtensions: [
                    'spec.tsx',
                    'test.tsx',
                    'tsx.snap',
                    'spec.jsx',
                    'test.jsx',
                    'jsx.snap'
                ]
            },
            {name: 'test-js', fileExtensions: ['spec.js', 'e2e-spec.js', 'test.js', 'js.snap']},
            {
                name: 'angular',
                fileExtensions: ['module.ts', 'module.js', 'ng-template'],
                fileNames: ['angular-cli.json', '.angular-cli.json', 'angular.json']
            },
            {
                name: 'angular-component',
                fileExtensions: ['component.ts', 'component.js']
            },
            {
                name: 'angular-guard',
                fileExtensions: ['guard.ts', 'guard.js']
            },
            {
                name: 'angular-service',
                fileExtensions: ['service.ts', 'service.js']
            },
            {
                name: 'angular-pipe',
                fileExtensions: ['pipe.ts', 'pipe.js', 'filter.js']
            },
            {
                name: 'angular-directive',
                fileExtensions: ['directive.ts', 'directive.js']
            },
            {
                name: 'angular-resolver',
                fileExtensions: ['resolver.ts', 'resolver.js']
            },
            {name: 'puppet', fileExtensions: ['pp']},
            {name: 'elixir', fileExtensions: ['ex', 'exs', 'eex', 'leex']},
            {name: 'livescript', fileExtensions: ['ls']},
            {name: 'erlang', fileExtensions: ['erl']},
            {name: 'twig', fileExtensions: ['twig']},
            {name: 'julia', fileExtensions: ['jl']},
            {name: 'elm', fileExtensions: ['elm']},
            {name: 'purescript', fileExtensions: ['pure', 'purs']},
            {name: 'smarty', fileExtensions: ['tpl']},
            {name: 'stylus', fileExtensions: ['styl']},
            {name: 'reason', fileExtensions: ['re', 'rei']},
            {name: 'bucklescript', fileExtensions: ['cmj']},
            {name: 'merlin', fileExtensions: ['merlin']},
            {name: 'verilog', fileExtensions: ['v', 'vhd', 'sv', 'svh']},
            {name: 'mathematica', fileExtensions: ['nb']},
            {name: 'wolframlanguage', fileExtensions: ['wl', 'wls']},
            {name: 'nunjucks', fileExtensions: ['njk', 'nunjucks']},
            {name: 'robot', fileExtensions: ['robot']},
            {name: 'solidity', fileExtensions: ['sol']},
            {name: 'autoit', fileExtensions: ['au3']},
            {name: 'haml', fileExtensions: ['haml']},
            {name: 'yang', fileExtensions: ['yang']},
            {name: 'mjml', fileExtensions: ['mjml']},
            {
                name: 'vercel',
                fileNames: ['vercel.json', '.vercelignore', 'now.json', '.nowignore']
            },
            {
                name: 'terraform',
                fileExtensions: ['tf', 'tf.json', 'tfvars', 'tfstate']
            },
            {name: 'laravel', fileExtensions: ['blade.php', 'inky.php']},
            {name: 'applescript', fileExtensions: ['applescript', 'ipa']},
            {name: 'cake', fileExtensions: ['cake']},
            {name: 'cucumber', fileExtensions: ['feature']},
            {name: 'nim', fileExtensions: ['nim', 'nimble']},
            {name: 'apiblueprint', fileExtensions: ['apib', 'apiblueprint']},
            {name: 'riot', fileExtensions: ['riot', 'tag']},
            {name: 'vfl', fileExtensions: ['vfl'], fileNames: ['.vfl']},
            {name: 'kl', fileExtensions: ['kl'], fileNames: ['.kl']},
            {
                name: 'postcss',
                fileExtensions: ['pcss', 'sss'],
                fileNames: ['postcss.config.js', '.postcssrc.js', '.postcssrc', '.postcssrc.json', '.postcssrc.yml']
            },
            {name: 'todo', fileExtensions: ['todo']},
            {name: 'coldfusion', fileExtensions: ['cfml', 'cfc', 'lucee', 'cfm']},
            {name: 'cabal', fileExtensions: ['cabal']},
            {name: 'nix', fileExtensions: ['nix']},
            {name: 'slim', fileExtensions: ['slim']},
            {name: 'http', fileExtensions: ['http', 'rest']},
            {name: 'restql', fileExtensions: ['rql', 'restql']},
            {name: 'kivy', fileExtensions: ['kv']},
            {
                name: 'graphcool',
                fileExtensions: ['graphcool'],
                fileNames: ['project.graphcool']
            },
            {name: 'sbt', fileExtensions: ['sbt']},
            {
                name: 'webpack',
                fileNames: [
                    'webpack.js',
                    'webpack.ts',
                    'webpack.base.js',
                    'webpack.base.ts',
                    'webpack.config.js',
                    'webpack.config.ts',
                    'webpack.common.js',
                    'webpack.common.ts',
                    'webpack.config.common.js',
                    'webpack.config.common.ts',
                    'webpack.config.common.babel.js',
                    'webpack.config.common.babel.ts',
                    'webpack.dev.js',
                    'webpack.dev.ts',
                    'webpack.development.js',
                    'webpack.development.ts',
                    'webpack.config.dev.js',
                    'webpack.config.dev.ts',
                    'webpack.config.dev.babel.js',
                    'webpack.config.dev.babel.ts',
                    'webpack.prod.js',
                    'webpack.prod.ts',
                    'webpack.production.js',
                    'webpack.production.ts',
                    'webpack.server.js',
                    'webpack.server.ts',
                    'webpack.client.js',
                    'webpack.client.ts',
                    'webpack.config.server.js',
                    'webpack.config.server.ts',
                    'webpack.config.client.js',
                    'webpack.config.client.ts',
                    'webpack.config.production.babel.js',
                    'webpack.config.production.babel.ts',
                    'webpack.config.prod.babel.js',
                    'webpack.config.prod.babel.ts',
                    'webpack.config.prod.js',
                    'webpack.config.prod.ts',
                    'webpack.config.production.js',
                    'webpack.config.production.ts',
                    'webpack.config.staging.js',
                    'webpack.config.staging.ts',
                    'webpack.config.babel.js',
                    'webpack.config.babel.ts',
                    'webpack.config.base.babel.js',
                    'webpack.config.base.babel.ts',
                    'webpack.config.base.js',
                    'webpack.config.base.ts',
                    'webpack.config.staging.babel.js',
                    'webpack.config.staging.babel.ts',
                    'webpack.config.coffee',
                    'webpack.config.test.js',
                    'webpack.config.test.ts',
                    'webpack.config.vendor.js',
                    'webpack.config.vendor.ts',
                    'webpack.config.vendor.production.js',
                    'webpack.config.vendor.production.ts',
                    'webpack.test.js',
                    'webpack.test.ts',
                    'webpack.dist.js',
                    'webpack.dist.ts',
                    'webpackfile.js',
                    'webpackfile.ts'
                ]
            },
            {name: 'ionic', fileNames: ['ionic.config.json', '.io-config.json']},
            {
                name: 'gulp',
                fileNames: ['gulpfile.js', 'gulpfile.ts', 'gulpfile.babel.js']
            },
            {
                name: 'nodejs',
                fileNames: ['package.json', 'package-lock.json', '.nvmrc', '.esmrc', '.node-version']
            },
            {name: 'npm', fileNames: ['.npmignore', '.npmrc']},
            {
                name: 'yarn',
                fileNames: [
                    '.yarnrc',
                    'yarn.lock',
                    '.yarnclean',
                    '.yarn-integrity',
                    'yarn-error.log',
                    '.yarnrc.yml',
                    '.yarnrc.yaml',
                ]
            },
            {name: 'android', fileNames: ['androidmanifest.xml'], fileExtensions: ['apk']},
            {
                name: 'tune',
                fileExtensions: ['env'],
                fileNames: [
                    '.env.defaults',
                    '.env.example',
                    '.env.sample',
                    '.env.schema',
                    '.env.local',
                    '.env.dev',
                    '.env.development',
                    '.env.qa',
                    '.env.prod',
                    '.env.production',
                    '.env.staging',
                    '.env.preview',
                    '.env.test',
                    '.env.testing',
                    '.env.development.local',
                    '.env.qa.local',
                    '.env.production.local',
                    '.env.staging.local',
                    '.env.test.local',
                ]
            },
            {
                name: 'babel',
                fileNames: ['.babelrc', '.babelrc.js', '.babelrc.json', 'babel.config.json', 'babel.config.js']
            },
            {
                name: 'contributing',
                fileNames: ['contributing.md']
            },
            {name: 'readme', fileNames: ['readme.md', 'readme.txt', 'readme']},
            {
                name: 'changelog',
                fileNames: ['changelog', 'changelog.md', 'changelog.txt', 'changes', 'changes.md', 'changes.txt']
            },
            {
                name: 'credits',
                fileNames: ['credits', 'credits.txt', 'credits.md']
            },
            {
                name: 'authors',
                fileNames: ['authors', 'authors.md', 'authors.txt']
            },
            {name: 'flow', fileNames: ['.flowconfig']},
            {name: 'favicon', fileNames: ['favicon.ico']},
            {
                name: 'karma',
                fileNames: [
                    'karma.conf.js',
                    'karma.conf.ts',
                    'karma.conf.coffee',
                    'karma.config.js',
                    'karma.config.ts',
                    'karma-main.js',
                    'karma-main.ts'
                ]
            },
            {name: 'bithound', fileNames: ['.bithoundrc']},
            {name: 'appveyor', fileNames: ['.appveyor.yml', 'appveyor.yml']},
            {name: 'travis', fileNames: ['.travis.yml']},
            {name: 'codecov', fileNames: ['.codecov.yml', 'codecov.yml']},
            {
                name: 'protractor',
                fileNames: [
                    'protractor.conf.js',
                    'protractor.conf.ts',
                    'protractor.conf.coffee',
                    'protractor.config.js',
                    'protractor.config.ts'
                ]
            },
            {name: 'fusebox', fileNames: ['fuse.js']},
            {name: 'heroku', fileNames: ['procfile', 'procfile.windows']},
            {name: 'editorconfig', fileNames: ['.editorconfig']},
            {name: 'gitlab', fileExtensions: ['gitlab-ci.yml']},
            {name: 'bower', fileNames: ['.bowerrc', 'bower.json']},
            {
                name: 'eslint',
                fileNames: [
                    '.eslintrc.js',
                    '.eslintrc.yaml',
                    '.eslintrc.yml',
                    '.eslintrc.json',
                    '.eslintrc',
                    '.eslintignore',
                    '.eslintcache'
                ]
            },
            {
                name: 'conduct',
                fileNames: ['code_of_conduct.md', 'code_of_conduct.txt']
            },
            {name: 'watchman', fileNames: ['.watchmanconfig']},
            {name: 'aurelia', fileNames: ['aurelia.json']},
            {
                name: 'mocha',
                fileNames: [
                    'mocha.opts',
                    '.mocharc.yml',
                    '.mocharc.yaml',
                    '.mocharc.js',
                    '.mocharc.json',
                    '.mocharc.jsonc'
                ]
            },
            {name: 'jenkins', fileNames: ['jenkinsfile'], fileExtensions: ['jenkinsfile', 'jenkins']},
            {
                name: 'firebase',
                fileNames: [
                    'firebase.json',
                    '.firebaserc',
                    'firestore.rules',
                    'firestore.indexes.json'
                ]
            },
            {
                name: 'rollup',
                fileNames: [
                    'rollup.config.js',
                    'rollup.config.ts',
                    'rollup-config.js',
                    'rollup-config.ts',
                    'rollup.config.common.js',
                    'rollup.config.common.ts',
                    'rollup.config.base.js',
                    'rollup.config.base.ts',
                    'rollup.config.prod.js',
                    'rollup.config.prod.ts',
                    'rollup.config.dev.js',
                    'rollup.config.dev.ts',
                    'rollup.config.prod.vendor.js',
                    'rollup.config.prod.vendor.ts'
                ]
            },
            {name: 'hack', fileNames: ['.hhconfig']},
            {
                name: 'stylelint',
                fileNames: [
                    '.stylelintrc',
                    'stylelint.config.js',
                    '.stylelintrc.json',
                    '.stylelintrc.yaml',
                    '.stylelintrc.yml',
                    '.stylelintrc.js',
                    '.stylelintignore'
                ]
            },
            {name: 'code-climate', fileNames: ['.codeclimate.yml']},
            {
                name: 'prettier',
                fileNames: ['.prettierrc', 'prettier.config.js', '.prettierrc.js', '.prettierrc.json', '.prettierrc.yaml', '.prettierrc.yml', '.prettierignore']
            },
            {name: 'apollo', fileNames: ['apollo.config.js']},
            {name: 'nodemon', fileNames: ['nodemon.json', 'nodemon-debug.json']},
            {name: 'ngrx-reducer', fileExtensions: ['reducer.ts', 'rootReducer.ts']},
            {name: 'ngrx-state', fileExtensions: ['state.ts']},
            {name: 'ngrx-actions', fileExtensions: ['actions.ts']},
            {name: 'ngrx-effects', fileExtensions: ['effects.ts']},
            {name: 'ngrx-entity', fileNames: ['.entity']},
            {name: 'webhint', fileNames: ['.hintrc']},
            {name: 'browserlist', fileNames: ['browserslist', '.browserslistrc']},
            {name: 'crystal', fileExtensions: ['cr', 'ecr']},
            {name: 'snyk', fileNames: ['.snyk']},
            {name: 'drone', fileExtensions: ['drone.yml'], fileNames: ['.drone.yml']},
            {name: 'cuda', fileExtensions: ['cu', 'cuh']},
            {name: 'log', fileExtensions: ['log']},
            {name: 'dotjs', fileExtensions: ['def', 'dot', 'jst']},
            {name: 'ejs', fileExtensions: ['ejs']},
            {name: 'sequelize', fileNames: ['.sequelizerc']},
            {
                name: 'gatsby',
                fileNames: ['gatsby.config.js', 'gatsby-config.js', 'gatsby-node.js', 'gatsby-browser.js', 'gatsby-ssr.js']
            },
            {name: 'wakatime', fileNames: ['.wakatime-project'], fileExtensions: ['.wakatime-project']},
            {name: 'circleci', fileNames: ['circle.yml']},
            {name: 'cloudfoundry', fileNames: ['.cfignore']},
            {
                name: 'grunt',
                fileNames: [
                    'gruntfile.js',
                    'gruntfile.ts',
                    'gruntfile.coffee',
                    'gruntfile.babel.js',
                    'gruntfile.babel.ts',
                    'gruntfile.babel.coffee'
                ]
            },
            {
                name: 'jest',
                fileNames: ['jest.config.js', 'jest.config.ts', 'jest.config.cjs', 'jest.config.mjs', 'jest.config.json', 'jest.setup.js', 'jest.setup.ts', 'jest.json', '.jestrc', '.jestrc.js', '.jestrc.json', 'jest.teardown.js']
            },
            {name: 'processing', fileExtensions: ['pde']},
            {
                name: 'storybook',
                fileExtensions: ['stories.js', 'stories.jsx', 'story.js', 'story.jsx', 'stories.ts', 'stories.tsx', 'story.ts', 'story.tsx']
            },
            {name: 'wepy', fileExtensions: ['wpy']},
            {name: 'fastlane', fileNames: ['fastfile', 'appfile']},
            {name: 'hcl', fileExtensions: ['hcl']},
            {name: 'helm', fileNames: ['.helmignore']},
            {name: 'san', fileExtensions: ['san']},
            {name: 'wallaby', fileNames: ['wallaby.js', 'wallaby.conf.js']},
            {name: 'django', fileExtensions: ['djt']},
            {name: 'stencil', fileNames: ['stencil.config.js', 'stencil.config.ts']},
            {name: 'red', fileExtensions: ['red']},
            {name: 'makefile', fileNames: ['makefile']},
            {name: 'foxpro', fileExtensions: ['fxp', 'prg']},
            {name: 'i18n', fileExtensions: ['pot', 'po', 'mo']},
            {name: 'webassembly', fileExtensions: ['wat', 'wasm']},
            {
                name: 'semantic-release',
                fileNames: ['.releaserc', '.releaserc.yaml', '.releaserc.yml', '.releaserc.json', '.releaserc.js', 'release.config.js']
            },
            {name: 'bitbucket', fileNames: ['bitbucket-pipelines.yaml', 'bitbucket-pipelines.yml']},
            {name: 'jupyter', fileExtensions: ['ipynb']},
            {name: 'd', fileExtensions: ['d']},
            {name: 'mdx', fileExtensions: ['mdx']},
            {name: 'ballerina', fileExtensions: ['bal', 'balx']},
            {name: 'racket', fileExtensions: ['rkt']},
            {name: 'bazel', fileExtensions: ['bzl', 'bazel'], fileNames: ['.bazelignore', '.bazelrc']},
            {name: 'mint', fileExtensions: ['mint']},
            {name: 'velocity', fileExtensions: ['vm', 'fhtml', 'vtl']},
            {name: 'godot', fileExtensions: ['gd']},
            {name: 'godot-assets', fileExtensions: ['godot', 'tres', 'tscn']},
            {
                name: 'azure-pipelines',
                fileNames: ['azure-pipelines.yml', 'azure-pipelines.yaml'],
                fileExtensions: ['azure-pipelines.yml', 'azure-pipelines.yaml']
            },
            {name: 'azure', fileExtensions: ['azcli']},
            {name: 'vagrant', fileNames: ['vagrantfile'], fileExtensions: ['vagrantfile']},
            {name: 'prisma', fileNames: ['prisma.yml'], fileExtensions: ['prisma']},
            {name: 'razor', fileExtensions: ['cshtml', 'vbhtml']},
            {name: 'abc', fileExtensions: ['abc']},
            {name: 'asciidoc', fileExtensions: ['ad', 'adoc', 'asciidoc']},
            {name: 'istanbul', fileNames: ['.nycrc', '.nycrc.json']},
            {name: 'edge', fileExtensions: ['edge']},
            {name: 'scheme', fileExtensions: ['ss', 'scm']},
            {name: 'lisp', fileExtensions: ['lisp', 'lsp', 'cl', 'fast']},
            {name: 'tailwindcss', fileNames: ['tailwind.js', 'tailwind.config.js']},
            {
                name: '3d',
                fileExtensions: [
                    'stl',
                    'obj',
                    'ac',
                    'blend',
                    'mesh',
                    'mqo',
                    'pmd',
                    'pmx',
                    'skp',
                    'vac',
                    'vdp',
                    'vox'
                ]
            },
            {name: 'buildkite', fileNames: ['buildkite.yml', 'buildkite.yaml']},
            {name: 'netlify', fileNames: ['netlify.json', 'netlify.yml', 'netlify.yaml', 'netlify.toml']},
            {name: 'svg', fileExtensions: ['svg']},
            {name: 'svelte', fileExtensions: ['svelte']},
            {name: 'vim', fileExtensions: ['vimrc', 'gvimrc', 'exrc']},
            {name: 'nest', fileNames: ['nest-cli.json', '.nest-cli.json', 'nestconfig.json', '.nestconfig.json']},
            {name: 'nest-controller', fileExtensions: ['controller.ts', 'controller.js']},
            {name: 'nest-middleware', fileExtensions: ['middleware.ts', 'middleware.js']},
            {name: 'nest-module', fileExtensions: ['module.ts', 'module.js']},
            {name: 'nest-service', fileExtensions: ['service.ts', 'service.js']},
            {name: 'nest-decorator', fileExtensions: ['decorator.ts', 'decorator.js']},
            {name: 'nest-pipe', fileExtensions: ['pipe.ts', 'pipe.js']},
            {name: 'nest-filter', fileExtensions: ['filter.ts', 'filter.js']},
            {name: 'nest-gateway', fileExtensions: ['gateway.ts', 'gateway.js']},
            {name: 'nest-guard', fileExtensions: ['guard.ts', 'guard.js']},
            {name: 'nest-resolver', fileExtensions: ['resolver.ts', 'resolver.js']},
            {name: 'moonscript', fileExtensions: ['moon']},
            {name: 'percy', fileNames: ['.percy.yml']},
            {name: 'gitpod', fileNames: ['.gitpod.yml']},
            {name: 'advpl_prw', fileExtensions: ['prw', 'prx']},
            {name: 'advpl_ptm', fileExtensions: ['ptm']},
            {name: 'advpl_tlpp', fileExtensions: ['tlpp']},
            {name: 'advpl_include', fileExtensions: ['ch']},
            {name: 'codeowners', fileNames: ['codeowners']},
            {name: 'gcp', fileNames: ['.gcloudignore']},
            {name: 'disc', fileExtensions: ['iso']},
            {name: 'fortran', fileExtensions: ['f', 'f77', 'f90', 'f95', 'f03', 'f08']},
            {name: 'tcl', fileExtensions: ['tcl']},
            {name: 'liquid', fileExtensions: ['liquid']},
            {name: 'prolog', fileExtensions: ['p', 'pro']},
            {
                name: 'husky',
                fileNames: ['.huskyrc', 'husky.config.js', '.huskyrc.json', '.huskyrc.js', '.huskyrc.yaml', '.huskyrc.yml']
            },
            {name: 'coconut', fileExtensions: ['coco']},
            {name: 'tilt', fileNames: ['tiltfile']},
            {name: 'capacitor', fileNames: ['capacitor.config.json']},
            {name: 'sketch', fileExtensions: ['sketch']},
            {name: 'pawn', fileExtensions: ['pwn', 'amx']},
            {name: 'adonis', fileNames: ['.adonisrc.json']},
            {name: 'forth', fileExtensions: ['4th', 'fth', 'frt']},
            {
                name: 'uml',
                fileExtensions: ['iuml', 'pu', 'puml', 'plantuml', 'wsd']
            },
            {name: 'meson', fileNames: ['meson.build']},
            {
                name: 'commitlint',
                fileNames: ['.commitlintrc', '.commitlintrc.js', 'commitlint.config.js', '.commitlintrc.json', '.commitlint.yaml', '.commitlint.yml']
            },
            {name: 'buck', fileNames: ['.buckconfig']},
            {name: 'dhall', fileExtensions: ['dhall', 'dhallb']},
            {name: 'sml', fileExtensions: ['sml', 'mlton', 'mlb', 'sig', 'fun', 'cm', 'lex', 'use', 'grm']},
            {name: 'nrwl', fileNames: ['nx.json']},
            {name: 'opam', fileExtensions: ['opam']},
            {name: 'dune', fileNames: ['dune', 'dune-project']},
            {name: 'imba', fileExtensions: ['imba']},
            {name: 'drawio', fileExtensions: ['drawio', 'dio']},
            {name: 'pascal', fileExtensions: ['pas']},
            {name: 'shaderlab', fileExtensions: ['unity']},
            {
                name: 'roadmap',
                fileNames: ['roadmap.md', 'roadmap.txt', 'timeline.md', 'timeline.txt', 'milestones.md', 'milestones.txt']
            },
        ]
    },
    folderIcons: {
        defaultIcon: {name: 'folder'},
        rootFolder: {name: 'folder-root'},
        icons: [
            {name: 'folder-src', folderNames: ['src', 'source', 'sources', 'code']},
            {name: 'folder-dist', folderNames: ['dist', 'out', 'build', 'release', 'bin']},
            {
                name: 'folder-css',
                folderNames: ['css', 'stylesheet', 'stylesheets', 'style', 'styles']
            },
            {name: 'folder-sass', folderNames: ['sass', '_sass', 'scss', '_scss']},
            {
                name: 'folder-images',
                folderNames: ['images', 'image', 'img', 'icons', 'icon', 'ico', 'screenshot', 'screenshots']
            },
            {name: 'folder-scripts', folderNames: ['script', 'scripts']},
            {name: 'folder-node', folderNames: ['node_modules']},
            {name: 'folder-javascript', folderNames: ['js', 'javascript', 'javascripts']},
            {name: 'folder-json', folderNames: ['json']},
            {name: 'folder-font', folderNames: ['font', 'fonts']},
            {name: 'folder-bower', folderNames: ['bower_components']},
            {
                name: 'folder-test',
                folderNames: [
                    'test',
                    'tests',
                    'testing',
                    '__tests__',
                    '__snapshots__',
                    '__mocks__',
                    '__test__',
                    'spec',
                    'specs'
                ]
            },
            {
                name: 'folder-jinja',
                folderNames: [
                    'jinja',
                    'jinja2',
                    'j2'
                ]
            },
            {name: 'folder-markdown', folderNames: ['markdown', 'md']},
            {name: 'folder-php', folderNames: ['php']},
            {name: 'folder-phpmailer', folderNames: ['phpmailer']},
            {name: 'folder-sublime', folderNames: ['sublime']},
            {name: 'folder-docs', folderNames: ['doc', 'docs', 'documents', 'documentation', 'post', 'posts']},
            {
                name: 'folder-git',
                folderNames: ['.git', 'githooks', '.githooks', 'submodules', '.submodules']
            },
            {name: 'folder-github', folderNames: ['.github']},
            {name: 'folder-gitlab', folderNames: ['.gitlab']},
            {name: 'folder-vscode', folderNames: ['.vscode', '.vscode-test']},
            {
                name: 'folder-views',
                folderNames: ['view', 'views', 'screen', 'screens', 'page', 'pages', 'html']
            },
            {name: 'folder-vue', folderNames: ['vue']},
            {name: 'folder-expo', folderNames: ['.expo', '.expo-shared']},
            {
                name: 'folder-config',
                folderNames: ['config', 'configs', 'configuration', 'configurations', 'settings', '.settings', 'META-INF']
            },
            {
                name: 'folder-i18n',
                folderNames: ['i18n', 'internationalization', 'lang', 'language', 'languages', 'locale', 'locales', 'l10n', 'localization', 'translation', 'translate', 'translations', '.tx']
            },
            {name: 'folder-components', folderNames: ['components', 'widget', 'widgets']},
            {name: 'folder-aurelia', folderNames: ['aurelia_project']},
            {
                name: 'folder-resource',
                folderNames: ['resource', 'resources', 'res', 'asset', 'assets', 'static']
            },
            {
                name: 'folder-lib',
                folderNames: ['lib', 'libs', 'library', 'libraries', 'vendor', 'vendors', 'third-party']
            },
            {name: 'folder-theme', folderNames: ['themes', 'theme', 'color', 'colors', 'design', 'designs']},
            {name: 'folder-webpack', folderNames: ['webpack', '.webpack']},
            {name: 'folder-global', folderNames: ['global']},
            {name: 'folder-public', folderNames: ['public', 'wwwroot', 'web', 'website']},
            {name: 'folder-include', folderNames: ['include', 'includes', '_includes']},
            {name: 'folder-docker', folderNames: ['docker', 'dockerfiles', '.docker']},
            {name: 'folder-ngrx-effects', folderNames: ['effects']},
            {name: 'folder-ngrx-store', folderNames: ['store']},
            {name: 'folder-ngrx-state', folderNames: ['states', 'state']},
            {name: 'folder-ngrx-reducer', folderNames: ['reducers', 'reducer']},
            {name: 'folder-ngrx-actions', folderNames: ['actions']},
            {name: 'folder-ngrx-entities', folderNames: ['entities']},
            {name: 'folder-redux-reducer', folderNames: ['reducers', 'reducer']},
            {name: 'folder-redux-actions', folderNames: ['actions']},
            {name: 'folder-redux-store', folderNames: ['store']},
            {
                name: 'folder-react-components',
                folderNames: ['components']
            },
            {name: 'folder-database', folderNames: ['db', 'database', 'databases', 'sql', 'data', '_data']},
            {name: 'folder-log', folderNames: ['log', 'logs']},
            {name: 'folder-temp', folderNames: ['temp', '.temp', 'tmp', '.tmp', 'cached', 'cache', '.cache']},
            {name: 'folder-aws', folderNames: ['aws', '.aws']},
            {name: 'folder-audio', folderNames: ['audio', 'audios', 'music', 'sound', 'sounds']},
            {name: 'folder-video', folderNames: ['video', 'videos', 'movie', 'movies']},
            {name: 'folder-kubernetes', folderNames: ['kubernetes', 'k8s']},
            {name: 'folder-import', folderNames: ['import', 'imports', 'imported']},
            {name: 'folder-export', folderNames: ['export', 'exports', 'exported']},
            {name: 'folder-wakatime', folderNames: ['wakatime']},
            {name: 'folder-circleci', folderNames: ['.circleci']},
            {name: 'folder-wordpress', folderNames: ['wp-content']},
            {name: 'folder-gradle', folderNames: ['gradle', '.gradle']},
            {
                name: 'folder-coverage',
                folderNames: ['coverage', '.nyc-output', '.nyc_output', 'e2e', 'it', 'integration-test', 'integration-tests']
            },
            {name: 'folder-class', folderNames: ['class', 'classes', 'model', 'models']},
            {name: 'folder-other', folderNames: ['other', 'others', 'misc', 'miscellaneous', 'extra', 'extras']},
            {name: 'folder-typescript', folderNames: ['typescript', 'ts', 'typings', '@types']},
            {name: 'folder-graphql', folderNames: ['graphql', 'gql']},
            {name: 'folder-routes', folderNames: ['routes', 'router', 'routers']},
            {name: 'folder-ci', folderNames: ['.ci', 'ci']},
            {
                name: 'folder-benchmark',
                folderNames: ['benchmark', 'benchmarks', 'performance', 'measure', 'measures', 'measurement']
            },
            {
                name: 'folder-messages',
                folderNames: ['messages', 'forum', 'chat', 'chats', 'conversation', 'conversations']
            },
            {name: 'folder-less', folderNames: ['less']},
            {name: 'folder-python', folderNames: ['python', '__pycache__', '.pytest_cache']},
            {name: 'folder-debug', folderNames: ['debug', 'debugging']},
            {name: 'folder-fastlane', folderNames: ['fastlane']},
            {
                name: 'folder-plugin',
                folderNames: ['plugin', 'plugins', '_plugins', 'extension', 'extensions', 'addon', 'addons']
            },
            {name: 'folder-middleware', folderNames: ['middleware', 'middlewares']},
            {
                name: 'folder-controller',
                folderNames: ['controller', 'controllers', 'service', 'services', 'provider', 'providers']
            },
            {name: 'folder-ansible', folderNames: ['ansible']},
            {name: 'folder-server', folderNames: ['server', 'servers', 'backend']},
            {name: 'folder-client', folderNames: ['client', 'clients', 'frontend']},
            {name: 'folder-tasks', folderNames: ['tasks', 'tickets']},
            {name: 'folder-android', folderNames: ['android']},
            {name: 'folder-ios', folderNames: ['ios']},
            {name: 'folder-upload', folderNames: ['uploads', 'upload']},
            {name: 'folder-download', folderNames: ['downloads', 'download']},
            {name: 'folder-tools', folderNames: ['tools']},
            {name: 'folder-helper', folderNames: ['helpers', 'helper']},
            {name: 'folder-serverless', folderNames: ['.serverless', 'serverless']},
            {name: 'folder-api', folderNames: ['api', 'apis']},
            {name: 'folder-app', folderNames: ['app', 'apps']},
            {
                name: 'folder-archive',
                folderNames: ['archive', 'archives', 'archival', 'backup', 'backups', 'back-up', 'back-ups']
            },
            {name: 'folder-batch', folderNames: ['batch', 'batchs', 'batches']},
            {name: 'folder-cluster', folderNames: ['cluster', 'clusters']},
            {name: 'folder-command', folderNames: ['command', 'commands', 'cli', 'clis']},
            {name: 'folder-constant', folderNames: ['constant', 'constants']},
            {name: 'folder-container', folderNames: ['container', 'containers', '.devcontainer']},
            {name: 'folder-content', folderNames: ['content', 'contents']},
            {name: 'folder-core', folderNames: ['core']},
            {name: 'folder-delta', folderNames: ['delta', 'deltas', 'changes']},
            {name: 'folder-dump', folderNames: ['dump', 'dumps']},
            {name: 'folder-examples', folderNames: ['example', 'examples', 'sample', 'samples', 'demo', 'demos']},
            {
                name: 'folder-environment',
                folderNames: ['.env', '.environment', 'env', 'environment', 'environments']
            },
            {
                name: 'folder-functions',
                folderNames: ['function', 'functions', 'lambda', 'lambdas', 'logic', 'math', 'calc', 'calculation', 'calculations']
            },
            {
                name: 'folder-generator',
                folderNames: ['generator', 'generators', 'generated', 'cfn-gen', 'gen', 'gens', 'auto']
            },
            {name: 'folder-hook', folderNames: ['hook', 'hooks', 'trigger', 'triggers']},
            {name: 'folder-job', folderNames: ['job', 'jobs']},
            {name: 'folder-keys', folderNames: ['keys', 'key', 'token', 'tokens']},
            {name: 'folder-layout', folderNames: ['layout', 'layouts']},
            {name: 'folder-mail', folderNames: ['mail', 'mails', 'email', 'emails', 'smtp']},
            {name: 'folder-mappings', folderNames: ['mappings', 'mapping']},
            {name: 'folder-meta', folderNames: ['meta']},
            {name: 'folder-packages', folderNames: ['package', 'packages']},
            {name: 'folder-shared', folderNames: ['shared', 'common']},
            {name: 'folder-stack', folderNames: ['stack', 'stacks']},
            {name: 'folder-template', folderNames: ['template', 'templates']},
            {name: 'folder-utils', folderNames: ['util', 'utils']},
            {name: 'folder-private', folderNames: ['private', '.private']},
            {name: 'folder-error', folderNames: ['error', 'errors', 'err']},
            {name: 'folder-event', folderNames: ['event', 'events']},
            {
                name: 'folder-secure',
                folderNames: ['auth', 'authentication', 'secure', 'security', 'cert', 'certs', 'certificate', 'certificates', 'ssl']
            },
            {name: 'folder-custom', folderNames: ['custom', 'customs']},
            {
                name: 'folder-mock',
                folderNames: ['mock', 'mocks', 'draft', 'drafts', 'concept', 'concepts', 'sketch', 'sketches']
            },
            {name: 'folder-syntax', folderNames: ['syntax', 'syntaxes', 'spellcheck']},
            {name: 'folder-vm', folderNames: ['vm', 'vms']},
            {name: 'folder-stylus', folderNames: ['stylus']},
            {name: 'folder-flow', folderNames: ['flow-typed']},
            {
                name: 'folder-rules',
                folderNames: ['rule', 'rules', 'validation', 'validations', 'validator', 'validators']
            },
            {name: 'folder-review', folderNames: ['review', 'reviews', 'revisal', 'revisals', 'reviewed']},
            {name: 'folder-animation', folderNames: ['animation', 'animations', 'animated']},
            {name: 'folder-guard', folderNames: ['guard', 'guards']},
            {name: 'folder-prisma', folderNames: ['prisma']},
            {name: 'folder-pipe', folderNames: ['pipe', 'pipes']},
            {name: 'folder-svg', folderNames: ['svg', 'svgs']},
            {name: 'folder-vuex-store', folderNames: ['store']},
            {name: 'folder-nuxt', folderNames: ['nuxt', '.nuxt']},
            {name: 'folder-vue-directives', folderNames: ['directives']},
            {name: 'folder-vue', folderNames: ['components']},
            {name: 'folder-mobile', folderNames: ['mobile', 'mobiles', 'portable', 'portability']},
            {name: 'folder-stencil', folderNames: ['.stencil']},
            {name: 'folder-firebase', folderNames: ['.firebase']},
            {name: 'folder-svelte', folderNames: ['svelte']},
            {name: 'folder-update', folderNames: ['update', 'updates', 'upgrade', 'upgrades']},
            {name: 'folder-intellij', folderNames: ['.idea']},
            {name: 'folder-azure-pipelines', folderNames: ['.azure-pipelines', '.azure-pipelines-ci']},
        ]
    }
    ,
    getIconByFile: function (file) {
        const fileName = file.name.toLowerCase();
        if (file.isDirectory) {
            return (this.folderIcons.icons.find(({name, folderNames}) => !!folderNames.find(fn => fn === fileName)) || this.folderIcons.defaultIcon).name
        } else {
            const fileNameSplit = fileName.split('.');
            const fileExtension = fileName.startsWith('.') || fileNameSplit.length === 1 ? false : fileNameSplit.pop().toLowerCase();
            return (
                // 从 fileIcons 中查找
                (
                    this.fileIcons.icons.find(({fileExtensions, fileNames}) =>
                        // 先从 fileNames 开始匹配
                        (fileNames && fileNames.find(fn => fn === fileName)) ||
                        (fileExtension && fileExtensions && fileExtensions.find(fe => fe === fileExtension))
                    )
                )
                ||
                this.fileIcons.defaultIcon
            ).name;
        }
    }
}
