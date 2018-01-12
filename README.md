# generator-shopify-theme
> A Yeoman generator for scafolding out a Shopify project with the BVA directory structure and build tools.

## Installation
First, install the [Yeoman](http://yeoman.io) and `generator-shopify-theme` packages globally using [npm](https://www.npmjs.com/). There's two different ways to install the `generator-shopify-theme`:
  1. using the git url
  2. being a member of the @bva npm organization and using the scoped version of the package (ask @tshamz if you'd like to be added to the organization)
You'll also want to make sure you have bower installed globally as well. You can check if bower is installed by running `bower -v`.

### Install Yeoman and Bower
```bash
npm i -g yo
npm i -g bower
```

### Install Generator via Git
```bash
npm i -g https://github.com/BVAccel/generator-shopify-theme.git
```

### Install Generator via Scoped npm Package
```bash
npm i -g @bva/generator-shopify-theme
```

## Usage
Once you've installed all the neccessary packages, create a new empty directory for the project and `cd` into it.
```bash
mkdir new-project-directory
cd new-project-directory
```

From there, you can either run `yo` and select `@bva/shopify-theme` from the list of generators, or just run the generator directly with `yo @bva/shopify-theme`.
```bash
yo @bva/shopify-theme
```

You'll then be walked through a seires of steps asking:
* What type of project is this?
  * New Project <-- includes directories in `dev/liquid/`
  * Existing Codebase <-- leaves `dev/liquid/` empty so you can copy contents of the download theme .zip file
* What partials would you like to include?
  * List of standard, generic sass partials you'd find in the [⚒ Theme Boilerplate](https://bvaccel.beanstalkapp.com/new-shopify-project).
* Which vendor libraries would you like to include?
  * List of vendor libraries commonly used on projects
  * **Note:** these libraries might not be the most current, so if you need a specific version, just include it manually afterwards
  
After you've completed the above steps, the generator will scaffold out your project, place the correct sass partials in the correct directories, add the corret `@import` statements to `bvaccel.scss`, and include the correct `.js` and `.css` files for the libraries you selected to include. Once the generator is finished with everything above, it will then place a copy of `.bowerrc` and `bower.json` in the project's root and run `bower install` for you. When the build files are finished installing, create yourself a private app and fill in your `.env` file, and you're ready to start developing!

## License

 © [Tshamz](http://github.com/tshamz)
