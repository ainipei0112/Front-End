import { useState, useContext } from 'react';
import { AppContext } from 'src/Context';

const Addsalesdetail = () => {
  const { insertsalesdetail } = useContext(AppContext);
  const [newsalesdetail, setNewsalesdetail] = useState();
  const addNewsalesdetail = (e, field) => {
    setNewsalesdetail({
      ...newsalesdetail,
      [field]: e.target.value,
    });
  };
  const submitUser = (e) => {
    e.preventDefault();
    insertsalesdetail(newsalesdetail);
    e.target.reset();
  };
  return (
    <form className="insertForm" onSubmit={submitUser}>
      <h2>新增訂單副檔</h2>
      <label htmlFor="_orderid">
        訂單編號
        <input
          type="text"
          id="_orderid"
          onChange={(e) => addNewsalesdetail(e, "salesdetail_orderid")}
          placeholder="Enter orderid"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_prodid">
        產品代號
        <input
          type="text"
          id="_prodid"
          onChange={(e) => addNewsalesdetail(e, "salesdetail_prodid")}
          placeholder="Enter prodid"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_qty">
        數量
        <input
          type="text"
          id="_qty"
          onChange={(e) => addNewsalesdetail(e, "salesdetail_qty")}
          placeholder="Enter qty"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_discount">
        折扣
        <input
          type="text"
          id="_discount"
          onChange={(e) => addNewsalesdetail(e, "salesdetail_discount")}
          placeholder="Enter discount"
          autoComplete="off"
          required
        />
      </label>
      <input type="submit" value="新增" />
    </form>
  );
};

export default Addsalesdetail;
