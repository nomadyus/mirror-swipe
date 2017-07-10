## mirror-swipe ##
A simple web app that mimics the swiping and rating effect from the Episode 1 "Nosedive" Season 3 of Black Mirror. 

## Requirements
- [browser-sync v2.18.8](https://browsersync.io/#install)
- [tachyons v4.5.3](http://tachyons.io/)

## Running in browser
We are  able to run the site in browser for testing purposes using the command in the project directory:
```
browser-sync start --server --files "*, */*, */*/*"
```
The above command will run a local mini-server of the directory and will provide a URL to view the site.

## Site
The site is hosted as [mirror-swipe](http://mirror-swipe.s3-website-us-east-1.amazonaws.com/) on an AWS S3 bucket.