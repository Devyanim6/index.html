document.addEventListener('DOMContentLoaded', () => {
    console.log('Welcome to AutoMarket!');
    function buyNow() {
      alert("Thank you for your interest! Our sales team will contact you shortly to complete your purchase.");
    }

    module.exports = {
  async rewrites() {
    return [
      { source: '/api/example', destination: '/api/example-handler' },
    ];
  },
};

    
  });
  
