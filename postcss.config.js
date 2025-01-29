module.exports = {
  theme: {
    extend: {
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)', // Default smooth easing
        'ease-out-smooth': 'cubic-bezier(0.25, 0.8, 0.25, 1)', // Smooth ease-out
        'ease-in-smooth': 'cubic-bezier(0.42, 0, 0.58, 1)', // Smooth ease-in
        'ease-out-back': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Backward effect
        'ease-in-back': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)', // Inward effect
        'ease-out-bounce': 'cubic-bezier(0.25, 1.5, 0.5, 1)', // Bouncy effect
      },
    },
    
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
