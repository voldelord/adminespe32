import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React from "react";
import { FiRefreshCcw } from "react-icons/fi"; // Import the refresh icon from react-icons

const CardConexions = () => {
  return (
    <div className="bg-white rounded-md shadow-lg p-10 w-auto relative">
      <div className="text-xl font-bold mb-4">Deployments</div>

      <div className="grid grid-cols-4 gap-4">
        {" "}
        {/* Changed from grid-cols-2 to grid-cols-4 */}
        <div>
          <div className="text-lg font-semibold mb-2">Sessions</div>
          <div className="text-3xl font-semibold">0</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Total TPS</div>
          <div className="text-3xl font-semibold">0</div>
          <div className="text-sm">per second</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Total messages sent</div>
          <div className="text-3xl font-semibold">0</div>
          <div className="text-sm">per second</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">
            Total messages received
          </div>
          <div className="text-3xl font-semibold">0</div>
          <div className="text-sm">per second</div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {" "}
        {/* Changed from grid-cols-2 to grid-cols-4 */}
        <div>
          <div className="text-lg font-semibold mb-2">Retained messages</div>
          <div className="text-3xl font-semibold">0</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Topics</div>
          <div className="text-3xl font-semibold">0</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Subscriptions</div>
          <div className="text-3xl font-semibold">0</div>
        </div>
        <div>
          <div className="text-lg font-semibold mb-2">Shared subscriptions</div>
          <div className="text-3xl font-semibold">0</div>
        </div>
      </div>

      {/* Refresh icon in the top-right corner */}
      <div className="absolute top-0 right-0 m-3">
        <FiRefreshCcw
          className="h-6 w-6 cursor-pointer text-gray-500 hover:text-gray-800"
          onClick={() => {
            // Add your refresh logic here
          }}
        />
      </div>
    </div>
  );
};

export default CardConexions;
