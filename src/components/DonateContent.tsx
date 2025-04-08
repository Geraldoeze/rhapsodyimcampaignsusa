import React from "react";
import ReactApexChart from "react-apexcharts";

const DonateSection = () => {
  const [state] = React.useState({
    series: [20],
    options: {
      chart: {
        height: 350,
        type: "radialBar" as const,
      },
      labels: ["Funded"],
      colors: ["#fff"],
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
          dataLabels: {
            name: {
              show: true,
              fontSize: "16px",
            },
            value: {
              show: true,
              fontSize: "22px",
              fontFamily: "Oswald",
              color: "#fff",
              formatter: (val: any) => `${val}%`,
            },
          },
        },
      },
    },
  });

  return (
    <div className="p-6 max-w-xl mx-auto w-full md:w-[43%]">
      <div className="flex justify-center">
        {/* Donate Button */}
        <button
          style={{ fontFamily: "inherit" }}
          className="bg-gray-900 text-xl text-white mx-auto px-8 py-4 tracking-wider rounded border-2 border-[#d1a018] hover:border-2 hover:border-gray-950 hover:bg-[#d1a018] mb-6"
        >
          DONATE
        </button>
      </div>

      {/* Chart + Info Container */}
      <div className="flex flex-col md:flex-row items-center gap-6  rounded-lg py-6">
        {/* Radial Chart */}
        <div className="w-64 h-52">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="radialBar"
            height={300}
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-[45%]">
          <div className="border-b my-6 flex flex-col items-end">
            <h5 className="text-2xl ">$0.00</h5>
            <h6 className="text-lg my-2">Donated</h6>
          </div>
          <div className="border-b my-6 flex flex-col items-end">
            <h5 className="text-2xl">$1,000,000.00</h5>
            <h6 className="text-lg my-3">Goal</h6>
          </div>
        </div>
      </div>
      <div className="border-b my-1 w-full md:w-8/12 ml-auto flex flex-col items-end">
        <h5 className="text-2xl">0</h5>
        <h6 className="my-2 text-lg">Donors</h6>
      </div>
    </div>
  );
};

export default DonateSection;
