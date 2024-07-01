
import React from 'react';
import '../static/css/error404.css';

function Unauthorized() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 col-sm-offset-1 text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center">401</h1>
              </div>
              <div className="contant_box_404">
                  <p>Unauthorized Access</p>
                  <p>You do not have permission to view this page.</p>
                  <a href="/" className="link_404" style={{ display: 'flex', justifyContent: 'center' }}>Go to Home</a>            
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unauthorized;
