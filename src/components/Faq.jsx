import React from "react";

function Faq() {
  return (
    <>
      
      <center className="my-5">
        <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" >FAQ</h1>
      </center>
      <div className="container col-md-8" data-aos="zoom-out-down">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What types of vehicles do you offer?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut sapiente eos quasi, quibusdam tenetur suscipit repellat voluptates? Minima illo eveniet quibusdam veritatis. Mollitia unde itaque odio consequuntur at eligendi aliquam omnis, soluta nemo totam enim iste autem iusto tenetur tempora maiores quo, necessitatibus ratione officiis, tempore cumque eum cupiditate? Iure excepturi architecto veritatis perspiciatis.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Do your prices include gratuity, taxes, and fees?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non corporis explicabo vel aliquid totam fugiat pariatur maiores sunt ipsum, veritatis quam atque harum recusandae aliquam repellat accusamus maxime, cupiditate eveniet ex porro repellendus rerum optio provident. Natus voluptatem eius debitis, pariatur deleniti iusto nam.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How far in advance should I book?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                velit earum a error hic cumque natus nam eius animi commodi esse
                iusto quisquam quos rem ipsam! Veritatis minima expedita,
                tempore magni inventore consequatur? Ducimus cum sequi quis aut,
                iusto rerum earum omnis nostrum magni quaerat unde deserunt
                placeat, inventore a possimus fugiat nesciunt facere dicta?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
