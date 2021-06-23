import { useEffect, useState } from 'react';

const Actions = () => {
  let [users, setUsers] = useState([]);
  let [products, setProduct] = useState([]);
  let[orderdetile, setOrderdetile] = useState([]);
  let [userLength, setUserLength] = useState(null);
  let [salesorders, setsalesorders] = useState([]);
  let [salesdetails, setsalesdetails] = useState([]);

  useEffect(() => {
    console.log('hello');
    fetch('http://localhost/php-react/all-data.php')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
          setProduct(data.products);
          setsalesorders(data.salesorders);
          console.log(data.users);
          console.log(data.products);
          console.log(data.salesorders);
          setUserLength(true);
        } else {
          setUserLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertUser = (newUser) => {
    fetch('http://localhost/php-react/add-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          setUsers([
            {
              id: data.id,
              newUser,
            },
            ...users,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertsalesdetail = (newsalesdetail) => {
    fetch("http://localhost/php-react/addsalesdetail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsalesdetail),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setsalesdetails([
            {
              id: data.id,
              ...newsalesdetail,
            },
            ...salesdetails,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertsalesorder = (newsalesorder) => {
    fetch("http://localhost/php-react/addsalesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsalesorder),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setsalesorders([
            {
              id: data.id,
              ...newsalesorder,
            },
            ...salesorders,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editModesalesorder = (orderid) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.orderid === orderid) {
        salesorder.isEditing = true;
        return salesorder;
      }
      salesorder.isEditing = false;
      return salesorder;
    });
    setsalesorders(salesorders);
  };

  // Cance the edit mode.
  const cancelEditsalesorder = (seq) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.seq === seq) {
        salesorder.isEditing = false;
        return salesorder;
      }
      return salesorder;
    });
    setsalesorders(salesorders);
  };

  const updatesalesorder = (apple) => {
    console.log(apple);
    fetch("http://localhost/php-react/updatesalesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apple),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert(data.msg);
          salesorders = salesorders.map((salesorder) => {
            if (salesorder.seq === apple.seq) {
              salesorder.isEditing = false;
              salesorder.salesorder_orderid = apple.salesorder_orderid;
              salesorder.salesorder_empid = apple.salesorder_empid;
              salesorder.salesorder_custid = apple.salesorder_custid;
              salesorder.salesorder_orderdate = apple.salesorder_orderdate;
              salesorder.salesorder_descript = apple.salesorder_descript;
              return salesorder;
            }
            return salesorder;
          });
          setsalesorders(salesorders);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletesalesorder = (orderid) => {
    // filter outing the user.
  let salesorderDeleted = salesorders.filter((salesorder) => {
    return salesorder.orderid !== orderid;
  });
  fetch("http://localhost/php-react/deletesalesorder.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theseq: orderid }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setsalesorders(salesorderDeleted);
        if (salesorders.length === 1) {
          setUserLength(0);
        }
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const selectsalesorder = (orderid) => {
  console.log(orderid);
fetch("http://localhost/php-react/showsalesdetail.php", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ theorderid: orderid }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    if (data.success) {
      alert(JSON.stringify(data.salesorders));
    }
  })
  .catch((err) => {
    console.log(err);
  });
};

  // Enabling the edit mode for a listed user.
  const editMode = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = true;
        return user;
      }
      user.isEditing = false;
      return user;
    });
    setUsers(users);
  };

  // Cance the edit mode.
  const cancelEdit = (id) => {
    users = users.map((user) => {
      if (user.id === id) {
        user.isEditing = false;
        return user;
      }
      return user;
    });
    setUsers(users);
  };

  // Updating a user.
  const updateUser = (userData) => {
    fetch('http://localhost/php-react/update-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          users = users.map((user) => {
            if (user.id === userData.id) {
              user.isEditing = false;
              user.user_name = userData.user_name;
              user.user_email = userData.user_email;
              return user;
            }
            return user;
          });
          setUsers(users);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Deleting a user.
  const deleteUser = (theID) => {
    const userDeleted = users.filter((user) => user.id !== theID);
    fetch('http://localhost/php-react/delete-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: theID }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(userDeleted);
          if (users.length === 1) {
            setUserLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userLogin = (userdata) => {
    fetch('http://localhost/php-react/login-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.users);
          setUserLength(true);
        } else {
          setUserLength(0);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchOrder = (date) => {
    fetch('http://localhost/php-react/search-order.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(date),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setOrderdetile(data.orderdetile);
        } else {
          console.log('No');
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchProuct = (productid) => {
    console.log(productid);
    fetch('http://localhost/php-react/search-product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProduct(data.products);
        } else {
          console.log('No');
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const insertProduct = (Productname) => {
    fetch('http://localhost/php-react/insert-product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Productname),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.productid) {
          setProduct([
            {
              ...Productname,
            },
            ...products,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProduct = (productid) => {
    console.log(productid);
    const productDelete = products.filter((product) => product.productid !== productid);
    fetch('http://localhost/php-react/delete-product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId: productid }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProduct(productDelete);
          if (users.length === 1) {
            setUserLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProduct = (productData) => {
    fetch('http://localhost/php-react/update-product.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          products = products.map((product) => {
            if (product.productid === productData.productid) {
              product.isEditing = false;
              product.productid = productData.productid;
              product.productname = productData.productname;
              product.productprice = productData.productprice;
              product.productcost = productData.productcost;
              return product;
            }
            return product;
          });
          setProduct(products);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editProductMode = (id) => {
    products = products.map((product) => {
      if (product.productid === id) {
        product.isEditing = true;
        return product;
      }
      product.isEditing = false;
      return product;
    });
    setProduct(products);
  };

  const cancelEditProduct = (id) => {
    products = products.map((product) => {
      if (product.productid === id) {
        product.isEditing = false;
        return product;
      }
      return product;
    });
    setProduct(products);
  };

  return {
    users,
    orderdetile,
    products,
    editMode,
    editModesalesorder,
    editProductMode,
    cancelEdit,
    cancelEditsalesorder,
    updateUser,
    insertUser,
    deleteUser,
    deletesalesorder,
    userLogin,
    salesorders,
    searchOrder,
    searchProuct,
    insertProduct,
    deleteProduct,
    updateProduct,
    cancelEditProduct,
    insertsalesdetail,
    selectsalesorder,
    updatesalesorder,
    insertsalesorder,
    userLength,
  };
};

export default Actions;
