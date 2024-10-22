generate_samples <- function(mean, stddev) {
    # sample 10 times from the normal dist.
  samples <- rnorm(10, mean = mean, sd = stddev)
  round(samples, 2)  # Return rounded samples as an array
}
