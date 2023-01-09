[![Build and Deploy](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml) [![Super Linter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/super_linter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/super_linter.yml) [![Formatter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/formatter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/formatter.yml) [![Linter](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/linter.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/linter.yml)

<div style="text-align: center">
    <img src="./static/img/logo-black.svg" alt="logo" height="200px" >
</div>

# Introduction to Algorithms

これは、アルゴリズム入門のシケプリです。デプロイ先は[こちら](https://sikepuri-algorithm.github.io/)

[Docusaurus](https://docusaurus.io/) を使って作っています。

## 環境構築

Node.js のインストール

```shell
npm ci
```

以下は、コミット時に自動で Formatter や Linter を実行させるためのスクリプトです。実行しなくても構いません。

Poetry をインストールしていなかったら、次を実行

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

## その他

間違いなどがありましたら、Issue や PR などで教えてください。
