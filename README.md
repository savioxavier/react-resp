<!-- markdownlint-disable MD010 MD033 MD001 MD036 -->

# react-resp

> **Dynamically build responsive layouts in React**

`react-resp` is a React library that provides a set of utility components to dynamically build responsive layouts

## 🛠️ Install

Using [npm](https://www.npmjs.com/)

```text
npm i react-resp
```

## 🔗 Usage

react-resp exports multiple components. These components have the name of the viewports they bind to, named `<[Viewport]>`, as well their inverse, named `<Not[Viewport]>`.

One such component is called `<Mobile>`, and it's inverse is `<NotMobile>`

Below are some examples to get you started:

**Strict Viewports only**

Using the syntax below, you can dynamically render specific components/elements for a given viewport, based on current viewport specified

```jsx
import { Mobile, Tablet, Laptop } from 'react-resp'

const Navbar = () => {
  <nav className="navbar">
      <div className="navbar-description">
        <Mobile>Mobile: Short Description</Mobile>
        <Tablet>Tablet: Slightly longer description on a tablet screen</Tablet>
        <Laptop>
          Laptop: A very long description that is displayed on laptop screens and has a lot of words
        </Laptop>
      </div>
  </nav>
}
```

**Strict and Exceptional "Not" Viewports**

By using a combination of `<[Viewport]>` and `<Not[Viewport]>`, you can dynamically render specific components on a single viewport of your choice, and render something else on all other viewport except the one you've already targeted

```jsx
import { Mobile, NotMobile } from 'react-resp'

const Navbar = () => {
  <nav className="navbar">
    <div className="navbar-description">
      <Mobile>Mobile: Short Description</Mobile>
      <NotMobile>
        Tablet and Laptop: A description that is displayed on all viewports except mobile
      </NotMobile>
    </div>
  </nav>
}
```

This approach could useful in various practical situations. For example, if you wanted to render all navbar links on tablet and laptop devices, but display a hamburger icon on mobile, you could this library to accomplish your task

## 🔮 API

### `<[Viewport]>`

- Available viewports

| Viewport   | Targeted Breakpoints |
| ---------- | -------------------- |
| `<Mobile>` | x <= 640px           |
| `<Tablet>` | 640px <= x <= 1024px |
| `<Laptop>` | x >= 1024px          |

### `<Not[Viewport]>`

- Available viewports

| Viewport      | Targeted Breakpoints       |
| ------------- | -------------------------- |
| `<NotMobile>` | x >= 640px                 |
| `<NotTablet>` | x <= 640px and x >= 1024px |
| `<NotLaptop>` | x <= 1024px                |

> These breakpoints have been borrowed from [Tailwind's Responsive Design docs](https://tailwindcss.com/docs/responsive-design)`

**Custom viewports coming soon**

## ❤️ Support

You can support further development of this project by **giving it a 🌟** and help me make even better stuff in the future by **buying me a ☕**

<a href="https://www.buymeacoffee.com/savioxavier">
<img alt="buy me a coffee link" src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" height="50px">
</a>

<br>

**Also, if you liked this repo, consider checking out my other projects, that would be real cool!**
