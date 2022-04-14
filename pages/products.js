import Image from 'next/image'

export default function Products() {
    return (
    <>
     <div id="heading">
     <h3>Wooden Toys Available for purchase</h3>
        <p>The potential is limitless... But heres what we have at the moment.</p>
    </div>
      <main className="content">
        <div className="card text-white bg-primary mb-3">
            <div className="card-header">Toy Cars</div>
            <div className="card-body">
              <h5 className="card-title">Classic Wooden Toys</h5>
              <Image src="/images/car1.jpeg"
                height={300}
                width={300}
              />
              <p className="card-text">Check out our range of beautiful classic cars made from recycled wood</p>
              <a href="/items/cars" className="btn btn-primary">Shop for Toy Cars</a>
            </div>
        </div>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Rockers</div>
            <div className="card-body">
              <h5 className="card-title">Classic Rocking Ride On Toys</h5>
              <Image 
                src="/images/rockingHorse.jpeg"
                height={300}
                width={300}
              />
              <p className="card-text">The cutest rocking horses made with love and recycled timber</p>
              <a href="/items/rockers" className="btn btn-primary">Shop Rocking toys</a>
            </div>
          </div>
          <div className="card text-white bg-primary mb-3">
            <div className="card-header">Doll Houses</div>
            <div className="card-body">
              <h5 className="card-title">Classic Doll House</h5>
              <Image 
                src="/images/dollhouse.jpeg"
                height={300}
                width={300}
              />
              <p className="card-text">The most magnificent miniature doll houses will stand the test of time</p>
              <a href="#" className="btn btn-primary">Shop Doll Houses</a>
            </div>
            </div>
            <div className="card text-white bg-primary mb-3">
            <div className="card-header">Puzzles</div>
            <div className="card-body">
              <h5 className="card-title">Block-Shift and Jigsaw Puzzles</h5>
              <Image 
                src="/images/blockPuzzle.jpeg"
                height={300}
                width={300}
              />
              <p className="card-text">The most challenging puzzles that are timeless and much better than playing on your phone...</p>
              <a href="#" className="btn btn-primary">Shop Puzzles</a>
            </div>
          </div>
            <div className="card text-white bg-primary mb-3">
            <div className="card-header">Furniture</div>
            <div className="card-body">
              <h5 className="card-title">A variety of different quality, handmade pieces for any home</h5>
              <Image 
                src="/images/furniture.jpeg"
                height={300}
                width={300}
              />
              <p className="card-text">Check out all the beautiful, clean, green wooden furniture these guys are making</p>
              <a href="#" className="btn btn-primary">Shop Furniture</a>
            </div>
          </div>
      </main>
    </>
    )
  }
  