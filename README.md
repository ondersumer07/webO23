# Önder Sümer Web Project

![Logo](https://raw.githubusercontent.com/ondersumer07/webO23/master/static/favicon/favicon-32x32.png)

Personal website to showcase current work and future endeavors.

[View live](https://ondersumer.com/) . [Report bug](https://github.com/ondersumer07/webO23/issues)

## About the project

![Project homepage](https://raw.githubusercontent.com/ondersumer07/webO23/master/static/githubReadme/homepageScreenshot.png)

This project is built with my love for new technology as well as [SvelteKit](https://kit.svelte.dev/). The framework allows me to create new pages much faster, and it makes handling data easier. Specifically, I use [PocketHost](https://pockethost.io/) to store my data which works great with SvelteKit.

Also using [Skeleton](https://www.skeleton.dev/) with [Tailwind CSS](https://tailwindcss.com/) has made global styling fun.

I have created Svelte components for my weatherCard and musicCard, so they're reusable for everyone. I will dive deeper into them later on the project page.

I hope you had as much fun visiting my website as I did while I was building it. Huge shout out to [Burak Sümer](https://github.com/burraksumer) for his contributions.

## Built with

- [SvelteKit](https://kit.svelte.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Skeleton](https://www.skeleton.dev/)
- [Floating UI](https://floating-ui.com/) (with Skeleton)

## Getting started

You can use this as a template for your website. Recognition would be appreciated although not mandatory.

## Installation

First, install npm. The latest version recommended as all the packages in this project were updated to their latest versions on January 2024.

```bash
  npm install -g npm
```

After, clone the repository.

```bash
  git clone https://github.com/ondersumer07/webO23.git
```

Then, you need to install the project packages.

```bash
  npm install
```

Go crazy!

## Features

Some of these features were presets and some of them were developed by me. Either way, you can freely use them. I will create seperate pages for the components I've developed. Then, this part is going to be shortened and their repositories will be linked.


### Light/dark mode toggle

This is a customized version of Skeleton's built-in [lightswitch](https://www.skeleton.dev/utilities/lightswitches). You can check out the documentation.

### weatherCard

![weatherCardDemo](https://raw.githubusercontent.com/ondersumer07/webO23/master/static/githubReadme/weatherCardDemo.png)

This is a Svelte component I've created using 2 APIs: OpenWeather's [Weather API](https://openweathermap.org/api) and Google Maps' [Maps Static API](https://developers.google.com/maps/documentation/maps-static/overview). Remember that you will need your own API keys for it to function properly. I will name the environment variables later on.

weatherCard's design belongs to me, and it utilizes animated SVGs as background images. There are designated backgrounds for different weather conditions.

- Sunny / Night
- Cloudy / Cloudy Night
- Rainy
- Thunderstorm
- Snow

The night situations change after Istanbul's time passes 8 p.m. The city which the weather condition is going to be taken is decided on the file:

```bash
  /source/routes/+page.server.js
```
You can change the `currentCity` variable in the JS file to alter the city. Timezone changes can be made in the `weatherCard.svelte` component itself by changin `timezoneCity`. Variables are also exported, so you can import values onto them whenever utilizing it.

Maps Static API also uses the same `currentCity` variable, so you don't have to enter the same city name twice. Once you're set, you're set for good!

### musicCard

![musicCardDemo](https://raw.githubusercontent.com/ondersumer07/webO23/master/static/githubReadme/musicCardDemo.gif)

I developed musicCard using [Last.fm API](https://www.last.fm/api). All the properties will work nicely once you have your API key and all the necessary elements.

There are 2 states to this component: "Now Playing" and "Last Played". Only "Now Playing" has an animated icon, and "Last Played" has a static one.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`LAST_FM_API_KEY`

`OPEN_WEATHER_API_KEY`

`MAPS_API_KEY`

## Roadmap

- Create specific project pages for weatherCard and musicCard

- Develop a timezone converter from scratch

- Add a quirky "Poem of the Day" page
  
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

- If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/ondersumer07/webO23/issues) to discuss it, or directly create a pull request after you edit the README.md file with necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.

### Creating a pull request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Licensed under [BSD-3](https://opensource.org/license/BSD-3-clause/).

## Acknowledgements

 - [Burak Sümer](https://github.com/burraksumer)
 - [readme.so](https://readme.so/)

## Feedback

If you have any feedback or questions, you can always reach out to me@ondersumer.com
