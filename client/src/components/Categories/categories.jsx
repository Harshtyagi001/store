
import React from "react";
import "./categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories" id="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://cdn.shopify.com/s/files/1/0087/0173/9088/products/22_500x.png?v=1672213636"
            alt=""
          />
          <button>
            <Link className="link" to="/products/5">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://cdn.shopify.com/s/files/1/0582/6963/0656/products/UnisexHoodie_White_Women1_1_1165x.png?v=1668641649"
            alt=""
          />
          <button>
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="https://cdn.shopify.com/s/files/1/0087/0173/9088/products/whatsapp-image-2022-12-16-at-4.46.16-am_400x.jpg?v=1671529094"
            alt=""
          />
          <button>
            <Link to="/products/6" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://cdn.shopify.com/s/files/1/2404/6643/products/green_organic_cotton_shacket_TCM5221-0012_2.jpg?v=1658358703&width=100"
                alt=""
              />
              <button>
                <Link to="/products/2" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="https://cdn.shopify.com/s/files/1/0087/0173/9088/products/pinatex-bottle-case-beverage-accessories-bejo-15964871589968_500x.jpg?v=1647392433"
                alt=""
              />
              <button>
                <Link to="/products/4" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://cdn.shopify.com/s/files/1/0087/0173/9088/products/coconut-soap-tray-handmade-coconut-soap-dish-natural-coconut-shell-tray-for-soap-sponge-bath-accessories-the-bamboo-bae-30346401579183_400x.jpg?v=1647415549"
            alt=""
          />
          <button>
            <Link to="/products/3" className="link">
              Care
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;