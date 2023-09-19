import React from 'react';
import LandingPage from './Pages/LandingPage';




function App() {


  // implementing Hydrogen for Shopify Storefront API

  const storeConfig = {
    domain: 'fore-2-tour.myshopify.com',
    storefrontToken: 'PRIVATE_STOREFRONT_API_TOKEN'
  };




  return (
    <div className="App">


      <createStorefrontClient config={storeConfig}>
        {/* <HeaderSection /> */}
        {/* <ForeBearText /> */}
        <LandingPage />
      </createStorefrontClient>
      {/* <NewsLetterSignup /> */}
      {/* <Routes>
        <Route path="/" element={<ForeBearText />} />
        <Route path="/" element={<PoloSlideOver />} />
      </Routes> */}


    </div>
  );
}

export default App;
