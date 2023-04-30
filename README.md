# Introduction to Algorithms

[![Build and Deploy](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml)
[![Super Linter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/super_linter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/super_linter.yml)
[![Formatter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/formatter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/formatter.yml)
[![Linter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/linter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/linter.yml)

<div style="text-align: center">
    <img src="./static/img/logo-black.svg" alt="logo" height="200px" >
</div>

[日本語版 README はこちら](./README-ja.md)

This is a document that summarizes the Introduction to Algorithms class. To see the content, visit [here](https://sikepuri-algorithm.github.io/).

This site is built using [Docusaurus](https://docusaurus.io/), a modern static site generator.

## Installation

```shell
npm ci
```

To run formatter or linter before committing, run the script below. (You don't have to run these scripts.)

```shell
# Install Poetry
curl -sSL https://install.python-poetry.org | python3 -

# Install Poetry packages
poetry install
# Install pre-commit packages
poetry run pre-commit install
```

## Local Development

This command starts a local development server and opens up a browser window.

```shell
npm start
```

## Contributions

Issue or PR is always welcome.
