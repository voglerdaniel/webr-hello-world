# Hello World in WebR

To get started, download or pull this repo. Also, make sure you have [Python3 installed](https://www.python.org/downloads/). You don't need to write Python code for this to work; we just need Python to a line of Terminal code that will allow you to see this test code locally in your browser.

In the terminal, navigate this repo stored and run

```
python3 -m http.server
```

If you have problems with the commands above, try:

```
python -m http.server
```

Now, open a web browser (I've worked mostly with Chrome) and type `http://localhost:8000` into the URL bar. You should now see a webpage like this:

![image](./resources/screenshot.png)

Once this is working in your local machine (that's what visiting `http://localhost:8000` allows you to check), you can modify the HTML, Javascript, and R scripts however you want. To publish a WebR app so others can see, consider a free service that can host static pages like [Github Pages](https://pages.github.com). Just make sure you upload all of the necessary files. Your repo structure will look something like:
```
.
├── index.html
├── script.R
├── script.js
└── styles.css
```
See the [WebR docs](https://docs.r-wasm.org/webr/latest/) for more info.
