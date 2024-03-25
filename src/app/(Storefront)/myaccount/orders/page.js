const MyOrder = () => {
  return (
    <div className="container p-4 mx-auto bg-white">
      <div className="flex items-center justify-between p-4 bg-white">
        <input
          type="text"
          placeholder="Type a command for search"
          className="w-full p-2 border border-gray-300 rounded-log"
        />
        <button className="px-4 py-2 text-white bg-black rounded-md">
          Search
        </button>
      </div>

      <div className="p-4 bg-white">
        <div className="mb-4">
          <h3 className="mb-2 font-semibold">Order Status</h3>
          <div className="space-y-2">
            <div>
              <input type="checkbox" id="shipped" />{" "}
              <label htmlFor="shipped">Shipped</label>
            </div>
            <div>
              <input type="checkbox" id="delivered" />{" "}
              <label htmlFor="delivered">Delivered</label>
            </div>
            <div>
              <input type="checkbox" id="cancelled" />{" "}
              <label htmlFor="cancelled">Cancelled</label>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mb-2 font-semibold">Order Time</h3>
      <div className="space-y-2">
        <div>
          <input type="checkbox" id="last30days" />
          <label htmlFor="last30days" className="ml-2">
            Last 30 days
          </label>
        </div>
        <div>
          <input type="checkbox" id="last3months" />
          <label htmlFor="last3months" className="ml-2">
            Last 3 months
          </label>
        </div>
        <div>
          <input type="checkbox" id="year2023" />
          <label htmlFor="year2023" className="ml-2">
            2023
          </label>
        </div>
        <div>
          <input type="checkbox" id="year2022" />
          <label htmlFor="year2022" className="ml-2">
            2022
          </label>
        </div>
      </div>

      <div className="pb-4 mb-4 border-b">
        <h3 className="mb-2 font-semibold"> Headphones 121</h3>
        <p className="text-gray-400">Colour:Black </p>
        <p className="text-gray-400"> Quantity: 1</p>
        <p className="font-semibold">£200</p>
        <p>Delivered on Mar 1, 2024</p>
        <p>Your item has been delivered</p>
      </div>
    </div>
  );
};

export default MyOrder;
