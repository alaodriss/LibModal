
#  Installation

- To install, you can use npm 

$ npm install component-librar-modal

- Examples : 

- Here is a simple example of component-librar-modal and 
  this component is reutilisable being used in an app with style :



# component modal reutilisable
```
import React from "react";
import '../style/App.css'

function Modal({ children }) {
  return (
      <div className="modalBackground">
        <div className="modalContainer">{children}</div>
      </div>
  );
}
export default Modal;

```

# button for open this modal
```
import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import '../style/App.css'


const PageTest = () => {
  const [openModal, setOpenModal] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input className="button-59" type="submit" value="Click Here" />
        {openModal && (
          <Modal>
            <div>
              <button
                className="btn-close"
                onClick={() => {
                  setOpenModal(false);
                }}
              >
                X
              </button>
              <p className="TextModal">Modal Here</p>
            </div>
          </Modal>
        )}
      </form>
    </div>
  );
};

export default PageTest;

```


# Style Modal && button


````

  /***** Style Modal *****/
  
.modalBackground {
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
  }
  .modalContainer {
    position: relative;
    width: 32rem;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 25px;
    z-index: 22;
    margin: 0 5%;
  }
  .btn-close {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
  }



  /***** Style Btn *****/

  .button-59 {
    align-items: center;
    background-color: #fff;
    border: 2px solid #000;
    box-sizing: border-box;
    color: #000;
    cursor: pointer;
    display: inline-flex;
    fill: #000;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    justify-content: center;
    letter-spacing: -0.8px;
    line-height: 24px;
    min-width: 140px;
    outline: 0;
    padding: 0 17px;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }


  .TextModal{
    text-align: center;
    color: #066416;
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    border-bottom: inset;
  }
  .button-59:focus {
    color:  #066416;
    }

  .button-59:hover {
    border-color: #066416;
    color:  #066416;
    fill: #06f;
  }

  .button-59:active {
    border-color: #06f;
    color: #06f;
    fill: #06f;
  }

  @media (min-width: 768px) {
    .button-59 {
      min-width: 170px;
    }
  }
  ```


  You can find more examples in the examples directory, which you can run in a local development server using npm start .
