# install
## GIT
git remote add origin git@github.com:pmoreaualfa/alfa3aDocumentation.git  
(erreur key: voir ci-dessus)

## CONTENT MODULE
npx nuxi init alfa3aDocs -t content  
cd alfa3aDocs  
yarn install  
yarn dev  

## IMAGE MODULE NUXT 2 ONLY !!!
yarn add --dev @nuxt/image
nuxt.config.ts :
    target: 'static',  buildModules: [    '@nuxt/image',  ]
ou
    target: 'server',  Modules: [    '@nuxt/image',  ]
et
    image: {    // Options  }
yarn remove @nuxt/image

## IMGE for NUXT 3 (experimental)
yarn add --dev @nuxt/image-edge
après un update de node :
    sudo npm -g n
    sudo n latest
nuxt.config.ts :
    modules: ++ '@nuxt/image-edge' 
    image: {screens: { xs: 320, sm: 640, md: 768, lg: 1024, xl: 1280, xxl: 1536, '2xl': 1536 },}

Attention :
en static, les images utilisent le provider par defaut
Il faut mettre les images sous 'public'
pour Vercel, env. => il existe une variable d'environnement à préciser pour la racine des images

## Tailwind (nouvelle branch 'tailwind')
### source
[Install Tailwind CSS with Nuxt.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nuxtjs)

### install
npm install -D tailwindcss postcss@latest autoprefixer@latest
npx tailwindcss init

assets/css/main.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

nuxt.config.ts
 buildModules: ['@nuxt/postcss8'],
 build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
css: [
    '@/assets/css/main.css',
  ],
tailwind.config.ts
    module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

ERROR Importing directly from a nuxt.config file is not allowed.
> tailwind.config.js : commenter la ligne
// "./nuxt.config.{js,ts}",

# daisyui.com
[Components — Tailwind CSS Components](https://daisyui.com/components/)
npm i daisyui
tailwind.config.js

# heroicon
https://github.com/whardier/nuxt-hero-icons
npm i @nuxt-hero-icons/solid
npm i @nuxt-hero-icons/outline
nuxt-config.ts :
buildModules: [
    '@nuxt-hero-icons/outline/nuxt',
    '@nuxt-hero-icons/solid/nuxt'
]

# sentry gestion d'erreur
non compatible nuxt 3
sauf
source : 
[Use Sentry with Nuxt 3 | Vue tutorial | pipinghot.dev](https://pipinghot.dev/tutorial/use-sentry-with-nuxt-3/)
[(28) MongoDB Crash Course - YouTube](https://www.youtube.com/watch?v=ofme2o29ngU)
devtheory : Création d'une API dans le dossier server / Middlewares & Runtime config

# mongodb 
## install
source : [(28) Connecting nuxt api to MongoDB | Zero to Deployed app with nuxtjs - YouTube](https://www.youtube.com/watch?v=klf2_1dfbQM&t=40s)
npm install mongodb

## H3
[H3](https://h3.js.org/)

# erreur key
[How to fix "Permission denied (publickey)." error when pushing to Github (mac) | UHD Ed](https://uhded.com/fix-permission-denied-public-key-github-error)
this is how I fixed this "Permission denied (publickey)" error.

Open your terminal and do cd ~/.ssh.

Type ls. You should see id_rsa and id_rsa.pub. My issue was that those files were not there anymore. To create those files, do step 3:

Run: ssh-keygen -t rsa -C "your-email-here@example.com", replacing "your-email-here@example.com" with your actual email.

Open the file id_rsa.pub. If you have VSCode, you can just do code id_rsa.pub (explained here), and it opens the file in VS Code. Otherwise, you can do vim id_rsa.pub. (you can exit out of vim by typing :q!).

Copy everything you see (make sure you don't copy any extra spaces).

Go to github.com -> Settings -> SSH and GPG Keys https://github.com/settings/keys. Click "New SSH Key". Give it a title and paste in the key. Finally, click "Add SSH Key".

That's it. Try git push again, and it should work.
