import React from "react";
import "./Eventscon.css";

const Eventscon = () => {
  return (
    <section className="articles">
      <article>
        <div className="article-wrapper">
          <figure>
            <img
              className="dhishna"
              src="https://soe.cusat.ac.in/images/demo/index.jpeg"
              alt="vi"
            />
          </figure>
          <div className="article-body">
            <h2>Dhishna</h2>
            <p>
              Dhishna,The Technical fest, is the amalgamation of the talent and
              resources of the students of all branches of School of
              Engineering, CUSAT. It is an attempt to challenge new
              possibilities, inspire innovation and a platform to showcase and
              hone our technical talents and skills- A factor that sets us aside
              from the plethora of other tech fests in the region. It boasts of
              participation of tech-enthusiasts from all over the country- a
              variety which the Cochin University of Science and Technology
              enjoys regarding the nativity of its students. Dhishna attracts
              participation of over 2000 students from various colleges in
              addition to school students from the neighbourhood.
            </p>
            <a
              href="https://soe.cusat.ac.in/images/demo/14_DHISHNA.pdf"
              className="read-more"
            >
              Read more{" "}
              <span className="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </article>
      <article>
        <div className="article-wrapper">
          <figure>
            <img src="https://picsum.photos/id/1005/800/450" alt="" />
          </figure>
          <div className="article-body">
            <h2>This is some title</h2>
            <p>
              Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
              euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
              lobortis porta. Vestibulum ultrices iaculis enim imperdiet
              egestas.
            </p>
            <a href="#" className="read-more">
              Read more{" "}
              <span className="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </article>
      <article>
        <div className="article-wrapper">
          <figure>
            <img src="https://picsum.photos/id/103/800/450" alt="" />
          </figure>
          <div className="article-body">
            <h2>This is some title</h2>
            <p>
              Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
              euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
              lobortis porta. Vestibulum ultrices iaculis enim imperdiet
              egestas.
            </p>
            <a href="#" className="read-more">
              Read more{" "}
              <span className="sr-only">about this is some title</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Eventscon;
