import { useState, useContext } from 'react';
import { AppContext } from 'src/Context';

const Addsalesorder = () => {
  const { insertsalesorder } = useContext(AppContext);
  const [newsalesorder, setNewsalesorder] = useState();
  const addNewsalesorder = (e, field) => {
    setNewsalesorder({
      ...newsalesorder,
      [field]: e.target.value,
    });
  };
  const submitUser = (e) => {
    e.preventDefault();
    insertsalesorder(newsalesorder);
    e.target.reset();
  };

  return (
    <form className="insertForm" onSubmit={submitUser}>
      <h2>新增訂單主檔</h2>
      <label htmlFor="_orderid">
        訂單編號
        <input
          type="text"
          id="_orderid"
          onChange={(e) => addNewsalesorder(e, "salesorder_orderid")}
          placeholder="Enter orderid"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_empid">
        員工代號
        <input
          type="text"
          id="_empid"
          onChange={(e) => addNewsalesorder(e, "salesorder_empid")}
          placeholder="Enter empid"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_custid">
        客戶代號
        <input
          type="text"
          id="_custid"
          onChange={(e) => addNewsalesorder(e, "salesorder_custid")}
          placeholder="Enter custid"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_orderdate">
        訂單日期
        <input
          type="text"
          id="_orderdate"
          onChange={(e) => addNewsalesorder(e, "salesorder_orderdate")}
          placeholder="Enter orderdate"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_descript">
        備註
        <input
          type="text"
          id="_descript"
          onChange={(e) => addNewsalesorder(e, "salesorder_descript")}
          placeholder="Enter descript"
          autoComplete="off"
          required
        />
      </label>
      <input type="submit" value="新增" />
    </form>
  );
};

export default Addsalesorder;
