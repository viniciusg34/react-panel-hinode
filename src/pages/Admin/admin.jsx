// Funcionalidades
// import Header from '../../components/Header/Header'
import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";

// CSS
import '../../assets/styles/admin/admin.css'

const Admin = () => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await fetch(
        "https://api.sheetbest.com/sheets/559a46e0-7700-4d87-a153-ac71b989f895"
      );
      const data = await res.json();
      setData(Object.keys(data).map((key) => data[key]));
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="accordion" id="accordionExample">
      {data?.map((item, i) => (
        <div className="accordion-item" key={i}>
          <h2 className="accordion-header" id={`heading${i}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${i}`}
              aria-expanded="true"
              aria-controls={`collapse${i}`}
            >
              {item.date}
            </button>
          </h2>
          <div
            id={`collapse${i}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading${i}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="d-flex justify-content-between align-items-center">
                <span>
                  <strong className="display-6">{item.Nome}</strong> ---{" "}
                  {item.email}
                </span>
                <span>
                  <Link to={`/edit/${i}`} style={{ textDecoration: "none" }}>
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ms-1"
                  >
                    X
                  </button>
                </span>
              </div>
              <p>{item.message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Admin