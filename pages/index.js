import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
    <main>

  <div id="myCarousel" className="carousel slide" data-bs-ride="carousel" data-interval="5000">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>

    {/* Wrapper for slides */}
    <div className="carousel-inner">
      
      <div className="carousel-item active">
        <Image 
          src="/images/shedLogo.jpeg"
          layout="fill"
          // height={100}
          // width={544}
          alt="Logo"          
        />
        <div className="container">
          <div className="carousel-caption text-start" id="carousel-cation">
            <h1>Welcome to the Men's Shed</h1>
            <p>A place to come and unwind</p>
            <p><a className="btn btn-lg btn-primary" href="/bioPage">Meet the team</a></p>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <Image 
          src="/images/working.jpeg"
          layout="fill"
          // height={144}
          // width={144}
          alt="Worker"   
        />
        <div className="container">
          <div className="carousel-caption" id="carousel-cation">
            <h1>What we do</h1>
            <p>Check out some fun activities to do. Get Involved</p>
            <p><a className="btn btn-lg btn-primary" href="/projects">Go to Projects</a></p>
          </div>
        </div>
      </div>

      <div className="carousel-item">
        <Image
          src="/images/historyPeople.jpeg"
          layout="fill"
          // height={144}
          // width={144}
          alt="History"
        />
        <div className="container">
          <div className="carousel-caption" id="carousel-cation">
            <h1>History</h1>
            <p>Where we come from, where we've been, who we are...</p>
            <p><a className="btn btn-lg btn-primary" href="/history">Click here for more</a></p>
          </div>
        </div>
      </div>

    <div className="carousel-item">
      <Image
        src="/images/mensShedSponsors-1.jpg"
        layout="fill"
        // height={144}
        // width={144}
        alt="Sponsors" 
      />
      <div className="container">
        <div className="carousel-caption text-end" id="carousel-cation">
          <h1>Sponsors</h1>
          <p>Companies supporting the cause</p>
          <p><a className="btn btn-lg btn-primary" href="/sponsors">Click here for more</a></p>
        </div>
      </div>
    </div>
  </div>

    {/* controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </main>

  {/* Colomns below the carousel */}
  <div className="container marketing">

    <div className="row">
      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-Image rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="Image" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"> */}
          <title>Have a look what you can do</title>
          <Image src = "/images/dollhouse.jpeg" width={150} height={150}/>
          <rect width="100%" height="100%" fill="#777"/>
          {/* </svg> */}
        <h2>Projects</h2>
        <p>Take a look at activities and tools available for any one to get involved! There are so many options you won't know where to start!</p>
        <p><a className="btn btn-secondary" href="/projects">View Projects &raquo;</a></p>
      </div>

      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-Image rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="Image" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"> */}
          <title>Check out our inventory</title>
          <Image src = "/images/trolley.jpeg" width={150} height={150}/>
          <rect width="100%" height="100%" fill="#777"/>
        {/* </svg> */}
        <h2>The Toy Shop</h2>
        <p>Take a look through our catalouge of original wooden toys for kids big and small</p>
        <p><a className="btn btn-secondary" href="/products">View Catalouge &raquo;</a></p>
      </div>

      <div className="col-lg-4">
        {/* <svg className="bd-placeholder-Image rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="Image" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title> */}
          <Image src = "/images/car1.jpeg" width={150} height={150} />
          <rect width="100%" height="100%" fill="#777"/>
          {/* </svg> */}
        <h2>Order Online</h2>
        <p>Find where we are, how to get in touch, how to talk to someone and how to order online</p>
        <p><a className="btn btn-secondary" href="contact">View Store &raquo;</a></p>
      </div>
    </div>

    </div>
    </>
  )
}
