# ChainMyne Challenge 1

What I did here was to create a simple react app with a main Page that has a table that feetches the data of CoinGecko. 

The following url is where the app is published.

https://nemesis1346.github.io/chainmyne_interview_challenge_1/

I used simple github pages for simplification since this React app is directly fething data and not relying on a server

*Extra features:

1. I took the liberty of adding 100 coins with its relevant information 

2. I added a cron job that will fetch new data each 10 seconds to get updates of the coins in real time.

3. The app can run both in a mobile(browser url) and in desktop so you can check that render smoothly in both

4. Also you can click on the column names and it will sort the rows by it.

5. I added a hamburger button when more features are required 

6. I added images on the rows, the api was giving me already the png files

### Installation steps and running locally

```
nvm use 20.18.0
npm install
npm start
```