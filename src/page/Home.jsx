import React, { useEffect, useState } from "react";
import "./Home.scss";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const Home = () => {
  const [i, setI] = useState("");
  const [j, setJ] = useState("");
  const [changeBtn, setChangeBtn] = useState(true);

  const [count, setCount] = useState(0);

  const notify = () => toast("Chúc Các Bạn Trăm Năm Hạnh Phúc Nhé !");
  const notify2 = () =>
    toast(
      `Vì con gái nói " Không " là " Có " nên mik sẽ chuyển chữ " Không ạ " thành chữ " Vâng ạ " ! bạn thông cảm giúp mik nhé  `
    );

  const handleClick = () => {
    setI(Math.floor(Math.random() * 500) + 1);
    setJ(Math.floor(Math.random() * 500) + 1);
    setCount(count + 1);
  };
  useEffect(() => {
    if (count === 5) {
      notify2();
      setChangeBtn(false);
    }
  }, [count]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="haha">
            <div class="blurred-box">
              <div class="user-login-box"></div>
            </div>
            <h1 className="text-center">
              <section class="light">
                <h1 class="gradient1">Làm Người Yêu Anh Nhé !</h1>
              </section>
            </h1>
            <div className=" d-flex align-items-center justify-content-center mt-5 gap-5">
              <button onClick={notify} className="btn-yes">
                Vâng ạ{" "}
              </button>
              {changeBtn ? (
                <button
                  onClick={handleClick}
                  style={{ top: `${i}px`, right: `${j}px` }}
                  className="position-absolute btn-no "
                >
                  Không ạ
                </button>
              ) : (
                <button onClick={notify} className="btn-yes2">
                  Vâng ạ{" "}
                </button>
              )}
            </div>
          </div>
          <ToastContainer
            position="top-center"
            autoClose={13000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
