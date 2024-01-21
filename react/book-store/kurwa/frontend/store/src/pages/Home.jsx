import React, {useState,useEffect} from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox,MdOutlineDelete} from "react-icons/md";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
import Spinner from "../components/Spinner";

const Home = () => {
  const [antiques, setAntiques] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5500/store")
      .then((response) => {
        setAntiques(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <h1 className="text-3xl my-8"> Antique List </h1>
        <Link to="/store/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <table className="w_full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No </th>
              <th className="border border-slate-600 rounded-md">Name </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Origin{" "}
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                price{" "}
              </th>
              <th className="border border-slate-600 rounded-md ">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {antiques.map((antique, index) => (
              <tr key={antique._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>

                <td className="border border-slate-700 rounded-md text-center">
                  {antique.itemName}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {antique.origin}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {antique.price}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/store/details/${antique._id}`}>
                      <BsInfoCircle className="text-2xl text-green-800" />
                    </Link>
                    <Link to={`/store/edit/${antique._id}`}>
                      <AiOutlineDelete className="text-2xl text-yellow-600" />
                    </Link>
                    <Link to={`/store/delete/${antique._id}`}>
                      <MdOutlineDelete className="text-2xl text-red-600" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
