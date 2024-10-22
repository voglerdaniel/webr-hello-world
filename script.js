import { WebR } from 'https://webr.r-wasm.org/latest/webr.mjs';

const webr = new WebR();
await webr.init();

// Define the function globally by attaching it to the `window` object
// this ensures the function can be called properly when we import
// this javascript file to the HTML
window.sampleNormalDist = async function() {
  // Get the user input values
  const mean = parseFloat(document.getElementById("mean").value);
  const stddev = parseFloat(document.getElementById("stddev").value);

  // Fetch the R script
  const response = await fetch('script.R');
  const rCode = await response.text();

  // Define the R function in the WebR environment
  await webr.evalR(rCode);

  // Call the R function with the user-provided arguments
  const result = await webr.evalR(`generate_samples(${mean}, ${stddev})`);

  // Convert the result to a string
  const output = await result.toString();

  // Display the output
  document.getElementById("output").textContent = output;
};
