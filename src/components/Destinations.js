import React from 'react';

const Destinations = () => {
  return (
    <div class="text-center featured-destinations pt-3 container-fluid">

      
      <div className="row justify-content-center">
        <div className="fs-5 p-2 mb-1 m-3 col-lg-5">
          <p>"Welcome to Ireland,<br></br> the best little country in the world."</p>
          <img src="/images/ireland(1).png" alt="Ireland" className="eire mb-4" />
          <p>Céad Míle Fáilte</p>
        </div>

        <div className="rounded p-2 mt-1 m-auto col-10 col-lg-4 mb-4">
          <p className="fs-5">Check out some of our best destinations below.</p>
          <p><a href="#newgrange">Newgrange</a></p>
          <p><a href="#cliffs">The Cliffs of Moher</a></p>
          <p><a href="#blarney">Blarney Castle</a></p>
          <p><a href="#powerscourt">PowersCourt Estate</a></p>
          <p><a href="#skellig">Skellig Michael</a></p>
          <p><a href="#guinness">The Guinness Storehouse</a></p>
        </div>
        <hr></hr>

      <div className="p-2 m-3 rounded col-10 col-md-6 col-lg-3" id="guinness">
        <h2>The Guinness Storehouse</h2>
        <div className="text-center">
          <img src="/images/guinness_storehouse.jpg" alt="Guinness Storehouse" className="featured-destination-pic mb-2 rounded" />
          <p>
            Set in the heart of Dublin is the iconic Guinness Storehouse.<br></br>
            The brewery has been making Guinness here since 1769 when Arthur Guinness signed a lease for 9,000 years. <br></br>
            Nowadays the home of Guinness is a modern visitor attraction, where fans can learn about the process of 
            making the famous black stuff, understand the history behind it and, of course, 
            sample it.
          </p>
        </div>
      </div>

      <div className="p-2 m-3 rounded col-10 col-md-6 col-lg-3" id="cliffs">
        <h2>The Cliffs of Moher</h2>
        <div className="text-center">
          <img src="/images/cliffs_of_moher.jpg" alt="Guinness Storehouse" className="featured-destination-pic mb-2 rounded" />
          <p>
          Standing at 214 meters over the depths of the Atlantic Ocean, and stretching for an awesome 8 km, are the rugged 
          Cliffs of Moher in County Clare. Visitors are drawn to the cliffs, not just for their sheer impressive size, 
          but also for the views of the breath-taking landscape – on a clear day it is possible to see all 5 of the 
          surrounding counties as well as the Aran Islands. 
          The awe-inspiring cliffs are also home to Ireland’s largest mainland seabird colony, 
          which between April and July includes Puffins!
          </p>
        </div>
      </div>

      <div className="p-2 m-3 rounded col-10 col-md-6 col-lg-3" id="skellig">
        <h2>Skellig Michael</h2>
        <div className="text-center">
          <img src="/images/skellig_michael.jpg" alt="Guinness Storehouse" className="featured-destination-pic mb-2 rounded" />
          <p>
          If you are into Star Wars then you will want to visit Skellig Michael – and if you’re not, you should visit anyway 
          because it is awe-inspiringly beautiful. The rocky island rises out of the Atlantic just off the Iveragh Peninsula 
          and was frequented by ascetic monks, who chose the towering sea crag as a place to live and worship somewhere between 
          the 6th and 8th centuries.
          </p>
        </div>
      </div>

      <div className="p-2 m-3 rounded col-10 col-md-6 col-lg-3" id="newgrange">
        <h2>Newgrange</h2>
        <div className="text-center">
          <img src="/images/newgrange.jpg" alt="Guinness Storehouse" className="featured-destination-pic mb-2 rounded" />
          <p>
          The unimaginably old stone structure of Newgrange tomb was built in 3200 BC. 
          The domed Megalithic Passage Tomb is estimated to have taken 300 people 20 years to build and covers 
          an area of over one acre, revealing interior stones decorated with the spirals and curves of Neolithic rock art. 
          During the Winter Solstice the passageway, along with the inner chamber, is incredibly illuminated by the sunrise that 
          streams through a roof box at the entrance.
          </p>
        </div>
      </div>

      <div className="p-2 m-3 rounded col-10 col-md-6 col-lg-3" id="powerscourt">
        <h2>Powerscourt Estate</h2>
        <div className="text-center">
          <img src="/images/powerscourt_estate.jpg" alt="Guinness Storehouse" className="featured-destination-pic mb-2 rounded" />
          <p>
          Just 20 km from Dublin is the ineffably grand Powerscourt Estate. 
          Set in 47 acres of beautiful land, the gardens were created 150 years ago with the idea of blending the stately 
          home seamlessly into the surrounding landscape. Against the bold backdrop of the Great Sugar Loaf Mountains, 
          the gardens are home to 200 varieties of trees, a rose garden, an Italian garden, and a large kitchen garden. 
          There are many trails to walk along through the vast landscape – one of which leads to Powerscourt Falls, 
          Ireland’s highest waterfall at 121 meters.
          </p>
        </div>
      </div>

      <div className="p-2 m-3 rounded col-10 col-md-6 col-lg-3" id="blarney">
        <h2>Blarney Castle</h2>
        <div className="text-center">
          <img src="/images/blarney_castle.jpg" alt="Guinness Storehouse" className="featured-destination-pic mb-2 rounded" />
          <p>
            Stick your head over the parapet at the historic Blarney Castle and kiss the famous Blarney Stone
            as millions have done before you. It’s said that people who manage to kiss the mysterious Blarney Stone 
            are endowed with ‘the gift of the gab’. This mystic relic isn’t the only interesting attraction at 
            Blarney Castle – dating back to 1446, the medieval stronghold is a warren of stone passageways and dark dungeons, 
            so take a tour and discover the castle’s hidden secrets and expanses of rambling green gardens.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Destinations;