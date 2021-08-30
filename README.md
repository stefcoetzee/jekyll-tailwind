# Jekyll + Tailwind CSS

> Minimal Jekyll and Tailwind CSS starter repo without long live-reload render times.

You want to run `jekyll new your-site --blank` and add
[Tailwind CSS](tailwindcss.com) yourself, right?
Don’t.
Fork this repo instead.

[Responsive demo](https://jekyll-tailwind.netlify.app/) (resize your window and watch it adjust)

Check out the accompanying [blog post](https://stefcoetzee.com/2021/07/28/jekyll-tailwind-starter-repo).

[![Netlify Status](https://api.netlify.com/api/v1/badges/a22ca4cf-cb1f-4bf3-9fbc-2833226e9b8e/deploy-status)](https://app.netlify.com/sites/jekyll-tailwind/deploys)

## Getting Started

```bash
git clone git@github.com:stefcoetzee/jekyll-tailwind your-site
cd your-site
bin/setup
```

## Usage

### Development

```bash
# Make all Tailwind utility classes available for development.
bin/build-dev

# Start a live-reload server at http://localhost:4000, skipping file with Tailwind
# @import statements during regeneration.
bin/start
```

### Production

Delete `.site` and it’s contents to see the production build output.

```bash
# Purge unused classes.
bin/build-prod
```

## Credit

Thanks to [@shafy](https://github.com/shafy) for sharing the two config-file
approach [here](https://canolcer.com/post/jekyll-and-tailwind/).
Thanks to [@joemasilotti](https://github.com/joemasilotti) for sharing his build
scripts [here](https://github.com/joemasilotti/masilotti.com/tree/main/bin).

Say hi [@stef_coetzee](https://twitter.com/stef_coetzee)!
