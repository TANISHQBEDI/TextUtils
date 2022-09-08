import React from 'react'

export default function About(props) {
    
    document.title='TextUtils About'


  return (
    <div className="container">
        <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>About Us</h1>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                      <button className={`accordion-button collapsed text-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Accordion Item #1
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          This is my First React app.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                      <button className={`accordion-button collapsed text-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Accordion Item #2
                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          I will be doing more react apps soon.
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                      <button className={`accordion-button collapsed text-${props.mode==='light'?'light':'dark'} bg-${props.mode==='light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          Accordion Item #3
                      </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          You can download my other projects from github.
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
