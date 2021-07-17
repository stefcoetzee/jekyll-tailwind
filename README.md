# Jekyll with Tailwind CSS

You want to run `jekyll new your-site --blank` and add
[Tailwind CSS](tailwindcss.com), right?
Don’t.
Fork this repo instead.

## Getting Started

```bash
git clone git@github.com:stefcoetzee/jekyll-tailwind your-site
cd your-site
bin/setup
```

## Usage

### Development

```bash
# Build for development.
bin/build-dev

# Start a server at http://localhost:4000.
bin/start
```

### Production

Delete `.site` and it’s contents to see the production build output.

```bash
# Build for production.
bin/build-prod
```

## Credit

Thanks to [@joemasilotti](https://github.com/joemasilotti) for sharing his build
scripts [here](https://github.com/joemasilotti/masilotti.com/tree/main/bin).
Thanks to [@shafy](https://github.com/shafy) for sharing the two config-file approach [here](https://canolcer.com/post/jekyll-and-tailwind/).

Say hi [@stef_coetzee](https://twitter.com/stef_Coetze)!