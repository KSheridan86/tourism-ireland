import React from 'react';

const Home = () => {
  return (
    <div class="home-page container">
      <div className='row justify-content-center'>
        <div className="p-3 m-1 mt-0 col-12 col-lg-5">
          <img src="/images/food-map.jpg" alt="Ireland" className="home-image rounded" />
        </div>

        <div className="home m-auto rounded p-3 m-1 mt-3 text-center col-11 col-lg-5">
          <p>
            Welcome to the enchanting land of Ireland! <hr></hr>
            A captivating destination that beckons travelers from across the globe. <hr></hr>
            With its breathtaking landscapes, rich history, vibrant culture, and warm hospitality, Ireland offers an unforgettable 
            experience to all who venture here. <hr></hr> 
            Immerse yourself in the lush green countryside, dotted with ancient castles and 
            charming villages, or explore the bustling cities that seamlessly blend tradition with modernity. 
            Discover the legendary myths and folklore, savor the flavors of traditional Irish cuisine, and experience the lively 
            pub culture where lively music and dance create an atmosphere of pure joy. <hr></hr>
            Whether you're drawn to its dramatic coastlines, 
            mystical ancient sites, or the warmth of its people, Ireland promises to leave an indelible mark on your heart and create 
            memories to last a lifetime.
          </p>
        </div>

      </div>
      
      {/* <div className="home m-auto rounded p-3 mt-auto text-center">
        <p>
          Welcome to the enchanting land of Ireland! <hr></hr>
          A captivating destination that beckons travelers from across the globe. <hr></hr>
          With its breathtaking landscapes, rich history, vibrant culture, and warm hospitality, Ireland offers an unforgettable 
          experience to all who venture here. <hr></hr> 
          Immerse yourself in the lush green countryside, dotted with ancient castles and 
          charming villages, or explore the bustling cities that seamlessly blend tradition with modernity. 
          Discover the legendary myths and folklore, savor the flavors of traditional Irish cuisine, and experience the lively 
          pub culture where lively music and dance create an atmosphere of pure joy. <hr></hr>
          Whether you're drawn to its dramatic coastlines, 
          mystical ancient sites, or the warmth of its people, Ireland promises to leave an indelible mark on your heart and create 
          memories to last a lifetime.
        </p>
      </div> */}
    </div>
  );
};

export default Home;