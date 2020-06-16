import React, { Component } from "react";
import './footer.css'









class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer className="page-footer font-small  -3 footer">
          <div className="">
            <div className="row">
              <div className="col-md-12 py-5">
                <div className="mb-4 flex-center">

                    <div className='link'>
                  <a className="fb-ic">
                    <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>
                  <a className="tw-ic">
                    <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>

                  <a className="li-ic">
                    <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>
                  <a className="ins-ic">
                    <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                      {" "}
                    </i>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-copyright text-center py-3 copy">
            © 2020 Copyright:
            <a href=""> Ammar Chaima</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;