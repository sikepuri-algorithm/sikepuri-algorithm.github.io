[![Build and Deploy](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml) [![Super Linter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/super_linter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/super_linter.yml) [![Formatter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/formatter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/formatter.yml) [![ESLint](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/eslint.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/eslint.yml)

<div style="text-align: center">
<img src="./static/img/logo-black.svg" alt="logo" height="200px" >
</div>

# Introduction to Algorithms

これは、アルゴリズム入門のシケプリです。

[Docusaurus](https://docusaurus.io/) を使って作っています。

## 環境構築

```shell
npm ci
```

以下は、コミット時に自動で Formatter や Linter を実行させるためのスクリプトです。実行しなくても構いません。

```shell
curl -sSL https://install.python-poetry.org | python3 -
```

```shell
poetry install
```

```shell
poetry run pre-commit install
```

## 開発

```shell
npm start
```

## ビルド

```shell
npm run build
```

このコマンドは、`build` ディレクトリに静的コンテンツを出力します。

## その他

間違いなどがありましたら、Issues や PR などで教えてください。
