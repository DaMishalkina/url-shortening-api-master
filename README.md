# Frontend Mentor - URL shortening API landing page Solution

This is a solution to the [URL shortening API landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub).

## Table of contents

- [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
- [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Issues](#issues)
    - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
    - The `input` field is empty

### Links

- Solution URL: [url-shortening-api-master](https://damishalkina.github.io/url-shortening-api-master/#/)

## My process

### Built with

- React
- React Router v.6
- TypeScript
- Vite
- Sass
- Mobile-first workflow


### What I learned

I have learned how to use the use layout effect hook in order to animate some elements on a page. I have also implemented functionality for removing the users links by swiping them. 

### Issues

- I have faced some difficulties deploying my vite react app to the github pages. It is recommended in the vite documentation to store images for an app in the public folder.
  Unfortunately, it did not work for me. So I have found following solution.

I have placed my images in src/assets folder, then imported all product images:

```js
const IMAGES = import.meta.glob('@assets/*.{png,jpg,jpeg,PNG,JPEG}', { eager: true, as: 'url' });
```

I have used key in order to accesses source of a particular image:

```js
const src = IMAGES[`/src/assets/${pageContent?.actionSection?.image}-desktop.svg`];
```

This solution seems to me not perfect at all, but I hope to find out, how to fix this issue.

- I also have modified the layout of the hero section image for screen with over 550px width.

- Moreover, I have decided to use value of 1200px as min-width for desktop version. The reason is the same as in the previous case.

### Continued development

Maybe it is better to use in this app Zustand or Redux to avoid passing functions as props through several children.
