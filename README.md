<div align="center">
  <img src="./contents/assets/default.png" width="360px" alt="gatsby-starter-oneweek"/>
</div>

[![Netlify Status](https://api.netlify.com/api/v1/badges/11558f0e-5878-4b66-b041-823224a7a424/deploy-status)](https://app.netlify.com/sites/gatsby-starter-oneweek/deploys)

[English README ๐บ๐ธ](./README.en.md)

์ด Gatsby Starter์๋...

- ๐ gatsby-remark-highlight-code๋ฅผ ํตํ ์ปค์คํํ ์ฝ๋ ํ์ด๋ผ์ดํ ๊ธฐ๋ฅ 
- ๐ฌ utterances ๋๊ธ ๊ธฐ๋ฅ ์ง์
- โ 'Buy me a coffee' ๋ผ๋ ํ์ ๊ธฐ๋ฅ
- ๐ค Google Analytics ์ง์
- โ ๋ณ๋ ์ค์  ํ์ผ์ ํตํ ๋ธ๋ก๊ทธ ์ธ๋ถ ์ฌํญ ์ค์  ์ง์
- TypeScript๋ฅผ ์ฌ์ฉ
- ๋์์ธ์ Velog์ ํ์ฌ์ฝ๋์ [gatsby-starter-bee](https://github.com/JaeYeopHan/gatsby-starter-bee)์์ ์๊ฐ์ ๋ฐ์ ์ ์ํ์์ต๋๋ค.

> # Gatsby site์ ์ ์ฑ์ ์ํด ์์ง starter๋ก ๋ฑ๋กํ์ง ๋ชปํ์ต๋๋ค.

## Demo ์ฌ์ดํธ (netlify)

- [๊ธฐ๋ณธ ํ๋ง ์ ์ฉ ํํ๋ฆฟ ํ๋ฉด](https://gatsby-starter-oneweek.netlify.com/)

<details>
  <summary>Use case</summary>
  <p>
    <ul>
      <li>2oneweek.dev: https://2oneweek.dev</li>
    </ul>
  </p>
</details>

> ์ด ํํ๋ฆฟ์ ์ฌ์ฉํ์ฌ ๋ธ๋ก๊ทธ๋ฅผ ๋ง๋ค์๋ค๋ฉด ์ '์ฌ์ฉํ ๋ธ๋ก๊ทธ' ๋ฆฌ์คํธ์ ์ถ๊ฐํด์ฃผ์ธ์! PR์ ํตํด ๋ฑ๋กํด์ฃผ์๋ฉด ๋ฉ๋๋ค!

## ๐ Quick Start

### 1. Gatsby ํ๋ก์ ํธ๋ฅผ ์์

```sh
# ์ด ๋ธ๋ก๊ทธ ์คํํฐ๋ฅผ ์ฌ์ฉํ์ฌ gatsby ํ๋ก์ ํธ๋ฅผ ์์ํ  ์ ์์ต๋๋ค.
npx gatsby new my-blog-starter https://github.com/2-one-week/gatsby-starter-oneweek.git
```

> ๋ง์ฝ `npx`๋ฅผ ์ฌ์ฉํ๊ณ  ์์ง ์๋๋ค๋ฉด, [Gatsby Getting Started](https://www.gatsbyjs.org/docs/quick-start) ๊ธ์ ์ฐธ๊ณ ํ๊ฑฐ๋ ์๋ ์ปค๋งจ๋๋ฅผ ์คํํด์ฃผ์ธ์.

```sh
npm install -g gatsby-cli
gatsby new my-blog-starter https://github.com/2-one-week/gatsby-starter-oneweek.git
```

### 2. Dev server๋ฅผ ํตํด ๋ก์ปฌ์์๋ ์ ๊ทผ ๊ฐ๋ฅํฉ๋๋ค.

```sh
cd my-blog-starter/
npm start
# ๋ธ๋ผ์ฐ์ ์์ localhost:8000๋ก ์ ๊ทผ ๊ฐ๋ฅ
```

### 3. ํฌ์คํ์ ์ถ๊ฐํ์ธ์

๋ค์ ๋ ๊ณณ์์ ํฌ์คํ์ ์ถ๊ฐํ  ์ ์์ต๋๋ค.

- ๋ธ๋ก๊ทธ ํฌ์คํ์ `content/blog` ๋๋ ํ ๋ฆฌ์ ์ถ๊ฐํด์ฃผ์ธ์.
  - ํด๋๋ฅผ ๊ตฌ๋ถํ๋ฉด, ํด๋น ํด๋๋ก routing ๋ฉ๋๋ค.
- ์น์ ์ฌ๋ ค๋ ์ด๋ ฅ์๋ `content/__about` ๋๋ ํ ๋ฆฌ์ ์ถ๊ฐํด์ฃผ์ธ์.

> ๋ช ๊ฐ์ง์ ๋ฉํ๋ฐ์ดํฐ์ ๋งํฌ๋ค์ด ๋ฌธ๋ฒ์ผ๋ก ํฌ์คํ์ ์์ฑํ  ์ ์์ต๋๋ค.

### 4. ๋ฉํ๋ฐ์ดํฐ ์์ 

`/gatsby-user-config.js` ํ์ผ์์ ์ฌ์ฉ์์ ๋ฐ๋ฅธ ๋ธ๋ก๊ทธ๋ฅผ ์ค์ ํ๋ ์ฌ๋ฌ ์์๋ฅผ ์์ ํ  ์ ์์ต๋๋ค.

### 5. [Netlify](https://netlify.com)๋ก ๋ฐฐํฌ

[![Netlify Status](https://api.netlify.com/api/v1/badges/11558f0e-5878-4b66-b041-823224a7a424/deploy-status)](https://app.netlify.com/sites/gatsby-starter-oneweek/deploys)

:bulb: github pages๋ฅผ ํตํด ๋ฐฐํฌํ๊ณ  ์ถ๋ค๋ฉด ์๋ npm script๋ฅผ `package.json`์ ์ถ๊ฐํด์ฃผ์ธ์.

```json
"scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master -r 'git@github.com:${your github id}/${github page name}.github.io.git'"
}
```

> `gh-pages` ๋ชจ๋์ด ํ์ํ  ๊ฒฝ์ฐ ์ค์น๊ฐ ํ์ํฉ๋๋ค.

## ์ฌ์ฉ์์ ๋ฐ๋ผ ๋ฐ๊พธ๊ธฐ

### โ ์ค์ 

```sh
/root
โโโ gatsby-config.js // Gatsby config
โโโ gatsby-user-config.js // Template config by user
โโโ gatsby-node.js // Gatsby Node config
```

### โ ๊ตฌ์กฐ

```sh
src
โโโ components // ์ฌ๋ฌ๊ณณ์์ ์ฌ์ฉํ๋ ๊ณตํต ์ปดํฌ๋ํธ๋ค
โโโ pages // ๊ธฐ๋ณธ ํ์ด์ง routing post: /(home), /about, /category
โโโ styles
โ   โโโ global-style.ts // styled compoenents์์ ์ฌ์ฉํ  global style
โ   โโโ theme.ts // styled compoenents theme
โโโ containers
    โโโ post.tsx
    โ   โโโ components // post ํ์ด์ง๋ง์ ์ํ component๋ค
    โ   โโโ index.tsx // 
    โโโ layout.tsx // home, post, resume layout
```

### ๐จ ์คํ์ผ

`gatsby-user-config` ์์ ์ ํตํด main color๋ฅผ ๋ฐ๊ฟ ์ ์์ต๋๋ค.

```sh
{
  ...
  mainColor: `color what you want`
  ...
}
```

### ๐ญ ๊ฟํ

- ํ๋กํ ์ฌ์ง! (replace file in `/contents/assets/profile.png`)
- ํ๋น์ฝ ์ด๋ฏธ์ง! (replace file in `/contents/assets/favicon.png`)
- ๋ธ๋ก๊ทธ ์ฌ์ดํธ Default Meta ์ด๋ฏธ์ง! (replace file in `/contents/assets/default.png`)
- Utterances๋ฅผ ์ํ repository๋ฅผ ์ค์ ํด์ฃผ์ธ์! (`/gatsby-user-config.js`์ repository ์ฃผ์๋ฅผ ๊ต์ฒดํด์ฃผ์ธ์.)
  - โ ๏ธ ์ด [๊ฐ์ด๋](https://utteranc.es)๋ฅผ ๊ผญ ํ์ธํด์ฃผ์ธ์.

## โ ๋ง์์ ๋์จ๋์?

<a href="https://www.buymeacoffee.com/2oneweek" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/purple_img.png" alt="์ปคํผ ํ์?" style="height: auto !important;width: auto !important;" ></a>

## :bug: ๋ฒ๊ทธ์ ๋ณด

[Issue](https://github.com/2-one-week/gatsby-starter-oneweek/issues)

## ๐ ๊ธฐ์ฌํ๊ธฐ

[Contributing guide](./CONTRIBUTING.md)

## LICENSE

[MIT](./0BSD)

<div align="center">
  <sub>
    <sup>Project by 
      <a href="https://github.com/2-one-week">
        @2-one-week
      </a>
    </sup>
  </sub>
</div>
