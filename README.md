# Personal website

This is the source code of my personal website. Feel free to have a peek.

## Prerequisites

[Yarn](https://yarnpkg.com/en/)

Create a new file `.env.development` and put this env variable with your GitHub token

> If you're building locally, you will have to create a new file `.env.production` and put the same env variable

```bash
GITHUB_TOKEN=xxxxxxxxxx
```

> [Get your GitHub access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token)

## Installing

Installing the dependencies

```bash
yarn
```

## Start the dev server

```bash
yarn start
```

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
