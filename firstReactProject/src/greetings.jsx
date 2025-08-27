import React from "react";

const Greetings = (props) => {
  return (
    <div className="row">
      <div className="col-md-4 mb-4">
        <div className="card shadow h-100 text-center">
          <div className="card-body">
            <h2 className="card-title">Hello {props.item1}</h2>
            <p className="text-muted">Purchase now to have the finest {props.item1}</p>
            <strong className="d-block mb-3">Price: 5,000</strong>
            <button className="btn btn-success rounded-pill">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow h-100 text-center">
          <div className="card-body">
            <h2 className="card-title">Hello {props.item2}</h2>
            <p className="text-muted">Purchase now to have the finest {props.item2}</p>
            <strong className="d-block mb-3">Price: 5,000</strong>
            <button className="btn btn-success rounded-pill">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow h-100 text-center">
          <div className="card-body">
            <h2 className="card-title">Hello {props.item3}</h2>
            <p className="text-muted">Purchase now to have the finest {props.item3}</p>
            <strong className="d-block mb-3">Price: 5,000</strong>
            <button className="btn btn-success rounded-pill">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow h-100 text-center">
          <div className="card-body">
            <h2 className="card-title">Hello {props.item4}</h2>
            <p className="text-muted">Purchase now to have the finest {props.item4}</p>
            <strong className="d-block mb-3">Price: 5,000</strong>
            <button className="btn btn-success rounded-pill">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow h-100 text-center">
          <div className="card-body">
            <h2 className="card-title">Hello {props.item5}</h2>
            <p className="text-muted">Purchase now to have the finest {props.item5}</p>
            <strong className="d-block mb-3">Price: 5,000</strong>
            <button className="btn btn-success rounded-pill">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="col-md-4 mb-4">
        <div className="card shadow h-100 text-center">
          <div className="card-body">
            <h2 className="card-title">Hello {props.item6}</h2>
            <p className="text-muted">Purchase now to have the finest {props.item6}</p>
            <strong className="d-block mb-3">Price: 5,000</strong>
            <button className="btn btn-success rounded-pill">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greetings;
