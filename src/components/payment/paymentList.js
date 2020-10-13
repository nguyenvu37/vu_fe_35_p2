import React from "react";

const PaymentList = () => {
  return (
    <section>
      <div className="payment-complete">
        <div className="box">
          <div className="payment-complete__content">
            <div className="payment-complete__content__title title-content">
              <h1>hoàn thành thanh toán</h1>
            </div>
            <div className="payment-complete__content__info">
              <div className="payment-complete__content__info__customer">
                <h4>THÔNG TIN KHÁCH HÀNG</h4>
                <div className="customer-item">
                  <p className="customer-receiver">
                    Người nhận:<span> </span>
                  </p>
                </div>
                <div className="customer-item">
                  <p className="customer-address">
                    Địa chỉ:<span> </span>
                  </p>
                </div>
                <div className="customer-item">
                  <p className="customer-email">
                    Email:<span> </span>
                  </p>
                </div>
                <div className="customer-item">
                  <p className="customer-phone">
                    Số điện thoại:<span> </span>
                  </p>
                </div>
              </div>
              <div className="payment-complete__content__info__product">
                <table>
                  <tr>
                    <th>Ảnh</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Giá</th>
                    <th>Số Lượng</th>
                    <th>Tổng Số</th>
                  </tr>
                </table>
                <div className="payment-complete__content__info__product__total">
                  <h4>TỔNG CỘNG:</h4>
                  <span className="price"></span>
                </div>
                <div className="payment-complete__content__info__product__btn">
                  <button
                    className="back-info"
                    type="button"
                    onclick="onBackInforPage()"
                  >
                    Quay lại trang thông tin
                  </button>
                  <button
                    className="checkout"
                    type="button"
                    onclick="onCheckout()"
                  >
                    Thanh toán{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentList;
