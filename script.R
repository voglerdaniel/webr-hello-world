generate_samples <- function(mean, stddev) {
  samples <- rnorm(10, mean = mean, sd = stddev)
  formatted_samples <- paste(format(round(samples, 2), nsmall = 2), collapse = "\n")
  return(formatted_samples)
}
