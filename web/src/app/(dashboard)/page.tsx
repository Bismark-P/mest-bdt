export default function Dashboard() {
  return (
    <>
      <div className="px-4 sm:px-8 py-6 min-h-screen bg-gray-100 dark:bg-[#0b0c10] text-gray-900 dark:text-white transition-colors duration-300">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold">Dashboard Overview</h1>
          <span className="text-gray-500 dark:text-gray-400 text-sm mt-1 sm:mt-0">
            November 2025
          </span>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-10">
          <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow bg-white dark:bg-[#1a1d24]">
            <h3 className="text-xs sm:text-sm mb-1 sm:mb-2 text-gray-600 dark:text-gray-400">
              Total Programs
            </h3>
            <p className="text-2xl sm:text-3xl font-bold">12</p>
            <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm mt-1 sm:mt-2 block">
              +8%
            </span>
          </div>

          <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow bg-white dark:bg-[#1a1d24]">
            <h3 className="text-xs sm:text-sm mb-1 sm:mb-2 text-gray-600 dark:text-gray-400">
              Total Cohorts
            </h3>
            <p className="text-2xl sm:text-3xl font-bold">7</p>
            <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm mt-1 sm:mt-2 block">
              +5%
            </span>
          </div>

          <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow bg-white dark:bg-[#1a1d24]">
            <h3 className="text-xs sm:text-sm mb-1 sm:mb-2 text-gray-600 dark:text-gray-400">
              Active Programs
            </h3>
            <p className="text-2xl sm:text-3xl font-bold">4</p>
            <span className="text-yellow-600 dark:text-yellow-400 text-xs sm:text-sm mt-1 sm:mt-2 block">
              Pending
            </span>
          </div>

          <div className="p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow bg-white dark:bg-[#1a1d24]">
            <h3 className="text-xs sm:text-sm mb-1 sm:mb-2 text-gray-600 dark:text-gray-400">
              Upcoming Cohorts
            </h3>
            <p className="text-2xl sm:text-3xl font-bold">3</p>
            <span className="text-green-600 dark:text-green-400 text-xs sm:text-sm mt-1 sm:mt-2 block">
              +2%
            </span>
          </div>
        </div>

        {/* Program Performance */}
        <section className="p-4 sm:p-6 bg-white dark:bg-[#1a1d24] rounded-xl sm:rounded-2xl shadow mb-8 sm:mb-10">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-200">
              Program Performance
            </h2>
            <button className="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-lg">
              View Report
            </button>
          </div>

          {/* Bar Chart */}
          <div className="h-48 sm:h-64 flex items-end justify-around gap-2 sm:gap-4 p-3 sm:p-4 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl bg-gray-50 dark:bg-[#111317]">
            <div className="flex flex-col items-center">
              <div
                className="w-4 sm:w-6 bg-blue-500 dark:bg-blue-400 rounded-md"
                style={{ height: "100px" }}
              ></div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-gray-600 dark:text-gray-400">
                Jan
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-4 sm:w-6 bg-green-500 dark:bg-green-400 rounded-md"
                style={{ height: "140px" }}
              ></div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-gray-600 dark:text-gray-400">
                Feb
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-4 sm:w-6 bg-yellow-500 dark:bg-yellow-400 rounded-md"
                style={{ height: "120px" }}
              ></div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-gray-600 dark:text-gray-400">
                Mar
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-4 sm:w-6 bg-purple-500 dark:bg-purple-400 rounded-md"
                style={{ height: "80px" }}
              ></div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-gray-600 dark:text-gray-400">
                Apr
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div
                className="w-4 sm:w-6 bg-pink-500 dark:bg-pink-400 rounded-md"
                style={{ height: "130px" }}
              ></div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-gray-600 dark:text-gray-400">
                May
              </span>
            </div>
          </div>
        </section>

        {/* Recent Activities */}
        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow bg-white dark:bg-[#1a1d24]">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 dark:text-gray-200 text-gray-700">
            Recent Activities
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm">
              <thead>
                <tr className="text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                  <th className="py-2 text-left">Action</th>
                  <th className="py-2 text-left">Date</th>
                  <th className="py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="py-3">Created “Tech for Growth” Program</td>
                  <td className="py-3">Nov 5, 2025</td>
                  <td className="py-3 text-green-600 dark:text-green-400">
                    Success
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <td className="py-3">Added “MEST Cohort 2025”</td>
                  <td className="py-3">Nov 3, 2025</td>
                  <td className="py-3 text-green-600 dark:text-green-400">
                    Success
                  </td>
                </tr>
                <tr>
                  <td className="py-3">Updated “Startup Accelerator”</td>
                  <td className="py-3">Nov 1, 2025</td>
                  <td className="py-3 text-yellow-600 dark:text-yellow-400">
                    Pending
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
