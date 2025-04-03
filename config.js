// config.js
const apiKeys = {
  // Google Custom Search API Key (For searching)
  GOOGLE_API_KEY: 'AIzaSyDndNAfYE6-_tpcQk5mRlbNGduvFN_WF2o', // Replace with your actual Google Search API Key

  // Google Custom Search Engine ID
  SEARCH_ENGINE_ID: '02aca10304c1d4564', // Replace with your actual Search Engine ID

  // Google Gemini API Key (For generation)
  GEMINI_API_KEY: 'AIzaSyCptpJ68R5lyJPduY8rtqUXR9Ij7F4puoE' // Your provided Gemini Key
};

// Important Security Note:
// Storing API keys directly in client-side JavaScript like this is generally
// insecure for production applications. Anyone can view the source code and
// potentially misuse your keys. For real-world applications, API calls should
// ideally be routed through a secure backend server that manages keys safely.
// This setup is for demonstration or personal use purposes only.
