import { LinearProgress } from "@mui/material";
import Link from "next/link";
import { useList } from "react-firebase-hooks/database";
import { app, getUID } from "../../api_calls/firebase";
import DashboardLayout from "../../components/layout/dashboard";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, query, where, getFirestore } from "firebase/firestore";
import { useState } from "react";
import { geyOrdersByUserId } from "../../api_calls/dashboard/getOrdersByUserId";
import { useEffect } from "react";

function OrdersDashboard() {
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState(null);
  const [error, setError] = useState(null);

  const fetchOrdersByUserId = async () => {
    try {
      const { data } = await geyOrdersByUserId({
        userId: JSON.parse(localStorage.getItem("user"))._id,
      });

      setOrders(data);
      setLoading(false);
    } catch (err) {
      setError(err.data.error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrdersByUserId();
  }, []);

  // const [value, loading, error] = useCollection(
  //     query(collection(getFirestore(app), 'orders'), where('uid', '==', getUID())),
  //     {
  //         snapshotListenOptions: { includeMetadataChanges: true },
  //     }
  // );

  return <>
    <div className="flex flex-col flex-1">
      <div className="p-4 sm:p-8 flex-1">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 hidden sm:block">
            <p className="table-header">Preview</p>
          </div>
          <div className="col-span-12 md:col-span-2 hidden sm:block">
            <p className="table-header">Order Details</p>
          </div>
          <div className="col-span-12 md:col-span-2 hidden sm:block">
            <p className="table-header">Status</p>
          </div>
          <div className="col-span-12 md:col-span-4 hidden sm:block">
            <p className="table-header">Action</p>
          </div>
          <div className="col-span-12 hidden sm:block mt-4">
            <hr className="border border-b border-[#D9D9D9]" />
          </div>
        </div>

        {error && <strong>Error: {error}</strong>}
        {loading && <LinearProgress color="primary" />}
        {!error && !loading && orders && (
          <>
            {orders.map((el) => {
              return <>
                <div className="grid grid-cols-12 mt-4 ">
                  <div className="col-span-12 md:col-span-3 pr-0 sm:pr-12 flex items-center mb-6 sm:mb-0">
                    <img src={el.logoType?.image} className="w-full" />
                  </div>
                  <div className="col-span-12 md:col-span-2 pr-0 sm:pr-8 flex flex-col items-start justify-center mb-6 sm:mb-0">
                    <p className="table-text1 mb-4">{el.orderType}</p>

                    <p className="table-text2">
                      {el.packageType?.name} Package
                    </p>
                    <p className="table-text2 text-sm">
                      {new Date(el.createdAt * 1000).toLocaleString(
                        "en-US",
                        { day: "numeric", month: "long", year: "numeric" },
                      )}
                    </p>
                    <p className="table-text2">{el.price}$</p>
                  </div>
                  <div className="col-span-12 md:col-span-2 flex flex-col items-start justify-center mb-6 sm:mb-0">
                    <p className="table-text1">{el.status}</p>
                  </div>
                  <div className="col-span-12 md:col-span-4 flex flex-row items-center justify-start mb-6 sm:mb-0">
                    <Link href={"/dashboard/premium_order?oid=" + el._id} legacyBehavior>
                      <button className="order-btn bg-orange-600 hover:bg-orange-500 px-3 mr-2 ">
                        View Order
                      </button>
                    </Link>
                    <button className="order-btn bg-[#00B67A] hover:bg-[#1abd87] px-3">
                      Reviews
                    </button>
                  </div>
                  <div className="col-span-12 mt-4 mb-6 sm:mb-0">
                    <hr className="border border-b border-[#D9D9D9]" />
                  </div>
                </div>
              </>;
            })}
          </>
        )}
      </div>
    </div>
  </>;
}

export default OrdersDashboard;
OrdersDashboard.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
