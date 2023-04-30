# Introduction to Algorithms

[![MDX](https://img.shields.io/badge/MDX-1B1F24.svg?logo=mdx)](https://mdxjs.com/)
[![Build and Deploy](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/actions/workflows/deploy.yml)
[![Release version badge](https://img.shields.io/github/v/release/sikepuri-algorithm/sikepuri-algorithm.github.io.svg?logo=github)](https://github.com/sikepuri-algorithm/sikepuri-algorithm.github.io/releases)
[![license](https://img.shields.io/badge/license-MIT-informational.svg)](LICENSE)
![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

<div style="text-align: center">
    <img src="./static/img/logo-black.svg" alt="logo" height="200px" >
</div>

[English README is here.](./README.md)

これは、アルゴリズム入門のシケプリです。[こちら](https://sikepuri-algorithm.github.io/)から見ることができます。

[Docusaurus](https://docusaurus.io/) を使って作っています。

## 環境構築

Node.js がインストールされていることを前提とします。

次のコマンドで必要なパッケージをインストールできます。

```shell
npm ci
```

以下は、コミット時に自動で Formatter や Linter を実行させるためのスクリプトです。実行しなくて構いません。

```shell
# Poetry のインストール
curl -sSL https://install.python-poetry.org | python3 -

# Poetry のパッケージのインストール
poetry install
# pre-commit のパッケージのインストール
poetry run pre-commit install
```

## 開発

次を実行すると、ローカルサーバーが立ち上がり、プレビューが表示されます。

```shell
npm start
```

## コントリビューション

誤植などがありましたら、Issue や PR などで気軽に教えてください。
